import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.subtitle')}
          </p>
          <a 
            href="https://github.com/mutse/chibot/releases" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto justify-center"
          >
            {t('cta.button')}
            <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA; 