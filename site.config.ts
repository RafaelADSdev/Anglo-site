import { aConfirmar, type Talvez } from '@/lib/pending';

/**
 * Configuração central do site. O ano da campanha, o nome e os contatos mudam
 * só aqui. Tudo que ainda não foi confirmado pela escola usa `aConfirmar(...)`
 * (ver lib/pending.ts e PENDENCIAS.md).
 */

/** `producao` só quando a escola aprovar: fora disso, noindex + faixa de homologação. */
const ambiente = process.env.NEXT_PUBLIC_SITE_ENV === 'producao' ? 'producao' : 'homologacao';

export const siteConfig = {
  ambiente,
  emHomologacao: ambiente === 'homologacao',

  /** Nome de trabalho aprovado na etapa 1; o oficial ainda depende da escola. */
  nome: 'Colégio Anglo Líder Tamarineira',
  nomeCurto: 'Anglo Líder Tamarineira',

  /** Ano da campanha de matrícula. Virar o ano = mudar este número. */
  anoMatricula: 2027,

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://colegioanglotamarineira.com.br',

  bairro: 'Tamarineira',
  cidade: 'Recife',
  uf: 'PE',

  contato: {
    whatsapp: {
      numero: '5581982541643',
      exibicao: '(81) 98254-1643',
    },
    telefone: aConfirmar('telefone fixo — diretórios citam (81) 3304-8400') as Talvez<{
      numero: string;
      exibicao: string;
    }>,
    email: aConfirmar('e-mail de contato') as Talvez<string>,
    endereco: aConfirmar(
      'endereço — Instagram e Facebook oficiais citam Rua Visconde de Abaeté, 200, Tamarineira; falta o CEP e o ok da escola',
    ) as Talvez<{ logradouro: string; cep: string }>,
    /** Link do Perfil da Empresa no Google (botão "Como chegar"). */
    mapa: aConfirmar('link do Perfil da Empresa no Google') as Talvez<string>,
    horario: [
      { dias: 'Segunda a sexta', horas: '8h às 17h' },
      { dias: 'Fins de semana e feriados', horas: 'Fechado' },
    ],
    /** Versão curta usada nos microcopies. */
    // Espaços que não quebram: no celular a linha não parte "8h / às 17h" nem "seg. a / sex.".
    horarioCurto: 'seg.\u00a0a\u00a0sex., 8h\u00a0às\u00a017h',
  },

  redes: {
    instagram: { url: 'https://www.instagram.com/anglolidertamarineira/', rotulo: 'Instagram' },
    facebook: { url: 'https://www.facebook.com/anglolidertamarineira', rotulo: 'Facebook' },
    youtube: aConfirmar('canal do YouTube — @anglotamarineira5930 responde 404') as Talvez<{
      url: string;
      rotulo: string;
    }>,
  },

  /** ID do vídeo institucional no YouTube. */
  videoInstitucional: aConfirmar('vídeo M67_GShkIzQ está privado no YouTube') as Talvez<{ id: string; titulo: string }>,

  medicao: {
    gtmId: 'GTM-W9QMS4S2',
    facebookDomainVerification: 'my6hhjure3xgtjnaqjz2iz1ebm6y14',
  },
} as const;

export type SiteConfig = typeof siteConfig;
