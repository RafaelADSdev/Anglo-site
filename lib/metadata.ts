import type { Metadata } from 'next';
import { siteConfig } from '@/site.config';

/**
 * Metadados de uma página interna: título, descrição, canonical e Open Graph.
 * O `openGraph` da página substitui o do layout inteiro (não mescla), por isso
 * repete tipo, idioma e nome do site.
 */
export function metadadosDaPagina({
  titulo,
  descricao,
  caminho,
}: {
  titulo: string;
  descricao: string;
  caminho: string;
}): Metadata {
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: siteConfig.nome,
      title: `${titulo} · ${siteConfig.nomeCurto}`,
      description: descricao,
      url: caminho,
    },
  };
}

export const urlAbsoluta = (caminho: string) => new URL(caminho, siteConfig.url).toString();
