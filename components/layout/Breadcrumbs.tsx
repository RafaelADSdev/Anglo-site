import Link from 'next/link';
import { urlAbsoluta } from '@/lib/metadata';

export type Migalha = { rotulo: string; href: string };

/**
 * Trilha "Início / Seção / Página". O último item é a página atual (sem link).
 * Leva junto o BreadcrumbList em JSON-LD, que o Google usa no resultado de busca.
 */
export function Breadcrumbs({ itens }: { itens: readonly Migalha[] }) {
  const trilha = [{ rotulo: 'Início', href: '/' }, ...itens];
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trilha.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.rotulo,
      item: urlAbsoluta(item.href),
    })),
  };

  return (
    <nav aria-label="Você está em">
      <ol className="flex flex-wrap items-center gap-x-2 text-caption text-ink-muted">
        {trilha.map((item, i) => {
          const atual = i === trilha.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-x-2">
              {atual ? (
                <span aria-current="page" className="inline-flex min-h-11 items-center font-semibold text-ink">
                  {item.rotulo}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center link-underline hover:text-ink hover:decoration-brand-blue"
                  >
                    {item.rotulo}
                  </Link>
                  <span aria-hidden className="text-field">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, '\\u003c') }}
      />
    </nav>
  );
}
