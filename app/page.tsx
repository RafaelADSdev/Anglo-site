import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import {
  DuvidasSection,
  EstruturaSection,
  MatriculaSection,
  ProjetosSection,
  PropostaSection,
  SegmentosSection,
  VisitaSection,
} from '@/components/home/Sections';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/**
 * Home (briefing §8). Resultados e Depoimentos só entram com material real e
 * autorizado — sem dados confirmados, as seções não são renderizadas.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <SegmentosSection />
      <PropostaSection />
      <ProjetosSection />
      <EstruturaSection />
      <MatriculaSection />
      <DuvidasSection />
      <VisitaSection />
    </>
  );
}
