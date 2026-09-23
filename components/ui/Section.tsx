import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';
import { Heading } from './Heading';

export type Tom = 'papel' | 'areia' | 'azul' | 'tinta';

const tons: Record<Tom, string> = {
  papel: 'bg-paper text-ink',
  areia: 'bg-paper-2 text-ink',
  azul: 'bg-brand-blue text-white',
  tinta: 'bg-ink text-white',
};

type SectionProps = {
  id?: string;
  tom?: Tom;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
};

/** Seção com o respiro padrão (64 → 128 px). Fundos escuros ganham `data-tone`, que troca o foco para amarelo. */
export function Section({ id, tom = 'papel', labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tom === 'azul' ? 'blue' : tom === 'tinta' ? 'ink' : undefined}
      className={cn('section-y', tons[tom], className)}
    >
      {children}
    </section>
  );
}

type SectionHeadProps = {
  as?: 'h1' | 'h2' | 'h3';
  eyebrow: string;
  titulo: string;
  destaque?: string;
  id: string;
  intro?: React.ReactNode;
  tom?: 'claro' | 'escuro';
  className?: string;
};

/** Eyebrow + título em duas batidas (+ introdução opcional). */
export function SectionHead({
  as = 'h2',
  eyebrow,
  titulo,
  destaque,
  id,
  intro,
  tom = 'claro',
  className,
}: SectionHeadProps) {
  return (
    <div className={cn('max-w-[42rem]', className)}>
      <Eyebrow tom={tom}>{eyebrow}</Eyebrow>
      <Heading as={as} id={id} titulo={titulo} destaque={destaque} tom={tom} className="mt-4" />
      {intro ? (
        <p className={cn('mt-5 max-w-[36em] text-lead', tom === 'escuro' ? 'text-white/85' : 'text-ink-muted')}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
