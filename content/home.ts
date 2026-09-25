import { fotoCriattoLab } from '@/content/fotos';
import { siteConfig } from '@/site.config';

/**
 * Textos da Home (aprovados na etapa 1 — docs/etapa-1/proposta.md §4 e §5).
 * Títulos em duas batidas: `titulo` + `destaque` (a segunda, em itálico) — "às vezes",
 * como pede o briefing: quando o título é uma frase só, vai sem `destaque`, todo em romano.
 */

const ano = siteConfig.anoMatricula;

export const home = {
  hero: {
    eyebrow: `Matrículas ${ano} abertas · ${siteConfig.bairro}, ${siteConfig.cidade}`,
    titulo: 'Base forte para aprender.',
    destaque: 'Coragem para liderar.',
    subtitulo:
      'Da Educação Infantil, a partir de 1 ano, ao 3º ano do Ensino Médio. Com o Sistema Anglo e projetos de liderança, tecnologia e comunicação.',
    ctaPrimario: 'Agendar visita',
    ctaSecundario: 'Conhecer os segmentos',
    microcopy: `Visita guiada · sem compromisso · ${siteConfig.contato.horarioCurto}`,
    foto: 'famílias chegando pela entrada da escola, de manhã',
    legenda: 'entrada da escola, Tamarineira',
  },
  serie: {
    eyebrow: 'Encontre a série',
    titulo: 'Em que série a criança entra',
    destaque: `em ${ano}?`,
  },
  segmentos: {
    eyebrow: 'Segmentos',
    titulo: 'Quatro fases.',
    destaque: 'Cada uma no seu tempo.',
  },
  proposta: {
    eyebrow: 'Proposta pedagógica',
    titulo: 'Conteúdo que prepara.',
    destaque: 'Habilidades que ficam.',
    pilares: [
      {
        titulo: 'Base acadêmica do Sistema Anglo',
        texto: 'A base acadêmica da escola vem do Sistema Anglo. Os livros didáticos são da SOMOS Educação.',
        pendente: 'plataforma, avaliações e em quais segmentos o Sistema Anglo entra',
      },
      {
        titulo: 'Preparação para os principais vestibulares',
        texto: 'No Ensino Médio, o foco está no ENEM e no SSA.',
      },
      {
        titulo: 'Liderança, comunicação e empreendedorismo',
        texto: 'Na grade, com a disciplina Geração Líder, e nos projetos da escola.',
      },
    ],
  },
  projetos: {
    eyebrow: 'Projetos próprios',
    titulo: 'Do Chromebook ao podcast.',
    destaque: 'Aprender também é criar.',
  },
  estrutura: {
    eyebrow: 'Estrutura',
    titulo: 'Veja a escola antes da visita.',
    fotos: [
      { descricao: 'entrada da escola', legenda: 'entrada da escola, Tamarineira' },
      { descricao: 'sala do Criatto Lab', legenda: 'Criatto Lab, Tamarineira', foto: fotoCriattoLab },
      {
        descricao: 'espaço Google for Education, com os Chromebooks',
        legenda: 'espaço Google for Education, Tamarineira',
      },
      { descricao: 'centro de criação do Pod Criar', legenda: 'Pod Criar, Tamarineira' },
    ],
    cta: 'Conhecer a estrutura',
  },
  matricula: {
    eyebrow: `Matrículas ${ano}`,
    titulo: 'Da primeira visita à vaga garantida.',
    cta: 'Agendar visita',
    microcopy: 'Pelo WhatsApp · a mensagem já vai escrita',
  },
  duvidas: {
    eyebrow: 'Dúvidas frequentes',
    titulo: 'Perguntas de quem está escolhendo escola.',
    cta: 'Ver todas as dúvidas',
  },
  visita: {
    eyebrow: 'Visite a escola',
    titulo: 'A melhor forma de escolher',
    destaque: 'é conhecer.',
    cta: 'Agendar visita',
    microcopy: `Visita guiada · sem compromisso · ${siteConfig.contato.horarioCurto}`,
  },
} as const;
