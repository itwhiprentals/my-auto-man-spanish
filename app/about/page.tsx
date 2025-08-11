// app/about/page.tsx
'use client';

import { useLanguage } from '../components/LanguageContext';
import Image from 'next/image';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Acerca de My Auto Man",
      subtitle: "Tu Consultor Automotriz de Confianza desde 2004",
      intro: {
        title: "Nuestra Historia",
        text: "My Auto Man - Ahhtoman Automotive Consultants fue fundado con una simple misión: hacer que la compra de autos sea fácil, transparente y asequible. Con más de 20 años de experiencia en la industria automotriz, hemos ayudado a miles de familias en Phoenix, Avondale, Goodyear y las áreas circundantes a encontrar su vehículo perfecto."
      },
      mission: {
        title: "Nuestra Misión",
        text: "Ponemos la alegría de vuelta en la compra de tu auto nuevo o usado. Creemos que comprar un vehículo debe ser una experiencia emocionante y libre de estrés, no una prueba llena de tácticas de venta de alta presión y negociaciones confusas."
      },
      difference: {
        title: "La Diferencia My Auto Man",
        items: [
          {
            title: "Showroom Interior",
            description: "Nuestro showroom interior climatizado te permite evaluar y probar vehículos en un ambiente cómodo, sin presión de ventas ni tácticas de negociación."
          },
          {
            title: "Consultores, No Vendedores",
            description: "Somos consultores automotrices, no vendedores tradicionales. Trabajamos PARA ti, no para un concesionario. Tu satisfacción es nuestra prioridad."
          },
          {
            title: "Relaciones Extensas",
            description: "Tenemos relaciones establecidas con concesionarios, subastas y devoluciones de flotas, lo que nos permite acceder a una amplia variedad de vehículos a precios excepcionales."
          },
          {
            title: "Financiamiento para Todos",
            description: "Trabajamos con múltiples prestamistas, incluyendo cooperativas de crédito, para encontrar las mejores tasas disponibles, sin importar tu historial crediticio."
          }
        ]
      },
      team: {
        title: "Conoce a Nuestro Equipo",
        members: [
          {
            name: "Tony Sibley",
            role: "Fundador y Consultor Principal",
            description: "Con más de 20 años en la industria automotriz, Tony ha construido su reputación ayudando a las familias a encontrar el vehículo perfecto al mejor precio."
          },
          {
            name: "Bobby",
            role: "Consultor Senior",
            description: "Bobby aporta su amplio conocimiento del mercado automotriz y su dedicación para asegurar que cada cliente encuentre exactamente lo que busca."
          }
        ]
      },
      values: {
        title: "Nuestros Valores",
        items: [
          {
            title: "Transparencia",
            description: "Sin costos ocultos, sin tarifas por adelantado. Sabemos exactamente cómo ganamos dinero y lo compartimos contigo."
          },
          {
            title: "Integridad",
            description: "Hacemos lo correcto para nuestros clientes, siempre. Tu mejor interés es nuestra guía."
          },
          {
            title: "Servicio",
            description: "No solo vendemos autos, construimos relaciones. Muchos de nuestros clientes regresan y nos refieren a sus familiares y amigos."
          },
          {
            title: "Experiencia",
            description: "Más de 5,000 clientes satisfechos y contando. Nuestra experiencia trabaja para tu beneficio."
          }
        ]
      },
      community: {
        title: "Compromiso con la Comunidad",
        text: "Estamos orgullosos de servir a las comunidades de Phoenix, Avondale, Goodyear, Glendale, Peoria, Surprise y todas las áreas circundantes del Valle. Como negocio local, entendemos las necesidades únicas de nuestros vecinos y nos comprometemos a proporcionar un servicio excepcional a cada cliente que entra por nuestras puertas."
      },
      credentials: {
        title: "Nuestras Credenciales",
        items: [
          "Licencia de Distribuidor de Arizona #D-19779",
          "Acreditado por BBB con calificación A+",
          "Miembro de la Asociación de Distribuidores Independientes de Arizona",
          "Más de 20 años de experiencia en la industria",
          "Más de 5,000 clientes satisfechos"
        ]
      },
      cta: {
        title: "¿Listo para Experimentar la Diferencia?",
        subtitle: "Descubre por qué miles de familias confían en My Auto Man para sus necesidades automotrices.",
        button: "Contáctanos Hoy",
        callButton: "Llámanos Ahora"
      }
    },
    en: {
      title: "About My Auto Man",
      subtitle: "Your Trusted Automotive Consultant Since 2004",
      intro: {
        title: "Our Story",
        text: "My Auto Man - Ahhtoman Automotive Consultants was founded with a simple mission: to make car buying easy, transparent, and affordable. With over 20 years of experience in the automotive industry, we've helped thousands of families in Phoenix, Avondale, Goodyear, and surrounding areas find their perfect vehicle."
      },
      mission: {
        title: "Our Mission",
        text: "We put the 'Ahh' back into buying your new or used car. We believe that purchasing a vehicle should be an exciting, stress-free experience, not an ordeal filled with high-pressure sales tactics and confusing negotiations."
      },
      difference: {
        title: "The My Auto Man Difference",
        items: [
          {
            title: "Indoor Showroom",
            description: "Our climate-controlled indoor showroom allows you to evaluate and test vehicles in a comfortable environment, free from sales pressure or negotiating tactics."
          },
          {
            title: "Consultants, Not Salespeople",
            description: "We're automotive consultants, not traditional salespeople. We work FOR you, not for a dealership. Your satisfaction is our priority."
          },
          {
            title: "Extensive Relationships",
            description: "We have established relationships with dealers, auctions, and fleet returns, allowing us to access a wide variety of vehicles at exceptional values."
          },
          {
            title: "Financing for Everyone",
            description: "We work with multiple lenders, including credit unions, to find the best rates available regardless of your credit history."
          }
        ]
      },
      team: {
        title: "Meet Our Team",
        members: [
          {
            name: "Tony Sibley",
            role: "Founder & Principal Consultant",
            description: "With over 20 years in the automotive industry, Tony has built his reputation on helping families find the perfect vehicle at the best price."
          },
          {
            name: "Bobby",
            role: "Senior Consultant",
            description: "Bobby brings extensive knowledge of the automotive market and a dedication to ensuring every customer finds exactly what they're looking for."
          }
        ]
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Transparency",
            description: "No hidden costs, no upfront fees. We're clear about how we make money and share that with you."
          },
          {
            title: "Integrity",
            description: "We do what's right for our customers, always. Your best interest is our guide."
          },
          {
            title: "Service",
            description: "We don't just sell cars, we build relationships. Many of our customers return and refer their family and friends."
          },
          {
            title: "Experience",
            description: "Over 5,000 satisfied customers and counting. Our experience works for your benefit."
          }
        ]
      },
      community: {
        title: "Community Commitment",
        text: "We're proud to serve the communities of Phoenix, Avondale, Goodyear, Glendale, Peoria, Surprise, and all surrounding areas of the Valley. As a local business, we understand the unique needs of our neighbors and are committed to providing exceptional service to every customer who walks through our doors."
      },
      credentials: {
        title: "Our Credentials",
        items: [
          "Arizona Dealer License #D-19779",
          "BBB Accredited with A+ Rating",
          "Member of Arizona Independent Auto Dealers Association",
          "20+ Years of Industry Experience",
          "5,000+ Satisfied Customers"
        ]
      },
      cta: {
        title: "Ready to Experience the Difference?",
        subtitle: "Discover why thousands of families trust My Auto Man for their automotive needs.",
        button: "Contact Us Today",
        callButton: "Call Us Now"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-600">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Intro Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {currentContent.intro.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentContent.intro.text}
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {currentContent.mission.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "{currentContent.mission.text}"
            </p>
          </div>

          {/* The Difference Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {currentContent.difference.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentContent.difference.items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {currentContent.team.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.team.members.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {currentContent.values.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.values.items.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {currentContent.community.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {currentContent.community.text}
            </p>
          </div>

          {/* Credentials Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              {currentContent.credentials.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentContent.credentials.items.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-95">
              {currentContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                {currentContent.cta.button}
              </a>
              <a
                href="tel:602-757-3514"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors inline-block"
              >
                {currentContent.cta.callButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}