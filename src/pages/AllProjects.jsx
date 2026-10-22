import React, { useEffect } from 'react';
import { Section } from '../components/ui/Section';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectVisual } from '../components/ui/ProjectVisual';

const orderedProjects = [...projects].sort((a, b) => {
    const priority = (project) => project.id === 8 ? 0 : project.id === 1 ? 1 : project.id === 10 ? 2 : project.id === 9 ? 3 : 4;
    return priority(a) - priority(b);
});

export function AllProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-32 pb-20">
            <Section>
                {/* Header */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 dark:text-white">All Projects</h1>
                    <p className="text-secondary dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                        A complete archive of my design and development work, ranging from brand identities to complex digital products.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {orderedProjects.map((project) => (
                        <Link key={project.id} href={`/project/${project.id}`} className="block group cursor-pointer relative rounded-2xl z-10">
                            <div className="h-full w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <div className={`relative aspect-[4/3] ${project.imageFit === 'contain' ? 'bg-slate-100' : ''}`}>
                                    <div className="absolute inset-0">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain bg-slate-100 p-2' : 'object-cover transition-transform duration-700 group-hover:scale-105'}`}
                                            />
                                        ) : (
                                            <ProjectVisual project={project} className="h-full" />
                                        )}
                                        {project.imageFit !== 'contain' && <>
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300" />
                                        </>}
                                    </div>

                                    {project.imageFit !== 'contain' && (
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                            <span className="text-sm font-medium tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase">{project.category}</span>
                                            <h3 className="text-3xl font-serif">{project.title}</h3>
                                        </div>
                                    )}
                                </div>
                                {project.imageFit === 'contain' && (
                                    <div className="px-6 py-5 border-t border-slate-200 bg-slate-50 text-slate-900">
                                        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">{project.category}</span>
                                        <h3 className="mt-1 text-2xl font-serif">{project.title}</h3>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}
