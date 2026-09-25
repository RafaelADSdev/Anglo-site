import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { projetos, projetosComEspaco, type Projeto } from '@/content/projetos';
import { cn } from '@/lib/cn';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { fotosVisiveis } from '@/components/blocks/Galeria';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';
import { SegmentTag } from '@/components/ui/SegmentTag';

const p = paginas.projetos;

export const metadata = metadadosDaPagina({
  titulo: p.meta.title,
  descricao: p.meta.description,
  caminho: '/projetos',
});

/** Um projeto por seção (a âncora é o id): texto (5) e foto (7), alternando o lado. */
function ProjetoSection({ projeto: pr, tom, invertido }: { projeto: Projeto; tom: TomClaro; invertido: boolean }) {
  const segs = confirmado(pr.segmentos);
  const comFoto = fotosVisiveis([{ descricao: pr.foto, legenda: pr.legenda, foto: pr.imagem }]).length > 0;
  const comEspaco = (projetosComEspaco as readonly string[]).includes(pr.id);
  const mostrarSegmentos = segs || (siteConfig.emHomologacao && isPendente(pr.segmentos));

  return (
    <Section id={pr.id} tom={tom} labelledBy={`${pr.id}-titulo`}>
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div
          className={cn(
            'lg:row-start-1',
            comFoto ? 'lg:col-span-5' : 'lg:col-span-8',
            comFoto && invertido && 'lg:col-start-8',
          )}
        >
          <SectionHead eyebrow={pr.tema} titulo={pr.nome} intro={pr.resumo} id={`${pr.id}-titulo`} />
          {mostrarSegmentos ? (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {segs ? segs.map((id) => <SegmentTag key={id} segmento={id} />) : null}
              {isPendente(pr.segmentos) ? <Pending>{pr.segmentos.aConfirmar}</Pending> : null}
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <ButtonLink
              href={linkWhatsApp(mensagens.projeto(pr.nome))}
              externo
              variante="contorno"
              icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
              data-track="whatsapp_click"
              data-track-segmento="geral"
              data-track-origem={`projeto-${pr.id}`}
            >
              Perguntar no WhatsApp
              <span className="sr-only"> sobre o projeto {pr.nome}</span>
            </ButtonLink>
            {comEspaco ? (
              <ArrowLink href={`/estrutura#${pr.id}`} data-track="cta_click" data-track-origem={`projeto-${pr.id}`}>
                Ver o espaço
                <span className="sr-only"> do projeto {pr.nome}</span>
              </ArrowLink>
            ) : null}
          </div>
        </div>
        {comFoto ? (
          <Figure
            className={cn('lg:col-span-7 lg:row-start-1', invertido ? 'lg:col-start-1' : 'lg:col-start-6')}
            foto={pr.imagem}
            descricao={pr.foto}
            legenda={pr.legenda}
            proporcao="aspect-[4/3]"
            rotuloProporcao="4:3"
            fundoPlaceholder={tom === 'areia' ? 'claro' : 'areia'}
            sizes="(min-width: 1280px) 686px, (min-width: 1024px) 56vw, 100vw"
            arredondamento="md"
          />
        ) : null}
      </div>
    </Section>
  );
}

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'Projetos', href: '/projetos' }]}
        eyebrow={p.eyebrow}
        titulo={p.titulo}
        destaque={p.destaque}
        lead={p.lead}
        acoes={
          <ButtonLink
            href={hrefAgendar()}
            className="w-full sm:w-auto"
            data-track="cta_click"
            data-track-origem="hero-projetos"
          >
            Agendar visita
          </ButtonLink>
        }
        microcopy={home.hero.microcopy}
      >
        <nav aria-label="Projetos nesta página" className="mt-[clamp(2.75rem,2rem+2.5vw,4.5rem)]">
          <ul className="flex flex-wrap gap-2">
            {projetos.map((pr) => (
              <li key={pr.id}>
                <a
                  href={`#${pr.id}`}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-4 text-small font-bold text-ink ring-1 ring-line transition-shadow duration-150 hover:ring-ink"
                >
                  {pr.nome}
                  <Icon
                    name="arrow-down"
                    className="text-brand-blue transition-transform duration-150 group-hover:translate-y-[3px] motion-reduce:transition-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {projetos.map((pr, i) => (
        <ProjetoSection key={pr.id} projeto={pr} tom={tomAlternado(i)} invertido={i % 2 === 1} />
      ))}

      <CtaVisita origem="cta-projetos" tom={tomAlternado(projetos.length)} />
    </>
  );
}
