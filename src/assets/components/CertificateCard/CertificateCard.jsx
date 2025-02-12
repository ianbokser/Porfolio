import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CertificateCard = ({ title, issuedBy, imgSrc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden max-w-sm mx-auto flex flex-col">
                <div className="relative group">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-xl font-bold text-gray-100 text-center">{title}</h3>
                        <p className="text-gray-300 text-sm text-center">{issuedBy}</p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-1 text-sm rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 text-center"
                        >
                            Ver Certificado
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-black text-2xl font-bold"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✖
                            </button>
                            <img src={imgSrc} alt={title} className="w-full h-auto max-h-[90vh] object-contain" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
