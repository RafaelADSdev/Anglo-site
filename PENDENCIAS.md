# Pendências — Colégio Anglo Líder Tamarineira

Tudo que o site precisa e ainda não foi confirmado pela escola. Regra do projeto: nada daqui entra inventado. No código, o item é declarado com `aConfirmar('...')` (`lib/pending.ts`): em homologação aparece com o marcador amarelo "A confirmar"; em produção, o bloco que depende dele não aparece.

Atualizado em 23/09/2026 (etapas 2 e 3 — design system e Home em código).

## Decisões da etapa 1 (aprovadas em 23/09/2026)

- [x] H1 da Home: opção C — "Base forte para aprender. Coragem para liderar."
- [x] Nome de trabalho: "Colégio Anglo Líder Tamarineira" (forma curta: "Anglo Líder Tamarineira") — o nome oficial ainda precisa ser confirmado pela escola (ver "Marca e arquivos").
- [x] Cor dos CTAs: azul Anglo `#00279B`.
- [x] "Encontre a série": mês + ano de nascimento.
- [x] Hero em composição de capa; WhatsApp flutuante só depois dos CTAs do hero.

## Marca e arquivos

- [ ] **Logo oficial em SVG** (positiva, negativa e monocromática). O briefing previa o anexo, mas ele não chegou; no site atual só existe `img/logo_branca_colorida.png` (624×375, versão para fundo escuro).
  - Hoje: o rodapé (fundo azul-noite) usa esse PNG, que é a versão para fundo escuro; o cabeçalho mostra um espaço reservado "Logo oficial · SVG pendente" até chegar a versão positiva. Favicon e ícones de app vêm do ícone atual do site (`/img/favicon_io/`) — refazer a partir do SVG oficial.
- [ ] **Manual de marca do Sistema Anglo**: cores oficiais (Pantone/CMYK/RGB), área de proteção, tamanho mínimo, usos proibidos. A paleta provisória foi medida pixel a pixel no PNG do logo: azul em degradê `#036EA9` → `#00279B`, amarelo `#FCFA03`, vermelho `#DB2C1B`. Se o manual divergir, o manual manda.
- [ ] Validar com o manual o uso do "friso tricolor" (as três cores em faixa, como na gola do uniforme) como elemento gráfico do site.
- [ ] Marca **Criatto Educação**: aparece ao lado do logo no banner atual. Pode ser citada? Tem logo e regras de uso?
- [ ] Nome oficial único. Hoje coexistem: "Anglo Líder Tamarineira" (title), "Colégio Anglo - Unidade Tamarineira" (texto), "Anglo Tamarineira" (alt e WhatsApp), "Colégio Anglo Tamarineira" (rodapé) e "Colégio Anglo Líder Tamarineira" (arte do banner). Precisa bater com o Perfil da Empresa no Google.

## Endereço e contato (NAP — tem que ser idêntico ao Perfil da Empresa no Google)

- [ ] Endereço. Diretórios citam: Rua Visconde de Abaeté, 200 – Tamarineira, Recife/PE, CEP 52110-010. **Os perfis oficiais da escola confirmam a rua e o número** (bio do Instagram @anglolidertamarineira: "Unidade Tamarineira - R. Visc. de Abaeté, 200"; página do Facebook: "Rua Visconde de Abaeté 200, Tamarineira", verificado em 23/09/2026) — falta só o seu ok e o CEP.
- [ ] Telefone fixo. Diretórios citam: (81) 3304-8400.
- [ ] E-mail de contato.
- [ ] Coordenadas (latitude/longitude) e link do Perfil da Empresa no Google — para o JSON-LD `School` e o botão "Como chegar".
- [ ] Horário de visitas: vale o mesmo do atendimento (seg. a sex., 8h às 17h)? Há sábado em período de matrícula?
- [ ] Microcopy "Visita guiada · sem compromisso": confirmar que a visita é guiada pela equipe.

