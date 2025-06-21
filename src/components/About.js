import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: t('about.values.userFirst.title'),
      description: t('about.values.userFirst.description'),
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              {t('about.story.title')}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.story.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2025</div>
                <div className="text-gray-400">{t('about.story.founded')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">1M+</div>
                <div className="text-gray-400">{t('about.story.users')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400">{t('about.story.languages')}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  {t('about.mission.title')}
                </h4>
                <p className="text-gray-300">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('about.values.title')}
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('about.values.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('about.team.title')}
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {t('about.team.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Mutse Young', role: t('about.team.roles.ceo'), avatar: '👨‍💼' },
              { name: 'Sarah Kim', role: t('about.team.roles.cto'), avatar: '👩‍💻' },
              { name: 'David Wang', role: t('about.team.roles.design'), avatar: '👨‍🎨' }
            ].map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-purple-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 