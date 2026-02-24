// app/components/HeroForm.tsx
'use client';

import Script from 'next/script';

interface HeroFormProps {
  idioma: 'en' | 'es' | 'pt';
}

export default function HeroForm({ idioma }: HeroFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 w-full min-h-[643px]">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/H7redTi52nCV4At5RBir"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-H7redTi52nCV4At5RBir-hero"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ATS – Request a Quote"
        data-height="643"
        data-layout-iframe-id="inline-H7redTi52nCV4At5RBir-hero"
        data-form-id="H7redTi52nCV4At5RBir"
        title="ATS – Request a Quote"
      ></iframe>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
