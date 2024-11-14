import React from 'react';

export const SkillTag = ({ text, image }) => {
    return (
        <span className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-transform transform hover:scale-105 hover:bg-blue-200 hover:text-blue-900">
            <img className="h-4 w-4 mr-2 rounded" src={image} alt="Imagen Tag" />
            {text}
        </span>
    );
};
