/* ============================================================================
   CONFIGURAÇÃO CENTRAL DO PRODUTO
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para colocar a página no ar.
   Tudo que ainda não foi informado está marcado como placeholder no formato
   "[ALGUMA COISA]" — a interface renderiza esses valores destacados em âmbar,
   para que seja impossível publicar sem preencher.

   Regra do projeto: nada foi inventado. Preço, garantia, credenciais,
   depoimentos e números são placeholders até você fornecer os dados reais.
   ============================================================================ */

/** Marca um valor como pendente de preenchimento. */
export const P = (label: string) => `[${label}]`;

/** true quando o valor ainda é um placeholder não preenchido. */
export const isPlaceholder = (value: string | undefined | null): boolean =>
  typeof value === 'string' && /^\[.+\]$/.test(value.trim());

export type Module = {
  number: string;
  title: string;
  description: string;
  outcome: string;
};

export type Bonus = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const site = {
  /* ---------------------------------------------------------------- MARCA */
  brand: {
    /**
     * Nome da clínica, exibido no header.
     * Lido do @ da arte oficial (@clínicapsiquear) — confirme a grafia
     * (Psiquear x Psychear) antes de publicar.
     */
    name: 'Clínica Psiquear',
    shortName: 'CP',
    logoSrc: null as string | null, // ex.: '/images/logo.svg'
    tagline: 'Minicurso online para profissionais de saúde mental',
  },

  /** Nome oficial do minicurso, conforme a arte de divulgação. */
  course: {
    name: 'Transtornos de Humor: Compreensão, Avaliação e Manejo Clínico',
    shortName: 'Transtornos de Humor',
    format: 'Minicurso online',
  },

  /* ------------------------------------------------------------- CONTATO */
  contact: {
    /** WhatsApp da arte oficial. Só dígitos no link, com DDI 55. */
    whatsapp: '(11) 4309-0533',
    whatsappUrl:
      'https://wa.me/551143090533?text=' +
      encodeURIComponent(
        'Olá! Tenho uma dúvida sobre o minicurso Transtornos de Humor.',
      ),
    instagram: '@clínicapsiquear',
    instagramUrl: 'https://instagram.com/clinicapsiquear',
  },

  /* ------------------------------------------------------------------ SEO */
  seo: {
    title:
      'Transtornos de Humor: Compreensão, Avaliação e Manejo Clínico — Minicurso Online',
    description:
      'Minicurso online e aplicado para profissionais de saúde mental: compreender os transtornos de humor na prática, refinar o diagnóstico diferencial e definir um manejo clínico mais seguro.',
    /** Trocar pelo domínio real antes de publicar. */
    url: P('https://SEUDOMINIO.com.br'),
    /** Gerada a partir da arte oficial, em 1200x630 (JPEG — SVG não é lido
     *  pelo WhatsApp nem pelo Facebook). */
    ogImage: '/images/og-image.jpg',
    locale: 'pt_BR',
  },

  /* -------------------------------------------------------------- CHECKOUT */
  checkout: {
    /**
     * NÃO coloque a URL aqui. Defina NEXT_PUBLIC_HOTMART_CHECKOUT_URL no .env.
     * Este valor é apenas o fallback visível caso a variável não exista.
     */
    fallbackUrl: P('URL DO CHECKOUT HOTMART'),
    /** Código de rastreio da Hotmart (opcional): ?sck=... */
    sckParam: process.env.NEXT_PUBLIC_HOTMART_SCK ?? '',
    microcopy: 'Você será direcionado com segurança para o checkout da Hotmart.',
  },

  /* ----------------------------------------------------------------- HERO */
  hero: {
    preHeadline: 'Minicurso online para profissionais de saúde mental',
    /**
     * Variantes de headline prontas para teste A/B.
     * Selecione por query string: ?v=a | ?v=b | ?v=c (ver lib/ab.ts)
     */
    headlines: {
      b: {
        // padrão — orientada a benefício
        lead: 'Conduza casos de depressão e bipolaridade com um',
        highlight: 'raciocínio clínico claro',
        tail: '— do primeiro atendimento ao manejo.',
      },
      a: {
        // emocional
        lead: 'Quando o caso envolve humor, a',
        highlight: 'insegurança chega antes do diagnóstico',
        tail: '. Dá para mudar isso.',
      },
      c: {
        // orientada a problema
        lead: 'Depressão ou bipolaridade? Um',
        highlight: 'erro de leitura',
        tail: 'custa meses na evolução do paciente.',
      },
    },
    subheadline:
      'Um minicurso direto ao ponto para compreender os transtornos de humor na prática, refinar o diagnóstico diferencial e definir um manejo mais seguro. Conteúdo aplicável, com foco na clínica real.',
    /**
     * Versão curta exibida SÓ no mobile (< 640px). Mantém a promessa e economiza
     * ~3 linhas de altura, para o CTA caber na primeira tela do celular.
     */
    subheadlineMobile:
      'Diagnóstico diferencial e manejo de transtornos de humor, aplicados à clínica real — sem excesso de teoria.',
    cta: 'Quero garantir minha vaga',
    /** Rótulo curto para a barra fixa do mobile. */
    ctaShort: 'Quero minha vaga',
    /** Rótulo mínimo para o header do mobile, onde divide espaço com o logo. */
    ctaMini: 'Quero a vaga',
    microcopy: 'Acesso imediato após a confirmação · Checkout seguro Hotmart',
    microcopyMobile: 'Acesso imediato · Checkout seguro Hotmart',
    /** Imagem principal. Substitua por foto real do instrutor ou mockup do curso. */
    image: {
      src: null as string | null, // ex.: '/images/hero.jpg'
      alt: 'Profissional de saúde mental em atendimento clínico',
    },
  },

  /* ------------------------------------------------------- BARRA DE CONFIANÇA */
  trustBar: [
    { label: '100% online', detail: 'aulas gravadas' },
    { label: 'Suporte no WhatsApp', detail: 'para tirar dúvidas' },
    { label: P('CARGA HORÁRIA'), detail: 'de conteúdo' },
    { label: P('X') + ' dias', detail: 'de garantia' },
  ],

  /* -------------------------------------------------------- IDENTIFICAÇÃO */
  identification: {
    eyebrow: 'Identificação',
    title: 'Se você atende, provavelmente já viveu alguma dessas cenas',
    items: [
      'O paciente melhora, piora, melhora de novo — e você não tem certeza se é oscilação de humor ou resposta ao que foi conduzido.',
      'A queixa chega como "depressão", mas alguma coisa na história não fecha.',
      'Você suspeita de bipolaridade, mas não se sente seguro para sustentar essa leitura.',
      'Você revisa o caso depois da sessão tentando lembrar o que deixou passar.',
      'Você sabe o que os manuais dizem, mas trava na hora de aplicar no caso real.',
    ],
    closing:
      'Não é falta de estudo. É falta de um caminho de raciocínio organizado para esse tipo de quadro.',
  },

  /* ------------------------------------------------------------- AGITAÇÃO */
  agitation: {
    eyebrow: 'O que está em jogo',
    title: 'O custo de seguir conduzindo na dúvida',
    intro:
      'Quando a leitura do quadro não está clara, a conduta vira tentativa. E o efeito aparece em vários lugares ao mesmo tempo:',
    items: [
      'O paciente estagna e a adesão ao tratamento cai',
      'A conduta muda mais vezes do que deveria',
      'O encaminhamento demora mais do que precisava',
      'Sua confiança durante o atendimento diminui',
      'O retrabalho consome tempo de agenda',
    ],
    closing:
      'Nada disso significa má prática. Significa que transtornos de humor exigem um raciocínio próprio — e ele raramente é ensinado de forma aplicada.',
  },

  /* ------------------------------------------------------------- SOLUÇÃO */
  solution: {
    eyebrow: 'Existe outro caminho',
    title: 'Você não precisa decidir no improviso',
    text: 'Com um raciocínio clínico organizado, critérios claros de avaliação e estratégias de manejo bem definidas, é possível chegar na sessão com muito mais clareza sobre o que observar, o que perguntar e o que fazer em seguida. São os três eixos que dão nome ao minicurso:',
    steps: [
      {
        step: '01',
        title: 'Compreensão',
        text: 'Os principais transtornos de humor como eles aparecem na clínica — não apenas como estão descritos nos manuais.',
      },
      {
        step: '02',
        title: 'Avaliação',
        text: 'Como conduzir a avaliação, o que se confunde com o quê e como sustentar uma hipótese diagnóstica.',
      },
      {
        step: '03',
        title: 'Manejo clínico',
        text: 'Estratégias de condução mais seguras, com critérios de conduta, acompanhamento e encaminhamento.',
      },
    ],
  },

  /* -------------------------------------------------------------- MÓDULOS */
  modules: {
    eyebrow: 'Conteúdo',
    title: 'O que você vai ver no minicurso',
    /** Aviso exibido enquanto a grade não for confirmada. Deixe null quando confirmar. */
    draftNotice:
      'Grade em rascunho, montada sobre os três eixos do nome oficial do minicurso — confirmar títulos, ordem, número de aulas e carga horária antes de publicar.',
    items: [
      {
        number: '01',
        title: 'Compreensão dos transtornos de humor',
        description:
          'Como depressão, transtorno bipolar e as oscilações de humor se apresentam no consultório. O que observar na primeira escuta e quais informações mudam a leitura do caso.',
        outcome: 'Você passa a reconhecer os sinais que realmente orientam a avaliação.',
      },
      {
        number: '02',
        title: 'Avaliação e diagnóstico diferencial',
        description:
          'Como conduzir uma avaliação adequada: os quadros que mais se confundem entre si, os critérios que ajudam a separá-los e como sustentar uma hipótese diagnóstica.',
        outcome: 'Você organiza o raciocínio em vez de decidir por impressão.',
      },
      {
        number: '03',
        title: 'Manejo clínico e condução do caso',
        description:
          'Estratégias de manejo mais seguras, definição de conduta, acompanhamento da evolução e critérios para encaminhamento e trabalho conjunto.',
        outcome: 'Você conduz o caso com critérios definidos e sabe quando encaminhar.',
      },
    ] as Module[],
  },

  /* ------------------------------------------------------------ BENEFÍCIOS */
  benefits: {
    eyebrow: 'Benefícios',
    title: 'O que muda na sua prática',
    subtitle:
      'O minicurso não entrega apenas aulas. Entrega um jeito mais organizado de pensar o caso.',
    items: [
      {
        title: 'Clareza na avaliação',
        text: 'Chegar na sessão sabendo o que investigar em um caso de humor.',
      },
      {
        title: 'Diferenciação com critério',
        text: 'Separar quadros parecidos a partir de sinais que fazem diferença.',
      },
      {
        title: 'Hipótese sustentada',
        text: 'Defender sua leitura clínica com argumentos, não com intuição.',
      },
      {
        title: 'Conduta com menos tentativa e erro',
        text: 'Definir manejo com base em critérios de decisão claros.',
      },
      {
        title: 'Encaminhamento no tempo certo',
        text: 'Reconhecer o momento de encaminhar ou trabalhar em conjunto.',
      },
      {
        title: 'Comunicação mais firme',
        text: 'Explicar sua leitura para o paciente, a família e a equipe.',
      },
    ],
    features: {
      title: 'E na prática você recebe',
      items: [
        'Aulas online gravadas, liberadas de uma vez',
        'Acesso pelo celular, tablet ou computador',
        'Suporte de dúvidas pelo WhatsApp',
        'Material complementar de apoio',
        P('CERTIFICADO'),
        P('TEMPO DE ACESSO'),
      ],
    },
  },

  /* -------------------------------------------------------------- PÚBLICO */
  audience: {
    eyebrow: 'Para quem é',
    forTitle: 'Este minicurso é para você que',
    forItems: [
      'Atende ou vai atender demandas de saúde mental',
      'Quer mais segurança em casos de depressão e bipolaridade',
      'Prefere conteúdo aplicado a excesso de teoria',
      'É psicólogo, psiquiatra ou profissional de saúde mental em atuação',
      'É estudante em fase final e quer chegar à prática com raciocínio estruturado',
      'Quer estudar no próprio ritmo, sem depender de horário fixo',
    ],
    notTitle: 'Este minicurso não é',
    notItems: [
      'Atendimento, terapia ou supervisão clínica individual',
      'Substituto de graduação, pós-graduação ou residência',
      'Protocolo fechado de conduta para aplicar sem avaliação',
      'Orientação sobre um caso específico do seu consultório',
      'Conteúdo voltado ao público leigo',
    ],
  },

  /* ------------------------------------------------------------ AUTORIDADE */
  instructor: {
    eyebrow: 'Quem ensina',
    title: 'Quem está por trás do minicurso',
    name: P('NOME DO INSTRUTOR'),
    role: P('PROFISSÃO — CRP/CRM'),
    photo: null as string | null, // ex.: '/images/instrutor.jpg'
    bio: [
      P('FORMAÇÃO E ESPECIALIZAÇÕES'),
      P('EXPERIÊNCIA CLÍNICA — anos de atuação, contexto, instituições'),
    ],
    credentials: [
      P('CREDENCIAL 1'),
      P('CREDENCIAL 2'),
      P('CREDENCIAL 3'),
    ],
  },

  /* ---------------------------------------------------------- PROVA SOCIAL
     Nenhum depoimento inventado. A seção só é renderizada quando houver
     depoimentos reais neste array.
     -------------------------------------------------------------------- */
  testimonials: [] as Testimonial[],

  /** Números só entram aqui quando forem verificáveis. Vazio = seção oculta. */
  stats: [] as { value: string; label: string }[],

  /* --------------------------------------------------------- TRANSFORMAÇÃO */
  transformation: {
    eyebrow: 'Antes e depois',
    title: 'O que você poderá desenvolver',
    disclaimer:
      'Resultados dependem da aplicação de cada profissional no seu próprio contexto de atuação. O curso não garante desfechos clínicos.',
    before: {
      title: 'Hoje',
      items: [
        'Dúvida entre quadros que se parecem',
        'Conduta definida no improviso',
        'Insegurança para sustentar a hipótese',
        'Revisão do caso depois da sessão',
      ],
    },
    after: {
      title: 'Depois do minicurso',
      items: [
        'Critérios claros de diferenciação',
        'Caminho de raciocínio definido',
        'Mais firmeza na condução do caso',
        'Leitura clínica mais organizada',
      ],
    },
  },

  /* ------------------------------------------------------------- INCLUÍDO */
  included: {
    eyebrow: 'A oferta',
    title: 'O que está incluído',
    items: [
      'Minicurso completo em vídeo',
      P('Nº DE MÓDULOS') + ' módulos',
      P('Nº DE AULAS') + ' aulas',
      'Suporte de dúvidas pelo WhatsApp',
      'Material complementar',
      P('CERTIFICADO'),
      'Acesso online, no seu ritmo',
      P('TEMPO DE ACESSO'),
      'Garantia de ' + P('X') + ' dias pela Hotmart',
    ],
  },

  /* ---------------------------------------------------------------- BÔNUS
     Deixe o array vazio se não houver bônus — a seção some sozinha.
     -------------------------------------------------------------------- */
  bonuses: [
    {
      number: '01',
      title: P('NOME DO BÔNUS 1'),
      description: P('DESCRIÇÃO DO BÔNUS 1'),
    },
  ] as Bonus[],

  /* ---------------------------------------------------------------- OFERTA */
  offer: {
    eyebrow: 'Investimento',
    title: 'Acesso completo ao minicurso',
    /** Preço "de" — deixe null se não houver desconto real. Nunca invente âncora. */
    fullPrice: P('PREÇO CHEIO') as string | null,
    price: P('PREÇO'),
    installments: P('PARCELAMENTO'),
    paymentMethods: P('FORMAS DE PAGAMENTO — cartão, Pix, boleto'),
    cta: 'Quero garantir minha vaga',
    /** Urgência só entra aqui se for verdadeira (ex.: turma com data). */
    urgency: null as string | null,
  },

  /* -------------------------------------------------------------- GARANTIA */
  guarantee: {
    eyebrow: 'Risco zero',
    days: P('X'),
    title: 'Você pode conhecer o minicurso sem assumir todo o risco',
    text: 'Se dentro do prazo de garantia você concluir que o conteúdo não é para o seu momento, basta solicitar o reembolso pela própria plataforma da Hotmart. Sem justificativa e sem burocracia.',
  },

  /* ------------------------------------------------------------------ FAQ */
  faq: [
    {
      question: 'O minicurso é online?',
      answer:
        'Sim. Todas as aulas são gravadas e ficam disponíveis na plataforma da Hotmart, para assistir quando e quantas vezes quiser dentro do período de acesso.',
    },
    {
      question: 'Como recebo o acesso?',
      answer:
        'Assim que o pagamento é confirmado, a Hotmart envia automaticamente os dados de acesso para o e-mail usado na compra.',
    },
    {
      question: 'Posso assistir pelo celular?',
      answer:
        'Sim. Você assiste pelo celular, tablet ou computador — direto no navegador ou pelo aplicativo da Hotmart.',
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer: P('TEMPO DE ACESSO — ex.: 12 meses a partir da confirmação da compra'),
    },
    {
      question: 'O minicurso emite certificado?',
      answer: P('CERTIFICADO — confirmar emissão, carga horária e formato'),
    },
    {
      question: 'Consigo tirar dúvidas durante o curso?',
      answer:
        'Sim. O minicurso inclui suporte de dúvidas pelo WhatsApp — você não fica sozinho com o conteúdo. ' +
        P('DETALHAR: horário de atendimento, prazo de resposta e se o suporte é individual ou em grupo'),
    },
    {
      question: 'Preciso de conhecimento prévio?',
      answer:
        'O conteúdo é voltado a quem já tem formação ou está em formação na área da saúde mental. Não é necessário conhecimento avançado sobre transtornos de humor — o curso organiza o raciocínio desde a leitura do quadro.',
    },
    {
      question: 'É para profissionais ou para qualquer pessoa?',
      answer:
        'Para profissionais e estudantes da área de saúde mental. Não é um curso voltado ao público leigo nem um material de autoajuda.',
    },
    {
      question: 'Este minicurso substitui supervisão ou pós-graduação?',
      answer:
        'Não. É formação complementar, de caráter educacional. Não substitui graduação, pós-graduação, residência, supervisão clínica nem a avaliação de um profissional habilitado em cada caso.',
    },
    {
      question: 'Como funciona a garantia?',
      answer:
        'A garantia é de ' +
        P('X') +
        ' dias, oferecida pela Hotmart. Dentro desse prazo você pode solicitar o reembolso integral pela própria plataforma.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'Todo o pagamento acontece no ambiente seguro da Hotmart. Formas disponíveis: ' +
        P('FORMAS DE PAGAMENTO'),
    },
    {
      question: 'Posso parcelar?',
      answer: P('PARCELAMENTO — ex.: até 12x no cartão de crédito'),
    },
    {
      question: 'Quando eu começo?',
      answer:
        'O acesso é liberado imediatamente após a confirmação do pagamento. Você pode começar no mesmo dia.',
    },
  ] as FaqItem[],

  /* -------------------------------------------------------------- CTA FINAL */
  finalCta: {
    title: 'Você pode começar hoje',
    text: 'O próximo caso de humor que chegar na sua agenda vai chegar de um jeito ou de outro. A diferença está no quanto você chega preparado para conduzi-lo.',
    cta: 'Quero acessar o minicurso',
  },

  /* --------------------------------------------------------------- RODAPÉ */
  footer: {
    producer: P('RAZÃO SOCIAL DA CLÍNICA'),
    document: P('CNPJ'),
    email: P('E-MAIL DE CONTATO'),
    privacyUrl: P('URL DA POLÍTICA DE PRIVACIDADE'),
    termsUrl: P('URL DOS TERMOS DE USO'),
    disclaimer:
      'Este conteúdo tem finalidade exclusivamente educacional e de formação complementar. Não constitui protocolo clínico e não substitui a formação acadêmica, a supervisão profissional, nem a avaliação, o diagnóstico ou o tratamento realizados por profissionais habilitados. As decisões clínicas são de responsabilidade do profissional assistente.',
    hotmartNotice:
      'Este site não faz parte do Facebook, Google ou Hotmart, nem é endossado por essas plataformas. O processamento do pagamento é feito integralmente pela Hotmart.',
  },

  /* -------------------------------------------------------------- NAVEGAÇÃO */
  nav: [
    { label: 'Para quem é', href: '#para-quem' },
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Quem ensina', href: '#instrutor' },
    { label: 'Investimento', href: '#oferta' },
    { label: 'Dúvidas', href: '#faq' },
  ],
} as const;

export type Site = typeof site;
