import React from 'react';

export const SkillTag = ({ text }) => {
    return (
        <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"> 
        {text}
        </span>
    );
};

