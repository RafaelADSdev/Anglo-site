import { paginas } from '@/content/paginas';
import { cn } from '@/lib/cn';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

type Props = {
  /** id do título (a seção de quem usa o bloco é rotulada por ele). */
  tituloId: string;
  /** Origem do clique na medição (`data-track-origem`). */
  origem: string;
  className?: string;
};

/**
 * Agendamento da visita pelo WhatsApp, num card só: o título e a explicação no
 * alto; no meio, a "tela" da conversa (papel de caderno) com o contato da escola
 * e a mensagem que já vai escrita num balão; embaixo, o botão verde (`whatsapp`),
 * que não se confunde com o "Falar no WhatsApp" de contorno. É um contêiner de
 * ação: friso no topo e a sombra de flutuação, porque é o destaque do topo de /matriculas.
 */
export function AgendarWhatsApp({ tituloId, origem, className }: Props) {
  const a = paginas.matriculas.agendar;
  const mensagem = mensagens.visita();

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-surface p-6 shadow-float ring-1 ring-line sm:p-8 lg:p-10',
        'before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe',
        className,
      )}
    >
      <h2 id={tituloId} className="font-display text-h3 font-semibold text-ink">
        {a.titulo}
      </h2>
      <p className="mt-3 text-small text-ink-muted">{a.texto}</p>

      <figure className="mt-6 overflow-hidden rounded-md ring-1 ring-line">
        {/* O contato da escola, como no topo de uma conversa. */}
        <figcaption className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-full bg-whatsapp-soft text-whatsapp-ink"
          >
            <Icon name="whatsapp" size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-small font-bold text-ink">{siteConfig.nomeCurto}</span>
            <span className="block text-caption text-ink-muted">{a.rotuloMensagem}</span>
          </span>
        </figcaption>
        <div className="bg-paper caderno p-4 sm:p-5">
          <blockquote className="relative ml-auto max-w-[24rem] rounded-md rounded-tr-none bg-whatsapp-soft px-4 py-3 font-display text-[1.1875rem] leading-snug text-ink before:absolute before:top-0 before:-right-2 before:size-3 before:bg-whatsapp-soft before:[clip-path:polygon(0_0,100%_0,0_100%)] sm:text-[1.25rem]">
            <p>“{mensagem}”</p>
          </blockquote>
        </div>
      </figure>

      <ButtonLink
        href={linkWhatsApp(mensagem)}
        externo
        variante="whatsapp"
        // No celular, o corpo compacto faz o rótulo caber numa linha; abaixo de ~375 px ele quebra centralizado.
        className="mt-6 w-full text-center leading-tight text-balance max-sm:gap-2 max-sm:px-4 max-sm:text-[0.9375rem]"
        icone={<Icon name="whatsapp" size={20} className="shrink-0" />}
        data-track="whatsapp_click"
        data-track-segmento="geral"
        data-track-origem={origem}
      >
        {a.botao}
      </ButtonLink>
      <p className="mt-3 text-center text-caption text-ink-muted">{a.microcopy}</p>
    </div>
  );
}
