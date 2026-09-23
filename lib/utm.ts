/**
 * UTMs e página de entrada. Quem chega por anúncio cai em qualquer página e só
 * depois vai ao formulário (/matriculas): por isso a captura roda no site todo
 * (components/layout/TrackClicks.tsx) e fica guardada na sessão.
 */

const CHAVES = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const ENTRADA = 'pagina_entrada';

export function guardarUtms() {
  try {
    const url = new URL(window.location.href);
    for (const chave of CHAVES) {
      const valor = url.searchParams.get(chave);
      if (valor) sessionStorage.setItem(chave, valor);
    }
    if (!sessionStorage.getItem(ENTRADA)) {
      sessionStorage.setItem(ENTRADA, `${url.pathname}${document.referrer ? ` (veio de ${document.referrer})` : ''}`);
    }
  } catch {
    // Armazenamento bloqueado (janela privada etc.): segue sem UTMs.
  }
}

export function lerUtms(): { utm: Record<string, string>; paginaEntrada: string } {
  const utm: Record<string, string> = {};
  let paginaEntrada = '';
  try {
    for (const chave of CHAVES) {
      const valor = sessionStorage.getItem(chave);
      if (valor) utm[chave] = valor;
    }
    paginaEntrada = sessionStorage.getItem(ENTRADA) ?? '';
  } catch {
    // idem
  }
  return { utm, paginaEntrada };
}
