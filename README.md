# Site do Colégio Anglo Líder Tamarineira

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Motion. Deploy previsto na Vercel.

> Em construção — etapas 2 (design system) e 3 (Home) entregues. O README completo (como trocar fotos, virar o ano, publicar) sai na etapa 6.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (inclui checagem de tipos)
npm run lint
npm run format     # Prettier (ordena as classes do Tailwind)
```

Variáveis: copie `.env.example` para `.env.local`. Sem configurar nada, o site roda em **homologação** (`noindex`, faixa amarela no topo e marcadores "A confirmar" visíveis).

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Nome, ano da campanha, contatos, redes, vídeo | `site.config.ts` |
| Textos da Home | `content/home.ts` |
| Segmentos, projetos, dúvidas, passos da matrícula | `content/*.ts` |
| Tabela "Encontre a série" (provisória) | `content/series.ts` |
| Cores, tipografia, espaçamentos | `app/globals.css` (`@theme`) |
| Fontes (Fraunces instanciada + Manrope) | `app/fonts.ts`, `app/fonts/README.md` |
| Componentes | `components/ui`, `components/blocks`, `components/layout`, `components/home` |
| Vitrine dos componentes (só em homologação) | `/design-system` |

## Regra de conteúdo

Nada é inventado. Dado que a escola ainda não confirmou vira `aConfirmar('o que falta')` (ver `lib/pending.ts`) e entra na lista de `PENDENCIAS.md`. Em homologação ele aparece com o marcador amarelo; em produção, o bloco que depende dele não aparece.

## Virar o ano da matrícula

Mude `anoMatricula` em `site.config.ts`. A linha "Matrículas 2027 abertas" do hero, as mensagens do WhatsApp e o "Encontre a série" acompanham.
