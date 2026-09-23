# Fontes locais

`fraunces-72-soft50-normal.woff2` e `fraunces-72-soft50-italic.woff2` são instâncias da **Fraunces** (Undercase Type, licença SIL Open Font License 1.1 — uso e redistribuição livres em sites) geradas pela API do Google Fonts em 23/09/2026, subconjunto latino:

```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,72,500..700,50,0;1,72,500..700,50,1
```

- Eixos fixados: `opsz` 72, `SOFT` 50, `WONK` 0 (romano) / 1 (itálico). Só o peso (`wght`) continua variável.
- Por quê: com todos os eixos variáveis a família pesa 271 KB; fixada, 82 KB (romano + itálico). Ver `docs/etapa-1/proposta.md` §3.2.
- Para trocar a instância, gere a URL acima com outros valores, baixe o bloco `/* latin */` de cada estilo e substitua os arquivos mantendo os nomes (ou ajuste `app/fonts.ts`).

A **Manrope** vem de `next/font/google` (auto-hospedada no build), sem arquivo aqui.
