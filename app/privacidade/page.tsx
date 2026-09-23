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
          <P>O site só coleta dados pessoais quando você preenche o formulário de visita:</P>
          <Lista>
            <li>nome do responsável;</li>
            <li>WhatsApp com DDD;</li>
            <li>e-mail, se você quiser informar;</li>
            <li>segmento de interesse e melhor período para a visita;</li>
            <li>como você conheceu a escola, se quiser informar.</li>
          </Lista>
          <P>
            Junto com o pedido vão a página por onde você entrou no site, o endereço do site de onde você veio e, quando
            o link tem, os parâmetros de campanha (UTM).
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
          <Lista>
            <li>
              Falar com você pelo WhatsApp (ou pelo e-mail, se informado) para combinar a visita e tirar dúvidas sobre a
              matrícula.
            </li>
            <li>Saber por qual canal ou campanha cada pedido chegou, para a escola avaliar a própria divulgação.</li>
          </Lista>
          <P>A escola não vende seus dados e não os usa para outra finalidade sem avisar antes.</P>
        </>
      ),
    },
    {
      id: 'base-legal',
      titulo: 'Base legal',
      corpo: (
        <>
          <P>
            O contato para agendar a visita se apoia no seu consentimento (Lei nº 13.709/2018, a LGPD, art. 7º, I), dado
            quando você marca a autorização no formulário. Você pode retirar esse consentimento quando quiser, pelos
            canais descritos em “Seus direitos”.
          </P>
          <P>Cookies de medição e de publicidade também dependem do seu consentimento.</P>
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
            Enquanto você navega, o site guarda na sessão do navegador (sessionStorage) a página de entrada e os
            parâmetros de campanha, para enviá-los junto do pedido de visita. Esses dados somem quando a aba é fechada.
          </P>
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
              Prestadores de serviço que operam o site em nome da escola: hospedagem, armazenamento dos pedidos e envio
              dos avisos por e-mail para a equipe de matrículas. Eles só podem usar os dados para prestar esse serviço.
            </li>
            <li>Google e Meta, apenas se você aceitar os cookies de medição e publicidade.</li>
            <li>Autoridades públicas, quando a lei exigir.</li>
          </Lista>
          <PendingBloco className="mt-4">
            lista final de prestadores (previstos: Vercel, Supabase e Resend) e onde os dados ficam armazenados — se for
            fora do Brasil, a política precisa citar a transferência internacional (LGPD, art. 33)
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
            Os pedidos de visita ficam guardados pelo tempo necessário para o atendimento da matrícula
            {guarda ? <> ({guarda})</> : null}. Depois disso, são apagados ou anonimizados, a não ser que a lei exija
            guardá-los por mais tempo.
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
            <li>
              a informação sobre a possibilidade de não dar o consentimento e o que acontece nesse caso: sem ele, o
              formulário não é enviado, mas o WhatsApp continua à disposição;
            </li>
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
            O site usa conexão criptografada (HTTPS) do início ao fim. O acesso aos pedidos de visita fica restrito às
            pessoas da escola que cuidam das matrículas.
          </P>
          <PendingBloco className="mt-4">
            quem terá acesso aos pedidos, quando o armazenamento for ligado (etapa 5)
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
