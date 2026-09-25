import { hrefSegmento, type Segmento } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { confirmado, isPendente } from '@/lib/pending';
import type { TomClaro } from '@/lib/tons';
import { ArrowLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Figure } from '@/components/ui/Figure';
import { Heading } from '@/components/ui/Heading';
import { PendingBloco } from '@/components/ui/Pending';
import { Section } from '@/components/ui/Section';
import { tonsSegmento } from '@/components/ui/tons-segmento';
import { fotosVisiveis } from './Galeria';

type Props = {
  segmento: Segmento;
  /** "Primeira fase", "Segunda fase"… */
  fase: string;
  rotuloSeries: string;
  tom: TomClaro;
  /** Foto à esquerda no desktop: os capítulos alternam o lado. */
  invertido?: boolean;
};

/**
 * Um capítulo da apresentação das quatro fases (/segmentos): texto (5) e foto (7),
 * alternando o lado. O título tem as duas batidas da página do segmento, com a
 * segunda na tinta da fase; atrás da foto, uma placa no suave da fase. Só usa o
 * que a base de conteúdo afirma — o resto fica com o marcador em homologação.
 */
export function CapituloSegmento({ segmento, fase, rotuloSeries, tom, invertido }: Props) {
  const pg = segmento.pagina;
  const tons = tonsSegmento[segmento.id];
  const series = confirmado(pg.series);
  // A foto real vem primeiro; sem ela, em homologação, o espaço reservado da primeira prevista.
  const foto = pg.fotos.find((f) => f.foto) ?? fotosVisiveis(pg.fotos)[0];
  const tituloId = `${segmento.slug}-titulo`;

  return (
    <Section id={segmento.slug} tom={tom} labelledBy={tituloId}>
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className={cn('lg:col-span-5', foto && invertido && 'lg:col-start-8 lg:row-start-1')}>
          <Eyebrow>{fase}</Eyebrow>
          <Heading id={tituloId} titulo={pg.titulo} destaque={pg.destaque} corDestaque={tons.tinta} className="mt-4" />
          <p className="mt-5 max-w-[34em] text-lead text-ink-muted">{pg.lead}</p>

          <h3 className="mt-8 text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">{rotuloSeries}</h3>
          {series ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {series.map((serie) => (
                <li
                  key={serie}
                  className={cn(
                    'inline-flex min-h-9 items-center rounded-full px-3.5 text-small font-bold',
                    tons.suave,
                    tons.tinta,
                  )}
                >
                  {serie}
                </li>
              ))}
            </ul>
          ) : isPendente(pg.series) ? (
            <PendingBloco className="mt-3">{pg.series.aConfirmar}</PendingBloco>
          ) : null}

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="text-[1.125rem] leading-snug font-bold text-ink">{pg.vive.titulo}</h3>
            <p className="mt-1 text-small text-ink-muted">{pg.vive.texto}</p>
            <PendingBloco className="mt-2">{pg.vive.pendente}</PendingBloco>
          </div>

          <ArrowLink
            href={hrefSegmento(segmento)}
            className="mt-6"
            data-track="cta_click"
            data-track-origem="capitulo-segmentos"
            data-track-segmento={segmento.id}
          >
            {segmento.artigo === 'a' ? 'Conhecer a' : 'Conhecer o'} {segmento.nome}
          </ArrowLink>
        </div>

        {foto ? (
          <div className={cn('relative lg:col-span-7', invertido && 'lg:col-start-1 lg:row-start-1')}>
            {/* A placa no suave da fase, deslocada atrás da foto: a cor do card do topo continua aqui. */}
            <div
              aria-hidden
              className={cn(
                'absolute inset-0 translate-y-3 rounded-lg sm:translate-y-5',
                // A placa sai sempre para fora, do lado oposto ao texto.
                invertido ? '-translate-x-3 sm:-translate-x-5' : 'translate-x-3 sm:translate-x-5',
                tons.suave,
              )}
            />
            <Figure
              className="relative"
              foto={foto.foto}
              descricao={foto.descricao}
              legenda={foto.legenda}
              legendaDentro
              proporcao="aspect-[4/3]"
              rotuloProporcao="4:3"
              fundoPlaceholder={tom === 'areia' ? 'claro' : 'areia'}
              sizes="(min-width: 1280px) 686px, (min-width: 1024px) 56vw, 100vw"
            />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
