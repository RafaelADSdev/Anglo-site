import { segmentos, type Segmento } from '@/content/segmentos';
import { siteConfig } from '@/site.config';

/** Modelos de mensagem do WhatsApp (briefing §9). O ano vem do site.config. */

const ano = siteConfig.anoMatricula;

export const mensagens = {
  padrao: () => `Olá! Vim pelo site e gostaria de informações sobre as matrículas ${ano}.`,
  segmento: (s: Segmento) => `Olá! Vim pelo site e gostaria de informações sobre ${s.artigo} ${s.nome} para ${ano}.`,
  serie: (serie: string) => `Olá! Vim pelo site e gostaria de informações sobre o ${serie} para ${ano}.`,
  projeto: (nome: string) => `Olá! Vim pelo site e gostaria de saber mais sobre o projeto ${nome}.`,
  /** Seção de inclusão e acessibilidade (/a-escola#inclusao). */
  inclusao: () => 'Olá! Vim pelo site e gostaria de conversar sobre inclusão e acessibilidade na escola.',
  /**
   * Agendamento da visita: o "Agendar visita" do card de fecho de toda página e o botão verde de
   * /matriculas#agendar. Texto fixo, definido em 25/09/2026.
   */
  visita: () => 'Olá! Gostaria de agendar uma visita para conhecer o Anglo Tamarineira.',
};

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${siteConfig.contato.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagem do botão flutuante conforme a página em que a pessoa está. */
export function contextoWhatsApp(pathname: string): { mensagem: string; segmento: string } {
  const seg = segmentos.find((s) => pathname.startsWith(`/segmentos/${s.slug}`));
  if (seg) return { mensagem: mensagens.segmento(seg), segmento: seg.id };
  return { mensagem: mensagens.padrao(), segmento: 'geral' };
}
