import { Fragment } from 'react';
import { hrefAgendar, paraFamilias } from '@/content/navegacao';
import { paginas } from '@/content/paginas';
import { cn } from '@/lib/cn';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { tomAlternado, type TomClaro } from '@/lib/tons';
import { linkWhatsApp, mensagens } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { CtaVisita, Horario } from '@/components/blocks/CtaVisita';
import { MapCard } from '@/components/blocks/MapCard';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Icon, type NomeIcone } from '@/components/ui/Icon';
import { Pending, PendingBloco } from '@/components/ui/Pending';
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
  children: React.ReactNode;
};

/** Card de um canal de atendimento: ícone, nome do canal e o contato em si. */
function Canal({ icone, rotulo, children }: CanalProps) {
  return (
    <li className="relative flex flex-col rounded-md bg-surface p-6 ring-1 ring-line lg:p-7">
      <span aria-hidden className="grid size-11 place-items-center rounded-full bg-paper-2 text-ink">
        <Icon name={icone} size={20} />
      </span>
      <h3 className="mt-5 text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">{rotulo}</h3>
      <div className="mt-2">{children}</div>
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
  const familias = confirmado(paraFamilias);
  const listaRedes = [redes.instagram, redes.facebook, redes.youtube];
  const iconeRede = { Instagram: 'instagram', Facebook: 'facebook', YouTube: 'youtube' } as const;

  const secoes: Array<(tom: TomClaro) => React.ReactNode> = [
    (tom) => (
      <Section id="canais" tom={tom} labelledBy="canais-titulo">
        <div className="wrap">
          <SectionHead eyebrow="Canais" titulo="Escolha o canal." id="canais-titulo" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Canal icone="whatsapp" rotulo="WhatsApp">
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
        </div>
      </Section>
    ),
    (tom) => (
      <Section id="endereco" tom={tom} labelledBy="endereco-titulo">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
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
            />
          </div>
        </div>
      </Section>
    ),
    ...(familias || siteConfig.emHomologacao
      ? [
          (tom: TomClaro) => (
            <Section id="familias" tom={tom} labelledBy="familias-titulo">
              <div className="wrap">
                <SectionHead eyebrow="Para famílias" titulo="Já é família da escola?" id="familias-titulo" />
                {familias ? (
                  <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                    {familias.map((item) => (
                      <li key={item.href}>
                        <ArrowLink href={item.href} externo>
                          {item.rotulo}
                        </ArrowLink>
                      </li>
                    ))}
                  </ul>
                ) : isPendente(paraFamilias) ? (
                  <PendingBloco className="mt-6">{paraFamilias.aConfirmar}</PendingBloco>
                ) : null}
              </div>
            </Section>
          ),
        ]
      : []),
    (tom) => <CtaVisita origem="cta-contato" tom={tom} comMapa={false} />,
  ];

  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'Contato', href: '/contato' }]}
        eyebrow={c.eyebrow}
        titulo={c.titulo}
        lead={c.lead}
        acoes={
          <>
            <ButtonLink
              href={linkWhatsApp(mensagens.padrao())}
              externo
              className="w-full sm:w-auto"
              icone={<Icon name="whatsapp" size={20} />}
              data-track="whatsapp_click"
              data-track-segmento="geral"
              data-track-origem="hero-contato"
            >
              Falar no WhatsApp
            </ButtonLink>
            <ArrowLink href={hrefAgendar()} data-track="cta_click" data-track-origem="hero-contato">
              Agendar visita
            </ArrowLink>
          </>
        }
        microcopy={`Atendimento ${siteConfig.contato.horarioCurto}`}
      />

      {secoes.map((secao, i) => (
        <Fragment key={i}>{secao(tomAlternado(i))}</Fragment>
      ))}
    </>
  );
}
