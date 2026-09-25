import { cn } from '@/lib/cn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Breadcrumbs, type Migalha } from './Breadcrumbs';

type Props = {
  migalhas: readonly Migalha[];
  eyebrow: string;
  titulo: string;
  destaque?: string;
  lead: string;
  /** CTAs do topo, marcados com `data-fab-oculta`: o WhatsApp flutuante só aparece depois deles. */
  acoes?: React.ReactNode;
  /** Microcopy de confiança, logo abaixo das ações. */
  microcopy?: string;
  /** Foto ou vídeo. Com mídia, vale a composição do hero da Home: título em largura total; texto (5) e mídia (7). */
  midia?: React.ReactNode;
  /** Fundo da faixa (a página de segmento usa o suave do segmento). */
  fundo?: string;
  /** Cor da segunda batida do título (a página de segmento usa a tinta do segmento). */
  corDestaque?: string;
  /** Conteúdo no pé do hero: índice da página, régua de séries, percurso. */
  children?: React.ReactNode;
  /** Papel de caderno no fundo, desfeito para baixo (como no topo da Home). */
  caderno?: boolean;
};

/**
 * Topo das páginas internas: trilha, eyebrow e H1 em Display. Sem mídia, título
 * (7) e texto (5) dividem a linha, com o texto alinhado à base do título.
 */
export function PageHero({
  migalhas,
  eyebrow,
  titulo,
  destaque,
  lead,
  acoes,
  microcopy,
  midia,
  fundo = 'bg-paper',
  corDestaque,
  children,
  caderno,
}: Props) {
  const cabeca = (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading
        as="h1"
        id="pagina-titulo"
        titulo={titulo}
        destaque={destaque}
        tamanho="display"
        corDestaque={corDestaque}
        className="mt-5"
      />
    </>
  );

  const texto = (
    <>
      <p className="max-w-[33em] text-lead text-ink-muted">{lead}</p>
      {acoes ? (
        <div data-fab-oculta className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          {acoes}
        </div>
      ) : null}
      {microcopy ? <p className="mt-4 text-small text-ink-muted">{microcopy}</p> : null}
    </>
  );

  return (
    <section
      aria-labelledby="pagina-titulo"
      className={cn('pt-[clamp(0.25rem,0.1rem+0.8vw,1rem)] pb-(--section-y)', caderno && 'relative isolate', fundo)}
    >
      {caderno ? (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 caderno [mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)]"
        />
      ) : null}
      <div className="wrap">
        <Breadcrumbs itens={migalhas} />
        {midia ? (
          <div className="mt-[clamp(1rem,0.6rem+1.5vw,2rem)] grid gap-y-[clamp(2rem,1.5rem+1.5vw,2.75rem)] lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-12">{cabeca}</div>
            <div className="lg:col-span-5">{texto}</div>
            <div className="lg:col-span-7">{midia}</div>
          </div>
        ) : (
          <div className="mt-[clamp(1rem,0.6rem+1.5vw,2rem)] grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">{cabeca}</div>
            <div className="lg:col-span-5 lg:self-end">{texto}</div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
