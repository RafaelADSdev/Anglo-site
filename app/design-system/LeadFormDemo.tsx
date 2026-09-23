'use client';

import { LeadForm } from '@/components/blocks/LeadForm';

/** Só para a página de design system: simula um envio bem-sucedido, sem enviar nada. */
export function LeadFormDemo() {
  return <LeadForm onEnviar={() => new Promise((ok) => setTimeout(() => ok({ ok: true }), 700))} />;
}
