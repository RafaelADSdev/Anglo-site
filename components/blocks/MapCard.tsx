import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

type Props = {
  endereco: string;
  linkComoChegar?: string | null;
  /** Classes de proporção (padrão 4:3). */
  proporcao?: string;
};

/** Mapa do Google incorporado. O vídeo institucional continua só no clique. */
export function MapCard({ endereco, linkComoChegar, proporcao = 'aspect-[4/3]' }: Props) {
  const busca = encodeURIComponent(endereco);

  return (
    <div className={cn('relative overflow-hidden rounded-md bg-paper-2 ring-1 ring-line', proporcao)}>
      <iframe
        src={`https://www.google.com/maps?q=${busca}&hl=pt-BR&z=16&output=embed`}
        title={`Mapa: ${endereco}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
      {linkComoChegar ? (
        <a
          href={linkComoChegar}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 bottom-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-4 text-small font-bold text-ink shadow-float ring-1 ring-line"
        >
          Como chegar
          <Icon name="arrow-up-right" className="text-brand-blue" />
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      ) : null}
    </div>
  );
}
