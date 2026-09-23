# Pendências — Colégio Anglo Líder Tamarineira

Tudo que o site precisa e ainda não foi confirmado pela escola. Regra do projeto: nada daqui entra inventado. No código, o item é declarado com `aConfirmar('...')` (`lib/pending.ts`): em homologação aparece com o marcador amarelo "A confirmar"; em produção, o bloco que depende dele não aparece.

Atualizado em 23/09/2026 (etapa 4 — páginas internas: A Escola, Segmentos e as 4 páginas de segmento, Projetos, Estrutura, Matrículas, Contato e Privacidade).

## Decisões da etapa 1 (aprovadas em 23/09/2026)

- [x] H1 da Home: opção C — "Base forte para aprender. Coragem para liderar."
- [x] Nome de trabalho: "Colégio Anglo Líder Tamarineira" (forma curta: "Anglo Líder Tamarineira") — o nome oficial ainda precisa ser confirmado pela escola (ver "Marca e arquivos").
- [x] Cor dos CTAs: azul Anglo `#00279B`.
- [x] "Encontre a série": mês + ano de nascimento.
- [x] Hero em composição de capa; WhatsApp flutuante só depois dos CTAs do hero.

## Marca e arquivos

- [ ] **Logo oficial em SVG** (positiva, negativa e monocromática). O briefing previa o anexo, mas ele não chegou; no site atual só existe `img/logo_branca_colorida.png` (624×375, versão para fundo escuro).
  - Hoje: o rodapé (fundo azul-noite) usa esse PNG, que é a versão para fundo escuro. O cabeçalho usa a mesma arte com as letras em azul Anglo (`public/marca/logo-positivo.png`), porque o branco some no papel claro. Favicon e ícones de app vêm do ícone atual do site (`/img/favicon_io/`) — refazer a partir do SVG oficial.
- [ ] **Manual de marca do Sistema Anglo**: cores oficiais (Pantone/CMYK/RGB), área de proteção, tamanho mínimo, usos proibidos. A paleta provisória foi medida pixel a pixel no PNG do logo: azul em degradê `#036EA9` → `#00279B`, amarelo `#FCFA03`, vermelho `#DB2C1B`. Se o manual divergir, o manual manda.
- [ ] Validar com o manual o uso do "friso tricolor" (as três cores em faixa, como na gola do uniforme) como elemento gráfico do site.
- [ ] Marca **Criatto Educação**: aparece ao lado do logo no banner atual. Pode ser citada? Tem logo e regras de uso?
- [ ] Nome oficial único. Hoje coexistem: "Anglo Líder Tamarineira" (title), "Colégio Anglo - Unidade Tamarineira" (texto), "Anglo Tamarineira" (alt e WhatsApp), "Colégio Anglo Tamarineira" (rodapé) e "Colégio Anglo Líder Tamarineira" (arte do banner). Precisa bater com o Perfil da Empresa no Google.

## Endereço e contato (NAP — tem que ser idêntico ao Perfil da Empresa no Google)

- [x] Endereço (rua e número), confirmado em 23/09/2026: R. Visc. de Abaeté, 200, Tamarineira, Recife/PE. O mapa usa esse endereço.
- [x] CEP, confirmado em 23/09/2026: 52110-010.
- [x] Telefone fixo, confirmado em 23/09/2026: (81) 3304-8400. (Card "Telefone" em /contato e rodapé.)
- [ ] E-mail de contato. (Card "E-mail" em /contato e rodapé.)
- [ ] Coordenadas (latitude/longitude) e link do Perfil da Empresa no Google — para o JSON-LD `School` e o botão "Como chegar".
- [ ] Horário de visitas: vale o mesmo do atendimento (seg. a sex., 8h às 17h)? Há sábado em período de matrícula?
- [ ] Microcopy "Visita guiada · sem compromisso": confirmar que a visita é guiada pela equipe.
- [ ] Card do WhatsApp em /contato diz "Mensagens e agendamento de visitas": confirmar que o número agenda visitas.

## Segmentos e rotina

