'use client';

import Link from 'next/link';
import { AnimatePresence, LazyMotion, domAnimation, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { hrefSegmento, segmentoPorId, type SegmentoId } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import type { ResultadoSerie } from '@/lib/series';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { Icon } from '@/components/ui/Icon';
import { SegmentTag } from '@/components/ui/SegmentTag';

const fundo: Record<SegmentoId, string> = {
  infantil: 'bg-infantil-soft',
  fund1: 'bg-fund1-soft',
  fund2: 'bg-fund2-soft',
  medio: 'bg-medio-soft',
};

type Props = {
  resultado: Extract<ResultadoSerie, { tipo: 'serie' }> | null;
  anoCampanha: number;
  /** "31 de março" */
  corte: string;
};

/**
 * Resultado do "Encontre a série" — o momento animado da página: a cor do
 * segmento entra da esquerda para a direita, como o friso. Carregado sob
 * demanda (next/dynamic) para a Motion ficar fora do carregamento inicial.
 */
export default function SeriesResult({ resultado, anoCampanha, corte }: Props) {
  const reduzir = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait" initial={false}>
        {resultado ? (
          <m.div
            key={`${resultado.segmento}-${resultado.serie}`}
            initial={reduzir ? false : { clipPath: 'inset(0 100% 0 0 round 8px)' }}
            animate={{ clipPath: 'inset(0 0% 0 0 round 8px)' }}
            exit={reduzir ? undefined : { opacity: 0, transition: { duration: 0.12 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'grid gap-4 rounded-sm px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-x-8 sm:px-6',
              fundo[resultado.segmento],
            )}
          >
            <m.div
              initial={reduzir ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <SegmentTag segmento={resultado.segmento} fundo={false} />
              <p className="mt-1 font-display text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] leading-[1.1] font-semibold text-ink">
                Em {anoCampanha}: {resultado.serie}
              </p>
            </m.div>
            <div className="flex flex-col items-start">
              <Link
                href={hrefSegmento(segmentoPorId(resultado.segmento))}
                className="group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-bold text-ink link-underline"
                data-track="cta_click"
                data-track-origem="encontre-a-serie"
                data-track-segmento={resultado.segmento}
              >
                Conhecer {segmentoPorId(resultado.segmento).artigo} {segmentoPorId(resultado.segmento).nome}
                <Icon
                  name="arrow-right"
                  className="text-brand-blue transition-transform duration-150 group-hover:translate-x-[3px]"
                />
              </Link>
              <a
                href={linkWhatsApp(mensagens.serie(resultado.serie))}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-bold text-ink link-underline"
                data-track="whatsapp_click"
                data-track-origem="encontre-a-serie"
                data-track-segmento={resultado.segmento}
                data-track-serie={resultado.serie}
              >
                Falar no WhatsApp
                <span className="sr-only"> sobre o {resultado.serie} (abre em nova aba)</span>
                <Icon
                  name="arrow-up-right"
                  className="text-brand-blue transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </a>
            </div>
            <p className="text-caption text-ink-muted sm:col-span-2">
              Cálculo pela data de corte de {corte}.{' '}
              {resultado.segmento === 'medio' ? 'No Ensino Médio, a série também depende do histórico escolar. ' : ''}A
              secretaria confirma a série na matrícula.
            </p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </LazyMotion>
  );
}
