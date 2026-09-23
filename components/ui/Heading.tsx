import { cn } from '@/lib/cn';

type Props = {
  as?: 'h1' | 'h2' | 'h3';
  /** Primeira batida. */
  titulo: string;
  /** Segunda batida, em itálico e na cor de destaque, sempre em linha própria. */
  destaque?: string;
  tamanho?: 'display' | 'h2' | 'h3';
  tom?: 'claro' | 'escuro';
  id?: string;
  className?: string;
};

const tamanhos = { display: 'text-display', h2: 'text-h2', h3: 'text-h3' } as const;

/** Título editorial em duas batidas (DNA do briefing §5). */
export function Heading({ as: Tag = 'h2', titulo, destaque, tamanho = 'h2', tom = 'claro', id, className }: Props) {
  return (
    <Tag
      id={id}
      className={cn(
        'font-display font-semibold',
        tamanhos[tamanho],
        tom === 'escuro' ? 'text-white' : 'text-ink',
        className,
      )}
    >
      {titulo}
      {destaque ? (
        <>
          {' '}
          <em className={cn('block italic', tom === 'escuro' ? 'text-brand-yellow' : 'text-brand-blue')}>{destaque}</em>
        </>
      ) : null}
    </Tag>
  );
}
