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
  /**
   * Legenda por cima da foto (canto superior esquerdo), para quando algo sobrepõe a
   * base da imagem. 'lg': por cima só no desktop, onde a foto precisa terminar
   * junto com a vizinha; no celular, a legenda volta para baixo da foto.
   */
  legendaDentro?: boolean | 'lg';
  /** Classes de proporção, ex.: 'aspect-[4/3] lg:aspect-video'. */
  proporcao: string;
  /** Rótulo da proporção no placeholder, ex.: '16:9 (4:3 no celular)'. */
  rotuloProporcao?: string;
  /** Fundo do placeholder: 'areia' sobre o papel; 'claro' sobre seções areia; 'escuro' sobre a tinta. */
  fundoPlaceholder?: 'areia' | 'claro' | 'escuro';
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
  const escuro = fundoPlaceholder === 'escuro';

  return (
    <figure className={cn('m-0', legendaDentro === 'lg' && 'relative', className)}>
      <div
        className={cn(
          'relative w-full max-w-full overflow-hidden',
          raio,
          proporcao,
          // Sem foto, o espaço vira uma folha quadriculada à espera da foto: estado, não enfeite.
          !foto && (escuro ? 'bg-white/5 ring-1 ring-white/15 ring-inset' : 'ring-1 ring-line ring-inset'),
          !foto && !escuro && (fundoPlaceholder === 'claro' ? 'bg-surface' : 'bg-paper-2'),
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
            className={cn(
              'grid h-full w-full place-items-center p-6 text-center',
              escuro ? 'caderno-escuro' : 'caderno',
            )}
          >
            <p className={cn('max-w-[26em] text-small', escuro ? 'text-on-ink-muted' : 'text-ink-muted')}>
              <span
                className={cn('mb-2 block text-eyebrow font-extrabold uppercase', escuro ? 'text-white' : 'text-ink')}
              >
                Foto real
              </span>
              {descricao.charAt(0).toUpperCase() + descricao.slice(1)}.
              {rotuloProporcao ? <span className="mt-1 block">Proporção final {rotuloProporcao}.</span> : null}
            </p>
          </div>
        )}
        {textoLegenda && legendaDentro === true ? (
          <figcaption className="absolute top-3 left-3 rounded-sm bg-surface/90 px-2.5 py-1 text-caption font-medium text-ink">
            {textoLegenda}
          </figcaption>
        ) : null}
      </div>
      {textoLegenda && legendaDentro !== true ? (
        <figcaption
          className={cn(
            'mt-3 text-caption font-medium',
            escuro ? 'text-on-ink-muted' : 'text-ink-muted',
            legendaDentro === 'lg' &&
              'lg:absolute lg:top-3 lg:left-3 lg:mt-0 lg:rounded-sm lg:bg-surface/90 lg:px-2.5 lg:py-1 lg:text-ink',
          )}
        >
          {textoLegenda}
        </figcaption>
      ) : null}
    </figure>
  );
}
