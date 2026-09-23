import { segmentoPorId, type SegmentoId } from '@/content/segmentos';
import { cn } from '@/lib/cn';

const cores: Record<SegmentoId, { fundo: string; ponto: string }> = {
  infantil: { fundo: 'bg-infantil-soft text-infantil-ink', ponto: 'bg-infantil' },
  fund1: { fundo: 'bg-fund1-soft text-fund1-ink', ponto: 'bg-fund1' },
  fund2: { fundo: 'bg-fund2-soft text-fund2-ink', ponto: 'bg-fund2' },
  medio: { fundo: 'bg-medio-soft text-medio-ink', ponto: 'bg-medio' },
};

/** Etiqueta do segmento: fundo suave + ponto na cor base + nome por escrito (a cor nunca é a única pista). */
export function SegmentTag({
  segmento,
  fundo: comFundo = true,
  className,
}: {
  segmento: SegmentoId;
  /** `false` quando a etiqueta já está sobre o fundo suave do segmento. */
  fundo?: boolean;
  className?: string;
}) {
  const { fundo, ponto } = cores[segmento];
  return (
    <span
      className={cn(
        'inline-flex min-h-8 items-center gap-2 rounded-sm text-[0.75rem] font-extrabold tracking-[0.08em] uppercase',
        comFundo
          ? `${fundo} px-3`
          : fundo
              .split(' ')
              .filter((c) => c.startsWith('text-'))
              .join(' '),
        className,
      )}
    >
      <span aria-hidden className={cn('size-2.5 rounded-full ring-1 ring-ink/15', ponto)} />
      {segmentoPorId(segmento).nome}
    </span>
  );
}

export const corDoSegmento = cores;
