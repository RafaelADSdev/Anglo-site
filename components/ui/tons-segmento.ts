import type { SegmentoId } from '@/content/segmentos';

/**
 * Classes de cor de cada segmento, escritas por extenso (o Tailwind só gera as
 * classes que encontra no código). Base na faixa; suave no fundo; tinta em
 * texto, linha e ponto (≥ 4,5:1 sobre o papel e sobre o suave).
 */
export const tonsSegmento: Record<
  SegmentoId,
  { faixa: string; marca: string; suave: string; tinta: string; linha: string; ponto: string }
> = {
  infantil: {
    faixa: 'before:bg-infantil',
    marca: 'bg-infantil',
    suave: 'bg-infantil-soft',
    tinta: 'text-infantil-ink',
    linha: 'border-infantil-ink',
    ponto: 'before:bg-infantil-ink',
  },
  fund1: {
    faixa: 'before:bg-fund1',
    marca: 'bg-fund1',
    suave: 'bg-fund1-soft',
    tinta: 'text-fund1-ink',
    linha: 'border-fund1-ink',
    ponto: 'before:bg-fund1-ink',
  },
  fund2: {
    faixa: 'before:bg-fund2',
    marca: 'bg-fund2',
    suave: 'bg-fund2-soft',
    tinta: 'text-fund2-ink',
    linha: 'border-fund2-ink',
    ponto: 'before:bg-fund2-ink',
  },
  medio: {
    faixa: 'before:bg-medio',
    marca: 'bg-medio',
    suave: 'bg-medio-soft',
    tinta: 'text-medio-ink',
    linha: 'border-medio-ink',
    ponto: 'before:bg-medio-ink',
  },
};
