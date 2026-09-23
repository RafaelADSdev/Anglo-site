# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS + Motion, deploy na Vercel — definido pelo briefing (`docs/briefing.md` §11). Leads: Supabase (tabela `leads` com RLS) + aviso por e-mail via Resend (etapa 5).

## Users

- **Principal:** mães, pais e responsáveis da Zona Norte do Recife e arredores, quase sempre no celular, muitas vezes vindos do Instagram ou de anúncios, comparando escolas. Decidem pelo emocional (acolhimento, segurança) e pelo racional (resultados, estrutura, localização, rotina).
- **Secundário:** estudantes do Fundamental 2 e do Médio, que influenciam a escolha; famílias já matriculadas em busca de contatos e links rápidos.

## Product Purpose

Site institucional multipágina do Colégio Anglo Líder Tamarineira (Recife/PE). Objetivo principal: gerar agendamentos de visita e contatos para as Matrículas 2027 (formulário + WhatsApp). Secundários: credibilidade (Sistema Anglo + projetos próprios), responder às dúvidas comuns antes do contato, ranquear nas buscas locais.

Sucesso = teste dos 10 segundos: em qualquer página, no celular, o responsável entende o que é a escola, para quais idades, onde fica e como agendar, com o CTA sempre a um toque.

## Positioning

Uma unidade que acompanha a criança da Educação Infantil (a partir de 1 ano) ao 3º ano do Ensino Médio, com o Sistema Anglo como base acadêmica e cinco projetos próprios: Google for Education, Criatto Lab, Geração Líder, Além do Vest e Pod Criar.

## Operating Context

- Campanha anual de matrícula; o ano da campanha muda em um único lugar (`site.config.ts`).
- Atendimento de segunda a sexta, das 8h às 17h; fechado em fins de semana e feriados.
- Conversão por formulário "Agendar visita" e por WhatsApp (+55 81 98254-1643) com mensagem contextual por página e segmento.
- Medição: GTM-W9QMS4S2, meta `facebook-domain-verification`, eventos `generate_lead`, `whatsapp_click`, `cta_click`, `video_play`; tags de marketing só após consentimento (LGPD).

## Capabilities and Constraints

- Segmentos: Educação Infantil (a partir de 1 ano) · Fundamental 1 (1º ao 5º ano) · Fundamental 2 (6º ao 9º ano) · Ensino Médio (até o 3º ano).
- "Encontre a série": ano e mês de nascimento → série em 2027, pela data de corte de 31 de março; tabela a validar pela secretaria.
- Mensalidades não são publicadas.
- Performance: Lighthouse mobile ≥ 90 (com tags ativas), Acessibilidade/Boas Práticas/SEO ≥ 95; LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
- Acessibilidade WCAG 2.2 AA; SEO local com JSON-LD `School`; homologação com `noindex` + faixa de aviso até a aprovação.
- **Em aberto (não inventar):** nome oficial, endereço, telefone fixo, e-mail, turnos, alimentação, transporte, anos de história, outras unidades da rede, aprovações, itens de estrutura e acessibilidade — lista viva em `PENDENCIAS.md`.

## Brand Commitments

- Marca do Sistema Anglo: logo com três pinceladas (azul em degradê, amarelo, vermelho). Valores medidos no PNG em uso: azul `#036EA9`→`#00279B`, amarelo `#FCFA03`, vermelho `#DB2C1B`. O manual oficial prevalece quando chegar.
- Nome de trabalho: "Colégio Anglo Líder Tamarineira" (forma curta "Anglo Líder Tamarineira"), até a escola confirmar o oficial.
- Voz: acolhedora, confiante e clara; frases curtas; toda afirmação com algo concreto ao lado; sem adjetivo solto ("inovadora", "transformadora", "disruptiva"); linguagem inclusiva sem "filho(a)" ou "seu/sua".
- Direção do autor (briefing §5): títulos em duas batidas com a segunda em itálico, eyebrow acima de cada título, microcopy de confiança sob os CTAs, setas de destino (→ ↓ ↗), passos numerados, fotografia real com legenda.

## Evidence on Hand

- Textos-base dos segmentos e projetos (briefing §10); contatos e horário do site atual; vídeo institucional youtube.com/watch?v=M67_GShkIzQ.
- **Ausente — não fabricar:** fotos reais (nenhuma recebida), logo em SVG, manual de marca, resultados/aprovações, depoimentos. Seções de resultados e depoimentos só existem com material real e autorizado.

## Product Principles

1. A trajetória é a prova: mostrar a escola pelo caminho da criança, de 1 ano ao vestibular, não por adjetivos.
2. Honestidade editorial: pendência vira `[A CONFIRMAR]` no código e some em produção.
3. Um toque até o contato: agendar visita e WhatsApp sempre à mão, sem cobrir conteúdo.
4. Celular primeiro: cada decisão é testada em 360–390 px antes do desktop.

## Accessibility & Inclusion

WCAG 2.2 AA: skip link, `lang="pt-BR"`, hierarquia de headings, contraste medido, foco visível, teclado em menu/abas/FAQ, alt descritivo, zoom liberado, aviso em links que abrem nova aba, alvos de toque ≥ 44 px, `prefers-reduced-motion` respeitado. Fotos de estudantes só com autorização de uso de imagem assinada pelos responsáveis.
