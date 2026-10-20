import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ContactModal } from '../ui/ContactModal';

export function Contact() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <Section id="contact" className="relative mx-6 mb-12">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group">

                {/* Base Gradient - Always Visible */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-zinc-900 to-purple-900/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Blobs - Intensify on Hover */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen animate-pulse animation-delay-2000 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

                {/* Content Overlay */}
                <div className="relative z-10 py-32 text-center text-white backdrop-blur-sm">
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-2xl mx-auto tracking-tight">
                        Let's create something amazing together.
                    </h2>
                    <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                        Have a project in mind? Reach out and let's discuss how we can bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            className="bg-white text-primary hover:bg-white/90 px-8 py-4 h-auto text-lg hover:scale-105 border-none shadow-xl shadow-black/5"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Start a Project
                        </Button>
                        <a href="mailto:hello@adithya.design" className="text-white border-b border-white/30 hover:border-white pb-1 transition-colors hover:scale-105 transform inline-block">
                            hello@adithya.design
                        </a>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </Section>
    );
}
