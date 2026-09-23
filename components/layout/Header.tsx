'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { hrefAgendar, menuPrincipal } from '@/content/navegacao';
import { cn } from '@/lib/cn';
import { linkWhatsApp, contextoWhatsApp } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from './Logo';

const ativo = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

/**
 * Cabeçalho fixo: altura constante (sem encolher ao rolar, para não gerar CLS);
 * ao rolar, só ganha a sombra de flutuação. No celular, o menu abre em tela
 * cheia num <dialog> nativo (foco preso, Esc fecha, o foco volta ao botão).
 */
export function Header() {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const dialogo = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Navegou? Fecha o menu.
  useEffect(() => {
    dialogo.current?.close();
  }, [pathname]);

  const abrirMenu = () => {
    dialogo.current?.showModal();
    setMenuAberto(true);
  };
  const fecharMenu = () => dialogo.current?.close();

  const whatsapp = contextoWhatsApp(pathname);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-paper transition-shadow duration-250 ease-out-soft',
        rolou ? 'shadow-float' : 'shadow-[0_1px_0_var(--color-line)]',
      )}
    >
      <div aria-hidden className="h-1 stripe" />
      <div className="wrap flex h-16 items-center gap-4 lg:h-20 lg:gap-8">
        <Logo />

        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-[clamp(1rem,0.2rem+1.2vw,1.75rem)]">
            {menuPrincipal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(pathname, item.href) ? 'page' : undefined}
                  className="relative inline-flex min-h-11 items-center text-[0.9375rem] font-semibold text-ink after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-blue after:transition-transform after:duration-150 after:ease-out-soft hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ButtonLink
            href={hrefAgendar()}
            tamanho="sm"
            className="max-lg:hidden"
            data-track="cta_click"
            data-track-origem="cabecalho"
          >
            Agendar visita
          </ButtonLink>
          <ButtonLink
            href={hrefAgendar()}
            tamanho="sm"
            seta="nenhuma"
            className="lg:hidden"
            data-track="cta_click"
            data-track-origem="cabecalho"
          >
            Agendar
          </ButtonLink>
          <button
            type="button"
            onClick={abrirMenu}
            aria-haspopup="dialog"
            aria-expanded={menuAberto}
            aria-controls="menu-movel"
            className="grid size-11 place-items-center rounded-full bg-surface text-ink ring-1 ring-line lg:hidden"
          >
            <Icon name="menu" size={20} />
            <span className="sr-only">Abrir menu</span>
          </button>
        </div>
      </div>

      <dialog
        id="menu-movel"
        ref={dialogo}
        aria-label="Menu"
        onClose={() => setMenuAberto(false)}
        className="menu-movel lg:hidden"
      >
        <div className="flex min-h-full flex-col">
          <div aria-hidden className="h-1 stripe" />
          <div className="wrap flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={fecharMenu}
              className="grid size-11 place-items-center rounded-full bg-surface text-ink ring-1 ring-line"
            >
              <Icon name="close" size={20} />
              <span className="sr-only">Fechar menu</span>
            </button>
          </div>

          <nav aria-label="Principal (celular)" className="wrap mt-6">
            <ul className="border-t border-line">
              {menuPrincipal.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={fecharMenu}
                    aria-current={ativo(pathname, item.href) ? 'page' : undefined}
                    className="flex min-h-16 items-center justify-between font-display text-[1.75rem] leading-none font-semibold text-ink aria-[current=page]:text-brand-blue"
                  >
                    {item.rotulo}
                    <Icon name="arrow-right" className="text-brand-blue" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="wrap mt-auto grid gap-3 pt-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <ButtonLink
              href={hrefAgendar()}
              className="w-full"
              onClick={fecharMenu}
              data-track="cta_click"
              data-track-origem="menu"
            >
              Agendar visita
            </ButtonLink>
            <ButtonLink
              href={linkWhatsApp(whatsapp.mensagem)}
              externo
              variante="contorno"
              className="w-full"
              icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
              data-track="whatsapp_click"
              data-track-segmento={whatsapp.segmento}
              data-track-origem="menu"
            >
              Falar no WhatsApp
            </ButtonLink>
            <p className="mt-2 text-center text-caption text-ink-muted">
              Atendimento {siteConfig.contato.horarioCurto}
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
