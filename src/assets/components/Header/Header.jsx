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
    <header className="bg-gray-800/80 shadow-md backdrop-blur-md rounded-b-lg w-full flex items-center">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center py-2 ml-32">
        <Logo />
        <nav className="flex space-x-6 justify-center w-full mt-2">
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
      <div className="mr-16">
        <Language />
      </div>
    </header>
  );
};
