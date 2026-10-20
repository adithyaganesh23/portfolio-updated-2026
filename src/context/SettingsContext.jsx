import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const [fontSize, setFontSize] = useState('normal');
    const [reducedMotion, setReducedMotion] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        // Apply Theme
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        // Apply Font Size
        const root = window.document.documentElement;
        root.classList.remove('text-normal', 'text-large', 'text-larger');
        root.classList.add(`text-${fontSize}`);
    }, [fontSize]);

    useEffect(() => {
        // Apply Reduced Motion
        const root = window.document.documentElement;
        if (reducedMotion) {
            root.classList.add('reduce-motion');
        } else {
            root.classList.remove('reduce-motion');
        }
    }, [reducedMotion]);

    useEffect(() => {
        // Apply High Contrast
        const root = window.document.documentElement;
        if (highContrast) {
            root.classList.add('high-contrast');
        } else {
            root.classList.remove('high-contrast');
        }
    }, [highContrast]);

    return (
        <SettingsContext.Provider
            value={{
                theme, setTheme,
                fontSize, setFontSize,
                reducedMotion, setReducedMotion,
                highContrast, setHighContrast
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);
