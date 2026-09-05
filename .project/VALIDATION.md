# Validação local — 05/09/2026

## Resultado

- Astro 7.3.1: build estático concluído (`npm run build`).
- Instalação final: npm reportou zero vulnerabilidades conhecidas.
- 12 parágrafos do HTML original presentes; destinos externos e texto original do WhatsApp preservados.
- Cinco projetos testados individualmente, com carregamento de suas imagens.
- Abas: clique, setas, Home e End. Menu móvel: abertura, fechamento por Escape.
- Expansores móveis: todas as cinco descrições acessíveis.
- 1440, 768, 390 e 360px: nenhuma rolagem horizontal, imagens carregadas, zero violações axe nas regras WCAG A/AA avaliadas.
- Sem JavaScript: navegação e cinco descrições disponíveis.
- Nenhum erro JavaScript detectado pelo teste.
- Revisão visual independente Impeccable: `ship for evaluation`, após confirmação da correção de espaçamento no título da estrutura nas duas larguras móveis.
- Detector Impeccable: dois avisos de Lato como fonte comum. Exceção intencional: fonte original preservada por solicitação do usuário.

## Evidências reproduzíveis

`scripts/verify.mjs` gera `.impeccable/review/verification.json`, `desktop.png`, `mobile.png`, `768.png` e `360.png`.

Os testes verificam os endereços de destino sem enviar mensagens. Não demonstram disponibilidade externa contínua de WhatsApp, redes sociais ou YouTube. A auditoria automática não substitui uma avaliação completa com tecnologias assistivas.

Versão entregue para avaliação local. Não houve publicação, alteração de domínio ou modificação do site original. Datas e erros editoriais originais estão preservados e listados no briefing.
