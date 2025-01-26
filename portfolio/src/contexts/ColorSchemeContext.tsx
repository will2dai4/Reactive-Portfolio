import React, { createContext, useState, useContext, useEffect } from 'react';
import { ColorScheme, colorSchemes } from '../utils/colorSchemes';

interface ColorSchemeContextType {
    currentScheme: ColorScheme;
    changeColorScheme?: (schemeName: string) => void;
}

const defaultContext: ColorSchemeContextType = {
    currentScheme: colorSchemes.racer,
    changeColorScheme: () => { }
};

const ColorSchemeContext = createContext<ColorSchemeContextType>(defaultContext);

export const ColorSchemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentScheme, setCurrentScheme] = useState<ColorScheme>(colorSchemes.racer);

    const changeColorScheme = (schemeName: string) => {
        const newScheme = colorSchemes[schemeName];
        if (newScheme) {
            setCurrentScheme(newScheme);
            document.documentElement.style.setProperty('--bg-color', newScheme.bgColor);
            document.documentElement.style.setProperty('--bg-color2', newScheme.bgColor2);
            document.documentElement.style.setProperty('--primary-color', newScheme.primaryColor);
            document.documentElement.style.setProperty('--secondary-color', newScheme.secondaryColor);

            localStorage.setItem('preferredColor', schemeName);
        }
    };

    useEffect(() => {
        const savedColor = localStorage.getItem('preferredColor') || 'racer';
        changeColorScheme(savedColor);
    }, []);

    return (
        <ColorSchemeContext.Provider value={{ currentScheme, changeColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};

export const useColorScheme = () => {
    const context = useContext(ColorSchemeContext);
    if (!context) {
        return defaultContext;
    }

    return context;
};