// context/LanguageContext.tsx
'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'vi' | 'ja';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  // Khi mount, đọc giá trị đã lưu và thiết lập class cho <html>
  useEffect(() => {
    const stored = (localStorage.getItem('lang') as Language) || 'en';
    setLangState(stored);
    document.documentElement.classList.add(`lang-${stored}`);
  }, []);

  // Khi lang thay đổi: cập nhật class trên <html> và lưu localStorage
  useEffect(() => {
    document.documentElement.classList.remove('lang-en', 'lang-vi', 'lang-ja');
    document.documentElement.classList.add(`lang-${lang}`);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    // Cycle through en -> vi -> ja -> en
    setLangState(prev => {
      if (prev === 'en') return 'vi';
      if (prev === 'vi') return 'ja';
      return 'en';
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};