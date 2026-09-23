import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { segmentos } from '@/content/segmentos';
import { tabelaSeries } from '@/content/series';
import { metadadosDaPagina } from '@/lib/metadata';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { SegmentCard } from '@/components/blocks/SegmentCard';
import { SeriesTabela } from '@/components/blocks/SeriesTabela';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

const p = paginas.segmentos;

export const metadata = metadadosDaPagina({
  titulo: p.meta.title,
  descricao: p.meta.description,
  caminho: '/segmentos',
});

export default function SegmentosPage() {
  // Mesma regra do "Encontre a série": a tabela só vai para produção validada pela secretaria.
  const mostrarTabela = siteConfig.emHomologacao || tabelaSeries.validadaPelaSecretaria;

  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'Segmentos', href: '/segmentos' }]}
        eyebrow={p.eyebrow}
        titulo={p.titulo}
        destaque={p.destaque}
        lead={p.lead}
        acoes={
          <>
            <ButtonLink
              href={hrefAgendar()}
              className="w-full sm:w-auto"
              data-track="cta_click"
              data-track-origem="hero-segmentos"
            >
              Agendar visita
            </ButtonLink>
            {mostrarTabela ? (
              <ArrowLink href="#series" seta="baixo">
                Ver a série pela data de nascimento
              </ArrowLink>
            ) : null}
          </>
        }
        microcopy={home.hero.microcopy}
      >
        <ul className="mt-[clamp(3rem,2rem+3vw,5rem)] grid gap-x-10 gap-y-12 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((seg, i) => (
            <li key={seg.id} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <SegmentCard segmento={seg} nivelTitulo="h2" />
            </li>
          ))}
        </ul>
      </PageHero>

      {mostrarTabela ? (
        <Section id="series" tom="areia" labelledBy="series-titulo">
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
              <SectionHead
                eyebrow={p.tabela.eyebrow}
                titulo={p.tabela.titulo}
                intro={p.tabela.lead}
                id="series-titulo"
              />
              {tabelaSeries.validadaPelaSecretaria ? null : (
                <PendingBloco className="mt-5">
                  tabela provisória — a secretaria valida as séries e os nomes das turmas
                </PendingBloco>
              )}
            </div>
            <div className="lg:col-span-7">
              <SeriesTabela anoCampanha={siteConfig.anoMatricula} />
            </div>
          </div>
        </Section>
      ) : null}

      <CtaVisita origem="cta-segmentos" tom={mostrarTabela ? 'papel' : 'areia'} />
    </>
  );
}
