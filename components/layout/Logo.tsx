import Link from 'next/link';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/site.config';

function Nome() {
  return (
    <span className="block font-display text-[1.0625rem] leading-[1.1] font-semibold text-ink">
      Colégio Anglo Líder
      <span className="block text-brand-blue italic">Tamarineira</span>
    </span>
  );
}

/**
 * Logo do cabeçalho. A versão positiva (para fundo claro) em SVG ainda não
 * chegou [A CONFIRMAR: logo oficial]: até lá, o nome em texto. Em homologação,
 * a borda tracejada lembra que o arquivo oficial falta. O nome acessível
 * contém o texto visível (WCAG 2.5.3).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('shrink-0', className)}>
      {siteConfig.emHomologacao ? (
        <span className="block rounded-sm border-[1.5px] border-dashed border-field px-2.5 py-1">
          <Nome />
          <span className="sr-only"> (logo oficial pendente) — página inicial</span>
        </span>
      ) : (
        <>
          <Nome />
          <span className="sr-only"> — página inicial</span>
        </>
      )}
    </Link>
  );
}
