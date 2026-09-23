/** Segmentos da escola (briefing §10). A cor de cada um vem dos tokens `--color-<id>` em app/globals.css. */

export type SegmentoId = 'infantil' | 'fund1' | 'fund2' | 'medio';

export type Segmento = {
  id: SegmentoId;
  slug: string;
  nome: string;
  /** Artigo usado em "Conhecer a Educação Infantil" / "o Ensino Médio". */
  artigo: 'a' | 'o';
  faixa: string;
  frase: string;
};

export const segmentos: readonly Segmento[] = [
  {
    id: 'infantil',
    slug: 'educacao-infantil',
    nome: 'Educação Infantil',
    artigo: 'a',
    faixa: 'A partir de 1 ano',
    frase: 'Acolhimento e equipe pedagógica completa para as primeiras descobertas.',
  },
  {
    id: 'fund1',
    slug: 'fundamental-1',
    nome: 'Fundamental 1',
    artigo: 'o',
    faixa: '1º ao 5º ano',
    frase: 'A continuidade da base: o momento de consolidar as aprendizagens.',
  },
  {
    id: 'fund2',
    slug: 'fundamental-2',
    nome: 'Fundamental 2',
    artigo: 'o',
    faixa: '6º ao 9º ano',
    frase: 'Um novo ciclo: as disciplinas do currículo e as habilidades que as profissões do futuro pedem.',
  },
  {
    id: 'medio',
    slug: 'ensino-medio',
    nome: 'Ensino Médio',
    artigo: 'o',
    faixa: '1º ao 3º ano',
    frase: 'Foco nos principais vestibulares e no desenvolvimento de soft skills.',
  },
];

export const segmentoPorId = (id: SegmentoId): Segmento => {
  const s = segmentos.find((seg) => seg.id === id);
  if (!s) throw new Error(`Segmento desconhecido: ${id}`);
  return s;
};

export const hrefSegmento = (s: Segmento) => `/segmentos/${s.slug}`;
