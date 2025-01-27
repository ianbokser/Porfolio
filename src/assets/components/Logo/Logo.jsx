import React from "react";
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";

export const Logo = () => {
  const { SelectedLanguage } = useSelectedLanguage();
  const t = translations[SelectedLanguage];

  return (
    <div className="text-2xl font-bold text-white flex justify-center items-center">
      <a href="#inicio">{t.portfolio}</a>
    </div>
  );
};

export default Logo;
