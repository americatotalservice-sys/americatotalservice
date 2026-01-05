import type { Locale } from './config';

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  pt: () => import('./dictionaries/pt').then((module) => module.default),
  es: () => import('./dictionaries/es').then((module) => module.default),
} as const;

export async function getDictionary(locale: Locale) {
  const loadDictionary = dictionaries[locale];

  if (!loadDictionary) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return loadDictionary();
}
