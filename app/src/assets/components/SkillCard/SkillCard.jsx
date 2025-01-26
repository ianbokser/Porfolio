import React from 'react';

export const SkillCard = ({ skillName, description }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{skillName}</h3>
        <p className="text-gray-600">{description}</p>
        </div>
    );
};
