---
name: Colégio Anglo Tamarineira
description: Site institucional acolhedor, com preservação da identidade original.
colors:
  orange: "#ec9600"
  purple: "#34327c"
  sky: "#77daee"
  cream: "#fdfbe8"
  ink: "#272644"
  muted: "#57566b"
  white: "#fff"
  line: "#dddcca"
typography:
  display:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Alegreya Sans, sans-serif"
    fontSize: "clamp(2.6rem, 4.4vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.04
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
  tab: "12px"
  panel: "16px"
spacing:
  compact: "12px"
  control: "24px"
  grid: "32px"
  panel: "48px"
  section: "100px"
components:
  button-dark:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 24px"
  button-light:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.purple}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 24px"
  project-tab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.purple}"
    rounded: "{rounded.tab}"
    padding: "18px"
  project-tab-active:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.white}"
    rounded: "{rounded.tab}"
    padding: "18px"
  project-panel:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "48px"
---

# Design System: Colégio Anglo Tamarineira

## Overview

Direção institucional orientada à preservação da identidade aprovada. A linguagem é clara e acolhedora para famílias: tipografia expressiva nos títulos, leitura confortável nos textos e imagens originais reconhecíveis. Não há uma nova metáfora de marca.

O sistema usa superfícies amplas, cores sólidas e espaçamento generoso. A arte institucional permanece inteira, com sua proporção preservada. Esta documentação descreve a implementação em `src/styles/global.css` e `src/pages/index.astro`; os valores do frontmatter são normativos para os papéis ali registrados.

**Key Characteristics:**
- Identidade original preservada.
- Títulos em Alegreya Sans e leitura em Lato.
- Superfícies planas com cantos suavizados.
- Conteúdo acessível com aprimoramento progressivo.

## Colors

A paleta combina o calor do laranja e do creme com a presença do azul-violeta e a leveza do azul-claro.

### Primary
- **Azul-violeta (`purple`)**: botões de contato, títulos de conteúdo, seleção dos projetos, seção de estrutura e rodapé.

### Secondary
- **Laranja (`orange`)**: cabeçalho institucional, preservando a associação com o logotipo original.
- **Azul-claro (`sky`)**: faixa de contato, botão sobre a seção escura, seleção de texto e foco em superfícies violetas.

### Neutral
- **Creme (`cream`)**: fundo principal e painéis de projetos.
- **Branco (`white`)**: seção de projetos, abas em repouso e texto sobre violeta.
- **Tinta (`ink`)**: texto geral; **texto secundário (`muted`)**: parágrafos de apoio.
- **Divisor (`line`)**: separação discreta na abertura.

## Typography

Alegreya Sans, com fallback sans-serif, dá expressão aos títulos. Lato, também com fallback sans-serif, sustenta parágrafos, navegação e controles. Títulos usam quebra balanceada.

O título da abertura é deliberadamente menor que os grandes títulos de seção porque acompanha uma arte de campanha com texto próprio. Seu trecho destacado usa peso 800 e violeta. No celular, o título da abertura tem 30px. Títulos de projetos usam 46px no desktop e 34px no celular; títulos dos segmentos usam 30px. Os parágrafos de segmentos e vários textos móveis usam 15px. O texto da estrutura limita a linha a 40ch.

## Layout

O contêiner tem largura máxima de 1200px e margem lateral mínima de 40px no desktop. Até 1100px, as margens passam a 24px; até 767px, a 20px. As seções têm espaçamento vertical de 100px, reduzido a 72px e 56px nesses mesmos limites.

Introdução e projetos usam duas colunas; a estrutura usa proporção 0.8/1.2. Essas composições tornam-se uma coluna até 767px. Os segmentos seguem quatro colunas, duas até 1100px e uma até 540px. Os projetos usam cinco seletores no desktop e expansores no celular. A navegação é fixa no topo; compensar sua altura ao navegar por âncoras.

A campanha mantém proporção 1280/693 com `object-fit: contain`. A partir de 1600px, recebe margens internas de 60px e largura de imagem limitada a 1320px. Imagens de segmentos e projetos também preservam o conteúdo completo.

## Elevation & Depth

O sistema é predominantemente plano: fundos alternados e divisores estabelecem agrupamento. O botão violeta recebe sombra apenas no hover (`0 6px 18px #24225926`); o contato móvel fixo usa `0 4px 18px #13113640` para se distinguir do conteúdo. Não aplicar essas sombras a todos os painéis.

## Shapes

Botões têm cantos discretos, abas têm arredondamento intermediário e imagens/painéis têm cantos mais amplos, conforme o frontmatter. Painéis e molduras de imagem recortam o excesso no limite arredondado, enquanto a imagem interna usa contenção. Ícones são traços simples em SVG, normalmente de 24px, com espessura 1.8 e cor herdada.

## Components

### Buttons

Botões são sólidos e legíveis, com altura mínima de 52px, texto em negrito e espaço de 20px entre texto e indicador. O botão violeta escurece para `#242259` no hover; o azul-claro clareia para `#a7e8f4`. As transições de fundo e sombra duram 0.2s. CTAs principais ocupam a largura disponível nos agrupamentos móveis correspondentes.

Links de texto usam violeta e uma linha inferior permanente; o hover escurece o texto. O foco visível usa contorno de 3px e afastamento de 5px, violeta em superfícies claras e azul-claro no rodapé e na estrutura.

### Navigation

Cabeçalho laranja, logotipo original e links Lato em negrito. Links recebem sublinhado no hover. No celular, o botão Menu controla a navegação quando há JavaScript; Escape fecha o menu e devolve o foco ao botão. Sem JavaScript, os links permanecem disponíveis.

### Cards / Containers

Os segmentos são artigos abertos, com moldura de imagem arredondada e texto abaixo. Projetos usam painéis creme, com imagem e texto lado a lado e padding de 48px; esse padding cai a 32px até 1100px e 24px no celular. Não há formulário, campo de entrada ou chip nesta implementação.

### Project selection

Abas têm borda clara, altura mínima de 88px e fundo branco. A aba ativa usa violeta e texto branco; a inativa recebe creme no hover. Setas, Home e End navegam entre abas. No celular, elementos nativos `details`/`summary` substituem as abas; o resumo aberto usa violeta, texto branco e indicador girado. Sem JavaScript, todos os projetos continuam acessíveis nos expansores.

Animações limitam-se aos estados dos controles e à rotação do indicador. `prefers-reduced-motion: reduce` remove transições e rolagem suave.

## Do's and Don'ts

### Do:
- **Do** preservar a paleta, o logotipo, os textos e as imagens originais aprovados.
- **Do** usar Alegreya Sans nos títulos e Lato no texto e nos controles.
- **Do** manter as artes inteiras e os controles acessíveis por teclado.
- **Do** preservar a leitura e a navegação sem JavaScript.

### Don't:
- **Don't** substituir a identidade por outra paleta ou imagens geradas.
- **Don't** transformar os painéis planos em cartões com sombras recorrentes.
- **Don't** esconder conteúdo atrás de animações de entrada.
