import React from 'react';
import { Header } from '../components/Header';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

export const Main = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center max-w-screen-lg mx-auto">
      <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-gray-200 min-h-screen w-full max-w-screen-lg">
        <Header />
        <section
          id="Sobre Mí"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 transition-opacity duration-700"
        >
          <div className="w-full px-4">
            <AboutMe />
          </div>
        </section>

        <section
          id="Proyectos"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100 transition-opacity duration-700"
        >
          <div className="w-full px-4">
            <Projects />
          </div>
        </section>

        <section
          id="Skills"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 transition-opacity duration-700"
        >
          <div className="w-full px-4">
            <Skills />
          </div>
        </section>

        <section
          id="Contacto"
          className="min-h-screen flex items-center justify-center bg-white transition-opacity duration-700"
        >
          <div className="w-full px-4">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
