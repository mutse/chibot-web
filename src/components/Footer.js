import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img 
              src="/logo.png?raw=true"
              alt="Chibot AI Logo" 
              className="w-8 h-8 rounded-lg object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.classList.remove('hidden');
              }}
            />
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg items-center justify-center hidden">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">{t('footer.company')}</span>
          </div>
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#product" className="hover:text-purple-300 transition-colors">
              {t('footer.links.product')}
            </a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">
              {t('footer.links.support')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 