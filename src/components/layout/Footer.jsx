import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 py-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-secondary dark:text-gray-400 text-sm">
                    © {currentYear} Adithya Ganesh. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/adithyaganesh1/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/adithya.ganesh/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
