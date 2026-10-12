import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import deCH from './locales/de-CH.js';
import de from './locales/de.js';
import el from './locales/el.js';
import enSG from './locales/en-SG.js';
import enUS from './locales/en-US.js';
import en from './locales/en.js';
import es from './locales/es.js';
import fr from './locales/fr.js';
import ga from './locales/ga.js';
import hi from './locales/hi.js';
import it from './locales/it.js';
import ja from './locales/ja.js';
import ko from './locales/ko.js';
import ms from './locales/ms.js';
import nl from './locales/nl.js';
import pl from './locales/pl.js';
import ptBR from './locales/pt-BR.js';
import ru from './locales/ru.js';
import sv from './locales/sv.js';
import tr from './locales/tr.js';
import zh from './locales/zh.js';
import zhHK from './locales/zh-HK.js';
import zhTW from './locales/zh-TW.js';

// 支持的语言列表
const supportedLanguages = [
  'en', 'ga', 'zh', 'ja', 'fr', 'de', 'zh-TW', 'zh-HK', 'it', 'es', 'nl',
  'de-CH', 'ms', 'en-SG', 'el', 'pl', 'tr', 'en-US', 'ru', 'hi', 'pt-BR',
  'ko', 'sv'
];

// 语言包静态导入：初始化时即完整可用，无异步竞态
const resources = {
  'en': { translation: en },
  'ga': { translation: ga },
  'zh': { translation: zh },
  'ja': { translation: ja },
  'fr': { translation: fr },
  'de': { translation: de },
  'zh-TW': { translation: zhTW },
  'zh-HK': { translation: zhHK },
  'it': { translation: it },
  'es': { translation: es },
  'nl': { translation: nl },
  'de-CH': { translation: deCH },
  'ms': { translation: ms },
  'en-SG': { translation: enSG },
  'el': { translation: el },
  'pl': { translation: pl },
  'tr': { translation: tr },
  'en-US': { translation: enUS },
  'ru': { translation: ru },
  'hi': { translation: hi },
  'pt-BR': { translation: ptBR },
  'ko': { translation: ko },
  'sv': { translation: sv }
};

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    resources,
    // 不再强制 lng：按 detection 顺序 localStorage -> 浏览器 -> html 标签自动选择，
    // 未命中时按语言前缀回退（如 zh-CN -> zh），最后回退到英文
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
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

// 切换语言的统一入口：校验合法性，非法语言直接忽略
const changeLanguage = (language) => {
  if (!supportedLanguages.includes(language)) {
    console.warn(`Language ${language} is not supported`);
    return Promise.resolve();
  }
  return i18n.changeLanguage(language);
};

// 让 <html lang> 跟随界面语言，保持 SEO / 无障碍语义正确
if (typeof document !== 'undefined') {
  const syncHtmlLang = (lng) => {
    document.documentElement.lang = lng || 'en';
  };
  syncHtmlLang(i18n.language);
  i18n.on('languageChanged', syncHtmlLang);
}

// 导出支持的语言列表
export { supportedLanguages, changeLanguage };

export default i18n;
