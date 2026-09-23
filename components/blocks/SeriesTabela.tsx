import { segmentos } from '@/content/segmentos';
import { tabelaSeries } from '@/content/series';
import { SegmentTag } from '@/components/ui/SegmentTag';

const doisDigitos = (n: number) => String(n).padStart(2, '0');
const data = (d: Date) => `${doisDigitos(d.getUTCDate())}/${doisDigitos(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;

/**
 * Quem tem `idade` anos completos na data de corte do ano da campanha nasceu
 * entre o dia seguinte ao corte de (ano − idade − 1) e o corte de (ano − idade).
 * Mesma regra do "Encontre a série" (lib/series.ts).
 */
function nascimentoPara(idade: number, anoCampanha: number) {
  const { dia, mes } = tabelaSeries.dataDeCorte;
  return {
    de: data(new Date(Date.UTC(anoCampanha - idade - 1, mes - 1, dia + 1))),
    ate: data(new Date(Date.UTC(anoCampanha - idade, mes - 1, dia))),
  };
}

/** Tabela data de nascimento → série, agrupada por segmento. Provisória até a secretaria validar. */
export function SeriesTabela({ anoCampanha }: { anoCampanha: number }) {
  const linhas = Object.entries(tabelaSeries.porIdade).map(([idade, l]) => ({
    idade: Number(idade),
    ...l,
    ...nascimentoPara(Number(idade), anoCampanha),
  }));

  return (
    <div className="overflow-hidden rounded-md bg-surface ring-1 ring-line">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Série em {anoCampanha} pela data de nascimento, com data de corte em 31 de março
        </caption>
        <thead>
          <tr className="bg-paper-2 text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">
            <th scope="col" className="px-4 py-3.5 sm:px-6">
              Nascimento
            </th>
            <th scope="col" className="px-4 py-3.5 sm:px-6">
              Série em {anoCampanha}
            </th>
          </tr>
        </thead>
        {segmentos.map((s) => (
          <tbody key={s.id} className="border-t border-line">
            <tr>
              <th scope="rowgroup" colSpan={2} className="px-4 pt-5 pb-2 text-left sm:px-6">
                <SegmentTag segmento={s.id} />
              </th>
            </tr>
            {linhas
              .filter((l) => l.segmento === s.id)
              .map((l) => (
                <tr key={l.idade} className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-small font-medium text-ink-muted tabular-nums sm:px-6">
                    {l.de} a {l.ate}
                  </th>
                  <td className="px-4 py-3 font-bold text-ink sm:px-6">{l.serie}</td>
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
