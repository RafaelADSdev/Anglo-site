'use client';

import Link from 'next/link';
import { useId, useRef, useState, type FormEvent } from 'react';
import { segmentos } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { track } from '@/lib/track';
import { lerUtms } from '@/lib/utm';
import { linkWhatsApp } from '@/lib/whatsapp';
import { siteConfig } from '@/site.config';
import {
  ORIGENS,
  PERIODOS,
  mascaraWhatsApp,
  validarLead,
  type DadosLead,
  type ErroEnvio,
  type Erros,
  type ResultadoEnvio,
} from '@/lib/lead';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

type Props = {
  /** Envio (server action `enviarLead`; gravação e aviso por e-mail entram na etapa 5). */
  onEnviar: (dados: DadosLead) => Promise<ResultadoEnvio>;
  segmentoInicial?: string;
};

/** Cada mensagem termina no conector do link "WhatsApp" que vem logo depois. */
const MENSAGEM_FALHA: Record<ErroEnvio, string> = {
  'dados-invalidos': 'Confira os campos do formulário e tente de novo, ou fale direto pelo',
  limite: 'Recebemos vários envios seguidos deste aparelho. Aguarde alguns minutos ou fale direto pelo',
  'nao-configurado': siteConfig.emHomologacao
    ? 'Homologação: o envio para a equipe de matrículas ainda não está ligado — entra na próxima etapa. Para agendar agora, chame no'
    : 'Não conseguimos enviar agora. Tente de novo em instantes ou fale direto pelo',
  falha: 'Não conseguimos enviar agora. Tente de novo em instantes ou fale direto pelo',
};

