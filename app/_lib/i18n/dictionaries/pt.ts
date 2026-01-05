const pt = {
  common: {
    siteName: 'America Total Services',
    siteTagline: 'Serviços residenciais premium na região de Central Florida',
  },

  navigation: {
    home: 'Início',
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato',
  },

  hero: {
    title: 'Seu parceiro de confiança para serviços residenciais',
    subtitle:
      'Encanamento, elétrica, cabinets, montagens, handyman e muito mais com qualidade e segurança.',
    primaryCta: 'Pedir orçamento gratuito',
    secondaryCta: 'Ver todos os serviços',
  },

  services: {
    sectionTitle: 'Nossos serviços',
    items: {
      plumbing: 'Encanamento',
      electrical: 'Elétrica',
      cabinets: 'Instalação de Cabinets',
      assemblies: 'Montagens',
      handyman: 'Handyman',
    },
  },

  // 🔥 BLOCO QUE FALTAVA
  servicesPage: {
    title: 'Serviços que oferecemos',
    description:
      'Atendemos uma ampla variedade de serviços residenciais com qualidade, segurança e rapidez.',
    items: {
      plumbing: 'Serviço completo de encanamento para sua casa.',
      electrical: 'Instalações e reparos elétricos com total segurança.',
      cabinets: 'Montagem e instalação de cabinets profissionais.',
      assemblies: 'Montagem de móveis e estruturas com precisão.',
      handyman: 'Serviços gerais e reparos para qualquer necessidade.',
    },
  },

  cta: {
    title: 'Precisando de um serviço com urgência?',
    subtitle: 'Atendimento rápido, profissional e com preço justo.',
    button: 'Pedir orçamento agora',
  },

  aboutPreview: {
    title: 'Quem somos',
    text: 'Somos uma empresa especializada em serviços residenciais de alta qualidade na região de Central Florida.',
  },

  trust: {
    title: 'Por que escolher a America Total Services?',
    items: [
      'Profissionais experientes',
      'Atendimento rápido',
      'Preço justo',
      'Garantia de qualidade',
    ],
  },

  contactPreview: {
    title: 'Entre em contato',
    text: 'Precisa de ajuda? Fale conosco e retornaremos rapidamente.',
    button: 'Falar agora',
  },
};

export default pt;
export type PtDictionary = typeof pt;
