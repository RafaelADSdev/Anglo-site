'use client';

import { useSearchParams } from 'next/navigation';
import { segmentos } from '@/content/segmentos';
import { LeadForm } from '@/components/blocks/LeadForm';
import { enviarLead } from './actions';

/** Formulário com o segmento pré-marcado quando a pessoa vem de /matriculas?segmento=<slug>. */
export function AgendarVisita() {
  const pedido = useSearchParams().get('segmento') ?? '';
  const segmentoInicial = segmentos.some((s) => s.slug === pedido) ? pedido : '';
  return <LeadForm key={segmentoInicial} onEnviar={enviarLead} segmentoInicial={segmentoInicial} />;
}

/** Enquanto a URL não foi lida no navegador: o mesmo formulário, sem segmento marcado. */
export function AgendarVisitaSemSegmento() {
  return <LeadForm onEnviar={enviarLead} />;
}
