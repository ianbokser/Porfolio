import React from 'react'
import { SkillTag } from './SkillTag'

export const Technologies = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-gray-800 rounded-lg shadow-lg px-6 md:px-12 py-16 h-96">
        <div className="flex justify-center">
          <p className="text-lg font-bold">Lenguajes de Programación</p>
        </div>
        <div className="flex items-center flex-col mb-2">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="HTML" image="./src/images/HTML.png"/>
                <SkillTag text="CSS" image="./src/images/CSS.webp"/>
                <SkillTag text="JavaScript" image="./src/images/Javascript.png" />
                <SkillTag text="Java" image="./src/images/Java.webp"/>
                <SkillTag text="Assembly ARM" image="./src/images/Assembly.png" />
                <SkillTag text="SQL" image="./src/images/SQL.png" />
                <SkillTag text="Python" image="./src/images/Python.jpeg"/>
            </div>
        </div>
        <div className="flex justify-center">
          <p className="text-lg font-bold">Tecnologías</p>
        </div>
        <div className="flex items-center flex-col">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="Node.js" image="./src/images/Node.png" />
                <SkillTag text="React" image="./src/images/React.png" />
                <SkillTag text="Tailwind CSS" image="./src/images/Tailwind.png" />
                <SkillTag text="Git" image="./src/images/GIT.png" />
            </div>
        </div>
    </section>
  )
}
