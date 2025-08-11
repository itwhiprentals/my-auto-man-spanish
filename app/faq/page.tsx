'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function FAQPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestros servicios",
      questions: [
        {
          q: "¿Por qué usar un consultor automotriz?",
          a: "Las dos cosas más caras que la mayoría de la gente compra son sus automóviles y sus casas. Cuando compras una casa, contratas a un agente inmobiliario para manejar todos los detalles, hacer las preguntas correctas y negociar el mejor precio. Lo mismo aplica al comprar un auto. Tony/MyAutoman hará todas estas cosas, asegurándose de que nada se pase por alto y garantizando que las transacciones sean en el MEJOR interés del CLIENTE. Lo mejor de todo es que no hay costos ocultos ni tarifas por adelantado."
        },
        {
          q: "¿Puedo ordenar un vehículo específico?",
          a: "Sí. Muy a menudo, ordenar tu vehículo puede ahorrarte aún más dinero. Tenemos acceso a inventarios de concesionarios, subastas y devoluciones de flotas para encontrar exactamente lo que buscas."
        },
        {
          q: "¿Realmente ahorro dinero?",
          a: "Sí. Debido a que manejamos volumen, nuestros contactos de flotas y mayoristas nos venden vehículos a precios mucho más bajos que al público general. Luego pasamos los ahorros a nuestros clientes."
        },
        {
          q: "¿Pueden ayudarme con el financiamiento?",
          a: "Sí. Tenemos varios bancos, incluidas cooperativas de crédito en nuestra red. Encontraremos las mejores tasas y programas disponibles para ti, independientemente del crédito, incluidos todos los anuncios de los fabricantes."
        },
        {
          q: "¿Cómo funciona el proceso?",
          a: "Simple... proporciona a Tony/MyAutoman.com toda la información pertinente y comenzaremos a trabajar para ti. Es decir, nombre y tu información de contacto, vehículo(s) de interés (nuevo o usado, año, marca, modelo, millaje), rango de precio y fecha de entrega deseada. El proceso generalmente toma 2-3 días."
        },
        {
          q: "¿Aceptan intercambios?",
          a: "¡Por supuesto! Te ayudamos a obtener el mejor valor por tu vehículo actual. Evaluamos tu auto y negociamos el mejor precio de intercambio posible."
        },
        {
          q: "¿Qué tipos de vehículos pueden conseguir?",
          a: "Podemos conseguir cualquier tipo de vehículo: nuevos, usados, autos, camionetas, SUVs, de lujo, económicos - lo que necesites. Tenemos acceso a subastas, concesionarios y flotas corporativas."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services",
      questions: [
        {
          q: "Why use an automotive consultant?",
          a: "The two most expensive things most people purchase are their automobiles and their homes. When you're buying a home, you hire a real estate agent to handle all of the details, ask the right questions, and negotiate the best price. Same thing applies when buying a car. Tony/MyAutoman will do all these things, making sure nothing is missed, and ensuring the transactions taking place are in the CUSTOMERS best interest. Best of all there is no hidden cost and no upfront fees."
        },
        {
          q: "Can I order a specific vehicle?",
          a: "Yes. Quite often, ordering your vehicle can save you even more money. We have access to dealer inventories, auctions, and fleet returns to find exactly what you're looking for."
        },
        {
          q: "Do I really save money?",
          a: "Yes. Because we deal in volume, our fleet and wholesale contacts sell vehicles to us at much lower prices than they do to the general public. We then pass the savings on to our customers."
        },
        {
          q: "Can you help with financing?",
          a: "Yes. We have several banks including credit unions in our network. We will find the best rates and programs available to you regardless of credit, including all manufacturers' advertisements."
        },
        {
          q: "How does the process work?",
          a: "Simple… provide Tony/MyAutoman.com with all the pertinent information and we start working for you. i.e. name and your contact info, vehicle(s) of interest (new or previously owned, year, make, model, mileage), dollar range and desired delivery date. The process usually takes 2-3 days."
        },
        {
          q: "Do you accept trade-ins?",
          a: "Absolutely! We help you get the best value for your current vehicle. We evaluate your car and negotiate the best possible trade-in price."
        },
        {
          q: "What types of vehicles can you get?",
          a: "We can get any type of vehicle: new, used, cars, trucks, SUVs, luxury, economy - whatever you need. We have access to auctions, dealerships, and corporate fleets."
        }
      ]
    }
  };

  const content = faqs[language as keyof typeof faqs];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {content.title}
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {content.subtitle}
          </p>

          <div className="space-y-4">
            {content.questions.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'es' 
                ? '¿Tienes más preguntas?' 
                : 'Have more questions?'}
            </h2>
            <p className="mb-6">
              {language === 'es'
                ? 'Estamos aquí para ayudarte. Contáctanos hoy mismo.'
                : "We're here to help. Contact us today."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:602-757-3514"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
              >
                {language === 'es' ? 'Llamar Ahora' : 'Call Now'}
              </a>
              <a
                href="/contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200"
              >
                {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}