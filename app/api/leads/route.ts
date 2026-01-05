import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { leadSchema, errorMessages } from '@/app/_lib/validation/leadValidation';
import { ZodError } from 'zod';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    const userAgent = request.headers.get('user-agent') || '';
    const referer = request.headers.get('referer') || '';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    const deviceType = /mobile/i.test(userAgent) ? 'mobile' : /tablet/i.test(userAgent) ? 'tablet' : 'desktop';

    const lead = await prisma.lead.create({
      data: {
        nome: validatedData.nome,
        email: validatedData.email,
        telefone: validatedData.telefone,
        cidade: validatedData.cidade,
        servicoInteresse: validatedData.servicoInteresse,
        mensagem: validatedData.mensagem || '',
        idioma: validatedData.idioma,
        origem: 'website',
        paginaOrigem: referer,
        ipAddress: ip,
        userAgent,
        deviceType,
        status: 'novo',
        prioridade: 'media',
      },
    });

    console.log('✅ Lead salvo:', lead.id, '-', validatedData.nome, '-', validatedData.email);

    return NextResponse.json({
      success: true,
      message: getSuccessMessage(validatedData.idioma),
      leadId: lead.id,
    });

  } catch (error) {
    if (error instanceof ZodError) {
      const idioma = 'en';
      console.error('❌ Erro de validação:', error.issues);
      
      return NextResponse.json(
        {
          success: false,
          message: errorMessages[idioma].validation,
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('❌ Erro ao processar lead:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}

function getSuccessMessage(idioma: string) {
  const messages: { [key: string]: string } = {
    pt: 'Obrigado! Sua solicitação foi enviada com sucesso. Entraremos em contato em até 24 horas.',
    en: 'Thank you! Your request has been sent successfully. We will contact you within 24 hours.',
    es: '¡Gracias! Su solicitud ha sido enviada con éxito. Lo contactaremos en 24 horas.'
  };
  return messages[idioma] || messages.en;
}
