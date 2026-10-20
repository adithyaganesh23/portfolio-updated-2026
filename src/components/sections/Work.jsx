import React from 'react';
import { Section } from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { projects } from '../../data/projects';

export function Work() {
    return (
        <Section id="work" className="bg-white dark:bg-transparent transition-colors duration-500">
            <div className="flex items-end justify-between mb-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 dark:text-white">Selected Work</h2>
                    <p className="text-secondary dark:text-gray-400 text-lg">A collection of projects intended to showcase my process.</p>
                </div>
                <Link href="/work" className="hidden md:flex items-center text-primary dark:text-white font-medium hover:opacity-70 transition-opacity">
                    View All Projects <ArrowUpRight size={20} className="ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.filter(p => [1, 2, 4, 5].includes(p.id)).map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`} className={`${project.cols} block group cursor-pointer relative rounded-2xl z-10`}>
                        <div className="h-full w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                            <div className="relative aspect-[4/3] md:aspect-auto md:h-[500px]">
                                <div className="absolute inset-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                    <span className="text-sm font-medium tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase">{project.category}</span>
                                    <h3 className="text-3xl font-serif">{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 md:hidden text-center">
                <Link href="/work" className="inline-flex items-center text-primary font-medium">
                    View All Projects <ArrowUpRight size={20} className="ml-1" />
                </Link>
            </div>
        </Section>
    );
}
