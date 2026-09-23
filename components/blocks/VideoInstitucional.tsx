import { confirmado, isPendente } from '@/lib/pending';
import { siteConfig } from '@/site.config';
import { cn } from '@/lib/cn';
import { Pending } from '@/components/ui/Pending';
import { VideoLite } from './VideoLite';

/** O vídeo aparece com o ID confirmado; em homologação, o espaço dele fica marcado. */
export const temVideoInstitucional = Boolean(confirmado(siteConfig.videoInstitucional)) || siteConfig.emHomologacao;

/**
 * Vídeo institucional, carregado só no clique (VideoLite). Sem o vídeo público,
 * em homologação entra um espaço neutro na proporção final; em produção, nada.
 */
export function VideoInstitucional({ fundoPlaceholder = 'claro' }: { fundoPlaceholder?: 'areia' | 'claro' }) {
  const video = confirmado(siteConfig.videoInstitucional);
  if (video) return <VideoLite id={video.id} titulo={video.titulo} />;
  if (!siteConfig.emHomologacao) return null;

  return (
    <div
      className={cn(
        'grid aspect-video place-items-center rounded-md p-6 text-center ring-1 ring-line ring-inset',
        fundoPlaceholder === 'claro' ? 'bg-surface' : 'bg-paper-2',
      )}
    >
      <p className="max-w-[28em] text-small text-ink-muted">
        <span className="mb-2 block text-eyebrow font-extrabold text-ink uppercase">Vídeo institucional</span>
        Entra aqui, carregado só no clique, quando o vídeo estiver público.
        {isPendente(siteConfig.videoInstitucional) ? (
          <span className="mt-3 block">
            <Pending>{siteConfig.videoInstitucional.aConfirmar}</Pending>
          </span>
        ) : null}
      </p>
    </div>
  );
}
