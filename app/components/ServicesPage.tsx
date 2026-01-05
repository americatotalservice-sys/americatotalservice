type Props = {
  dict: any;
};

const serviceIcons: Record<string, string> = {
  plumbing: "🚿",
  electrical: "⚡",
  cabinets: "🧰",
  assemblies: "📦",
  handyman: "🔨",
};

export default function ServicesPage({ dict }: Props) {
  const items: Record<string, string> = dict.services.items;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 mb-4">
          {dict.common?.siteName ?? "America Total Services"}
        </span>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
          {dict.services.sectionTitle}
        </h1>

        <p className="text-slate-600">
          {dict.services?.description ??
            "Do conserto rápido à reforma completa — executamos serviços residenciais com qualidade, rapidez e preço justo."}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {Object.entries(items).map(([key, label]: [string, string]) => (
          <div
            key={key}
            className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-500 transition-all p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl">
                {serviceIcons[key] ?? "🛠️"}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {label}
              </h3>
            </div>

            <p className="text-sm text-slate-600">
              {dict.services?.descriptions?.[key] ??
                "Ideal para quem busca um serviço bem feito, com agendamento flexível e comunicação clara."}
            </p>

            <button className="mt-auto inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-900">
              {dict.services?.learnMore ?? "Ver detalhes"}
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Rodapé da seção */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
        <p className="text-sm text-slate-600">
          {dict.services?.footerText ??
            "Precisa de mais de um serviço? Podemos montar um pacote especial para você."}
        </p>

        <button className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">
          {dict.services?.ctaButton ?? "Falar pelo WhatsApp"}
        </button>
      </div>
    </section>
  );
}