## Segmentos e rotina

- [ ] **Tabela ano de nascimento → série 2027** (secretaria), com a nomenclatura oficial das turmas da Educação Infantil (o banner atual diz "Infantil I ao Ensino Médio"). Enquanto não for validada, o "Encontre a série" só aparece em homologação (`validadaPelaSecretaria` em `content/series.ts`). A bio do Instagram diz "Ed Infantil 1 ao Ens Médio", o que apoia "Infantil I" para 1 ano.
- [ ] Regra para quem completa 1 ano ao longo de 2027: pode entrar? Em qual turma?
- [ ] Turnos e período integral, por segmento.
- [ ] Rotina de cada segmento (horários, atividades fixas).
- [ ] Alimentação.
- [ ] Transporte.
- [ ] Sistema Anglo: presente em todos os segmentos? Qual material/plataforma a família usa?
- [ ] Ensino Médio: quais são "os principais vestibulares" trabalhados (ex.: ENEM, SSA/UPE)?
- [ ] Itens que estão no banner atual mas **fora da base de conteúdo** do briefing: "Escolinha de esportes", "Formação integral", "Metodologias ativas", "Estrutura que acolhe" e o slogan "Criando pessoas autorais num mundo de cópias". Entram ou não?

## Projetos

- [ ] Segmentos atendidos por projeto: Google for Education, Criatto Lab, Geração Líder, Além do Vest, Pod Criar.
- [ ] Uma foto real de cada projeto (com autorização de imagem quando houver estudantes).

## Estrutura e acessibilidade

- [ ] Lista confirmada de espaços. Diretórios citam: biblioteca, quadra coberta, pátio coberto, salas climatizadas, elevador, rampas e sala de AEE.
- [ ] **Vídeo institucional está PRIVADO no YouTube** (youtube.com/watch?v=M67_GShkIzQ mostra "Este é um vídeo privado", verificado em 23/09/2026) — o botão do site atual leva a uma tela de login. Tornar o vídeo público ou "não listado", ou enviar outro. Até lá, o bloco de vídeo não aparece em produção.
- [ ] **Canal do YouTube não existe:** youtube.com/@anglotamarineira5930 responde 404 (verificado em 23/09/2026). Qual é o canal atual? Até lá, o link do YouTube fica fora do rodapé em produção.
- [ ] Vídeo curto para o hero (opcional): 6–10 s, sem som, real.

## Matrícula

- [ ] Passo 03 do processo (entre a visita e a vaga garantida).
- [ ] Documentos exigidos.
- [ ] Como os valores são informados à família (mensalidades não são publicadas no site).
- [ ] Respostas validadas para o FAQ (6 perguntas propostas em `docs/etapa-1/proposta.md` §5.11).

## Prova e credibilidade (seções só aparecem com material real)

- [ ] Resultados e aprovações, com fonte e ano.
- [ ] Depoimentos reais, com autorização por escrito.
- [ ] Anos de história da unidade.
- [ ] Rede Anglo Líder: outras unidades.

## Fotos

- [ ] Fotos reais por ambiente, segmento e projeto. De estudantes, só com autorização de uso de imagem assinada pelos responsáveis.
- [ ] Foto (ou vídeo) do hero: sugestão — entrada da escola com famílias chegando, ou estudantes em atividade no pátio.

## Plataformas, medição e dados

- [ ] Links do bloco "Para famílias" (plataformas que a escola já usa).
- [ ] Acesso ao GTM-W9QMS4S2 para configurar consentimento (LGPD) e os eventos `generate_lead`, `whatsapp_click`, `cta_click`, `video_play`.
- [ ] Quem recebe o aviso de novo lead por e-mail; contas Supabase e Resend; domínio de envio.
- [ ] Dados do controlador para a política de privacidade: razão social, CNPJ, encarregado (DPO) e canal para pedidos de titulares.
