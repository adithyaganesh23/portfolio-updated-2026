import React from 'react';
import { Section } from '../ui/Section';
import {
    FileSearch,
    Users,
    Heart,
    Map,
    PenTool,
    LayoutGrid,
    MonitorPlay,
    UserCheck
} from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Requirement Gathering",
        description: "Collaborate with stakeholders and review existing data to define goals, constraints, users, and success metrics.",
        icon: FileSearch
    },
    {
        number: "02",
        title: "User Personas",
        description: "Synthesize research into realistic personas that capture goals, behaviors, environments, and pain points.",
        icon: Users
    },
    {
        number: "03",
        title: "Empathy Mapping",
        description: "Map what users say, think, do, and feel to surface latent needs and motivations.",
        icon: Heart
    },
    {
        number: "04",
        title: "User Journey",
        description: "Visualize the end-to-end experience across stages, tasks, touchpoints, and emotions.",
        icon: Map
    },
    {
        number: "05",
        title: "Low-Fidelity Wireframes",
        description: "Explore structure, layout, and flows with low- to mid-fidelity wireframes that invite rapid iteration.",
        icon: PenTool
    },
    {
        number: "06",
        title: "Design System",
        description: "Build a reusable component library with tokens, states, and accessibility standards.",
        icon: LayoutGrid
    },
    {
        number: "07",
        title: "High-Fidelity Prototype",
        description: "Craft a high-fidelity interactive prototype reflecting near-real visuals, microinteractions, and states.",
        icon: MonitorPlay
    },
    {
        number: "08",
        title: "User Review & UX Audit",
        description: "Validate with users through usability tests or reviews, capturing qualitative and quantitative feedback.",
        icon: UserCheck
    }
];

export function Process() {
    return (
        <Section id="process" className="bg-white dark:bg-transparent transition-colors duration-500 overflow-hidden">
            <div className="mb-20 md:text-center">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 dark:text-white">My Design Process</h2>
                <p className="text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    A structured approach to solving complex problems, from discovery to delivery.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 dark:border-zinc-800 -z-10" />
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 dark:border-zinc-800 -z-10" />

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Icon Bubble */}
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-zinc-800 group-hover:bg-white/10 flex items-center justify-center mb-6 text-primary dark:text-white group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Icon size={32} />
                            </div>

                            {/* Number */}
                            <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-gray-100 dark:text-zinc-800 group-hover:text-white/10 transition-colors pointer-events-none">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-medium mb-3 dark:text-white group-hover:text-white transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-secondary dark:text-gray-400 group-hover:text-white/80 leading-relaxed transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
