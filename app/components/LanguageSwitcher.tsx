'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
];

export default function LanguageSwitcher( ) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = pathname?.split('/')[1] || 'en';
  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    const newPathname = pathname.replace(/^\/(en|es|pt)/, `/${langCode}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20 backdrop-blur-sm shadow-lg"
        type="button"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={24}
          height={16}
          className="rounded-sm shadow-sm"
        />
        <span className="text-sm font-semibold text-white">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              type="button"
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                currentLang === lang.code ? 'bg-blue-50 border-l-4 border-blue-600' : ''
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                width={32}
                height={24}
                className="rounded shadow-sm"
              />
              <div className="flex flex-col items-start flex-1">
                <span className="text-sm font-semibold text-gray-900">{lang.name}</span>
                <span className="text-xs text-gray-500">{lang.code.toUpperCase()}</span>
              </div>
              {currentLang === lang.code && (
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
