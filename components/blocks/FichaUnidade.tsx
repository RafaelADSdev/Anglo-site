import { confirmado, isPendente, type Talvez } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { cn } from '@/lib/cn';
import { Pending } from '@/components/ui/Pending';

type Linha = { rotulo: string; valor: Talvez<string> };

/**
 * Fatos da unidade em linhas curtas, para ler de relance: rótulo à esquerda,
 * dado à direita. Linha pendente só aparece em homologação, com o marcador.
 */
export function FichaUnidade({
  rotulo,
  linhas,
  className,
}: {
  rotulo: string;
  linhas: readonly Linha[];
  className?: string;
}) {
  const visiveis = linhas.filter((l) => siteConfig.emHomologacao || !isPendente(l.valor));

  return (
    <div className={cn('rounded-md bg-surface px-5 py-2 ring-1 ring-line sm:px-8 sm:py-3', className)}>
      <p className="border-b border-line pt-4 pb-4 text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">
        {rotulo}
      </p>
      <dl>
        {visiveis.map((l) => {
          const valor = confirmado(l.valor);
          return (
            <div
              key={l.rotulo}
              className="grid gap-1 border-b border-line py-4 last:border-b-0 sm:grid-cols-[10.5rem_1fr] sm:gap-6"
            >
              <dt className="text-small font-bold text-ink-muted">{l.rotulo}</dt>
              <dd className="font-medium text-ink">
                {valor ?? <Pending>{isPendente(l.valor) ? l.valor.aConfirmar : ''}</Pending>}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
