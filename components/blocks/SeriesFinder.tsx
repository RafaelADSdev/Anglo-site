'use client';

import dynamic from 'next/dynamic';
import { useId, useState } from 'react';
import { tabelaSeries } from '@/content/series';
import { serieParaNascimento } from '@/lib/series';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

// A Motion só entra quando a pessoa começa a usar o painel (fora do carregamento inicial da Home).
const carregarResultado = () => import('./SeriesResult');
const SeriesResult = dynamic(carregarResultado, { ssr: false });

const MESES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const campo = 'campo campo-select';

type Props = {
  anoCampanha: number;
  titulo: string;
  destaque: string;
  eyebrow: string;
  /** Nota "tabela provisória" (só em homologação). */
  aviso?: React.ReactNode;
};

/**
 * "Encontre a série": mês + ano de nascimento → série no ano da campanha, pela
 * data de corte de 31 de março. Roda só no navegador; nada é enviado.
 */
export function SeriesFinder({ anoCampanha, titulo, destaque, eyebrow, aviso }: Props) {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const id = useId();
  const anos = Array.from({ length: 19 }, (_, i) => anoCampanha - 1 - i);
  const resultado = mes && ano ? serieParaNascimento(Number(mes), Number(ano), anoCampanha) : null;
  const { dia, mes: mesCorte } = tabelaSeries.dataDeCorte;
  const corte = `${dia} de ${MESES[mesCorte - 1].toLowerCase()}`;
  const interagiu = Boolean(mes || ano);

  let dica: string | null = null;
  if (!mes && !ano) dica = 'Escolha o mês e o ano. O resultado aparece aqui, sem enviar nenhum dado.';
  else if (!mes) dica = `Falta o mês: quem nasce até ${corte} entra uma série à frente de quem nasce depois.`;
  else if (!ano) dica = 'Agora escolha o ano de nascimento.';

  const preparar = () => void carregarResultado();

  return (
    <section
      aria-labelledby={`${id}-titulo`}
      className="relative overflow-hidden rounded-md bg-surface shadow-float before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe"
    >
      <div className="grid gap-6 p-5 pt-7 sm:p-7 sm:pt-9 lg:grid-cols-12 lg:items-end lg:gap-x-10 lg:p-9 lg:pt-10">
        <div className="lg:col-span-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h2" id={`${id}-titulo`} titulo={titulo} destaque={destaque} tamanho="h3" className="mt-3" />
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7">
          <div>
            <label htmlFor={`${id}-mes`} className="mb-1.5 block text-[0.875rem] font-bold">
              Mês de nascimento
            </label>
            <select
              id={`${id}-mes`}
              value={mes}
              onFocus={preparar}
              onChange={(e) => setMes(e.target.value)}
              className={campo}
            >
              <option value="">Mês</option>
              {MESES.map((nome, i) => (
                <option key={nome} value={i + 1}>
                  {nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${id}-ano`} className="mb-1.5 block text-[0.875rem] font-bold">
              Ano de nascimento
            </label>
            <select
              id={`${id}-ano`}
              value={ano}
              onFocus={preparar}
              onChange={(e) => setAno(e.target.value)}
              className={campo}
            >
              <option value="">Ano</option>
              {anos.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div aria-live="polite" className="border-t border-line pt-5 lg:col-span-12">
          {dica ? <p className="text-small text-ink-muted">{dica}</p> : null}

          {resultado?.tipo === 'muito-novo' ? (
            <p className="text-small text-ink">
              A Educação Infantil recebe crianças a partir de 1 ano. Fale com a secretaria para saber quando a criança
              pode começar.
            </p>
          ) : null}

          {resultado?.tipo === 'acima' ? (
            <p className="text-small text-ink">
              Pela idade, a série prevista ficaria depois do 3º ano do Ensino Médio. Fale com a secretaria sobre a
              situação escolar.
            </p>
          ) : null}

          {interagiu ? (
            <SeriesResult
              resultado={resultado?.tipo === 'serie' ? resultado : null}
              anoCampanha={anoCampanha}
              corte={corte}
            />
          ) : null}

          {aviso ? <div className="mt-3">{aviso}</div> : null}
        </div>
      </div>
    </section>
  );
}
