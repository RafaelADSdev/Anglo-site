import type { GrupoDocumentos } from '@/content/matricula';
import { cn } from '@/lib/cn';

type Props = {
  grupos: readonly GrupoDocumentos[];
  nota?: string;
  /** No FAQ os grupos empilham e o título fica menor. */
  denso?: boolean;
  className?: string;
};

/**
 * Dois grupos de documentos da matrícula, em linhas separadas por `line`.
 * Na página, os grupos usam a revelação ao rolar; dentro do FAQ (`denso`), não:
 * num <details> fechado a revelação nunca dispara e a lista ficaria invisível.
 * Lá, cada linha entra em sequência quando a resposta abre (`.faq-sequencia`).
 */
export function ListaDocumentos({ grupos, nota, denso = false, className }: Props) {
  // Posição de cada linha na sequência de entrada, contando os dois grupos.
  let ordem = 0;
  return (
    <div className={className}>
      <div className={cn('grid gap-12', !denso && 'lg:grid-cols-2 lg:gap-x-16')}>
        {grupos.map((grupo, i) => (
          <div
            key={grupo.titulo}
            className={denso ? undefined : 'reveal'}
            style={denso ? undefined : ({ '--i': i } as React.CSSProperties)}
          >
            <h3
              className={cn('font-display font-semibold text-ink', denso ? 'text-[1.25rem] leading-snug' : 'text-h3')}
            >
              {grupo.titulo}
            </h3>
            <ul className="mt-4 border-t border-line">
              {grupo.itens.map((item) => (
                <li
                  key={item.nome}
                  className={cn('border-b border-line py-4', denso && 'faq-sequencia')}
                  style={denso ? ({ '--i': ordem++ } as React.CSSProperties) : undefined}
                >
                  <p className="font-bold text-ink">{item.nome}</p>
                  <p className="mt-1 text-small text-ink-muted">{item.detalhe}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {nota ? <p className="mt-8 max-w-[40rem] text-small text-ink-muted">{nota}</p> : null}
    </div>
  );
}
