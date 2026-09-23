import { cn } from '@/lib/cn';

type Props = { children: React.ReactNode; tom?: 'claro' | 'escuro'; className?: string };

/** Rótulo curto acima do título, com o friso tricolor antes (sobre o azul, o azul do friso vira branco). */
export function Eyebrow({ children, tom = 'claro', className }: Props) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-sans text-eyebrow font-extrabold uppercase',
        tom === 'escuro' ? 'text-white' : 'text-ink',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn('h-[3px] w-6 shrink-0 rounded-[2px]', tom === 'escuro' ? 'stripe-invert' : 'stripe')}
      />
      <span>{children}</span>
    </p>
  );
}
