import { paginas } from '@/content/paginas';
import { cn } from '@/lib/cn';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';

type Props = {
  /** id do título (a seção de quem usa o bloco é rotulada por ele). */
  tituloId: string;
  /** Origem do clique na medição (`data-track-origem`). */
  origem: string;
  className?: string;
};

/**
 * Agendamento da visita pelo WhatsApp: diz, antes do clique, que o botão leva ao
 * WhatsApp da escola e mostra a mensagem que já vai escrita. O card é um dos três
 * contêineres de ação com o friso no topo; o botão é o verde (`whatsapp`), para não
 * se confundir com o "Falar no WhatsApp" de contorno.
 */
export function AgendarWhatsApp({ tituloId, origem, className }: Props) {
  const a = paginas.matriculas.agendar;
  const mensagem = mensagens.visita();

  return (
    <div className={className}>
      <Eyebrow>{a.eyebrow}</Eyebrow>
      <h2 id={tituloId} className="mt-4 font-display text-h3 font-semibold text-ink">
        {a.titulo}
      </h2>
      <p className="mt-3 max-w-[36em] text-ink-muted">{a.texto}</p>

      <div
        className={cn(
          'relative mt-6 overflow-hidden rounded-md bg-surface p-5 ring-1 ring-line sm:p-8',
          'before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe',
        )}
      >
        <figure>
          <figcaption className="flex items-center gap-2 text-caption font-bold text-ink-muted">
            <Icon name="whatsapp" size={18} className="shrink-0 text-whatsapp-ink" />
            {a.rotuloMensagem}
          </figcaption>
          <blockquote className="mt-3 rounded-sm bg-paper p-4 font-display text-[1.25rem] leading-snug text-ink ring-1 ring-line sm:p-5">
            <p>“{mensagem}”</p>
          </blockquote>
        </figure>

        <ButtonLink
          href={linkWhatsApp(mensagem)}
          externo
          variante="whatsapp"
          // No celular, o corpo compacto faz o rótulo caber numa linha; abaixo de ~375 px ele quebra centralizado.
          className="mt-6 w-full text-center leading-tight text-balance max-sm:gap-2 max-sm:px-4 max-sm:text-[0.9375rem] sm:w-auto"
          icone={<Icon name="whatsapp" size={20} className="shrink-0" />}
          data-track="whatsapp_click"
          data-track-segmento="geral"
          data-track-origem={origem}
        >
          {a.botao}
        </ButtonLink>
        <p className="mt-3 text-caption text-ink-muted">{a.microcopy}</p>
      </div>
    </div>
  );
}
