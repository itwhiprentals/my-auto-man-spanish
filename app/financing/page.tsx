// app/financing/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function FinancingPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    middleInitial: '',
    ssn: '',
    provideSsnLater: false,
    dob: '',
    phone: '',
    email: '',
    
    // Address Information
    address: '',
    city: '',
    state: 'AZ',
    zipCode: '',
    yearsAtAddress: '',
    monthlyRent: '',
    
    // Employment Information
    employer: '',
    occupation: '',
    yearsEmployed: '',
    monthlyIncome: '',
    employerPhone: '',
    
    // Co-Applicant Option
    hasCoApplicant: 'no',
    coFirstName: '',
    coLastName: '',
    coSSN: '',
    coDOB: '',
    coPhone: '',
    coEmployer: '',
    coMonthlyIncome: '',
    
    // Additional Information
    downPayment: '',
    tradeIn: 'no',
    tradeInDetails: '',
    tradeInPhotos: null,
    bankruptcy: 'no',
    comments: '',
    
    // Document Upload
    provideDocsLater: false,
    driversLicense: null,
    proofOfIncome: null,
    proofOfResidence: null,
    insurance: null
  });

  const content = {
    es: {
      title: "Solicitud de Financiamiento",
      subtitle: "Aprobación rápida para todos los tipos de crédito",
      disclaimer: "Tu información está segura y encriptada. Solo la usamos para procesar tu solicitud de crédito.",
      form: {
        personalInfo: "Información Personal",
        firstName: "Nombre",
        lastName: "Apellido",
        middleInitial: "Inicial del Segundo Nombre",
        ssn: "Número de Seguro Social",
        ssnNote: "Puedes proporcionar tu SSN ahora o en nuestra oficina",
        provideSsnLater: "Prefiero proporcionar mi SSN en la oficina",
        dob: "Fecha de Nacimiento",
        phone: "Teléfono",
        email: "Correo Electrónico",
        
        addressInfo: "Información de Dirección",
        address: "Dirección",
        city: "Ciudad",
        state: "Estado",
        zipCode: "Código Postal",
        yearsAtAddress: "Años en esta Dirección",
        monthlyRent: "Renta/Hipoteca Mensual",
        
        employmentInfo: "Información de Empleo",
        employer: "Empleador",
        occupation: "Ocupación",
        yearsEmployed: "Años Empleado",
        monthlyIncome: "Ingreso Mensual Bruto",
        employerPhone: "Teléfono del Empleador",
        
        coApplicant: "Co-Aplicante",
        hasCoApplicant: "¿Tienes un co-aplicante?",
        coFirstName: "Nombre del Co-Aplicante",
        coLastName: "Apellido del Co-Aplicante",
        coSSN: "SSN del Co-Aplicante",
        coDOB: "Fecha de Nacimiento del Co-Aplicante",
        coPhone: "Teléfono del Co-Aplicante",
        coEmployer: "Empleador del Co-Aplicante",
        coMonthlyIncome: "Ingreso Mensual del Co-Aplicante",
        
        additionalInfo: "Información Adicional",
        downPayment: "Pago Inicial Disponible",
        tradeIn: "¿Tienes un vehículo para intercambiar?",
        tradeInDetails: "Detalles del vehículo (Año, Marca, Modelo, Millaje)",
        tradeInPhotos: "Subir fotos del vehículo para intercambiar",
        uploadPhotos: "Seleccionar Fotos",
        bankruptcy: "¿Has declarado bancarrota en los últimos 7 años?",
        comments: "Comentarios Adicionales",
        
        uploadInfo: "Cargar Documentos",
        uploadNote: "Puedes cargar documentos ahora o traerlos a la oficina",
        provideDocsLater: "Prefiero traer los documentos a la oficina",
        driversLicense: "Licencia de Conducir",
        proofOfIncome: "Comprobante de Ingresos (talón de cheque)",
        proofOfResidence: "Comprobante de Residencia",
        insurance: "Prueba de Seguro",
        uploadFile: "Seleccionar Archivo",
        
        yes: "Sí",
        no: "No",
        submit: "Enviar Solicitud",
        required: "* Campos requeridos (a menos que se indique lo contrario)"
      },
      benefits: {
        title: "Por Qué Financiar con Nosotros",
        items: [
          "Aprobación en minutos",
          "Trabajamos con todo tipo de crédito",
          "Múltiples opciones de prestamistas",
          "Las mejores tasas disponibles",
          "Sin cargos ocultos",
          "Proceso seguro y confidencial"
        ]
      },
      success: {
        title: "¡Solicitud Enviada!",
        message: "Hemos recibido tu solicitud de financiamiento. Te contactaremos pronto con las opciones de aprobación."
      }
    },
    en: {
      title: "Financing Application",
      subtitle: "Quick approval for all credit types",
      disclaimer: "Your information is secure and encrypted. We only use it to process your credit application.",
      form: {
        personalInfo: "Personal Information",
        firstName: "First Name",
        lastName: "Last Name",
        middleInitial: "Middle Initial",
        ssn: "Social Security Number",
        ssnNote: "You can provide your SSN now or at our office",
        provideSsnLater: "I prefer to provide my SSN at the office",
        dob: "Date of Birth",
        phone: "Phone Number",
        email: "Email Address",
        
        addressInfo: "Address Information",
        address: "Street Address",
        city: "City",
        state: "State",
        zipCode: "ZIP Code",
        yearsAtAddress: "Years at Address",
        monthlyRent: "Monthly Rent/Mortgage",
        
        employmentInfo: "Employment Information",
        employer: "Employer",
        occupation: "Occupation",
        yearsEmployed: "Years Employed",
        monthlyIncome: "Gross Monthly Income",
        employerPhone: "Employer Phone",
        
        coApplicant: "Co-Applicant",
        hasCoApplicant: "Do you have a co-applicant?",
        coFirstName: "Co-Applicant First Name",
        coLastName: "Co-Applicant Last Name",
        coSSN: "Co-Applicant SSN",
        coDOB: "Co-Applicant Date of Birth",
        coPhone: "Co-Applicant Phone",
        coEmployer: "Co-Applicant Employer",
        coMonthlyIncome: "Co-Applicant Monthly Income",
        
        additionalInfo: "Additional Information",
        downPayment: "Available Down Payment",
        tradeIn: "Do you have a trade-in vehicle?",
        tradeInDetails: "Trade-in vehicle details (Year, Make, Model, Mileage)",
        tradeInPhotos: "Upload photos of trade-in vehicle",
        uploadPhotos: "Select Photos",
        bankruptcy: "Have you filed for bankruptcy in the last 7 years?",
        comments: "Additional Comments",
        
        uploadInfo: "Upload Documents",
        uploadNote: "You can upload documents now or bring them to the office",
        provideDocsLater: "I prefer to bring documents to the office",
        driversLicense: "Driver's License",
        proofOfIncome: "Proof of Income (pay stub)",
        proofOfResidence: "Proof of Residence",
        insurance: "Proof of Insurance",
        uploadFile: "Select File",
        
        yes: "Yes",
        no: "No",
        submit: "Submit Application",
        required: "* Required fields (unless noted otherwise)"
      },
      benefits: {
        title: "Why Finance with Us",
        items: [
          "Approval in minutes",
          "We work with all credit types",
          "Multiple lender options",
          "Best rates available",
          "No hidden fees",
          "Secure and confidential process"
        ]
      },
      success: {
        title: "Application Submitted!",
        message: "We've received your financing application. We'll contact you soon with approval options."
      }
    }
  };

  const currentContent = content[language as keyof typeof content];
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' 
      ? (target as HTMLInputElement).checked 
      : target.type === 'file' 
      ? (target as HTMLInputElement).files 
      : target.value;
    
    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Financing application submitted:', formData);
    setSubmitted(true);
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
              <a
                href="/"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
              </a>
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
          <p className="text-center text-gray-600 mb-4 text-lg">
            {currentContent.subtitle}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-sm text-blue-800">
              🔒 {currentContent.disclaimer}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {currentContent.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {currentContent.benefits.items.map((item, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-sm text-gray-500 mb-6">{currentContent.form.required}</p>
            
            {/* Personal Information */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.personalInfo}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.firstName} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.lastName} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* SSN with checkbox option */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.ssn} {!formData.provideSsnLater && '*'}
              </label>
              <input
                type="text"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                required={!formData.provideSsnLater}
                disabled={formData.provideSsnLater}
                placeholder={formData.provideSsnLater ? currentContent.form.provideSsnLater : "XXX-XX-XXXX"}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                  formData.provideSsnLater ? 'bg-gray-100 text-gray-500' : ''
                }`}
              />
              <div className="mt-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="provideSsnLater"
                    checked={formData.provideSsnLater}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.provideSsnLater}
                </label>
                <p className="text-xs text-gray-500 mt-1 italic">
                  {currentContent.form.ssnNote}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.dob} *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
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

            {/* Address Information */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.addressInfo}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.address} *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.city} *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.state} *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="NV">Nevada</option>
                  <option value="NM">New Mexico</option>
                  <option value="TX">Texas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.zipCode} *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.yearsAtAddress}
                </label>
                <input
                  type="text"
                  name="yearsAtAddress"
                  value={formData.yearsAtAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.monthlyRent}
                </label>
                <input
                  type="text"
                  name="monthlyRent"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                  placeholder="$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Employment Information */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.employmentInfo}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.employer} *
                </label>
                <input
                  type="text"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.occupation} *
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.yearsEmployed}
                </label>
                <input
                  type="text"
                  name="yearsEmployed"
                  value={formData.yearsEmployed}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.monthlyIncome} *
                </label>
                <input
                  type="text"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                  placeholder="$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.employerPhone}
                </label>
                <input
                  type="tel"
                  name="employerPhone"
                  value={formData.employerPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Co-Applicant */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.coApplicant}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.hasCoApplicant}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasCoApplicant"
                    value="yes"
                    checked={formData.hasCoApplicant === 'yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.yes}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasCoApplicant"
                    value="no"
                    checked={formData.hasCoApplicant === 'no'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.no}
                </label>
              </div>
            </div>

            {formData.hasCoApplicant === 'yes' && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.coFirstName}
                    </label>
                    <input
                      type="text"
                      name="coFirstName"
                      value={formData.coFirstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.coLastName}
                    </label>
                    <input
                      type="text"
                      name="coLastName"
                      value={formData.coLastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.additionalInfo}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.downPayment}
                </label>
                <input
                  type="text"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  placeholder="$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.bankruptcy}
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="yes"
                      checked={formData.bankruptcy === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {currentContent.form.yes}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="no"
                      checked={formData.bankruptcy === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {currentContent.form.no}
                  </label>
                </div>
              </div>
            </div>

            {/* Trade-in Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.tradeIn}
              </label>
              <div className="flex gap-4 mb-4">
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
              
              {formData.tradeIn === 'yes' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.tradeInDetails}
                    </label>
                    <input
                      type="text"
                      name="tradeInDetails"
                      value={formData.tradeInDetails}
                      onChange={handleChange}
                      placeholder="2020 Toyota Camry, 45,000 miles"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.tradeInPhotos}
                    </label>
                    <input
                      type="file"
                      name="tradeInPhotos"
                      onChange={handleChange}
                      multiple
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {language === 'es' 
                        ? 'Puedes subir múltiples fotos (exterior, interior, millaje, etc.)'
                        : 'You can upload multiple photos (exterior, interior, mileage, etc.)'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Document Upload Section */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {currentContent.form.uploadInfo}
            </h3>
            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
              <div className="mb-4">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    name="provideDocsLater"
                    checked={formData.provideDocsLater}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {currentContent.form.provideDocsLater}
                </label>
                <p className="text-xs text-gray-600 mt-1 italic ml-6">
                  {currentContent.form.uploadNote}
                </p>
              </div>
              
              {!formData.provideDocsLater && (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.driversLicense}
                    </label>
                    <input
                      type="file"
                      name="driversLicense"
                      onChange={handleChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.proofOfIncome}
                    </label>
                    <input
                      type="file"
                      name="proofOfIncome"
                      onChange={handleChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.proofOfResidence}
                    </label>
                    <input
                      type="file"
                      name="proofOfResidence"
                      onChange={handleChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.insurance}
                    </label>
                    <input
                      type="file"
                      name="insurance"
                      onChange={handleChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Comments */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentContent.form.comments}
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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