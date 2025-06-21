import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Play, Monitor, Smartphone, Zap } from 'lucide-react';

const Product = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: t('product.features.interface.title'),
      description: t('product.features.interface.description'),
      icon: Monitor,
      image: '/screenshot-01.jpg',
      highlights: [
        t('product.features.interface.highlight1'),
        t('product.features.interface.highlight2'),
        t('product.features.interface.highlight3')
      ]
    },
    {
      id: 1,
      title: t('product.features.mobile.title'),
      description: t('product.features.mobile.description'),
      icon: Smartphone,
      image: '/screenshot-02.jpg',
      highlights: [
        t('product.features.mobile.highlight1'),
        t('product.features.mobile.highlight2'),
        t('product.features.mobile.highlight3')
      ]
    },
    {
      id: 2,
      title: t('product.features.performance.title'),
      description: t('product.features.performance.description'),
      icon: Zap,
      image: '/screenshot-03.jpg',
      highlights: [
        t('product.features.performance.highlight1'),
        t('product.features.performance.highlight2'),
        t('product.features.performance.highlight3')
      ]
    }
  ];

  const nextTab = () => {
    console.log('nextTab clicked, current:', activeTab);
    setActiveTab((prev) => {
      const next = (prev + 1) % features.length;
      console.log('nextTab: prev -> next:', prev, '->', next);
      return next;
    });
  };

  const prevTab = () => {
    console.log('prevTab clicked, current:', activeTab);
    setActiveTab((prev) => {
      const next = (prev - 1 + features.length) % features.length;
      console.log('prevTab: prev -> next:', prev, '->', next);
      return next;
    });
  };

  const activeFeature = features[activeTab];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('product.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('product.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <feature.icon className="w-5 h-5" />
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                {activeFeature.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {activeFeature.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-200">
                {t('product.keyFeatures')}
              </h4>
              <ul className="space-y-3">
                {activeFeature.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://github.com/mutse/chibot/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="w-5 h-5" />
                {t('product.tryNow')}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-2 backdrop-blur-sm border border-white/10">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevTab}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 z-10 cursor-pointer"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTab}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 z-10 cursor-pointer"
                aria-label="Next feature"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl z-0"></div>
            </div>

            {/* Image Counter */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-purple-400 w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product; 