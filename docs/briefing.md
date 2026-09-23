<!-- Briefing original do projeto, recebido em 22/09/2026. Fonte da verdade do escopo: não editar; decisões posteriores vão em docs/etapa-*.md -->

# Redesign do site — Colégio Anglo Líder Tamarineira

Anexos: logo oficial (SVG), manual de marca do Sistema Anglo, fotos reais da escola e prints das minhas referências. [remova o que não for anexar]

## 1. Papel
Atue como designer de produto e desenvolvedor front-end sênior, especialista em sites institucionais de alta conversão, SEO local e acessibilidade. A missão é refazer do zero o site do Colégio Anglo Líder Tamarineira (Recife/PE), hoje em https://colegioanglotamarineira.com.br, com acabamento de agência premium.

## 2. Objetivo
- Principal: gerar agendamentos de visita e contatos para as Matrículas 2027 (formulário + WhatsApp).
- Secundários: transmitir credibilidade (Sistema Anglo + projetos próprios), responder às dúvidas mais comuns antes do contato e ranquear nas buscas locais.
- Teste dos 10 segundos: em qualquer página, no celular, o responsável entende o que é a escola, para quais idades, onde fica e como agendar, com o CTA sempre a um toque.

## 3. Público
- Principal: mães, pais e responsáveis da Zona Norte do Recife e arredores, quase sempre no celular (muitas vezes vindos do Instagram ou de anúncios), comparando escolas. Decidem pelo emocional (acolhimento, segurança) e pelo racional (resultados, estrutura, localização, rotina).
- Secundário: estudantes do Fundamental 2 e do Médio, que influenciam a escolha, e famílias já matriculadas em busca de contatos e links rápidos.

## 4. Diagnóstico do site atual (não herdar nada disso)
- One-page de template, com um único CTA genérico repetido e textos longos sem hierarquia.
- Conteúdo desatualizado: sobra de template com lorem ipsum no código, mensagem pronta do WhatsApp citando a matrícula de 2024 e rodapé com © 2023.
- Erros de digitação e de concordância em vários trechos.
- Nenhum endereço, mapa, telefone fixo ou e-mail; sem meta description; viewport com `maximum-scale=1` (bloqueia o zoom em muitos aparelhos — falha de acessibilidade).
- Três nomes diferentes para a mesma escola. Use um nome oficial único: [A CONFIRMAR].

## 5. Direção criativa — o DNA dos meus projetos
Siga a linguagem de dois sites que desenvolvi (prints anexos): site-jairo-rocha.vercel.app e site-espelhos-digitais.vercel.app.
- Títulos editoriais curtos, em duas batidas, às vezes com a segunda parte em itálico. Ex.: "Menos filtro. Mais contexto." / "Os endereços mudam. A confiança permanece."
- Eyebrow (rótulo curto) acima de cada título de seção.
- Microcopy de confiança logo abaixo dos CTAs. Ex.: "Visita guiada · sem compromisso · seg. a sex., 8h às 17h".
- Setas nos CTAs indicando o destino: → ação, ↓ rolar a página, ↗ link externo.
- Processos em passos numerados (01, 02, 03); números em destaque só com dado real e fonte.
- Fotografia real com legenda, muito respiro, paleta enxuta com um acento forte.
- Interatividade útil, não decorativa (lá: busca guiada e autoavaliação; aqui: o "Encontre a série" do item 8).
- Honestidade editorial: nada de dado, depoimento, selo ou foto inventados. Conteúdo pendente vira `[A CONFIRMAR: ...]` no código e, em produção, o bloco simplesmente não aparece.
- Rigor técnico: skip link, metadados completos, `noindex` + faixa de "Ambiente de homologação" até a aprovação.

Ajuste para este cliente: mais acolhedor e luminoso que as referências (há crianças a partir de 1 ano), sem perder a seriedade de quem prepara para o vestibular. Em uma frase: editorial, caloroso e confiante.

## 6. Identidade visual
- Marca: logo oficial em SVG, respeitando o manual do Sistema Anglo (versões, área de proteção, cores). Extraia a paleta exata dos arquivos oficiais, nada de aproximar no olho.
- Cor: fundo off-white quente, texto em tom escuro profundo (não preto puro) e a cor principal da marca nos CTAs e detalhes. Cada segmento ganha uma cor de apoio derivada da paleta (etiquetas, ícones, fundos suaves) para orientar a navegação.
- Tipografia: títulos em serifada editorial com itálico expressivo (sugestão: Fraunces); textos em sans humanista bem legível (sugestão: Manrope). Corpo de 17–18 px, entrelinha ~1,6, escala fluida com `clamp()`.
- Layout: grid de 12 colunas, largura máxima ~1200 px, cantos arredondados moderados, sombras mínimas, seções com muito respiro.
- Movimento: revelações sutis no scroll e hovers discretos; nada de parallax pesado nem carrossel automático; respeitar `prefers-reduced-motion`.
- Fotos: somente reais, e de alunos só com autorização de uso de imagem assinada pelos responsáveis. Proibido banco de imagem genérico e imagem gerada por IA representando alunos, professores ou a estrutura. Sem foto ainda? Placeholder neutro na proporção final, com a descrição do que entra ali (ex.: "FOTO: alunos no Criatto Lab").

