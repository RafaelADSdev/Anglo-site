import { useId } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  /** Sobre o azul Anglo, a pincelada azul vira branca (como o friso em `stripe-invert`). */
  tom?: 'claro' | 'azul';
  className?: string;
};

/**
 * As três pinceladas do logo (azul em degradê, amarelo, vermelho), redesenhadas
 * em traço seco: o segundo ornamento do site, ao lado do friso. Só decoração —
 * `aria-hidden` — e sempre nos mesmos lugares (ver DESIGN.md, A Regra das Pinceladas).
 */
export function Pinceladas({ tom = 'claro', className }: Props) {
  const id = useId().replace(/:/g, '');
  const degrade = `pinc-azul-${id}`;
  const cerdas = `pinc-cerdas-${id}`;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 190 260"
      className={cn('pointer-events-none block h-auto select-none', className)}
    >
      <defs>
        <linearGradient id={degrade} x1="0" y1="1" x2="0.6" y2="0">
          <stop offset="0" stopColor="var(--color-brand-sky)" />
          <stop offset="0.7" stopColor="var(--color-brand-blue)" />
        </linearGradient>
        {/* Falhas finas no sentido do traço: o pincel seco do logo, sem imagem. */}
        <mask id={cerdas} maskUnits="userSpaceOnUse" x="0" y="0" width="190" height="260">
          <rect width="190" height="260" fill="white" />
          <g stroke="black" strokeLinecap="round" fill="none">
            <path d="M17 258 L131 26" strokeWidth="1.2" strokeDasharray="60 9 24 14 90 8" />
            <path d="M33 258 L146 28" strokeWidth="0.9" strokeDasharray="30 12 70 6 40 20" />
            <path d="M71 258 L160 76" strokeWidth="1" strokeDasharray="44 10 80 16" />
            <path d="M108 258 L166 138" strokeWidth="0.9" strokeDasharray="36 8 50" />
          </g>
        </mask>
      </defs>
      <g mask={`url(#${cerdas})`}>
        <path
          d="M4 258 L120 30 L124 12 L130 26 L137 2 L142 22 L150 8 L153 28 L160 18 L159 40 L48 258 Z"
          fill={tom === 'azul' ? 'var(--color-white)' : `url(#${degrade})`}
        />
        <path
          d="M56 258 L150 72 L154 56 L160 70 L166 50 L171 68 L178 58 L178 80 L88 258 Z"
          fill="var(--color-brand-yellow)"
        />
        <path
          d="M96 258 L157 138 L160 124 L166 136 L172 118 L176 134 L184 128 L181 146 L124 258 Z"
          fill="var(--color-brand-red)"
        />
      </g>
    </svg>
  );
}
