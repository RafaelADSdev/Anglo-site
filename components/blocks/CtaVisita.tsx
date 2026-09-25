import { home } from '@/content/home';
import type { Segmento } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { confirmado } from '@/lib/pending';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Pinceladas } from '@/components/ui/Pinceladas';
import { Section, SectionHead, type Tom } from '@/components/ui/Section';
import { MapCard } from './MapCard';

type Props = {
  /** Origem do clique na medição (`data-track-origem`). */
  origem: string;
  tom?: Extract<Tom, 'papel' | 'areia'>;
  /** Página de segmento: o WhatsApp fala dele. */
  segmento?: Segmento;
  /** Mapa e horário ao lado do card (padrão). Sem eles, o card ocupa a largura toda. */
  comMapa?: boolean;
};

/**
 * O fecho de toda página (composição da Home, invertida: card do CTA 7 · mapa 5).
 * "Agendar visita" abre o WhatsApp direto, com a mensagem de agendamento já escrita;
 * "Falar no WhatsApp" continua com a mensagem da página (ou do segmento).
 * O card é um dos contêineres de ação com o friso no topo; ao lado do mapa, as
 * pinceladas do logo fecham a página no canto do card, como abriram o hero.
 */
export function CtaVisita({ origem, tom = 'papel', segmento, comMapa = true }: Props) {
  const v = home.visita;
  const endereco = siteConfig.contato.endereco;
  const mapa = confirmado(siteConfig.contato.mapa);
  const mensagem = segmento ? mensagens.segmento(segmento) : mensagens.padrao();

  return (
    <Section id="visita" tom={tom} labelledBy="visita-titulo">
      <div className={cn('wrap grid gap-8', comMapa && 'lg:grid-cols-12 lg:items-start lg:gap-8')}>
        <div
          data-fab-oculta
          className={cn(
            'relative overflow-hidden rounded-lg bg-surface p-7 ring-1 ring-line before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe sm:p-10 lg:p-12',
            // Sozinho na largura toda, o card divide título (7) e ações (5), alinhados pela base.
            comMapa ? 'lg:col-span-7' : 'lg:grid lg:grid-cols-12 lg:items-end lg:gap-8',
          )}
        >
          {comMapa ? (
            <Pinceladas className="absolute right-6 -bottom-px hidden w-28 sm:block lg:right-10 lg:w-36" />
          ) : null}
          <SectionHead
            eyebrow={v.eyebrow}
            titulo={v.titulo}
            destaque={v.destaque}
            id="visita-titulo"
            className={comMapa ? undefined : 'lg:col-span-7'}
          />
          <div className={comMapa ? undefined : 'lg:col-span-5'}>
            <div className={cn('mt-8 flex flex-wrap gap-3', !comMapa && 'lg:mt-0')}>
              <ButtonLink
                href={linkWhatsApp(mensagens.visita())}
                externo
                icone={<Icon name="whatsapp" size={20} className="shrink-0" />}
                data-track="whatsapp_click"
                data-track-origem={`agendar-${origem}`}
                data-track-segmento={segmento?.id ?? 'geral'}
              >
                {v.cta}
              </ButtonLink>
              <ButtonLink
                href={linkWhatsApp(mensagem)}
                externo
                variante="contorno"
                icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
                data-track="whatsapp_click"
                data-track-segmento={segmento?.id ?? 'geral'}
                data-track-origem={origem}
              >
                Falar no WhatsApp
              </ButtonLink>
            </div>
            <p className="mt-4 text-small text-ink-muted">{v.microcopy}</p>
          </div>
        </div>

        {comMapa ? (
          <div className="lg:col-span-5">
            <MapCard
              endereco={`${endereco.logradouro}, ${siteConfig.bairro}, ${siteConfig.cidade} - ${siteConfig.uf}, ${endereco.cep}`}
              linkComoChegar={mapa}
            />
            <Horario className="mt-6" />
          </div>
        ) : null}
      </div>
    </Section>
  );
}

/** Horário de atendimento (site.config). */
export function Horario({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">Horário de atendimento</h3>
      <dl className="mt-3 grid gap-1 text-small">
        {siteConfig.contato.horario.map((h) => (
          <div key={h.dias} className="flex flex-wrap gap-x-2">
            <dt className="text-ink-muted">{h.dias}:</dt>
            <dd className="font-semibold text-ink">{h.horas}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
