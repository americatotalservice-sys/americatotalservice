// app/components/HeroForm.tsx
'use client';

import { useState } from 'react';

interface HeroFormProps {
  idioma: 'en' | 'es' | 'pt';
}

export default function HeroForm({ idioma }: HeroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const translations = {
    en: {
      title: 'Get Your Free Quote',
      subtitle: 'We respond within 24 hours!',
      name: 'Full Name *',
      phone: 'Phone *',
      email: 'Email *',
      city: 'City *',
      service: 'Service Needed *',
      submit: 'Request Free Quote →',
      submitting: 'Sending...',
      terms: 'By submitting, you agree to our Terms of Service and Privacy Policy.',
      success: 'Thank you! Your request has been sent successfully. We will contact you within 24 hours.',
      error: 'An error occurred. Please try again.',
      services: [
        { value: '', label: 'Service Needed *' },
        { value: 'Complete Renovations', label: 'Complete Renovations' },
        { value: 'Residential Painting', label: 'Residential Painting' },
        { value: 'Electrical Installations', label: 'Electrical Installations' },
        { value: 'Plumbing Installations', label: 'Plumbing Installations' },
        { value: 'Cabinet Installation', label: 'Cabinet Installation' },
        { value: 'Flooring', label: 'Flooring' },
        { value: 'Other', label: 'Other' },
      ]
    },
    es: {
      title: 'Solicite Su Presupuesto Gratis',
      subtitle: '¡Respondemos en 24 horas!',
      name: 'Nombre Completo *',
      phone: 'Teléfono *',
      email: 'Email *',
      city: 'Ciudad *',
      service: 'Servicio Necesario *',
      submit: 'Solicitar Presupuesto Gratis →',
      submitting: 'Enviando...',
      terms: 'Al enviar, acepta nuestros Términos de Servicio y Política de Privacidad.',
      success: '¡Gracias! Su solicitud ha sido enviada con éxito. Lo contactaremos en 24 horas.',
      error: 'Ocurrió un error. Por favor intente nuevamente.',
      services: [
        { value: '', label: 'Servicio Necesario *' },
        { value: 'Reformas Completas', label: 'Reformas Completas' },
        { value: 'Pintura Residencial', label: 'Pintura Residencial' },
        { value: 'Instalaciones Eléctricas', label: 'Instalaciones Eléctricas' },
        { value: 'Instalaciones de Plomería', label: 'Instalaciones de Plomería' },
        { value: 'Instalación de Gabinetes', label: 'Instalación de Gabinetes' },
        { value: 'Pisos', label: 'Pisos' },
        { value: 'Otro', label: 'Otro' },
      ]
    },
    pt: {
      title: 'Solicite Seu Orçamento Grátis',
      subtitle: 'Respondemos em até 24 horas!',
      name: 'Nome Completo *',
      phone: 'Telefone *',
      email: 'Email *',
      city: 'Cidade *',
      service: 'Serviço Necessário *',
      submit: 'Solicitar Orçamento Grátis →',
      submitting: 'Enviando...',
      terms: 'Ao enviar, você concorda com nossos Termos de Serviço e Política de Privacidade.',
      success: 'Obrigado! Sua solicitação foi enviada com sucesso. Entraremos em contato em até 24 horas.',
      error: 'Ocorreu um erro. Por favor tente novamente.',
      services: [
        { value: '', label: 'Serviço Necessário *' },
        { value: 'Reformas Completas', label: 'Reformas Completas' },
        { value: 'Pintura Residencial', label: 'Pintura Residencial' },
        { value: 'Instalações Elétricas', label: 'Instalações Elétricas' },
        { value: 'Instalações Hidráulicas', label: 'Instalações Hidráulicas' },
        { value: 'Instalação de Armários', label: 'Instalação de Armários' },
        { value: 'Pisos', label: 'Pisos' },
        { value: 'Outro', label: 'Outro' },
      ]
    }
  };

  const t = translations[idioma];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      cidade: formData.get('cidade') as string,
      servicoInteresse: formData.get('servicoInteresse') as string,
      mensagem: '',
      idioma: idioma,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || t.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.success}</h2>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
          >
            {idioma === 'en' ? 'Submit another request' : idioma === 'es' ? 'Enviar otra solicitud' : 'Enviar outra solicitação'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        {t.title}
      </h2>
      <p className="text-gray-600 text-center mb-6">
        {t.subtitle}
      </p>

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="nome"
            placeholder={t.name}
            required
            minLength={2}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <input
            type="tel"
            name="telefone"
            placeholder={t.phone}
            required
            minLength={10}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder={t.email}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="cidade"
            placeholder={t.city}
            required
            minLength={2}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <select
            name="servicoInteresse"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-600"
          >
            {t.services.map((service, index) => (
              <option key={index} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {t.submitting}
            </span>
          ) : (
            t.submit
          )}
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-4">
        {t.terms}
      </p>
    </div>
  );
}
