import React, { useState } from "react";
import { useSelectedLanguage } from "../../LanguageContext.jsx";

export const Language = () => {
    const { SelectedLanguage, setSelectedLanguage } = useSelectedLanguage();
    const Language = [
        { code: "es", label: "Español", flag: "/images/es.png" },
        { code: "en", label: "English", flag: "/images/en.png" },
    ];

    const [image, setImage] = useState(Language.find((lang) => lang.code === SelectedLanguage).flag);

    const handleChangeLanguage = (event) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);

    const selectedLanguage = Language.find((lang) => lang.code === selectedCode);
    if (selectedLanguage) {
        setImage(selectedLanguage.flag);
    }
};

return (
    <div className="flex items-center">
        <img src={image} alt="flag" className="w-8 h-8 sm:w-8 sm:h-10 rounded-xl mr-2 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"/>
        <select
            value={SelectedLanguage}
            onChange={handleChangeLanguage}
            className="bg-gray-800/80 text-white rounded-md px-2 py-1"
        >
            {Language.map((language) => (
            <option key={language.code} value={language.code}>
                {language.label}
            </option>
            ))}
        </select>
    </div>
    );
};
