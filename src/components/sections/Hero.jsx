import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { CursorGlow } from '../ui/CursorGlow';
import { ContactModal } from '../ui/ContactModal';

export function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden transition-colors duration-500">
            <CursorGlow />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-multiply dark:mix-blend-normal opacity-70 animate-blob transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 dark:bg-yellow-900/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 mix-blend-multiply dark:mix-blend-normal opacity-70 animate-blob animation-delay-2000 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-100/50 dark:bg-pink-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 mix-blend-multiply dark:mix-blend-normal opacity-70 animate-blob animation-delay-4000 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-sm mb-8 animate-fade-in transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-secondary dark:text-gray-300 tracking-wide">AVAILABLE FOR NEW PROJECTS</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.1] mb-8 animate-fade-in-up dark:text-white">
                    Hello, I'm <br />
                    <span className="italic">Adithya Ganesh</span>
                </h1>

                <p className="text-xl md:text-2xl text-secondary dark:text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up animation-delay-100">
                    A multidisciplinary designer crafting digital experiences with purpose, precision, and a touch of magic.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
                    <Button
                        variant="primary"
                        className="h-12 px-8 text-base"
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work
                    </Button>
                    <Button
                        variant="secondary"
                        className="h-12 px-8 text-base group"
                        onClick={() => setIsContactOpen(true)}
                    >
                        Contact Me <ArrowUpRight size={18} className="ml-2 group-hover:rotate-45 transition-transform" />
                    </Button>
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </Section>
    );
}
