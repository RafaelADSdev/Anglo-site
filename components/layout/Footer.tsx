import Image from 'next/image';
import Link from 'next/link';
import { menuPrincipal, paraFamilias } from '@/content/navegacao';
import { confirmado, isPendente } from '@/lib/pending';
import { mensagens, linkWhatsApp } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import { Icon } from '@/components/ui/Icon';
import { Pending } from '@/components/ui/Pending';
import { AnoAtual } from './AnoAtual';

const tituloColuna = 'text-eyebrow font-extrabold tracking-[0.12em] text-on-ink-muted uppercase';
const linkRodape =
  'inline-flex min-h-11 items-center text-white/90 link-underline decoration-white/30 transition-colors hover:text-white hover:decoration-brand-yellow';

export function Footer() {
  const { contato, redes } = siteConfig;
  const telefone = contato.telefone;
  const email = confirmado(contato.email);
  const endereco = contato.endereco;
  const familias = confirmado(paraFamilias);
  const listaRedes = [redes.instagram, redes.facebook, redes.youtube];
  const iconeRede = { Instagram: 'instagram', Facebook: 'facebook', YouTube: 'youtube' } as const;

  return (
    <footer data-tone="ink" data-fab-oculta className="bg-ink text-white">
      <div aria-hidden className="h-1 stripe" />
      <div className="wrap grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block" aria-label={`${siteConfig.nome} — página inicial`}>
            <Image src="/marca/logo-negativo.png" alt="" width={624} height={375} className="h-auto w-36" />
          </Link>
          <p className="mt-5 max-w-[22em] text-small text-on-ink-muted">
            Da Educação Infantil ao Ensino Médio, na {siteConfig.bairro}, {siteConfig.cidade}.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Redes sociais">
            {listaRedes.map((rede) => (
              <li key={rede.rotulo}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-full bg-white/8 text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
                >
                  <Icon name={iconeRede[rede.rotulo as keyof typeof iconeRede]} size={18} />
                  <span className="sr-only">{rede.rotulo} (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={tituloColuna}>Contato</h2>
          <ul className="mt-4 grid gap-1 text-small">
            <li>
              <a
                href={linkWhatsApp(mensagens.padrao())}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkRodape} gap-2`}
                data-track="whatsapp_click"
                data-track-segmento="geral"
                data-track-origem="rodape"
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp {contato.whatsapp.exibicao}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={`tel:+55${telefone.numero}`} className={`${linkRodape} gap-2`}>
                <Icon name="phone" size={16} />
                {telefone.exibicao}
              </a>
            </li>
            <li>
              {email ? (
                <a href={`mailto:${email}`} className={`${linkRodape} gap-2`}>
                  <Icon name="mail" size={16} />
                  {email}
                </a>
              ) : (
                <Pending className="mt-1">e-mail de contato</Pending>
              )}
            </li>
            <li className="mt-1">
              <p className="flex gap-2 text-white/90">
                <Icon name="map-pin" size={16} className="mt-1" />
                <span>
                  {endereco.logradouro} · {siteConfig.bairro}, {siteConfig.cidade}/{siteConfig.uf} · CEP {endereco.cep}
                </span>
              </p>
            </li>
          </ul>
          <dl className="mt-5 grid gap-1 text-small">
            {contato.horario.map((h) => (
              <div key={h.dias} className="flex flex-wrap gap-x-2">
                <dt className="text-on-ink-muted">{h.dias}:</dt>
                <dd className="text-white/90">{h.horas}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2">
          <h2 className={tituloColuna}>Navegação</h2>
          <ul className="mt-4 grid text-small">
            {menuPrincipal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkRodape}>
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={tituloColuna}>Para famílias</h2>
          {familias ? (
            <ul className="mt-4 grid text-small">
              {familias.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkRodape}>
                    {item.rotulo}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4">
              <Pending>{isPendente(paraFamilias) ? paraFamilias.aConfirmar : ''}</Pending>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="wrap flex flex-col gap-2 py-4 text-caption text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <AnoAtual anoDoBuild={new Date().getFullYear()} /> {siteConfig.nome}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 sm:justify-end">
            <p className="flex flex-wrap gap-x-4">
              <Link
                href="/privacidade"
                className="inline-flex min-h-11 items-center link-underline decoration-white/30 hover:text-white"
              >
                Política de privacidade
              </Link>
              {siteConfig.emHomologacao ? (
                <span className="inline-flex min-h-11 items-center">Ambiente de homologação</span>
              ) : null}
            </p>
            <Link
              href="/contato"
              className="inline-flex min-h-11 items-center self-end font-display text-[0.7rem] font-semibold tracking-[0.18em] text-white/55 uppercase transition-colors hover:text-white sm:self-auto"
              aria-label="MAÍKA — contato"
            >
              MAÍKA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
