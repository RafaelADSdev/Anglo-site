---
name: Colégio Anglo Líder Tamarineira
description: "Site institucional editorial, caloroso e confiante: papel quente, tinta azul-noite, azul Anglo como única cor de ação e o friso tricolor da gola do uniforme."
colors:
  brand-blue: "#00279b"
  brand-blue-hover: "#001a81"
  brand-yellow: "#fcfa03"
  brand-red: "#db2c1b"
  paper: "#fbf8f1"
  paper-2: "#f3ede1"
  surface: "#fffdf9"
  ink: "#121d38"
  ink-muted: "#4f586c"
  line: "#e4dfd5"
  field: "#868073"
  on-ink-muted: "#bbc4d8"
  white: "#fff"
  infantil: "#fcfa03"
  infantil-soft: "#f9f6bc"
  infantil-ink: "#6d5900"
  fund1: "#db2c1b"
  fund1-soft: "#ffddd5"
  fund1-ink: "#af2d1b"
  fund2: "#036ea9"
  fund2-soft: "#d3ecf9"
  fund2-ink: "#09659f"
  medio: "#00279b"
  medio-soft: "#d8defa"
  medio-ink: "#00279b"
  whatsapp: "#128c7e"
  whatsapp-ink: "#075e54"
  error: "#b3241f"
  success: "#21763c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.9vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.18
  step:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 2rem + 2vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1
  h4:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
  lead:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 450
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)"
    fontWeight: 450
    lineHeight: 1.6
  small:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 450
    lineHeight: 1.5
  caption:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 450
    lineHeight: 1.45
  label:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
  eyebrow:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.12em"
  tag:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    letterSpacing: "0.08em"
  button:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "14px"
  lg: "24px"
  full: "9999px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.7vw, 2.5rem)"
  section-y: "clamp(4rem, 2.8rem + 5.3vw, 8rem)"
  container: "75rem"
  grid-gap: "32px"
  card-gap: "16px"
  eyebrow-title: "16px"
  title-intro: "20px"
  head-content: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-blue-hover}"
  button-primary-sm:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "0 18px"
    height: "44px"
  button-yellow:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-yellow-hover:
    backgroundColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.paper-2}"
  link-arrow:
    textColor: "{colors.ink}"
    height: "44px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "48px"
  segment-tag-infantil:
    backgroundColor: "{colors.infantil-soft}"
    textColor: "{colors.infantil-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
  segment-tag-fund1:
    backgroundColor: "{colors.fund1-soft}"
    textColor: "{colors.fund1-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
  segment-tag-fund2:
    backgroundColor: "{colors.fund2-soft}"
    textColor: "{colors.fund2-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
  segment-tag-medio:
    backgroundColor: "{colors.medio-soft}"
    textColor: "{colors.medio-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
  choice-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  choice-chip-checked:
    backgroundColor: "{colors.medio-soft}"
  tab-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  tab-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  section-head:
    textColor: "{colors.ink}"
    typography: "{typography.h2}"
    width: "42rem"
  segment-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "32px 24px 24px"
  series-finder:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "28px 20px 20px"
  lead-form:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "24px"
  cta-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "28px"
  photo-placeholder:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.lg}"
  pending-marker:
    backgroundColor: "{colors.infantil-soft}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: "2px 6px"
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "64px"
  header-lg:
    height: "80px"
  section-areia:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  section-azul:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.white}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  whatsapp-fab:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "56px"
  page-hero:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  breadcrumbs:
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    height: "44px"
  series-table:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  channel-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "24px"
---

<!-- Registrado a partir do código entregue (Home + layout compartilhado) em 23/09/2026; páginas internas (etapa 4) acrescentadas no mesmo dia. Fonte da verdade dos tokens: app/globals.css (@theme). Espécime vivo: /design-system (só em homologação). Extensões (rampas tonais, sombra, movimento, breakpoints, snippets): .impeccable/design.json. Os títulos de seção e os rótulos estruturais ficam em inglês porque as ferramentas do formato DESIGN.md dependem deles; o conteúdo é em português. -->

# Design System: Colégio Anglo Líder Tamarineira

## Overview

**Creative North Star: "Papel, tinta e a gola do uniforme"**

O site é uma página editorial impressa em papel quente, escrita em tinta azul-noite e costurada por um único ornamento: o friso tricolor da gola do uniforme, azul, amarelo e vermelho em 2 : 1 : 1, a ordem das pinceladas do logo. Todo o resto é contido: uma cor de ação (o azul Anglo), uma sombra, quatro raios, duas famílias tipográficas. O caráter, na frase do briefing, é editorial, caloroso e confiante: acolhedor para uma família com criança de 1 ano, sério para quem se prepara para o vestibular.

A identidade se organiza pela trajetória da criança, "do primeiro passo ao vestibular" (proposta aprovada em 23/09/2026). A paleta amadurece com ela: amarelo na Educação Infantil, vermelho no Fundamental 1, azul-claro no Fundamental 2, azul Anglo no Ensino Médio; do quente ao sério, só com as cores do logo. A densidade é de revista, não de portal: seções com 64 a 128 px de respiro, títulos grandes em Fraunces com a segunda batida em itálico, texto em Manrope num corpo de 17 a 18 px.

