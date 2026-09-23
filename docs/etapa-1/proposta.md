# Etapa 1 — Proposta: sitemap, tokens, H1 e wireframe da Home

**Colégio Anglo Líder Tamarineira · redesign** · 22/09/2026 · **aprovada em 23/09/2026**

> **Decisões aprovadas (23/09/2026):** H1 **C** — "Base forte para aprender. *Coragem para liderar.*" (escolha do cliente; a recomendação era A). As demais seguem a recomendação: nome de trabalho "Colégio Anglo Líder Tamarineira", CTAs em azul Anglo, Encontre a série com mês + ano, hero em composição de capa, WhatsApp flutuante só depois dos CTAs do hero.

Para ver: [`style-tile.html`](style-tile.html) (paleta, tipografia e componentes) e [`hero.html`](hero.html) (primeiro viewport em tamanho real; opções de H1 em `hero.html?h1=b` e `?h1=c`). Briefing original: [`../briefing.md`](../briefing.md). Pendências: [`../../PENDENCIAS.md`](../../PENDENCIAS.md).

---

## 0. A ideia

**Do primeiro passo ao vestibular.** A identidade se organiza pela trajetória da criança — o fato que diferencia esta unidade de uma escola só de Infantil ou só de Médio. Ele aparece em três lugares:

1. **A paleta amadurece com a criança.** As quatro fases usam as cores do logo em sequência: amarelo (Educação Infantil) → vermelho (Fundamental 1) → azul-claro (Fundamental 2) → azul Anglo (Ensino Médio). Do quente ao sério, sem inventar cor nenhuma.
2. **O friso tricolor.** Azul, amarelo e vermelho em faixa, como na gola e nas cavas do uniforme (visível na foto do banner atual). Vira a assinatura gráfica do site.
3. **Encontre a série logo abaixo do hero.** A primeira coisa que a família faz no site é localizar a criança nessa trajetória.

## 1. O que a captura mostrou

Além do diagnóstico do briefing (§4), a captura de 22/09 (`.redesign/colegioanglotamarineira.com.br/`) mostrou:

- **Não há H1 renderizado.** O do template ("Welcome to Alphabet") está comentado e o hero é um PNG com o texto dentro: "Matrículas abertas" não existe para o Google nem para leitor de tela, e no celular o banner fica com ~150 px de altura.
- `lang="en"` numa página em português.
- **Cinco** variações do nome, não três (lista em `PENDENCIAS.md`).
- As cores do tema (roxo `#34327C`, ciano `#77daee`, laranja `#EC9600`) são do template "Alphabet", não da marca. A marca só existe no logo.
- O banner cita itens **fora da base de conteúdo** ("Escolinha de esportes", "Formação integral", "Metodologias ativas") e a marca **Criatto Educação**. Não entram; foram para `PENDENCIAS.md`.
- **Nenhum anexo chegou** (logo SVG, manual, fotos, prints). A paleta foi medida pixel a pixel no PNG do logo em uso; as referências foram analisadas direto nos sites publicados.

## 2. Sitemap final

```
/                                   Home
/a-escola                           #proposta · #sistema-anglo · #historia* · #inclusao
/segmentos                          visão geral + tabela de séries + Encontre a série
  /segmentos/educacao-infantil      #series · #dia-a-dia · #rotina* · #projetos · #galeria · #duvidas · #visita
  /segmentos/fundamental-1          (mesma estrutura)
  /segmentos/fundamental-2          (mesma estrutura)
  /segmentos/ensino-medio           (mesma estrutura)
/projetos                           #google-for-education · #criatto-lab · #geracao-lider · #alem-do-vest · #pod-criar
/estrutura                          #video · #ambientes* · #acessibilidade*
/matriculas                         #como-funciona · #agendar · #documentos* · #duvidas
/contato                            endereço*, mapa, telefones, WhatsApp, horário, redes
/privacidade                        política de privacidade e cookies (LGPD)
404                                 os 4 segmentos + contato
/sitemap.xml · /robots.txt          gerados pelo Next.js
```

