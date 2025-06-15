"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageCircle, Zap, Globe, Shield, Sparkles, Menu, X, ArrowRight, Star, ChevronLeft } from 'lucide-react';

const ChiBotLanding = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      nav: {
        features: 'Features',
        pricing: 'Platforms',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Meet Chibot AI',
        subtitle: 'Your Intelligent Chat Companion',
        description: 'Experience the future of conversation with our advanced AI chatbot. Powered by cutting-edge technology for seamless, intelligent interactions.',
        cta: 'Get Started',
        demo: 'Watch Demo'
      },
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need for intelligent conversations',
        smart: {
          title: 'Smart Conversations',
          desc: 'Advanced AI understanding for natural, context-aware dialogues'
        },
        fast: {
          title: 'Lightning Fast',
          desc: 'Instant responses powered by optimized AI algorithms'
        },
        secure: {
          title: 'Secure & Private',
          desc: 'End-to-end encryption keeps your conversations safe'
        },
        global: {
          title: 'Multi-Language',
          desc: 'Communicate in over 50 languages with perfect accuracy'
        }
      },
      stats: {
        users: 'Active Users',
        messages: 'Messages Sent',
        languages: 'Languages',
        uptime: 'Uptime'
      },
      cta: {
        title: 'Ready to Transform Your Conversations?',
        subtitle: 'Join thousands of users who are already experiencing the future of AI chat.',
        button: 'Start Free Trial'
      },
      footer: {
        company: 'Chibot AI',
        description: 'Revolutionizing conversations with intelligent AI technology.',
        links: {
          product: 'Product',
          company: 'Company',
          support: 'Support'
        }
      }
    },
    zh: {
      nav: {
        features: '功能特色',
        pricing: '支持平台',
        about: '关于我们',
        contact: '联系我们'
      },
      hero: {
        title: '遇见 Chibot AI',
        subtitle: '您的智能聊天伙伴',
        description: '体验对话的未来，我们的先进AI聊天机器人采用尖端技术，为您提供流畅、智能的交互体验。',
        cta: '立即开始',
        demo: '观看演示'
      },
      features: {
        title: '强大功能',
        subtitle: '智能对话所需的一切功能',
        smart: {
          title: '智能对话',
          desc: '先进的AI理解能力，实现自然、上下文感知的对话'
        },
        fast: {
          title: '闪电般快速',
          desc: '基于优化AI算法的即时响应'
        },
        secure: {
          title: '安全私密',
          desc: '端到端加密确保您的对话安全'
        },
        global: {
          title: '多语言支持',
          desc: '支持50多种语言的精准交流'
        }
      },
      stats: {
        users: '活跃用户',
        messages: '消息发送量',
        languages: '支持语言',
        uptime: '稳定运行'
      },
      cta: {
        title: '准备好改变您的对话体验了吗？',
        subtitle: '加入数千名用户，体验AI聊天的未来。',
        button: '开始免费试用'
      },
      footer: {
        company: 'Chibot AI',
        description: '用智能AI技术革新对话体验。',
        links: {
          product: '产品',
          company: '公司',
          support: '支持'
        }
      }
    }
  };

  const t = translations[language];

  const LanguageToggle = () => (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/mutse/chibot/blob/82af5ec633862753393a56ba5ab70c966815c53f/assets/images/logo.png?raw=true" 
                alt="Chibot AI Logo" 
                className="w-10 h-10 rounded-xl object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
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
              <a href="#features" className="hover:text-purple-300 transition-colors">{t.nav.features}</a>
              <a href="#pricing" className="hover:text-purple-300 transition-colors">{t.nav.pricing}</a>
              <a href="#about" className="hover:text-purple-300 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">{t.nav.contact}</a>
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
                <a href="#features" className="block hover:text-purple-300 transition-colors">{t.nav.features}</a>
                <a href="#pricing" className="block hover:text-purple-300 transition-colors">{t.nav.pricing}</a>
                <a href="#about" className="block hover:text-purple-300 transition-colors">{t.nav.about}</a>
                <a href="#contact" className="block hover:text-purple-300 transition-colors">{t.nav.contact}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-200 mb-4 font-medium">
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://github.com/mutse/chibot/releases" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                {t.hero.demo}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: t.stats.users },
              { value: '50M+', label: t.stats.messages },
              { value: '50+', label: t.stats.languages },
              { value: '99.9%', label: t.stats.uptime }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageCircle, title: t.features.smart.title, desc: t.features.smart.desc, color: 'from-purple-500 to-pink-500' },
              { icon: Zap, title: t.features.fast.title, desc: t.features.fast.desc, color: 'from-yellow-500 to-orange-500' },
              { icon: Shield, title: t.features.secure.title, desc: t.features.secure.desc, color: 'from-green-500 to-teal-500' },
              { icon: Globe, title: t.features.global.title, desc: t.features.global.desc, color: 'from-blue-500 to-indigo-500' }
            ].map((feature, index) => (
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.cta.subtitle}
            </p>
            <a href="https://github.com/mutse/chibot/releases" target="_blank" rel="noopener noreferrer" className="group px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
              {t.cta.button}
              <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="https://github.com/mutse/chibot/blob/82af5ec633862753393a56ba5ab70c966815c53f/assets/images/logo.png?raw=true" 
                alt="Chibot AI Logo" 
                className="w-8 h-8 rounded-lg object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg items-center justify-center hidden">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold">{t.footer.company}</span>
            </div>
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              {t.footer.description}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-300 transition-colors">{t.footer.links.product}</a>
              <a href="#" className="hover:text-purple-300 transition-colors">{t.footer.links.company}</a>
              <a href="#" className="hover:text-purple-300 transition-colors">{t.footer.links.support}</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Chibot AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChiBotLanding;
