import React from 'react';
import { SkillCard } from '../SkillCard/SkillCard';
import { FaLightbulb, FaUsers, FaFileAlt, FaClock, FaTools, FaProjectDiagram, FaBrain, FaShieldAlt } from 'react-icons/fa';
import './Skills.css'

export const Skills = () => {
    return (
        <section className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Habilidades Técnicas y Blandas</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <SkillCard 
                    skill="Resolución de problemas" 
                    icon={<FaLightbulb className="text-yellow-400 text-4xl mb-2" />}
                    description="Capacidad para analizar y resolver problemas complejos con soluciones eficientes."
                />
                <SkillCard 
                    skill="Trabajo en equipo" 
                    icon={<FaUsers className="text-blue-500 text-4xl mb-2" />}
                    description="Habilidad para colaborar y comunicarme eficazmente en proyectos de grupo."
                />
                <SkillCard 
                    skill="Documentación técnica" 
                    icon={<FaFileAlt className="text-green-400 text-4xl mb-2" />}
                    description="Creación de documentación clara y precisa para proyectos."
                />
                <SkillCard 
                    skill="Gestión de tiempo" 
                    icon={<FaClock className="text-red-400 text-4xl mb-2" />}
                    description="Optimización del tiempo para cumplir con plazos y entregas."
                />
                <SkillCard 
                    skill="Herramientas de desarrollo" 
                    icon={<FaTools className="text-gray-500 text-4xl mb-2" />}
                    description="Dominio de herramientas como Git, VSCode, y Postman."
                />
                <SkillCard 
                    skill="Metodologías ágiles" 
                    icon={<FaProjectDiagram className="text-purple-500 text-4xl mb-2" />}
                    description="Experiencia en metodologías como Scrum y Kanban para mejorar la productividad."
                />
                <SkillCard 
                    skill="Pensamiento crítico" 
                    icon={<FaBrain className="text-pink-400 text-4xl mb-2" />}
                    description="Evaluación crítica de situaciones para tomar decisiones fundamentadas."
                />
                <SkillCard 
                    skill="Seguridad básica" 
                    icon={<FaShieldAlt className="text-teal-400 text-4xl mb-2" />}
                    description="Conocimientos básicos de ciberseguridad y buenas prácticas."
                />
            </div>
        </section>
    );
}
