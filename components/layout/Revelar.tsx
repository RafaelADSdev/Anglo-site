'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Revelação ao rolar (proposta §3.4): uma vez só, opacidade + 12 px, escalonada
 * em 60 ms por `--i`. Só esconde o que ainda está abaixo da dobra — o que já
 * está na tela não pisca — e não faz nada com movimento reduzido ou sem JS.
 * O CSS fica em app/globals.css (`.reveal`).
 */
export function Revelar() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.revelar = 'feito';
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    for (const el of document.querySelectorAll<HTMLElement>('.reveal:not([data-revelar])')) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.dataset.revelar = 'pendente';
      io.observe(el);
    }

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
