'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import type { Evento } from '@/content/eventos';
import { cn } from '@/lib/cn';
import { confirmado, isPendente } from '@/lib/pending';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';

/**
 * Capas nas cores do logo, uma por evento (a quinta é o papel). Sem foto real, a
 * capa é só a cor, o quadriculado de caderno e o ícone do evento em marca-d'água:
 * não finge ser foto, e o nome fica no texto ao lado (não se repete na capa).
 */
const capas = [
  { fundo: 'bg-brand-blue', texto: 'text-white', textura: 'caderno-escuro' },
  { fundo: 'bg-brand-yellow', texto: 'text-ink', textura: 'caderno' },
  { fundo: 'bg-brand-sky', texto: 'text-white', textura: 'caderno-escuro' },
  { fundo: 'bg-brand-red', texto: 'text-white', textura: 'caderno-escuro' },
  { fundo: 'bg-paper', texto: 'text-ink', textura: 'caderno' },
] as const;

const doisDigitos = (n: number) => String(n).padStart(2, '0');

/** O que falta de cada evento, no marcador de homologação. */
function pendencias(ev: Evento) {
  return [
    ev.provisorio ? 'texto provisório' : null,
    isPendente(ev.quando) ? ev.quando.aConfirmar : null,
    ev.imagem ? null : 'foto',
  ]
    .filter(Boolean)
    .join(', ');
}

type Props = {
  eventos: readonly Evento[];
  /** Nome do carrossel para leitor de tela. */
  rotulo: string;
  /** Cabeça da seção, acima do palco. */
  cabeca: React.ReactNode;
};

/**
 * Um evento por vez: a foto grande à esquerda (no desktop, sangra até a borda
 * da tela) e, à direita, o nome e a descrição do mesmo evento. A foto nova
 * varre por cima da anterior, no sentido do friso, e o texto sobe logo depois.
 * Manual (o briefing veta o automático): setas que dão a volta, o índice com
 * todos os eventos, deslizar o dedo na foto e as setas do teclado. Com
 * movimento reduzido, troca sem animar. Pensado para a seção em tinta.
 */
