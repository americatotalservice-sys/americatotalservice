export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'pt'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

// Traduções para o seletor de idiomas
export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português (BR)',
};

// Bandeiras emoji para cada idioma
export const languageFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷',
};

// Traduções comuns do site
export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Professional Home Services in Central Florida',
      subtitle: 'Quality service at competitive prices',
      cta: 'Get Free Quote',
      whatsapp: 'Chat on WhatsApp',
    },
    services: {
      title: 'Our Services',
      cabinet: 'Cabinet Installation',
      electrical: 'Electrical Services',
      plumbing: 'Plumbing',
      tile: 'Tile & Grout',
      carpentry: 'Carpentry',
      other: 'Other Services',
    },
    contact: {
      title: 'Request a Quote',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      city: 'City',
      service: 'Service of Interest',
      message: 'Message (optional)',
      submit: 'Send Request',
      success: 'Thank you! Your request has been sent successfully. We will contact you within 24 hours.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      title: 'Servicios Profesionales para el Hogar en Florida Central',
      subtitle: 'Servicio de calidad a precios competitivos',
      cta: 'Solicitar Presupuesto Gratis',
      whatsapp: 'Hablar por WhatsApp',
    },
    services: {
      title: 'Nuestros Servicios',
      cabinet: 'Instalación de Gabinetes',
      electrical: 'Servicios Eléctricos',
      plumbing: 'Plomería',
      tile: 'Azulejos y Lechada',
      carpentry: 'Carpintería',
      other: 'Otros Servicios',
    },
    contact: {
      title: 'Solicitar Presupuesto',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      city: 'Ciudad',
      service: 'Servicio de Interés',
      message: 'Mensaje (opcional)',
      submit: 'Enviar Solicitud',
      success: '¡Gracias! Su solicitud ha sido enviada con éxito. Lo contactaremos en 24 horas.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre Nós',
      contact: 'Contato',
    },
    hero: {
      title: 'Serviços Profissionais Residenciais na Flórida Central',
      subtitle: 'Serviço de qualidade com preços competitivos',
      cta: 'Solicitar Orçamento Grátis',
      whatsapp: 'Falar pelo WhatsApp',
    },
    services: {
      title: 'Nossos Serviços',
      cabinet: 'Instalação de Armários',
      electrical: 'Serviços Elétricos',
      plumbing: 'Encanamento',
      tile: 'Azulejo e Rejunte',
      carpentry: 'Marcenaria',
      other: 'Outros Serviços',
    },
    contact: {
      title: 'Solicitar Orçamento',
      name: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      city: 'Cidade',
      service: 'Serviço de Interesse',
      message: 'Mensagem (opcional)',
      submit: 'Enviar Solicitação',
      success: 'Obrigado! Sua solicitação foi enviada com sucesso. Entraremos em contato em até 24 horas.',
    },
  },
};