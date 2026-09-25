import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { tabelaSeries } from '@/content/series';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/site.config';
import { SeriesFinder } from '@/components/blocks/SeriesFinder';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Figure } from '@/components/ui/Figure';
import { Heading } from '@/components/ui/Heading';
import { Pending } from '@/components/ui/Pending';
import { Pinceladas } from '@/components/ui/Pinceladas';

/**
 * Primeiro viewport em composição de capa (aprovada na etapa 1): título em
 * largura total; abaixo, texto + CTAs (5 colunas) e foto (7 colunas); o
 * "Encontre a série" encosta na base da foto, sem cobrir o miolo do quadro. O papel do topo é de caderno
 * (quadriculado que se desfaz para baixo) e as pinceladas do logo saem de
 * trás da foto, no canto vazio ao lado do título.
 */
export function Hero() {
  const h = home.hero;
  const mostrarSerie = siteConfig.emHomologacao || tabelaSeries.validadaPelaSecretaria;

  return (
    <>
      <section
        aria-labelledby="hero-titulo"
        // O respiro de baixo é a faixa do quadriculado; o painel sobe até encostar na foto, com um pequeno encaixe.
        className={cn(
          'relative isolate overflow-hidden pt-[clamp(1.75rem,1rem+2.5vw,3.5rem)]',
          mostrarSerie && 'pb-16 lg:pb-20',
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 caderno [mask-image:linear-gradient(to_bottom,black_35%,transparent_95%)]"
        />
        <div className="wrap grid gap-y-[clamp(2rem,1.5rem+1.5vw,2.75rem)] lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-12">
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <Heading
              as="h1"
              id="hero-titulo"
              titulo={h.titulo}
              destaque={h.destaque}
              tamanho="display"
              className="mt-5"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-[33em] text-lead text-ink-muted">{h.subtitulo}</p>
            <div data-fab-oculta className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <ButtonLink
                href={hrefAgendar()}
                className="w-full sm:w-auto"
                data-track="cta_click"
                data-track-origem="hero"
              >
                {h.ctaPrimario}
              </ButtonLink>
              <ArrowLink href="#segmentos" seta="baixo" data-track="cta_click" data-track-origem="hero-segmentos">
                {h.ctaSecundario}
              </ArrowLink>
            </div>
            <p className="mt-4 text-small text-ink-muted">{h.microcopy}</p>
          </div>

          <div className="relative lg:col-span-7">
            <Pinceladas className="absolute -top-[4.25rem] -right-1 w-20 sm:-top-28 sm:w-32 lg:-top-44 lg:-right-8 lg:w-56" />
            <Figure
              className="relative"
              descricao={h.foto}
              legenda={h.legenda}
              legendaDentro
              proporcao="aspect-[4/3] lg:aspect-video"
              rotuloProporcao="16:9 (4:3 no celular)"
              sizes="(min-width: 1280px) 686px, (min-width: 1024px) 56vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {mostrarSerie ? (
        <div id="encontre-a-serie" className="relative z-10 wrap -mt-20 lg:-mt-24">
          <SeriesFinder
            anoCampanha={siteConfig.anoMatricula}
            eyebrow={home.serie.eyebrow}
            titulo={home.serie.titulo}
            destaque={home.serie.destaque}
            aviso={
              tabelaSeries.validadaPelaSecretaria ? null : (
                <Pending>tabela provisória — a secretaria valida as séries e os nomes das turmas</Pending>
              )
            }
          />
        </div>
      ) : null}
    </>
  );
}
