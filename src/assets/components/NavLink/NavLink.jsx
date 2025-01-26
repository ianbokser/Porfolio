import React from 'react';

export const NavLink = ({ text, href }) => {
    return (
        <a href={href} className="text-gray-200 hover:text-blue-400 transition-colors duration-300">{text}</a>
    );
};
