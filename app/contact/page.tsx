// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    subject: '',
    message: '',
    bestTime: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const content = {
    es: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte a encontrar tu vehículo perfecto",
      form: {
        title: "Envíanos un Mensaje",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Teléfono",
        preferredContact: "Método de Contacto Preferido",
        preferPhone: "Teléfono",
        preferEmail: "Correo Electrónico",
        preferText: "Mensaje de Texto",
        subject: "Asunto",
        message: "Mensaje",
        bestTime: "Mejor Hora para Contactarte",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        subjects: [
          "Información General",
          "Financiamiento",
          "Buscar un Vehículo",
          "Intercambio",
          "Programar una Cita",
          "Otro"
        ]
      },
      info: {
        title: "Información de Contacto",
        address: "Dirección",
        phone: "Teléfono",
        fax: "Fax",
        email: "Correo",
        hours: "Horario de Atención",
        monday: "Lunes - Viernes",
        saturday: "Sábado",
        sunday: "Domingo",
        closed: "Cerrado"
      },
      features: {
        title: "¿Por Qué Visitarnos?",
        items: [
          {
            title: "Showroom Interior",
            description: "Ambiente cómodo sin presión de ventas"
          },
          {
            title: "Consulta Gratuita",
            description: "Asesoramiento experto sin costo"
          },
          {
            title: "Respuesta Rápida",
            description: "Te contactamos dentro de 24 horas"
          },
          {
            title: "Servicio Personalizado",
            description: "Atención individual para tus necesidades"
          }
        ]
      },
      success: {
        title: "¡Mensaje Enviado!",
        message: "Gracias por contactarnos. Te responderemos pronto.",
        button: "Enviar Otro Mensaje"
      },
      directions: {
        title: "Cómo Llegar",
        fromPhoenix: "Desde Phoenix: Toma la I-10 Oeste hacia Avondale. Sal en la salida 131 para Avondale Blvd.",
        fromGlendale: "Desde Glendale: Toma la US-101 Sur hasta la I-10 Oeste. Continúa hacia Avondale.",
        parking: "Amplio estacionamiento gratuito disponible"
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to help you find your perfect vehicle",
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        preferredContact: "Preferred Contact Method",
        preferPhone: "Phone",
        preferEmail: "Email",
        preferText: "Text Message",
        subject: "Subject",
        message: "Message",
        bestTime: "Best Time to Contact You",
        submit: "Send Message",
        sending: "Sending...",
        subjects: [
          "General Information",
          "Financing",
          "Find a Vehicle",
          "Trade-In",
          "Schedule Appointment",
          "Other"
        ]
      },
      info: {
        title: "Contact Information",
        address: "Address",
        phone: "Phone",
        fax: "Fax",
        email: "Email",
        hours: "Business Hours",
        monday: "Monday - Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed"
      },
      features: {
        title: "Why Visit Us?",
        items: [
          {
            title: "Indoor Showroom",
            description: "Comfortable environment with no sales pressure"
          },
          {
            title: "Free Consultation",
            description: "Expert advice at no cost"
          },
          {
            title: "Quick Response",
            description: "We'll contact you within 24 hours"
          },
          {
            title: "Personalized Service",
            description: "Individual attention for your needs"
          }
        ]
      },
      success: {
        title: "Message Sent!",
        message: "Thank you for contacting us. We'll get back to you soon.",
        button: "Send Another Message"
      },
      directions: {
        title: "How to Get Here",
        fromPhoenix: "From Phoenix: Take I-10 West to Avondale. Exit at Exit 131 for Avondale Blvd.",
        fromGlendale: "From Glendale: Take US-101 South to I-10 West. Continue to Avondale.",
        parking: "Ample free parking available"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'phone',
      subject: '',
      message: '',
      bestTime: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-lg p-12">
              <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {currentContent.success.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {currentContent.success.message}
              </p>
              <button
                onClick={resetForm}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                {currentContent.success.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {currentContent.title}
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {currentContent.subtitle}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {currentContent.form.title}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.preferredContact}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {currentContent.form.preferPhone}
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {currentContent.form.preferEmail}
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="text"
                          checked={formData.preferredContact === 'text'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {currentContent.form.preferText}
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.subject}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="">-- Select --</option>
                        {currentContent.form.subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.bestTime}
                      </label>
                      <input
                        type="text"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        placeholder={language === 'es' ? "ej: Mañanas, Tardes" : "e.g., Mornings, Afternoons"}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
                  >
                    {currentContent.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              {/* Contact Info Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {currentContent.info.title}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">{currentContent.info.address}</h3>
                      <p className="text-gray-600">1050 N Fairway Dr</p>
                      <p className="text-gray-600">Avondale, AZ 85323</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">{currentContent.info.phone}</h3>
                      <a href="tel:602-757-3514" className="text-blue-600 hover:text-blue-800">
                        (602) 757-3514
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">{currentContent.info.email}</h3>
                      <a href="mailto:tsibley@myautoman.com" className="text-blue-600 hover:text-blue-800">
                        tsibley@myautoman.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">{currentContent.info.fax}</h3>
                      <p className="text-gray-600">(602) 422-6691</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-800 mb-3">{currentContent.info.hours}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{currentContent.info.monday}:</span>
                      <span>9:30 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{currentContent.info.saturday}:</span>
                      <span>11:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{currentContent.info.sunday}:</span>
                      <span>{currentContent.info.closed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {currentContent.features.title}
                </h3>
                <div className="space-y-3">
                  {currentContent.features.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Call Button */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'es' ? '¿Prefieres Llamar?' : 'Prefer to Call?'}
                </h3>
                <p className="mb-4">
                  {language === 'es' 
                    ? 'Habla con nuestro equipo ahora'
                    : 'Speak with our team now'}
                </p>
                <a
                  href="tel:602-757-3514"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (602) 757-3514
                </a>
              </div>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {currentContent.directions.title}
              </h2>
              
              {/* Map */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-md h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.8665191907!2d-112.3446!3d33.3745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIyJzI4LjIiTiAxMTLCsDIwJzQwLjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Directions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'es' ? 'Desde Phoenix' : 'From Phoenix'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentContent.directions.fromPhoenix}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'es' ? 'Desde Glendale' : 'From Glendale'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentContent.directions.fromGlendale}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {currentContent.directions.parking}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}