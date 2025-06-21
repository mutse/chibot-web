import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      value: 'young@mutse.top',
      description: t('contact.info.email.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      value: '+86 (027) 123-4567',
      description: t('contact.info.phone.description'),
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      value: t('contact.info.location.value'),
      description: t('contact.info.location.description'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {t('contact.info.title')}
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col text-center items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-purple-300 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 