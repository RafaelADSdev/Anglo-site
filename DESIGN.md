---
name: Colégio Anglo Tamarineira
description: Identidade escolar original com hierarquia editorial, imagens institucionais e navegação acessível.
colors:
  orange: "#ec9600"
  purple: "#34327c"
  sky: "#77daee"
  cream: "#fdfbe8"
  ink: "#272644"
  muted: "#57566b"
  white: "#fff"
  line: "#e0dfd5"
typography:
  display:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(4rem, 6.3vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.93
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(2.8rem, 4.8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Lato, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  button: "8px"
  media: "12px"
  panel: "16px"
spacing:
  compact: "12px"
  control: "24px"
  grid: "32px"
  section: "104px"
components:
  button-dark:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "16px 25px"
  header-contact:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 19px"
  project-tab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.muted}"
    padding: "16px 12px 24px"
  project-tab-active:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.purple}"
    padding: "16px 12px 24px"
  project-panel:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "48px 64px"
---

# Design System: Colégio Anglo Tamarineira

## Overview

A revisão mantém a paleta, Alegreya Sans, Lato e os materiais originais do colégio, com hierarquia mais expressiva e agrupamentos compactos. Esta documentação registra a implementação atual em `src/styles/global.css` e `src/pages/index.astro`; não representa aprovação visual final do usuário.

O sistema combina superfícies planas, títulos grandes e imagens reconhecíveis. A abertura usa texto HTML e a colagem institucional; a arte completa da campanha aparece em uma seção própria abaixo dos projetos.

**Key Characteristics:**

- Identidade original preservada.
- Títulos em Alegreya Sans e leitura em Lato.
- Cabeçalho violeta, contato laranja e abertura creme.
- Conteúdo visível antes dos pequenos movimentos de entrada.

## Colors

O azul-violeta organiza a navegação e a hierarquia; laranja e azul-claro marcam ações e imagens.

### Primary

- **Azul-violeta (`purple`)**: cabeçalho, títulos, botões principais, estrutura e rodapé.

### Secondary

- **Laranja (`orange`)**: contato no cabeçalho e traço sob o destaque da abertura.
- **Azul-claro (`sky`)**: fundo arredondado da colagem, botão de reprodução, seleção de texto e foco sobre superfícies escuras.

### Neutral

- **Creme (`cream`)**: abertura, painéis e aba de projeto selecionada.
- **Branco (`white`)**: base da página, abas em repouso e texto sobre violeta.
- **Tinta (`ink`)** e **texto secundário (`muted`)**: textos gerais e de apoio.
- **Divisor (`line`)**: linhas entre segmentos e abaixo dos seletores.

## Typography

Alegreya Sans dá expressão aos títulos; Lato sustenta parágrafos e controles. Os títulos têm quebra balanceada. A abertura usa o tamanho display do frontmatter, limitado a 96px na configuração padrão, com destaque em peso 900 e traço laranja. A frase complementar fica abaixo, em Alegreya Sans de peso 500.

Até 1100px, o título inicial usa 72px; entre 768px e 900px, 62px; no celular, `clamp(3.5rem, 13vw, 5rem)`. Títulos de projetos usam 48px, 40px no desktop compacto e 36px no celular. Títulos dos segmentos usam 32px e 28px no celular. Seus parágrafos usam 14px; a faixa de tablet entre 768px e 900px usa 15px. A estrutura limita seu parágrafo a 36ch no desktop.

## Layout

O contêiner usa `min(1200px, calc(100% - 96px))`. Até 1100px, passa a `calc(100% - 56px)`; até 767px, a `calc(100% - 40px)`. As seções principais têm espaçamento vertical de 104px, reduzido para 80px e 60px nesses limites.

A abertura divide texto e colagem em proporção 1/1.05 e empilha no celular. Quatro links de etapas formam uma linha no desktop e uma grade 2×2 no celular. Os segmentos formam uma grade 2×2 com imagem ao lado do texto. Entre 768px e 900px, a imagem fica acima do texto dentro de cada artigo; no celular, os artigos viram uma coluna e retomam imagem lateral, de 120px ou 95px até 390px.

