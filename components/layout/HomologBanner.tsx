import { siteConfig } from '@/site.config';

/** Faixa de homologação (briefing §5): some quando NEXT_PUBLIC_SITE_ENV=producao. */
export function HomologBanner() {
  if (!siteConfig.emHomologacao) return null;
  return (
    <aside aria-label="Aviso de homologação" className="bg-infantil-soft px-4 py-2 text-center text-caption text-ink">
      <strong className="font-extrabold">Ambiente de homologação</strong> · textos e fotos em validação com a escola
    </aside>
  );
}
