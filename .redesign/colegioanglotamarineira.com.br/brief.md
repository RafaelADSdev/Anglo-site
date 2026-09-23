# Redesign — colegioanglotamarineira.com.br

Captura de 22/09/2026 (`capture.json`, `desktop.png` 1440 px, `mobile.png` 390 px). Briefing completo em `docs/briefing.md`.

## Fonte
- URL: https://colegioanglotamarineira.com.br/
- Autorização: cliente autorizado (redesign encomendado pela escola; briefing mantém GTM e verificação de domínio do Facebook)
- Stack aparente: template HTML "Alphabet — Super Fun Daycare / Children HTML Theme" + Bootstrap, jQuery, LayerSlider, GreenSock, Isotope; Apache

## O que o site é
- Oferta em uma frase: escola particular na Tamarineira (Recife) da Educação Infantil (a partir de 1 ano) ao 3º ano do Ensino Médio, com Sistema Anglo e cinco projetos próprios.
- Público: responsáveis da Zona Norte do Recife, no celular, comparando escolas.
- Ação principal: falar no WhatsApp (único CTA, repetido 4 vezes).
- Prova real visível: nomes e descrições curtas dos 5 projetos; vídeo institucional no YouTube; horário de atendimento. Nenhum dado, depoimento ou endereço.

## Diagnóstico (o que está amador)
- Hierarquia: a página não tem H1 renderizado — o H1 do template ("Welcome to Alphabet") está comentado e o hero é um PNG com o texto dentro da imagem (invisível para Google e leitores de tela; ilegível a 390 px, onde o banner fica com ~150 px de altura).
- Tipografia: Lato + Alegreya Sans do template; títulos em caixa com fundo ciano e bonecos de clip-art.
- Espaço / ritmo: blocos centralizados, botão verde "fale com nosso time" repetido entre seções, nuvens SVG como divisórias.
- Confiança: sem endereço, mapa, telefone fixo ou e-mail; © 2023; mensagem do WhatsApp cita "matrícula 2024"; aba oculta "Our Playground" com lorem ipsum no DOM; 5 variações do nome da escola.
- Mobile: header laranja do tema, banner minúsculo, CTA sem contexto.
- Copy: erros ("Espação", "u m bate papo", "Uma momento", "a 3˚ ano", "sairem"), "seu/sua pequeno(a)", adjetivos soltos ("inovadora", "transformadora", "disruptiva").
- Técnico: `lang="en"`, `maximum-scale=1`, meta description vazia, imagens de 300–700 KB sem `alt`, links `target="_blank"` sem aviso, ícones sociais sem nome acessível, preloader.

## O que deve permanecer
- Fatos da seção 10 do briefing (segmentos, projetos, contatos, horário).
- GTM-W9QMS4S2 e `facebook-domain-verification` my6hhjure3xgtjnaqjz2iz1ebm6y14.
- Marca: as três cores do logo Anglo (azul em degradê `#036EA9`→`#00279B`, amarelo `#FCFA03`, vermelho `#DB2C1B`, medidas no PNG em uso) até chegar o manual oficial.

## O que o redesign recusa
- Visual atual como autoridade. Ele é evidência do produto, não do visual novo.
- Paleta do template (`#34327C`, `#77daee`, `#EC9600`, `#fdfbe8`) — não é a marca.
- Clonar layout, CSS ou identidade de terceiro.

## Modo Impeccable
- Persuade.
- Motivo: a Home e as páginas de segmento existem para levar o responsável a agendar a visita ou chamar no WhatsApp.

## Direção (proposta da etapa 1, aguardando aprovação)
- THESIS: a escola que acompanha a criança do primeiro passo ao vestibular — mostrada pela trajetória, não por adjetivos.
- STORY: o responsável entende idade, lugar e proposta no primeiro viewport; descobre em que série a criança entra em 2027; vê os projetos e a estrutura reais; agenda a visita.
- FIRST VIEWPORT: ver `docs/etapa-1/proposta.md` §5.2.
