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
            className={`fixed top-0 left-0 right-0 z-50 text-[#f4edf3] transition-all duration-300 ${isScrolled ? 'bg-[#101116]/85 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="brand-mark z-50 relative cursor-pointer" aria-label="Adithya Ganesh home">
                    <span className="brand-logo-symbol" aria-hidden="true"><img src="/images/adithya-monogram.png" alt="" /></span>
                    <span className="brand-wordmark"><strong>Adithya Ganesh</strong></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 bg-[#17171f]/70 text-[#e8e4ed] backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="text-sm font-medium text-[#d3cfdb] hover:text-white transition-colors hover:bg-white/10 px-3 py-1 rounded-full cursor-pointer"
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
                        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors relative"
                    >
                        <Settings size={20} />
                    </button>

                    <SettingsPopup isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-white hover:bg-white/10 rounded-full" aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 mobile-navigation-overlay text-[#f4edf3] backdrop-blur-xl md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-3xl font-serif font-medium text-[#f4edf3] hover:text-[#ffb1ba] transition-colors"
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
