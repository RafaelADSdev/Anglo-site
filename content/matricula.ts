import { aConfirmar, type Talvez } from '@/lib/pending';

/** Passos da matrícula. O 03 e os documentos dependem da secretaria. */

export type Passo = { titulo: Talvez<string>; texto: Talvez<string> };

export const passosMatricula: readonly Passo[] = [
  { titulo: 'Agende a visita', texto: 'Pelo formulário ou pelo WhatsApp.' },
  { titulo: 'Conheça a escola', texto: 'Visita guiada pelos espaços da escola.' },
  {
    titulo: aConfirmar('nome da etapa entre a visita e a vaga'),
    texto: aConfirmar('o que acontece nessa etapa'),
  },
  { titulo: 'Garanta a vaga', texto: aConfirmar('documentos e contrato') },
];
