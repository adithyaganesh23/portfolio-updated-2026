import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Sun, Moon, Type, Zap, Eye } from 'lucide-react';
import { Button } from './Button';
import { clsx } from 'clsx';

export function SettingsPopup({ isOpen, onClose }) {
    const {
        theme, setTheme,
        fontSize, setFontSize,
        reducedMotion, setReducedMotion,
        highContrast, setHighContrast
    } = useSettings();

    if (!isOpen) return null;

    return (
        <div className="absolute top-16 right-0 w-80 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-700 p-6 z-50 animate-fade-in-up origin-top-right">
            <h3 className="text-lg font-serif font-bold mb-6 dark:text-white">Display Settings</h3>

            <div className="space-y-6">
                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-zinc-700 rounded-full">
                            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                        </div>
                        <span className="font-medium dark:text-gray-200">Dark Mode</span>
                    </div>
                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={clsx(
                            "w-12 h-6 rounded-full transition-colors relative",
                            theme === 'dark' ? "bg-primary" : "bg-gray-200"
                        )}
                    >
                        <span className={clsx(
                            "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform",
                            theme === 'dark' && "translate-x-6"
                        )} />
                    </button>
                </div>

                {/* Font Size */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-zinc-700 rounded-full">
                            <Type size={18} />
                        </div>
                        <span className="font-medium dark:text-gray-200">Font Size</span>
                    </div>
                    <div className="flex bg-gray-100 dark:bg-zinc-700 rounded-lg p-1">
                        {['normal', 'large', 'larger'].map((size, i) => (
                            <button
                                key={size}
                                onClick={() => setFontSize(size)}
                                className={clsx(
                                    "px-3 py-1 rounded-md text-sm font-medium transition-colors",
                                    fontSize === size ? "bg-white dark:bg-zinc-600 shadow-sm" : "hover:bg-gray-200 dark:hover:bg-zinc-600"
                                )}
                            >
                                <span style={{ fontSize: i === 0 ? '14px' : i === 1 ? '16px' : '18px' }}>A</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-zinc-700 rounded-full">
                            <Zap size={18} />
                        </div>
                        <span className="font-medium dark:text-gray-200">Reduce Motion</span>
                    </div>
                    <button
                        onClick={() => setReducedMotion(!reducedMotion)}
                        className={clsx(
                            "w-12 h-6 rounded-full transition-colors relative",
                            reducedMotion ? "bg-primary" : "bg-gray-200"
                        )}
                    >
                        <span className={clsx(
                            "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform",
                            reducedMotion && "translate-x-6"
                        )} />
                    </button>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-zinc-700 rounded-full">
                            <Eye size={18} />
                        </div>
                        <span className="font-medium dark:text-gray-200">High Contrast</span>
                    </div>
                    <button
                        onClick={() => setHighContrast(!highContrast)}
                        className={clsx(
                            "w-12 h-6 rounded-full transition-colors relative",
                            highContrast ? "bg-primary" : "bg-gray-200"
                        )}
                    >
                        <span className={clsx(
                            "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform",
                            highContrast && "translate-x-6"
                        )} />
                    </button>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-700 text-center">
                <p className="text-xs text-secondary">Settings are saved automatically</p>
            </div>
        </div>
    );
}