O movimento é discreto e tem gramática própria: 150 ms para hover e pressão, 250 ms para o que abre e fecha, 600 ms para a revelação ao rolar (opacidade e 12 px de subida, uma vez, escalonada em 60 ms, só abaixo da dobra), sempre na curva `ease-out-soft`. O hero nunca espera animação, todo o conteúdo aparece sem JavaScript e `prefers-reduced-motion` desliga todo deslocamento. A honestidade também é visual: conteúdo pendente, foto que ainda não existe e logo que não chegou têm estados próprios, e nada é preenchido com imagem de banco. Rejeições confirmadas pelo briefing (§6): foto de banco ou gerada por IA representando alunos, professores ou a estrutura; carrossel automático; parallax pesado; preto puro no texto.

**Key Characteristics:**
- Fundo off-white quente e texto azul-noite, nunca preto (fixado pelo briefing §6).
- Azul Anglo como única cor de ação; o amarelo só age sobre o campo azul.
- O friso tricolor da gola do uniforme como único ornamento, sempre em lugares fixos.
- Fraunces nos títulos e Manrope no texto (fixados pelo briefing §6), a Fraunces numa instância fixa opsz 72 · SOFT 50.
- Eyebrow com o traço do friso acima de todo título de seção; títulos em duas batidas quando há duas frases ou um arremate (fixado pelo briefing §5).
- Plano por padrão: cards com borda de 1 px e uma única sombra para o que flutua.
- Setas em SVG que dizem o destino: → ação no site, ↓ rolar, ↗ sair do site (fixado pelo briefing §5).
- Estados honestos: "A confirmar:" só em homologação; placeholder de foto na proporção final.

## Colors

Paleta contida, com acento forte: papel e tinta ocupam quase toda a página, o azul Anglo age e as cores dos segmentos só orientam. A paleta padrão do Tailwind foi zerada (`--color-*: initial` em `app/globals.css`): só existem as cores abaixo. As cores de marca foram medidas pixel a pixel no logo em uso; o manual oficial do Sistema Anglo prevalece quando chegar.

