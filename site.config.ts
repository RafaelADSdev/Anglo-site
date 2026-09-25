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
    telefone: {
      numero: '8133048400',
      exibicao: '(81) 3304-8400',
    },
    email: aConfirmar('e-mail de contato') as Talvez<string>,
    endereco: {
      logradouro: 'R. Visc. de Abaeté, 200',
      cep: '52110-010',
    },
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
    youtube: { url: 'https://www.youtube.com/@anglotamarineira/featured', rotulo: 'YouTube' },
  },

  /** Dados da Política de Privacidade (LGPD). O texto-base precisa de revisão jurídica antes da produção. */
  juridico: {
    controlador: aConfirmar('razão social e CNPJ da mantenedora') as Talvez<{ razaoSocial: string; cnpj: string }>,
    encarregado: aConfirmar('nome e e-mail do encarregado pelo tratamento de dados (DPO)') as Talvez<{
      nome: string;
      email: string;
    }>,
    /** Prazo de guarda das conversas de agendamento no WhatsApp, por extenso (ex.: "por até 12 meses"). */
    guardaDosPedidos: aConfirmar(
      'por quanto tempo as conversas de agendamento no WhatsApp ficam guardadas',
    ) as Talvez<string>,
    /** Data de vigência da política, por extenso. */
    atualizadaEm: aConfirmar('data de vigência, depois da revisão jurídica') as Talvez<string>,
  },

  /** ID do vídeo institucional no YouTube. */
  videoInstitucional: aConfirmar('vídeo M67_GShkIzQ está privado no YouTube') as Talvez<{ id: string; titulo: string }>,

  medicao: {
    gtmId: 'GTM-W9QMS4S2',
    facebookDomainVerification: 'my6hhjure3xgtjnaqjz2iz1ebm6y14',
  },
} as const;

export type SiteConfig = typeof siteConfig;
