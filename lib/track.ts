/**
 * Eventos de medição (briefing §9). Vão para o dataLayer; o GTM decide o que
 * disparar — e só dispara tags de marketing depois do consentimento (etapa 5).
 */

export type Evento = 'generate_lead' | 'whatsapp_click' | 'cta_click' | 'video_play';

type Parametros = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: Evento, params: Parametros = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/**
 * Atributos para declarar rastreio em componentes de servidor:
 * `<a {...trackAttrs('cta_click', { origem: 'hero' })}>`. O listener global
 * (components/layout/TrackClicks.tsx) lê e envia.
 */
export function trackAttrs(event: Evento, params: Record<string, string> = {}) {
  const attrs: Record<string, string> = { 'data-track': event };
  for (const [k, v] of Object.entries(params)) attrs[`data-track-${k}`] = v;
  return attrs;
}
