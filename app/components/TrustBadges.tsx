// app/components/TrustBadges.tsx
interface TrustBadgesProps {
  idioma?: 'en' | 'es' | 'pt';
}

export default function TrustBadges({ idioma = 'en' }: TrustBadgesProps) {
  const translations = {
    en: {
      title: 'Trust in Our Expertise',
      badges: [
        { icon: '🛡️', title: 'Licensed', desc: 'State Licensed Contractor' },
        { icon: '📋', title: 'Insured', desc: 'Fully Insured & Bonded' },
        { icon: '✅', title: 'Verified', desc: 'Background Checked Team' },
        { icon: '🏆', title: 'Top Rated', desc: '4.9/5 Customer Rating' },
        { icon: '⏰', title: 'On Time', desc: '98% On-Time Completion' },
        { icon: '💯', title: 'Guaranteed', desc: 'Satisfaction Guaranteed' },
      ]
    },
    es: {
      title: 'Confíe en Nuestra Experiencia',
      badges: [
        { icon: '🛡️', title: 'Licenciado', desc: 'Contratista con Licencia Estatal' },
        { icon: '📋', title: 'Asegurado', desc: 'Totalmente Asegurado' },
        { icon: '✅', title: 'Verificado', desc: 'Equipo con Antecedentes Verificados' },
        { icon: '🏆', title: 'Mejor Calificado', desc: 'Calificación 4.9/5' },
        { icon: '⏰', title: 'Puntual', desc: '98% de Entregas a Tiempo' },
        { icon: '💯', title: 'Garantizado', desc: 'Satisfacción Garantizada' },
      ]
    },
    pt: {
      title: 'Confie em Nossa Experiência',
      badges: [
        { icon: '🛡️', title: 'Licenciado', desc: 'Contratante Licenciado' },
        { icon: '📋', title: 'Segurado', desc: 'Totalmente Segurado' },
        { icon: '✅', title: 'Verificado', desc: 'Equipe com Antecedentes Verificados' },
        { icon: '🏆', title: 'Melhor Avaliado', desc: 'Avaliação 4.9/5' },
        { icon: '⏰', title: 'Pontual', desc: '98% de Entregas no Prazo' },
        { icon: '💯', title: 'Garantido', desc: 'Satisfação Garantida' },
      ]
    }
  };

  const t = translations[idioma];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{badge.title}</h3>
              <p className="text-gray-500 text-xs">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}