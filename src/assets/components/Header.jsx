import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <header className="fixed w-full bg-gray-800/80 shadow-md backdrop-blur-md z-50 flex justify-center">
      <div className="flex flex-col justify-between items-center py-2">
        <Logo />
        <nav className="flex space-x-6">
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
