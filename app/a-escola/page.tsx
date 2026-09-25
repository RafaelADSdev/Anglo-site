import { Fragment } from 'react';
import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { projetos } from '@/content/projetos';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { FichaUnidade } from '@/components/blocks/FichaUnidade';
import { ItensAcessibilidade, itensVisiveis } from '@/components/blocks/ItensAcessibilidade';
import { ListaProjetos } from '@/components/blocks/ListaProjetos';
import { Percurso } from '@/components/blocks/Percurso';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

const e = paginas.escola;

export const metadata = metadadosDaPagina({
  titulo: e.meta.title,
  descricao: e.meta.description,
  caminho: '/a-escola',
});

export default function AEscolaPage() {
  // Depois do campo azul, papel e areia se alternam. A unidade sempre aparece (a ficha tem dados
  // confirmados); Inclusão, em produção, só com algum item ou texto confirmado pela escola.
  const historia = confirmado(e.unidade.historia);
  const textoInclusao = confirmado(e.inclusao.texto);
  const mostrarInclusao =
    siteConfig.emHomologacao || Boolean(textoInclusao) || itensVisiveis(e.inclusao.itens).length > 0;
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
    (tom) => (
      <Section id="unidade" tom={tom} labelledBy="unidade-titulo">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHead eyebrow={e.unidade.eyebrow} titulo={e.unidade.titulo} id="unidade-titulo" />
            {historia ? (
              <p className="mt-5 max-w-[36em] text-lead text-ink-muted">{historia}</p>
            ) : isPendente(e.unidade.historia) ? (
              <PendingBloco className="mt-6">{e.unidade.historia.aConfirmar}</PendingBloco>
            ) : null}
          </div>
          <FichaUnidade rotulo={e.unidade.rotuloFicha} linhas={e.unidade.ficha} className="lg:col-span-7" />
        </div>
      </Section>
    ),
    ...(mostrarInclusao
      ? [
          (tom: TomClaro) => (
            <Section id="inclusao" tom={tom} labelledBy="inclusao-titulo">
              <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <SectionHead eyebrow={e.inclusao.eyebrow} titulo={e.inclusao.titulo} id="inclusao-titulo" />
                  {textoInclusao ? (
                    <p className="mt-5 max-w-[36em] text-lead text-ink-muted">{textoInclusao}</p>
                  ) : isPendente(e.inclusao.texto) ? (
                    <PendingBloco className="mt-6">{e.inclusao.texto.aConfirmar}</PendingBloco>
                  ) : null}
                  <div className="mt-8 border-t border-line pt-6">
                    <h3 className="text-[1.125rem] leading-snug font-bold text-ink">{e.inclusao.pergunta.titulo}</h3>
                    <p className="mt-1 text-small text-ink-muted">{e.inclusao.pergunta.texto}</p>
                    <ButtonLink
                      href={linkWhatsApp(mensagens.inclusao())}
                      externo
                      variante="contorno"
                      className="mt-5"
                      icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
                      data-track="whatsapp_click"
                      data-track-segmento="geral"
                      data-track-origem="inclusao-a-escola"
                    >
                      {e.inclusao.pergunta.botao}
                    </ButtonLink>
                  </div>
                </div>
                <ItensAcessibilidade itens={e.inclusao.itens} className="lg:col-span-7" />
              </div>
            </Section>
          ),
        ]
      : []),
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
        <Fragment key={i}>{secao(tomAlternado(i, 'areia'))}</Fragment>
      ))}
    </>
  );
}
