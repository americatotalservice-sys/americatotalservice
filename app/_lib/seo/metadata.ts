// app/_lib/seo/metadata.ts
import { Metadata } from 'next';

export const seoMetadata = {
  en: {
    title: 'America Total Service - Professional Home Services in Central Florida',
    description: 'Reliable home services in Orlando, Winter Garden, and Central Florida. Cabinet installation, renovations, electrical, plumbing, and more. Trilingual service. Get your free quote today!',
    keywords: 'home services orlando, cabinet installation florida, handyman winter garden, electrical services orlando, plumbing central florida, home renovation orlando',
    openGraph: {
      title: 'America Total Service - Professional Home Services',
      description: 'Quality home services in Central Florida. Cabinet installation, renovations, electrical, plumbing. Trilingual service.',
      locale: 'en_US',
    }
  },
  es: {
    title: 'America Total Service - Servicios Profesionales para el Hogar en Florida Central',
    description: 'Servicios confiables para el hogar en Orlando, Winter Garden y Florida Central. Instalación de gabinetes, reformas, electricidad, plomería y más. Atención trilingüe. ¡Solicite su presupuesto gratis!',
    keywords: 'servicios para el hogar orlando, instalación de gabinetes florida, handyman winter garden, servicios eléctricos orlando, plomería florida central, renovación de hogar orlando',
    openGraph: {
      title: 'America Total Service - Servicios Profesionales para el Hogar',
      description: 'Servicios de calidad para el hogar en Florida Central. Instalación de gabinetes, reformas, electricidad, plomería. Atención trilingüe.',
      locale: 'es_US',
    }
  },
  pt: {
    title: 'America Total Service - Serviços Profissionais para Casa na Flórida Central',
    description: 'Serviços confiáveis para casa em Orlando, Winter Garden e Flórida Central. Instalação de armários, reformas, elétrica, encanamento e mais. Atendimento trilíngue. Solicite seu orçamento grátis!',
    keywords: 'serviços para casa orlando, instalação de armários florida, handyman winter garden, serviços elétricos orlando, encanamento florida central, reforma de casa orlando',
    openGraph: {
      title: 'America Total Service - Serviços Profissionais para Casa',
      description: 'Serviços de qualidade para casa na Flórida Central. Instalação de armários, reformas, elétrica, encanamento. Atendimento trilíngue.',
      locale: 'pt_US',
    }
  }
};

export function generateMetadata(lang: 'en' | 'es' | 'pt'): Metadata {
  const meta = seoMetadata[lang];
  const baseUrl = 'https://americatotalservice.com';
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'America Total Service' }],
    creator: 'America Total Service',
    publisher: 'America Total Service',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-US': '/en',
        'es-US': '/es',
        'pt-US': '/pt',
      },
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'America Total Service',
      locale: meta.openGraph.locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'America Total Service - Professional Home Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Substituir após criar Google Search Console
    },
  };
}