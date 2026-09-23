import type { Passo } from '@/content/matricula';
import { confirmado, isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { Pending } from '@/components/ui/Pending';

/**
 * Passos numerados de um processo real (a ordem importa). Em produção, passos
 * sem título confirmado saem e a numeração se refaz.
 */
export function Steps({ passos }: { passos: readonly Passo[] }) {
  const visiveis = passos.filter((p) => siteConfig.emHomologacao || !isPendente(p.titulo));

  return (
    <ol className="grid gap-x-6 gap-y-10 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
      {visiveis.map((p, i) => {
        const titulo = confirmado(p.titulo);
        const texto = confirmado(p.texto);
        return (
          <li
            key={i}
            style={{ '--i': i } as React.CSSProperties}
            className="reveal lg:border-l lg:border-line lg:px-7 lg:first:border-l-0 lg:first:pl-0"
          >
            <span aria-hidden className="block font-display text-step font-medium text-brand-blue italic">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-[1.125rem] leading-snug font-bold text-ink">
              {titulo ?? <Pending>{isPendente(p.titulo) ? p.titulo.aConfirmar : ''}</Pending>}
            </h3>
            {texto ? (
              <p className="mt-2 text-small text-ink-muted">{texto}</p>
            ) : isPendente(p.texto) ? (
              <p className="mt-2">
                <Pending>{p.texto.aConfirmar}</Pending>
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
