// app/pt/page.tsx
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import HeroForm from '../components/HeroForm';
import StructuredData from '../components/StructuredData';
import { generateMetadata as generateSEOMetadata } from '../_lib/seo/metadata';

export const metadata = generateSEOMetadata('pt');

export default function HomePage() {
  return (
    <>
      <StructuredData lang="pt" />

      <div className="min-h-screen">
        {/* Hero Section with Integrated Form */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Serviços Confiáveis Para Sua Casa e Negócio nos EUA
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Reformas, manutenções e instalações com qualidade profissional.
                  Atendimento trilíngue em Inglês, Espanhol e Português.
                </p>
                
                {/* Social Proof */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-2xl">★★★★★</div>
                    <div className="text-white">
                      <span className="font-bold text-xl">4.9/5</span>
                      <span className="text-blue-200 text-sm ml-1">Avaliação</span>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-blue-400"></div>
                  <div className="text-white">
                    <span className="font-bold text-xl">500+</span>
                    <span className="text-blue-200 text-sm ml-1">Clientes Satisfeitos</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Licenciado e Segurado</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Orçamento Grátis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Equipe Trilíngue</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Quick Form */}
              <HeroForm idioma="pt" />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Realizar seu projeto é fácil. Siga estes passos simples e nós cuidamos do resto.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  icon: '📝',
                  title: 'Solicite um Orçamento',
                  description: 'Preencha nosso formulário rápido ou ligue diretamente.'
                },
                {
                  step: '2',
                  icon: '📞',
                  title: 'Receba uma Ligação',
                  description: 'Nossa equipe entrará em contato em 24 horas para discutir detalhes.'
                },
                {
                  step: '3',
                  icon: '📋',
                  title: 'Receba Seu Orçamento',
                  description: 'Obtenha um orçamento detalhado e sem compromisso.'
                },
                {
                  step: '4',
                  icon: '🔨',
                  title: 'Trabalho Realizado',
                  description: 'Nossos profissionais completam o trabalho com sua satisfação.'
                }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200"></div>
                  )}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50" id="services">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              De pequenos reparos a reformas completas, cuidamos de tudo com profissionalismo.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔨', title: 'Reformas e Manutenção', description: 'Reformas completas, reparos e manutenção preventiva.' },
                { icon: '🏠', title: 'Serviços Residenciais', description: 'Limpeza, jardinagem, reparos e cuidados gerais da casa.' },
                { icon: '⚡', title: 'Elétrica e Hidráulica', description: 'Instalações elétricas e hidráulicas seguras e certificadas.' },
                { icon: '🎨', title: 'Serviços de Pintura', description: 'Pintura interna e externa com acabamentos de primeira qualidade.' },
                { icon: '🚪', title: 'Instalação de Armários', description: 'Instalação e personalização de armários de cozinha e banheiro.' },
                { icon: '🪵', title: 'Pisos', description: 'Instalação de pisos de madeira, laminado, cerâmica e vinílico.' },
                { icon: '🛠️', title: 'Serviços de Handyman', description: 'Reparos gerais e pequenos projetos pela casa.' },
                { icon: '✨', title: 'Projetos Personalizados', description: 'Soluções sob medida para suas necessidades únicas.' }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Por Que Escolher a America Total Service?
            </h2>
            <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
              Estamos comprometidos em entregar qualidade excepcional e satisfação do cliente em cada projeto.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: '🌐', title: 'Serviço Trilíngue', desc: 'Inglês, Espanhol e Português' },
                { icon: '⚡', title: 'Resposta Rápida', desc: 'Orçamentos em 24 horas' },
                { icon: '🎯', title: 'Qualidade Garantida', desc: 'Profissionais certificados' },
                { icon: '💰', title: 'Preços Justos', desc: 'Sem taxas ocultas' },
                { icon: '🛡️', title: 'Licenciado e Segurado', desc: 'Proteção total' },
                { icon: '⭐', title: 'Melhor Avaliado', desc: 'Avaliação 4.9/5.0' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Não confie apenas em nossa palavra. Veja o que nossos clientes satisfeitos têm a dizer.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Maria S.', location: 'Orlando, FL', text: 'Serviço excelente! Reformaram minha cozinha e o resultado superou minhas expectativas. Equipe muito profissional.', rating: 5 },
                { name: 'João D.', location: 'Winter Garden, FL', text: 'Rápidos, confiáveis e preços justos. Já usei para vários projetos e sempre entregam trabalho de qualidade.', rating: 5 },
                { name: 'Carlos M.', location: 'Kissimmee, FL', text: 'Ótimo ter uma empresa que fala português! Tudo ficou muito mais fácil. Altamente recomendado.', rating: 5 }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex text-yellow-400 mb-4">{'★'.repeat(testimonial.rating)}</div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto Para Começar Seu Projeto?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Obtenha um orçamento grátis e sem compromisso hoje. Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition">
                Solicitar Orçamento Grátis
              </a>
              <a href="tel:+13213565020" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                📞 Ligar (321) 356-5020
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <LeadForm idioma="pt" />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">America Total Service</h3>
                <p className="text-gray-400 mb-4">Serviços confiáveis para sua casa e negócio na Flórida Central.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                  <li><a href="/pt" className="text-gray-400 hover:text-white">Início</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Áreas de Atendimento</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Orlando</li>
                  <li>Winter Garden</li>
                  <li>Kissimmee</li>
                  <li>Toda Flórida Central</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 (321) 356-5020</li>
                  <li>📧 info@americatotalservice.com</li>
                  <li>📍 Flórida Central</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Idiomas</h4>
                  <div className="flex gap-2">
                    <Link href="/en" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">EN</Link>
                    <Link href="/es" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">ES</Link>
                    <Link href="/pt" className="px-3 py-1 bg-blue-600 rounded text-sm">PT</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 America Total Service. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}