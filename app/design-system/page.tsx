import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { duvidasHome } from '@/content/faq';
import { passosMatricula } from '@/content/matricula';
import { segmentos } from '@/content/segmentos';
import { siteConfig } from '@/site.config';
import { AgendarWhatsApp } from '@/components/blocks/AgendarWhatsApp';
import { FAQ } from '@/components/blocks/FAQ';
import { MapCard } from '@/components/blocks/MapCard';
import { SegmentCard } from '@/components/blocks/SegmentCard';
import { Steps } from '@/components/blocks/Steps';
import { ArrowLink, ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Figure } from '@/components/ui/Figure';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { Section, SectionHead } from '@/components/ui/Section';
import { SegmentTag } from '@/components/ui/SegmentTag';

export const metadata: Metadata = {
  title: 'Design system',
  robots: { index: false, follow: false },
};

const cores: Array<{
  grupo: string;
  itens: Array<{ nome: string; token: string; hex: string; nota: string; escuro?: boolean }>;
}> = [
  {
    grupo: 'Marca · medida no logo em uso',
    itens: [
      {
        nome: 'Azul Anglo',
        token: 'brand-blue',
        hex: '#00279B',
        nota: 'CTAs, links, foco · 11,9:1 com branco',
        escuro: true,
      },
      {
        nome: 'Azul-claro',
        token: 'brand-sky',
        hex: '#036EA9',
        nota: 'Fundamental 2 · 5,5:1 com branco',
        escuro: true,
      },
      { nome: 'Amarelo', token: 'brand-yellow', hex: '#FCFA03', nota: 'Infantil, botão sobre o azul · nunca texto' },
      {
        nome: 'Vermelho',
        token: 'brand-red',
        hex: '#DB2C1B',
        nota: 'Fundamental 1, friso · texto usa #AF2D1B',
        escuro: true,
      },
    ],
  },
  {
    grupo: 'Neutros',
    itens: [
      { nome: 'Papel', token: 'paper', hex: '#FBF8F1', nota: 'fundo principal' },
      { nome: 'Areia', token: 'paper-2', hex: '#F3EDE1', nota: 'seções alternadas' },
      { nome: 'Superfície', token: 'surface', hex: '#FFFDF9', nota: 'cards, painéis, campos' },
      { nome: 'Tinta', token: 'ink', hex: '#121D38', nota: 'texto · 15,7:1 no papel', escuro: true },
      { nome: 'Tinta suave', token: 'ink-muted', hex: '#4F586C', nota: 'texto secundário · 6,7:1', escuro: true },
      { nome: 'Linha', token: 'line', hex: '#E4DFD5', nota: 'divisórias' },
      { nome: 'Borda de campo', token: 'field', hex: '#868073', nota: 'inputs · 3,7:1', escuro: true },
    ],
  },
  {
    grupo: 'Funcionais',
    itens: [
      { nome: 'WhatsApp', token: 'whatsapp', hex: '#128C7E', nota: 'botão flutuante', escuro: true },
      {
        nome: 'WhatsApp escuro',
        token: 'whatsapp-ink',
        hex: '#075E54',
        nota: 'ícone em botões · botão de agendar',
        escuro: true,
      },
      { nome: 'Erro', token: 'error', hex: '#B3241F', nota: '6,2:1 no papel', escuro: true },
      { nome: 'Sucesso', token: 'success', hex: '#21763C', nota: '5,3:1 no papel', escuro: true },
    ],
  },
];

const tipos = [
  {
    papel: 'Título principal',
    spec: 'Fraunces 600 · 40→68 px',
    exemplo: <Heading as="h3" titulo="Base forte para aprender." destaque="Coragem para liderar." tamanho="display" />,
  },
  {
    papel: 'Título de seção',
    spec: 'Fraunces 600 · 32→52 px',
    exemplo: <Heading as="h3" titulo="Quatro fases." destaque="Cada uma no seu tempo." />,
  },
  {
    papel: 'Título de bloco',
    spec: 'Fraunces 600 · 22→28 px',
    exemplo: <p className="font-display text-h3 font-semibold">Criatto Lab</p>,
  },
  {
    papel: 'Texto de abertura',
    spec: 'Manrope 450 · 18→21 px · 1,55',
    exemplo: (
      <p className="max-w-[34em] text-lead text-ink-muted">
        Da Educação Infantil, a partir de 1 ano, ao 3º ano do Ensino Médio.
      </p>
    ),
  },
  {
    papel: 'Texto corrido',
    spec: 'Manrope 450 · 17→18 px · 1,6',
    exemplo: (
      <p className="max-w-[65ch]">
        No Pod Criar, estudantes fazem jornal, podcasts e comerciais. No Além do Vest, conversam com profissionais da
        região sobre carreiras.
      </p>
    ),
  },
  {
    papel: 'Linha de confiança',
    spec: 'Manrope 500 · 15 px',
    exemplo: (
      <p className="text-small font-medium text-ink-muted">
        Visita guiada · sem compromisso · {siteConfig.contato.horarioCurto}
      </p>
    ),
  },
  {
    papel: 'Linha acima do título',
    spec: 'Manrope 800 · 13 px · +0,12em',
    exemplo: <Eyebrow>Matrículas {siteConfig.anoMatricula} abertas</Eyebrow>,
  },
  {
    papel: 'Número de etapa',
    spec: 'Fraunces itálico 500 · 40→56 px',
    exemplo: <p className="font-display text-step font-medium text-brand-blue italic">01 · 02 · 03</p>,
  },
];

