import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage, supportedLanguages } from '../i18n';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = async (event) => {
    const selectedLanguage = event.target.value;
    await changeLanguage(selectedLanguage);
  };

  const getLanguageDisplayName = (language) => {
    const languageNames = {
      en: 'English',
      zh: '简体中文',
      ja: '日本語',
      fr: 'Français',
      de: 'Deutsch',
      ga: 'Gaeilge',
      'zh-TW': '繁體中文'
    };
    return languageNames[language] || language;
  };

  return (
    <div className="language-switcher">
      <select 
        value={i18n.language} 
        onChange={handleLanguageChange}
        className="language-select"
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {getLanguageDisplayName(language)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;