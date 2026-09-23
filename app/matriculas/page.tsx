import { Fragment, Suspense } from 'react';
import { duvidasMatricula, duvidasVisiveis } from '@/content/faq';
import { passosMatricula } from '@/content/matricula';
import { paginas } from '@/content/paginas';
import { metadadosDaPagina } from '@/lib/metadata';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { FAQ } from '@/components/blocks/FAQ';
import { Steps } from '@/components/blocks/Steps';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';
import { AgendarVisita, AgendarVisitaSemSegmento } from './AgendarVisita';

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
    ...(siteConfig.emHomologacao
      ? [
          (tom: TomClaro) => (
            <Section id="documentos" tom={tom} labelledBy="documentos-titulo">
              <div className="wrap">
                <SectionHead eyebrow={m.documentos.eyebrow} titulo={m.documentos.titulo} id="documentos-titulo" />
                <PendingBloco className="mt-6">{m.documentos.pendente}</PendingBloco>
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
    (tom) => (
      <CtaVisita
        origem="cta-matriculas"
        tom={tom}
        agendar={{ href: '#agendar', rotulo: 'Agendar visita', seta: 'cima' }}
      />
    ),
  ];

  return (
    <>
      {/* Hero com o formulário: título em largura total; abaixo, texto e WhatsApp (5) e o formulário (7). */}
      <section aria-labelledby="pagina-titulo" className="pt-[clamp(0.25rem,0.1rem+0.8vw,1rem)] pb-(--section-y)">
        <div className="wrap">
          <Breadcrumbs itens={[{ rotulo: 'Matrículas', href: '/matriculas' }]} />
          <div className="mt-[clamp(1rem,0.6rem+1.5vw,2rem)] grid gap-y-[clamp(2.5rem,2rem+1.5vw,3rem)] lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-12">
              <Eyebrow>{m.eyebrow}</Eyebrow>
              <Heading
                as="h1"
                id="pagina-titulo"
                titulo={m.titulo}
                destaque={m.destaque}
                tamanho="display"
                className="mt-5"
              />
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-[33em] text-lead text-ink-muted">{m.lead}</p>
              <div data-fab-oculta className="mt-8 border-t border-line pt-7">
                <p className="font-bold text-ink">{m.conversa}</p>
                <ButtonLink
                  href={linkWhatsApp(mensagens.padrao())}
                  externo
                  variante="contorno"
                  className="mt-4"
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
            </div>

            <div id="agendar" data-fab-oculta className="lg:col-span-7">
              <Eyebrow>{m.formulario.eyebrow}</Eyebrow>
              <h2 id="agendar-titulo" className="mt-4 font-display text-h3 font-semibold text-ink">
                {m.formulario.titulo}
              </h2>
              <p className="mt-2 max-w-[36em] text-small text-ink-muted">{m.formulario.lead}</p>
              <div className="mt-6">
                {/* O segmento vem da URL (?segmento=): lido só no navegador, com o formulário vazio enquanto isso. */}
                <Suspense fallback={<AgendarVisitaSemSegmento />}>
                  <AgendarVisita />
                </Suspense>
              </div>
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