## 7. Arquitetura (multipágina)
- `/` — Home
- `/a-escola` — proposta pedagógica, Sistema Anglo, história e rede Anglo Líder [A CONFIRMAR], inclusão e acessibilidade
- `/segmentos` + `/segmentos/educacao-infantil`, `/segmentos/fundamental-1`, `/segmentos/fundamental-2`, `/segmentos/ensino-medio` — cada página com faixa etária e séries, o que a criança vive e aprende, rotina e turnos [A CONFIRMAR], projetos do segmento, galeria, FAQ e CTA com mensagem de WhatsApp própria
- `/projetos` — os 5 projetos, cada um com âncora própria
- `/estrutura` — vídeo, galeria por ambiente, acessibilidade
- `/matriculas` — Matrículas 2027: passo a passo, documentos [A CONFIRMAR], formulário de agendamento, FAQ
- `/contato` — endereço, mapa, telefones, WhatsApp, horário, redes
- `/privacidade` — política de privacidade (LGPD) do formulário e dos cookies
- 404 personalizada
- No rodapé, um bloco "Para famílias" com links para as plataformas que a escola já usa [A CONFIRMAR].

## 8. Home, seção por seção
1. Header fixo: logo, menu (A Escola, Segmentos, Projetos, Estrutura, Matrículas, Contato) e botão "Agendar visita" sempre visível; no mobile, menu em tela cheia.
2. Hero: foto ou vídeo curto real da escola (sem som, com botão de pausa); eyebrow "Matrículas 2027 abertas · Tamarineira, Recife"; H1 em duas batidas (proponha 3 opções — ex.: "Base forte para aprender. *Coragem para liderar.*"); subtítulo com a promessa completa (da Educação Infantil, a partir de 1 ano, ao 3º ano do Médio, com o Sistema Anglo e projetos de liderança, tecnologia e comunicação); CTAs "Agendar visita →" e "Conhecer os segmentos ↓"; microcopy de confiança.
3. Encontre a série (interativo): o responsável informa o ano de nascimento e vê em qual série a criança entra em 2027, com link para o segmento e WhatsApp com a mensagem já preenchida. Tabela idade → série fornecida pela secretaria [A CONFIRMAR] (referência: data de corte em 31 de março).
4. Segmentos: 4 cards com a cor de apoio, faixa etária, uma frase e link.
5. Proposta: 3 pilares numerados — base acadêmica do Sistema Anglo, preparação para os principais vestibulares e habilidades comportamentais (liderança, comunicação, empreendedorismo).
6. Projetos: os 5 em abas ou rolagem horizontal acessível, com foto real, 2 linhas e segmentos atendidos [A CONFIRMAR].
7. Estrutura: vídeo institucional (YouTube carregado só no clique) + mosaico de fotos + link para /estrutura.
8. Resultados: só com dados reais e fonte [A CONFIRMAR]; sem dados, a seção não é renderizada.
9. Depoimentos: só reais e autorizados [A CONFIRMAR]; mesma regra.
10. Como funciona a matrícula: passos numerados (ex.: 01 Agende a visita · 02 Conheça a escola · 03 [A CONFIRMAR] · 04 Garanta a vaga).
11. FAQ curto: 5–6 perguntas com respostas validadas pela escola.
12. CTA final + mapa + horário de atendimento.
13. Rodapé: contatos, redes, links, "Para famílias", privacidade e © com ano automático.

## 9. Conversão, leads e medição
- WhatsApp flutuante (+55 81 98254-1643) que não cobre conteúdo, com mensagem pré-preenchida por página e segmento (ex.: "Olá! Vim pelo site e gostaria de informações sobre o Ensino Médio para 2027.").
- Formulário "Agendar visita" com o mínimo necessário: nome do responsável, WhatsApp (máscara BR), e-mail opcional, segmento de interesse, melhor período para a visita, como conheceu a escola e consentimento LGPD (checkbox desmarcado + link para a política). Guardar UTMs e página de origem em campos ocultos.
- Envio: salvar o lead (ex.: tabela `leads` no Supabase, com RLS) e avisar a equipe por e-mail (ex.: Resend); validação no cliente e no servidor, honeypot e rate limit. Depois do envio, tela de confirmação com botão "Falar agora no WhatsApp".
- Medição: manter o GTM atual (GTM-W9QMS4S2) e a meta tag `facebook-domain-verification` (my6hhjure3xgtjnaqjz2iz1ebm6y14). Eventos no dataLayer: `generate_lead`, `whatsapp_click` (com o segmento), `cta_click` e `video_play`. Banner de cookies (LGPD): tags de marketing só disparam após o consentimento.
- Fase 2 (opcional): /admin simples para a equipe de matrículas filtrar e exportar leads (CSV) e mudar o status (novo → contatado → visita agendada → matriculado); assistente de matrícula com respostas guiadas, no estilo do site Jairo Rocha, terminando no WhatsApp.

