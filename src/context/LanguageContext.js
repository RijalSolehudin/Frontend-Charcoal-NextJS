"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id"); // Default to Indonesian for localized premium feel, or fallback to English if preferred

  useEffect(() => {
    // Persist language preference in localStorage
    const savedLang = localStorage.getItem("cocofire_lang");
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("cocofire_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "id" : "en";
    changeLanguage(nextLang);
  };

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English translation if key not found in Indonesian
        let enFallback = translations["en"];
        for (const k of keys) {
          if (enFallback[k] === undefined) return path;
          enFallback = enFallback[k];
        }
        return enFallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
