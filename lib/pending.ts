/**
 * Conteúdo que depende de confirmação da escola.
 *
 * Regra do projeto (docs/briefing.md §5): nada é inventado. Um dado pendente
 * é declarado com `aConfirmar('o que falta')`. Em homologação o site mostra
 * um marcador "A confirmar"; em produção o bloco que depende dele não aparece.
 * A lista humana de pendências fica em PENDENCIAS.md.
 */
export type Pendente = { readonly aConfirmar: string };

export type Talvez<T> = T | Pendente;

export const aConfirmar = (descricao: string): Pendente => ({ aConfirmar: descricao });

export function isPendente<T>(valor: Talvez<T>): valor is Pendente {
  return typeof valor === 'object' && valor !== null && 'aConfirmar' in valor;
}

/** O valor confirmado, ou `null` quando ainda está pendente. */
export function confirmado<T>(valor: Talvez<T>): T | null {
  return isPendente(valor) ? null : valor;
}
