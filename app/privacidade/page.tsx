import { paginas } from '@/content/paginas';
import { metadadosDaPagina } from '@/lib/metadata';
import { confirmado, isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowLink } from '@/components/ui/Button';
import { Pending, PendingBloco } from '@/components/ui/Pending';
import { Section } from '@/components/ui/Section';

const p = paginas.privacidade;

export const metadata = metadadosDaPagina({
  titulo: p.meta.title,
  descricao: p.meta.description,
  caminho: '/privacidade',
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 first:mt-0">{children}</p>;
}

function Lista({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 grid list-disc gap-2 pl-5 marker:text-field">{children}</ul>;
}

/**
 * Texto-base da política (modo leitura): índice fixo ao lado no desktop, texto
 * em até 62ch. Os dados da mantenedora, do encarregado e os prazos vêm de
 * site.config (`juridico`); a revisão jurídica é pendência de produção.
 */
export default function PrivacidadePage() {
  const { juridico, nome, bairro, cidade, uf } = siteConfig;
  const controlador = confirmado(juridico.controlador);
  const encarregado = confirmado(juridico.encarregado);
  const guarda = confirmado(juridico.guardaDosPedidos);
  const atualizadaEm = confirmado(juridico.atualizadaEm);

  const secoes: Array<{ id: string; titulo: string; corpo: React.ReactNode }> = [
    {
      id: 'controlador',
      titulo: 'Quem cuida dos seus dados',
      corpo: (
        <>
          <P>
            Este site é do {nome}, na {bairro}, {cidade} - {uf}. A escola, por meio da sua mantenedora, é a controladora
            dos dados pessoais tratados aqui: é ela quem decide como e para que esses dados são usados.
          </P>
          {controlador ? (
            <P>
              Mantenedora: {controlador.razaoSocial}, CNPJ {controlador.cnpj}.
            </P>
          ) : isPendente(juridico.controlador) ? (
            <PendingBloco className="mt-4">{juridico.controlador.aConfirmar}</PendingBloco>
          ) : null}
        </>
      ),
    },
    {
      id: 'dados',
      titulo: 'Quais dados o site coleta',
      corpo: (
        <>
          <P>O site não tem formulário e não pede seus dados pessoais.</P>
          <P>
            O agendamento da visita é feito pelo WhatsApp. Os botões do WhatsApp só abrem uma conversa com a escola, às
            vezes com uma mensagem já escrita, que só é enviada quando você toca em enviar. O que você escreve na
            conversa, e o seu número, chegam à escola pelo próprio WhatsApp.
          </P>
          <P>
            O site não pede dados da criança. No “Encontre a série”, o mês e o ano de nascimento ficam no seu navegador:
            o cálculo é feito ali mesmo e nada é enviado.
          </P>
        </>
      ),
    },
    {
      id: 'finalidades',
      titulo: 'Para que usamos',
      corpo: (
        <>
          <P>
            O que você envia pelo WhatsApp serve para responder você, combinar a visita e tirar dúvidas sobre a
            matrícula.
          </P>
          <P>A escola não vende seus dados e não os usa para outra finalidade sem avisar antes.</P>
        </>
      ),
    },
    {
      id: 'base-legal',
      titulo: 'Base legal',
      corpo: (
        <>
          <P>O atendimento pelo WhatsApp começa por iniciativa sua: é você quem envia a mensagem.</P>
          <PendingBloco className="mt-4">
            base legal do atendimento pelo WhatsApp (Lei nº 13.709/2018, a LGPD, art. 7º), na revisão jurídica
          </PendingBloco>
          <P>Cookies de medição e de publicidade dependem do seu consentimento.</P>
        </>
      ),
    },
    {
      id: 'cookies',
      titulo: 'Cookies e medição',
      corpo: (
        <>
          <P>Cookies são pequenos arquivos que o site guarda no seu navegador.</P>
          <Lista>
            <li>
              <strong className="font-bold">Essenciais:</strong> fazem o site funcionar e não dependem de consentimento.
            </li>
            <li>
              <strong className="font-bold">Medição e publicidade</strong> (Google e Meta, pelo Google Tag Manager): só
              são ativados se você aceitar no aviso de cookies. A escolha pode ser mudada a qualquer momento em
              “Preferências de cookies”, no rodapé.
            </li>
          </Lista>
          <PendingBloco className="mt-4">
            o aviso de cookies e o link “Preferências de cookies” entram na etapa 5, com o Google Tag Manager
          </PendingBloco>
          <P>
            O mapa da escola é do Google e carrega junto com a página. O vídeo só carrega quando você clica nele. Antes
            disso, o YouTube não recebe nenhuma informação da sua visita.
          </P>
        </>
      ),
    },
    {
      id: 'compartilhamento',
      titulo: 'Com quem compartilhamos',
      corpo: (
        <>
          <Lista>
            <li>
              O WhatsApp (Meta), por onde a conversa acontece, conforme os termos e a política de privacidade do próprio
              WhatsApp.
            </li>
            <li>
              Prestadores de serviço que operam o site em nome da escola, como a hospedagem. Eles só podem usar os dados
              para prestar esse serviço.
            </li>
            <li>Google e Meta, apenas se você aceitar os cookies de medição e publicidade.</li>
            <li>Autoridades públicas, quando a lei exigir.</li>
          </Lista>
          <PendingBloco className="mt-4">
            lista final de prestadores (previsto: Vercel, na hospedagem) e onde os dados ficam armazenados — se for fora
            do Brasil, a política precisa citar a transferência internacional (LGPD, art. 33)
          </PendingBloco>
        </>
      ),
    },
    {
      id: 'guarda',
      titulo: 'Por quanto tempo guardamos',
      corpo: (
        <>
          <P>
            As conversas de agendamento pelo WhatsApp ficam guardadas pelo tempo necessário para o atendimento da
            matrícula{guarda ? <> ({guarda})</> : null}. Depois disso, são apagadas ou anonimizadas, a não ser que a lei
            exija guardá-las por mais tempo.
          </P>
          {isPendente(juridico.guardaDosPedidos) ? (
            <PendingBloco className="mt-4">{juridico.guardaDosPedidos.aConfirmar}</PendingBloco>
          ) : null}
        </>
      ),
    },
    {
      id: 'direitos',
      titulo: 'Seus direitos',
      corpo: (
        <>
          <P>Pela LGPD (art. 18), você pode pedir a qualquer momento:</P>
          <Lista>
            <li>a confirmação de que tratamos seus dados e o acesso a eles;</li>
            <li>a correção de dados incompletos, errados ou desatualizados;</li>
            <li>
              a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desacordo
              com a lei;
            </li>
            <li>a portabilidade dos dados para outro fornecedor;</li>
            <li>a eliminação dos dados tratados com o seu consentimento;</li>
            <li>a informação sobre com quem compartilhamos seus dados;</li>
            <li>a informação sobre a possibilidade de não dar o consentimento e o que acontece nesse caso;</li>
            <li>a revogação do consentimento.</li>
          </Lista>
          <P>
            Para fazer um pedido, fale com o encarregado pelo tratamento de dados
            {encarregado ? (
              <>
                : {encarregado.nome}, pelo e-mail{' '}
                <a href={`mailto:${encarregado.email}`} className="font-semibold link-underline">
                  {encarregado.email}
                </a>
              </>
            ) : null}
            .
          </P>
          {isPendente(juridico.encarregado) ? (
            <PendingBloco className="mt-4">{juridico.encarregado.aConfirmar}</PendingBloco>
          ) : null}
          <P>Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</P>
          <ArrowLink href="https://www.gov.br/anpd/pt-br" externo className="mt-2">
            Site da ANPD
          </ArrowLink>
        </>
      ),
    },
    {
      id: 'seguranca',
      titulo: 'Segurança',
      corpo: (
        <>
          <P>
            O site usa conexão criptografada (HTTPS) do início ao fim e não guarda dados pessoais: o agendamento
            acontece na conversa pelo WhatsApp.
          </P>
          <PendingBloco className="mt-4">
            quem na escola atende e tem acesso às conversas de agendamento no WhatsApp
          </PendingBloco>
        </>
      ),
    },
    {
      id: 'mudancas',
      titulo: 'Mudanças nesta política',
      corpo: (
        <>
          <P>Quando esta política mudar, a data abaixo muda junto.</P>
          <P>
            <strong className="font-bold">Última atualização:</strong>{' '}
            {atualizadaEm ??
              (isPendente(juridico.atualizadaEm) ? <Pending>{juridico.atualizadaEm.aConfirmar}</Pending> : null)}
          </P>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHero
        migalhas={[{ rotulo: 'Política de privacidade', href: '/privacidade' }]}
        eyebrow={p.eyebrow}
        titulo={p.titulo}
        lead={p.lead}
      />

      <Section tom="areia">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="Nesta página" className="lg:sticky lg:top-32 lg:col-span-3 lg:self-start">
            <p aria-hidden className="text-eyebrow font-extrabold tracking-[0.12em] text-ink uppercase">
              Nesta página
            </p>
            <ol className="mt-3 grid text-small">
              {secoes.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex min-h-11 items-center text-ink-muted link-underline decoration-transparent hover:text-ink hover:decoration-brand-blue"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-[62ch] text-ink lg:col-span-8 lg:col-start-5">
            <PendingBloco className="mb-10">
              texto-base para a revisão jurídica da escola — não vai para produção sem essa revisão
            </PendingBloco>
            {secoes.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-titulo`} className="mt-12 first-of-type:mt-0">
                <h2 id={`${s.id}-titulo`} className="font-display text-h3 font-semibold text-ink">
                  {s.titulo}
                </h2>
                <div className="mt-4">{s.corpo}</div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
