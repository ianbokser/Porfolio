import React from 'react';

export const ProjectCard = ({ title, description, imgSrc, demoLink, codeLink }) => {
    return (
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden max-w-sm mx-auto flex flex-col">
            <div className="relative group">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-1">{title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-1">{description}</p>
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a
                        href={demoLink}
                        className="px-4 py-1 text-sm rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                    <a
                        href={codeLink}
                        className="px-4 py-1 text-sm rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
};
