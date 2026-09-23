import { duvidasHome } from '@/content/faq';
import { home } from '@/content/home';
import { passosMatricula } from '@/content/matricula';
import { hrefAgendar } from '@/content/navegacao';
import { projetos } from '@/content/projetos';
import { segmentos } from '@/content/segmentos';
import { confirmado, isPendente } from '@/lib/pending';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { FAQ } from '@/components/blocks/FAQ';
import { MapCard } from '@/components/blocks/MapCard';
import { ProjectTabs } from '@/components/blocks/ProjectTabs';
import { SegmentCard } from '@/components/blocks/SegmentCard';
import { Steps } from '@/components/blocks/Steps';
import { VideoLite } from '@/components/blocks/VideoLite';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

export function SegmentosSection() {
  const s = home.segmentos;
  return (
    <Section id="segmentos" labelledBy="segmentos-titulo">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} titulo={s.titulo} destaque={s.destaque} id="segmentos-titulo" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((seg, i) => (
            <li key={seg.id} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <SegmentCard segmento={seg} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function PropostaSection() {
  const p = home.proposta;
  return (
    <Section id="proposta" tom="azul" labelledBy="proposta-titulo">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} titulo={p.titulo} destaque={p.destaque} id="proposta-titulo" tom="escuro" />
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {p.pilares.map((pilar, i) => (
            <li key={pilar.titulo} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <span aria-hidden className="block font-display text-step font-medium text-brand-yellow italic">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[1.125rem] leading-snug font-bold text-white">{pilar.titulo}</h3>
              <p className="mt-2 max-w-[30em] text-small text-white/82">{pilar.texto}</p>
              {'pendente' in pilar ? <Pending className="mt-3">{pilar.pendente}</Pending> : null}
            </li>
          ))}
        </ul>
        <ButtonLink
          href="/a-escola#proposta"
          variante="amarelo"
          className="mt-12 lg:mt-16"
          data-track="cta_click"
          data-track-origem="proposta"
        >
          {p.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}

export function ProjetosSection() {
  const p = home.projetos;
  return (
    <Section id="projetos" labelledBy="projetos-titulo">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} titulo={p.titulo} destaque={p.destaque} id="projetos-titulo" />
        <div className="mt-12">
          <ProjectTabs projetos={projetos} />
        </div>
      </div>
    </Section>
  );
}

export function EstruturaSection() {
  const e = home.estrutura;
  const video = confirmado(siteConfig.videoInstitucional);
  const mostrarVideo = video || siteConfig.emHomologacao;
  const fotos = e.fotos.slice(0, 2);

  return (
    <Section id="estrutura" tom="areia" labelledBy="estrutura-titulo">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <SectionHead eyebrow={e.eyebrow} titulo={e.titulo} id="estrutura-titulo" />
          <ArrowLink href="/estrutura" data-track="cta_click" data-track-origem="estrutura-home">
            {e.cta}
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {mostrarVideo ? (
            <div className="lg:col-span-8">
              {video ? (
                <VideoLite id={video.id} titulo={video.titulo} />
              ) : (
                <div className="grid aspect-video place-items-center rounded-md bg-surface p-6 text-center ring-1 ring-line ring-inset">
                  <p className="max-w-[28em] text-small text-ink-muted">
                    <span className="mb-2 block text-eyebrow font-extrabold text-ink uppercase">
                      Vídeo institucional
                    </span>
                    Entra aqui, carregado só no clique, quando o vídeo estiver público.
                    {isPendente(siteConfig.videoInstitucional) ? (
                      <span className="mt-3 block">
                        <Pending>{siteConfig.videoInstitucional.aConfirmar}</Pending>
                      </span>
                    ) : null}
                  </p>
                </div>
              )}
            </div>
          ) : null}
          <div
            className={
              mostrarVideo
                ? 'grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2'
                : 'grid grid-cols-2 gap-4 lg:col-span-12'
            }
          >
            {fotos.map((foto) => (
              <Figure
                key={foto.descricao}
                descricao={foto.descricao}
                legenda={foto.legenda}
                fundoPlaceholder="claro"
                className={mostrarVideo ? 'lg:h-full' : undefined}
                proporcao={mostrarVideo ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}
                sizes="(min-width: 1024px) 380px, 50vw"
                arredondamento="md"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function MatriculaSection() {
  const m = home.matricula;
  return (
    <Section id="matricula" labelledBy="matricula-titulo">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} titulo={m.titulo} id="matricula-titulo" />
        <div className="mt-12">
          <Steps passos={passosMatricula} />
        </div>
        <div className="mt-12">
          <ButtonLink href={hrefAgendar()} data-track="cta_click" data-track-origem="passos-matricula">
            {m.cta}
          </ButtonLink>
          <p className="mt-3 text-small text-ink-muted">{m.microcopy}</p>
        </div>
      </div>
    </Section>
  );
}

export function DuvidasSection() {
  const d = home.duvidas;
  return (
    <Section id="duvidas" tom="areia" labelledBy="duvidas-titulo">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHead eyebrow={d.eyebrow} titulo={d.titulo} id="duvidas-titulo" />
          <ArrowLink href="/matriculas#duvidas" className="mt-6">
            {d.cta}
          </ArrowLink>
        </div>
        <div className="lg:col-span-7">
          <FAQ duvidas={duvidasHome} />
        </div>
      </div>
    </Section>
  );
}

export function VisitaSection() {
  const v = home.visita;
  const endereco = confirmado(siteConfig.contato.endereco);
  const mapa = confirmado(siteConfig.contato.mapa);

  return (
    <Section id="visita" labelledBy="visita-titulo">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div
          data-fab-oculta
          className="relative overflow-hidden rounded-lg bg-surface p-7 ring-1 ring-line before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe sm:p-10 lg:col-span-7 lg:p-12"
        >
          <SectionHead eyebrow={v.eyebrow} titulo={v.titulo} destaque={v.destaque} id="visita-titulo" />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hrefAgendar()} data-track="cta_click" data-track-origem="visita">
              {v.cta}
            </ButtonLink>
            <ButtonLink
              href={linkWhatsApp(mensagens.padrao())}
              externo
              variante="contorno"
              icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
              data-track="whatsapp_click"
              data-track-segmento="geral"
              data-track-origem="visita"
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-4 text-small text-ink-muted">{v.microcopy}</p>
        </div>

        <div className="lg:col-span-5">
          {endereco ? (
            <MapCard
              endereco={`${endereco.logradouro}, ${siteConfig.bairro}, ${siteConfig.cidade} - ${siteConfig.uf}`}
              linkComoChegar={mapa}
            />
          ) : siteConfig.emHomologacao ? (
            <div className="grid aspect-[4/3] place-items-center rounded-md bg-paper-2 p-6 text-center ring-1 ring-line">
              <div>
                <Icon name="map-pin" size={28} className="mx-auto text-brand-blue" />
                <p className="mt-3 text-small text-ink">O mapa entra aqui quando o endereço for confirmado.</p>
                <Pending className="mt-3">endereço e link do Perfil da Empresa no Google</Pending>
              </div>
            </div>
          ) : null}
          <h3 className="mt-6 text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">
            Horário de atendimento
          </h3>
          <dl className="mt-3 grid gap-1 text-small">
            {siteConfig.contato.horario.map((h) => (
              <div key={h.dias} className="flex flex-wrap gap-x-2">
                <dt className="text-ink-muted">{h.dias}:</dt>
                <dd className="font-semibold text-ink">{h.horas}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
