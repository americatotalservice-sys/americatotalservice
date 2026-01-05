type Props = {
  dict: any;
};

export default function Hero({ dict }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-6">
        <span className="text-sm uppercase tracking-[0.2em] text-sky-400">
          {dict.common.siteName}
        </span>

        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-white">
          {dict.hero.title}
        </h1>

        <p className="max-w-2xl text-slate-300 text-lg">
          {dict.hero.subtitle}
        </p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-sky-500 px-6 py-3 text-white hover:bg-sky-400 transition">
            {dict.hero.primaryCta}
          </button>

          <button className="rounded-full border border-slate-600 px-6 py-3 text-slate-200 hover:border-slate-400 transition">
            {dict.hero.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
