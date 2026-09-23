import type { Duvida } from '@/content/faq';
import { isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';

/**
 * Acordeão com <details> nativo: abre e fecha pelo teclado sem JavaScript.
 * Em produção, só entram perguntas com resposta validada pela escola.
 */
export function FAQ({ duvidas }: { duvidas: readonly Duvida[] }) {
  const itens = duvidas.filter((d) => siteConfig.emHomologacao || !isPendente(d.resposta));
  if (itens.length === 0) return null;

  return (
    <div className="border-t border-line">
      {itens.map((d) => (
        <details key={d.id} className="group border-b border-line">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1.0625rem] leading-snug font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            {d.pergunta}
            <span
              aria-hidden
              className="grid size-8 shrink-0 place-items-center rounded-full bg-medio-soft text-brand-blue transition-transform duration-250 ease-out-soft group-open:rotate-45 motion-reduce:transition-none"
            >
              <Icon name="plus" size={16} />
            </span>
          </summary>
          <div className="pr-12 pb-5 text-ink-muted">
            {isPendente(d.resposta) ? (
              <Pending>{d.resposta.aConfirmar}</Pending>
            ) : (
              <p className="max-w-[60ch]">{d.resposta}</p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
