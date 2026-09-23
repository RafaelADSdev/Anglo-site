import { cn } from '@/lib/cn';
import { siteConfig } from '@/site.config';

type Props = { children: React.ReactNode; className?: string };

/**
 * Marcador de conteúdo pendente. Só aparece em homologação — em produção
 * não renderiza nada (e o bloco que depende do dado também não deve aparecer).
 * Texto corrido (não flex): quebra de linha natural, com o fundo acompanhando cada linha.
 */
export function Pending({ children, className }: Props) {
  if (!siteConfig.emHomologacao) return null;
  return (
    <span
      className={cn(
        'inline rounded-[4px] bg-infantil-soft [box-decoration-break:clone] px-1.5 py-0.5 text-caption leading-[1.9] font-semibold text-ink [-webkit-box-decoration-break:clone]',
        className,
      )}
    >
      <strong className="font-extrabold">A confirmar:</strong> {children}
    </span>
  );
}

/** O marcador em parágrafo próprio, para ficar como bloco (com margem). Também some em produção. */
export function PendingBloco({ children, className }: Props) {
  if (!siteConfig.emHomologacao) return null;
  return (
    <p className={className}>
      <Pending>{children}</Pending>
    </p>
  );
}
