import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { duvidas, duvidasVisiveis } from '@/content/faq';
import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { projetos } from '@/content/projetos';
import { doSegmento, hrefSegmento, segmentoPorSlug, segmentos, type Segmento } from '@/content/segmentos';
import { tabelaSeries } from '@/content/series';
import { cn } from '@/lib/cn';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { FAQ } from '@/components/blocks/FAQ';
import { Galeria, fotosVisiveis } from '@/components/blocks/Galeria';
import { ListaProjetos } from '@/components/blocks/ListaProjetos';
import { Percurso } from '@/components/blocks/Percurso';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Pending, PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';
import { tonsSegmento } from '@/components/ui/tons-segmento';

const r = paginas.segmento;

// Só os quatro segmentos existem; qualquer outro endereço vira 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return segmentos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<'/segmentos/[slug]'>): Promise<Metadata> {
  const s = segmentoPorSlug((await params).slug);
  if (!s) return {};
  return metadadosDaPagina({
    titulo: s.nome,
    descricao: `${s.nome} (${s.faixa.toLowerCase()}) na ${siteConfig.bairro}, ${siteConfig.cidade}. ${s.frase}`,
    caminho: hrefSegmento(s),
  });
}

/** As séries do segmento numa régua na tinta do segmento: a sequência que a criança percorre. */
function ReguaSeries({ segmento, mostrarTabela }: { segmento: Segmento; mostrarTabela: boolean }) {
  const series = confirmado(segmento.pagina.series);
  const tons = tonsSegmento[segmento.id];
  if (!series && !siteConfig.emHomologacao) return null;

  return (
    <div className="mt-[clamp(2.75rem,2rem+2.5vw,4.5rem)]">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <p id="series-rotulo" className="text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">
          {r.series}
        </p>
        {mostrarTabela ? (
          <ArrowLink href="/segmentos#series" className="text-small">
            {r.serieNascimento}
          </ArrowLink>
        ) : null}
      </div>
      {series ? (
        <ol aria-labelledby="series-rotulo" className={cn('mt-3 flex border-t-2', tons.linha)}>
          {series.map((serie) => (
            <li
              key={serie}
              className={cn(
                'relative flex-1 pt-4 pr-2 text-small font-bold text-ink',
                'before:absolute before:-top-[7px] before:left-0 before:size-3 before:rounded-full',
                tons.ponto,
              )}
            >
              {serie}
            </li>
          ))}
        </ol>
      ) : isPendente(segmento.pagina.series) ? (
        <p className="mt-3 border-t-2 border-dashed border-field pt-4">
          {/* Sobre o suave do Infantil, o marcador precisa de fundo próprio para não sumir. */}
          <Pending className="bg-surface">{segmento.pagina.series.aConfirmar}</Pending>
        </p>
      ) : null}
    </div>
  );
}

