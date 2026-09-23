'use server';

import { headers } from 'next/headers';
import { normalizarLead, validarLead, type ResultadoEnvio } from '@/lib/lead';

/**
 * Limite simples por IP: 5 envios a cada 10 minutos. Em memória, vale por
 * instância do servidor — na etapa 5, com o Supabase, passa a ser durável.
 */
const JANELA_MS = 10 * 60 * 1000;
const MAX_ENVIOS = 5;
const enviosPorIp = new Map<string, number[]>();

function dentroDoLimite(ip: string) {
  const agora = Date.now();
  const recentes = (enviosPorIp.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  if (recentes.length >= MAX_ENVIOS) {
    enviosPorIp.set(ip, recentes);
    return false;
  }
  recentes.push(agora);
  enviosPorIp.set(ip, recentes);
  return true;
}

/** Recebe o pedido de visita. A validação do navegador é repetida aqui: nada que vem de fora é confiável. */
export async function enviarLead(entrada: unknown): Promise<ResultadoEnvio> {
  const dados = normalizarLead(entrada);

  // Honeypot preenchido: é robô. Responde "ok" para não ensinar o robô, e nada é gravado.
  if (dados.empresa) return { ok: true };

  if (Object.keys(validarLead(dados)).length > 0) return { ok: false, erro: 'dados-invalidos' };

  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() || 'desconhecido';
  if (!dentroDoLimite(ip)) return { ok: false, erro: 'limite' };

  // [A CONFIRMAR — etapa 5] gravar em `leads` (Supabase, com RLS) e avisar a equipe
  // de matrículas por e-mail (Resend). Enquanto isso não existe, o envio não finge
  // sucesso: o formulário avisa e oferece o WhatsApp.
  return { ok: false, erro: 'nao-configurado' };
}
