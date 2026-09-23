import type { MetadataRoute } from 'next';
import { urlAbsoluta } from '@/lib/metadata';
import { siteConfig } from '@/site.config';

/** Homologação fica fora de todo buscador (briefing §5 e §11); produção libera tudo e aponta o sitemap. */
export default function robots(): MetadataRoute.Robots {
  if (siteConfig.emHomologacao) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/design-system' },
    sitemap: urlAbsoluta('/sitemap.xml'),
  };
}
