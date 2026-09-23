import Link from 'next/link';
import { hrefSegmento, type Segmento, type SegmentoId } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

/** Faixa de 8 px no topo, na cor-base do segmento: lado a lado, os quatro cards formam a sequência da paleta. */
const faixa: Record<SegmentoId, string> = {
  infantil: 'before:bg-infantil',
  fund1: 'before:bg-fund1',
  fund2: 'before:bg-fund2',
  medio: 'before:bg-medio',
};

const tinta: Record<SegmentoId, string> = {
  infantil: 'text-infantil-ink',
  fund1: 'text-fund1-ink',
  fund2: 'text-fund2-ink',
  medio: 'text-medio-ink',
};

/**
 * Card de segmento (style tile aprovado na etapa 1): superfície clara, borda
 * fina, faixa na cor do segmento, faixa etária, uma frase e link — o card
 * inteiro é clicável.
 */
export function SegmentCard({ segmento, className }: { segmento: Segmento; className?: string }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-md bg-surface p-6 pt-8 ring-1 ring-line transition-[translate,box-shadow] duration-250 ease-out-soft',
        'before:absolute before:inset-x-0 before:top-0 before:h-2',
        'hover:-translate-y-0.5 hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-7 lg:pt-9',
        faixa[segmento.id],
        className,
      )}
    >
      <p className={cn('text-[0.75rem] font-extrabold tracking-[0.1em] uppercase', tinta[segmento.id])}>
        {segmento.faixa}
      </p>
      <h3 className="mt-2 font-display text-[1.625rem] leading-[1.15] font-semibold text-ink">{segmento.nome}</h3>
      <p className="mt-3 mb-6 text-small text-ink-muted">{segmento.frase}</p>
      <Link
        href={hrefSegmento(segmento)}
        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start font-bold text-ink link-underline after:absolute after:inset-0 after:rounded-md"
        data-track="cta_click"
        data-track-origem="card-segmento"
        data-track-segmento={segmento.id}
      >
        Conhecer
        <span className="sr-only">
          {segmento.artigo} {segmento.nome}
        </span>
        <Icon
          name="arrow-right"
          className={cn(
            'transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none',
            tinta[segmento.id],
          )}
        />
      </Link>
    </article>
  );
}