- [ ] **Tabela ano de nascimento → série 2027** (secretaria), com a nomenclatura oficial das turmas da Educação Infantil (o banner atual diz "Infantil I ao Ensino Médio"). Enquanto não for validada, o "Encontre a série" (Home) e a tabela "Data de nascimento e série" (/segmentos#series) só aparecem em homologação (`validadaPelaSecretaria` em `content/series.ts`). A bio do Instagram diz "Ed Infantil 1 ao Ens Médio", o que apoia "Infantil I" para 1 ano.
- [ ] Nomes oficiais das turmas da Educação Infantil: sem eles, a régua "Séries" do topo de /segmentos/educacao-infantil não aparece em produção.
- [ ] Regra para quem completa 1 ano ao longo de 2027: pode entrar? Em qual turma?
- [ ] Turnos e período integral, por segmento.
- [ ] Rotina de cada segmento (horários, atividades fixas) — bloco "No dia a dia" das 4 páginas de segmento (hoje, uma frase da base de conteúdo).
- [ ] Alimentação.
- [ ] Transporte.
- [ ] Sistema Anglo: presente em todos os segmentos? Qual material/plataforma a família usa?
- [x] Ensino Médio: os principais vestibulares são ENEM e SSA (confirmado em 23/09/2026).
- [ ] Itens que estão no banner atual mas **fora da base de conteúdo** do briefing: "Escolinha de esportes", "Formação integral", "Metodologias ativas", "Estrutura que acolhe" e o slogan "Criando pessoas autorais num mundo de cópias". Entram ou não?

## Projetos

- [ ] Segmentos atendidos por projeto: Google for Education, Criatto Lab, Geração Líder, Além do Vest, Pod Criar. Sem isso, as etiquetas de segmento de /projetos não aparecem e a seção "Projetos" das páginas de segmento fica fora da produção (não dá para listar os cinco em todo segmento sem saber quais atendem cada um).
- [ ] Uma foto real de cada projeto (com autorização de imagem quando houver estudantes).
- [ ] Os temas usados como eyebrow em /projetos (Tecnologia, Protagonismo, Liderança, Carreiras, Comunicação) saíram do resumo de cada projeto — conferir se a escola concorda.

## A escola

- [ ] Anos de história da unidade e outras unidades da rede Anglo Líder (seção "História" de /a-escola — só em homologação até chegar o texto).
- [ ] Inclusão: práticas, sala de AEE, acompanhamento de estudantes com deficiência (seção de /a-escola e pergunta do FAQ).

## Estrutura e acessibilidade

- [ ] Lista confirmada de espaços. Diretórios citam: biblioteca, quadra coberta, pátio coberto, salas climatizadas, elevador, rampas e sala de AEE. Em /estrutura, "Outros espaços" e "Acessibilidade" só aparecem em homologação; cada espaço entra em produção quando for confirmado (`content/estrutura.ts`).
- [ ] **Vídeo institucional está PRIVADO no YouTube** (youtube.com/watch?v=M67_GShkIzQ mostra "Este é um vídeo privado", verificado em 23/09/2026) — o botão do site atual leva a uma tela de login. Tornar o vídeo público ou "não listado", ou enviar outro. Até lá, o bloco de vídeo (Home e topo de /estrutura) não aparece em produção.
- [x] Canal do YouTube, confirmado em 23/09/2026: https://www.youtube.com/@anglotamarineira/featured. O handle antigo @anglotamarineira5930 responde 404.
- [ ] Vídeo curto para o hero (opcional): 6–10 s, sem som, real.

## Matrícula

- [ ] Passo 03 do processo (entre a visita e a vaga garantida).
- [ ] Documentos exigidos (seção "Documentos" de /matriculas — só em homologação até chegar a lista).
- [ ] Como os valores são informados à família (mensalidades não são publicadas no site).
- [ ] Respostas validadas para o FAQ: 10 perguntas em `content/faq.ts`, só "A partir de que idade…" tem resposta. Em produção, cada pergunta aparece quando a resposta chegar.

## Prova e credibilidade (seções só aparecem com material real)

- [ ] Resultados e aprovações, com fonte e ano.
- [ ] Depoimentos reais, com autorização por escrito.
- [ ] Anos de história da unidade.
- [ ] Rede Anglo Líder: outras unidades.

## Fotos

- [ ] Fotos reais por ambiente, segmento e projeto. De estudantes, só com autorização de uso de imagem assinada pelos responsáveis. Cada espaço já tem a descrição do que a foto deve mostrar (placeholders em homologação): 3 por segmento (`content/segmentos.ts`), 1 por projeto (`content/projetos.ts`), 1 por ambiente (`content/estrutura.ts`). Em produção, galerias e cards mostram só fotos reais.
- [ ] Foto (ou vídeo) do hero: sugestão — entrada da escola com famílias chegando, ou estudantes em atividade no pátio.

## Plataformas, medição e dados

- [ ] Links do bloco "Para famílias" (rodapé e /contato).
- [ ] Acesso ao GTM-W9QMS4S2 para configurar consentimento (LGPD) e os eventos `generate_lead`, `whatsapp_click`, `cta_click`, `video_play`.
- [ ] Quem recebe o aviso de novo lead por e-mail; contas Supabase e Resend; domínio de envio. **Hoje o formulário valida e passa pela checagem do servidor (antirrobô e limite de envios), mas não grava nem avisa ninguém**: em homologação, a mensagem diz isso e oferece o WhatsApp (etapa 5).

## Política de privacidade (/privacidade)

- [ ] **Revisão jurídica** do texto-base antes da produção.
- [ ] Mantenedora (controladora): razão social e CNPJ.
- [ ] Encarregado pelo tratamento de dados (DPO): nome e e-mail para pedidos de titulares.
- [ ] Prazo de guarda dos pedidos de visita.
- [ ] Lista final de prestadores (previstos: Vercel, Supabase, Resend) e região de armazenamento — se fora do Brasil, citar a transferência internacional (LGPD, art. 33).
- [ ] Quem na escola terá acesso aos pedidos de visita.
- [ ] Data de vigência da política.
- [ ] Aviso de cookies e link "Preferências de cookies" no rodapé (etapa 5, com o GTM) — a política já descreve esse funcionamento.

## Técnico (para acompanhar no deploy)

- [ ] Medir de novo o desempenho na Vercel (com CDN e HTTP/2). Localmente, com rede e CPU estranguladas (Lighthouse, celular): LCP ~1,3 s e CLS ≤ 0,03 com o CSS embutido no HTML (`experimental.inlineCss` em `next.config.ts`). A pontuação simulada padrão do Lighthouse fica em 93–96 e estima o LCP em 2,8–3,2 s, porque conta o download do JavaScript no caminho da primeira pintura.
