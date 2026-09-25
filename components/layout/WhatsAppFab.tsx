'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { contextoWhatsApp, linkWhatsApp } from '@/lib/whatsapp';
import { Icon } from '@/components/ui/Icon';

/**
 * WhatsApp flutuante que não cobre conteúdo (briefing §9): fica escondido
 * enquanto qualquer elemento marcado com `data-fab-oculta` está na tela
 * (CTAs do hero, agendamento, CTA final, rodapé) e com o teclado aberto num
 * campo. A mensagem muda conforme a página.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const { mensagem, segmento } = contextoWhatsApp(pathname);
  const [oculto, setOculto] = useState(true);

  useEffect(() => {
    const visiveis = new Set<Element>();
    let digitando = false;
    const atualizar = () => setOculto(visiveis.size > 0 || digitando);

    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
      }
      atualizar();
    });
    document.querySelectorAll('[data-fab-oculta]').forEach((el) => io.observe(el));

    const campo = (alvo: EventTarget | null) => alvo instanceof HTMLElement && alvo.matches('input, select, textarea');
    const aoFocar = (e: FocusEvent) => {
      if (campo(e.target)) {
        digitando = true;
        atualizar();
      }
    };
    const aoSair = (e: FocusEvent) => {
      if (campo(e.target)) {
        digitando = false;
        atualizar();
      }
    };
    document.addEventListener('focusin', aoFocar);
    document.addEventListener('focusout', aoSair);
    atualizar();

    return () => {
      io.disconnect();
      document.removeEventListener('focusin', aoFocar);
      document.removeEventListener('focusout', aoSair);
    };
  }, [pathname]);

  return (
    <aside aria-label="Contato rápido">
      <a
        href={linkWhatsApp(mensagem)}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={oculto || undefined}
        tabIndex={oculto ? -1 : undefined}
        data-track="whatsapp_click"
        data-track-segmento={segmento}
        data-track-origem="flutuante"
        className={cn(
          'fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-float',
          'transition-[opacity,translate] duration-250 ease-out-soft motion-reduce:transition-none',
          oculto ? 'pointer-events-none translate-y-3 opacity-0' : 'translate-y-0 opacity-100',
        )}
      >
        <Icon name="whatsapp" size={28} />
        <span className="sr-only">Falar no WhatsApp (abre em nova aba)</span>
      </a>
    </aside>
  );
}
