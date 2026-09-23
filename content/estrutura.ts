import { aConfirmar, type Talvez } from '@/lib/pending';

/**
 * Ambientes da escola. Os três primeiros vêm da base de conteúdo (espaços dos
 * projetos). Os demais aparecem em diretórios, mas a escola ainda não confirmou:
 * só entram em produção quando `texto` deixar de ser pendente.
 */

export type Ambiente = {
  id: string;
  nome: string;
  texto: Talvez<string>;
  /** O que a foto real deve mostrar. */
  foto: string;
  legenda: string;
  href?: string;
};

export const ambientesProjetos: readonly Ambiente[] = [
  {
    id: 'google-for-education',
    nome: 'Espaço Google for Education',
    texto: 'Equipado com Chromebooks para as aulas com as metodologias da plataforma Google.',
    foto: 'espaço Google for Education, com os Chromebooks',
    legenda: 'espaço Google for Education, Tamarineira',
    href: '/projetos#google-for-education',
  },
  {
    id: 'criatto-lab',
    nome: 'Criatto Lab',
    texto: 'Uma sala fora do padrão para protagonismo, liderança, comunicação, tecnologia e empreendedorismo.',
    foto: 'sala do Criatto Lab',
    legenda: 'Criatto Lab, Tamarineira',
    href: '/projetos#criatto-lab',
  },
  {
    id: 'pod-criar',
    nome: 'Pod Criar',
    texto: 'O centro de criação onde estudantes fazem jornal, podcasts e comerciais.',
    foto: 'centro de criação do Pod Criar',
    legenda: 'Pod Criar, Tamarineira',
    href: '/projetos#pod-criar',
  },
];

export const outrosAmbientes: readonly Ambiente[] = [
  {
    id: 'biblioteca',
    nome: 'Biblioteca',
    texto: aConfirmar('biblioteca (citada em diretórios)'),
    foto: 'biblioteca',
    legenda: 'biblioteca, Tamarineira',
  },
  {
    id: 'quadra',
    nome: 'Quadra coberta',
    texto: aConfirmar('quadra coberta (citada em diretórios)'),
    foto: 'quadra coberta',
    legenda: 'quadra coberta, Tamarineira',
  },
  {
    id: 'patio',
    nome: 'Pátio coberto',
    texto: aConfirmar('pátio coberto (citado em diretórios)'),
    foto: 'pátio coberto',
    legenda: 'pátio coberto, Tamarineira',
  },
  {
    id: 'salas',
    nome: 'Salas de aula',
    texto: aConfirmar('salas climatizadas (citadas em diretórios)'),
    foto: 'sala de aula',
    legenda: 'sala de aula, Tamarineira',
  },
];
