/** Fundo das seções claras: papel e areia se alternam, e vizinhas nunca repetem o fundo. */
export type TomClaro = 'papel' | 'areia';

export const tomAlternado = (i: number, inicio: TomClaro = 'areia'): TomClaro =>
  (i % 2 === 0) === (inicio === 'areia') ? 'areia' : 'papel';
