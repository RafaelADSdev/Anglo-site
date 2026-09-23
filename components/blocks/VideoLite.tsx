'use client';

import Image from 'next/image';
import { useState } from 'react';
import { track } from '@/lib/track';
import { Icon } from '@/components/ui/Icon';

type Props = { id: string; titulo: string; className?: string };

/**
 * Vídeo do YouTube carregado só no clique (briefing §8 e §11): até lá, a página
 * mostra a miniatura servida pelo próprio site (next/image) e o navegador não
 * fala com o YouTube. O player usa youtube-nocookie.
 */
export function VideoLite({ id, titulo, className }: Props) {
  const [tocando, setTocando] = useState(false);

  return (
    <div className={`relative aspect-video overflow-hidden rounded-md bg-ink ${className ?? ''}`}>
      {tocando ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setTocando(true);
            track('video_play', { video: id });
          }}
          className="group absolute inset-0 grid size-full cursor-pointer place-items-center"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover opacity-85 transition-opacity duration-250 group-hover:opacity-100"
          />
          <span className="relative inline-flex min-h-12 items-center gap-3 rounded-full bg-surface px-5 font-bold text-ink shadow-float">
            <span className="grid size-8 place-items-center rounded-full bg-brand-blue text-white">
              <Icon name="play" size={14} />
            </span>
            Assistir ao {titulo.charAt(0).toLowerCase() + titulo.slice(1)}
          </span>
        </button>
      )}
    </div>
  );
}
