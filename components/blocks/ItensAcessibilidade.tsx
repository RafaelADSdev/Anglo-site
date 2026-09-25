import { confirmado, isPendente, type Talvez } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';

export type ItemAcessibilidade = {
  id: string;
  icone: 'elevador' | 'rampa' | 'apoio';
  nome: string;
  detalhe?: string;
  texto: Talvez<string>;
};

/** Itens que só existem com confirmação: em produção, a lista mostra apenas os confirmados. */
export const itensVisiveis = (itens: readonly ItemAcessibilidade[]) =>
  itens.filter((i) => siteConfig.emHomologacao || !isPendente(i.texto));

/**
 * Recursos de acessibilidade em linhas separadas por `line`: ícone num círculo
 * `medio-soft`, nome em Fraunces e o texto da escola (ou o marcador pendente).
 */
export function ItensAcessibilidade({
  itens,
  className,
}: {
  itens: readonly ItemAcessibilidade[];
  className?: string;
}) {
  return (
    <ul className={cn('border-t border-line', className)}>
      {itensVisiveis(itens).map((item, i) => {
        const texto = confirmado(item.texto);
        return (
          <li
            key={item.id}
            style={{ '--i': i } as React.CSSProperties}
            className="reveal grid grid-cols-[2.75rem_1fr] items-start gap-x-5 border-b border-line py-6"
          >
            <span className="grid size-11 place-items-center rounded-full bg-medio-soft text-brand-blue">
              <Icon name={item.icone} size={22} />
            </span>
            <div>
              <h3 className="font-display text-[1.375rem] leading-tight font-semibold text-ink">{item.nome}</h3>
              {item.detalhe ? <p className="mt-1 text-small text-ink-muted">{item.detalhe}</p> : null}
              {texto ? (
                <p className="mt-2 text-small text-ink-muted">{texto}</p>
              ) : isPendente(item.texto) ? (
                <p className="mt-2">
                  <Pending>{item.texto.aConfirmar}</Pending>
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
