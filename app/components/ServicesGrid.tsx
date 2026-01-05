type Props = {
  dict: any;
};

export default function ServicesGrid({ dict }: Props) {
  const itens: Record<string, string> = dict.services.items;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-8">
        {dict.services.sectionTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(itens).map(([key, label]: [string, string]) => (
          <div
            key={key}
            className="
             rounded-xl 
             border 
             border-slate-300 
             bg-white 
             shadow-md 
             hover:shadow-lg 
             hover:border-sky-500 
             transition-all 
             p-6
            "

          >
            <h3 className="text-lg font-semibold text-slate-800">{label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
