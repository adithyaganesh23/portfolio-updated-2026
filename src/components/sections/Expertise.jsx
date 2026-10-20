import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Palette, Laptop, Image as ImageIcon } from 'lucide-react';

const stats = [
    { label: "Years of Experience", value: "9+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" }, // Added a 3rd one for balance
];

const expertise = [
    {
        icon: Palette,
        category: "Branding",
        description: "Crafting unique visual identities that tell compelling stories.",
        items: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"]
    },
    {
        icon: Laptop,
        category: "Digital Design",
        description: "Designing intuitive and engaging digital experiences.",
        items: ["UI/UX Design", "Web Design", "App Design", "Design Systems"]
    },
    {
        icon: ImageIcon,
        category: "Graphic Design",
        description: "Visual storytelling through print and digital media.",
        items: ["Editorial Design", "Packaging", "Marketing Materials", "Typography"]
    }
];

export function Expertise() {
    return (
        <Section id="about" className="bg-background dark:bg-transparent transition-colors duration-500">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 dark:text-white">My Expertise</h2>
                <p className="text-secondary dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-12">
                    I combine design thinking with technical know-how to build brands and digital products that stand out.
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-gray-100 dark:border-zinc-800 py-8 mb-16">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-4xl font-serif font-medium mb-1 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-secondary dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertise.map((area) => (
                    <Card key={area.category} className="p-8 h-full flex flex-col items-start hover:shadow-2xl transition-all duration-300 group bg-white dark:bg-zinc-800/50 border-gray-100 dark:border-zinc-700/50">
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <area.icon size={32} className="text-primary dark:text-white" />
                        </div>

                        <h3 className="text-2xl font-serif font-medium mb-3 dark:text-white">{area.category}</h3>
                        <p className="text-secondary dark:text-gray-400 mb-8 text-sm leading-relaxed">
                            {area.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {area.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-zinc-700 text-secondary dark:text-gray-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-colors duration-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
