import React from 'react'
import { SkillTag } from '../SkillTag/SkillTag'

export const WorkTools = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-gray-800 rounded-lg shadow-lg px-6 md:px-12 py-16 h-96">
        <div className="flex justify-center">
          <p className="text-lg font-bold">herramientas de trabajo</p>
        </div>
        <div className="flex items-center flex-col mb-2">
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <SkillTag text="Jira" image="/images/jira.png"/>
                <SkillTag text="Slack" image="/images/Slack.jpg"/>
                <SkillTag text="GitHub" image="/images/github.jfif" />
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
