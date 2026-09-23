import localFont from 'next/font/local';
import { Manrope } from 'next/font/google';

/**
 * Fraunces instanciada (opsz 72 · SOFT 50; itálico com WONK) — 82 KB no total.
 * Procedência e licença: app/fonts/README.md.
 */
export const fraunces = localFont({
  src: [
    { path: './fonts/fraunces-72-soft50-normal.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/fraunces-72-soft50-italic.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-fraunces',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});