export function CarrosselEventos({ eventos, rotulo, cabeca }: Props) {
  const [atual, setAtual] = useState(0);
  const [anterior, setAnterior] = useState<number | null>(null);
  const [sentido, setSentido] = useState<'ir' | 'voltar'>('ir');
  const toque = useRef<{ x: number; y: number } | null>(null);
  const idPalco = useId();
  const total = eventos.length;
  // Antes do primeiro clique, nada anima: a seção abre parada.
  const mexeu = anterior !== null;

  function irPara(indice: number, direcao?: 'ir' | 'voltar') {
    const destino = (indice + total) % total;
    if (destino === atual) return;
    setSentido(direcao ?? (destino > atual ? 'ir' : 'voltar'));
    setAnterior(atual);
    setAtual(destino);
  }

  const proximo = () => irPara(atual + 1, 'ir');
  const voltar = () => irPara(atual - 1, 'voltar');

  function teclar(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      proximo();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      voltar();
    }
  }

  function soltar(e: React.PointerEvent) {
    const inicio = toque.current;
    toque.current = null;
    if (!inicio) return;
    const dx = e.clientX - inicio.x;
    const dy = e.clientY - inicio.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) proximo();
    else voltar();
  }

  const ev = eventos[atual];
  const botao =
    'grid size-11 cursor-pointer place-items-center rounded-full text-white ring-1 ring-white/35 transition-colors duration-150 ring-inset hover:bg-white/10';

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={rotulo} onKeyDown={teclar}>
      {cabeca}

      <div className="@container mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-x-8">
        {/* Palco: as capas empilhadas; só a atual (e a que está saindo) aparecem. */}
        <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[34rem]">
          <div
            id={idPalco}
            className="absolute inset-0 touch-pan-y overflow-hidden rounded-md select-none lg:left-[calc((100cqw-100vw)/2)] lg:rounded-l-none lg:rounded-r-lg"
            onPointerDown={(e) => {
              toque.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerUp={soltar}
            onPointerCancel={() => {
              toque.current = null;
            }}
          >
            {eventos.map((item, i) => {
              const capa = capas[i % capas.length];
              const ativo = i === atual;
              const saindo = i === anterior && !ativo;
              return (
                <div
                  key={item.id}
                  aria-hidden={!ativo || !item.imagem}
                  data-sentido={sentido}
                  className={cn(
                    'absolute inset-0 overflow-hidden',
                    ativo ? 'z-20' : saindo ? 'z-10' : 'invisible',
                    ativo && mexeu && 'evento-entra',
                    item.imagem ? 'bg-ink' : cn(capa.fundo, capa.textura, capa.texto),
                  )}
                >
                  {item.imagem ? (
                    <Image
                      src={item.imagem.src}
                      alt={item.imagem.alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className={cn('evento-midia object-cover', item.imagem.enquadramento === 'topo' && 'object-top')}
                    />
                  ) : (
                    // O ícone centraliza na parte que fica dentro da coluna, não na sangria.
                    <div className="evento-midia grid h-full place-items-center lg:pl-[calc((100vw-100cqw)/2)]">
                      <Icon name={item.icone} size={288} className="size-[min(55%,18rem)] opacity-25" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Texto do evento atual + controles. */}
        <div className="flex flex-col gap-8 lg:col-span-5 lg:justify-between lg:py-2">
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {mexeu ? `${doisDigitos(atual + 1)} de ${doisDigitos(total)}: ${ev.nome}. ${ev.descricao}` : ''}
          </p>

          {/* Todos os textos na mesma célula: a coluna tem a altura do mais longo e não pula. */}
          <div className="grid">
            {eventos.map((item, i) => {
              const quando = confirmado(item.quando);
              const faltas = pendencias(item);
              return (
                <article
                  key={item.id}
                  aria-hidden={i !== atual}
                  className={cn('[grid-area:1/1]', i !== atual && 'invisible', i === atual && mexeu && 'evento-texto')}
                >
                  <span
                    className={cn(
                      'grid size-14 place-items-center rounded-full',
                      capas[i % capas.length].fundo,
                      capas[i % capas.length].texto,
                    )}
                  >
                    <Icon name={item.icone} size={26} />
                  </span>
                  {quando ? (
                    <p className="mt-6 text-eyebrow font-extrabold tracking-[0.12em] text-brand-yellow uppercase">
                      {quando}
                    </p>
                  ) : null}
                  <h3
                    style={{ '--i': 1 } as React.CSSProperties}
                    className={cn('font-display text-h2 font-semibold text-white', quando ? 'mt-2' : 'mt-6')}
                  >
                    {item.nome}
                  </h3>
                  <p
                    style={{ '--i': 2 } as React.CSSProperties}
                    className="mt-4 max-w-[34ch] text-lead text-on-ink-muted"
                  >
                    {item.descricao}
                  </p>
                  {faltas ? (
                    <p style={{ '--i': 3 } as React.CSSProperties} className="mt-4">
                      <Pending>{faltas}</Pending>
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={botao}
                onClick={voltar}
                aria-controls={idPalco}
                aria-label="Evento anterior"
              >
                <Icon name="arrow-left" size={20} />
              </button>
              <button
                type="button"
                className={botao}
                onClick={proximo}
                aria-controls={idPalco}
                aria-label="Próximo evento"
              >
                <Icon name="arrow-right" size={20} />
              </button>
              <p className="ml-3 text-small font-semibold text-on-ink-muted tabular-nums">
                <span className="text-white">{doisDigitos(atual + 1)}</span> / {doisDigitos(total)}
              </p>
            </div>

            {/* Celular: uma barra por evento, a atual em amarelo. */}
            <ol className="mt-6 flex gap-1.5 lg:hidden">
              {eventos.map((item, i) => (
                <li key={item.id} className="flex-1">
                  <button
                    type="button"
                    onClick={() => irPara(i)}
                    aria-current={i === atual ? 'true' : undefined}
                    aria-label={item.nome}
                    className="flex h-11 w-full cursor-pointer items-center"
                  >
                    <span
                      className={cn(
                        'h-1 w-full rounded-full transition-colors duration-250',
                        i === atual ? 'bg-brand-yellow' : 'bg-white/25',
                      )}
                    />
                  </button>
                </li>
              ))}
            </ol>

            {/* Desktop: o índice com todos os eventos. */}
            <ol className="mt-8 hidden border-t border-white/15 lg:block">
              {eventos.map((item, i) => {
                const ativo = i === atual;
                return (
                  <li key={item.id} className="border-b border-white/15">
                    <button
                      type="button"
                      onClick={() => irPara(i)}
                      aria-current={ativo ? 'true' : undefined}
                      className={cn(
                        'flex min-h-12 w-full cursor-pointer items-center gap-4 py-2 text-left transition-colors duration-150',
                        ativo ? 'text-white' : 'text-on-ink-muted hover:text-white',
                      )}
                    >
                      <span className="font-semibold">{item.nome}</span>
                      <span
                        aria-hidden
                        className={cn(
                          'ml-auto h-0.5 rounded-full bg-brand-yellow transition-[width] duration-250 ease-out-soft',
                          ativo ? 'w-10' : 'w-0',
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