`*` só é renderizado com conteúdo confirmado.

Decisões de arquitetura registradas:

- Todo "Agendar visita" leva a `/matriculas#agendar`. Vindo de uma página de segmento ou do Encontre a série, o segmento chega pré-selecionado (`?segmento=ensino-medio`). Sem modal.
- Confirmação do envio na própria página (sem rota `/obrigado`), disparando `generate_lead`.
- Breadcrumbs visíveis nas internas + JSON-LD `BreadcrumbList`.
- Homologação: `noindex` em todas as páginas + faixa no topo.
- O site atual é one-page (âncoras `#services`, `#activities`): não há URLs antigas para redirecionar.
- Fase 2, fora deste escopo: `/admin` e assistente de matrícula.

## 3. Design tokens

### 3.1 Cor

**Estratégia: contida, com acento forte.** Papel e tinta ocupam a maior parte da página; o azul Anglo é a cor de ação (CTAs, links, foco). Uma vez por página, um campo azul em largura total — na Home, a seção Proposta; nas internas, o CTA final. É o único lugar onde o amarelo vira botão. As cores de segmento só orientam: etiquetas, ícones, fundos suaves, faixa no topo dos cards.

**Marca** — medida pixel a pixel no logo em uso (`colegioanglotamarineira.com.br/img/logo_branca_colorida.png`); o manual oficial prevalece quando chegar:

| Token | Hex | Origem no logo | Uso |
|---|---|---|---|
| `brand-blue` · azul Anglo | `#00279B` | ponto mais escuro do degradê azul | CTAs, links, foco, campo azul, Ensino Médio |
| `brand-sky` · azul-claro | `#036EA9` | ponto mais claro do mesmo degradê | Fundamental 2 |
| `brand-yellow` · amarelo | `#FCFA03` | pincelada amarela (cor chapada) | Educação Infantil, botão e foco sobre o azul, friso |
| `brand-red` · vermelho | `#DB2C1B` | pincelada vermelha (cor chapada) | Fundamental 1, friso |

**Neutros:**

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `paper` | `#FBF8F1` | fundo principal (off-white quente) | — |
| `paper-2` | `#F3EDE1` | seções alternadas, placeholders de foto | — |
| `surface` | `#FFFDF9` | cards, painéis, campos | — |
| `ink` | `#121D38` | texto (azul-noite, não preto) | 15,7:1 no papel |
| `ink-muted` | `#4F586C` | subtítulos, legendas, microcopy | 6,7:1 no papel |
| `line` | `#E4DFD5` | divisórias decorativas | — |
| `field` | `#868073` | borda de inputs e selects | 3,7:1 (WCAG 1.4.11) |

**Segmentos** (base = cor do logo · suave = fundo · tinta = texto e ícone, com ≥ 4,5:1 sobre o suave e sobre o papel):

| Segmento | Base | Suave | Tinta |
|---|---|---|---|
| Educação Infantil | `#FCFA03` | `#F9F6BC` | `#6D5900` · 6,2:1 |
| Fundamental 1 | `#DB2C1B` | `#FFDDD5` | `#AF2D1B` · 5,2:1 |
| Fundamental 2 | `#036EA9` | `#D3ECF9` | `#09659F` · 5,1:1 |
| Ensino Médio | `#00279B` | `#D8DEFA` | `#00279B` · 8,9:1 |

**Funcionais:** `whatsapp` `#128C7E` (botão flutuante; é o verde-azulado oficial do WhatsApp — o verde claro `#25D366` dá 2:1 com branco e reprova) · `whatsapp-ink` `#075E54` (ícone nos botões secundários) · `error` `#B3241F` (6,2:1) · `success` `#21763C` (5,3:1) · foco: anel de 2 px em `brand-blue` com 3 px de respiro; sobre o campo azul, em `brand-yellow`.

**Regras:**

