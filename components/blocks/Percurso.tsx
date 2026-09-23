import Link from 'next/link';
import { hrefSegmento, segmentos, type SegmentoId } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';
import { tonsSegmento } from '@/components/ui/tons-segmento';

/**
 * Os quatro segmentos em sequência, como uma régua: lado a lado, as faixas de
 * 8 px formam a paleta que amadurece (amarelo → vermelho → azul-claro → azul).
 * Com `atual`, o segmento da página fica marcado e sem link.
 */
export function Percurso({ rotulo, atual, className }: { rotulo: string; atual?: SegmentoId; className?: string }) {
  return (
    <nav aria-label={rotulo} className={className}>
      <ol className="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {segmentos.map((s) => {
          const tons = tonsSegmento[s.id];
          const eAtual = s.id === atual;
          const conteudo = (
            <>
              <span className={cn('block text-[0.75rem] font-extrabold tracking-[0.08em] uppercase', tons.tinta)}>
                {s.faixa}
              </span>
              <span className="mt-1.5 flex items-center gap-2 font-display text-[1.375rem] leading-tight font-semibold text-ink">
                {s.nome}
                {eAtual ? null : (
                  <Icon
                    name="arrow-right"
                    className={cn(
                      'shrink-0 transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none',
                      tons.tinta,
                    )}
                  />
                )}
              </span>
              {eAtual ? <span className="mt-1 block text-caption text-ink-muted">Você está aqui</span> : null}
            </>
          );
          return (
            <li
              key={s.id}
              className={cn('relative pt-5 before:absolute before:inset-x-0 before:top-0 before:h-2', tons.faixa)}
            >
              {eAtual ? (
                <div aria-current="page" className="pr-4">
                  {conteudo}
                </div>
              ) : (
                <Link
                  href={hrefSegmento(s)}
                  className="group block min-h-11 pr-4"
                  data-track="cta_click"
                  data-track-origem="percurso"
                  data-track-segmento={s.id}
                >
                  {conteudo}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
