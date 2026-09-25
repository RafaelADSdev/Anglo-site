import { fotoEnsinoMedio } from '@/content/fotos';
import { aConfirmar, type Talvez } from '@/lib/pending';
import type { FotoPrevista } from '@/lib/foto';
import type { IdDuvida } from './faq';

/** Segmentos da escola (briefing §10). A cor de cada um vem dos tokens `--color-<id>` em app/globals.css. */

export type SegmentoId = 'infantil' | 'fund1' | 'fund2' | 'medio';

export type PaginaSegmento = {
  titulo: string;
  destaque: string;
  lead: string;
  /** Séries do segmento (rótulo curto, na régua do topo). As do Infantil dependem dos nomes oficiais das turmas. */
  series: Talvez<readonly string[]>;
  /** "O que a criança vive e aprende": só o que a base de conteúdo afirma. */
  vive: { titulo: string; texto: string; pendente: string };
  /** Fotos reais do segmento (até chegarem, o que cada uma deve mostrar). */
  fotos: readonly FotoPrevista[];
  duvidas: readonly IdDuvida[];
};

export type Segmento = {
  id: SegmentoId;
  slug: string;
  nome: string;
  /** Artigo usado em "Conhecer a Educação Infantil" / "o Ensino Médio". */
  artigo: 'a' | 'o';
  faixa: string;
  frase: string;
  pagina: PaginaSegmento;
};

export const segmentos: readonly Segmento[] = [
  {
    id: 'infantil',
    slug: 'educacao-infantil',
    nome: 'Educação Infantil',
    artigo: 'a',
    faixa: 'A partir de 1 ano',
    frase: 'Acolhimento e equipe pedagógica completa para as primeiras descobertas.',
    pagina: {
      titulo: 'Educação Infantil.',
      destaque: 'A partir de 1 ano.',
      lead: 'Acolhimento e uma equipe pedagógica completa para as primeiras descobertas.',
      series: aConfirmar('nomes oficiais das turmas — o site atual fala em "Infantil I" para a primeira'),
      vive: {
        titulo: 'O que a criança vive.',
        texto: 'Acolhimento e uma equipe pedagógica completa.',
        pendente: 'rotina, atividades e turnos da Educação Infantil',
      },
      fotos: [
        { descricao: 'turma da Educação Infantil em atividade', legenda: 'Educação Infantil, Tamarineira' },
        { descricao: 'espaço da Educação Infantil', legenda: 'espaço da Educação Infantil, Tamarineira' },
        { descricao: 'chegada das crianças à escola', legenda: 'chegada à escola, Tamarineira' },
      ],
      duvidas: ['idade', 'turnos', 'alimentacao-transporte', 'visita'],
    },
  },
  {
    id: 'fund1',
    slug: 'fundamental-1',
    nome: 'Fundamental 1',
    artigo: 'o',
    faixa: '1º ao 5º ano',
    frase: 'A continuidade da base: o momento de consolidar as aprendizagens.',
    pagina: {
      titulo: 'Fundamental 1.',
      destaque: 'Do 1º ao 5º ano.',
      lead: 'A continuidade da base: o momento de consolidar as aprendizagens.',
      series: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
      vive: {
        titulo: 'O que a criança vive e aprende.',
        texto: 'Continuidade do que começou na Educação Infantil e consolidação das aprendizagens.',
        pendente: 'rotina, atividades e turnos do Fundamental 1',
      },
      fotos: [
        { descricao: 'turma do Fundamental 1 em sala', legenda: 'Fundamental 1, Tamarineira' },
        { descricao: 'atividade do Fundamental 1', legenda: 'Fundamental 1, Tamarineira' },
        { descricao: 'recreio do Fundamental 1', legenda: 'recreio, Tamarineira' },
      ],
      duvidas: ['turnos', 'alimentacao-transporte', 'material', 'visita'],
    },
  },
  {
    id: 'fund2',
    slug: 'fundamental-2',
    nome: 'Fundamental 2',
    artigo: 'o',
    faixa: '6º ao 9º ano',
    frase: 'Um novo ciclo: as disciplinas do currículo e as habilidades que as profissões do futuro pedem.',
    pagina: {
      titulo: 'Fundamental 2.',
      destaque: 'Do 6º ao 9º ano.',
      lead: 'Um novo ciclo: as disciplinas do currículo e as habilidades que as profissões do futuro pedem.',
      series: ['6º ano', '7º ano', '8º ano', '9º ano'],
      vive: {
        titulo: 'O que estudantes vivem e aprendem.',
        texto: 'As disciplinas curriculares e as habilidades para as profissões do futuro.',
        pendente: 'rotina, atividades e turnos do Fundamental 2',
      },
      fotos: [
        { descricao: 'turma do Fundamental 2 em sala', legenda: 'Fundamental 2, Tamarineira' },
        { descricao: 'estudantes do Fundamental 2 em um projeto', legenda: 'Fundamental 2, Tamarineira' },
        { descricao: 'aula do Fundamental 2', legenda: 'Fundamental 2, Tamarineira' },
      ],
      duvidas: ['turnos', 'alimentacao-transporte', 'material', 'visita'],
    },
  },
  {
    id: 'medio',
    slug: 'ensino-medio',
    nome: 'Ensino Médio',
    artigo: 'o',
    faixa: '1º ao 3º ano',
    frase: 'Foco no ENEM, no SSA e no desenvolvimento de soft skills.',
    pagina: {
      titulo: 'Ensino Médio.',
      destaque: 'Rumo aos principais vestibulares.',
      lead: 'Do 1º ao 3º ano, com foco no ENEM, no SSA e no desenvolvimento de soft skills.',
      series: ['1º ano', '2º ano', '3º ano'],
      vive: {
        titulo: 'O que estudantes vivem e aprendem.',
        texto: 'Preparação para o ENEM e o SSA, e desenvolvimento de soft skills.',
        pendente: 'rotina e turnos do Ensino Médio',
      },
      fotos: [
        {
          descricao: 'estudantes do Ensino Médio de uniforme',
          legenda: 'Ensino Médio, Tamarineira',
          foto: fotoEnsinoMedio,
        },
        { descricao: 'estudantes do Ensino Médio estudando', legenda: 'Ensino Médio, Tamarineira' },
        { descricao: 'estudantes do Ensino Médio em um projeto', legenda: 'Ensino Médio, Tamarineira' },
      ],
      duvidas: ['vestibulares', 'turnos', 'alimentacao-transporte', 'visita'],
    },
  },
];

export const segmentoPorId = (id: SegmentoId): Segmento => {
  const s = segmentos.find((seg) => seg.id === id);
  if (!s) throw new Error(`Segmento desconhecido: ${id}`);
  return s;
};

export const segmentoPorSlug = (slug: string) => segmentos.find((s) => s.slug === slug);

export const hrefSegmento = (s: Segmento) => `/segmentos/${s.slug}`;

/** "da Educação Infantil", "do Ensino Médio". */
export const doSegmento = (s: Segmento) => `${s.artigo === 'a' ? 'da' : 'do'} ${s.nome}`;
