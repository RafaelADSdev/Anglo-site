import type { Passo } from '@/content/matricula';
import { cn } from '@/lib/cn';
import { confirmado, isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';

const colunasLg: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

/**
 * Os passos da matrícula como um caminho que ocupa a largura toda: um card por
 * passo, com o ícone num círculo e o número grande em itálico; uma linha
 * tracejada passa pelos círculos e aparece nos vãos entre os cards (horizontal
 * no desktop, vertical no celular). O último passo, a vaga garantida, é o card
 * em azul Anglo — o ponto de chegada. O número é `aria-hidden`: quem diz a
 * ordem é a lista. Mesma regra do `Steps`: em produção, passo sem título sai e
 * a numeração se refaz.
 */
export function TrilhaPassos({ passos, className }: { passos: readonly Passo[]; className?: string }) {
  const visiveis = passos.filter((p) => siteConfig.emHomologacao || !isPendente(p.titulo));

  return (
    <ol
      className={cn(
        'relative grid gap-4 sm:grid-cols-2 lg:gap-6',
        colunasLg[visiveis.length],
        // A linha: vertical no celular (centro do círculo: 24 px de padding + 32 px), some em 2 colunas, horizontal no desktop.
        'before:absolute before:inset-y-10 before:left-14 before:border-l-2 before:border-dashed before:border-brand-blue/30',
        'sm:before:hidden lg:before:inset-x-0 lg:before:top-16 lg:before:bottom-auto lg:before:left-0 lg:before:block lg:before:border-t-2 lg:before:border-l-0',
        className,
      )}
    >
      {visiveis.map((p, i) => {
        const titulo = confirmado(p.titulo);
        const texto = confirmado(p.texto);
        const chegada = i === visiveis.length - 1;
        return (
          <li
            key={i}
            style={{ '--i': i } as React.CSSProperties}
            className={cn(
              'reveal relative flex flex-col rounded-md p-6 lg:min-h-84 lg:p-8',
              chegada ? 'bg-brand-blue text-white' : 'bg-surface ring-1 ring-line',
            )}
            data-tone={chegada ? 'blue' : undefined}
          >
            <div className="flex items-start justify-between gap-4">
              <span
                aria-hidden
                className={cn(
                  'grid size-16 shrink-0 place-items-center rounded-full',
                  chegada ? 'bg-white text-brand-blue' : 'bg-medio-soft text-brand-blue',
                )}
              >
                <Icon name={p.icone} size={28} />
              </span>
              <span
                aria-hidden
                className={cn(
                  'font-display text-step leading-none font-medium italic',
                  chegada ? 'text-brand-yellow' : 'text-brand-blue',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-8 lg:mt-auto">
              <h3 className={cn('font-display text-h3 font-semibold', chegada ? 'text-white' : 'text-ink')}>
                {titulo ?? <Pending>{isPendente(p.titulo) ? p.titulo.aConfirmar : ''}</Pending>}
              </h3>
              {texto ? (
                <p className={cn('mt-3', chegada ? 'text-white/85' : 'text-ink-muted')}>{texto}</p>
              ) : isPendente(p.texto) ? (
                <p className="mt-3">
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
