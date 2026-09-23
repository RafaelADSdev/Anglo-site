import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Miniatura do vídeo institucional (VideoLite): servida pelo próprio site, sem o navegador falar com o YouTube.
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' }],
  },
  experimental: {
    // CSS no <head> em vez de <link>: some a requisição que bloqueia a primeira pintura.
    // Medido com rede e CPU estranguladas (Lighthouse, celular): LCP de ~2,1 s para ~1,3 s,
    // ao custo de ~33 KB a mais no HTML de cada página. Vale para quem chega pela primeira vez.
    inlineCss: true,
  },
};

export default nextConfig;
