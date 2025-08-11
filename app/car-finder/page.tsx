'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function CarFinderPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    make: '',
    model: '',
    yearMin: '',
    yearMax: '',
    priceRange: '',
    mileage: '',
    color: '',
    features: '',
    tradeIn: 'no',
    tradeInDetails: '',
    financing: 'yes',
    message: ''
  });

  const content = {
    es: {
      title: "Encuentra Tu Auto Perfecto",
      subtitle: "Dinos qué estás buscando y lo encontraremos para ti",
      form: {
        personalInfo: "Información Personal",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Teléfono",
        vehiclePreferences: "Preferencias del Vehículo",
        vehicleType: "Tipo de Vehículo",
        make: "Marca Preferida",
        model: "Modelo Preferido",
        yearRange: "Rango de Año",
        yearMin: "Año Mínimo",
        yearMax: "Año Máximo",
        priceRange: "Rango de Precio",
        mileage: "Millaje Máximo",
        color: "Color Preferido",
        features: "Características Deseadas",
        featuresPlaceholder: "ej: Techo solar, cuero, navegación, etc.",
        tradeIn: "¿Tienes un vehículo para intercambiar?",
        tradeInDetails: "Detalles del vehículo para intercambiar",
        tradeInPlaceholder: "Año, Marca, Modelo, Millaje, Condición",
        financing: "¿Necesitas financiamiento?",
        message: "Mensaje Adicional",
        messagePlaceholder: "Cuéntanos más sobre lo que buscas...",
        submit: "Enviar Solicitud",
        yes: "Sí",
        no: "No"
      },
      success: {
        title: "¡Solicitud Enviada!",
        message: "Hemos recibido tu solicitud. Nuestro equipo comenzará a buscar tu vehículo perfecto y te contactará pronto."
      },
      benefits: {
        title: "¿Por Qué Usar Nuestro Servicio de Búsqueda?",
        items: [
          {
            title: "Acceso a Inventario Exclusivo",
            description: "Tenemos acceso a subastas, flotas corporativas y inventarios de concesionarios"
          },
          {
            title: "Ahorra Tiempo y Dinero",
            description: "No pierdas tiempo visitando múltiples concesionarios - nosotros hacemos el trabajo por ti"
          },
          {
            title: "Negociación Experta",
            description: "20+ años de experiencia negociando los mejores precios"
          },
          {
            title: "Sin Costo para Ti",
            description: "Nuestro servicio es completamente gratuito - ganamos del concesionario"
          }
        ]
      }
    },
    en: {
      title: "Find Your Perfect Car",
      subtitle: "Tell us what you're looking for and we'll find it for you",
      form: {
        personalInfo: "Personal Information",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        vehiclePreferences: "Vehicle Preferences",
        vehicleType: "Vehicle Type",
        make: "Preferred Make",
        model: "Preferred Model",
        yearRange: "Year Range",
        yearMin: "Minimum Year",
        yearMax: "Maximum Year",
        priceRange: "Price Range",
        mileage: "Maximum Mileage",
        color: "Preferred Color",
        features: "Desired Features",
        featuresPlaceholder: "e.g., Sunroof, leather, navigation, etc.",
        tradeIn: "Do you have a trade-in vehicle?",
        tradeInDetails: "Trade-in vehicle details",
        tradeInPlaceholder: "Year, Make, Model, Mileage, Condition",
        financing: "Do you need financing?",
        message: "Additional Message",
        messagePlaceholder: "Tell us more about what you're looking for...",
        submit: "Submit Request",
        yes: "Yes",
        no: "No"
      },
      success: {
        title: "Request Submitted!",
        message: "We've received your request. Our team will start searching for your perfect vehicle and contact you soon."
      },
      benefits: {
        title: "Why Use Our Car Finding Service?",
        items: [
          {
            title: "Access to Exclusive Inventory",
            description: "We have access to auctions, corporate fleets, and dealer inventories"
          },
          {
            title: "Save Time and Money",
            description: "Don't waste time visiting multiple dealerships - we do the work for you"
          },
          {
            title: "Expert Negotiation",
            description: "20+ years of experience negotiating the best prices"
          },
          {
            title: "No Cost to You",
            description: "Our service is completely free - we get paid by the dealer"
          }
        ]
      }
    }
  };

  const currentContent = content[language as keyof typeof content];
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        make: '',
        model: '',
        yearMin: '',
        yearMax: '',
        priceRange: '',
        mileage: '',
        color: '',
        features: '',
        tradeIn: 'no',
        tradeInDetails: '',
        financing: 'yes',
        message: ''
      });
    }, 5000);
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
              <p className="text-lg text-gray-600">
                {currentContent.success.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {currentContent.title}
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {currentContent.subtitle}
          </p>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              {currentContent.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentContent.benefits.items.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-blue-600">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Personal Information */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {currentContent.form.personalInfo}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
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
            <div className="mb-6">
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

            {/* Vehicle Preferences */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {currentContent.form.vehiclePreferences}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.vehicleType}
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">-- Select --</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="coupe">Coupe</option>
                  <option value="minivan">Minivan</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.priceRange}
                </label>
                <select
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">-- Select --</option>
                  <option value="0-15000">$0 - $15,000</option>
                  <option value="15000-25000">$15,000 - $25,000</option>
                  <option value="25000-35000">$25,000 - $35,000</option>
                  <option value="35000-50000">$35,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.make}
                </label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Toyota, Honda, Ford, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.model}
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Camry, CR-V, F-150, etc."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.yearMin}
                </label>
                <input
                  type="text"
                  name="yearMin"
                  value={formData.yearMin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.yearMax}
                </label>
                <input
                  type="text"
                  name="yearMax"
                  value={formData.yearMax}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.color}
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.features}
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={currentContent.form.featuresPlaceholder}
              />
            </div>

            {/* Trade-in */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.tradeIn}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tradeIn"
                    value="yes"
                    checked={formData.tradeIn === 'yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.yes}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tradeIn"
                    value="no"
                    checked={formData.tradeIn === 'no'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.no}
                </label>
              </div>
            </div>

            {formData.tradeIn === 'yes' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.tradeInDetails}
                </label>
                <textarea
                  name="tradeInDetails"
                  value={formData.tradeInDetails}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder={currentContent.form.tradeInPlaceholder}
                />
              </div>
            )}

            {/* Financing */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.financing}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="financing"
                    value="yes"
                    checked={formData.financing === 'yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.yes}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="financing"
                    value="no"
                    checked={formData.financing === 'no'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.no}
                </label>
              </div>
            </div>

            {/* Additional Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={currentContent.form.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
            >
              {currentContent.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}