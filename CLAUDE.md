@AGENTS.md

# Projeto: site do Colégio Anglo Líder Tamarineira

- Briefing (fonte da verdade do escopo): `docs/briefing.md`. Proposta aprovada da etapa 1: `docs/etapa-1/proposta.md`.
- Produto e público: `PRODUCT.md`. Pendências da escola: `PENDENCIAS.md` — **nada ali entra inventado**.
- Conteúdo pendente usa `aConfirmar('...')` (`lib/pending.ts`): aparece marcado em homologação e some em produção.
- Textos ficam em `content/`; nome, ano da campanha, contatos e redes em `site.config.ts`. O ano da matrícula muda só lá.
- Tokens de design em `app/globals.css` (`@theme`); a paleta padrão do Tailwind foi zerada. Não usar cores fora dos tokens.
- Rodar `npm run lint`, `npm run build` e `npm run format` antes de entregar.
