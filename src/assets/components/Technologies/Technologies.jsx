import React from 'react'
import { SkillTag } from '../SkillTag/SkillTag'
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";


export const Technologies = () => {
  const { SelectedLanguage } = useSelectedLanguage();
  const t = translations[SelectedLanguage];
  return (
    <section className="bg-gradient-to-b from-blue-200 to-gray-800 rounded-lg shadow-lg px-6 w-full py-8 h-auto">
        <div className="flex justify-center">
          <p className="text-lg font-bold">{t.programmingLanguages}</p>
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
          <p className="text-lg font-bold">{t.technologies}</p>
        </div>
        <div className="flex items-center flex-col">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="Node.js" image="/images/Node.png" />
                <SkillTag text="React" image="/images/React.png" />
                <SkillTag text="Tailwind CSS" image="/images/Tailwind.png" />
                <SkillTag text="Git" image="/images/GIT.png" />
                <SkillTag text="WireShark" image="/images/WireShark.png" />
                <SkillTag text="Postman" image="/images/Postman.jpg" />
            </div>
        </div>
    </section>
  )
}
