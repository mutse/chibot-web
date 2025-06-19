import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 翻译资源
const resources = {
  en: {
    translation: {
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
        ai: 'Powered by Advanced AI',
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
        },
        copyright: '© 2025 Chibot AI. All rights reserved.'
      }
    }
  },
  zh: {
    translation: {
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
        ai: '基于先进的 AI 技术',
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
        },
        copyright: '© 2025 Chibot AI. 版权所有'
      }
    }
  }
};

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    resources,
    fallbackLng: 'en', // 默认语言
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false // React 已经默认转义了
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    }
  });

export default i18n;