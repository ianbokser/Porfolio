import React from 'react';
import { ProfileImage } from './ProfileImage';
import { SkillTag } from './SkillTag';

export const AboutMe = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-blue-200 rounded-lg shadow-lg px-6 md:px-12 py-16">
      <div className="flex items-center flex-col md:flex-row ">
        <ProfileImage src={'../images/IanBokser.jpg'} />
        <div className="ml-0 md:ml-12 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white-900">¡Hola, soy Ian Bokser!</h1>
          <p className="text-lg md:text-xl text-gray-800 mt-4">
            Desarrollador web <b>Full stack</b> y estudiante en <b>Licenciatura en Sistemas</b>.
          </p>
        </div>
      </div>
    </section>
  );
};