export function LeadForm({ onEnviar, segmentoInicial = '' }: Props) {
  const id = useId();
  const formulario = useRef<HTMLFormElement>(null);
  const [estado, setEstado] = useState<'editando' | 'enviando' | 'enviado' | 'falhou'>('editando');
  const [erroEnvio, setErroEnvio] = useState<ErroEnvio>('falha');
  const [erros, setErros] = useState<Erros>({});
  const [whatsapp, setWhatsapp] = useState('');
  const [nomeEnviado, setNomeEnviado] = useState('');

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const { utm, paginaEntrada } = lerUtms();
    const dados: DadosLead = {
      nome: String(f.get('nome') ?? ''),
      whatsapp,
      email: String(f.get('email') ?? ''),
      segmento: String(f.get('segmento') ?? ''),
      periodo: String(f.get('periodo') ?? ''),
      origem: String(f.get('origem') ?? ''),
      consentimento: f.get('consentimento') === 'sim',
      empresa: String(f.get('empresa') ?? ''),
      utm,
      paginaEntrada,
      paginaFormulario: window.location.pathname,
    };
    const novosErros = validarLead(dados);
    setErros(novosErros);
    const primeiro = Object.keys(novosErros)[0];
    if (primeiro) {
      formulario.current?.querySelector<HTMLElement>(`[name="${primeiro}"]`)?.focus();
      return;
    }
    setEstado('enviando');
    let resultado: ResultadoEnvio;
    try {
      resultado = await onEnviar(dados);
    } catch {
      resultado = { ok: false, erro: 'falha' };
    }
    if (resultado.ok) {
      setNomeEnviado(dados.nome.trim().split(' ')[0]);
      setEstado('enviado');
      track('generate_lead', {
        segmento: dados.segmento,
        periodo: dados.periodo,
        origem: dados.origem || 'não informado',
      });
    } else {
      setErroEnvio(resultado.erro);
      setEstado('falhou');
    }
  }

  if (estado === 'enviado') {
    return (
      <div role="status" className="rounded-md bg-surface p-7 ring-1 ring-line sm:p-9">
        <span className="grid size-11 place-items-center rounded-full bg-success text-white">
          <Icon name="check" size={22} />
        </span>
        <h3 className="mt-5 font-display text-h3 font-semibold text-ink">Pedido recebido, {nomeEnviado}.</h3>
        <p className="mt-3 max-w-[36em] text-ink-muted">
          A equipe de matrículas recebeu seu pedido de visita e vai falar com você pelo WhatsApp informado.
        </p>
        <ButtonLink
          href={linkWhatsApp(`Olá! Acabei de pedir uma visita pelo site. Meu nome é ${nomeEnviado}.`)}
          externo
          className="mt-6"
          icone={<Icon name="whatsapp" size={20} />}
          data-track="whatsapp_click"
          data-track-origem="confirmacao-formulario"
        >
          Falar agora no WhatsApp
        </ButtonLink>
      </div>
    );
  }

  const erroDe = (campo: keyof Erros) =>
    erros[campo] ? (
      <p id={`${id}-${campo}-erro`} className="mt-1.5 flex items-center gap-1.5 text-caption font-semibold text-error">
        <Icon name="alert" size={16} className="shrink-0" />
        {erros[campo]}
      </p>
    ) : null;
  const invalido = (campo: keyof Erros) =>
    erros[campo] ? { 'aria-invalid': true as const, 'aria-describedby': `${id}-${campo}-erro` } : {};

  const rotulo = 'mb-1.5 block text-[0.875rem] font-bold text-ink';

  return (
    <form
      ref={formulario}
      onSubmit={enviar}
      noValidate
      className="relative grid gap-5 overflow-hidden rounded-md bg-surface p-6 ring-1 ring-line before:absolute before:inset-x-0 before:top-0 before:h-1 before:stripe sm:p-8"
    >
      <div>
        <label htmlFor={`${id}-nome`} className={rotulo}>
          Nome do responsável
        </label>
        <input id={`${id}-nome`} name="nome" type="text" autoComplete="name" className="campo" {...invalido('nome')} />
        {erroDe('nome')}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-whatsapp`} className={rotulo}>
            WhatsApp <span className="font-medium text-ink-muted">com DDD</span>
          </label>
          <input
            id={`${id}-whatsapp`}
            name="whatsapp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="(81) 90000-0000"
            value={whatsapp}
            onChange={(e) => setWhatsapp(mascaraWhatsApp(e.target.value))}
            className="campo placeholder:text-ink-muted"
            {...invalido('whatsapp')}
          />
          {erroDe('whatsapp')}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={rotulo}>
            E-mail <span className="font-medium text-ink-muted">opcional</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className="campo"
            {...invalido('email')}
          />
          {erroDe('email')}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-segmento`} className={rotulo}>
            Segmento de interesse
          </label>
          <select
            id={`${id}-segmento`}
            name="segmento"
            defaultValue={segmentoInicial}
            className="campo campo-select"
            {...invalido('segmento')}
          >
            <option value="">Escolha</option>
            {segmentos.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.nome}
              </option>
            ))}
            <option value="ainda-nao-sei">Ainda não sei</option>
          </select>
          {erroDe('segmento')}
        </div>
        <div>
          <label htmlFor={`${id}-origem`} className={rotulo}>
            Como conheceu a escola? <span className="font-medium text-ink-muted">opcional</span>
          </label>
          <select id={`${id}-origem`} name="origem" defaultValue="" className="campo campo-select">
            <option value="">Escolha</option>
            {ORIGENS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset {...(erros.periodo ? { 'aria-describedby': `${id}-periodo-erro` } : {})}>
        <legend className={rotulo}>Melhor período para a visita</legend>
        <div className="flex flex-wrap gap-2">
          {PERIODOS.map((p) => (
            <label
              key={p}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-paper px-4 text-small font-semibold text-ink ring-1 ring-field has-checked:bg-medio-soft has-checked:ring-brand-blue has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-blue"
            >
              <input type="radio" name="periodo" value={p} className="size-4 accent-brand-blue" />
              {p}
            </label>
          ))}
        </div>
        {erroDe('periodo')}
      </fieldset>

      {/* Honeypot: fora da tela e fora da ordem de tabulação */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-empresa`}>Empresa</label>
        <input id={`${id}-empresa`} name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="grid cursor-pointer grid-cols-[1.5rem_1fr] items-start gap-3 text-small text-ink">
          <input
            type="checkbox"
            name="consentimento"
            value="sim"
            className="mt-0.5 size-5 accent-brand-blue"
            {...invalido('consentimento')}
          />
          <span>
            Li a{' '}
            <Link href="/privacidade" className="font-semibold link-underline hover:decoration-brand-blue">
              Política de Privacidade
            </Link>{' '}
            e autorizo o contato da equipe de matrículas.
          </span>
        </label>
        {erroDe('consentimento')}
      </div>

      {estado === 'falhou' ? (
        <div role="alert" className="rounded-sm bg-fund1-soft p-4 text-small text-ink">
          {MENSAGEM_FALHA[erroEnvio]}{' '}
          <a
            href={linkWhatsApp('Olá! Tentei pedir uma visita pelo site, mas o formulário não enviou.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold link-underline"
          >
            WhatsApp<span className="sr-only"> (abre em nova aba)</span>
          </a>
          .
        </div>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={estado === 'enviando'}
          className={cn(
            'group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brand-blue px-6 text-base font-bold text-white transition-colors duration-150 hover:bg-brand-blue-hover sm:w-auto',
            'disabled:cursor-progress disabled:opacity-70',
          )}
        >
          {estado === 'enviando' ? 'Enviando…' : 'Agendar visita'}
          <Icon name="arrow-right" className="transition-transform duration-150 group-hover:translate-x-[3px]" />
        </button>
        <p className="mt-3 text-caption text-ink-muted">Usamos seus dados só para agendar a visita.</p>
      </div>
    </form>
  );
}
