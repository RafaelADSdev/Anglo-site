'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import type { Evento } from '@/content/eventos';
import { cn } from '@/lib/cn';
import { confirmado, isPendente } from '@/lib/pending';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';

/**
 * Capas nas cores do logo, alternando claro e escuro (a quinta volta ao azul, ao lado do vermelho). Sem foto real, a capa é tipográfica: a cor,
 * o quadriculado de caderno, o ícone do evento e o nome — não finge ser foto.
 * Texto sobre a capa é grande (≥ 24 px): branco no azul 11,9:1, no azul-claro
 * 5,3:1 e no vermelho 4,5:1; tinta no amarelo 14:1.
 */
const capas = [
  { fundo: 'bg-brand-blue', texto: 'text-white', textura: 'caderno-escuro' },
  { fundo: 'bg-brand-yellow', texto: 'text-ink', textura: 'caderno' },
  { fundo: 'bg-brand-sky', texto: 'text-white', textura: 'caderno-escuro' },
  { fundo: 'bg-brand-red', texto: 'text-white', textura: 'caderno-escuro' },
] as const;

/** Um evento por vez: a largura do cartão mais o vão de 16px entre eles. */
function passoDo(el: HTMLElement) {
  const slide = el.querySelector('li');
  return slide ? slide.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
}

/**
 * O `scrollBy` suave não move essa faixa (o scroll-snap obrigatório o anula).
 * A animação escreve o scroll na mão e solta o snap no fim, para o cartão parar no lugar.
 */
function rolar(el: HTMLElement, destino: number, quadro: { current: number | null }) {
  if (quadro.current !== null) {
    cancelAnimationFrame(quadro.current);
    el.style.scrollSnapType = '';
  }
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduzir) {
    el.scrollTo({ left: destino, behavior: 'auto' });
    quadro.current = null;
    return;
  }
  const inicio = el.scrollLeft;
  const delta = destino - inicio;
  if (Math.abs(delta) < 1) return;
  const duracao = 500;
  const t0 = performance.now();
  el.style.scrollSnapType = 'none';
  const frame = (agora: number) => {
    const t = Math.min(1, (agora - t0) / duracao);
    const e = 1 - (1 - t) ** 3;
    el.scrollLeft = inicio + delta * e;
    if (t < 1) {
      quadro.current = requestAnimationFrame(frame);
      return;
    }
    el.style.scrollSnapType = '';
    quadro.current = null;
  };
  quadro.current = requestAnimationFrame(frame);
}

type Props = {
  eventos: readonly Evento[];
  /** Nome do carrossel para leitor de tela. */
  rotulo: string;
  /** Cabeça da seção; as setas ficam à direita dela. */
  cabeca: React.ReactNode;
};

/**
 * A faixa rola na horizontal e para em cada evento (scroll-snap). Sozinha, anda
 * um evento a cada poucos segundos e volta ao início; para com o ponteiro ou o
 * foco em cima, e não anda se a pessoa pediu menos movimento. As setas andam um
 * evento por vez e se desligam nas pontas. Arrastar, rolar e o teclado (a faixa
 * recebe foco) também funcionam. Pensado para a seção em tinta.
 */
