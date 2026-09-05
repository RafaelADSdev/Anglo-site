# Colégio Anglo Tamarineira

Nova versão institucional em Astro, com a identidade, imagens e conteúdo do site original. Versão local de avaliação, com `noindex, nofollow`; não publicada no domínio do colégio.

## Executar

Requer Node.js 22.12+ (validado com Node 24).

```sh
npm install
npm run dev
```

Abra http://127.0.0.1:4321. No Astro 7 o servidor pode permanecer em segundo plano. Para pará-lo: `npx astro dev stop`.

```sh
npm run build
npm run preview
```

O build estático fica em `dist/`. Não precisa de banco de dados ou variáveis de ambiente.

## Conteúdo e acervo

- `src/data/content.ts`: textos integrais dos quatro segmentos, cinco projetos e mensagem de WhatsApp.
- `src/assets/`: originais importados pelo Astro; `SchoolImage.astro` gera WebP responsivo sem alterar a composição.
- `public/images/`: cópias dos originais para referência.
- `.project/source/`: HTML e CSS originais capturados em 05/09/2026.
- `.project/BRIEF.md`: direção aprovada e pendências editoriais.

As fontes Alegreya Sans e Lato são carregadas pelo Google Fonts. O vídeo abre no YouTube. Contatos abrem no WhatsApp; o site não envia mensagens automaticamente. Não foi copiado o rastreamento Google Tag Manager do site original para esta apresentação.

## Verificação

Com o servidor ativo:

```sh
npx playwright install chromium
node scripts/verify.mjs
```

Se um Chromium já estiver instalado, indique seu executável em `PLAYWRIGHT_EXECUTABLE_PATH`. O script verifica conteúdo, destinos dos links, cinco abas, teclado, expansores móveis, menu, imagens, acessibilidade WCAG AA e overflow em 360, 390, 768 e 1440px. Também verifica leitura sem JavaScript. Relatório e capturas ficam em `.impeccable/review/` (não versionados).

## Antes de publicar

Revisar com o colégio a mensagem de matrícula 2024, créditos 2023, domínio legado no rodapé e erros de digitação preservados. Confirmar a campanha do banner. Após aceite editorial e visual, configurar URL canônica e indexação para o domínio escolhido. A versão atual não modifica o site público.
