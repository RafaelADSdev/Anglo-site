import { Fragment } from 'react';
import { ambientesProjetos, outrosAmbientes, type Ambiente } from '@/content/estrutura';
import { home } from '@/content/home';
import { hrefAgendar } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { cn } from '@/lib/cn';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { siteConfig } from '@/site.config';
import { CtaVisita } from '@/components/blocks/CtaVisita';
import { fotosVisiveis } from '@/components/blocks/Galeria';
import { temVideoInstitucional, VideoInstitucional } from '@/components/blocks/VideoInstitucional';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { PendingBloco } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

const e = paginas.estrutura;

export const metadata = metadadosDaPagina({
  titulo: e.meta.title,
  descricao: e.meta.description,
  caminho: '/estrutura',
});

/** Ambiente: foto (ou placeholder, em homologação), nome, texto e o link do projeto que acontece ali. */
function AmbienteCard({ ambiente: a, tom, indice }: { ambiente: Ambiente; tom: TomClaro; indice: number }) {
  const texto = confirmado(a.texto);
  const comFoto = fotosVisiveis([{ descricao: a.foto, legenda: a.legenda }]).length > 0;
  return (
    <li id={a.id} className="reveal" style={{ '--i': indice } as React.CSSProperties}>
      {comFoto ? (
        <Figure
          descricao={a.foto}
          legenda={a.legenda}
          proporcao="aspect-[4/3]"
          fundoPlaceholder={tom === 'areia' ? 'claro' : 'areia'}
          sizes="(min-width: 1280px) 380px, (min-width: 768px) 33vw, 100vw"
          arredondamento="md"
        />
      ) : null}
      <h3 className={cn('font-display text-h3 font-semibold text-ink', comFoto && 'mt-5')}>{a.nome}</h3>
      {texto ? <p className="mt-2 max-w-[34em] text-ink-muted">{texto}</p> : null}
      {isPendente(a.texto) ? <PendingBloco className="mt-2">{a.texto.aConfirmar}</PendingBloco> : null}
      {a.href ? (
        <ArrowLink href={a.href} className="mt-2" data-track="cta_click" data-track-origem="estrutura-ambiente">
          Conhecer o projeto
          <span className="sr-only"> {a.nome}</span>
        </ArrowLink>
      ) : null}
    </li>
  );
}

export default function EstruturaPage() {
  // Espaços citados só em diretórios entram em produção quando a escola confirmar cada um.
  const outros = outrosAmbientes.filter((a) => siteConfig.emHomologacao || !isPendente(a.texto));

  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="ambientes" tom={tom} labelledBy="ambientes-titulo">
        <div className="wrap">
          <SectionHead eyebrow={e.ambientes.eyebrow} titulo={e.ambientes.titulo} id="ambientes-titulo" />
          <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {ambientesProjetos.map((a, i) => (
              <AmbienteCard key={a.id} ambiente={a} tom={tom} indice={i} />
            ))}
          </ul>
        </div>
      </Section>
    ),
    ...(outros.length > 0
      ? [
          (tom: TomClaro) => (
            <Section id="outros-espacos" tom={tom} labelledBy="outros-titulo">
              <div className="wrap">
                <SectionHead eyebrow={e.outros.eyebrow} titulo={e.outros.titulo} id="outros-titulo" />
                <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                  {outros.map((a, i) => (
                    <AmbienteCard key={a.id} ambiente={a} tom={tom} indice={i} />
                  ))}
                </ul>
              </div>
            </Section>
          ),
        ]
      : []),
    ...(siteConfig.emHomologacao
      ? [
          (tom: TomClaro) => (
            <Section id="acessibilidade" tom={tom} labelledBy="acessibilidade-titulo">
              <div className="wrap">
                <SectionHead
                  eyebrow={e.acessibilidade.eyebrow}
                  titulo={e.acessibilidade.titulo}
                  id="acessibilidade-titulo"
                />
                <PendingBloco className="mt-6">{e.acessibilidade.pendente}</PendingBloco>
              </div>
            </Section>
          ),
        ]
      : []),
    (tom) => <CtaVisita origem="cta-estrutura" tom={tom} />,
  ];

  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'Estrutura', href: '/estrutura' }]}
        eyebrow={e.eyebrow}
        titulo={e.titulo}
        lead={e.lead}
        acoes={
          <ButtonLink
            href={hrefAgendar()}
            className="w-full sm:w-auto"
            data-track="cta_click"
            data-track-origem="hero-estrutura"
          >
            Agendar visita
          </ButtonLink>
        }
        microcopy={home.hero.microcopy}
        midia={temVideoInstitucional ? <VideoInstitucional fundoPlaceholder="areia" /> : undefined}
      />

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i))}</Fragment>
      ))}
    </>
  );
}
