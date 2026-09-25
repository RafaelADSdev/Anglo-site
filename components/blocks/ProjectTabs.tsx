'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { hrefProjeto, type Projeto } from '@/content/projetos';
import { cn } from '@/lib/cn';
import { confirmado, isPendente } from '@/lib/pending';
import { ArrowLink } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { Pending } from '@/components/ui/Pending';
import { SegmentTag } from '@/components/ui/SegmentTag';

/**
 * Projetos em abas (padrão de abas da WAI-ARIA: setas, Home e End; nada troca
 * sozinho). No celular a lista vira uma fileira de chips com rolagem horizontal.
 */
export function ProjectTabs({
  projetos,
  fundoPlaceholder,
}: {
  projetos: readonly Projeto[];
  /** Fundo do espaço de foto: 'claro' quando a seção é areia. */
  fundoPlaceholder?: 'areia' | 'claro';
}) {
  const [ativo, setAtivo] = useState(0);
  const abas = useRef<Array<HTMLButtonElement | null>>([]);
  const base = useId();

  const aoTeclar = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = projetos.length;
    const destino =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? (i + 1) % n
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? (i - 1 + n) % n
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? n - 1
              : null;
    if (destino === null) return;
    e.preventDefault();
    setAtivo(destino);
    abas.current[destino]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <div
        role="tablist"
        aria-label="Projetos"
        className="-mx-[var(--gutter)] flex [scrollbar-width:none] gap-2 overflow-x-auto px-[var(--gutter)] pb-1 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-line lg:px-0"
      >
        {projetos.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              abas.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${base}-aba-${p.id}`}
            aria-selected={i === ativo}
            aria-controls={`${base}-painel-${p.id}`}
            tabIndex={i === ativo ? 0 : -1}
            onClick={() => setAtivo(i)}
            onKeyDown={(e) => aoTeclar(e, i)}
            className={cn(
              'group min-h-11 shrink-0 cursor-pointer rounded-full bg-surface px-4 text-left text-small font-bold whitespace-nowrap text-ink ring-1 ring-line transition-colors',
              'aria-selected:bg-ink aria-selected:text-white aria-selected:ring-ink',
              'lg:flex lg:min-h-16 lg:items-center lg:gap-3 lg:rounded-none lg:border-b lg:border-line lg:bg-transparent lg:px-0 lg:font-display lg:text-[1.5rem] lg:font-semibold lg:whitespace-normal lg:text-ink-muted lg:ring-0',
              'lg:hover:text-ink lg:aria-selected:bg-transparent lg:aria-selected:text-ink',
            )}
          >
            <span
              aria-hidden
              className="hidden h-[3px] w-6 shrink-0 origin-left scale-x-0 rounded-[2px] stripe transition-transform duration-250 ease-out-soft motion-reduce:transition-none lg:block lg:group-aria-selected:scale-x-100"
            />
            {p.nome}
          </button>
        ))}
      </div>

      {projetos.map((p, i) => {
        const segs = confirmado(p.segmentos);
        return (
          <div
            key={p.id}
            role="tabpanel"
            id={`${base}-painel-${p.id}`}
            aria-labelledby={`${base}-aba-${p.id}`}
            hidden={i !== ativo}
            tabIndex={0}
            className="lg:col-span-8"
          >
            <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
              <Figure
                foto={p.imagem}
                descricao={p.foto}
                legenda={p.legenda}
                proporcao="aspect-[4/3]"
                rotuloProporcao="4:3"
                fundoPlaceholder={fundoPlaceholder}
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw"
                arredondamento="md"
              />
              <div>
                <h3 className="font-display text-h3 font-semibold text-ink">{p.nome}</h3>
                <p className="mt-3 text-lead text-ink-muted">{p.resumo}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {segs ? segs.map((s) => <SegmentTag key={s} segmento={s} />) : null}
                  {isPendente(p.segmentos) ? <Pending>{p.segmentos.aConfirmar}</Pending> : null}
                </div>
                <ArrowLink
                  href={hrefProjeto(p)}
                  className="mt-5"
                  data-track="cta_click"
                  data-track-origem="projetos-home"
                >
                  Ver o projeto
                  <span className="sr-only"> {p.nome}</span>
                </ArrowLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
