import { aConfirmar, type Talvez } from '@/lib/pending';

export type ItemMenu = { rotulo: string; href: string };

export const menuPrincipal: readonly ItemMenu[] = [
  { rotulo: 'A Escola', href: '/a-escola' },
  { rotulo: 'Segmentos', href: '/segmentos' },
  { rotulo: 'Projetos', href: '/projetos' },
  { rotulo: 'Estrutura', href: '/estrutura' },
  { rotulo: 'Matrículas', href: '/matriculas' },
  { rotulo: 'Contato', href: '/contato' },
];

/** Destino de todo "Agendar visita": o bloco que explica e abre o WhatsApp com a mensagem pronta. */
export const hrefAgendar = () => '/matriculas#agendar';

/** Links do bloco "Para famílias" no rodapé (plataformas que a escola já usa). */
export const paraFamilias: Talvez<readonly ItemMenu[]> = aConfirmar('plataformas usadas pelas famílias matriculadas');
