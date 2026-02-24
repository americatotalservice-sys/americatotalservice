'use client';

import Script from 'next/script';

interface LeadFormProps {
  idioma: 'en' | 'es' | 'pt';
}

export default function LeadForm({ idioma }: LeadFormProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg min-h-[700px]">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {idioma === 'en' ? 'Request Your Free Quote' : idioma === 'es' ? 'Solicite Su Presupuesto Gratis' : 'Solicite Seu Orçamento Grátis'}
        </h2>
        <div className="w-full relative min-h-[643px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/H7redTi52nCV4At5RBir"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-H7redTi52nCV4At5RBir-lead"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="ATS – Request a Quote"
            data-height="643"
            data-layout-iframe-id="inline-H7redTi52nCV4At5RBir-lead"
            data-form-id="H7redTi52nCV4At5RBir"
            title="ATS – Request a Quote"
          ></iframe>
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}