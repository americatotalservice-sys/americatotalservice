import { z } from 'zod';

export const leadSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),

  email: z.string().email('Email inválido').toLowerCase(),

  telefone: z
    .string()
    .max(20)
    .optional()
    .default('not-informed'),

  cidade: z
    .string()
    .max(100)
    .optional()
    .default('not-informed'),

  servicoInteresse: z.string().min(3, 'Selecione um serviço'),

  mensagem: z.string().max(1000).optional().nullable(),

  idioma: z.enum(['en', 'es', 'pt']).default('en'),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const errorMessages = {
  en: {
    validation: 'Please check the form fields',
    server: 'Server error. Please try again later.',
    required: 'Required fields are missing',
  },
  es: {
    validation: 'Por favor revise los campos del formulario',
    server: 'Error del servidor. Intente nuevamente más tarde.',
    required: 'Faltan campos obligatorios',
  },
  pt: {
    validation: 'Por favor revise os campos do formulário',
    server: 'Erro no servidor. Tente novamente mais tarde.',
    required: 'Campos obrigatórios faltando',
  },
};