## 10. Base de conteúdo (fatos para reescrever com copy nova — não acrescentar nada além disto)
- Segmentos: Educação Infantil (a partir de 1 ano; acolhimento e equipe pedagógica completa) · Fundamental 1, do 1º ao 5º ano (continuidade e consolidação das aprendizagens) · Fundamental 2, do 6º ao 9º ano (novo ciclo: disciplinas curriculares + habilidades para as profissões do futuro) · Ensino Médio, até o 3º ano (foco nos principais vestibulares e em soft skills).
- Projetos: Google for Education (espaço com Chromebooks e metodologias da plataforma Google) · Criatto Lab (sala fora do padrão; protagonismo, liderança, comunicação, tecnologia e empreendedorismo) · Geração Líder (disciplina da grade que desenvolve hard e soft skills) · Além do Vest (conversas com profissionais da região sobre carreiras) · Pod Criar (centro de criação: jornal, podcasts e comerciais feitos com os alunos).
- Contatos do site atual: WhatsApp (81) 98254-1643 · Instagram @anglolidertamarineira · facebook.com/anglolidertamarineira · YouTube @anglotamarineira5930 · vídeo institucional youtube.com/watch?v=M67_GShkIzQ · atendimento de segunda a sexta, das 8h às 17h (fechado em fins de semana e feriados).
- [A CONFIRMAR]: nome oficial; endereço (diretórios citam Rua Visconde de Abaeté, 200 – Tamarineira, CEP 52110-010); telefone fixo (diretórios citam (81) 3304-8400); e-mail; turnos e período integral; alimentação; transporte; anos de história; outras unidades da rede; aprovações; itens de estrutura e acessibilidade (diretórios citam biblioteca, quadra e pátio cobertos, salas climatizadas, elevador, rampas e sala de AEE). Mensalidades não são publicadas.

## 11. Stack e padrão técnico
- Next.js (App Router) + TypeScript + Tailwind CSS; animações leves com Motion (ex-Framer Motion); deploy na Vercel.
- Conteúdo tipado e centralizado em `/content` + `site.config.ts` (nome oficial, ano da campanha, contatos, links, modelos de mensagem do WhatsApp). O ano da matrícula muda em um único lugar, nunca hardcoded.
- Componentes reutilizáveis: Section, Eyebrow, Heading, Button, SegmentCard, ProjectCard, Gallery, VideoLite, FAQ, LeadForm, WhatsAppButton, SeriesFinder.
- Performance: Lighthouse mobile com Performance ≥ 90 (com as tags ativas) e Acessibilidade, Boas Práticas e SEO ≥ 95; LCP < 2,5 s, CLS < 0,1, INP < 200 ms; `next/image` (AVIF/WebP, `sizes` corretos), `next/font`, YouTube só no clique, nenhuma biblioteca pesada sem necessidade.
- Acessibilidade WCAG 2.2 AA: skip link, `lang="pt-BR"`, hierarquia de headings, contraste, foco visível, teclado em menu, abas e FAQ, alt descritivo, zoom liberado, aviso em links que abrem nova aba, alvos de toque ≥ 44 px.
- SEO local: title e description únicos por página, Open Graph com imagem por página, canonical, sitemap.xml, robots.txt, JSON-LD `School` (endereço, geo, telefone, horário e `sameAs` com as redes), breadcrumbs, URLs em português sem acento, nome/endereço/telefone idênticos aos do Perfil da Empresa no Google e termos naturais (escola e colégio na Tamarineira, Zona Norte do Recife, educação infantil, ensino médio, vestibular).
- Homologação com `noindex` + faixa de aviso; no lançamento, liberar a indexação e enviar o sitemap ao Search Console.

## 12. Tom de voz e texto
- Acolhedor, confiante e claro. Frases curtas. Toda afirmação vem com algo concreto ao lado (um projeto, um espaço, uma prática), nada de adjetivo solto como "inovadora", "transformadora" ou "disruptiva".
- Linguagem inclusiva sem formas como "filho(a)" ou "seu/sua": prefira "a criança", "estudantes", "sua família".
- Revisão ortográfica impecável.
- Nunca inventar números, prêmios, aprovações, depoimentos, nomes de pessoas, preços ou prazos: marcar `[A CONFIRMAR: ...]` e registrar em `PENDENCIAS.md`.

## 13. Como vamos trabalhar
1. Antes de codar: proponha o sitemap final, os design tokens (cores, tipografia, espaçamentos), 3 opções de H1 e um wireframe em texto da Home. Aguarde minha aprovação.
2. Design system + layout base (header, footer, componentes).
3. Home completa.
4. Páginas internas.
5. Formulário e leads, medição, SEO, acessibilidade e performance.
6. QA e entrega: relatório do Lighthouse, `PENDENCIAS.md` e README explicando como editar textos, trocar fotos e virar o ano da matrícula.

## Critérios de aceite
- Zero lorem ipsum, zero erro no console, zero conteúdo inventado.
- Testado em 360, 390, 768, 1024, 1280 e 1440 px, no Safari iOS e no Chrome Android.
- Todo botão de WhatsApp com mensagem contextual; todo envio do formulário dispara `generate_lead`.
- Metas de performance e acessibilidade do item 11 atingidas.
