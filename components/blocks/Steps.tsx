import type { Passo } from '@/content/matricula';
import { confirmado, isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { Pending } from '@/components/ui/Pending';

/**
 * Passos de um processo real, lidos de cima para baixo. O número fica ao
 * lado do título, no tamanho do texto — quatro colunas com numeral gigante
 * pareciam um bloco de modelo. Em produção, passo sem título sai e a
 * numeração se refaz.
 */
export function Steps({ passos }: { passos: readonly Passo[] }) {
  const visiveis = passos.filter((p) => siteConfig.emHomologacao || !isPendente(p.titulo));

  return (
    <ol className="max-w-[40rem] border-t border-line">
      {visiveis.map((p, i) => {
        const titulo = confirmado(p.titulo);
        const texto = confirmado(p.texto);
        return (
          <li
            key={i}
            style={{ '--i': i } as React.CSSProperties}
            className="reveal grid grid-cols-[2.75rem_1fr] items-baseline gap-x-4 border-b border-line py-5 sm:grid-cols-[3.25rem_1fr] sm:gap-x-6"
          >
            <span aria-hidden className="font-display text-[1.75rem] leading-none font-medium text-brand-blue italic">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-[1.125rem] leading-snug font-bold text-ink">
                {titulo ?? <Pending>{isPendente(p.titulo) ? p.titulo.aConfirmar : ''}</Pending>}
              </h3>
              {texto ? (
                <p className="mt-1 text-small text-ink-muted">{texto}</p>
              ) : isPendente(p.texto) ? (
                <p className="mt-2">
                  <Pending>{p.texto.aConfirmar}</Pending>
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
