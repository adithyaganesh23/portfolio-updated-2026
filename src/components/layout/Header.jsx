import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '../ui/Button';
import { SettingsPopup } from '../ui/SettingsPopup';
import { useLocation, Link } from 'wouter';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [location, setLocation] = useLocation();
    const settingsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location !== '/') {
            setLocation('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // ... (rest of effects)

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'expertise' },
        { name: 'Process', id: 'process' },
        { name: 'Work', id: 'work' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="brand-mark z-50 relative cursor-pointer" aria-label="Adithya Ganesh home">
                    <span className="brand-dot" aria-hidden="true" />
                    <span className="brand-wordmark"><strong>Adithya Ganesh</strong></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 dark:border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="text-sm font-medium text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors hover:bg-gray-100/50 dark:hover:bg-zinc-700/50 px-3 py-1 rounded-full cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4 relative" ref={settingsRef}>
                    <Button
                        variant="primary"
                        className="px-6 py-2 h-auto text-sm"
                        onClick={() => window.location.href = 'mailto:adithyagnitt@gmail.com'}
                    >
                        Let's Talk
                    </Button>
                    <button
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className="p-2 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative"
                    >
                        <Settings size={20} />
                    </button>

                    <SettingsPopup isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-3xl font-serif font-medium"
                                onClick={(e) => {
                                    handleNavClick(e, link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            className="mt-4"
                            onClick={() => {
                                window.location.href = 'mailto:adithyagnitt@gmail.com';
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Let's Talk
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
