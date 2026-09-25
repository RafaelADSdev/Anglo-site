'use client';

import { useEffect } from 'react';
import { track, type Evento } from '@/lib/track';

/**
 * Medição no site todo: é o ouvinte único de cliques rastreados. Componentes de servidor declaram
 * `data-track="cta_click"` e `data-track-<param>="valor"`; aqui vira evento no dataLayer.
 */
export function TrackClicks() {
  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      const alvo = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (!alvo) return;
      const params: Record<string, string> = {};
      for (const [chave, valor] of Object.entries(alvo.dataset)) {
        if (chave.startsWith('track') && chave !== 'track' && valor) {
          const nome = chave.slice('track'.length);
          params[nome.charAt(0).toLowerCase() + nome.slice(1)] = valor;
        }
      }
      track(alvo.dataset.track as Evento, params);
    };
    document.addEventListener('click', aoClicar, { capture: true });
    return () => document.removeEventListener('click', aoClicar, { capture: true });
  }, []);
  return null;
}
