import Link from 'next/link';
import { hrefProjeto, type Projeto } from '@/content/projetos';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';

/**
 * Lista editorial de projetos: tema com o friso, nome e resumo na mesma linha,
 * separados por `line`. A linha inteira leva ao projeto. Sem numeração:
 * projeto não é sequência.
 */
export function ListaProjetos({ projetos, origem }: { projetos: readonly Projeto[]; origem: string }) {
  return (
    <ul className="border-t border-line">
      {projetos.map((p) => (
        <li
          key={p.id}
          className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 border-b border-line py-6 lg:grid-cols-12 lg:gap-x-8 lg:py-8"
        >
          <div className="lg:col-span-4">
            <Eyebrow>{p.tema}</Eyebrow>
            <h3 className="mt-2 font-display text-h3 font-semibold text-ink">
              <Link
                href={hrefProjeto(p)}
                className="transition-colors duration-150 group-hover:text-brand-blue after:absolute after:inset-0"
                data-track="cta_click"
                data-track-origem={origem}
              >
                {p.nome}
              </Link>
            </h3>
          </div>
          <Icon
            name="arrow-right"
            size={20}
            className="text-brand-blue transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none lg:col-start-12 lg:row-start-1 lg:justify-self-end"
          />
          <p className="col-span-2 text-ink-muted lg:col-span-7 lg:col-start-5 lg:row-start-1">{p.resumo}</p>
        </li>
      ))}
    </ul>
  );
}
