import React from 'react';

export const SocialLink = ({ href, icon }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300 mx-2">
        <i className={icon}></i>
        </a>
    );
};
