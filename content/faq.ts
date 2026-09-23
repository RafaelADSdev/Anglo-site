import { aConfirmar, type Talvez } from '@/lib/pending';

/** Dúvidas frequentes. Em produção, só aparecem perguntas com resposta validada pela escola. */

export type Duvida = { id: string; pergunta: string; resposta: Talvez<string> };

export const duvidasHome: readonly Duvida[] = [
  {
    id: 'idade',
    pergunta: 'A partir de que idade a escola recebe crianças?',
    resposta: 'A partir de 1 ano, na Educação Infantil.',
  },
  {
    id: 'turnos',
    pergunta: 'Quais turnos a escola oferece? Tem período integral?',
    resposta: aConfirmar('turnos e período integral por segmento'),
  },
  {
    id: 'visita',
    pergunta: 'Como funciona a visita?',
    resposta: aConfirmar('formato e duração da visita'),
  },
  {
    id: 'documentos',
    pergunta: 'Quais documentos preciso para a matrícula?',
    resposta: aConfirmar('lista de documentos da matrícula'),
  },
  {
    id: 'alimentacao-transporte',
    pergunta: 'A escola oferece alimentação e transporte?',
    resposta: aConfirmar('alimentação e transporte'),
  },
  {
    id: 'valores',
    pergunta: 'Como os valores são informados?',
    resposta: aConfirmar('como a família recebe os valores (mensalidades não vão para o site)'),
  },
];
