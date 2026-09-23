import type { SegmentoId } from './segmentos';

/**
 * Tabela idade → série do "Encontre a série".
 *
 * PROVISÓRIA [A CONFIRMAR: secretaria]: segue a data de corte nacional de
 * 31 de março (idade completa até 31/03 do ano da campanha). Os nomes das
 * turmas da Educação Infantil também precisam ser validados. Enquanto
 * `validadaPelaSecretaria` for `false`, o painel só aparece em homologação.
 */
export const tabelaSeries = {
  validadaPelaSecretaria: false,
  dataDeCorte: { dia: 31, mes: 3 },
  /** Idade completa na data de corte → série. */
  porIdade: {
    1: { serie: 'Infantil I', segmento: 'infantil' },
    2: { serie: 'Infantil II', segmento: 'infantil' },
    3: { serie: 'Infantil III', segmento: 'infantil' },
    4: { serie: 'Infantil IV', segmento: 'infantil' },
    5: { serie: 'Infantil V', segmento: 'infantil' },
    6: { serie: '1º ano', segmento: 'fund1' },
    7: { serie: '2º ano', segmento: 'fund1' },
    8: { serie: '3º ano', segmento: 'fund1' },
    9: { serie: '4º ano', segmento: 'fund1' },
    10: { serie: '5º ano', segmento: 'fund1' },
    11: { serie: '6º ano', segmento: 'fund2' },
    12: { serie: '7º ano', segmento: 'fund2' },
    13: { serie: '8º ano', segmento: 'fund2' },
    14: { serie: '9º ano', segmento: 'fund2' },
    15: { serie: '1º ano do Ensino Médio', segmento: 'medio' },
    16: { serie: '2º ano do Ensino Médio', segmento: 'medio' },
    17: { serie: '3º ano do Ensino Médio', segmento: 'medio' },
  } satisfies Record<number, { serie: string; segmento: SegmentoId }>,
} as const;

export const idadeMinima = 1;
export const idadeMaxima = 17;