### Primary
- **Azul Anglo** (#00279b · `brand-blue`): a cor de ação. Fundo do botão primário, setas dos links, sublinhado do menu, anel de foco, `accent-color` e `caret-color` dos campos, segunda batida em itálico dos títulos, numerais de passo. É também o fundo do campo azul (uma seção de largura total por página) e a base do Ensino Médio. Branco sobre ele: 11,9:1. Azul, e não vermelho, porque é a pincelada dominante do logo, aguenta texto branco com folga (o vermelho daria 4,8:1) e convive com o verde do WhatsApp.
- **Azul Anglo profundo** (#001a81 · `brand-blue-hover`): só o hover do botão primário.

### Secondary
- **Amarelo** (#fcfa03 · `brand-yellow`): o acento que pertence ao azul. Sobre o campo azul, vira o botão amarelo, a segunda batida do título, os numerais, a seta do link e o anel de foco (10,7:1 sobre o azul). Sobre fundo claro, nunca é texto: aparece no friso, no ponto da Educação Infantil e no realce de seleção de texto (`::selection`, com tinta por cima, 15,0:1).

### Tertiary
- **Vermelho** (#db2c1b · `brand-red`): o terço final do friso e a base do Fundamental 1, nada mais. Sobre o papel dá 4,51:1 (passa raspando): texto vermelho usa `fund1-ink`.

### Neutral
- **Papel** (#fbf8f1 · `paper`): fundo da página, do cabeçalho e do menu do celular; também o `theme-color` do navegador. O fundo off-white quente foi fixado pelo briefing (§6); por isso o detector ignora `cream-palette` (`.impeccable/config.json`).
- **Areia** (#f3ede1 · `paper-2`): seções alternadas (Estrutura, Dúvidas), placeholder de foto sobre o papel, hover do botão de contorno, trilho da barra de rolagem.
- **Superfície** (#fffdf9 · `surface`): cards, painéis, campos e chips, tudo o que se apoia sobre o papel.
- **Tinta** (#121d38 · `ink`): texto (15,7:1 no papel), azul-noite em vez de preto; fundo do rodapé (branco sobre ela: 16,7:1) e da aba selecionada no celular; tom da sombra.
- **Tinta suave** (#4f586c · `ink-muted`): leads, microcopy, legendas e texto de apoio (6,7:1 no papel).
- **Linha** (#e4dfd5 · `line`): divisórias e a borda de 1 px de cards, chips de aba e botões redondos.
- **Borda de campo** (#868073 · `field`): borda de inputs, selects e chips de escolha, 3,7:1 no papel (WCAG 1.4.11); também a alça da barra de rolagem.
- **Névoa** (#bbc4d8 · `on-ink-muted`): texto secundário e títulos de coluna sobre a tinta, no rodapé (9,5:1).
- **Branco** (#fff · `white`): texto sobre o azul e a tinta; hover do botão amarelo. Nunca é fundo de página.

### Segmentos
Cada segmento tem três tons: base (a cor do logo), suave (fundo) e tinta (texto e ícone, com 4,5:1 ou mais sobre o suave e sobre o papel).
- **Educação Infantil**: base #fcfa03 (`infantil`) · suave #f9f6bc (`infantil-soft`) · tinta #6d5900 (`infantil-ink`, 6,2:1).
- **Fundamental 1**: base #db2c1b (`fund1`) · suave #ffddd5 (`fund1-soft`) · tinta #af2d1b (`fund1-ink`, 5,2:1).
- **Fundamental 2**: base #036ea9 (`fund2`, o azul-claro do degradê do logo) · suave #d3ecf9 (`fund2-soft`) · tinta #09659f (`fund2-ink`, 5,1:1).
- **Ensino Médio**: base #00279b (`medio`) · suave #d8defa (`medio-soft`) · tinta #00279b (`medio-ink`, 8,9:1).

As bases aparecem no traço de 32 × 2 px que abre cada coluna de segmento, na régua do percurso e no ponto de 10 px da etiqueta; os suaves, no fundo da etiqueta, do resultado do "Encontre a série" e do topo da página do próprio segmento; as tintas, no texto da etiqueta, na faixa etária, na seta do card e, na página do segmento, na segunda batida do H1 e na régua de séries. Dois suaves têm um segundo uso, funcional: `infantil-soft` é o fundo do marcador "A confirmar:" e da faixa de homologação; `medio-soft`, o do botão "+" do FAQ e do chip de escolha marcado; `fund1-soft` ficou sem segundo uso quando o formulário saiu.

### Funcionais
- **WhatsApp** (#128c7e · `whatsapp`): só o botão flutuante, com ícone branco (4,1:1, acima dos 3:1 exigidos para objeto gráfico). É o verde-azulado oficial; o verde claro #25D366 dá 2:1 com branco e reprova.
- **WhatsApp escuro** (#075e54 · `whatsapp-ink`): o ícone do WhatsApp dentro de botões de contorno e o fundo do botão "Agendar visita pelo WhatsApp" (branco sobre ele: 7,7:1).
- **WhatsApp profundo** (#05473f · `whatsapp-ink-hover`): só o hover desse botão.
- **Erro** (#b3241f · `error`): borda e mensagem de campo inválido (6,2:1).
- **Sucesso** (#21763c · `success`): reservado (5,3:1); era o círculo da confirmação do formulário, que saiu.

### Named Rules
**A Regra da Cor Única de Ação.** Todo botão preenchido é azul Anglo, e o azul marca o que responde ao toque: seta, sublinhado ativo, foco. Links de texto ficam em tinta e ganham o azul no sublinhado ao passar o mouse. Sobre o campo azul, o amarelo assume esse papel. As exceções são funcionais e verdes: o botão flutuante do WhatsApp e o "Agendar visita pelo WhatsApp" do bloco de agendamento, que precisa se distinguir do "Falar no WhatsApp" (contorno).

**A Regra do Campo Azul Único.** No máximo uma seção de largura total em azul Anglo por página (na Home e em A Escola, a Proposta; as outras páginas não têm). É o único lugar onde existe botão amarelo.

**A Regra da Paleta que Amadurece.** Os segmentos aparecem sempre na ordem amarelo → vermelho → azul-claro → azul Anglo e só orientam: nunca preenchem botão. A cor nunca é a única pista (toda etiqueta escreve o nome do segmento), e texto na cor de um segmento usa o tom `-ink`, nunca a base.

## Typography

**Display Font:** Fraunces (com Georgia, 'Times New Roman', serif)
**Body Font:** Manrope (com system-ui, -apple-system, 'Segoe UI', sans-serif)

**Character:** Uma serifada editorial de terminais amaciados sobre uma sans humanista clara. A Fraunces dá voz de revista sem ficar fria (a maciez acolhe sem virar letra infantil), e a Manrope, em 450, carrega o texto um pouco mais cheia que o regular, que fica fino em telas 1x. O par foi fixado pelo briefing (§6); por isso o detector ignora `overused-font` (`.impeccable/config.json`).

A Fraunces é servida localmente como instância fixa (`app/fonts/`, 82 KB com o itálico): `opsz` 72, `SOFT` 50, `WONK` 0 no romano e 1 no itálico, as letras inclinadas que dão a segunda batida. Só o peso varia (500 a 700). No teste da etapa 1, opsz 144 ficou frio e condensado e opsz 36, pesado; 72 com SOFT 50 é o meio-termo "caloroso e confiante". A Manrope vem de `next/font/google`.

### Hierarchy
- **Display** (Fraunces 600, `clamp(2.5rem, 1.5rem + 3.9vw, 4.25rem)` · 40 → 68 px, 1,03, −0,02em): só o H1: o do hero da Home e o do topo das páginas internas.
- **H2** (Fraunces 600, `clamp(2rem, 1.4rem + 2.6vw, 3.25rem)` · 32 → 52 px, 1,06, −0,015em): título de seção.
- **H3** (Fraunces 600, `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` · 22 → 28 px, 1,18): título de bloco, como o do "Encontre a série", o do projeto na aba e o do agendamento pelo WhatsApp.
- **Numeral de pilar** (`step`: Fraunces itálico 500, `clamp(2.5rem, 2rem + 2vw, 3.5rem)` · 40 → 56 px, 1): 01, 02, 03 dos três pilares da Proposta, em amarelo sobre o azul. Os passos da matrícula usam o mesmo itálico, em 28 px, ao lado do título — ver Passos numerados.
- **H4** (Manrope 700, 18 px, 1,375): título de passo e de pilar.
- **Lead** (Manrope 450, `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` · 18 → 21 px, 1,55): subtítulo do hero e introdução de seção, em `ink-muted`, até 33 a 36em de largura.
- **Body** (Manrope 450, `clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)` · 17 → 18 px, 1,6): texto corrido, até cerca de 60ch por linha.
- **Small** (Manrope 450, 15 px, 1,5): texto de card, listas do rodapé, microcopy de confiança.
- **Caption** (Manrope 450, 14 px, 1,45): notas; legenda de foto em 500; mensagem de erro e marcador "A confirmar:" em 600.
- **Label** (Manrope 700, 14 px): rótulo de campo, com "opcional" e dicas em 500 `ink-muted`.
- **Eyebrow** (Manrope 800, 13 px, 1,3, +0,12em, maiúsculas): o rótulo acima do título; também o "Foto real" do placeholder, o "Horário de atendimento" e os títulos de coluna do rodapé.
- **Tag** (Manrope 800, 12 px, +0,08em, maiúsculas): etiqueta de segmento.
- **Button** (Manrope 700, 16 px; 15 px no tamanho compacto): texto de botão.

Os tamanhos combinam rem e vw entre 360 e 1280 px: o zoom de 200% continua funcionando (WCAG 1.4.4). Títulos usam `text-wrap: balance`; parágrafos, itens de lista e legendas, `text-wrap: pretty`.

### Named Rules
**A Regra das Duas Batidas.** Fixada pelo briefing (§5). O título pode ter duas batidas: a primeira em romano; a segunda em itálico, sempre em linha própria, na cor de ação (azul Anglo no claro, amarelo sobre o azul). Só quando o título tem duas frases ("Quatro fases. / Cada uma no seu tempo.") ou um arremate ("A melhor forma de escolher / é conhecer."). Título de uma frase vai inteiro em romano ("Veja a escola antes da visita."). O briefing pede "às vezes": na Home, seis títulos têm duas batidas e três não.

**A Regra do Eyebrow.** Fixada pelo briefing (§5). Todo título de seção tem acima um eyebrow: rótulo curto em Eyebrow, precedido pelo traço do friso de 24 × 3 px (sobre o azul, `stripe-invert`). Do eyebrow ao título: 16 px (20 px no hero).

**A Regra da Instância Fixa.** A Fraunces não recebe `font-variation-settings`: `opsz` e `SOFT` estão gravados no arquivo. Para mudar o desenho, gere outra instância (receita em `app/fonts/README.md`); não troque pela família variável completa (271 KB contra 82 KB).

## Layout

Celular primeiro (cada decisão é testada em 360 a 390 px antes do desktop), com o desktop montado sobre uma grade de 12 colunas.

- **Container** (`wrap`): conteúdo até 1200 px (`container`, 75rem), centralizado, com a margem lateral fluida `gutter` (16 → 40 px).
- **Respiro de seção** (`section-y`, 64 → 128 px), em cima e embaixo, igual em todas as seções. Seções se separam por respiro e troca de fundo (papel, areia, azul), nunca por linha divisória.
- **Grade:** 12 colunas a partir de `lg` (1024 px), com 32 px entre colunas; abaixo disso, uma coluna. Listas de cards: 2 por linha a partir de `sm` (640 px) e 4 a partir de `lg`, com 16 px de espaço; os três pilares da Proposta ficam lado a lado a partir de `md` (768 px). A proposta previa 8 colunas entre 768 e 1023 px; o código entregue empilha, e vale o código.
- **A divisão 5 / 7:** a composição que se repete. Texto e CTAs (5) com a foto (7) no hero, título (5) com os campos (7) no "Encontre a série", cabeça (5) com o FAQ (7) em Dúvidas; invertida no fim (card do CTA 7, mapa 5). Nas páginas internas: texto e WhatsApp (5) com o agendamento (7) em Matrículas, cabeça fixa (5) com a tabela (7) nas séries, texto (5) com a foto (7) em cada projeto (o lado alterna), endereço (5) com o mapa (7) em Contato.
- **Alternância de fundo:** depois do topo, papel e areia se alternam (`tomAlternado`, `lib/tons.ts`); quando um bloco sai em produção por falta de dado, a alternância se refaz e duas seções vizinhas nunca repetem o fundo.
- **Cabeça de seção:** até 42rem de largura; eyebrow → título 16 px; título → introdução 20 px; cabeça → conteúdo 48 px.
- **Primeiro viewport:** eyebrow e H1 em largura total; abaixo, a divisão 5 / 7 com a foto em 16:9 (4:3 no celular); o painel "Encontre a série" sobe 40 px (64 px no desktop) sobre a base da foto.
- **Topo das páginas internas** (`PageHero`): trilha, eyebrow e H1 em Display. Sem mídia, título (7) e texto (5) dividem a linha, com o lead, os CTAs e a microcopy alinhados pela base do título; com mídia (o vídeo de Estrutura), vale a composição da Home. O pé do topo recebe o que orienta a página: a régua do percurso (A Escola), os cards de segmento (Segmentos), a régua de séries (página de segmento), o índice de projetos (Projetos).
- **Cabeçalho fixo** de altura constante: nunca encolhe ao rolar, para não gerar CLS; as âncoras param 6rem abaixo do topo (`scroll-padding-top`).
- **Toque:** botões com 48 px de altura (44 px no compacto); links, ícones e itens de menu com pelo menos 44 × 44 px; botão flutuante com 56 px.
- **Breakpoints:** os padrões do Tailwind, `sm` 640 px, `md` 768 px e `lg` 1024 px. `lg` é a virada principal: grade de 12, menu horizontal, cabeçalho de 80 px.

## Elevation & Depth

O sistema é plano. A profundidade vem da troca de fundo (papel, areia, superfície) e de bordas de 1 px em `line`; há uma única sombra, reservada ao que flutua sobre o conteúdo e tingida com a tinta em vez de preto.

### Shadow Vocabulary
- **Flutuação** (`box-shadow: 0 1px 2px rgb(18 29 56 / 0.06), 0 12px 32px -8px rgb(18 29 56 / 0.18)` · `shadow-float`): o cabeçalho depois de 8 px de rolagem, o botão flutuante do WhatsApp, o painel "Encontre a série" (que sobrepõe a foto) e o botão de play do vídeo.

Linhas de 1 px desenhadas com `box-shadow`, como a do cabeçalho em repouso (`0 1px 0` em `line`) e a do campo inválido (`inset 0 0 0 1px` em `error`), são bordas, não elevação.

### Named Rules
**A Regra da Sombra Única.** Uma sombra só, para o que flutua. Cards em repouso são planos, com borda de 1 px em `line`; a sombra aparece como resposta (rolagem, hover) ou em quem se sobrepõe a outro conteúdo.

## Shapes

Cantos moderados, numa escala de quatro:
- **Suave, 8 px** (`rounded-sm`): campos, etiquetas de segmento, resultado do "Encontre a série", legenda sobre a foto, mensagem pronta do agendamento.
- **Médio, 14 px** (`rounded-md`): cards, painéis, card do agendamento, vídeo, mapa e fotos menores.
- **Amplo, 24 px** (`rounded-lg`): a foto do hero e o card do CTA final (o fecho de todas as páginas, menos Privacidade).
- **Pílula** (`rounded-full`): botões, chips, botão flutuante e os botões de ícone redondos (menu, redes sociais, "+" do FAQ).

Micro-raios pertencem a dois elementos só: 2 px no traço do friso e 4 px no marcador "A confirmar:". Bordas: 1 px em `line` para cards e divisórias (desenhadas por dentro quando o elemento tem fundo); 1 px em `field` para campos; 1,5 px em tinta no botão de contorno. Não há forma recortada, diagonal ou orgânica: a geometria de assinatura é a faixa reta.

### Named Rules
**A Regra do Friso.** O friso é uma faixa reta azul · amarelo · vermelho em 2 : 1 : 1, com cortes secos, sem degradê (`stripe`). Aparece só em lugares fixos: 4 px no topo do cabeçalho, do rodapé e do menu do celular; 4 px no topo dos três contêineres de ação (painel "Encontre a série", card do agendamento pelo WhatsApp, card do CTA final); o traço de 24 × 3 px antes de cada eyebrow; o mesmo traço marcando a aba ativa dos projetos no desktop. Sobre o azul Anglo, o terço azul vira branco (`stripe-invert`). Nunca como decoração solta.

## Components

### Buttons
Pílulas firmes, em negrito, com a seta que diz o destino.
- **Shape:** pílula (`rounded-full`); Manrope 700; ícone, texto e seta separados por 10 px.
- **Tamanhos:** padrão com 48 px de altura, 24 px de padding lateral e texto de 16 px; compacto (`sm`) com 44 px, 18 px e 15 px, usado no cabeçalho.
- **Primário** (`primario`): azul Anglo, texto branco; hover em azul Anglo profundo.
- **Amarelo** (`amarelo`): amarelo, texto em tinta; hover em branco. Só sobre o campo azul.
- **Contorno** (`contorno`): sem fundo, texto em tinta, borda interna de 1,5 px em tinta; hover em areia. É o par do primário para o WhatsApp, com o ícone em `whatsapp-ink`.
- **WhatsApp** (`whatsapp`): fundo `whatsapp-ink`, texto e ícone brancos; hover em `whatsapp-ink-hover`. Só o "Agendar visita pelo WhatsApp", que abre a conversa com a mensagem de agendamento já escrita; o "Falar no WhatsApp" continua de contorno.
- **Link com seta** (`ArrowLink`, o CTA secundário): texto em negrito com sublinhado de 1,5 px, afastado 0,32em, na cor do texto a 32%; no hover, o sublinhado fica azul Anglo (amarelo sobre fundo escuro); a seta é azul (amarela sobre o azul). Altura mínima de 44 px.
- **Hover / Focus:** cor em 150 ms; a seta anda 3 px na direção do destino (→ para a direita, ↓ para baixo, ↗ 2 px na diagonal), também em 150 ms. Foco: anel de 2 px em azul Anglo com 3 px de respiro; em seções azuis ou de tinta, amarelo.
- **Microcopy de confiança** (fixada pelo briefing §5): logo abaixo do CTA principal, uma linha em Small `ink-muted`, com os itens separados por " · ", como "Visita guiada · sem compromisso · seg. a sex., 8h às 17h".

**A Regra da Seta de Destino.** Fixada pelo briefing (§5). → leva a uma ação no site; ↓ desce na mesma página; ↑ volta para cima na mesma página (o "Agendar visita" do fecho de Matrículas, que sobe até o agendamento); ↗ sai do site, abre em nova aba e leva "(abre em nova aba)" para leitor de tela. As setas são ícones SVG (`components/ui/Icon.tsx`: 24 × 24, traço de 2 px, pontas arredondadas), nunca caracteres, porque a Fraunces não tem → nem ↗ no subconjunto latino. Botão sem seta só onde falta espaço (o "Agendar" compacto do cabeçalho no celular).

### Chips
- **Etiqueta de segmento** (`SegmentTag`): 32 px de altura, cantos de 8 px, 12 px de padding lateral; fundo suave e texto em tinta do segmento, em Tag; ponto de 10 px na cor-base, com contorno de 1 px em tinta a 15%; sempre o nome do segmento escrito. Perde o fundo quando já está sobre o fundo suave do próprio segmento.
- **Chip de escolha** (período da visita, rádio): pílula de 44 px, fundo papel, borda de 1 px em `field`, Small 600; marcado, fundo `medio-soft` e borda azul Anglo; o foco do rádio aparece no chip inteiro.
- **Chip de aba** (projetos, no celular): pílula de 44 px em superfície com borda `line`, Small 700; selecionado, fundo tinta e texto branco. A fileira rola na horizontal, sem barra visível. No desktop, a mesma lista vira uma coluna de nomes em Fraunces 600, em `ink-muted` e separados por `line`; a aba ativa fica em tinta e ganha o traço do friso, que cresce da esquerda em 250 ms.

### Cards / Containers
- **Corner Style:** 14 px; 24 px no card do CTA final.
- **Background:** superfície sobre papel ou areia.
- **Shadow Strategy:** planos, com borda de 1 px em `line`; só o painel "Encontre a série" tem sombra em repouso (ver Elevation & Depth).
- **Border:** 1 px em `line`; os contêineres de ação ganham o friso de 4 px no topo (ver A Regra do Friso).
- **Internal Padding:** 20 a 24 px no celular, 28 a 48 px no desktop. Card de segmento 24 px (32 no topo) → 28 px (36); card do agendamento 24 → 32 px; painel do "Encontre a série" 20 → 36 px (28 → 40 no topo); card do CTA final 28 → 40 → 48 px.
- **Segmento** (`SegmentCard`): coluna de texto sobre o papel, sem caixa. Um traço de 32 × 2 px na cor-base abre a coluna (lado a lado, os quatro traços ainda formam a sequência da paleta); faixa etária em Tag, na tinta do segmento; nome em Fraunces 600; uma frase em Small `ink-muted`; o link "Conhecer →", com a seta na tinta do segmento. A coluna inteira é clicável. A seta anda 3 px no hover.

### Inputs / Fields
- **Style** (`campo`): 48 px de altura mínima, 14 px de padding lateral, borda de 1 px em `field`, cantos de 8 px, fundo superfície, texto em tinta de 16 px em 500. Rótulo acima, em Label, a 6 px.
- **Select** (`campo-select`): sem aparência nativa; seta desenhada em SVG, em tinta, a 14 px da direita e com 18 px de tamanho; 44 px de padding à direita.
- **Hover:** a borda escurece para tinta, em 150 ms.
- **Focus:** borda azul Anglo e anel de foco de 2 px com 1 px de respiro.
- **Error:** borda em `error` mais uma linha interna de 1 px (2 px no total); mensagem logo abaixo em Caption 600 `error`, com ícone de alerta de 16 px; o foco vai para o primeiro campo inválido.
- **Checkbox e rádio:** nativos, com `accent-color` azul Anglo.

### Navigation
- **Cabeçalho:** fixo, fundo papel, friso de 4 px no topo e barra de 64 px (80 px a partir de `lg`). Em repouso, uma linha de 1 px em `line` embaixo; depois de 8 px de rolagem, a sombra de flutuação (250 ms). A altura nunca muda.
- **Menu no desktop:** links em Manrope 600 de 15 px, em tinta, com alvo de 44 px; um sublinhado de 2 px em azul Anglo cresce da esquerda no hover e fica na página atual (`aria-current`), em 150 ms. À direita, o botão primário compacto "Agendar visita →".
- **Celular:** "Agendar" compacto (sem seta) e um botão redondo de 44 px (superfície, borda `line`) que abre o menu em tela cheia num `<dialog>` nativo: fundo papel, friso no topo, links grandes em Fraunces 600 em linhas de 64 px separadas por `line`, com seta → azul; a página atual fica azul. No pé, botão primário e botão de contorno do WhatsApp em largura total e o horário em Caption. O menu entra com opacidade e 8 px de descida, em 250 ms.
- **Rodapé:** fundo tinta, texto branco, friso de 4 px no topo; títulos de coluna em Eyebrow `on-ink-muted`; links em branco a 90%, com sublinhado a 30% que fica amarelo no hover; redes sociais em círculos de 44 px.
- **Logo:** a arte em uso. No rodapé, `public/marca/logo-negativo.png` (letras brancas, fundo azul-noite). No cabeçalho, a mesma arte com as letras em azul Anglo (`logo-positivo.png`), para ler no papel claro. O SVG oficial ainda não chegou.

### Seções
`Section` tem quatro fundos: papel (padrão), areia, azul (o campo azul) e tinta. Azul e tinta recebem `data-tone`, que troca o foco e a seleção para amarelo. Toda seção usa o respiro `section-y` e abre com `SectionHead`: eyebrow, título em uma ou duas batidas e introdução opcional em Lead.

### Encontre a série
A assinatura interativa. Painel em superfície, cantos de 14 px, sombra de flutuação e friso de 4 px no topo, sobreposto à base da foto do hero. Título em H3 com duas batidas; mês e ano em dois selects lado a lado; abaixo de uma linha `line`, a região de resultado (`aria-live`), com uma dica enquanto falta dado. O resultado entra na cor suave do segmento, varrendo da esquerda para a direita como o friso (recorte animado de 500 ms na curva `ease-out-soft`; o conteúdo sobe 8 px logo depois). Traz a etiqueta do segmento, "Em {ano}: {série}" em Fraunces 600, os links "Conhecer … →" e "Falar no WhatsApp ↗" e a nota da data de corte em Caption. Com movimento reduzido, aparece sem animação. É o único componente que usa a biblioteca Motion, carregada só quando a pessoa foca um dos campos.

### Passos numerados
Lista lida de cima para baixo, com no máximo 40 rem de largura. Linha `line` acima do primeiro passo e entre os passos. O numeral fica ao lado do título, em Fraunces itálico 28 px, azul Anglo — não no tamanho `step`, que fica para os três pilares da Proposta. Título em H4, texto em Small `ink-muted`. Os numerais são `aria-hidden`: quem diz a ordem é a lista.

**A Regra do Processo Real.** Fixada pelo briefing (§5 e §8). Numeração 01, 02, 03… só em sequência real: os passos da matrícula (01 a 04) e os três pilares da Proposta, que o briefing numera explicitamente (sobre o azul, numerais em amarelo). Fora disso, número grande em destaque só com dado real e fonte.

### FAQ
`<details>` nativo, que abre pelo teclado sem JavaScript. Pergunta em Manrope 700, em tinta, em linhas de 64 px separadas por `line`; à direita, um círculo de 32 px em `medio-soft` com "+" azul, que gira 45° ao abrir (250 ms). Resposta em `ink-muted`, até 60ch.

### Botão flutuante do WhatsApp
Círculo de 56 px em `whatsapp`, ícone branco de 28 px, sombra de flutuação, a 16 px do canto (respeitando a área segura). Nunca cobre conteúdo: some (opacidade 0, 12 px abaixo, sem clique) enquanto algum elemento marcado com `data-fab-oculta` está na tela (os CTAs do hero, o card do CTA final, o agendamento, o rodapé) e enquanto um campo está em foco; transição de 250 ms. A mensagem pré-preenchida muda com a página.

### Topo de página interna e trilha
`PageHero` abre toda página interna (ver Layout). A trilha ("Início / Segmentos / Fundamental 1") fica acima do eyebrow, em Caption `ink-muted`, com barras em `field`, links sublinhados de 44 px de altura e a página atual em tinta 600, sem link; leva junto o `BreadcrumbList` em JSON-LD. Na página de segmento, o topo inteiro fica no suave do segmento e a segunda batida do H1, na tinta dele: a página "veste" a cor do card em que a pessoa clicou.

### Régua do percurso e régua de séries
Duas réguas da mesma família. A do percurso (`Percurso`) põe os quatro segmentos lado a lado, cada um sob a faixa de 8 px na cor-base (a paleta que amadurece numa linha só), com a faixa etária em Tag na tinta e o nome em Fraunces 600 com a seta; na página de segmento, marca "Você está aqui" no próprio segmento, sem link. A de séries mostra as séries do segmento como pontos de 12 px sobre uma linha de 2 px, ambos na tinta do segmento, com o rótulo em Small 700 embaixo; sem os nomes das turmas (Educação Infantil), vira uma linha tracejada com o marcador "A confirmar:".

### Tabela de séries
Tabela em superfície com borda `line` e cantos de 14 px: cabeçalho em areia, em Eyebrow; um grupo por segmento, aberto pela etiqueta do segmento; data de nascimento em Small 500 `ink-muted` com algarismos tabulares, série em tinta 700. Provisória: mesma regra do "Encontre a série".

### Galeria, lista de projetos e canais
- **Galeria** (`Galeria`): até três fotos, a primeira em 16:10 na largura toda, as outras em 4:3 lado a lado; no celular, uma embaixo da outra. Em produção, só fotos reais: sem nenhuma, o bloco some e o texto ocupa a linha.
- **Lista de projetos** (`ListaProjetos`): linhas separadas por `line`, nome em H3 (4 colunas) e resumo em `ink-muted` (7), seta azul à direita; a linha inteira é o link e o nome fica azul no hover. Sem numeração (A Regra do Processo Real).
- **Card de canal** (Contato): superfície, borda `line`, cantos de 14 px; ícone num círculo de 44 px em areia, nome do canal em Eyebrow e o contato em Fraunces 600 de 22 px.
- **Card do CTA final sem mapa** (`CtaVisita` com `comMapa={false}`, em Contato, onde o mapa já está na página): o card ocupa a largura toda e divide título (7) e ações (5), alinhados pela base.

### Página de leitura
Privacidade é modo leitura: índice "Nesta página" fixo à esquerda no desktop (3 colunas, links em Small `ink-muted`) e o texto em até 62ch, em tinta, com subtítulos em H3 e listas com marcador em `field`.

### Estados honestos
**A Regra do Conteúdo Pendente.** Fixada pelo briefing (§5). Dado que depende da escola é declarado com `aConfirmar('o que falta')` (`lib/pending.ts`). Em homologação, aparece o marcador `Pending`: inline, fundo `infantil-soft`, cantos de 4 px, Caption 600 em tinta com "A confirmar:" em 800, e o fundo acompanha cada linha quando o texto quebra. Em produção, o marcador não renderiza e o bloco que depende do dado também não: pergunta sem resposta sai do FAQ, passo sem título sai e a numeração se refaz, o "Encontre a série" só aparece com a tabela validada, vídeo e mapa só com o dado confirmado. Em homologação, uma faixa `infantil-soft` no topo da página avisa "Ambiente de homologação".

**A Regra da Foto Real.** Fixada pelo briefing (§5 e §6). Sem foto real, entra o placeholder, que é um estado do sistema e não um enfeite: caixa neutra na proporção final (areia sobre o papel, superfície sobre a areia; linha interna de 1 px em `line`; cantos de 24 ou 14 px) com "Foto real" em Eyebrow, a descrição do que a foto vai mostrar e "Proporção final …" em Small `ink-muted`, anunciada como "Espaço reservado para foto real: …". Foto real ganha a legenda "Fotografia real · {lugar}" em Caption 500 `ink-muted`, 12 px abaixo; quando algo sobrepõe a base da imagem (o hero), a legenda vai para o canto superior esquerdo, sobre superfície a 90%. Placeholder nunca leva essa legenda.

## Do's and Don'ts

### Do:
- **Do** tirar toda cor dos tokens de `app/globals.css`; cor nova entra no `@theme` com o contraste medido e anotado.
- **Do** abrir toda seção com `SectionHead`: eyebrow com o traço do friso e título (fixado pelo briefing §5).
- **Do** usar a segunda batida em itálico só quando o título tem duas frases ou um arremate; título de uma frase vai inteiro em romano.
- **Do** escolher a seta pelo destino (→ ação no site, ↓ rolar, ↗ fora do site com "(abre em nova aba)") e desenhá-la com `Icon`.
- **Do** pôr a microcopy de confiança (Small, `ink-muted`) logo abaixo do CTA principal.
- **Do** declarar todo dado pendente com `aConfirmar()` e deixar a produção esconder o bloco; foto ausente vira placeholder na proporção final, com a descrição.
- **Do** usar `Section tom="azul"` ou `tom="tinta"` em fundos escuros, para o foco e a seleção ficarem amarelos.
- **Do** manter alvos de toque de 44 px ou mais (botões de 48 px).
- **Do** usar 150 ms para hover, 250 ms para abrir e fechar e 600 ms para a revelação, sempre em `ease-out-soft`, e respeitar `prefers-reduced-motion`.

### Don't:
- **Don't** usar cor fora da paleta (a padrão do Tailwind foi zerada), preto puro no texto ou branco puro como fundo de página.
- **Don't** usar amarelo como texto sobre fundo claro, nem o vermelho do logo (`brand-red`) como texto; use `fund1-ink`.
- **Don't** preencher botão ou CTA com cor de segmento; a ação é azul Anglo (amarelo só sobre o campo azul).
- **Don't** pôr um segundo campo azul na mesma página, nem usar o botão amarelo fora dele.
- **Don't** criar outra sombra, nem pôr sombra em card em repouso que não se sobreponha a nada.
- **Don't** numerar o que não é sequência real, nem destacar número sem dado real e fonte.
- **Don't** digitar setas como caracteres (→ ↓ ↗), nem abrir link externo sem o aviso para leitor de tela.
- **Don't** usar foto de banco ou imagem gerada por IA representando alunos, professores ou a estrutura, nem a legenda "Fotografia real" num placeholder.
- **Don't** usar o friso como enfeite solto, nem mudar a ordem ou a proporção das cores (2 : 1 : 1).
- **Don't** usar carrossel automático, parallax pesado ou animação que faça o hero esperar.
- **Don't** usar o verde claro do WhatsApp (#25D366): dá 2:1 com branco.
- **Don't** aplicar `font-variation-settings` na Fraunces, nem trocar a instância fixa pela família variável completa.
