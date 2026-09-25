import type { Foto } from '@/lib/foto';
import { aConfirmar, type Talvez } from '@/lib/pending';

/**
 * Eventos do calendário da escola (lista passada pelo cliente em 25/09/2026).
 * Os nomes são confirmados. As descrições são provisórias: frases curtas escritas
 * a partir do nome, a pedido do cliente (25/09/2026), até a escola mandar as suas —
 * em homologação levam o marcador "texto provisório". A época do ano segue pendente.
 * Sem foto real, a capa é tipográfica (cor da marca + ícone).
 */

export type Evento = {
  id: string;
  nome: string;
  icone: 'faisca' | 'trofeu' | 'livro' | 'estrela' | 'arvore';
  descricao: string;
  /** Descrição escrita pelo site, não pela escola: aparece com o marcador em homologação. */
  provisorio?: boolean;
  /** Quando acontece (mês ou época do ano), no texto da escola. */
  quando: Talvez<string>;
  imagem?: Foto;
};

export const eventos: readonly Evento[] = [
  {
    id: 'fic',
    nome: 'FIC',
    icone: 'faisca',
    descricao: 'Estudantes apresentam à comunidade escolar os trabalhos desenvolvidos em sala.',
    provisorio: true,
    quando: aConfirmar('época do ano'),
  },
  {
    id: 'jogos-internos',
    nome: 'Jogos Internos',
    icone: 'trofeu',
    descricao: 'Competições esportivas entre as turmas da escola.',
    provisorio: true,
    quando: aConfirmar('época do ano'),
  },
  {
    id: 'literatuando',
    nome: 'Literatuando',
    icone: 'livro',
    descricao: 'A leitura em destaque: atividades a partir dos livros lidos pelos estudantes.',
    provisorio: true,
    quando: aConfirmar('época do ano'),
  },
  {
    id: 'natal-sertanejo-solidario',
    nome: 'Natal Sertanejo Solidário',
    icone: 'estrela',
    descricao: 'O Natal da escola com a cultura do sertão e uma ação solidária da comunidade escolar.',
    provisorio: true,
    quando: aConfirmar('data'),
  },
  {
    id: 'dia-da-arvore',
    nome: 'Dia da Árvore',
    icone: 'arvore',
    descricao: 'Atividades sobre meio ambiente e o cuidado com a natureza.',
    provisorio: true,
    quando: aConfirmar('data da atividade'),
  },
];