- Amarelo nunca é texto.
- O vermelho do logo sobre o papel dá 4,51:1 (passa raspando): texto vermelho usa `#AF2D1B`.
- A cor nunca é a única pista: toda etiqueta diz o nome do segmento por escrito.
- Contrastes-chave: branco sobre azul Anglo 11,9:1 · amarelo sobre azul Anglo 10,7:1 · tinta sobre amarelo 15,0:1 · branco sobre a tinta (rodapé) 16,7:1.

**Por que azul nos CTAs, e não vermelho:** o azul é a pincelada dominante do logo; aguenta texto branco com folga (11,9:1, contra 4,8:1 do vermelho); convive com o verde do WhatsApp sem clima de Natal; e foge do clichê papel creme + serifada + vermelho. O vermelho fica com o Fundamental 1 e o friso.

### 3.2 Tipografia

- **Títulos: Fraunces**, instância fixa **opsz 72 · SOFT 50 · peso 500–700**; o itálico usa WONK (as letras inclinadas que dão a segunda batida). Por que Fraunces, e não outra serifada: é a única serifada editorial livre com eixo de maciez — arredonda os terminais o suficiente para acolher uma família com criança de 1 ano, sem virar letra infantil. Testei SOFT 0/50/100 × opsz 36/72/144: opsz 144 fica frio e condensado; 36, pesado; 72 + SOFT 50 é o meio-termo "caloroso e confiante".
- **Texto: Manrope**, variável 400–800. Corpo em 450 (a 400 fica fina em telas 1x).
- **Peso na página:** Fraunces instanciada e servida localmente (`next/font/local`): 44 KB (romano) + 38 KB (itálico), contra 150 + 121 KB com todos os eixos. Manrope: 25 KB. **Total ~107 KB**, subconjunto latino.

| Papel | Fonte | Tamanho (360 → 1280 px) | Entrelinha | Detalhe |
|---|---|---|---|---|
| Display (H1) | Fraunces 600 | `clamp(2.5rem, 1.5rem + 3.9vw, 4.25rem)` · 40 → 68 | 1,03 | −0,02em; 2ª batida em itálico, azul Anglo |
| H2 | Fraunces 600 | `clamp(2rem, 1.4rem + 2.6vw, 3.25rem)` · 32 → 52 | 1,06 | −0,015em; mesma regra do itálico |
| H3 | Fraunces 600 | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` · 22 → 28 | 1,18 | |
| H4 / rótulo | Manrope 700 | 18 | 1,3 | |
| Lead | Manrope 450 | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` · 18 → 21 | 1,55 | `ink-muted` |
| Corpo | Manrope 450 | `clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)` · 17 → 18 | 1,6 | até 65 caracteres por linha |
| Microcopy | Manrope 500 | 15 | 1,5 | `ink-muted` |
| Legenda | Manrope 500 | 14 | 1,45 | "Fotografia real · local" |
| Eyebrow | Manrope 800 | 13 | 1,3 | maiúsculas, +0,12em, friso antes |
| Numeral de passo | Fraunces itálico 500 | `clamp(2.5rem, 2rem + 2vw, 3.5rem)` · 40 → 56 | 1 | 01 · 02 · 03 |

Tamanhos em `rem` + `vw`: o zoom de 200% continua funcionando (WCAG 1.4.4).

### 3.3 Espaço, grade e forma

- **Base 4 px.** Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Seção:** `clamp(4rem, 2.8rem + 5.3vw, 8rem)` de respiro vertical (64 → 128 px). Mais espaço acima do título do que abaixo: eyebrow → título 16 · título → lead 20 · lead → conteúdo 48 (64 no desktop).
- **Container:** conteúdo até 1200 px; margem lateral `clamp(1rem, 0.4rem + 2.7vw, 2.5rem)` (16 → 40 px).
- **Grade:** 12 colunas a partir de 1024 px (espaço de 24; 32 a partir de 1280) · 8 colunas de 768 a 1023 · 4 colunas abaixo de 768 (espaço de 16).
- **Cantos:** 8 (campos, etiquetas) · 14 (cards, vídeo) · 24 (fotos, painéis) · pílula (botões, botão flutuante).
- **Sombra:** uma só, para o que flutua (header ao rolar, WhatsApp, painel do Encontre a série): `0 1px 2px rgb(18 29 56 / .06), 0 12px 32px -8px rgb(18 29 56 / .18)`. Cards usam borda de 1 px.
- **Toque:** botões com 48 px de altura; ícones e links de menu com pelo menos 44 × 44 px.

