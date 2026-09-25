import { duvidasHome } from '@/content/faq';
import { home } from '@/content/home';
import { passosMatricula } from '@/content/matricula';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { projetos } from '@/content/projetos';
import { segmentos } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { mensagens } from '@/lib/whatsapp';
import { FAQ } from '@/components/blocks/FAQ';
import { ProjectTabs } from '@/components/blocks/ProjectTabs';
import { TrilhaSegmentos } from '@/components/blocks/SegmentCard';
import { Steps } from '@/components/blocks/Steps';
import { temVideoInstitucional, VideoInstitucional } from '@/components/blocks/VideoInstitucional';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { Pinceladas } from '@/components/ui/Pinceladas';
import { Section, SectionHead } from '@/components/ui/Section';

export function SegmentosSection() {
  const s = home.segmentos;
  return (
    <Section id="segmentos" labelledBy="segmentos-titulo">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} titulo={s.titulo} destaque={s.destaque} id="segmentos-titulo" />
        <TrilhaSegmentos segmentos={segmentos} revelar className="mt-12" />
      </div>
    </Section>
  );
}

export function PropostaSection() {
  const p = home.proposta;
  return (
    <Section id="proposta" tom="azul" labelledBy="proposta-titulo" className="relative isolate overflow-hidden">
      {/* As pinceladas sobem da base do campo azul, alinhadas à margem do conteúdo. */}
      <Pinceladas
        tom="azul"
        className="absolute right-[max(var(--gutter),calc((100%-75rem)/2))] -bottom-px -z-10 w-20 sm:w-32 lg:w-52"
      />
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
    <Section id="projetos" tom="areia" labelledBy="projetos-titulo">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} titulo={p.titulo} destaque={p.destaque} id="projetos-titulo" />
        <div className="mt-12">
          <ProjectTabs projetos={projetos} fundoPlaceholder="claro" />
        </div>
      </div>
    </Section>
  );
}

export function EstruturaSection() {
  const e = home.estrutura;
  const fotos = e.fotos.slice(0, 2);

  return (
    <Section id="estrutura" tom="tinta" labelledBy="estrutura-titulo">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <SectionHead eyebrow={e.eyebrow} titulo={e.titulo} id="estrutura-titulo" tom="escuro" />
          <ArrowLink href="/estrutura" tom="escuro" data-track="cta_click" data-track-origem="estrutura-home">
            {e.cta}
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {temVideoInstitucional ? (
            <div className="lg:col-span-8">
              <VideoInstitucional fundoPlaceholder="escuro" />
            </div>
          ) : null}
          <div
            className={
              temVideoInstitucional
                ? 'grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2'
                : 'grid grid-cols-2 gap-4 lg:col-span-12'
            }
          >
            {fotos.map((foto) => (
              <Figure
                key={foto.descricao}
                foto={'foto' in foto ? foto.foto : undefined}
                descricao={foto.descricao}
                legenda={foto.legenda}
                // No desktop, a legenda vai por cima da foto: a coluna termina junto com o vídeo.
                legendaDentro="lg"
                fundoPlaceholder="escuro"
                className={temVideoInstitucional ? 'lg:h-full' : undefined}
                proporcao={temVideoInstitucional ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}
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
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <SectionHead eyebrow={m.eyebrow} titulo={m.titulo} id="matricula-titulo" />
          <div className="mt-12">
            <Steps passos={passosMatricula} />
          </div>
        </div>
        <PrimeiroPasso className="lg:col-span-5" />
      </div>
    </Section>
  );
}

/**
 * O passo 01 materializado: a mensagem que a pessoa vai mandar, num balão sobre
 * o papel de caderno, com o CTA logo abaixo. É um contêiner de ação (friso no topo).
 */
function PrimeiroPasso({ className }: { className?: string }) {
  const m = home.matricula;
  return (
    <div
      data-fab-oculta
      className={cn(
        'relative overflow-hidden rounded-lg bg-surface p-6 ring-1 ring-line before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe sm:p-8',
        className,
      )}
    >
      <figure>
        <figcaption className="flex items-center gap-2 text-caption font-bold text-ink-muted">
          <Icon name="whatsapp" size={18} className="shrink-0 text-whatsapp-ink" />
          {paginas.matriculas.agendar.rotuloMensagem}
        </figcaption>
        <div className="mt-4 rounded-md bg-paper caderno p-4 pl-8 ring-1 ring-line sm:p-5 sm:pl-12">
          <blockquote className="relative ml-auto max-w-[22rem] rounded-md rounded-tr-none bg-whatsapp-soft px-4 py-3 font-display text-[1.1875rem] leading-snug text-ink before:absolute before:top-0 before:-right-2 before:size-3 before:bg-whatsapp-soft before:[clip-path:polygon(0_0,100%_0,0_100%)]">
            <p>“{mensagens.visita()}”</p>
          </blockquote>
        </div>
      </figure>
      <ButtonLink
        href={hrefAgendar()}
        className="mt-6 w-full sm:w-auto"
        data-track="cta_click"
        data-track-origem="passos-matricula"
      >
        {m.cta}
      </ButtonLink>
      <p className="mt-3 text-small text-ink-muted">{m.microcopy}</p>
    </div>
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
