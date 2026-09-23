import type { MetadataRoute } from 'next';
import { hrefSegmento, segmentos } from '@/content/segmentos';
import { urlAbsoluta } from '@/lib/metadata';

/** Todas as páginas públicas. /design-system fica de fora (só existe em homologação). */
export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: Array<{ caminho: string; prioridade: number }> = [
    { caminho: '/', prioridade: 1 },
    { caminho: '/matriculas', prioridade: 0.9 },
    { caminho: '/segmentos', prioridade: 0.8 },
    ...segmentos.map((s) => ({ caminho: hrefSegmento(s), prioridade: 0.8 })),
    { caminho: '/a-escola', prioridade: 0.7 },
    { caminho: '/projetos', prioridade: 0.7 },
    { caminho: '/estrutura', prioridade: 0.7 },
    { caminho: '/contato', prioridade: 0.6 },
    { caminho: '/privacidade', prioridade: 0.2 },
  ];
  return paginas.map(({ caminho, prioridade }) => ({ url: urlAbsoluta(caminho), priority: prioridade }));
}
