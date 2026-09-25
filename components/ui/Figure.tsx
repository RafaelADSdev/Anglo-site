import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { Foto } from '@/lib/foto';

export type { Foto };

type Props = {
  /** Foto real. Sem ela, entra o placeholder neutro na proporção final (briefing §6). */
  foto?: Foto;
  /** O que a foto real deve mostrar — vira o texto do placeholder. */
  descricao: string;
  /** Lugar ou momento da foto; vira a legenda "Fotografia real · {legenda}" quando a foto existir. */
  legenda?: string;
  /** Legenda por cima da foto (canto superior esquerdo), para quando algo sobrepõe a base da imagem. */
  legendaDentro?: boolean;
  /** Classes de proporção, ex.: 'aspect-[4/3] lg:aspect-video'. */
  proporcao: string;
  /** Rótulo da proporção no placeholder, ex.: '16:9 (4:3 no celular)'. */
  rotuloProporcao?: string;
  /** Fundo do placeholder: 'areia' sobre o papel; 'claro' sobre seções areia. */
  fundoPlaceholder?: 'areia' | 'claro';
  sizes: string;
  priority?: boolean;
  arredondamento?: 'md' | 'lg';
  className?: string;
};

export function Figure({
  foto,
  descricao,
  legenda,
  legendaDentro,
  proporcao,
  rotuloProporcao,
  fundoPlaceholder = 'areia',
  sizes,
  priority,
  arredondamento = 'lg',
  className,
}: Props) {
  const raio = arredondamento === 'lg' ? 'rounded-lg' : 'rounded-md';
  // Sem foto real, sem legenda: "Fotografia real · …" não pode descrever um placeholder.
  const textoLegenda = foto && legenda ? `Fotografia real · ${legenda}` : null;

  return (
    <figure className={cn('m-0', className)}>
      <div
        className={cn(
          'relative w-full max-w-full overflow-hidden',
          raio,
          proporcao,
          !foto && 'ring-1 ring-line ring-inset',
          !foto && (fundoPlaceholder === 'claro' ? 'bg-surface' : 'bg-paper-2'),
        )}
      >
        {foto ? (
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn('object-cover', foto.enquadramento === 'topo' && 'object-top')}
          />
        ) : (
          <div
            role="img"
            aria-label={`Espaço reservado para foto real: ${descricao}`}
            className="grid h-full w-full place-items-center p-6 text-center"
          >
            <p className="max-w-[26em] text-small text-ink-muted">
              <span className="mb-2 block text-eyebrow font-extrabold text-ink uppercase">Foto real</span>
              {descricao.charAt(0).toUpperCase() + descricao.slice(1)}.
              {rotuloProporcao ? <span className="mt-1 block">Proporção final {rotuloProporcao}.</span> : null}
            </p>
          </div>
        )}
        {textoLegenda && legendaDentro ? (
          <figcaption className="absolute top-3 left-3 rounded-sm bg-surface/90 px-2.5 py-1 text-caption font-medium text-ink">
            {textoLegenda}
          </figcaption>
        ) : null}
      </div>
      {textoLegenda && !legendaDentro ? (
        <figcaption className="mt-3 text-caption font-medium text-ink-muted">{textoLegenda}</figcaption>
      ) : null}
    </figure>
  );
}
