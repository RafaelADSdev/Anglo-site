import { Fragment } from 'react';
import { duvidasMatricula, duvidasVisiveis } from '@/content/faq';
import { documentosMatricula, passosMatricula } from '@/content/matricula';
import { paginas } from '@/content/paginas';
import { metadadosDaPagina } from '@/lib/metadata';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { AgendarWhatsApp } from '@/components/blocks/AgendarWhatsApp';
import { FAQ } from '@/components/blocks/FAQ';
import { ListaDocumentos } from '@/components/blocks/ListaDocumentos';
import { Steps } from '@/components/blocks/Steps';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHead } from '@/components/ui/Section';

const m = paginas.matriculas;

export const metadata = metadadosDaPagina({
  titulo: m.meta.title,
  descricao: m.meta.description,
  caminho: '/matriculas',
});

export default function MatriculasPage() {
  const perguntas = duvidasVisiveis(duvidasMatricula);

  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="como-funciona" tom={tom} labelledBy="passos-titulo">
        <div className="wrap">
          <SectionHead eyebrow={m.passos.eyebrow} titulo={m.passos.titulo} id="passos-titulo" />
          <div className="mt-12">
            <Steps passos={passosMatricula} />
          </div>
        </div>
      </Section>
    ),
    (tom) => (
      <Section id="documentos" tom={tom} labelledBy="documentos-titulo">
        <div className="wrap">
          <SectionHead
            eyebrow={m.documentos.eyebrow}
            titulo={m.documentos.titulo}
            id="documentos-titulo"
            intro={documentosMatricula.lead}
          />
          <ListaDocumentos
            className="mt-12 lg:mt-16"
            grupos={documentosMatricula.grupos}
            nota={documentosMatricula.nota}
          />
        </div>
      </Section>
    ),
    ...(perguntas.length > 0
      ? [
          (tom: TomClaro) => (
            <Section id="duvidas" tom={tom} labelledBy="duvidas-titulo">
              <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <SectionHead eyebrow={m.duvidas.eyebrow} titulo={m.duvidas.titulo} id="duvidas-titulo" />
                </div>
                <div className="lg:col-span-7">
                  <FAQ duvidas={perguntas} />
                </div>
              </div>
            </Section>
          ),
        ]
      : []),
  ];

  return (
    <>
      {/* Título com a introdução; abaixo, contato (5) e agendar visita (7) na mesma linha. */}
      <section aria-labelledby="pagina-titulo" className="pt-[clamp(0.25rem,0.1rem+0.8vw,1rem)] pb-(--section-y)">
        <div className="wrap">
          <Breadcrumbs itens={[{ rotulo: 'Matrículas', href: '/matriculas' }]} />
          <div className="mt-[clamp(1rem,0.6rem+1.5vw,2rem)]">
            <Eyebrow>{m.eyebrow}</Eyebrow>
            <Heading
              as="h1"
              id="pagina-titulo"
              titulo={m.titulo}
              destaque={m.destaque}
              tamanho="display"
              className="mt-5"
            />
            <p className="mt-6 max-w-[36em] text-lead text-ink-muted">{m.lead}</p>
          </div>

          <div className="mt-12 grid gap-y-12 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-x-8">
            <div data-fab-oculta className="lg:col-span-5">
              <Eyebrow>{m.contato.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-h3 font-semibold text-ink">{m.contato.titulo}</h2>
              <ButtonLink
                href={linkWhatsApp(mensagens.padrao())}
                externo
                variante="contorno"
                className="mt-6"
                icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
                data-track="whatsapp_click"
                data-track-segmento="geral"
                data-track-origem="hero-matriculas"
              >
                Falar no WhatsApp
              </ButtonLink>
              <p className="mt-3 text-small text-ink-muted">
                {siteConfig.contato.whatsapp.exibicao} · {siteConfig.contato.horarioCurto}
              </p>
            </div>

            <div id="agendar" data-fab-oculta className="lg:col-span-7">
              <AgendarWhatsApp tituloId="agendar-titulo" origem="agendar-matriculas" />
            </div>
          </div>
        </div>
      </section>

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i))}</Fragment>
      ))}
    </>
  );
}
