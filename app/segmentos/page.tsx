import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { segmentos } from '@/content/segmentos';
import { metadadosDaPagina } from '@/lib/metadata';
import { tomAlternado } from '@/lib/tons';
import { CapituloSegmento } from '@/components/blocks/CapituloSegmento';
import { TrilhaSegmentos } from '@/components/blocks/SegmentCard';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';

const p = paginas.segmentos;

export const metadata = metadadosDaPagina({
  titulo: p.meta.title,
  descricao: p.meta.description,
  caminho: '/segmentos',
});

/**
 * Hub dos segmentos: o topo em papel de caderno, com as quatro fases como índice
 * (cada painel desce até o seu capítulo), e depois a apresentação das fases, uma
 * por seção, na ordem da trajetória. Cada capítulo leva à página do segmento.
 */
export default function SegmentosPage() {
  return (
    <>
      <PageHero
        caderno
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
            <ArrowLink href={`#${segmentos[0].slug}`} seta="baixo">
              Conhecer as fases
            </ArrowLink>
          </>
        }
        microcopy={home.hero.microcopy}
      >
        <TrilhaSegmentos
          segmentos={segmentos}
          nivelTitulo="h2"
          ancora
          revelar
          className="mt-[clamp(3rem,2rem+3vw,5rem)]"
        />
      </PageHero>

      {segmentos.map((seg, i) => (
        <CapituloSegmento
          key={seg.id}
          segmento={seg}
          fase={p.fases[i]}
          rotuloSeries={p.series}
          tom={tomAlternado(i, 'areia')}
          invertido={i % 2 === 1}
        />
      ))}
    </>
  );
}