### 3.4 Movimento

- Durações: 150 ms (hover, pressão) · 250 ms (menu, acordeão, abas) · 600 ms (revelação no scroll). Curva `cubic-bezier(0.22, 1, 0.36, 1)`.
- Revelação: opacidade + 12 px, uma vez, escalonada em 60 ms — só abaixo da dobra. O hero nunca espera animação (protege o LCP) e todo conteúdo é visível sem JavaScript.
- Hover dos CTAs: a seta anda 3 px na direção do destino (→ direita, ↓ baixo, ↗ diagonal).
- Motion (a biblioteca) só onde agrega — menu em tela cheia, abas de projetos, resultado do Encontre a série —, via `LazyMotion`. Revelações em CSS + `IntersectionObserver`.
- `prefers-reduced-motion`: sem deslocamento, e o vídeo do hero não toca sozinho.

### 3.5 Assinatura

1. **Friso tricolor** — azul · amarelo · vermelho em 2 : 1 : 1, a ordem das pinceladas. Onde: 4 px no topo do header e do rodapé; traço de 24 × 3 px antes de cada eyebrow; topo do Encontre a série e do formulário. Sobre o campo azul, o azul do friso vira branco. Nunca como decoração solta. *Validar com o manual.*
2. **A paleta amadurece** (3.1).
3. **Setas em SVG**, não em caractere: a Fraunces não tem → nem ↗ no subconjunto latino, e cada aparelho desenharia a seta de um jeito. Link externo (↗) sempre com "(abre em nova aba)" para leitor de tela.
4. **Legenda de foto** no padrão do Jairo: "Fotografia real · Criatto Lab, Tamarineira". Sem foto, placeholder neutro na proporção final com "FOTO: …".
5. **Numerais em Fraunces itálico** nos processos numerados.

## 4. H1 — três opções

Contexto igual nas três: eyebrow **"Matrículas 2027 abertas · Tamarineira, Recife"** e subtítulo **"Da Educação Infantil, a partir de 1 ano, ao 3º ano do Ensino Médio. Com o Sistema Anglo e projetos de liderança, tecnologia e comunicação."**

**A — recomendada**

> Dos primeiros passos ao vestibular. *Na mesma escola.*

Diz no próprio título o que diferencia a unidade: acompanhar a criança de 1 ano até o vestibular sem trocar de escola. "Primeiros passos" é literal (quem entra com 1 ano está aprendendo a andar) e figurado. É a única das três que passa sozinha no teste dos 10 segundos, e ainda carrega "escola" e "vestibular", termos da busca local.

**B**

> Acolhimento desde 1 ano. *Preparo até o vestibular.*

A mais clara: a idade está no título, e o paralelo desde/até junta as duas metades da decisão da família (emoção e razão). Menos memorável — "acolhimento" e "preparo" são palavras que toda escola usa. Com B, o subtítulo perde o "a partir de 1 ano" para não repetir.

**C — do briefing**

> Base forte para aprender. *Coragem para liderar.*

Amarra o "Líder" do nome e a Geração Líder, e fala com o estudante do F2 e do Médio que influencia a escolha. Não diz idade nem fase: depende inteiramente do eyebrow e do subtítulo.

Nas três, o título cabe em duas linhas no desktop (a 68 px). Por isso o hero virou composição de capa, com o título em largura total: lado a lado com a foto, a coluna de texto tinha 641 px e o título quebrava em quatro linhas.

## 5. Wireframe da Home

Mesma ordem no celular e no desktop. `[fundo]` indica a cor da seção; `*` = só com conteúdo confirmado.

### 5.1 Faixa de homologação + header

