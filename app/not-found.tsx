import type { Metadata } from 'next';
import { hrefAgendar } from '@/content/navegacao';
import { hrefSegmento, segmentos } from '@/content/segmentos';
import { siteConfig } from '@/site.config';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="erro-titulo" className="section-y">
      <div className="wrap">
        <div className="max-w-[52rem]">
          <Eyebrow>Página não encontrada</Eyebrow>
          <Heading
            as="h1"
            id="erro-titulo"
            titulo="Este endereço não leva a lugar nenhum."
            destaque="A escola continua aqui."
            className="mt-4"
          />
          {siteConfig.emHomologacao ? (
            <p className="mt-6 max-w-[36em] rounded-sm bg-infantil-soft px-4 py-3 text-small text-ink">
              Em homologação: as páginas internas (A Escola, Segmentos, Projetos, Estrutura, Matrículas, Contato e
              Privacidade) entram na próxima etapa.
            </p>
          ) : null}
          <p className="mt-6 text-lead text-ink-muted">Escolha por onde seguir:</p>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {segmentos.map((s) => (
              <li key={s.id}>
                <ArrowLink href={hrefSegmento(s)}>{s.nome}</ArrowLink>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            <ButtonLink href={hrefAgendar()} data-track="cta_click" data-track-origem="404">
              Agendar visita
            </ButtonLink>
            <ArrowLink href="/">Voltar para a página inicial</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
