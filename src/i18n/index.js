import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 翻译资源
const resources = {
  en: {
    translation: {
      nav: {
        features: 'Features',
        product: 'Product',
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
      product: {
        title: 'See Chibot in Action',
        subtitle: 'Explore our powerful features through interactive demonstrations',
        keyFeatures: 'Key Features',
        tryNow: 'Try Now',
        features: {
          interface: {
            title: 'Intuitive Interface',
            description: 'Experience a clean, modern interface designed for seamless conversations. Our user-friendly design makes chatting with AI feel natural and effortless.',
            highlight1: 'Clean, modern design with dark mode support',
            highlight2: 'Real-time message synchronization across devices',
            highlight3: 'Customizable chat themes and layouts'
          },
          mobile: {
            title: 'Mobile Optimized',
            description: 'Take Chibot with you everywhere. Our mobile-optimized interface ensures the same powerful features on your smartphone or tablet.',
            highlight1: 'Responsive design that works on all screen sizes',
            highlight2: 'Touch-friendly interface with gesture support',
            highlight3: 'Offline message queuing and sync'
          },
          performance: {
            title: 'Lightning Performance',
            description: 'Built for speed and reliability. Chibot delivers instant responses with 99.9% uptime, ensuring your conversations never slow down.',
            highlight1: 'Sub-second response times with AI optimization',
            highlight2: '99.9% uptime with global CDN distribution',
            highlight3: 'Advanced caching for faster repeated queries'
          }
        }
      },
      about: {
        title: 'About Chibot AI',
        subtitle: 'We\'re on a mission to revolutionize human-AI interaction through intelligent conversation technology, making AI accessible and beneficial for everyone.',
        story: {
          title: 'Our Story',
          description: 'Founded in 2025, Chibot AI emerged from a simple yet powerful vision: to make AI conversations as natural and helpful as talking to a trusted friend. Our team of AI researchers, engineers, and designers came together to create something truly special. From initial concept to serving millions of users today, we\'ve remained true to our founding principles.',
          founded: 'Founded',
          users: 'Active Users',
          languages: 'Languages'
        },
        mission: {
          title: 'Our Mission',
          description: 'To democratize AI conversation technology, making it accessible, safe, and beneficial for everyone, transforming AI into humanity\'s best friend and assistant.'
        },
        values: {
          title: 'Our Values',
          subtitle: 'The core principles that guide everything we do',
          innovation: {
            title: 'Innovation Driven',
            description: 'Constantly pushing the boundaries of what\'s possible in AI conversation technology, using cutting-edge tech to create better user experiences.'
          },
          community: {
            title: 'Community First',
            description: 'Building a global community of users who share our vision for better AI interactions, growing together.'
          },
          excellence: {
            title: 'Pursuit of Excellence',
            description: 'Striving for the highest quality in every aspect of our product and service, delivering premium experiences.'
          },
          userFirst: {
            title: 'User-Centric',
            description: 'Every decision we make prioritizes user benefits, always putting user experience first.'
          }
        },
        team: {
          title: 'Meet Our Team',
          description: 'The passionate professionals behind Chibot AI, dedicated to creating the best AI conversation experience',
          roles: {
            ceo: 'CEO & Founder',
            cto: 'CTO & Lead Engineer',
            design: 'Head of Design'
          }
        }
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
        info: {
          title: 'Contact Information',
          description: 'Reach out to us through any of these channels',
          email: {
            title: 'Email',
            description: 'For general inquiries and support'
          },
          phone: {
            title: 'Phone',
            description: 'For urgent matters and business inquiries'
          },
          location: {
            title: 'Location',
            value: 'Wuhan, China',
            description: 'Our headquarters in Wuhan'
          }
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
        links: {
          product: 'Product',
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
        product: '产品',
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
      product: {
        title: '观看 Chibot 演示',
        subtitle: '通过交互式演示探索我们的强大功能',
        keyFeatures: '核心功能',
        tryNow: '立即试用',
        features: {
          interface: {
            title: '直观界面',
            description: '体验专为流畅对话而设计的简洁现代界面。我们用户友好的设计让与AI聊天变得自然轻松。',
            highlight1: '简洁现代的设计，支持深色模式',
            highlight2: '跨设备实时消息同步',
            highlight3: '可自定义的聊天主题和布局'
          },
          mobile: {
            title: '移动端优化',
            description: '随时随地使用Chibot。我们移动端优化的界面确保在智能手机或平板电脑上拥有同样强大的功能。',
            highlight1: '响应式设计，适配所有屏幕尺寸',
            highlight2: '支持触摸和手势操作的友好界面',
            highlight3: '离线消息队列和同步功能'
          },
          performance: {
            title: '闪电性能',
            description: '专为速度和可靠性而构建。Chibot提供即时响应，99.9%的运行时间，确保您的对话永不减速。',
            highlight1: 'AI优化的亚秒级响应时间',
            highlight2: '全球CDN分发，99.9%运行时间',
            highlight3: '高级缓存，快速重复查询'
          }
        }
      },
      about: {
        title: '关于 Chibot AI',
        subtitle: '我们致力于通过智能对话技术革新人类与AI的交互体验，让每个人都能享受到AI带来的便利。',
        story: {
          title: '我们的故事',
          description: '成立于2025年，Chibot AI从简单的愿景出发：让AI对话像与信任的朋友交谈一样自然和有帮助。我们的AI研究人员、工程师和设计师团队汇聚在一起，创造出了真正特别的产品。从最初的概念到现在的百万用户，我们始终坚持初心。',
          founded: '成立时间',
          users: '活跃用户',
          languages: '支持语言'
        },
        mission: {
          title: '我们的使命',
          description: '让AI对话技术民主化，使其对每个人都是可访问的、安全的和有益的，让AI成为人类最好的朋友和助手。'
        },
        values: {
          title: '我们的价值观',
          subtitle: '指导我们做一切事情的核心原则',
          innovation: {
            title: '创新驱动',
            description: '不断探索AI对话技术的可能性边界，用最新技术为用户创造更好的体验。'
          },
          community: {
            title: '社区共建',
            description: '建立一个全球用户社区，分享我们对更好AI交互的愿景，共同成长。'
          },
          excellence: {
            title: '追求卓越',
            description: '在产品的每个方面都追求最高质量，为用户提供最优质的服务体验。'
          },
          userFirst: {
            title: '用户至上',
            description: '我们做的每一个决定都以用户利益为重，始终把用户体验放在首位。'
          }
        },
        team: {
          title: '认识我们的团队',
          description: 'Chibot AI背后的热情专业人士，致力于为用户创造最好的AI对话体验',
          roles: {
            ceo: 'CEO & 创始人',
            cto: 'CTO & 首席工程师',
            design: '设计总监'
          }
        }
      },
      contact: {
        title: '联系我们',
        subtitle: '我们很乐意听到您的声音。给我们发消息，我们会尽快回复。',
        info: {
          title: '联系信息',
          description: '通过这些渠道与我们联系',
          email: {
            title: '电子邮件',
            description: '用于一般查询和支援'
          },
          phone: {
            title: '电话',
            description: '用于紧急事宜和业务查询'
          },
          location: {
            title: '位置',
            value: '中国武汉',
            description: '我们的总部位于武汉'
          }
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
        links: {
          product: '产品',
          support: '支持'
        },
        copyright: '© 2025 Chibot AI. 版权所有'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        features: '機能',
        product: '製品',
        about: '私たちについて',
        contact: 'お問い合わせ'
      },
      hero: {
        title: 'Chibot AI との出会い',
        subtitle: 'あなたの知能的なチャットパートナー',
        description: '最先端技術を搭載した先進的なAIチャットボットで、シームレスで知能的な対話体験をお楽しみください。',
        ai: '先進的なAI技術を搭載',
        cta: '今すぐ始める',
        demo: 'デモを見る'
      },
      features: {
        title: '強力な機能',
        subtitle: '知能的な会話に必要なすべて',
        smart: {
          title: 'スマートな会話',
          desc: '自然で文脈を理解した対話を実現する先進的なAI理解力'
        },
        fast: {
          title: '超高速',
          desc: '最適化されたAIアルゴリズムによる即座の応答'
        },
        secure: {
          title: '安全でプライベート',
          desc: 'エンドツーエンド暗号化で会話を安全に保護'
        },
        global: {
          title: '多言語対応',
          desc: '50以上の言語で完璧な精度でコミュニケーション'
        }
      },
      product: {
        title: 'Chibot の実演をご覧ください',
        subtitle: 'インタラクティブなデモンストレーションで強力な機能を体験',
        keyFeatures: '主要機能',
        tryNow: '今すぐお試し',
        features: {
          interface: {
            title: '直感的なインターフェース',
            description: 'シームレスな会話のためにデザインされた、清潔で現代的なインターフェースを体験してください。ユーザーフレンドリーなデザインで、AIとのチャットが自然で簡単になります。',
            highlight1: 'ダークモード対応の清潔で現代的なデザイン',
            highlight2: 'デバイス間でのリアルタイムメッセージ同期',
            highlight3: 'カスタマイズ可能なチャットテーマとレイアウト'
          },
          mobile: {
            title: 'モバイル最適化',
            description: 'Chibot をどこでも持ち運びましょう。モバイル最適化インターフェースで、スマートフォンやタブレットでも同じ強力な機能をお楽しみいただけます。',
            highlight1: 'すべての画面サイズに対応するレスポンシブデザイン',
            highlight2: 'ジェスチャーサポート付きタッチフレンドリーインターフェース',
            highlight3: 'オフラインメッセージキューと同期機能'
          },
          performance: {
            title: '超高速パフォーマンス',
            description: 'スピードと信頼性を追求して構築。Chibot は即座の応答と99.9%の稼働時間を提供し、会話が遅くなることはありません。',
            highlight1: 'AI最適化による1秒以下の応答時間',
            highlight2: 'グローバルCDN配信による99.9%の稼働時間',
            highlight3: '繰り返しクエリの高速化のための高度なキャッシュ'
          }
        }
      },
      about: {
        title: 'Chibot AI について',
        subtitle: '私たちは知能的な会話技術を通じて人間とAIの相互作用を革新し、すべての人にとってAIを利用しやすく有益にすることを使命としています。',
        story: {
          title: '私たちの物語',
          description: '2025年に設立されたChibot AIは、シンプルながら強力なビジョンから生まれました：AI会話を信頼できる友人との会話のように自然で有用なものにすることです。AI研究者、エンジニア、デザイナーのチームが集まり、真に特別なものを作り上げました。初期のコンセプトから現在の数百万人のユーザーまで、私たちは創立時の理念を守り続けています。',
          founded: '設立',
          users: 'アクティブユーザー',
          languages: '言語'
        },
        mission: {
          title: '私たちの使命',
          description: 'AI会話技術を民主化し、すべての人がアクセスでき、安全で有益なものにし、AIを人類最良の友人とアシスタントに変えることです。'
        },
        values: {
          title: '私たちの価値観',
          subtitle: '私たちの行動すべてを導く基本理念',
          innovation: {
            title: 'イノベーション主導',
            description: 'AI会話技術の可能性を常に押し広げ、最先端技術を使ってより良いユーザー体験を創造します。'
          },
          community: {
            title: 'コミュニティファースト',
            description: 'より良いAI相互作用のビジョンを共有し、共に成長するグローバルユーザーコミュニティを構築します。'
          },
          excellence: {
            title: '卓越性の追求',
            description: '製品とサービスのあらゆる面で最高品質を追求し、プレミアムな体験を提供します。'
          },
          userFirst: {
            title: 'ユーザー中心',
            description: '私たちが行うすべての決定はユーザーの利益を優先し、常にユーザー体験を第一に考えます。'
          }
        },
        team: {
          title: '私たちのチーム',
          description: '最高のAI会話体験を作ることに情熱を注ぐ、Chibot AI の背後にいる専門家たち',
          roles: {
            ceo: 'CEO & 創設者',
            cto: 'CTO & 主任エンジニア',
            design: 'デザイン責任者'
          }
        }
      },
      contact: {
        title: 'お問い合わせ',
        subtitle: 'ご連絡をお待ちしております。メッセージをお送りください。できるだけ早くお返事いたします。',
        info: {
          title: '連絡先情報',
          description: 'これらのチャネルを通じてお気軽にお問い合わせください',
          email: {
            title: 'メール',
            description: '一般的なお問い合わせとサポート'
          },
          phone: {
            title: '電話',
            description: '緊急事項とビジネスお問い合わせ'
          },
          location: {
            title: '所在地',
            value: '中国・武漢',
            description: '武漢にある私たちの本社'
          }
        }
      },
      stats: {
        users: 'アクティブユーザー',
        messages: '送信されたメッセージ',
        languages: '言語',
        uptime: '稼働時間'
      },
      cta: {
        title: '会話を変革する準備はできていますか？',
        subtitle: 'AI チャットの未来を既に体験している何千人ものユーザーに参加しましょう。',
        button: '無料トライアルを開始'
      },
      footer: {
        company: 'Chibot AI',
        links: {
          product: '製品',
          support: 'サポート'
        },
        copyright: '© 2025 Chibot AI. 全著作権所有'
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