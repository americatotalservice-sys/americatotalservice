type Props = {
  dict: any;
};

export default function CTASection({ dict }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {dict.cta.title}
      </h2>
      <p className="text-slate-300 mb-6">{dict.cta.subtitle}</p>

      <button className="rounded-full bg-sky-500 px-8 py-3 text-white hover:bg-sky-400 transition">
        {dict.cta.button}
      </button>
    </section>
  );
}
