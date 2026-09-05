import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const root = new URL("../", import.meta.url);
const destination = new URL(".impeccable/review/", root);
await mkdir(destination, { recursive: true });
let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined,
  });
} catch {
  browser = await chromium.launch({ channel: "chrome" });
}
const result = { widths: [], projects: [], errors: [], checks: [] };
const names = [
  "Google For Education",
  "Criatto Lab",
  "Geração Líder",
  "Além do Vest",
  "Pod Criar",
];
const ids = ["google", "criatto", "geracao", "vest", "pod"];
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const source = (
  await readFile(new URL(".project/source/original.html", root), "utf8")
).replace(/<!--[\s\S]*?-->/g, "");
const paragraphs = [...source.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)]
  .map((m) => normalize(m[1]))
  .filter((text) => text && !text.includes("<") && !/Vivamus|Fusce/.test(text));
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => result.errors.push(error.message));
  await page.goto("http://127.0.0.1:4321/");
  await page.evaluate(() => document.fonts.ready);
  const allText = normalize(await page.locator("body").textContent());
  for (const paragraph of paragraphs)
    assert.ok(
      allText.includes(paragraph),
      `Texto original ausente: ${paragraph}`,
    );
  result.checks.push(`${paragraphs.length} parágrafos originais preservados`);
  const links = await page
    .locator("a")
    .evaluateAll((items) => items.map((a) => a.getAttribute("href")));
  for (const match of source.matchAll(/href="(https?:\/\/[^\"]+)"/g)) {
    const original = match[1];
    if (original.includes("api.whatsapp.com")) {
      const actual = new URL(
        links.find((href) => href?.includes("api.whatsapp.com")),
      );
      assert.equal(
        actual.searchParams.get("text"),
        new URL(original).searchParams.get("text"),
      );
    } else
      assert.ok(links.includes(original), `Link original ausente: ${original}`);
  }
  result.checks.push(
    "Destinos externos e mensagem original de WhatsApp preservados; nenhum envio",
  );
  for (let i = 0; i < names.length; i++) {
    await page.getByRole("tab", { name: names[i], exact: true }).click();
    assert.equal(await page.locator(".project:not([hidden])").count(), 1);
    assert.ok(await page.locator(`#project-${ids[i]}`).isVisible());
    await page.locator(`#project-${ids[i]} img`).evaluate(async (img) => {
      img.loading = "eager";
      await img.decode();
    });
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      scan.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
      `Acessibilidade: ${names[i]}`,
    );
    result.projects.push(names[i]);
  }
  await page.getByRole("tab", { name: names[0], exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  assert.equal(
    await page
      .getByRole("tab", { name: names[1], exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.keyboard.press("End");
  assert.equal(
    await page
      .getByRole("tab", { name: names[4], exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.keyboard.press("Home");
  result.checks.push("Navegação das abas por setas, Home e End");
  for (const width of [1440, 768, 390, 360]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(async () => {
      document
        .querySelectorAll("img")
        .forEach((img) => (img.loading = "eager"));
      await Promise.all(
        [...document.images].map((img) => img.decode().catch(() => null)),
      );
    });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow em ${width}`,
    );
    assert.deepEqual(
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs
            .filter((img) => !img.complete || img.naturalWidth === 0)
            .map((img) => img.src),
        ),
      [],
    );
    if (width < 768) {
      await page.getByRole("button", { name: "Menu", exact: true }).click();
      assert.ok(await page.locator("#navigation").isVisible());
      await page.keyboard.press("Escape");
      assert.equal(await page.locator("#navigation").isVisible(), false);
      for (const id of ids) {
        const panel = page.locator(`#project-${id}`);
        if (!((await panel.getAttribute("open")) !== null))
          await panel.locator("summary").click();
        assert.ok(await panel.locator(".project-copy p").isVisible());
      }
      for (const id of ids.slice(1))
        await page
          .locator(`#project-${id}`)
          .evaluate((panel) => (panel.open = false));
    }
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      scan.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
      `Acessibilidade: ${width}`,
    );
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: new URL(
        `${width === 1440 ? "desktop" : width === 390 ? "mobile" : width}.png`,
        destination,
      ).pathname.replace(/^\/(.:)/, "$1"),
      fullPage: true,
    });
    result.widths.push({
      width,
      overflow: false,
      axeViolations: 0,
      imagesLoaded: true,
    });
  }
  const plain = await browser.newPage({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  await plain.goto("http://127.0.0.1:4321/");
  assert.equal(await plain.locator(".project[open]").count(), 5);
  assert.ok(await plain.locator("#navigation").isVisible());
  for (const id of ids)
    assert.ok(
      await plain.locator(`#project-${id} .project-copy p`).isVisible(),
    );
  result.checks.push(
    "Sem JavaScript: navegação e cinco descrições disponíveis",
  );
  assert.deepEqual(result.errors, []);
  await writeFile(
    new URL("verification.json", destination),
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
