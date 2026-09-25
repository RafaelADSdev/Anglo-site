import { Fragment } from 'react';
import { paginas } from '@/content/paginas';
import { cn } from '@/lib/cn';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { Horario } from '@/components/blocks/CtaVisita';
import { MapCard } from '@/components/blocks/MapCard';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink } from '@/components/ui/Button';
import { Icon, type NomeIcone } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';

const c = paginas.contato;

export const metadata = metadadosDaPagina({
  titulo: c.meta.title,
  descricao: c.meta.description,
  caminho: '/contato',
});

type CanalProps = {
  icone: NomeIcone;
  rotulo: string;
  /** Cor do círculo do ícone: o verde é só do WhatsApp; os outros, azul. */
  tom?: 'whatsapp' | 'azul';
  children: React.ReactNode;
};

/**
 * Card de um canal de atendimento: ícone e nome do canal na mesma linha, o
 * contato em Fraunces e, quando há, uma linha de apoio. Fica no pé do topo da página.
 */
function Canal({ icone, rotulo, tom = 'azul', children }: CanalProps) {
  return (
    <li className="relative flex flex-col rounded-md bg-surface p-5 ring-1 ring-line sm:p-6">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={cn(
            'grid size-10 shrink-0 place-items-center rounded-full',
            tom === 'whatsapp' ? 'bg-whatsapp-soft text-whatsapp-ink' : 'bg-medio-soft text-brand-blue',
          )}
        >
          <Icon name={icone} size={20} />
        </span>
        <h2 className="text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">{rotulo}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </li>
  );
}

const valorCanal = 'font-display text-[1.375rem] leading-tight font-semibold text-ink';

export default function ContatoPage() {
  const { contato, redes } = siteConfig;
  const telefone = contato.telefone;
  const email = confirmado(contato.email);
  const endereco = contato.endereco;
  const mapa = confirmado(contato.mapa);
  const listaRedes = [redes.instagram, redes.facebook, redes.youtube];
  const iconeRede = { Instagram: 'instagram', Facebook: 'facebook', YouTube: 'youtube' } as const;

  // Os canais ficam no pé do topo: é o que a página promete no título.
  const canais = (
    <ul
      aria-label="Canais de atendimento"
      data-fab-oculta
      className="mt-[clamp(2.5rem,2rem+2vw,4rem)] grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <Canal icone="whatsapp" rotulo="WhatsApp" tom="whatsapp">
        <a
          href={linkWhatsApp(mensagens.padrao())}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(valorCanal, 'link-underline after:absolute after:inset-0 after:rounded-md')}
          data-track="whatsapp_click"
          data-track-segmento="geral"
          data-track-origem="canais-contato"
        >
          {contato.whatsapp.exibicao}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        <p className="mt-2 text-small text-ink-muted">Mensagens e agendamento de visitas.</p>
      </Canal>

      <Canal icone="phone" rotulo="Telefone">
        <a
          href={`tel:+55${telefone.numero}`}
          className={cn(valorCanal, 'link-underline after:absolute after:inset-0 after:rounded-md')}
        >
          {telefone.exibicao}
        </a>
        <p className="mt-2 text-small text-ink-muted">Ligação, {siteConfig.contato.horarioCurto}.</p>
      </Canal>

      {email ? (
        <Canal icone="mail" rotulo="E-mail">
          <a
            href={`mailto:${email}`}
            className={cn(valorCanal, 'break-all link-underline after:absolute after:inset-0 after:rounded-md')}
          >
            {email}
          </a>
        </Canal>
      ) : siteConfig.emHomologacao && isPendente(contato.email) ? (
        <Canal icone="mail" rotulo="E-mail">
          <Pending>{contato.email.aConfirmar}</Pending>
        </Canal>
      ) : null}

      <Canal icone="instagram" rotulo="Redes sociais">
        <ul className="grid">
          {listaRedes.map((rede) => (
            <li key={rede.rotulo}>
              <a
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 font-bold text-ink link-underline hover:decoration-brand-blue"
              >
                <Icon name={iconeRede[rede.rotulo as keyof typeof iconeRede]} size={18} />
                {rede.rotulo}
                <Icon name="arrow-up-right" className="text-brand-blue" />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </Canal>
    </ul>
  );

  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="endereco" tom={tom} labelledBy="endereco-titulo">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Endereço" titulo="Onde fica a escola." id="endereco-titulo" />
            <address className="mt-6 text-lead text-ink not-italic">
              {endereco.logradouro}
              <br />
              {siteConfig.bairro}, {siteConfig.cidade} - {siteConfig.uf} · CEP {endereco.cep}
            </address>
            {mapa ? (
              <ArrowLink href={mapa} externo className="mt-4">
                Como chegar
              </ArrowLink>
            ) : null}
            <Horario className="mt-8" />
          </div>
          <div className="lg:col-span-7">
            <MapCard
              endereco={`${endereco.logradouro}, ${siteConfig.bairro}, ${siteConfig.cidade} - ${siteConfig.uf}, ${endereco.cep}`}
              linkComoChegar={mapa}
              proporcao="aspect-[4/3] lg:aspect-[16/11]"
            />
          </div>
        </div>
      </Section>
    ),
  ];

  return (
    <>
      {/* Sem botões no topo: os cards de canal são as ações (o WhatsApp é o primeiro). */}
      <PageHero
        caderno
        migalhas={[{ rotulo: 'Contato', href: '/contato' }]}
        eyebrow={c.eyebrow}
        titulo={c.titulo}
        lead={c.lead}
      >
        {canais}
      </PageHero>

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i))}</Fragment>
      ))}
    </>
  );
}
