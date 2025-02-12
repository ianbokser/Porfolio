import React from "react";
import { useSelectedLanguage } from "../../LanguageContext.jsx";
import { translations } from "../translations.js";
import { CertificateCard } from "../CertificateCard/CertificateCard.jsx";

export const Certificates = () => {
    const { SelectedLanguage } = useSelectedLanguage();
    const t = translations[SelectedLanguage];

    const certificates = [
        {
        title: "React Js",
        issuedBy: "Coderhouse",
        imgSrc: "./certificates/React Js.png",
        },
        {
            title: "Desarrollo Web",
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Desarrollo Web.png",
        },
        {
            title: "JavaScript",
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/JavaScript.png",
        },
        {
            title: "Programación Backend I Desarrollo Avanzado de Backend",
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Programación Backend 1 Desarrollo Avanzado de Backend.png",
        },
        {
            title: "Programación Backend II Diseño y Arquitectura Backend",
            issuedBy: "Coderhouse",
            imgSrc: "./certificates/Programación Backend 2 Diseño y Arquitectura Backend.png",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-100 text-center mb-8">{t.certificatesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
