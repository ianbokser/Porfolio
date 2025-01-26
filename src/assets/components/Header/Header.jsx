import React from 'react';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-scroll';
import './Header.css';

export const Header = () => {
  return (
    <header className="bg-gray-800/80 shadow-md backdrop-blur-md rounded-b-lg w-full">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center py-2">
        <Logo />
        <nav className="flex space-x-6 justify-center w-full mt-2">
          {['Sobre Mí', 'Proyectos', 'Skills', 'Contacto'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={700}
              className="text-white hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
