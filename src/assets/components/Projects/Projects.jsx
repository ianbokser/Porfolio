import React from 'react'
import {  ProjectCard } from '../ProjectCard/ProjectCard'
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";

export const Projects = () => {
    const { SelectedLanguage } = useSelectedLanguage();
    const t = translations[SelectedLanguage];
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-gray-100 text-center mb-12">{t.projects}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title={t.title.brIAn} description={t.brIAn} imgSrc="/images/BrIAn.png" demoLink="" codeLink="https://github.com/ianbokser/BrIAn"/>
          <ProjectCard title={t.title.set_paddel_house} description={t.set_paddel_house} imgSrc="/images/Set_Paddel_House_WEB.png" demoLink="https://ianbokser.github.io/Set_Paddel_House_WEB/pages/logIn.html" codeLink="https://github.com/ianbokser/Set_Paddel_House_WEB"/>
          <ProjectCard title={t.title.calculadora_impuestos_steam} description={t.calculadora_impuestos_steam} imgSrc="/images/calculadora_impuestos_steam.png" demoLink="" codeLink="https://github.com/ianbokser/calculadora_impuestos_steam"/>
          <ProjectCard title={t.title.chat} description={t.chat} imgSrc="/images/chat.png" demoLink="" codeLink="https://github.com/ianbokser/chat"/>
          <ProjectCard title={t.title.redes} description={t.redes} imgSrc="/images/redes.png" demoLink="" codeLink="https://github.com/ianbokser/redes"/>
          <ProjectCard title={t.title.ecommerce} description={t.ecommerce} imgSrc="/images/e-comerce.png" demoLink="" codeLink="https://github.com/ianbokser/e-comerceReact.git"/>
      </div>
    </section>
  )
}
