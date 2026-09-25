import { documentosMatricula, type GrupoDocumentos } from '@/content/matricula';
import { aConfirmar, isPendente, type Talvez } from '@/lib/pending';
import { siteConfig } from '@/site.config';

/** Dúvidas frequentes. Em produção, só aparecem perguntas com resposta validada pela escola. */

export type Duvida = {
  id: string;
  pergunta: string;
  resposta: Talvez<string>;
  grupos?: readonly GrupoDocumentos[];
  nota?: string;
};

const todas = {
  idade: {
    pergunta: 'A partir de que idade a escola recebe crianças?',
    resposta: 'A partir de 1 ano, na Educação Infantil.',
  },
  turnos: {
    pergunta: 'Quais turnos a escola oferece? Tem período integral?',
    resposta: aConfirmar('turnos e período integral por segmento'),
  },
  visita: {
    pergunta: 'Como funciona a visita?',
    resposta: aConfirmar('formato e duração da visita'),
  },
  documentos: {
    pergunta: 'Quais documentos preciso para a matrícula?',
    resposta: documentosMatricula.lead,
    grupos: documentosMatricula.grupos,
    nota: documentosMatricula.nota,
  },
  'alimentacao-transporte': {
    pergunta: 'A escola oferece alimentação e transporte?',
    resposta: aConfirmar('alimentação e transporte'),
  },
  valores: {
    pergunta: 'Como os valores são informados?',
    resposta: 'Depois da visita, a escola passa os valores e as condições. As mensalidades não ficam no site.',
  },
  vestibulares: {
    pergunta: 'Para quais vestibulares o Ensino Médio prepara?',
    resposta: 'ENEM e SSA.',
  },
  material: {
    pergunta: 'O material didático é do Sistema Anglo?',
    resposta: 'Sim. Os livros didáticos são do Sistema Anglo, da SOMOS Educação.',
  },
  inclusao: {
    pergunta: 'Como a escola acompanha estudantes com deficiência?',
    resposta: aConfirmar('práticas de inclusão e sala de AEE'),
  },
  transferencia: {
    pergunta: 'Dá para entrar no meio do ano?',
    resposta: aConfirmar('matrícula e transferência ao longo do ano'),
  },
} satisfies Record<string, Omit<Duvida, 'id'>>;

export type IdDuvida = keyof typeof todas;

export const duvidas = (ids: readonly IdDuvida[]): Duvida[] => ids.map((id) => ({ id, ...todas[id] }));

/** O que aparece: tudo em homologação; em produção, só pergunta com resposta validada. */
export const duvidasVisiveis = (lista: readonly Duvida[]) =>
  lista.filter((d) => siteConfig.emHomologacao || !isPendente(d.resposta));

export const duvidasHome = duvidas(['idade', 'turnos', 'visita', 'documentos', 'alimentacao-transporte', 'valores']);

export const duvidasMatricula = duvidas([
  'idade',
  'visita',
  'documentos',
  'valores',
  'turnos',
  'alimentacao-transporte',
  'material',
  'inclusao',
  'transferencia',
]);
