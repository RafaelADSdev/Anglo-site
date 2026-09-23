'use client';

import Link from 'next/link';
import { useId, useRef, useState, type FormEvent } from 'react';
import { segmentos } from '@/content/segmentos';
import { cn } from '@/lib/cn';
import { track } from '@/lib/track';
import { lerUtms } from '@/lib/utm';
import { linkWhatsApp } from '@/lib/whatsapp';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export type DadosLead = {
  nome: string;
  whatsapp: string;
  email: string;
  segmento: string;
  periodo: string;
  origem: string;
  consentimento: boolean;
  /** Honeypot: pessoas não veem este campo; se vier preenchido, é robô. */
  empresa: string;
  utm: Record<string, string>;
  /** Página por onde a pessoa entrou no site (e de onde veio). */
  paginaEntrada: string;
  /** Página em que o formulário foi enviado. */
  paginaFormulario: string;
};

export type ResultadoEnvio = { ok: true } | { ok: false; erro: string };

type Props = {
  /** Envio real (etapa 5: server action com Supabase + aviso por e-mail). */
  onEnviar: (dados: DadosLead) => Promise<ResultadoEnvio>;
  segmentoInicial?: string;
};

const ORIGENS = ['Instagram', 'Google', 'Indicação de outra família', 'Anúncio', 'Passei em frente à escola', 'Outro'];
const PERIODOS = ['Manhã', 'Tarde'];

/** (81) 98254-1643 — aceita 10 ou 11 dígitos. */
export function mascaraWhatsApp(valor: string) {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

type Erros = Partial<Record<'nome' | 'whatsapp' | 'email' | 'segmento' | 'periodo' | 'consentimento', string>>;

export function validarLead(
  d: Pick<DadosLead, 'nome' | 'whatsapp' | 'email' | 'segmento' | 'periodo' | 'consentimento'>,
): Erros {
  const erros: Erros = {};
  if (d.nome.trim().length < 2) erros.nome = 'Informe seu nome.';
  const digitos = d.whatsapp.replace(/\D/g, '');
  if (digitos.length < 10 || digitos.length > 11) erros.whatsapp = 'Informe o WhatsApp com DDD, ex.: (81) 90000-0000.';
  if (d.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim()))
    erros.email = 'Confira o e-mail — ele parece incompleto.';
  if (!d.segmento) erros.segmento = 'Escolha o segmento de interesse.';
  if (!d.periodo) erros.periodo = 'Escolha o melhor período para a visita.';
  if (!d.consentimento) erros.consentimento = 'Para enviar, marque a autorização de contato.';
  return erros;
}

export function LeadForm({ onEnviar, segmentoInicial = '' }: Props) {
  const id = useId();
  const formulario = useRef<HTMLFormElement>(null);
  const [estado, setEstado] = useState<'editando' | 'enviando' | 'enviado' | 'falhou'>('editando');
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
    const resultado = await onEnviar(dados);
    if (resultado.ok) {
      setNomeEnviado(dados.nome.trim().split(' ')[0]);
      setEstado('enviado');
      track('generate_lead', {
        segmento: dados.segmento,
        periodo: dados.periodo,
        origem: dados.origem || 'não informado',
      });
    } else {
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
          Não conseguimos enviar agora. Tente de novo em instantes ou fale direto pelo{' '}
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
            'group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brand-blue px-6 font-bold text-white transition-colors duration-150 hover:bg-brand-blue-hover sm:w-auto',
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
