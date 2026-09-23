import type { StaticImageData } from 'next/image';

/** Foto real (importada de /public ou estática) com texto alternativo. */
export type Foto = { src: StaticImageData | string; alt: string };

/**
 * Foto prevista num bloco: até a real chegar, `descricao` diz o que ela deve
 * mostrar (texto do placeholder) e `legenda` vira "Fotografia real · {legenda}".
 */
export type FotoPrevista = { descricao: string; legenda: string; foto?: Foto };