```
[friso tricolor, 4 px]
[amarelo suave]  Ambiente de homologação · textos e fotos em validação com a escola     ← só em homologação
[papel]
Desktop:  [Logo SVG]      A Escola  Segmentos  Projetos  Estrutura  Matrículas  Contato   (Agendar visita →)
Celular:  [Logo SVG]                                                         (Agendar)  (☰)
```

- Header fixo: 80 px, cai para 64 ao rolar e ganha a sombra de flutuação. Página atual marcada com `aria-current`.
- ☰ abre o menu em tela cheia: links em Fraunces 32 px, "Agendar visita →", WhatsApp, telefone*, endereço* e horário. Foco preso no menu, Esc fecha, o foco volta ao botão.
- Skip link "Pular para o conteúdo" antes de tudo.

### 5.2 Hero — composição de capa

```
[papel]
▬ MATRÍCULAS 2027 ABERTAS · TAMARINEIRA, RECIFE
Dos primeiros passos ao vestibular.                          ← H1 em largura total, 2 linhas
Na mesma escola.                                             ← itálico, azul Anglo

Da Educação Infantil, a partir de 1 ano,     ┌──────────────────────────────────┐
ao 3º ano do Ensino Médio. Com o Sistema     │ FOTO ou VÍDEO real, 16:9         │
Anglo e projetos de liderança, tecnologia    │ (sem som, em loop)               │
e comunicação.                               │                     (⏸ Pausar)   │
                                             └──────────────────────────────────┘
(Agendar visita →)                            Fotografia real · local
Conhecer os segmentos ↓
Visita guiada · sem compromisso · seg. a sex., 8h às 17h
          5 colunas                                      7 colunas
```

- Celular: eyebrow → H1 (40 px, 3–4 linhas) → subtítulo → "Agendar visita →" em largura total → "Conhecer os segmentos ↓" → microcopy → foto 4:3, que começa a aparecer na dobra.
- Vídeo só a partir de 768 px e sem "economia de dados"; no celular, a foto (que também é o pôster do vídeo). Botão de pausa sempre visível (WCAG 2.2.2).
- A foto é a candidata a LCP no desktop: `priority`, `sizes` real (641 px no desktop, 100vw no celular), AVIF/WebP.
- Placeholder até a foto chegar: "FOTO: famílias chegando pela entrada da escola, de manhã".
- Verificado no protótipo: a 1440 × 900 o painel do Encontre a série já entra na dobra; a 360 × 740 nada fica coberto.

### 5.3 Encontre a série — `#encontre-a-serie`

```
[painel de superfície, friso no topo, sobreposto à base do hero]
▬ ENCONTRE A SÉRIE
Em que série a criança entra em 2027?          [Mês de nascimento ▾]  [Ano de nascimento ▾]
─────────────────────────────────────────────────────────────────────────────────────────
[● EDUCAÇÃO INFANTIL]                                     Conhecer a Educação Infantil →
Em 2027: Infantil IV                                      Falar no WhatsApp ↗
Cálculo pela data de corte de 31 de março. A secretaria confirma a série na matrícula.
```

- **Mês + ano, não só o ano.** Pela data de corte de 31/03, quem nasceu em fevereiro de 2021 entra no 1º ano em 2027; quem nasceu em novembro de 2021, no Infantil V. Só com o ano, o resultado erra para quem nasceu de janeiro a março — cerca de um quarto das crianças. Se faltar o mês, o painel explica: "Falta o mês: quem nasce até 31 de março entra uma série à frente de quem nasce depois."
- Resultado na cor do segmento, anunciado para leitor de tela (`aria-live`). Tudo roda no navegador; nenhum dado é enviado.
- Estados: série encontrada · Ensino Médio ("a série também depende do histórico escolar") · menos de 1 ano · acima do 3º ano.
- WhatsApp com a série: "Olá! Vim pelo site e gostaria de informações sobre o Infantil IV para 2027." Evento `whatsapp_click` com segmento e série.
- O ano vem de `site.config.ts`: ao virar a campanha para 2028, a tabela se desloca sozinha.

