'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  es: {
    phone: "Llámanos",
    hours: "Lun-Vie: 9:30 AM - 5:30 PM | Sáb: 11:00 AM - 2:00 PM",
    tagline: "Tu Consultor Automotriz de Confianza",
    menu: {
      home: "Inicio",
      inventory: "Inventario Vendido",
      finder: "Buscar Vehículo",
      financing: "Financiamiento",
      testimonials: "Testimonios",
      faq: "Preguntas",
      contact: "Contacto",
      about: "Nosotros"
    },
    footer: {
      quickLinks: "Enlaces Rápidos",
      hours: "Horario",
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    phone: "Call Us",
    hours: "Mon-Fri: 9:30 AM - 5:30 PM | Sat: 11:00 AM - 2:00 PM",
    tagline: "Your Trusted Automotive Consultant",
    menu: {
      home: "Home",
      inventory: "Recently Sold",
      finder: "Car Finder",
      financing: "Apply Online",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
      about: "About"
    },
    footer: {
      quickLinks: "Quick Links",
      hours: "Store Hours",
      rights: "All rights reserved"
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('es');
  const t = translations[language as keyof typeof translations];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}