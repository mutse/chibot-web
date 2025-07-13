import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Zap, Shield, Globe } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { 
      icon: MessageCircle, 
      title: t('features.multiProvider.title'), 
      desc: t('features.multiProvider.desc'), 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      icon: Zap, 
      title: t('features.streaming.title'), 
      desc: t('features.streaming.desc'), 
      color: 'from-yellow-500 to-orange-500' 
    },
    { 
      icon: Shield, 
      title: t('features.textToImage.title'), 
      desc: t('features.textToImage.desc'), 
      color: 'from-green-500 to-teal-500' 
    },
    { 
      icon: Globe, 
      title: t('features.webSearch.title'), 
      desc: t('features.webSearch.desc'), 
      color: 'from-blue-500 to-indigo-500' 
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 