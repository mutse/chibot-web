import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage, supportedLanguages } from '../i18n';

// 与 i18n supportedLanguages 保持一致的展示列表
const languages = [
  { code: 'de-CH', name: 'Schweizerdeutsch', flag: '🇨🇭' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'en-SG', name: 'Singapore English', flag: '🇸🇬' },
  { code: 'en-US', name: 'American English', flag: '🇺🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'русский язык', flag: '🇷🇺' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-HK', name: '繁體中文', flag: '🇭🇰' }
];

// 开发期校验：展示列表与 i18n 支持列表保持一致
if (process.env.NODE_ENV === 'development') {
  const missing = supportedLanguages.filter(
    (code) => !languages.some((lang) => lang.code === code)
  );
  if (missing.length > 0) {
    console.warn('Missing languages in UI:', missing);
  }
}

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // 防御：当前语言不在列表中时回退到英文
  const currentCode = languages.some((lang) => lang.code === i18n.language)
    ? i18n.language
    : 'en';

  return (
    <div className="relative">
      <select
        value={currentCode}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select language"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="text-black">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle;