**Tabela provisória** (idade completa até 31/03/2027) — validar com a secretaria, inclusive os nomes das turmas:

| Nascimento | Série em 2027 | Segmento |
|---|---|---|
| 01/04/2025 – 31/03/2026 | Infantil I | Educação Infantil |
| 01/04/2024 – 31/03/2025 | Infantil II | Educação Infantil |
| 01/04/2023 – 31/03/2024 | Infantil III | Educação Infantil |
| 01/04/2022 – 31/03/2023 | Infantil IV | Educação Infantil |
| 01/04/2021 – 31/03/2022 | Infantil V | Educação Infantil |
| 01/04/2020 – 31/03/2021 | 1º ano | Fundamental 1 |
| 01/04/2019 – 31/03/2020 | 2º ano | Fundamental 1 |
| 01/04/2018 – 31/03/2019 | 3º ano | Fundamental 1 |
| 01/04/2017 – 31/03/2018 | 4º ano | Fundamental 1 |
| 01/04/2016 – 31/03/2017 | 5º ano | Fundamental 1 |
| 01/04/2015 – 31/03/2016 | 6º ano | Fundamental 2 |
| 01/04/2014 – 31/03/2015 | 7º ano | Fundamental 2 |
| 01/04/2013 – 31/03/2014 | 8º ano | Fundamental 2 |
| 01/04/2012 – 31/03/2013 | 9º ano | Fundamental 2 |
| 01/04/2011 – 31/03/2012 | 1º ano do Médio | Ensino Médio |
| 01/04/2010 – 31/03/2011 | 2º ano do Médio | Ensino Médio |
| 01/04/2009 – 31/03/2010 | 3º ano do Médio | Ensino Médio |

### 5.4 Segmentos — `#segmentos`

```
[papel]
▬ SEGMENTOS
Quatro fases. Cada uma no seu tempo.
┌── amarelo ────┐ ┌── vermelho ───┐ ┌── azul-claro ─┐ ┌── azul Anglo ─┐
│ A PARTIR DE   │ │ 1º AO 5º ANO  │ │ 6º AO 9º ANO  │ │ 1º AO 3º ANO  │
│ 1 ANO         │ │               │ │               │ │               │
│ Educação      │ │ Fundamental 1 │ │ Fundamental 2 │ │ Ensino Médio  │
│ Infantil      │ │               │ │               │ │               │
│ frase         │ │ frase         │ │ frase         │ │ frase         │
│ Conhecer →    │ │ Conhecer →    │ │ Conhecer →    │ │ Conhecer →    │
└───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘
```

- 4 colunas no desktop, 2 × 2 no tablet, empilhados no celular. Card inteiro clicável.
- Frases, só com a base de conteúdo: **Infantil** — "Acolhimento e equipe pedagógica completa para as primeiras descobertas." · **F1** — "A continuidade da base: o momento de consolidar as aprendizagens." · **F2** — "Um novo ciclo: as disciplinas do currículo e as habilidades que as profissões do futuro pedem." · **Médio** — "Foco nos principais vestibulares e no desenvolvimento de soft skills."

### 5.5 Proposta — `#proposta` · o campo azul da página

```
[azul Anglo, largura total]
▬ PROPOSTA PEDAGÓGICA
Conteúdo que prepara. Habilidades que ficam.            ← 2ª batida em itálico amarelo
01                          02                           03
Base acadêmica do           Preparação para os           Liderança, comunicação
Sistema Anglo               principais vestibulares      e empreendedorismo
[A CONFIRMAR: detalhe]      [A CONFIRMAR: quais]         Na grade, com a Geração Líder,
                                                         e nos projetos da escola.
(Conhecer a proposta →)     ← botão amarelo, leva a /a-escola#proposta
```

### 5.6 Projetos — `#projetos`

