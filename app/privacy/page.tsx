// app/privacy/page.tsx
'use client';

import { useLanguage } from '../components/LanguageContext';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Enero 2025",
      sections: [
        {
          title: "Introducción",
          content: "En Ahhtoman Automotive Consultants (\"My Auto Man\", \"nosotros\", \"nuestro\"), respetamos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web o utiliza nuestros servicios."
        },
        {
          title: "Información que Recopilamos",
          content: "Podemos recopilar información sobre usted de varias maneras, incluyendo:",
          list: [
            "Información Personal: nombre, dirección, correo electrónico, número de teléfono",
            "Información Financiera: para solicitudes de crédito (procesada de forma segura)",
            "Información del Vehículo: preferencias, historial de intercambio",
            "Información de Uso: páginas visitadas, tiempo en el sitio, direcciones IP"
          ]
        },
        {
          title: "Cómo Usamos Su Información",
          content: "Utilizamos la información recopilada para:",
          list: [
            "Procesar sus solicitudes y transacciones",
            "Buscar vehículos según sus preferencias",
            "Procesar solicitudes de financiamiento",
            "Comunicarnos con usted sobre nuestros servicios",
            "Mejorar nuestro sitio web y servicios",
            "Cumplir con obligaciones legales"
          ]
        },
        {
          title: "Compartir Información",
          content: "Podemos compartir su información con:",
          list: [
            "Instituciones financieras para procesar solicitudes de crédito",
            "Concesionarios asociados para encontrar su vehículo",
            "Proveedores de servicios que nos ayudan a operar nuestro negocio",
            "Autoridades legales cuando sea requerido por ley"
          ],
          note: "Nunca vendemos su información personal a terceros para fines de marketing."
        },
        {
          title: "Seguridad de Datos",
          content: "Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:",
          list: [
            "Encriptación SSL para todas las transmisiones de datos",
            "Almacenamiento seguro de información sensible",
            "Acceso limitado a información personal",
            "Auditorías regulares de seguridad"
          ]
        },
        {
          title: "Sus Derechos",
          content: "Usted tiene derecho a:",
          list: [
            "Acceder a su información personal",
            "Corregir información inexacta",
            "Solicitar la eliminación de su información",
            "Optar por no recibir comunicaciones de marketing",
            "Solicitar una copia de su información"
          ]
        },
        {
          title: "Cookies",
          content: "Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede controlar el uso de cookies a través de la configuración de su navegador."
        },
        {
          title: "Privacidad de Menores",
          content: "Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos conscientemente información personal de menores."
        },
        {
          title: "Cambios a Esta Política",
          content: "Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página con una nueva fecha de \"última actualización\"."
        },
        {
          title: "Contáctenos",
          content: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos:",
          contactInfo: {
            company: "Ahhtoman Automotive Consultants",
            address: "1050 N Fairway Dr, Avondale, AZ 85323",
            phone: "(602) 757-3514",
            email: "tsibley@myautoman.com"
          }
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "Introduction",
          content: "At Ahhtoman Automotive Consultants (\"My Auto Man\", \"we\", \"our\"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
        },
        {
          title: "Information We Collect",
          content: "We may collect information about you in various ways, including:",
          list: [
            "Personal Information: name, address, email, phone number",
            "Financial Information: for credit applications (securely processed)",
            "Vehicle Information: preferences, trade-in history",
            "Usage Information: pages visited, time on site, IP addresses"
          ]
        },
        {
          title: "How We Use Your Information",
          content: "We use collected information to:",
          list: [
            "Process your requests and transactions",
            "Search for vehicles based on your preferences",
            "Process financing applications",
            "Communicate with you about our services",
            "Improve our website and services",
            "Comply with legal obligations"
          ]
        },
        {
          title: "Information Sharing",
          content: "We may share your information with:",
          list: [
            "Financial institutions to process credit applications",
            "Partner dealerships to find your vehicle",
            "Service providers who help us operate our business",
            "Legal authorities when required by law"
          ],
          note: "We never sell your personal information to third parties for marketing purposes."
        },
        {
          title: "Data Security",
          content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:",
          list: [
            "SSL encryption for all data transmissions",
            "Secure storage of sensitive information",
            "Limited access to personal information",
            "Regular security audits"
          ]
        },
        {
          title: "Your Rights",
          content: "You have the right to:",
          list: [
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Opt-out of marketing communications",
            "Request a copy of your information"
          ]
        },
        {
          title: "Cookies",
          content: "We use cookies and similar technologies to enhance your experience on our website. You can control cookie usage through your browser settings."
        },
        {
          title: "Children's Privacy",
          content: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors."
        },
        {
          title: "Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with a new \"last updated\" date."
        },
        {
          title: "Contact Us",
          content: "If you have questions about this Privacy Policy, please contact us:",
          contactInfo: {
            company: "Ahhtoman Automotive Consultants",
            address: "1050 N Fairway Dr, Avondale, AZ 85323",
            phone: "(602) 757-3514",
            email: "tsibley@myautoman.com"
          }
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {currentContent.title}
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              {currentContent.lastUpdated}
            </p>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {section.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {section.content}
                  </p>

                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                      <p className="text-blue-800 font-semibold">
                        {section.note}
                      </p>
                    </div>
                  )}

                  {section.contactInfo && (
                    <div className="bg-gray-100 rounded-lg p-6 mt-4">
                      <p className="font-semibold text-gray-800 mb-2">
                        {section.contactInfo.company}
                      </p>
                      <p className="text-gray-600">
                        {section.contactInfo.address}
                      </p>
                      <p className="text-gray-600">
                        {language === 'es' ? 'Teléfono:' : 'Phone:'} {' '}
                        <a href={`tel:${section.contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-blue-600 hover:text-blue-800">
                          {section.contactInfo.phone}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        {language === 'es' ? 'Correo:' : 'Email:'} {' '}
                        <a href={`mailto:${section.contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                          {section.contactInfo.email}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Legal Notes */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {language === 'es' ? 'Información Legal Adicional' : 'Additional Legal Information'}
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  {language === 'es'
                    ? 'Este sitio web es operado por Ahhtoman Automotive Consultants, LLC.'
                    : 'This website is operated by Ahhtoman Automotive Consultants, LLC.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Licencia de Distribuidor de Arizona #D-19779'
                    : 'Arizona Dealer License #D-19779'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Acreditado por el Better Business Bureau'
                    : 'Better Business Bureau Accredited'}
                </p>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}