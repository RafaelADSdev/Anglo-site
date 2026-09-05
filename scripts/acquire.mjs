import { mkdir, writeFile } from "node:fs/promises";
const base = "https://colegioanglotamarineira.com.br/";
await mkdir("public/images", { recursive: true });
await mkdir("src/assets", { recursive: true });
await mkdir(".project/source", { recursive: true });
const html = await (await fetch(base)).text();
await writeFile(".project/source/original.html", html);
const active = html.replace(/<!--[\s\S]*?-->/g, "");
const paths = [
  ...new Set(
    [...active.matchAll(/<img[^>]*src="(img\/[^\"]+)"/g)].map((m) => m[1]),
  ),
];
paths.push("img/slide2_2026.png");
for (const path of paths) {
  if (path.endsWith("activity5.jpg")) continue;
  const response = await fetch(new URL(path, base));
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  const name = path.slice(4).normalize("NFC");
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(`public/images/${name}`, bytes);
  await writeFile(`src/assets/${name}`, bytes);
  console.log(name);
}
for (const path of ["styles/maincolors.css", "css/style.css"]) {
  await writeFile(
    `.project/source/${path.split("/").at(-1)}`,
    await (await fetch(new URL(path, base))).text(),
  );
}