Estrutura, projetos e campanha usam duas colunas no desktop e uma no celular. O painel de projeto recebe padding de 48px 64px, 36px até 1100px e 26px até 767px. O cabeçalho é sticky, com altura mínima de 94px ou 78px no celular; as âncoras compensam sua presença.

## Elevation & Depth

Não há sombras na implementação atual. Alternância de superfícies, divisores e o fundo azul-claro atrás da colagem criam separação. A profundidade dos estados vem de pequenos deslocamentos, sem esconder o conteúdo.

## Shapes

Botões usam cantos de 8px, molduras de mídia de 12px e painéis de 16px; painéis móveis passam a 12px. O fundo da colagem tem topo arredondado em arco. Abas de projeto são retangulares, com linha inferior indicando a seleção. Imagens de segmentos, logotipos e campanha preservam seu conteúdo; o pôster do vídeo preenche a moldura 16:9 com recorte.

## Components

### Buttons

O CTA violeta tem altura mínima de 56px, intervalo de 24px e os valores do frontmatter. No hover, escurece para `#242259` e sobe 2px. O contato laranja do cabeçalho tem altura mínima de 48px e hover `#ffb536`; o contato móvel tem 44px e fica dentro do cabeçalho. Links textuais usam 14px, linha inferior e padding vertical de 10px.

Foco visível usa contorno de 3px afastado 5px: violeta sobre claro e azul-claro no cabeçalho, rodapé e estrutura.

### Navigation

Cabeçalho violeta com o logotipo original e links brancos de 14px. O hover revela sublinhado laranja. O contato desktop é ocultado entre 768px e 1100px. No celular, Contato fica junto do logotipo e Menu; o menu aberto também contém o CTA completo. Escape fecha o menu e devolve foco ao botão. Sem JavaScript, os links ficam disponíveis.

### Cards / Containers

Segmentos são artigos com divisor superior, imagem lateral e texto, sem caixas elevadas. Os painéis creme dos projetos organizam imagem e texto em proporção 0.8/1.2. A campanha final combina chamada de matrícula com `slide1_2026.png` inteiro; a abertura usa `Segmentos.png` sobre fundo azul-claro.

### Project selection

Cinco abas exibem miniaturas dos logotipos em molduras de 105×88px e rótulos abaixo. A seleção usa creme, texto violeta e linha inferior violeta de 3px; o hover usa `#f8f8f2` e sobe a miniatura 4px. Setas, Home e End navegam entre abas. No celular, `details`/`summary` substituem as abas; o resumo aberto usa violeta com texto branco. Sem JavaScript, todos os projetos permanecem acessíveis.

### Video

O pôster `slide2_2026.png` preenche uma moldura 16:9. O botão central usa círculo azul-claro de 68px, ícone de reprodução e legenda violeta. Ao ativá-lo, o script revela o iframe existente com o identificador institucional, dentro da própria página. Sem JavaScript, aparece o link direto ao YouTube.

### Motion

A base permanece com opacidade 1. Entradas deslocam apenas 9px por 0.5s; a imagem do painel selecionado usa 0.35s. Controles têm transições de 0.2s; imagens de segmentos sobem 5px em 0.3s. `prefers-reduced-motion: reduce` remove animações, transições e rolagem suave.

## Do's and Don'ts

### Do:

- **Do** preservar a paleta, o logotipo, os textos e as imagens originais.
- **Do** usar Alegreya Sans nos títulos e Lato no texto e nos controles.
- **Do** manter a campanha inteira e os controles acessíveis por teclado.
- **Do** preservar a leitura e a navegação sem JavaScript.

### Don't:

- **Don't** substituir a identidade por outra paleta ou imagens geradas.
- **Don't** transformar os painéis planos em cartões com sombras recorrentes.
- **Don't** esconder conteúdo atrás de animações de entrada.
