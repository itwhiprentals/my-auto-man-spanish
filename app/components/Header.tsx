'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Icon components
  const PhoneIcon = ({ className = "w-4 h-4 inline-block" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:602-757-3514" className="hover:text-yellow-300 transition-all duration-300 flex items-center gap-1">
                <PhoneIcon className="w-4 h-4" /> (602) 757-3514
              </a>
              <a href="mailto:tsibley@myautoman.com" className="hover:text-yellow-300 transition-all duration-300 hidden sm:flex items-center gap-1">
                <EmailIcon /> tsibley@myautoman.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:flex items-center gap-1 text-xs">
                <ClockIcon /> {t.hours}
              </span>
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-md text-sm font-bold hover:bg-yellow-300 transition-all duration-300"
              >
                {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="My Auto Man"
                width={200}
                height={80}
                className="h-12 sm:h-16 w-auto"
                priority
              />
              <div className="border-l-2 border-gray-300 pl-3">
                <h2 className="text-sm sm:text-lg font-bold text-gray-800">Ahhtoman</h2>
                <p className="text-xs sm:text-sm text-gray-600">Automotive Consultants</p>
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.home}</Link></li>
              <li><Link href="/inventory" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.inventory}</Link></li>
              <li><Link href="/car-finder" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.finder}</Link></li>
              <li><Link href="/financing" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.financing}</Link></li>
              <li><Link href="/testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.testimonials}</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">{t.menu.faq}</Link></li>
              <li><Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 font-bold">{t.menu.contact}</Link></li>
            </ul>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden pb-4 space-y-2 border-t pt-4">
              <li><Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.home}</Link></li>
              <li><Link href="/inventory" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.inventory}</Link></li>
              <li><Link href="/car-finder" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.finder}</Link></li>
              <li><Link href="/financing" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.financing}</Link></li>
              <li><Link href="/testimonials" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.testimonials}</Link></li>
              <li><Link href="/faq" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.faq}</Link></li>
              <li><Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">{t.menu.contact}</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}