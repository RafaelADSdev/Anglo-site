import type { Talvez } from '@/lib/pending';

/** Passos da matrícula. */

export type Passo = {
  titulo: Talvez<string>;
  texto: Talvez<string>;
  /** Ícone do passo na trilha de /matriculas (components/ui/Icon.tsx). */
  icone: 'whatsapp' | 'map-pin' | 'documento' | 'check';
};

export const passosMatricula: readonly Passo[] = [
  { titulo: 'Agende a visita', texto: 'Pelo WhatsApp, com a mensagem já escrita.', icone: 'whatsapp' },
  { titulo: 'Conheça a escola', texto: 'Visita guiada pelos espaços da escola.', icone: 'map-pin' },
  {
    titulo: 'Receba a proposta',
    texto: 'Depois da visita, a escola passa os valores e as condições.',
    icone: 'documento',
  },
  {
    titulo: 'Garanta a vaga',
    texto: 'Na secretaria, com os documentos do estudante e do responsável.',
    icone: 'check',
  },
];

export type Documento = { readonly nome: string; readonly detalhe: string };

export type GrupoDocumentos = { readonly titulo: string; readonly itens: readonly Documento[] };

/** Lista confirmada pela escola em 24/09/2026. A CNH e a conferência dos originais completam o que a lista não dizia. */
export const documentosMatricula = {
  lead: 'Do estudante e de quem faz a matrícula. Se faltar algum, a secretaria orienta no atendimento.',
  nota: 'Leve os originais para a secretaria conferir.',
  grupos: [
    {
      titulo: 'Do estudante',
      itens: [
        {
          nome: 'Certidão de nascimento ou RG',
          detalhe: 'Para comprovar o nome e a idade.',
        },
        {
          nome: 'CPF do estudante',
          detalhe: 'Se ainda não tiver, vale o do responsável.',
        },
        {
          nome: 'Histórico escolar ou declaração de transferência',
          detalhe: 'Necessário se o estudante já estudava em outra escola.',
        },
        {
          nome: 'Carteira de vacinação atualizada',
          detalhe: 'Retirada no posto de saúde, para comprovar as vacinas em dia.',
        },
        {
          nome: 'Duas fotos 3x4',
          detalhe: 'Recentes, do estudante.',
        },
        {
          nome: 'Laudo médico',
          detalhe: 'Só se o estudante tiver deficiência ou alguma necessidade especial.',
        },
      ],
    },
    {
      titulo: 'Do responsável',
      itens: [
        {
          nome: 'RG e CPF',
          detalhe: 'Do pai, da mãe ou do responsável. No lugar do RG, vale a CNH.',
        },
        {
          nome: 'Comprovante de residência atualizado',
          detalhe: 'Conta recente de água, luz ou telefone.',
        },
        {
          nome: 'Documento de guarda',
          detalhe: 'Se o responsável não for o pai ou a mãe.',
        },
      ],
    },
  ],
} as const satisfies {
  lead: string;
  nota: string;
  grupos: readonly GrupoDocumentos[];
};
