# Validação local — 05/09/2026

## Resultado

- Astro 7.3.1: build estático concluído (`npm run build`).
- Instalação final: npm reportou zero vulnerabilidades conhecidas.
- 12 parágrafos do HTML original presentes; destinos externos e texto original do WhatsApp preservados, mantendo o vídeo e canal atuais encontrados no projeto antes desta revisão.
- Cinco projetos testados individualmente, com carregamento de suas imagens.
- Abas: clique, setas, Home e End. Menu móvel: abertura, fechamento por Escape.
- Expansores móveis: todas as cinco descrições acessíveis.
- 1440, 768, 390 e 360px: nenhuma rolagem horizontal, imagens carregadas, zero violações axe nas regras WCAG A/AA avaliadas na interface própria. O iframe de terceiros do YouTube está excluído da auditoria; uma verificação anterior do player carregado encontrou problemas internos de ARIA e nome de botão, não corrigíveis no código local.
- Capa do vídeo: clique revela o iframe incorporado com o vídeo atual e oculta a capa. Sem JavaScript há link externo alternativo.
- Sem JavaScript: navegação e cinco descrições disponíveis.
- Nenhum erro JavaScript detectado pelo teste.
- Revisão visual independente Impeccable da nova composição: recomendou mover o contato móvel para o cabeçalho. Ajuste implementado, capturas responsivas regeneradas e correção confirmada pelo revisor em 360 e 390px, sem outro ajuste material identificado. Não equivale a aceite estético do usuário.
- Detector Impeccable: dois avisos de Lato como fonte comum. Exceção intencional: fonte original preservada por solicitação do usuário.

## Evidências reproduzíveis

`scripts/verify.mjs` gera `.impeccable/review/verification.json`, `desktop.png`, `mobile.png`, `768.png` e `360.png`.

Os testes verificam os endereços de destino sem enviar mensagens. Não demonstram disponibilidade externa contínua de WhatsApp, redes sociais ou YouTube. A auditoria automática não substitui uma avaliação completa com tecnologias assistivas.

Versão entregue para avaliação local. Não houve publicação, alteração de domínio ou modificação do site original. Datas e erros editoriais originais estão preservados e listados no briefing.
