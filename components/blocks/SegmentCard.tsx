import Link from 'next/link';
import { hrefSegmento, type Segmento } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';
import { tonsSegmento } from '@/components/ui/tons-segmento';

/**
 * Segmento em coluna de texto: um traço curto na cor da fase, a faixa etária,
 * o nome e uma frase. Sem caixa — quatro cartões iguais com faixa no topo
 * viravam o mesmo bloco de sempre. O bloco inteiro é clicável.
 */
export function SegmentCard({
  segmento,
  nivelTitulo: Titulo = 'h3',
  className,
}: {
  segmento: Segmento;
  /** h2 quando o card vem logo abaixo do H1 (hub de segmentos). */
  nivelTitulo?: 'h2' | 'h3';
  className?: string;
}) {
  const tons = tonsSegmento[segmento.id];
  return (
    <article className={cn('group relative flex h-full flex-col', className)}>
      <span aria-hidden className={cn('block h-0.5 w-8', tons.marca)} />
      <p className={cn('mt-4 text-[0.75rem] font-extrabold tracking-[0.08em] uppercase', tons.tinta)}>
        {segmento.faixa}
      </p>
      <Titulo className="mt-2 font-display text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.015em] text-ink">
        {segmento.nome}
      </Titulo>
      <p className="mt-3 text-small text-ink-muted">{segmento.frase}</p>
      <Link
        href={hrefSegmento(segmento)}
        className="mt-5 inline-flex min-h-11 items-center gap-2 self-start font-bold text-ink link-underline after:absolute after:inset-0"
        data-track="cta_click"
        data-track-origem="card-segmento"
        data-track-segmento={segmento.id}
      >
        Conhecer
        <span className="sr-only">
          {' '}
          {segmento.artigo} {segmento.nome}
        </span>
        <Icon
          name="arrow-right"
          className={cn(
            'transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none',
            tons.tinta,
          )}
        />
      </Link>
    </article>
  );
}
