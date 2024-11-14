import React from 'react'
import { SkillCard } from '../SkillCard/SkillCard'

export const Skills = () => {
    return (
        <section className="container mx-auto py-16">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard skill="JavaScript" />
                <SkillCard skill="React" />
                <SkillCard skill="Node.js" />
                <SkillCard skill="Tailwind CSS" />
            </div>
        </section>
    )
}
