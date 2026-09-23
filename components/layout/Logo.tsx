import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/site.config';

/**
 * Marca do cabeçalho. O PNG do rodapé é a versão para fundo escuro (letras
 * brancas): no papel claro, as mesmas letras vão em azul Anglo
 * (`logo-positivo.png`), gerado a partir desse arquivo. O SVG oficial ainda
 * não chegou. O nome acessível contém o texto visível do logo (WCAG 2.5.3).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.nome} — página inicial`} className={cn('shrink-0', className)}>
      <Image
        src="/marca/logo-positivo.png"
        alt=""
        width={624}
        height={375}
        quality={90}
        priority
        className="h-14 w-auto lg:h-[4.75rem]"
      />
    </Link>
  );
}
