import type { SegmentoId } from '@/content/segmentos';
import { idadeMaxima, idadeMinima, tabelaSeries } from '@/content/series';

export type ResultadoSerie =
  { tipo: 'serie'; serie: string; segmento: SegmentoId; idade: number } | { tipo: 'muito-novo' } | { tipo: 'acima' };

/**
 * Idade completa na data de corte (31 de março do ano da campanha).
 * Como o corte cai no último dia do mês, mês + ano de nascimento bastam:
 * quem nasce até março completa a idade antes do corte.
 */
export function idadeNaDataDeCorte(mesNascimento: number, anoNascimento: number, anoCampanha: number) {
  const depoisDoCorte = mesNascimento > tabelaSeries.dataDeCorte.mes;
  return anoCampanha - anoNascimento - (depoisDoCorte ? 1 : 0);
}

export function serieParaNascimento(mes: number, ano: number, anoCampanha: number): ResultadoSerie {
  const idade = idadeNaDataDeCorte(mes, ano, anoCampanha);
  if (idade < idadeMinima) return { tipo: 'muito-novo' };
  if (idade > idadeMaxima) return { tipo: 'acima' };
  const linha = tabelaSeries.porIdade[idade as keyof typeof tabelaSeries.porIdade];
  return { tipo: 'serie', serie: linha.serie, segmento: linha.segmento, idade };
}
