import { Fragment } from 'react';
import { duvidasMatricula, duvidasVisiveis } from '@/content/faq';
import { passosMatricula } from '@/content/matricula';
import { paginas } from '@/content/paginas';
import { metadadosDaPagina } from '@/lib/metadata';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { AgendarWhatsApp } from '@/components/blocks/AgendarWhatsApp';
import { FAQ } from '@/components/blocks/FAQ';
import { TrilhaPassos } from '@/components/blocks/TrilhaPassos';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArrowLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
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
          <TrilhaPassos passos={passosMatricula} className="mt-12 lg:mt-16" />
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
      {/* Topo: título e texto (6) ao lado do agendamento (6), centralizados, sobre papel de caderno. */}
      <section
        aria-labelledby="pagina-titulo"
        className="relative isolate pt-[clamp(0.25rem,0.1rem+0.8vw,1rem)] pb-(--section-y)"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 caderno [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]"
        />
        <div className="wrap">
          <Breadcrumbs itens={[{ rotulo: 'Matrículas', href: '/matriculas' }]} />
          <div className="mt-[clamp(1rem,0.6rem+1.5vw,2rem)] grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-span-6">
              <Eyebrow>{m.eyebrow}</Eyebrow>
              <Heading
                as="h1"
                id="pagina-titulo"
                titulo={m.titulo}
                destaque={m.destaque}
                tamanho="display"
                className="mt-5"
              />
              <p className="mt-6 max-w-[30em] text-lead text-ink-muted">{m.lead}</p>
              <ArrowLink href="#como-funciona" seta="baixo" className="mt-6">
                {m.comoFunciona}
              </ArrowLink>
            </div>

            <div id="agendar" data-fab-oculta className="lg:col-span-6 lg:col-start-7">
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
