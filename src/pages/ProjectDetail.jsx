import React, { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Section } from '../components/ui/Section';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectVisual } from '../components/ui/ProjectVisual';
import { PrepBuddyCaseStudy } from './PrepBuddyCaseStudy';
import { FinanceMISCaseStudy } from './FinanceMISCaseStudy';
import { AIDataAnalystCaseStudy } from './AIDataAnalystCaseStudy';
import './ProjectDetail.css';

function ProjectDetailHero({ project, onViewImage }) {
    const accents = { 2: '#ef9c83', 3: '#91a9ff', 4: '#e9b65d', 5: '#c0dc7a', 6: '#75d1b1', 7: '#f68eb2', 8: '#d5a2ff' };
    const accent = accents[project.id] || '#8fc5ff';
    const highlight = project.role || project.category;
    const facts = [
        ['ROLE', project.role],
        ['YEAR', project.year],
        ['FOCUS', project.category],
        ['DISCIPLINES', project.tags?.slice(0, 2).join(' · ')],
    ].filter(([, value]) => value);
    return (
        <section className="project-case-hero" style={{ '--detail-accent': accent }}>
            <div className="project-hero-wrap">
                <Link href="/work" className="project-hero-back"><ArrowLeft size={16} /> All projects</Link>
                <div className="project-hero-grid">
                    <div className="project-hero-copy">
                        <span>{project.category}</span>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className="project-hero-tags">{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</div>
                        {project.link && <a className="project-hero-cta" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'View project'} <ExternalLink size={15} /></a>}
                    </div>
                    <div className="project-hero-art" onClick={() => project.image && onViewImage(project.image)}>
                        {project.image
                            ? <img className={project.imageFit === 'contain' ? 'contain' : ''} src={project.image} alt={project.title + ' project overview'} />
                            : <div className="project-hero-art-fallback"><ProjectVisual project={project} className="project-visual-detail" /></div>}
                        <div className="project-hero-highlight">{highlight}</div>
                    </div>
                </div>
                <div className="project-hero-meta" style={{ '--detail-meta-count': facts.length }}>
                    {facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
                </div>
            </div>
        </section>
    );
}

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

    if (project.caseStudy === 'ai-data-analyst') {
        return <AIDataAnalystCaseStudy project={project} />;
    }

    if (project.caseStudy === 'prepbuddy') {
        return <PrepBuddyCaseStudy project={project} />;
    }

    if (project.caseStudy === 'finance-mis') {
        return <FinanceMISCaseStudy project={project} />;
    }

    return (
        <main className="project-detail-page fade-in-up">
            <ProjectDetailHero project={project} onViewImage={setSelectedImage} />
            <Section className="project-detail-content pt-12 md:pt-16">

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

                        {project.caseStudySections?.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-xl font-medium text-primary dark:text-white mb-3">{section.title}</h4>
                                <p>{section.body}</p>
                            </div>
                        ))}

                        {/* Mobile Impact Section */}
                        {project.impact && (
                            <div className="md:hidden p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800 my-8">
                                <h4 className="font-serif text-lg mb-2 text-green-800 dark:text-green-400">Impact</h4>
                                <p className="text-sm text-green-700 dark:text-green-300">{project.impact}</p>
                            </div>
                        )}
                    </div>
                </div>}

                {project.designSystem && (
                    <section className="project-design-system" aria-labelledby="design-system-title">
                        <div className="design-system-heading">
                            <span>FOUNDATIONS</span>
                            <h2 id="design-system-title">A clear visual language for complex work.</h2>
                            <p>Core design decisions documented in the original product portfolio.</p>
                        </div>
                        <div className="design-token-grid">
                            <div className="design-token">
                                <span className="design-token-swatch" style={{ backgroundColor: project.designSystem.primary }} />
                                <span><strong>Primary</strong><small>{project.designSystem.primary}</small></span>
                            </div>
                            {project.designSystem.semantic.map((token) => (
                                <div className="design-token" key={token.label}>
                                    <span className="design-token-swatch" style={{ backgroundColor: token.color }} />
                                    <span><strong>{token.label}</strong><small>{token.color}</small></span>
                                </div>
                            ))}
                            <div className="design-token design-token-type">
                                <span className="design-token-type-sample">Ag</span>
                                <span><strong>Typography</strong><small>{project.designSystem.typeface}</small></span>
                            </div>
                        </div>
                    </section>
                )}

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
