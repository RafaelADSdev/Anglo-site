import type { Metadata, Viewport } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HomologBanner } from '@/components/layout/HomologBanner';
import { Revelar } from '@/components/layout/Revelar';
import { SkipLink } from '@/components/layout/SkipLink';
import { TrackClicks } from '@/components/layout/TrackClicks';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { siteConfig } from '@/site.config';
import { fraunces, manrope } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.nome} · ${siteConfig.bairro}, ${siteConfig.cidade}`,
    template: `%s · ${siteConfig.nomeCurto}`,
  },
  description: `Escola na ${siteConfig.bairro}, Zona Norte do Recife, da Educação Infantil (a partir de 1 ano) ao 3º ano do Ensino Médio. Sistema Anglo e projetos de liderança, tecnologia e comunicação.`,
  applicationName: siteConfig.nome,
  // Homologação: fora do Google até a aprovação (briefing §5 e §11).
  robots: siteConfig.emHomologacao
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: siteConfig.nome,
  },
  other: {
    'facebook-domain-verification': siteConfig.medicao.facebookDomainVerification,
  },
};

// Sem maximum-scale: o zoom fica liberado (briefing §4 e WCAG 1.4.4).
export const viewport: Viewport = {
  themeColor: '#fbf8f1',
  colorScheme: 'light',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <SkipLink />
        <HomologBanner />
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <TrackClicks />
        <Revelar />
      </body>
    </html>
  );
}
