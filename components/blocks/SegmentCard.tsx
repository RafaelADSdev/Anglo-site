import Link from 'next/link';
import { doSegmento, hrefSegmento, type Segmento } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';
import { tonsSegmento } from '@/components/ui/tons-segmento';

/**
 * Segmento em painel na cor suave da fase, aberto pela faixa na cor-base. Os
 * painéis ficam colados (`TrilhaSegmentos`): lado a lado, as faixas formam uma
 * régua só — amarelo → vermelho → azul-claro → azul Anglo, a paleta que
 * amadurece — e a lista se lê como um caminho, não como quatro cartões.
 * O painel inteiro é clicável; o link fica no pé, alinhado entre as fases.
 * Com `ancora`, o painel desce até o capítulo da fase na mesma página (seta ↓).
 */
export function SegmentCard({
  segmento,
  nivelTitulo: Titulo = 'h3',
  ancora,
  className,
}: {
  segmento: Segmento;
  /** h2 quando o card vem logo abaixo do H1 (hub de segmentos). */
  nivelTitulo?: 'h2' | 'h3';
  ancora?: boolean;
  className?: string;
}) {
  const tons = tonsSegmento[segmento.id];
  return (
    <article
      className={cn(
        'group relative flex h-full flex-1 flex-col px-6 pt-9 pb-5 sm:px-7 lg:min-h-[19rem] lg:pt-10',
        tons.suave,
        className,
      )}
    >
      {/* A faixa engrossa no hover: resposta ao toque sem sombra nem cor nova. */}
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-0 top-0 h-1.5 transition-[height] duration-150 ease-out-soft group-hover:h-2.5 motion-reduce:transition-none',
          tons.marca,
        )}
      />
      <p className={cn('text-[0.75rem] font-extrabold tracking-[0.08em] uppercase', tons.tinta)}>{segmento.faixa}</p>
      <Titulo className="mt-2 font-display text-[clamp(1.75rem,1.5rem+0.6vw,2rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-ink">
        {segmento.nome}
      </Titulo>
      <p className="mt-3 text-small text-ink-muted">{segmento.frase}</p>
      {/* mt-auto leva o link ao pé do painel: as quatro fases ficam na mesma linha. */}
      <Link
        href={ancora ? `#${segmento.slug}` : hrefSegmento(segmento)}
        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-5 font-bold text-ink link-underline after:absolute after:inset-0"
        data-track="cta_click"
        data-track-origem={ancora ? 'indice-segmentos' : 'card-segmento'}
        data-track-segmento={segmento.id}
      >
        {ancora ? 'Ver a fase' : 'Conhecer'}
        <span className="sr-only"> {ancora ? doSegmento(segmento) : `${segmento.artigo} ${segmento.nome}`}</span>
        <Icon
          name={ancora ? 'arrow-down' : 'arrow-right'}
          className={cn(
            'transition-transform duration-150 motion-reduce:transition-none',
            ancora ? 'group-hover:translate-y-[3px]' : 'group-hover:translate-x-[3px]',
            tons.tinta,
          )}
        />
      </Link>
    </article>
  );
}

/**
 * Os quatro segmentos colados numa faixa só (2 por linha no tablet, 4 no
 * desktop). O `li` estica o painel para que os links fiquem alinhados.
 */
export function TrilhaSegmentos({
  segmentos,
  nivelTitulo,
  ancora,
  revelar,
  className,
}: {
  segmentos: readonly Segmento[];
  nivelTitulo?: 'h2' | 'h3';
  /** Os painéis descem até os capítulos da própria página (hub de segmentos). */
  ancora?: boolean;
  /** Revelação ao rolar, escalonada (só abaixo da dobra). */
  revelar?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn('grid overflow-hidden rounded-md sm:grid-cols-2 lg:grid-cols-4', className)}>
      {segmentos.map((seg, i) => (
        <li
          key={seg.id}
          className={cn('flex flex-col', revelar && 'reveal')}
          style={revelar ? ({ '--i': i } as React.CSSProperties) : undefined}
        >
          <SegmentCard segmento={seg} nivelTitulo={nivelTitulo} ancora={ancora} />
        </li>
      ))}
    </ul>
  );
}
