import React from "react";
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import "font-awesome/css/font-awesome.min.css";
import "./AboutMe.css";

export const AboutMe = () => {
  const { SelectedLanguage } = useSelectedLanguage();
  const t = translations[SelectedLanguage];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-blue-200 rounded-lg shadow-lg px-6 py-4 md:mt-6">
      <div className="flex items-center md:flex-row ">
        <ProfileImage />
        <div className="ml-0 md:ml-12 md:mt-0 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-white-900">{t.greeting}</h1>
          <p
            className="text-sm sm:text-lg md:text-xl text-gray-800 sm:mt-4"
            dangerouslySetInnerHTML={{ __html: t.description }}
          ></p>
          <div className="centrado mt-2 sm:mt-6 flex items-center justify-start">
            <a
              href={t.cvPath}
              download
              className="a-rainbow-text inline-flex items-center justify-center text-lg font-semibold rounded-full bg-blue-100 text-white px-4 py-2 transition-transform transform hover:scale-105"
            >
              <i className="fa fa-arrow-circle-down mr-2" aria-hidden="true"></i>
              <span className="rainbow-text">{t.downloadCv}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
