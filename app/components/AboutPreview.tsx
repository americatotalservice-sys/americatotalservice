type Props = {
  dict: any;
};

export default function AboutPreview({ dict }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-4">
        {dict.aboutPreview.title}
      </h2>
      <p className="text-slate-300 max-w-2xl">{dict.aboutPreview.text}</p>
    </section>
  );
}
