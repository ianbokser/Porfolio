import React from 'react'
import {  ProjectCard } from '../ProjectCard/ProjectCard'

export const Projects = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12 p-4">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="BrIAn" description="BrIAn es un chatbot de inteligencia artificial para Discord diseñado para interactuar en canales de voz y proporcionar respuestas inteligentes en tiempo real y capacidad de pasar musica." imgSrc="/images/BrIAn.png" demoLink="" codeLink="https://github.com/ianbokser/BrIAn"/>
          <ProjectCard title="Set Paddel House" description="BrIAn es un chatbot de inteligencia artificial para Discord diseñado para interactuar en canales de voz y proporcionar respuestas inteligentes en tiempo real y capacidad de pasar musica." imgSrc="/images/Set_Paddel_House_WEB.png" demoLink="" codeLink="https://github.com/ianbokser/Set_Paddel_House_WEB"/>
          <ProjectCard title="Calculadora Impuestos Steam" description="BrIAn es un chatbot de inteligencia artificial para Discord diseñado para interactuar en canales de voz y proporcionar respuestas inteligentes en tiempo real y capacidad de pasar musica." imgSrc="/images/calculadora_impuestos_steam.png" demoLink="" codeLink="https://github.com/ianbokser/calculadora_impuestos_steam"/>
          <ProjectCard title="Chat" description="BrIAn es un chatbot de inteligencia artificial para Discord diseñado para interactuar en canales de voz y proporcionar respuestas inteligentes en tiempo real y capacidad de pasar musica." imgSrc="/images/chat.png" demoLink="" codeLink="https://github.com/ianbokser/chat"/>
          <ProjectCard title="Redes" description="Trabajo práctico de la materia Sistemas Operativos y Redes en el que configuramos y simulamos redes en Cisco Packet Tracer." imgSrc="/images/redes.png" demoLink="" codeLink="https://github.com/ianbokser/redes"/>
          <ProjectCard title="e-commerce" description="Proyecto donde desarrollé un e-commerce con React." imgSrc="/images/e-comerce.png" demoLink="" codeLink="https://github.com/ianbokser/e-comerceReact.git"/>
      </div>
    </section>
  )
}
