import { siteConfig } from '@/site.config';

/**
 * Textos das páginas internas (etapa 4). Só os fatos da base de conteúdo do
 * briefing (§10); o que falta fica com `pendente` e aparece como
 * "A confirmar" em homologação — em produção, o bloco não é renderizado.
 */

const { anoMatricula: ano, bairro, cidade } = siteConfig;

export const paginas = {
  escola: {
    meta: {
      title: 'A escola',
      description: `Proposta pedagógica e Sistema Anglo, da Educação Infantil ao Ensino Médio, na ${bairro}, Zona Norte do ${cidade}.`,
    },
    eyebrow: 'A escola',
    titulo: 'Uma escola inteira.',
    destaque: 'Da Educação Infantil ao Ensino Médio.',
    lead: `Na ${bairro}, Zona Norte do ${cidade}, a escola acompanha crianças a partir de 1 ano até o 3º ano do Ensino Médio, com o Sistema Anglo e cinco projetos próprios.`,
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
          texto: 'No Ensino Médio, o foco está no ENEM, no SSA e no desenvolvimento de soft skills.',
          link: { href: '/segmentos/ensino-medio', rotulo: 'Conhecer o Ensino Médio' },
        },
        {
          titulo: 'Liderança, comunicação e empreendedorismo',
          texto:
            'Na grade, com a Geração Líder, disciplina que desenvolve hard e soft skills; e nos projetos da escola.',
          link: { href: '/projetos#geracao-lider', rotulo: 'Conhecer a Geração Líder' },
        },
      ],
    },
    projetos: { eyebrow: 'Projetos próprios', titulo: 'Cinco projetos da escola.', cta: 'Ver os projetos' },
    historia: {
      eyebrow: 'História',
      titulo: `A unidade ${bairro} e a rede Anglo Líder.`,
      pendente: 'anos de história da unidade e outras unidades da rede Anglo Líder',
    },
    inclusao: {
      eyebrow: 'Inclusão e acessibilidade',
      titulo: 'Inclusão e acessibilidade.',
      pendente: 'práticas de inclusão e itens de acessibilidade — diretórios citam elevador, rampas e sala de AEE',
    },
  },

  segmentos: {
    meta: {
      title: 'Segmentos',
      description: `Educação Infantil (a partir de 1 ano), Fundamental 1, Fundamental 2 e Ensino Médio na ${bairro}, ${cidade}. Veja em que série a criança entra em ${ano}.`,
    },
    eyebrow: 'Segmentos',
    titulo: 'Quatro fases.',
    destaque: 'Cada uma no seu tempo.',
    lead: 'Da Educação Infantil, a partir de 1 ano, ao 3º ano do Ensino Médio.',
    tabela: {
      eyebrow: `Séries em ${ano}`,
      titulo: 'Data de nascimento e série.',
      lead: 'Pela data de corte de 31 de março. A secretaria confirma a série na matrícula.',
    },
  },

  /** Rótulos comuns às quatro páginas de segmento. */
  segmento: {
    eyebrow: `Matrículas ${ano} abertas`,
    series: 'Séries',
    serieNascimento: 'Ver a série pela data de nascimento',
    vive: { eyebrow: 'No dia a dia' },
    projetos: { eyebrow: 'Projetos', tituloGeral: 'Projetos da escola.', cta: 'Ver os cinco projetos' },
    duvidas: { eyebrow: 'Dúvidas frequentes', titulo: 'Perguntas de quem está escolhendo escola.' },
    percurso: { eyebrow: 'Segmentos', titulo: 'Veja as outras fases.' },
  },

  projetos: {
    meta: {
      title: 'Projetos',
      description:
        'Google for Education, Criatto Lab, Geração Líder, Além do Vest e Pod Criar: os cinco projetos próprios da escola.',
    },
    eyebrow: 'Projetos próprios',
    titulo: 'Do Chromebook ao podcast.',
    destaque: 'Aprender também é criar.',
    lead: 'Tecnologia, criação, liderança e carreiras em cinco projetos da escola.',
  },

  estrutura: {
    meta: {
      title: 'Estrutura',
      description: `Os espaços da unidade ${bairro}: Google for Education, Criatto Lab, Pod Criar e mais.`,
    },
    eyebrow: 'Estrutura',
    titulo: 'Veja a escola antes da visita.',
    lead: `Os espaços da unidade ${bairro}, ambiente por ambiente.`,
    ambientes: { eyebrow: 'Ambientes', titulo: 'Onde os projetos acontecem.' },
    outros: { eyebrow: 'Outros espaços', titulo: 'Os demais ambientes da escola.' },
    acessibilidade: {
      eyebrow: 'Acessibilidade',
      titulo: 'Acessibilidade.',
      pendente: 'itens de acessibilidade — diretórios citam elevador, rampas e sala de AEE',
    },
  },

  matriculas: {
    meta: {
      title: `Matrículas ${ano}`,
      description: `Agende uma visita para as Matrículas ${ano} pelo WhatsApp. Atendimento de segunda a sexta, das 8h às 17h.`,
    },
    eyebrow: 'Matrículas abertas',
    titulo: `Matrículas ${ano}.`,
    destaque: 'Comece pela visita.',
    lead: 'A visita é agendada pelo WhatsApp, com a mensagem já escrita. Atendimento de segunda a sexta, das 8h às 17h.',
    agendar: {
      eyebrow: 'Agendar visita',
      titulo: 'Marque a visita pelo WhatsApp.',
      texto:
        'Ao clicar no botão abaixo, você é levado ao WhatsApp da escola com esta mensagem já escrita. É só enviar: a equipe de matrículas responde para combinar o dia e o horário da visita.',
      rotuloMensagem: 'Mensagem que já vai escrita',
      botao: 'Agendar visita pelo WhatsApp',
      microcopy: 'Nada é enviado sem você: a mensagem só sai quando você toca em enviar.',
    },
    conversa: 'Prefere conversar antes?',
    passos: { eyebrow: 'Como funciona', titulo: 'Da primeira visita à vaga garantida.' },
    documentos: {
      eyebrow: 'Documentos',
      titulo: 'O que levar para a matrícula.',
    },
    duvidas: { eyebrow: 'Dúvidas frequentes', titulo: 'Perguntas de quem está escolhendo escola.' },
  },

  contato: {
    meta: {
      title: 'Contato',
      description: `WhatsApp, horário de atendimento e redes do Colégio Anglo Líder Tamarineira, na ${bairro}, ${cidade}.`,
    },
    eyebrow: 'Contato',
    titulo: 'Fale com a escola.',
    lead: `WhatsApp, horário e redes da unidade ${bairro}.`,
  },

  privacidade: {
    meta: {
      title: 'Política de privacidade',
      description:
        'Como o site trata seus dados, como funciona o agendamento pelo WhatsApp e como funcionam os cookies.',
    },
    eyebrow: 'Privacidade',
    titulo: 'Política de privacidade.',
    lead: 'Como o site trata seus dados, como funciona o agendamento pelo WhatsApp e como funcionam os cookies.',
  },
} as const;
