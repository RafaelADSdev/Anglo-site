import { cn } from '@/lib/cn';
import type { FotoPrevista } from '@/lib/foto';
import { siteConfig } from '@/site.config';
import { Figure } from '@/components/ui/Figure';

/** Em homologação, todas (placeholder onde falta a foto); em produção, só as fotos reais. */
export const fotosVisiveis = (fotos: readonly FotoPrevista[]) =>
  fotos.filter((f) => f.foto || siteConfig.emHomologacao);

/**
 * Até três fotos: a primeira larga (16:10), as outras lado a lado (4:3).
 * No celular, uma embaixo da outra. Sem foto para mostrar, não renderiza.
 */
export function Galeria({
  fotos,
  fundoPlaceholder,
  className,
}: {
  fotos: readonly FotoPrevista[];
  fundoPlaceholder?: 'areia' | 'claro';
  className?: string;
}) {
  const visiveis = fotosVisiveis(fotos).slice(0, 3);
  if (visiveis.length === 0) return null;
  const [primeira, ...resto] = visiveis;

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2', className)}>
      <Figure
        {...primeira}
        className="sm:col-span-2"
        proporcao="aspect-[16/10]"
        rotuloProporcao="16:10"
        fundoPlaceholder={fundoPlaceholder}
        sizes="(min-width: 1280px) 686px, (min-width: 1024px) 56vw, 100vw"
        arredondamento="md"
      />
      {resto.map((f) => (
        <Figure
          key={f.descricao}
          {...f}
          className={resto.length === 1 ? 'sm:col-span-2' : undefined}
          proporcao="aspect-[4/3]"
          fundoPlaceholder={fundoPlaceholder}
          sizes="(min-width: 1280px) 335px, (min-width: 640px) 50vw, 100vw"
          arredondamento="md"
        />
      ))}
    </div>
  );
}
