"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { LangCode, Translation } from "@/lib/translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  // Restore saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mintoria-lang") as LangCode | null;
      if (saved && translations[saved]) {
        setLangState(saved);
      }
    } catch {
      // localStorage unavailable (sandboxed iframe, privacy mode, etc.)
    }
  }, []);

  const setLang = (code: LangCode) => {
    setLangState(code);
    try {
      localStorage.setItem("mintoria-lang", code);
    } catch {
      // localStorage unavailable
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
