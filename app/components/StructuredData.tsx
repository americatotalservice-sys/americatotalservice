// app/components/StructuredData.tsx
'use client';

interface StructuredDataProps {
  lang: 'en' | 'es' | 'pt';
}

export default function StructuredData({ lang }: StructuredDataProps) {
  const translations = {
    en: {
      name: 'America Total Service',
      description: 'Professional home services in Central Florida. Cabinet installation, renovations, electrical, plumbing, and more.',
      areaServed: 'Orlando, Winter Garden, and Central Florida',
    },
    es: {
      name: 'America Total Service',
      description: 'Servicios profesionales para el hogar en Florida Central. Instalación de gabinetes, reformas, electricidad, plomería y más.',
      areaServed: 'Orlando, Winter Garden y Florida Central',
    },
    pt: {
      name: 'America Total Service',
      description: 'Serviços profissionais para casa na Flórida Central. Instalação de armários, reformas, elétrica, encanamento e mais.',
      areaServed: 'Orlando, Winter Garden e Flórida Central',
    },
  };

  const t = translations[lang];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://americatotalservice.com',
    name: t.name,
    description: t.description,
    url: 'https://americatotalservice.com',
    telephone: '+1-321-356-5020',
    email: 'info@americatotalservice.com',
    priceRange: '$$',
    image: 'https://americatotalservice.com/logo.jpg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://americatotalservice.com/logo.jpg',
      width: 600,
      height: 60,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      postalCode: '32801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5383,
      longitude: -81.3792,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 28.5383,
        longitude: -81.3792,
      },
      geoRadius: '50000', // 50km radius
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      // Adicionar links de redes sociais quando disponíveis
      // 'https://www.facebook.com/americatotalservice',
      // 'https://www.instagram.com/americatotalservice',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '157',
      bestRating: '5',
      worstRating: '1',
    },
    serviceType: [
      'Home Renovation',
      'Cabinet Installation',
      'Electrical Services',
      'Plumbing Services',
      'Handyman Services',
      'Residential Painting',
    ],
    knowsLanguage: ['English', 'Spanish', 'Portuguese'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}