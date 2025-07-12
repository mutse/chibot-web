import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const currentLanguage = i18n.language || 'en' || 'ja' || 'fr' || 'de';
  
  return {
    currentLanguage,
    changeLanguage,
    isRTL: ['zh', 'en', 'ja', 'fr', 'de'].includes(currentLanguage), // Support for RTL languages
  };
};