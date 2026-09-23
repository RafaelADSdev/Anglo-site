# Site do Colégio Anglo Líder Tamarineira

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Motion. Deploy previsto na Vercel.

> Em construção — etapas 2 (design system), 3 (Home) e 4 (páginas internas) entregues. O README completo (como trocar fotos, virar o ano, publicar) sai na etapa 6.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (inclui checagem de tipos)
npm run lint
npm run format     # Prettier (ordena as classes do Tailwind)
```

Variáveis: copie `.env.example` para `.env.local`. Sem configurar nada, o site roda em **homologação** (`noindex`, `robots.txt` bloqueando tudo, faixa amarela no topo e marcadores "A confirmar" visíveis).

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home |
| `/a-escola` | Proposta pedagógica (o campo azul da página), os quatro segmentos em régua, projetos |
| `/segmentos` | Os quatro segmentos e a tabela "data de nascimento → série" (provisória) |
| `/segmentos/[slug]` | `educacao-infantil`, `fundamental-1`, `fundamental-2`, `ensino-medio` — topo na cor do segmento |
| `/projetos` | Um projeto por seção; a âncora é o id (`/projetos#criatto-lab`) |
| `/estrutura` | Vídeo, espaços dos projetos e demais ambientes (âncoras iguais às dos projetos) |
| `/matriculas` | Formulário (`#agendar`, aceita `?segmento=<slug>`), passos, documentos, dúvidas (`#duvidas`) |
| `/contato` | Canais, endereço e horário |
| `/privacidade` | Texto-base da política (LGPD) — depende de revisão jurídica |
| `/robots.txt`, `/sitemap.xml` | Gerados por `app/robots.ts` e `app/sitemap.ts` |

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Nome, ano da campanha, contatos, redes, vídeo, dados da política de privacidade | `site.config.ts` |
| Textos da Home | `content/home.ts` |
| Textos das páginas internas | `content/paginas.ts` |
| Segmentos (e o conteúdo de cada página de segmento) | `content/segmentos.ts` |
| Projetos, ambientes, dúvidas, passos da matrícula | `content/projetos.ts`, `content/estrutura.ts`, `content/faq.ts`, `content/matricula.ts` |
| Tabela "Encontre a série" (provisória) | `content/series.ts` |
| Formulário: validação e envio | `lib/lead.ts`, `app/matriculas/actions.ts` |
| Cores, tipografia, espaçamentos | `app/globals.css` (`@theme`) e `DESIGN.md` |
| Fontes (Fraunces instanciada + Manrope) | `app/fonts.ts`, `app/fonts/README.md` |
| Componentes | `components/ui`, `components/blocks`, `components/layout`, `components/home` |
| Vitrine dos componentes (só em homologação) | `/design-system` |

## Regra de conteúdo

Nada é inventado. Dado que a escola ainda não confirmou vira `aConfirmar('o que falta')` (ver `lib/pending.ts`) e entra na lista de `PENDENCIAS.md`. Em homologação ele aparece com o marcador amarelo; em produção, o bloco que depende dele não aparece. Fotos seguem a mesma regra: sem foto real, homologação mostra o espaço reservado com a descrição; produção mostra só fotos reais.

## Virar o ano da matrícula

Mude `anoMatricula` em `site.config.ts`. A linha "Matrículas 2027 abertas" do hero, os títulos e metadados de Matrículas, as mensagens do WhatsApp, o "Encontre a série" e a tabela de séries acompanham.