```
[papel]
▬ PROJETOS PRÓPRIOS
Do Chromebook ao podcast. Aprender também é criar.
Desktop: abas verticais à esquerda, painel à direita
  01 Google for Education    ┌──────────────────────┐
  02 Criatto Lab             │ FOTO real, 4:3        │   Criatto Lab
  03 Geração Líder           └──────────────────────┘   duas linhas de descrição
  04 Além do Vest                                        [F2] [Médio]  ← segmentos [A CONFIRMAR]
  05 Pod Criar                                           Ver projeto →  (/projetos#criatto-lab)
Celular: as abas viram uma fileira de chips com rolagem horizontal; painel embaixo.
```

- Padrão de abas da WAI-ARIA: setas do teclado, Home/End. Nada troca sozinho.
- Descrições, só com a base de conteúdo: **Google for Education** — espaço com Chromebooks e as metodologias da plataforma Google · **Criatto Lab** — sala fora do padrão para protagonismo, liderança, comunicação, tecnologia e empreendedorismo · **Geração Líder** — disciplina da grade que desenvolve hard e soft skills · **Além do Vest** — conversas com profissionais da região sobre carreiras · **Pod Criar** — centro de criação onde estudantes fazem jornal, podcasts e comerciais.

### 5.7 Estrutura — `#estrutura`

```
[areia]
▬ ESTRUTURA
Veja a escola antes da visita.
┌────────────────────────────┐ ┌──────────┐ ┌──────────┐
│ VÍDEO INSTITUCIONAL  ▶     │ │ FOTO     │ │ FOTO     │
│ (YouTube só no clique)     │ ├──────────┤ ├──────────┤
│                            │ │ FOTO     │ │ FOTO     │
└────────────────────────────┘ └──────────┘ └──────────┘
Conhecer a estrutura →
```

- VideoLite: miniatura + "Assistir ao vídeo institucional"; o player (`youtube-nocookie`) só carrega no clique; evento `video_play`.
- Mosaico com 4 fotos, cada uma com legenda. Só ambientes confirmados.

### 5.8 Resultados — só com dados reais

Sem dados confirmados, a seção **não é renderizada**. Formato previsto: até 3 números em Fraunces, cada um com o que mede, o ano e a fonte por escrito.

### 5.9 Depoimentos — só reais e autorizados

Mesma regra. Formato previsto: citação em Fraunces itálico, nome e relação com a escola ("mãe de estudante do 3º ano"), foto só com autorização.

### 5.10 Como funciona a matrícula — `#matricula`

```
[papel]
▬ MATRÍCULAS 2027
Da primeira visita à vaga garantida.
01                  02                  03                  04
Agende a visita     Conheça a escola    [A CONFIRMAR]       Garanta a vaga
Pelo formulário     Visita guiada       Etapa definida      Documentos e contrato
ou pelo WhatsApp.   pelos espaços.      pela secretaria.    [A CONFIRMAR]
(Agendar visita →)
Formulário curto · usamos seus dados só para agendar a visita
```

### 5.11 Dúvidas frequentes — `#duvidas`

```
[areia]
▬ DÚVIDAS FREQUENTES
Perguntas de quem está escolhendo escola.
(+) A partir de que idade a escola recebe crianças?      "A partir de 1 ano, na Educação Infantil." ✓ confirmado
(+) Quais turnos a escola oferece? Tem período integral?  [A CONFIRMAR]
(+) Como funciona a visita?                               [A CONFIRMAR, exceto o horário]
(+) Quais documentos preciso para a matrícula?            [A CONFIRMAR]
(+) A escola oferece alimentação e transporte?            [A CONFIRMAR]
(+) Como os valores são informados?                       [A CONFIRMAR — mensalidades não vão para o site]
Ver todas as dúvidas →  (/matriculas#duvidas)
```

- Acordeão nativo (`<details>`): funciona no teclado sem JavaScript. Pergunta sem resposta validada não aparece em produção.

### 5.12 CTA final + mapa + horário — `#visita`

