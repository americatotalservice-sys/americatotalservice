// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FloatingElements from "./components/FloatingElements";

export const metadata: Metadata = {
  title: "America Total Service - Home Services in Central Florida",
  description: "Professional home services in Central Florida. Cabinet installation, electrical, plumbing, and more. Quality service at competitive prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header com seletor de idiomas */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="/" className="text-2xl font-bold text-white hover:text-blue-100 transition">
                America Total Service
              </a>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-white hover:text-blue-200 transition">Services</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition">Contact</a>
              <a href="tel:+13213565020" className="text-white hover:text-blue-200 transition flex items-center gap-1">
                📞 (321) 356-5020
              </a>
            </nav>

            {/* Seletor de Idiomas */}
            <LanguageSwitcher />
          </div>
        </header>

        {/* Espacamento para compensar o header fixo */}
        <div className="pt-16">
          {children}
        </div>

        {/* Floating Elements (WhatsApp + Mobile Bar) */}
        <FloatingElements 
          phoneNumber="+13213565020"
          whatsappNumber="+13213565020"
          idioma="en"
        />
      </body>
    </html>
  );
}