export function CarrosselEventos({ eventos, rotulo, cabeca }: Props) {
  const trilho = useRef<HTMLUListElement>(null);
  const quadro = useRef<number | null>(null);
  const idTrilho = useId();
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const atualizar = () => {
      setNoInicio(el.scrollLeft <= 4);
      setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    atualizar();
    el.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    return () => {
      el.removeEventListener('scroll', atualizar);
      window.removeEventListener('resize', atualizar);
    };
  }, []);

  useEffect(() => {
    const el = trilho.current;
    const regiao = el?.closest('[role="region"]');
    if (!el || !(regiao instanceof HTMLElement)) return;

    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)');
    let sobre = false;
    let foco = false;

    const avancar = () => {
      if (reduzir.matches || sobre || foco || document.hidden) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return;
      const noFimAgora = el.scrollLeft >= max - 4;
      rolar(el, noFimAgora ? 0 : Math.min(max, el.scrollLeft + passoDo(el)), quadro);
    };

    const timer = window.setInterval(avancar, 4000);
    const animacao = quadro;
    const entrar = () => {
      sobre = true;
    };
    const sair = () => {
      sobre = false;
    };
    const focar = () => {
      foco = true;
    };
    const desfocar = (evento: FocusEvent) => {
      if (!regiao.contains(evento.relatedTarget as Node | null)) foco = false;
    };

    regiao.addEventListener('pointerenter', entrar);
    regiao.addEventListener('pointerleave', sair);
    regiao.addEventListener('focusin', focar);
    regiao.addEventListener('focusout', desfocar);

    return () => {
      window.clearInterval(timer);
      if (animacao.current !== null) cancelAnimationFrame(animacao.current);
      regiao.removeEventListener('pointerenter', entrar);
      regiao.removeEventListener('pointerleave', sair);
      regiao.removeEventListener('focusin', focar);
      regiao.removeEventListener('focusout', desfocar);
    };
  }, []);

  function andar(direcao: 1 | -1) {
    const el = trilho.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const destino = Math.min(max, Math.max(0, el.scrollLeft + direcao * passoDo(el)));
    rolar(el, destino, quadro);
  }

  const botao =
    'grid size-11 cursor-pointer place-items-center rounded-full text-white ring-1 ring-white/35 transition-colors duration-150 ring-inset hover:bg-white/10 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent';

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={rotulo}>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        {cabeca}
        <div className="flex gap-2">
          <button
            type="button"
            className={botao}
            onClick={() => andar(-1)}
            disabled={noInicio}
            aria-controls={idTrilho}
            aria-label="Evento anterior"
          >
            <Icon name="arrow-left" size={20} />
          </button>
          <button
            type="button"
            className={botao}
            onClick={() => andar(1)}
            disabled={noFim}
            aria-controls={idTrilho}
            aria-label="Próximo evento"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>

      <ul
        ref={trilho}
        id={idTrilho}
        tabIndex={0}
        aria-label="Eventos"
        className="-mx-(--gutter) mt-10 flex snap-x snap-mandatory scroll-px-(--gutter) [scrollbar-width:none] gap-4 overflow-x-auto px-(--gutter) pb-2 focus-visible:outline-offset-[-2px] lg:mt-12 lg:mr-[calc((100%-100vw)/2)] lg:ml-0 lg:scroll-pl-0 lg:pr-[calc((100vw-100%)/2)] lg:pl-0 [&::-webkit-scrollbar]:hidden"
      >
        {eventos.map((ev, i) => {
          const capa = capas[i % capas.length];
          const quando = confirmado(ev.quando);
          return (
            <li
              key={ev.id}
              id={ev.id}
              aria-roledescription="evento"
              aria-label={`${i + 1} de ${eventos.length}: ${ev.nome}`}
              className="w-[82%] shrink-0 snap-start sm:w-[20rem] lg:w-[22rem]"
            >
              <article>
                <div
                  className={cn(
                    'relative flex aspect-square flex-col justify-between overflow-hidden rounded-md p-6',
                    ev.imagem ? 'bg-ink' : cn(capa.fundo, capa.textura),
                    ev.imagem ? 'text-white' : capa.texto,
                  )}
                >
                  {ev.imagem ? (
                    <>
                      <Image
                        src={ev.imagem.src}
                        alt={ev.imagem.alt}
                        fill
                        sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 82vw"
                        className="object-cover"
                      />
                      {/* Escurece só a base, onde fica o nome. */}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent"
                      />
                    </>
                  ) : (
                    <Icon name={ev.icone} size={56} className="relative" />
                  )}
                  <h3 className="relative mt-auto font-display text-[clamp(1.75rem,1.5rem+0.8vw,2.125rem)] leading-[1.08] font-semibold tracking-[-0.015em]">
                    {ev.nome}
                  </h3>
                </div>
                <div className="mt-4 pr-2">
                  {quando ? (
                    <p className="text-eyebrow font-extrabold tracking-[0.12em] text-brand-yellow uppercase">
                      {quando}
                    </p>
                  ) : null}
                  <p className="mt-1 text-small text-on-ink-muted">{ev.descricao}</p>
                  {ev.provisorio || isPendente(ev.quando) ? (
                    <p className="mt-2">
                      <Pending>
                        {[
                          ev.provisorio ? 'texto provisório' : null,
                          isPendente(ev.quando) ? ev.quando.aConfirmar : null,
                        ]
                          .filter(Boolean)
                          .join(' e ')}
                      </Pending>
                    </p>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
