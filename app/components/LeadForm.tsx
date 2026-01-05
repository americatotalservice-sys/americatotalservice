'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface LeadFormProps {
  idioma: 'en' | 'es' | 'pt';
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  cidade?: string;
  servicoInteresse?: string;
}

export default function LeadForm({ idioma }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const translations = {
    en: {
      title: 'Request Your Free Quote',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      city: 'City',
      service: 'Service Needed',
      selectService: 'Select a service...',
      services: [
        'Complete Renovations',
        'Residential Painting',
        'Electrical Installations',
        'Plumbing Installations',
        'Other'
      ],
      message: 'Message (optional)',
      submit: 'Send Request',
      sending: 'Sending...',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email',
      invalidPhone: 'Please enter a valid phone number',
      minLength: 'Minimum 2 characters required',
      successMessage: 'Thank you! Your request has been sent successfully. We will contact you within 24 hours.',
      errorMessage: 'Error sending form. Please try again.',
    },
    es: {
      title: 'Solicite Su Presupuesto Gratis',
      name: 'Nombre Completo',
      email: 'Email',
      phone: 'Teléfono',
      city: 'Ciudad',
      service: 'Servicio Necesitado',
      selectService: 'Seleccione un servicio...',
      services: [
        'Reformas Completas',
        'Pintura Residencial',
        'Instalaciones Eléctricas',
        'Instalaciones Hidráulicas',
        'Otro'
      ],
      message: 'Mensaje (opcional)',
      submit: 'Enviar Solicitud',
      sending: 'Enviando...',
      required: 'Este campo es obligatorio',
      invalidEmail: 'Por favor ingrese un email válido',
      invalidPhone: 'Por favor ingrese un teléfono válido',
      minLength: 'Mínimo 2 caracteres requeridos',
      successMessage: '¡Gracias! Su solicitud ha sido enviada con éxito. Lo contactaremos en 24 horas.',
      errorMessage: 'Error al enviar formulario. Intente nuevamente.',
    },
    pt: {
      title: 'Solicite Seu Orçamento Grátis',
      name: 'Nome Completo',
      email: 'Email',
      phone: 'Telefone',
      city: 'Cidade',
      service: 'Serviço Desejado',
      selectService: 'Selecione um serviço...',
      services: [
        'Reformas Completas',
        'Pintura Residencial',
        'Instalações Elétricas',
        'Instalações Hidráulicas',
        'Outro'
      ],
      message: 'Mensagem (opcional)',
      submit: 'Enviar Solicitação',
      sending: 'Enviando...',
      required: 'Este campo é obrigatório',
      invalidEmail: 'Por favor insira um email válido',
      invalidPhone: 'Por favor insira um telefone válido',
      minLength: 'Mínimo 2 caracteres necessários',
      successMessage: 'Obrigado! Sua solicitação foi enviada com sucesso. Entraremos em contato em até 24 horas.',
      errorMessage: 'Erro ao enviar formulário. Tente novamente.',
    }
  };

  const t = translations[idioma];

  // Validação de email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validação de telefone
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    return phoneRegex.test(phone);
  };

  // Validar campo individual
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'nome':
      case 'cidade':
        if (!value.trim()) return t.required;
        if (value.trim().length < 2) return t.minLength;
        break;
      case 'email':
        if (!value.trim()) return t.required;
        if (!validateEmail(value)) return t.invalidEmail;
        break;
      case 'telefone':
        if (!value.trim()) return t.required;
        if (!validatePhone(value)) return t.invalidPhone;
        break;
      case 'servicoInteresse':
        if (!value) return t.required;
        break;
    }
    return undefined;
  };

  // Handler para blur (quando o usuário sai do campo)
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    
    const fieldError = validateField(name, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  // Handler para mudanças em tempo real
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Só valida se o campo já foi tocado
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors({ ...errors, [name]: fieldError });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      cidade: formData.get('cidade') as string,
      servicoInteresse: formData.get('servicoInteresse') as string,
      mensagem: formData.get('mensagem') as string,
      idioma: idioma,
    };

    // Validar todos os campos antes de enviar
    const newErrors: FormErrors = {};
    Object.keys(data).forEach((key) => {
      if (key !== 'mensagem' && key !== 'idioma') {
        const fieldError = validateField(key, data[key as keyof typeof data]);
        if (fieldError) newErrors[key as keyof FormErrors] = fieldError;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError(t.errorMessage);
      setLoading(false);
      return;
    }

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
        setMessage(t.successMessage);
        (e.target as HTMLFormElement).reset();
        setErrors({});
        setTouched({});

        // Scroll suave para o topo
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        setError(result.message || t.errorMessage);
      }
    } catch (err) {
      setError(t.errorMessage);
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t.title}
        </h2>

        {/* Mensagem de Sucesso */}
        {message && (
          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg animate-fade-in">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        {/* Mensagem de Erro Geral */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg animate-fade-in">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.name} *
              </label>
              <input
                type="text"
                name="nome"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                  errors.nome && touched.nome
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
              />
              {errors.nome && touched.nome && (
                <p className="mt-1 text-sm text-red-600">{errors.nome}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.email} *
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                  errors.email && touched.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.phone} *
              </label>
              <input
                type="tel"
                name="telefone"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                  errors.telefone && touched.telefone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
              />
              {errors.telefone && touched.telefone && (
                <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
              )}
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.city} *
              </label>
              <input
                type="text"
                name="cidade"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                  errors.cidade && touched.cidade
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
              />
              {errors.cidade && touched.cidade && (
                <p className="mt-1 text-sm text-red-600">{errors.cidade}</p>
              )}
            </div>
          </div>

          {/* Serviço */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.service} *
            </label>
            <select
              name="servicoInteresse"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.servicoInteresse && touched.servicoInteresse
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
            >
              <option value="">{t.selectService}</option>
              {t.services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.servicoInteresse && touched.servicoInteresse && (
              <p className="mt-1 text-sm text-red-600">{errors.servicoInteresse}</p>
            )}
          </div>

          {/* Mensagem */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.message}
            </label>
            <textarea
              name="mensagem"
              rows={4}
              maxLength={1000}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
            ></textarea>
          </div>

          {/* Botão Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.sending}
              </>
            ) : (
              t.submit
            )}
          </button>
        </form>
      </div>
    </section>
  );
}