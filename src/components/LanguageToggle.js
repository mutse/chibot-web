import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 按照i18n配置中的supportedLanguages顺序定义语言列表
  const languages = [
    { code: 'de-CH', name: 'Schweizerdeutsch', flag: '🇨🇭' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷'},
    { code: 'en-SG', name: 'Singapore English', flag: '🇸🇬'},
    { code: 'en-US', name: 'American English', flag: '🇺🇸'},
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸'},
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ga', name: 'Gaeilge', flag: '🇮🇪'},
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳'},
    { code: 'it', name: 'Italiano', flag: '🇮🇹'}, 
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷'},
    { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱'},
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷'},
    { code: 'ru', name: 'русский язык', flag: '🇷🇺'},
    { code: 'sv', name: 'Swedish', flag: '🇸🇪'},
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷'},
    { code: 'zh', name: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW', name: '繁體中文', flag: '🇨🇳' },
    { code: 'zh-HK', name: '繁體中文', flag: '🇭🇰' }  
  ];

  // 验证所有支持的语言都在列表中
  const missingLanguages = supportedLanguages.filter(code => 
    !languages.find(lang => lang.code === code)
  );
  
  if (missingLanguages.length > 0) {
    console.warn('Missing languages in UI:', missingLanguages);
  }

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages.find(lang => lang.code === 'en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <select
        value={i18n.language}
        onChange={e => changeLanguage(e.target.value)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        style={{ maxHeight: '200px', overflowY: 'auto' }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle; 