export default async function SegmentoPage({ params }: PageProps<'/segmentos/[slug]'>) {
  const s = segmentoPorSlug((await params).slug);
  if (!s) notFound();

  const pg = s.pagina;
  const tons = tonsSegmento[s.id];
  const mostrarTabela = siteConfig.emHomologacao || tabelaSeries.validadaPelaSecretaria;
  const temFotos = fotosVisiveis(pg.fotos).length > 0;

  // Projetos do segmento: só com a relação confirmada pela escola. Em homologação, os cinco, com o aviso.
  const confirmados = projetos.filter((p) => confirmado(p.segmentos)?.includes(s.id));
  const listaProjetos = confirmados.length > 0 ? confirmados : siteConfig.emHomologacao ? projetos : [];
  const perguntas = duvidasVisiveis(duvidas(pg.duvidas));

  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="dia-a-dia" tom={tom} labelledBy="vive-titulo">
        <div className={cn('wrap grid gap-10', temFotos && 'lg:grid-cols-12 lg:gap-8')}>
          <div className={temFotos ? 'lg:col-span-5' : undefined}>
            <SectionHead eyebrow={r.vive.eyebrow} titulo={pg.vive.titulo} intro={pg.vive.texto} id="vive-titulo" />
            <PendingBloco className="mt-5">{pg.vive.pendente}</PendingBloco>
          </div>
          {temFotos ? (
            <Galeria
              fotos={pg.fotos}
              fundoPlaceholder={tom === 'areia' ? 'claro' : 'areia'}
              className="lg:col-span-7"
            />
          ) : null}
        </div>
      </Section>
    ),
    ...(listaProjetos.length > 0
      ? [
          (tom: TomClaro) => (
            <Section id="projetos" tom={tom} labelledBy="projetos-titulo">
              <div className="wrap">
                <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
                  <SectionHead
                    eyebrow={r.projetos.eyebrow}
                    titulo={confirmados.length > 0 ? `Projetos ${doSegmento(s)}.` : r.projetos.tituloGeral}
                    id="projetos-titulo"
                  />
                  <ArrowLink href="/projetos" data-track="cta_click" data-track-origem="projetos-segmento">
                    {r.projetos.cta}
                  </ArrowLink>
                </div>
                {confirmados.length === 0 ? (
                  <PendingBloco className="mt-5">
                    quais dos cinco projetos atendem {s.artigo} {s.nome}
                  </PendingBloco>
                ) : null}
                <div className="mt-12">
                  <ListaProjetos projetos={listaProjetos} origem={`lista-projetos-${s.id}`} />
                </div>
              </div>
            </Section>
          ),
        ]
      : []),
    ...(perguntas.length > 0
      ? [
          (tom: TomClaro) => (
            <Section id="duvidas" tom={tom} labelledBy="duvidas-titulo">
              <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <SectionHead eyebrow={r.duvidas.eyebrow} titulo={r.duvidas.titulo} id="duvidas-titulo" />
                  <ArrowLink href="/matriculas#duvidas" className="mt-6">
                    Ver todas as dúvidas
                  </ArrowLink>
                </div>
                <div className="lg:col-span-7">
                  <FAQ duvidas={perguntas} />
                </div>
              </div>
            </Section>
          ),
        ]
      : []),
    (tom) => (
      <Section id="percurso" tom={tom} labelledBy="percurso-titulo">
        <div className="wrap">
          <SectionHead eyebrow={r.percurso.eyebrow} titulo={r.percurso.titulo} id="percurso-titulo" />
          <Percurso rotulo="Segmentos da escola" atual={s.id} className="mt-12" />
        </div>
      </Section>
    ),
    (tom) => <CtaVisita origem="cta-segmento" segmento={s} tom={tom} />,
  ];

  return (
    <>
      <PageHero
        migalhas={[
          { rotulo: 'Segmentos', href: '/segmentos' },
          { rotulo: s.nome, href: hrefSegmento(s) },
        ]}
        eyebrow={r.eyebrow}
        titulo={pg.titulo}
        destaque={pg.destaque}
        lead={pg.lead}
        fundo={tons.suave}
        corDestaque={tons.tinta}
        acoes={
          <>
            <ButtonLink
              href={hrefAgendar()}
              className="w-full sm:w-auto"
              data-track="cta_click"
              data-track-origem="hero-segmento"
              data-track-segmento={s.id}
            >
              Agendar visita
            </ButtonLink>
            <ButtonLink
              href={linkWhatsApp(mensagens.segmento(s))}
              externo
              variante="contorno"
              className="w-full sm:w-auto"
              icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
              data-track="whatsapp_click"
              data-track-segmento={s.id}
              data-track-origem="hero-segmento"
            >
              Falar no WhatsApp
            </ButtonLink>
          </>
        }
        microcopy={home.hero.microcopy}
      >
        <ReguaSeries segmento={s} mostrarTabela={mostrarTabela} />
      </PageHero>

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i, 'papel'))}</Fragment>
      ))}
    </>
  );
}