export default function DesignSystem() {
  if (!siteConfig.emHomologacao) notFound();

  return (
    <>
      <Section labelledBy="ds-titulo">
        <div className="wrap">
          <SectionHead
            as="h1"
            eyebrow="Etapa 2 · design system"
            titulo="As peças do site,"
            destaque="uma de cada vez."
            id="ds-titulo"
            intro="Tokens e componentes em código, os mesmos que montam a Home. Esta página só existe em homologação."
          />
        </div>
      </Section>

      <Section tom="areia" labelledBy="ds-cores">
        <div className="wrap">
          <h2 id="ds-cores" className="font-display text-h2 font-semibold">
            Cor
          </h2>
          {cores.map((g) => (
            <div key={g.grupo} className="mt-10">
              <p className="text-eyebrow font-extrabold tracking-[0.12em] text-ink-muted uppercase">{g.grupo}</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {g.itens.map((c) => (
                  <li key={c.token} className="overflow-hidden rounded-md bg-surface ring-1 ring-line">
                    <div className="h-20 ring-1 ring-line ring-inset" style={{ backgroundColor: c.hex }} />
                    <div className="p-3">
                      <p className="font-bold">{c.nome}</p>
                      <p className="font-mono text-caption text-ink-muted">
                        {c.hex} · {c.token}
                      </p>
                      <p className="mt-1 text-caption text-ink-muted">{c.nota}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-10 text-eyebrow font-extrabold tracking-[0.12em] text-ink-muted uppercase">Segmentos</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {segmentos.map((s) => (
              <SegmentTag key={s.id} segmento={s.id} />
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="ds-tipo">
        <div className="wrap">
          <h2 id="ds-tipo" className="font-display text-h2 font-semibold">
            Tipografia
          </h2>
          <dl className="mt-8">
            {tipos.map((t) => (
              <div key={t.papel} className="grid gap-3 border-t border-line py-6 lg:grid-cols-12 lg:gap-8">
                <dt className="lg:col-span-3">
                  <span className="block text-caption font-extrabold tracking-[0.08em] uppercase">{t.papel}</span>
                  <span className="text-caption text-ink-muted">{t.spec}</span>
                </dt>
                <dd className="lg:col-span-9">{t.exemplo}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tom="areia" labelledBy="ds-acoes">
        <div className="wrap">
          <h2 id="ds-acoes" className="font-display text-h2 font-semibold">
            Botões e links
          </h2>
          <p className="mt-3 max-w-[40em] text-ink-muted">
            → faz algo no site · ↓ desce na página · ↗ abre outro site ou app.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ButtonLink href="#ds-acoes">Agendar visita</ButtonLink>
            <ArrowLink href="#ds-tipo" seta="baixo">
              Conhecer os segmentos
            </ArrowLink>
            <ButtonLink
              href="https://wa.me/"
              externo
              variante="contorno"
              icone={<Icon name="whatsapp" size={20} className="text-whatsapp-ink" />}
            >
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink
              href="https://wa.me/"
              externo
              variante="whatsapp"
              icone={<Icon name="whatsapp" size={20} className="shrink-0" />}
            >
              Agendar visita pelo WhatsApp
            </ButtonLink>
            <ArrowLink href="#ds-acoes">Ver o projeto</ArrowLink>
          </div>
          <div
            data-tone="blue"
            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 rounded-lg bg-brand-blue p-8"
          >
            <ButtonLink href="#ds-acoes" variante="amarelo">
              Conhecer a proposta
            </ButtonLink>
            <ArrowLink href="#ds-acoes" tom="escuro">
              Sobre o azul, o foco e a seta ficam amarelos
            </ArrowLink>
          </div>
          <p className="mt-6">
            <Pending>marcador de conteúdo pendente (só em homologação)</Pending>
          </p>
        </div>
      </Section>

      <Section labelledBy="ds-cards">
        <div className="wrap">
          <h2 id="ds-cards" className="font-display text-h2 font-semibold">
            Cards de segmento
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-12 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {segmentos.map((s) => (
              <li key={s.id}>
                <SegmentCard segmento={s} />
              </li>
            ))}
          </ul>
          <h2 className="mt-16 font-display text-h2 font-semibold">Passos numerados</h2>
          <div className="mt-8">
            <Steps passos={passosMatricula} />
          </div>
        </div>
      </Section>

      <Section tom="areia" labelledBy="ds-conteudo">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="ds-conteudo" className="font-display text-h2 font-semibold">
              Dúvidas frequentes
            </h2>
            <div className="mt-8">
              <FAQ duvidas={duvidasHome.slice(0, 3)} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-h2 font-semibold">Foto e mapa</h2>
            <Figure
              className="mt-8"
              descricao="estudantes em atividade na sala do Criatto Lab"
              proporcao="aspect-[4/3]"
              rotuloProporcao="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="mt-6">
              <MapCard endereco="Endereço de exemplo — o real depende da escola" />
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="ds-agendar">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="ds-agendar" className="font-display text-h2 font-semibold">
              Agendar visita
            </h2>
            <p className="mt-3 text-ink-muted">
              Sem formulário: o bloco explica que o botão abre o WhatsApp com a mensagem já escrita e mostra essa
              mensagem antes do clique. O botão verde é só deste bloco; o “Falar no WhatsApp” continua de contorno.
            </p>
          </div>
          <AgendarWhatsApp tituloId="ds-agendar-titulo" origem="design-system" className="lg:col-span-7" />
        </div>
      </Section>
    </>
  );
}
