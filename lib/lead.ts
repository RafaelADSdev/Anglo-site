/**
 * Formulário "Agendar visita" (briefing §9): tipos, máscara e validação
 * compartilhados entre o navegador (LeadForm) e o servidor (enviarLead).
 */

export const ORIGENS = [
  'Instagram',
  'Google',
  'Indicação de outra família',
  'Anúncio',
  'Passei em frente à escola',
  'Outro',
] as const;

export const PERIODOS = ['Manhã', 'Tarde'] as const;

export type DadosLead = {
  nome: string;
  whatsapp: string;
  email: string;
  segmento: string;
  periodo: string;
  origem: string;
  consentimento: boolean;
  /** Honeypot: pessoas não veem este campo; se vier preenchido, é robô. */
  empresa: string;
  utm: Record<string, string>;
  /** Página por onde a pessoa entrou no site (e de onde veio). */
  paginaEntrada: string;
  /** Página em que o formulário foi enviado. */
  paginaFormulario: string;
};

export type ErroEnvio = 'dados-invalidos' | 'limite' | 'nao-configurado' | 'falha';

export type ResultadoEnvio = { ok: true } | { ok: false; erro: ErroEnvio };

export type CampoComErro = 'nome' | 'whatsapp' | 'email' | 'segmento' | 'periodo' | 'consentimento';
export type Erros = Partial<Record<CampoComErro, string>>;

/** (81) 98254-1643 — aceita 10 ou 11 dígitos. */
export function mascaraWhatsApp(valor: string) {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validarLead(d: Pick<DadosLead, CampoComErro>): Erros {
  const erros: Erros = {};
  if (d.nome.trim().length < 2) erros.nome = 'Informe seu nome.';
  const digitos = d.whatsapp.replace(/\D/g, '');
  if (digitos.length < 10 || digitos.length > 11) erros.whatsapp = 'Informe o WhatsApp com DDD, ex.: (81) 90000-0000.';
  if (d.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim()))
    erros.email = 'Confira o e-mail — ele parece incompleto.';
  if (!d.segmento) erros.segmento = 'Escolha o segmento de interesse.';
  if (!d.periodo) erros.periodo = 'Escolha o melhor período para a visita.';
  if (!d.consentimento) erros.consentimento = 'Para enviar, marque a autorização de contato.';
  return erros;
}

const texto = (valor: unknown, max: number) => (typeof valor === 'string' ? valor.trim().slice(0, max) : '');

/**
 * No servidor, nada que vem do navegador é confiável: força cada campo para o
 * tipo esperado e corta tamanhos antes de validar.
 */
export function normalizarLead(entrada: unknown): DadosLead {
  const e = (typeof entrada === 'object' && entrada !== null ? entrada : {}) as Record<string, unknown>;
  const utmBruto = typeof e.utm === 'object' && e.utm !== null ? (e.utm as Record<string, unknown>) : {};
  const utm: Record<string, string> = {};
  for (const [chave, valor] of Object.entries(utmBruto).slice(0, 5)) {
    if (/^utm_[a-z]+$/.test(chave)) utm[chave] = texto(valor, 120);
  }
  return {
    nome: texto(e.nome, 120),
    whatsapp: texto(e.whatsapp, 20),
    email: texto(e.email, 160),
    segmento: texto(e.segmento, 40),
    periodo: texto(e.periodo, 20),
    origem: texto(e.origem, 60),
    consentimento: e.consentimento === true,
    empresa: texto(e.empresa, 120),
    utm,
    paginaEntrada: texto(e.paginaEntrada, 300),
    paginaFormulario: texto(e.paginaFormulario, 120),
  };
}
