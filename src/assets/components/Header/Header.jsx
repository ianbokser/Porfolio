import React from 'react';
import { Logo } from '../Logo/Logo';
import { Language } from '../Language/Language';
import { Link } from 'react-scroll';
import { useSelectedLanguage } from '../../LanguageContext.jsx';
import { translations } from '../translations.js';
import './Header.css';

export const Header = () => {
  const { SelectedLanguage } = useSelectedLanguage(); 
  const t = translations[SelectedLanguage];
  return (
    <header className="bg-gray-800/80 shadow-md backdrop-blur-md rounded-b-lg w-full flex flex-col  md:pl-40 md:flex-row items-center justify-center px-4 sm:space-x-32">
      <div className="flex flex-col items-center">
        <Logo />
        <nav className="flex space-x-4 mt-2">
          {[
            t.sections.aboutMe,
            t.sections.certificates,
            t.sections.projects,
            t.sections.contact
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={700}
              className="text-white hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-2 md:mt-0">
        <Language />
      </div>
    </header>
  );
};
