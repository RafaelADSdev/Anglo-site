import { Fragment } from 'react';
import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { projetos } from '@/content/projetos';
import { metadadosDaPagina } from '@/lib/metadata';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { ListaProjetos } from '@/components/blocks/ListaProjetos';
import { Percurso } from '@/components/blocks/Percurso';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

const e = paginas.escola;

export const metadata = metadadosDaPagina({
  titulo: e.meta.title,
  descricao: e.meta.description,
  caminho: '/a-escola',
});

export default function AEscolaPage() {
  // Depois do campo azul, papel e areia se alternam; História e Inclusão só aparecem com o texto da escola.
  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="projetos" tom={tom} labelledBy="projetos-titulo">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <SectionHead eyebrow={e.projetos.eyebrow} titulo={e.projetos.titulo} id="projetos-titulo" />
            <ArrowLink href="/projetos" data-track="cta_click" data-track-origem="projetos-a-escola">
              {e.projetos.cta}
            </ArrowLink>
          </div>
          <div className="mt-12">
            <ListaProjetos projetos={projetos} origem="lista-projetos-a-escola" />
          </div>
        </div>
      </Section>
    ),
    ...(siteConfig.emHomologacao
      ? [
          (tom: TomClaro) => (
            <Section id="historia" tom={tom} labelledBy="historia-titulo">
              <div className="wrap">
                <SectionHead eyebrow={e.historia.eyebrow} titulo={e.historia.titulo} id="historia-titulo" />
                <PendingBloco className="mt-6">{e.historia.pendente}</PendingBloco>
              </div>
            </Section>
          ),
          (tom: TomClaro) => (
            <Section id="inclusao" tom={tom} labelledBy="inclusao-titulo">
              <div className="wrap">
                <SectionHead eyebrow={e.inclusao.eyebrow} titulo={e.inclusao.titulo} id="inclusao-titulo" />
                <PendingBloco className="mt-6">{e.inclusao.pendente}</PendingBloco>
              </div>
            </Section>
          ),
        ]
      : []),
    (tom) => <CtaVisita origem="cta-a-escola" tom={tom} />,
  ];

  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'A escola', href: '/a-escola' }]}
        eyebrow={e.eyebrow}
        titulo={e.titulo}
        destaque={e.destaque}
        lead={e.lead}
        acoes={
          <>
            <ButtonLink
              href={hrefAgendar()}
              className="w-full sm:w-auto"
              data-track="cta_click"
              data-track-origem="hero-a-escola"
            >
              Agendar visita
            </ButtonLink>
            <ArrowLink href="#proposta" seta="baixo">
              Conhecer a proposta
            </ArrowLink>
          </>
        }
        microcopy={home.hero.microcopy}
      >
        <Percurso rotulo="Segmentos da escola" className="mt-[clamp(3rem,2rem+3vw,5rem)]" />
      </PageHero>

      {/* O campo azul da página (um só, como na Home): os três pilares, numerados como o briefing pede. */}
      <Section id="proposta" tom="azul" labelledBy="proposta-titulo">
        <div className="wrap">
          <SectionHead
            eyebrow={e.proposta.eyebrow}
            titulo={e.proposta.titulo}
            destaque={e.proposta.destaque}
            id="proposta-titulo"
            tom="escuro"
          />
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
            {e.proposta.pilares.map((pilar, i) => (
              <li key={pilar.titulo} className="reveal" style={{ '--i': i } as React.CSSProperties}>
                <span aria-hidden className="block font-display text-step font-medium text-brand-yellow italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-[1.125rem] leading-snug font-bold text-white">{pilar.titulo}</h3>
                <p className="mt-2 max-w-[30em] text-small text-white/82">{pilar.texto}</p>
                {'pendente' in pilar ? <PendingBloco className="mt-3">{pilar.pendente}</PendingBloco> : null}
                {'link' in pilar ? (
                  <div className="mt-3">
                    <ArrowLink
                      href={pilar.link.href}
                      tom="escuro"
                      className="text-small"
                      data-track="cta_click"
                      data-track-origem="proposta-a-escola"
                    >
                      {pilar.link.rotulo}
                    </ArrowLink>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i, 'papel'))}</Fragment>
      ))}
    </>
  );
}
