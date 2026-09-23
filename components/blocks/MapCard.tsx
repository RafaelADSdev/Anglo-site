'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

type Props = { endereco: string; linkComoChegar?: string | null };

/**
 * Mapa do Google carregado só no clique: nenhuma requisição (nem cookie) de
 * terceiro antes de a pessoa pedir, e o carregamento da página fica leve.
 */
export function MapCard({ endereco, linkComoChegar }: Props) {
  const [aberto, setAberto] = useState(false);
  const busca = encodeURIComponent(endereco);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-paper-2 ring-1 ring-line">
      {aberto ? (
        <iframe
          src={`https://www.google.com/maps?q=${busca}&output=embed`}
          title={`Mapa: ${endereco}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <div className="grid h-full place-items-center p-6 text-center">
          <div>
            <Icon name="map-pin" size={28} className="mx-auto text-brand-blue" />
            <p className="mt-3 text-small text-ink">{endereco}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setAberto(true)}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-surface px-4 text-small font-bold text-ink ring-1 ring-line hover:ring-ink"
              >
                Ver no mapa
              </button>
              {linkComoChegar ? (
                <a
                  href={linkComoChegar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-bold text-ink link-underline"
                >
                  Como chegar
                  <Icon name="arrow-up-right" className="text-brand-blue" />
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
