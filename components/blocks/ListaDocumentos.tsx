import type { GrupoDocumentos } from '@/content/matricula';
import { cn } from '@/lib/cn';

type Props = {
  grupos: readonly GrupoDocumentos[];
  nota?: string;
  /** No FAQ os grupos empilham e o título fica menor. */
  denso?: boolean;
  className?: string;
};

/** Dois grupos de documentos da matrícula, em linhas separadas por `line`. */
export function ListaDocumentos({ grupos, nota, denso = false, className }: Props) {
  return (
    <div className={className}>
      <div className={cn('grid gap-12', !denso && 'lg:grid-cols-2 lg:gap-x-16')}>
        {grupos.map((grupo, i) => (
          <div key={grupo.titulo} className="reveal" style={{ '--i': i } as React.CSSProperties}>
            <h3
              className={cn('font-display font-semibold text-ink', denso ? 'text-[1.25rem] leading-snug' : 'text-h3')}
            >
              {grupo.titulo}
            </h3>
            <ul className="mt-4 border-t border-line">
              {grupo.itens.map((item) => (
                <li key={item.nome} className="border-b border-line py-4">
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