```
[papel]
┌── superfície, friso no topo ─────────┐  ┌──────────────────────────────┐
│ ▬ VISITE A ESCOLA                     │  │ MAPA (carrega no clique)     │
│ A melhor forma de escolher            │  │                              │
│ é conhecer.                           │  └──────────────────────────────┘
│ (Agendar visita →)  (WhatsApp ↗)      │  Endereço* · Como chegar ↗
│ Visita guiada · sem compromisso       │  Seg. a sex., 8h às 17h
└───────────────────────────────────────┘  Fins de semana e feriados: fechado
```

- Na Home, o CTA final fica em superfície clara (o campo azul da página já foi a Proposta). Nas internas, é ele o campo azul.
- Mapa do Google carregado só no clique: nenhum cookie de terceiro antes do consentimento e o LCP fica protegido. "Como chegar ↗" abre o Google Maps.

### 5.13 Rodapé

```
[tinta azul-noite, friso no topo]
[Logo negativo]                     Contato                     Navegação      Para famílias*
Colégio Anglo Líder Tamarineira     WhatsApp (81) 98254-1643    A Escola       [plataformas A CONFIRMAR]
Educação Infantil ao Ensino Médio   Telefone*                   Segmentos
na Tamarineira, Recife.             E-mail*                     Projetos
                                    Endereço*                   Estrutura
                                    Seg. a sex., 8h às 17h      Matrículas
                                                                Contato
Instagram ↗   Facebook ↗   YouTube ↗
────────────────────────────────────────────────────────────────────────────────
© {ano atual} Colégio Anglo Líder Tamarineira · Privacidade · Preferências de cookies
```

- Sobre a tinta: texto branco (16,7:1) e secundário `#BBC4D8` (9,5:1).
- Redes com nome acessível e aviso de nova aba. Ano do © automático.

### 5.14 Elementos flutuantes

- **WhatsApp:** 56 px, canto inferior direito, respeitando a área segura do iPhone. Para **não cobrir conteúdo**: aparece só depois que a pessoa rola além dos CTAs do hero; some sobre o formulário, sobre o CTA final (que tem o próprio botão) e sobre o rodapé; sobe quando o banner de cookies está aberto; some com o teclado aberto. A partir de 1360 px ele fica na margem lateral, fora da coluna de conteúdo. Mensagem por página e segmento, vinda de `site.config.ts`; evento `whatsapp_click`.
- **Banner de cookies (LGPD):** faixa inferior compacta, sem bloquear a página: "Aceitar" · "Só os necessários" · "Configurar". Consent Mode v2 no GTM: tags de marketing só disparam depois do aceite.

## 6. Decisões para aprovar

1. **H1:** A (recomendada), B ou C.
2. **Nome de trabalho:** "Colégio Anglo Líder Tamarineira" (curto: "Anglo Líder Tamarineira") até a escola confirmar o oficial.
3. **Cor dos CTAs:** azul Anglo (recomendado). O vermelho fica com o Fundamental 1 e o friso.
4. **Encontre a série:** mês + ano (recomendado) ou só o ano, como está no briefing.
5. **Hero em composição de capa** (título em largura total; texto + foto abaixo), em vez de texto e foto lado a lado.

Pedido: os anexos previstos no briefing (logo SVG, manual do Sistema Anglo, fotos). Quando o manual chegar, a paleta é conferida contra ele antes de a etapa 2 fechar.

## 7. Etapa 2, depois da aprovação

- Next.js (App Router) + TypeScript + Tailwind v4 (tokens em `@theme`) + Motion; fontes locais; `site.config.ts` com nome, ano da campanha, contatos e modelos de mensagem; conteúdo tipado em `/content`.
- Layout base: header, menu em tela cheia, rodapé, faixa de homologação, WhatsApp flutuante, banner de cookies.
- Componentes: Section, Eyebrow, Heading, Button, SegmentCard, ProjectCard, Gallery, VideoLite, FAQ, LeadForm, WhatsAppButton, SeriesFinder.
- Sem mockups gerados por IA — o briefing proíbe imagem de IA de alunos e da estrutura. A referência visual é este style tile + o protótipo do hero.
