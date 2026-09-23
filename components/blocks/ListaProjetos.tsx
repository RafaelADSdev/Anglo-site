import Link from 'next/link';
import { hrefProjeto, type Projeto } from '@/content/projetos';
import { Icon } from '@/components/ui/Icon';

/**
 * Lista editorial de projetos: nome e resumo em linha, separados por `line`;
 * a linha inteira leva ao projeto. Sem numeração: projeto não é sequência.
 */
export function ListaProjetos({ projetos, origem }: { projetos: readonly Projeto[]; origem: string }) {
  return (
    <ul className="border-t border-line">
      {projetos.map((p) => (
        <li
          key={p.id}
          className="group relative grid gap-2 border-b border-line py-6 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-7"
        >
          <h3 className="font-display text-h3 font-semibold text-ink lg:col-span-4">
            <Link
              href={hrefProjeto(p)}
              className="transition-colors duration-150 group-hover:text-brand-blue after:absolute after:inset-0"
              data-track="cta_click"
              data-track-origem={origem}
            >
              {p.nome}
            </Link>
          </h3>
          <p className="text-ink-muted lg:col-span-7">{p.resumo}</p>
          <Icon
            name="arrow-right"
            size={20}
            className="hidden text-brand-blue transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none lg:col-span-1 lg:block lg:justify-self-end"
          />
        </li>
      ))}
    </ul>
  );
}
