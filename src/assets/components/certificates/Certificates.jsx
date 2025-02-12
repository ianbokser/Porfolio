import React from "react";
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";
import { CertificateCard } from "../CertificateCard/CertificateCard.jsx";

export const Certificates = () => {
    const { SelectedLanguage } = useSelectedLanguage();
    const t = translations[SelectedLanguage];

    const certificates = [
        {
            title: t.certificatesTitle.desarrollo_Web,
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Desarrollo Web.png",
        },
        {
            title: t.certificatesTitle.javaScript,
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/JavaScript.png",
        },
        {
        title: t.certificatesTitle.react_Js,
        issuedBy: "Coderhouse",
        imgSrc: "./certificates/React Js.png",
        },
        {
            title: t.certificatesTitle.programación_backend_I_desarrollo_avanzado_de_backend,
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Programación Backend 1 Desarrollo Avanzado de Backend.png",
        },
        {
            title: t.certificatesTitle.programación_backend_II_desarrollo_de_aplicaciones_web,
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Programación Backend 2 Diseño y Arquitectura Backend.png",
        },
    ];
    
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-gray-100 text-center mb-4 p-4">{t.certificates}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {certificates.map((cert, index) => (
                <CertificateCard
                    key={index}
                    title={cert.title}
                    issuedBy={cert.issuedBy}
                    imgSrc={cert.imgSrc}
                    certLink={cert.certLink}
                />
                ))}
            </div>
        </div>
    );
};
