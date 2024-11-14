import React from 'react'
import { SkillTag } from '../SkillTag/SkillTag'

export const Technologies = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-gray-800 rounded-lg shadow-lg px-6 md:px-12 py-16 h-96">
        <div className="flex justify-center">
          <p className="text-lg font-bold">Lenguajes de Programación</p>
        </div>
        <div className="flex items-center flex-col mb-2">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="HTML" image="/images/HTML.png"/>
                <SkillTag text="CSS" image="/images/CSS.webp"/>
                <SkillTag text="JavaScript" image="/images/Javascript.png" />
                <SkillTag text="Java" image="/images/Java.webp"/>
                <SkillTag text="Assembly ARM" image="/images/Assembly.png" />
                <SkillTag text="SQL" image="/images/SQL.png" />
                <SkillTag text="Python" image="/images/Python.jpeg"/>
            </div>
        </div>
        <div className="flex justify-center">
          <p className="text-lg font-bold">Tecnologías</p>
        </div>
        <div className="flex items-center flex-col">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="Node.js" image="/images/Node.png" />
                <SkillTag text="React" image="/images/React.png" />
                <SkillTag text="Tailwind CSS" image="/images/Tailwind.png" />
                <SkillTag text="Git" image="/images/GIT.png" />
            </div>
        </div>
    </section>
  )
}
