'use client';

import { useLanguage } from '../components/LanguageContext';

export default function TestimonialsPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Experiencias reales de clientes satisfechos",
      testimonials: [
        {
          name: "María González",
          rating: 5,
          text: "Trabajé con Bobby y Tony. Mucho más fácil que ir a un concesionario grande. ¡Gracias muchachos!",
          vehicle: "Honda CR-V 2023",
          date: "Hace 2 semanas"
        },
        {
          name: "Carlos Rodríguez",
          rating: 5,
          text: "Excelente servicio! Me ayudaron a conseguir financiamiento cuando otros me rechazaron. El proceso fue rápido y sin presión.",
          vehicle: "Toyota Camry 2022",
          date: "Hace 1 mes"
        },
        {
          name: "Ana Martínez",
          rating: 5,
          text: "Tony encontró exactamente el auto que buscaba a un precio increíble. Me ahorraron miles de dólares. Altamente recomendado!",
          vehicle: "Ford F-150 2023",
          date: "Hace 3 semanas"
        },
        {
          name: "Roberto Silva",
          rating: 5,
          text: "Primera vez comprando un auto y me hicieron sentir cómodo durante todo el proceso. Sin trucos, sin presión, solo honestidad.",
          vehicle: "Nissan Altima 2023",
          date: "Hace 2 meses"
        },
        {
          name: "Laura Hernández",
          rating: 5,
          text: "Mi crédito no era el mejor, pero ellos trabajaron duro para conseguirme una gran tasa. Estoy muy agradecida!",
          vehicle: "Chevrolet Equinox 2022",
          date: "Hace 1 mes"
        },
        {
          name: "Miguel Torres",
          rating: 5,
          text: "El showroom interior es perfecto - sin presión, tomé mi tiempo. Bobby fue muy paciente y profesional.",
          vehicle: "BMW 3 Series 2023",
          date: "Hace 3 semanas"
        }
      ],
      stats: {
        title: "Nuestros Números Hablan",
        years: "Años de Experiencia",
        customers: "Clientes Satisfechos",
        saved: "Promedio Ahorrado",
        rating: "Calificación Promedio"
      },
      cta: {
        title: "¿Listo para Unirte a Nuestros Clientes Satisfechos?",
        subtitle: "Permítenos ayudarte a encontrar tu auto perfecto",
        button: "Comienza Hoy"
      }
    },
    en: {
      title: "What Our Customers Say",
      subtitle: "Real experiences from satisfied customers",
      testimonials: [
        {
          name: "Maria Gonzalez",
          rating: 5,
          text: "Worked with Bobby and Tony. Much easier than going to a big dealership. Thank you guys!",
          vehicle: "Honda CR-V 2023",
          date: "2 weeks ago"
        },
        {
          name: "Carlos Rodriguez",
          rating: 5,
          text: "Excellent service! They helped me get financing when others turned me down. The process was quick and no pressure.",
          vehicle: "Toyota Camry 2022",
          date: "1 month ago"
        },
        {
          name: "Ana Martinez",
          rating: 5,
          text: "Tony found exactly the car I was looking for at an incredible price. They saved me thousands of dollars. Highly recommended!",
          vehicle: "Ford F-150 2023",
          date: "3 weeks ago"
        },
        {
          name: "Roberto Silva",
          rating: 5,
          text: "First time buying a car and they made me feel comfortable throughout the process. No tricks, no pressure, just honesty.",
          vehicle: "Nissan Altima 2023",
          date: "2 months ago"
        },
        {
          name: "Laura Hernandez",
          rating: 5,
          text: "My credit wasn't the best, but they worked hard to get me a great rate. I'm very grateful!",
          vehicle: "Chevrolet Equinox 2022",
          date: "1 month ago"
        },
        {
          name: "Miguel Torres",
          rating: 5,
          text: "The indoor showroom is perfect - no pressure, I took my time. Bobby was very patient and professional.",
          vehicle: "BMW 3 Series 2023",
          date: "3 weeks ago"
        }
      ],
      stats: {
        title: "Our Numbers Speak",
        years: "Years of Experience",
        customers: "Satisfied Customers",
        saved: "Average Saved",
        rating: "Average Rating"
      },
      cta: {
        title: "Ready to Join Our Satisfied Customers?",
        subtitle: "Let us help you find your perfect car",
        button: "Get Started Today"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const Rating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {currentContent.title}
          </h1>
          <p className="text-lg text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            {currentContent.stats.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">{currentContent.stats.years}</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">{currentContent.stats.customers}</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">$3,500</div>
              <div className="text-gray-600">{currentContent.stats.saved}</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-yellow-500 mb-2">5.0</div>
              <div className="text-gray-600">{currentContent.stats.rating}</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                  <Rating rating={testimonial.rating} />
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">{language === 'es' ? 'Vehículo:' : 'Vehicle:'}</span> {testimonial.vehicle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              {language === 'es' ? 'Video Testimonios' : 'Video Testimonials'}
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500">
                  {language === 'es' 
                    ? 'Videos próximamente' 
                    : 'Videos coming soon'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-95">
              {currentContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/car-finder"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                {currentContent.cta.button}
              </a>
              <a
                href="tel:602-757-3514"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors duration-200 inline-block"
              >
                {language === 'es' ? 'Llamar Ahora' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}