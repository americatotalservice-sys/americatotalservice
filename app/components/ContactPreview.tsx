type Props = {
  dict: any;
};

export default function ContactPreview({ dict }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {dict.contactPreview.title}
      </h2>
      <p className="text-slate-300 mb-6">{dict.contactPreview.text}</p>

      <button className="rounded-full bg-sky-500 px-8 py-3 text-white hover:bg-sky-400 transition">
        {dict.contactPreview.button}
      </button>
    </section>
  );
}
