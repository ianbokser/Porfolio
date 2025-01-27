import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [SelectedLanguage, setSelectedLanguage] = useState('es');
    return (
        <LanguageContext.Provider value={{ SelectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useSelectedLanguage = () => useContext(LanguageContext);