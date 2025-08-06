import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 支持的语言列表
const supportedLanguages = ['en', 'ga', 'zh', 'ja', 'fr', 'de', 'zh-TW', 'it', 'es', 'nl', 'de-CH', 'ms', 'en-SG', 'el', 'pl', 'tr', 'en-US', 'ru', 'hi', 'pt-BR'];

// 动态加载语言资源
const loadLanguageResources = async (language) => {
  try {
    const languageModule = await import(`./locales/${language}.js`);
    return {
      translation: languageModule.default
    };
  } catch (error) {
    console.warn(`Failed to load language resource for ${language}:`, error);
    // 如果加载失败，返回空对象，i18next会使用fallback语言
    return {
      translation: {}
    };
  }
};

// 初始化资源对象
const resources = {};

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    resources,
    lng: 'en', // 强制设置默认语言为英语
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

// 动态切换语言的函数
export const changeLanguage = async (language) => {
  if (!supportedLanguages.includes(language)) {
    console.warn(`Language ${language} is not supported`);
    return;
  }

  // 切换语言
  await i18n.changeLanguage(language);
};

// 预加载所有支持的语言资源
const initializeAllLanguages = async () => {
  try {
    // 预加载所有支持的语言
    for (const language of supportedLanguages) {
      const languageResources = await loadLanguageResources(language);
      i18n.addResourceBundle(language, 'translation', languageResources.translation);
    }
  } catch (error) {
    console.error('Failed to load languages:', error);
  }
};

// 初始化所有语言
initializeAllLanguages();

// 导出支持的语言列表
export { supportedLanguages };

export default i18n;