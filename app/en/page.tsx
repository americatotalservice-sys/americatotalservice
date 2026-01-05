// app/en/page.tsx
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import HeroForm from '../components/HeroForm';
import StructuredData from '../components/StructuredData';
import { generateMetadata as generateSEOMetadata } from '../_lib/seo/metadata';

export const metadata = generateSEOMetadata('en');

export default function HomePage() {
  return (
    <>
      <StructuredData lang="en" />

      <div className="min-h-screen">
        {/* Hero Section with Integrated Form */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Reliable Services For Your Home and Business in the USA
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Renovations, maintenance and installations with professional quality.
                  Trilingual service in English, Spanish and Portuguese.
                </p>
                
                {/* Social Proof */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-2xl">★★★★★</div>
                    <div className="text-white">
                      <span className="font-bold text-xl">4.9/5</span>
                      <span className="text-blue-200 text-sm ml-1">Rating</span>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-blue-400"></div>
                  <div className="text-white">
                    <span className="font-bold text-xl">500+</span>
                    <span className="text-blue-200 text-sm ml-1">Happy Customers</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Free Estimates</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white text-sm">Trilingual Team</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Quick Form */}
              <HeroForm idioma="en" />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Getting your project done is easy. Follow these simple steps and we'll take care of the rest.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  icon: '📝',
                  title: 'Request a Quote',
                  description: 'Fill out our quick form or call us directly. Tell us about your project.'
                },
                {
                  step: '2',
                  icon: '📞',
                  title: 'Get a Call Back',
                  description: 'Our team will contact you within 24 hours to discuss details.'
                },
                {
                  step: '3',
                  icon: '📋',
                  title: 'Receive Your Estimate',
                  description: 'Get a detailed, no-obligation quote for your project.'
                },
                {
                  step: '4',
                  icon: '🔨',
                  title: 'Work Gets Done',
                  description: 'Our professionals complete the job to your satisfaction.'
                }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200"></div>
                  )}
                  {/* Step Circle */}
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
              Our Services
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From small repairs to complete renovations, we handle it all with professionalism and care.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🔨',
                  title: 'Renovations & Maintenance',
                  description: 'Complete home renovations, repairs, and preventive maintenance services.'
                },
                {
                  icon: '🏠',
                  title: 'Residential Services',
                  description: 'Cleaning, landscaping, repairs, and general home care services.'
                },
                {
                  icon: '⚡',
                  title: 'Electrical & Plumbing',
                  description: 'Safe and certified electrical and plumbing installations.'
                },
                {
                  icon: '🎨',
                  title: 'Painting Services',
                  description: 'Interior and exterior painting with premium quality finishes.'
                },
                {
                  icon: '🚪',
                  title: 'Cabinet Installation',
                  description: 'Kitchen and bathroom cabinet installation and customization.'
                },
                {
                  icon: '🪵',
                  title: 'Flooring',
                  description: 'Hardwood, laminate, tile, and vinyl flooring installation.'
                },
                {
                  icon: '🛠️',
                  title: 'Handyman Services',
                  description: 'General repairs, assembly, and small projects around the house.'
                },
                {
                  icon: '✨',
                  title: 'Custom Projects',
                  description: 'Tailored solutions for your unique home improvement needs.'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose America Total Service?
            </h2>
            <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and customer satisfaction on every project.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: '🌐', title: 'Trilingual Service', desc: 'English, Spanish & Portuguese' },
                { icon: '⚡', title: 'Fast Response', desc: 'Quotes within 24 hours' },
                { icon: '🎯', title: 'Quality Guaranteed', desc: 'Certified professionals' },
                { icon: '💰', title: 'Fair Pricing', desc: 'No hidden fees' },
                { icon: '🛡️', title: 'Licensed & Insured', desc: 'Full protection' },
                { icon: '⭐', title: 'Top Rated', desc: '4.9/5.0 rating' },
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
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Maria S.',
                  location: 'Orlando, FL',
                  text: 'Excellent service! They renovated my kitchen and the result exceeded my expectations. Very professional team.',
                  rating: 5
                },
                {
                  name: 'John D.',
                  location: 'Winter Garden, FL',
                  text: 'Fast, reliable, and fair pricing. I\'ve used them for multiple projects and they always deliver quality work.',
                  rating: 5
                },
                {
                  name: 'Carlos M.',
                  location: 'Kissimmee, FL',
                  text: 'Great to have a company that speaks Portuguese! Made everything so much easier. Highly recommend.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex text-yellow-400 mb-4">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free, no-obligation quote today. Our team is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+13213565020"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition"
              >
                📞 Call (321) 356-5020
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <LeadForm idioma="en" />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">America Total Service</h3>
                <p className="text-gray-400 mb-4">
                  Reliable services for your home and business in Central Florida.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
                  <a href="#" className="text-gray-400 hover:text-white text-2xl">📸</a>
                  <a href="#" className="text-gray-400 hover:text-white text-2xl">🔗</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/en" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="/en/become-partner" className="text-gray-400 hover:text-white">Become a Partner</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Orlando</li>
                  <li>Winter Garden</li>
                  <li>Kissimmee</li>
                  <li>All Central Florida</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 (321) 356-5020</li>
                  <li>📧 info@americatotalservice.com</li>
                  <li>📍 Central Florida</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex gap-2">
                    <Link href="/en" className="px-3 py-1 bg-blue-600 rounded text-sm">EN</Link>
                    <Link href="/es" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">ES</Link>
                    <Link href="/pt" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">PT</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 America Total Service. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
