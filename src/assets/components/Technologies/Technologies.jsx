import React from 'react'
import { SkillTag } from '../SkillTag/SkillTag'
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";


export const Technologies = () => {
  const { SelectedLanguage } = useSelectedLanguage();
  const t = translations[SelectedLanguage];
  return (
    <section className="bg-gradient-to-b from-blue-200 to-gray-800 rounded-lg shadow-lg px-4 w-full lg:w-[475px] h-full lg:h-[400px] md:h-full overflow-y-auto flex flex-col">
        <div className="flex justify-center sticky top-0 bg-gradient-to-b from-blue-200 to-transparent py-2 z-10">
          <p className="text-lg font-bold">{t.programmingLanguages}</p>
        </div>
        <div className="flex items-center flex-col mb-2">
            <div className="sm:mt-2 flex flex-wrap gap-1 lg:gap-2 justify-center">
                <SkillTag text="HTML" image="/images/HTML.png"/>
                <SkillTag text="CSS" image="/images/CSS.webp"/>
                <SkillTag text="JavaScript" image="/images/Javascript.png" />
                <SkillTag text="Java" image="/images/Java.webp"/>
                <SkillTag text="Assembly ARM" image="/images/Assembly.png" />
                <SkillTag text="SQL" image="/images/SQL.png" />
                <SkillTag text="Python" image="/images/Python.jpeg"/>
            </div>
        </div>
        <div className="flex justify-center sm:mt-2">
          <p className="text-lg font-bold">{t.technologies}</p>
        </div>
        <div className="flex items-center flex-col">
            <div className="mt-2 flex flex-wrap gap-1 lg:gap-2 justify-center">
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
