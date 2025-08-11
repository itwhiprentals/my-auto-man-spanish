// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  // Icon components
  const PhoneIcon = ({ className = "w-4 h-4" }) => (
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

  const LocationIcon = () => (
    <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );

  // Call button for mobile
  const CallButton = () => (
    <a
      href="tel:602-757-3514"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50"
    >
      <PhoneIcon className="w-6 h-6" />
    </a>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Business Name & Info - Using HIS actual content */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">MY AUTO MAN</h3>
              <p className="text-lg text-white mb-2">Ahhtoman Automotive Consultants</p>
              <p className="text-gray-400 text-sm mb-4">{t.tagline}</p>
              <p className="text-gray-400 text-xs mb-4">
                {language === 'es' 
                  ? 'BBB Acreditado • Licencia de Distribuidor #D-19779'
                  : 'BBB Accredited • Dealer License #D-19779'}
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/myautoman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links - Matching his site structure */}
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition">{t.menu.home}</Link></li>
                <li><Link href="/inventory" className="hover:text-white transition">{t.menu.inventory}</Link></li>
                <li><Link href="/car-finder" className="hover:text-white transition">{t.menu.finder}</Link></li>
                <li><Link href="/financing" className="hover:text-white transition">{t.menu.financing}</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition">{t.menu.testimonials}</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">{t.menu.faq}</Link></li>
                <li><Link href="/about" className="hover:text-white transition">{t.menu.about}</Link></li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info - HIS ACTUAL INFO */}
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">{t.menu.contact}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" /> 
                  <div>
                    <a href="tel:602-757-3514" className="hover:text-white transition">P: (602) 757-3514</a><br/>
                    <a href="tel:602-422-6691" className="hover:text-white transition">F: (602) 422-6691</a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <EmailIcon /> 
                  <a href="mailto:tsibley@myautoman.com" className="hover:text-white transition">tsibley@myautoman.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <LocationIcon /> 
                  <div>
                    <p>1050 N Fairway Dr</p>
                    <p>Avondale, AZ 85323</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Hours - HIS ACTUAL HOURS */}
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">{t.footer.hours}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <span className="font-semibold text-white">{language === 'es' ? 'Lun - Vie:' : 'Mon - Fri:'}</span>
                  <br />9:30 AM - 5:30 PM
                </li>
                <li>
                  <span className="font-semibold text-white">{language === 'es' ? 'Sábado:' : 'Saturday:'}</span>
                  <br />11:00 AM - 2:00 PM
                </li>
                <li>
                  <span className="font-semibold text-white">{language === 'es' ? 'Domingo:' : 'Sunday:'}</span>
                  <br />{language === 'es' ? 'Cerrado' : 'Closed'}
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-600 rounded-lg">
                <p className="text-xs font-semibold">
                  {language === 'es' 
                    ? '¡Llámanos o visítanos hoy!'
                    : 'Call or visit us today!'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Ahhtoman Automotive Consultants. {t.footer.rights}.</p>
            <p className="mt-2 text-xs">
              {language === 'es' 
                ? 'Orgullosamente sirviendo a Phoenix, Avondale, Goodyear y áreas circundantes'
                : 'Proudly serving Phoenix, Avondale, Goodyear and surrounding areas'}
            </p>
            <p className="mt-2 text-xs">
              Website by Christian H.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Call Button */}
      <CallButton />
    </>
  );
}