import React, { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Section } from '../components/ui/Section';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectVisual } from '../components/ui/ProjectVisual';
import './ProjectDetail.css';

export function ProjectDetail() {
    const [, params] = useRoute("/project/:id");
    const id = params?.id ? parseInt(params.id) : null;
    const project = projects.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32">
                <p className="text-xl text-secondary">Project not found.</p>
                <Link href="/" className="ml-4 text-primary hover:underline">Go Home</Link>
            </div>
        );
    }

    return (
        <main className="pt-32 pb-20 fade-in-up">
            <Section>
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 dark:text-white">{project.title}</h1>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
                        >
                            View Project <ExternalLink size={18} />
                        </a>
                    )}
                </div>

                <div className="flex flex-wrap gap-8 text-sm md:text-base text-secondary dark:text-gray-400 border-t border-b border-gray-100 dark:border-zinc-800 py-6 mb-12">
                    {[
                        ['Tags', project.tags?.join(', ')],
                        ['Year', project.year],
                        ['Role', project.role],
                        ['Services', project.category],
                    ].filter(([, value]) => value).map(([label, value]) => (
                        <div key={label}>
                            <span className="block text-xs uppercase tracking-wider mb-1 opacity-60">{label}</span>
                            <span className="font-medium text-primary dark:text-white">{value}</span>
                        </div>
                    ))}
                </div>

                {/* Highlight Image */}
                {project.image ? (
                    <div
                        className="rounded-3xl overflow-hidden aspect-video relative mb-16 shadow-xl cursor-zoom-in"
                        onClick={() => setSelectedImage(project.image)}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <ProjectVisual project={project} className="project-visual-detail rounded-3xl mb-16 shadow-xl" />
                )}

                {project.workflow && (
                    <section className="project-workflow" aria-labelledby="workflow-title">
                        <div className="workflow-heading">
                            <span>THE SYSTEM</span>
                            <h2 id="workflow-title">From weekly data to the next useful conversation.</h2>
                            <p>A repeatable pipeline that checks the numbers, investigates signals, brings in context, and prepares the weekly review.</p>
                        </div>
                        <div className="workflow-grid">
                            {project.workflow.map((step, index) => (
                                <article className="workflow-step" key={step.title}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.detail}</p>
                                </article>
                            ))}
                        </div>
                        <div className="workflow-context">
                            <div><span className="workflow-context-icon">↗</span><p><strong>Scenario context</strong><br />Manually observed patterns from prior weeks guide scenario-linked drill-down queries.</p></div>
                            <div><span className="workflow-context-icon">↗</span><p><strong>Call context</strong><br />Weekly transcripts bring discussion points and data requests into the presentation follow-up.</p></div>
                        </div>
                    </section>
                )}

                {project.placeholder && (
                    <div className="project-coming-soon">
                        <span>CASE STUDY IN PROGRESS</span>
                        <p>Project context, design contribution, and outcomes will be added here.</p>
                    </div>
                )}

                {/* Content */}
                {!project.placeholder && <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-serif mb-4 dark:text-white">Project Overview</h3>
                        <div className="space-y-8 mt-12 hidden md:block">
                            {project.impact && (
                                <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800">
                                    <h4 className="font-serif text-lg mb-2 text-green-800 dark:text-green-400">Impact</h4>
                                    <p className="text-sm text-green-700 dark:text-green-300">{project.impact}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="md:col-span-2 text-lg text-secondary dark:text-gray-300 leading-relaxed space-y-8">
                        <div>
                            <h4 className="text-xl font-medium text-primary dark:text-white mb-3">The Challenge</h4>
                            <p>{project.challenge || project.description}</p>
                        </div>

                        {project.solution && (
                            <div>
                                <h4 className="text-xl font-medium text-primary dark:text-white mb-3">The Solution</h4>
                                <p>{project.solution}</p>
                            </div>
                        )}

                        {/* Mobile Impact Section */}
                        {project.impact && (
                            <div className="md:hidden p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800 my-8">
                                <h4 className="font-serif text-lg mb-2 text-green-800 dark:text-green-400">Impact</h4>
                                <p className="text-sm text-green-700 dark:text-green-300">{project.impact}</p>
                            </div>
                        )}
                    </div>
                </div>}

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="mt-20">
                        <h3 className="text-3xl font-serif mb-8 dark:text-white">Project Gallery</h3>
                        <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
                            {project.gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[85vw] md:w-auto snap-center rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800 cursor-zoom-in"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="h-64 sm:h-80 md:h-96 w-auto object-contain bg-gray-50 dark:bg-zinc-900"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <ArrowLeft size={32} className="rotate-45" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full screen preview"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}
