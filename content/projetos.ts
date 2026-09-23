import { aConfirmar, type Talvez } from '@/lib/pending';
import type { SegmentoId } from './segmentos';

/** Os cinco projetos próprios (briefing §10). `id` é a âncora em /projetos. */

export type Projeto = {
  id: string;
  nome: string;
  resumo: string;
  segmentos: Talvez<readonly SegmentoId[]>;
  /** Descrição do que a foto real deve mostrar (placeholder até a foto chegar). */
  foto: string;
  /** Lugar ou momento, para a legenda "Fotografia real · …" quando a foto chegar. */
  legenda: string;
};

const segmentosAConfirmar = aConfirmar('segmentos atendidos pelo projeto');

export const projetos: readonly Projeto[] = [
  {
    id: 'google-for-education',
    nome: 'Google for Education',
    resumo: 'Um espaço equipado com Chromebooks para aulas com as metodologias da plataforma Google.',
    segmentos: segmentosAConfirmar,
    foto: 'estudantes usando os Chromebooks no espaço Google for Education',
    legenda: 'espaço Google for Education, Tamarineira',
  },
  {
    id: 'criatto-lab',
    nome: 'Criatto Lab',
    resumo:
      'Uma sala fora do padrão para trabalhar protagonismo, liderança, comunicação, tecnologia e empreendedorismo.',
    segmentos: segmentosAConfirmar,
    foto: 'estudantes em atividade na sala do Criatto Lab',
    legenda: 'Criatto Lab, Tamarineira',
  },
  {
    id: 'geracao-lider',
    nome: 'Geração Líder',
    resumo: 'Uma disciplina da própria grade curricular que desenvolve hard e soft skills.',
    segmentos: segmentosAConfirmar,
    foto: 'aula da Geração Líder',
    legenda: 'aula da Geração Líder, Tamarineira',
  },
  {
    id: 'alem-do-vest',
    nome: 'Além do Vest',
    resumo: 'Estudantes conversam com profissionais da região sobre carreiras.',
    segmentos: segmentosAConfirmar,
    foto: 'estudantes conversando com um profissional convidado no Além do Vest',
    legenda: 'encontro do Além do Vest, Tamarineira',
  },
  {
    id: 'pod-criar',
    nome: 'Pod Criar',
    resumo: 'O centro de criação onde estudantes fazem jornal, podcasts e comerciais.',
    segmentos: segmentosAConfirmar,
    foto: 'estudantes gravando no centro de criação do Pod Criar',
    legenda: 'Pod Criar, Tamarineira',
  },
];

export const hrefProjeto = (p: Projeto) => `/projetos#${p.id}`;
