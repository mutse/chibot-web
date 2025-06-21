import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, MessageCircle } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png?raw=true" 
              alt="Chibot AI Logo" 
              className="w-10 h-10 rounded-xl object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.classList.remove('hidden');
              }}
            />
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl items-center justify-center hidden">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Chibot AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-purple-300 transition-colors">
              {t('nav.features')}
            </a>
            <a href="#product" className="hover:text-purple-300 transition-colors">
              {t('nav.product')}
            </a>
            <a href="#about" className="hover:text-purple-300 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">
              {t('nav.contact')}
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block hover:text-purple-300 transition-colors">
                {t('nav.features')}
              </a>
              <a href="#product" className="block hover:text-purple-300 transition-colors">
                {t('nav.product')}
              </a>
              <a href="#about" className="block hover:text-purple-300 transition-colors">
                {t('nav.about')}
              </a>
              <a href="#contact" className="block hover:text-purple-300 transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 