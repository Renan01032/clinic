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
     * Grafia confirmada a partir do portfólio oficial (logo + texto corrido):
     * "Clínica Psychëar" na marca, "Psychear" em texto plano, e o
     * @clinicapsiquear (sem acento) só no @ do Instagram — restrição da
     * própria plataforma, não é grafia alternativa do nome.
     */
    name: 'Clínica Psychëar',
    shortName: 'PS',
    logoSrc: '/images/logo.png',
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
    instagram: '@clinicapsiquear',
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
     * Este valor é o fallback caso a variável não exista.
     *
     * Confirmado com o cliente: o produto "Capacitação Rápida para
     * Psicólogos e Estudantes da Área" (nome interno no Hotmart, produtor
     * "Psiquear Cursos") é este mesmo minicurso — o nome de venda na página
     * é o nome de marketing, o nome no Hotmart é só o cadastro do produto.
     */
    fallbackUrl: 'https://pay.hotmart.com/E107360174P',
    /** Código de rastreio da Hotmart (opcional): ?sck=... */
    sckParam: process.env.NEXT_PUBLIC_HOTMART_SCK ?? '',
    microcopy: 'Você será direcionado com segurança para o checkout da Hotmart.',
  },

  /* ----------------------------------------------------------------- HERO */
  hero: {
    preHeadline: 'Minicurso online para profissionais de saúde mental',
    headline: {
      lead: 'Conduza casos de depressão e bipolaridade com um',
      highlight: 'raciocínio clínico claro',
      tail: '— do primeiro atendimento ao manejo.',
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
    /** Foto real de Andréa Felix, extraída do portfólio profissional dela. */
    image: {
      src: '/images/hero-andrea.jpg' as string | null,
      alt: 'Andréa Felix, psicóloga e psicanalista, idealizadora do minicurso',
    },
  },

  /* ------------------------------------------------------- BARRA DE CONFIANÇA */
  trustBar: [
    { label: '100% online', detail: 'aulas gravadas' },
    { label: 'Suporte no WhatsApp', detail: 'para tirar dúvidas' },
    { label: P('CARGA HORÁRIA'), detail: 'de conteúdo' },
    { label: '7 dias', detail: 'de garantia' },
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

  /* -------------------------------------------------------------- MÓDULOS
     Antes havia uma seção "Solução" separada repetindo os mesmos 3 eixos
     (Compreensão/Avaliação/Manejo) de forma mais curta, logo antes desta.
     Removida — os módulos abaixo já contam a mesma história com mais
     substância (descrição + o que muda na prática), então tê-las nas duas
     seções era o mesmo conteúdo duas vezes seguidas.
     -------------------------------------------------------------------- */
  modules: {
    eyebrow: 'Como o minicurso está organizado',
    title: 'O que você vai ver no minicurso',
    subtitle:
      'Com um raciocínio clínico organizado, critérios claros de avaliação e estratégias de manejo bem definidas, é possível chegar na sessão com muito mais clareza sobre o que observar, o que perguntar e o que fazer em seguida.',
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

  /* ------------------------------------------------------------ AUTORIDADE
     Dados e foto vindos do portfólio profissional real de Andréa Felix.
     Número de registro (CRP) não constava no material recebido — mantido
     como placeholder até ela confirmar, em vez de inventado.
     -------------------------------------------------------------------- */
  instructor: {
    eyebrow: 'Quem ensina',
    title: 'Quem está por trás do minicurso',
    name: 'Andréa Felix',
    role: 'Psicóloga e Psicanalista',
    /** Número de registro (CRP) não constava no portfólio recebido. */
    registration: P('CRP'),
    photo: '/images/instructor-andrea.jpg' as string | null,
    bio: [
      'Psicóloga e psicanalista, CEO da Clínica Psychëar, com mais de 10 anos de atuação clínica em saúde mental e mais de 27 anos de experiência no magistério.',
      'Atua articulando prática clínica, formação profissional e gestão — com rigor técnico, ética profissional e escuta clínica qualificada. Já conduziu cursos, capacitações, grupos de estudo e supervisão para psicólogos e estudantes de psicologia.',
    ],
    credentials: [
      'CEO da Clínica Psychëar',
      '+10 anos de atuação clínica',
      '+27 anos de experiência no magistério',
      'Condução de cursos, grupos de estudo e supervisão',
    ],
    /** Citação real, adaptada do portfólio profissional dela. */
    quote:
      'Ensinar é, para mim, um compromisso sério — que exige estudo contínuo e responsabilidade clínica.',
  },

  /* ---------------------------------------------------------- PROVA SOCIAL
     Depoimentos reais, do portfólio profissional de Andréa Felix — porém
     sobre OUTRAS formações dela (curso de avaliação psicológica, masterclass
     sobre paciente borderline), não sobre este minicurso especificamente,
     que ainda não tem turma concluída. Parafraseados e encurtados para o
     formato de card; sobrenome e @ omitidos por privacidade. O aviso em
     `testimonialsNote` existe para a página nunca implicar que são
     depoimentos sobre o minicurso de transtornos de humor.
     -------------------------------------------------------------------- */
  testimonials: [
    {
      quote:
        'Andréa domina o assunto e explica de um jeito bem didático, com vários exemplos práticos.',
      author: 'Nathália',
      role: 'Psicóloga',
    },
    {
      quote: 'Já fiz outros cursos e a condução dela foi a melhor que vi até hoje.',
      author: 'Laryssa',
      role: 'Psicóloga',
    },
    {
      quote: 'A masterclass ampliou muito meu olhar clínico — didática impecável do início ao fim.',
      author: 'Liliane',
      role: 'Psicóloga',
    },
  ] as Testimonial[],

  /** Aviso de honestidade exibido junto aos depoimentos (ver nota acima). */
  testimonialsNote:
    'Depoimentos de participantes de outras formações e capacitações conduzidas pela Andréa Felix.',

  /** Números só entram aqui quando forem verificáveis. Vazio = seção oculta. */
  stats: [] as { value: string; label: string }[],

  /* Seção "Transformação" (antes/depois) removida — dizia, com outras
     palavras, o mesmo que a seção "Benefícios" logo acima. Ver histórico
     do git se precisar recuperar o texto. */

  /* ------------------------------------------------------------- INCLUÍDO */
  included: {
    eyebrow: 'A oferta',
    title: 'O que está incluído',
    items: [
      'Minicurso completo em vídeo',
      'Suporte de dúvidas pelo WhatsApp',
      'Material complementar',
      'Certificado de conclusão',
      'Acesso online, no seu ritmo, por 1 ano',
      'Garantia de 7 dias pela Hotmart',
    ],
  },

  /* ---------------------------------------------------------------- BÔNUS
     Sem bônus neste minicurso — array vazio esconde a coluna sozinho
     (ver components/landing/Included.tsx).
     -------------------------------------------------------------------- */
  bonuses: [] as Bonus[],

  /* ---------------------------------------------------------------- OFERTA */
  offer: {
    eyebrow: 'Investimento',
    title: 'Acesso completo ao minicurso',
    /**
     * Preços confirmados no checkout real da Hotmart (E107360174P) em
     * 03/09/2026. O "de" (R$ 199,99) foi definido pelo cliente como preço
     * de referência da oferta — não é um valor visto no checkout, é uma
     * decisão comercial do produtor. Vale lembrar (não é aviso legal, só
     * um ponto de atenção): o Código de Defesa do Consumidor exige que um
     * preço "de" comparativo tenha sido praticado de fato em algum momento,
     * então vale confirmar isso com quem cuida do jurídico da clínica.
     */
    fullPrice: 'R$ 199,99' as string | null,
    price: 'R$ 79,00',
    installments: '12x de R$ 8,17 no cartão',
    /** Removido a pedido do cliente — a tela de checkout da Hotmart já
     *  mostra todas as opções (cartão, Pix, boleto, PayPal, Google Pay...). */
    paymentMethods: null as string | null,
    cta: 'Quero garantir minha vaga',
    /** Urgência só entra aqui se for verdadeira (ex.: turma com data). */
    urgency: null as string | null,
  },

  /* -------------------------------------------------------------- GARANTIA
     A seção dedicada de garantia foi removida — a informação já aparece
     junto ao preço (Offer), no checklist (Included), no FAQ e nos CTAs
     finais, que é exatamente onde o comprador mais precisa dela. Este
     campo continua existindo só porque vários componentes reaproveitam o
     número de dias.
     -------------------------------------------------------------------- */
  guarantee: {
    days: '7',
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
      answer: 'Você tem acesso por 1 ano a partir da confirmação da compra.',
    },
    {
      question: 'O minicurso emite certificado?',
      answer: 'Sim, você recebe certificado de conclusão ao final do minicurso.',
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
        'A garantia é de 7 dias, oferecida pela Hotmart. Dentro desse prazo você pode solicitar o reembolso integral pela própria plataforma.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'Todo o pagamento acontece no ambiente seguro da Hotmart. Você pode pagar no cartão de crédito (em até 12x), Pix, boleto, PayPal, Google Pay ou outras opções que aparecem diretamente na tela de checkout.',
    },
    {
      question: 'Posso parcelar?',
      answer: 'Sim — em até 12x de R$ 8,17 no cartão de crédito, ou R$ 79,00 à vista.',
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
    /**
     * "Psiquear Cursos" é a grafia usada no cadastro da Hotmart (mesma
     * empresa/pessoa de "Clínica Psychëar" — confirmado com o cliente).
     * Mostrar as duas evita que o comprador estranhe um nome diferente
     * na fatura do cartão / recibo da Hotmart.
     */
    producer: 'Clínica Psychëar (Psiquear Cursos)',
    producer: 'Clínica Psychëar (Psiquear Cursos)',
>>>>>>> b4219c01abf0737cfc2970741ef340557dbd2af1
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
