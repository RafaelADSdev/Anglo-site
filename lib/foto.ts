import type { StaticImageData } from 'next/image';

/** Foto real (importada de /public ou estática) com texto alternativo. */
export type Foto = {
  src: StaticImageData | string;
  alt: string;
  /**
   * Onde ancorar o recorte quando o bloco é mais largo que a foto.
   * `topo` mantém os rostos quando a imagem é quase quadrada.
   */
  enquadramento?: 'topo';
};

/**
 * Foto prevista num bloco: até a real chegar, `descricao` diz o que ela deve
 * mostrar (texto do placeholder) e `legenda` vira "Fotografia real · {legenda}".
 */
export type FotoPrevista = { descricao: string; legenda: string; foto?: Foto };
