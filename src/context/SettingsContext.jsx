import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();
const writePreference = (key, value) => {
    try { window.localStorage.setItem('portfolio-' + key, JSON.stringify(value)); } catch { /* Storage may be unavailable in private browsing. */ }
};
const readPreference = (key, fallback) => {
    try {
        const saved = window.localStorage.getItem('portfolio-' + key);
        return saved === null ? fallback : JSON.parse(saved);
    } catch {
        return fallback;
    }
};

export function SettingsProvider({ children }) {
    const [fontSize, setFontSize] = useState(() => readPreference('font-size', 'normal'));
    const [reducedMotion, setReducedMotion] = useState(() => readPreference('reduced-motion', false));
    const [highContrast, setHighContrast] = useState(() => readPreference('high-contrast', false));

    useEffect(() => { window.document.documentElement.classList.add('dark'); }, []);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('text-normal', 'text-large', 'text-larger');
        root.classList.add('text-' + fontSize);
        writePreference('font-size', fontSize);
    }, [fontSize]);
    useEffect(() => {
        window.document.documentElement.classList.toggle('reduce-motion', reducedMotion);
        writePreference('reduced-motion', reducedMotion);
    }, [reducedMotion]);
    useEffect(() => {
        window.document.documentElement.classList.toggle('high-contrast', highContrast);
        writePreference('high-contrast', highContrast);
    }, [highContrast]);

    return <SettingsContext.Provider value={{ fontSize, setFontSize, reducedMotion, setReducedMotion, highContrast, setHighContrast }}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => useContext(SettingsContext);
