import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';

/**
 * Setas dizem para onde o clique leva (briefing §5):
 * → ação no site · ↓ rolar a página · ↗ sai do site (com aviso de nova aba para leitor de tela).
 */
export type Seta = 'direita' | 'baixo' | 'externa' | 'nenhuma';

const movimento: Record<Exclude<Seta, 'nenhuma'>, string> = {
  direita: 'group-hover:translate-x-[3px]',
  baixo: 'group-hover:translate-y-[3px]',
  externa: 'group-hover:translate-x-[2px] group-hover:-translate-y-[2px]',
};

const iconeDaSeta = { direita: 'arrow-right', baixo: 'arrow-down', externa: 'arrow-up-right' } as const;

function IconeSeta({ seta, className }: { seta: Seta; className?: string }) {
  if (seta === 'nenhuma') return null;
  return (
    <Icon
      name={iconeDaSeta[seta]}
      className={cn(
        'shrink-0 transition-transform duration-150 ease-out-soft motion-reduce:transition-none',
        movimento[seta],
        className,
      )}
    />
  );
}

const variantes = {
  primario: 'bg-brand-blue text-white hover:bg-brand-blue-hover',
  amarelo: 'bg-brand-yellow text-ink hover:bg-white',
  contorno: 'text-ink ring-[1.5px] ring-ink ring-inset hover:bg-paper-2',
  'contorno-claro': 'text-white ring-[1.5px] ring-white/80 ring-inset hover:bg-white/10',
} as const;

const tamanhos = {
  md: 'min-h-12 px-6 text-base',
  sm: 'min-h-11 px-4.5 text-[0.9375rem]',
} as const;

type BaseProps = {
  href: string;
  children: React.ReactNode;
  seta?: Seta;
  /** Link para fora do site: abre em nova aba e ganha a seta ↗. */
  externo?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children' | 'className'>;

function Destino({ href, externo, className, children, ...rest }: BaseProps & { className: string }) {
  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

type ButtonLinkProps = BaseProps & {
  variante?: keyof typeof variantes;
  tamanho?: keyof typeof tamanhos;
  icone?: React.ReactNode;
};

/** Botão em forma de link (CTA). */
export function ButtonLink({
  variante = 'primario',
  tamanho = 'md',
  seta = 'direita',
  externo,
  icone,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Destino
      externo={externo}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-bold transition-colors duration-150 ease-out-soft',
        tamanhos[tamanho],
        variantes[variante],
        className,
      )}
      {...rest}
    >
      {icone}
      {children}
      <IconeSeta seta={externo ? 'externa' : seta} />
    </Destino>
  );
}

type ArrowLinkProps = BaseProps & { tom?: 'claro' | 'escuro' };

/** Link de texto sublinhado com seta (CTA secundário). */
export function ArrowLink({ seta = 'direita', externo, tom = 'claro', className, children, ...rest }: ArrowLinkProps) {
  return (
    <Destino
      externo={externo}
      className={cn(
        'group inline-flex min-h-11 items-center gap-2 font-bold link-underline transition-[text-decoration-color] duration-150',
        tom === 'escuro' ? 'text-white hover:decoration-brand-yellow' : 'text-ink hover:decoration-brand-blue',
        className,
      )}
      {...rest}
    >
      {children}
      <IconeSeta
        seta={externo ? 'externa' : seta}
        className={tom === 'escuro' ? 'text-brand-yellow' : 'text-brand-blue'}
      />
    </Destino>
  );
}
