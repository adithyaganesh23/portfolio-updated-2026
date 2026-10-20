import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Code2, Gamepad2, Guitar, Layers3, Map, Plane, RefreshCw, Search, Sparkles } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectVisual } from '../ui/ProjectVisual';
import { useSettings } from '../../context/SettingsContext';
import './scroll-portfolio.css';

const processSteps = [
    { number: '01', title: 'Discover', detail: 'Listen, frame the problem, and understand the people behind it.', Icon: Search, steps: ['Goals & requirements', 'Personas & empathy'] },
    { number: '02', title: 'Map', detail: 'Turn what we learn into clear journeys and opportunities.', Icon: Map, steps: ['Journeys & flows', 'Explore directions'] },
    { number: '03', title: 'Design', detail: 'Shape a coherent system, then make it tangible and testable.', Icon: Layers3, steps: ['Reusable systems', 'Interactive prototypes'] },
    { number: '04', title: 'Refine', detail: 'Validate the details, learn from feedback, and improve.', Icon: RefreshCw, steps: ['Review & testing', 'Iterate & polish'] },
];

const featuredProjects = [8, 1, 4, 6, 2].map((id) => projects.find((project) => project.id === id)).filter(Boolean);
const dashboardFrameNames = [
    'overview', 'hero-about', 'about', 'about-expertise', 'expertise', 'expertise-process', 'process', 'process-work', 'work', 'work-contact', 'contact',
];
const dashboardFrames = dashboardFrameNames.flatMap((name, index) => {
    const frame = `/images/generated/scroll-frames/${String(index).padStart(2, '0')}-${name}.png`;
    return index < dashboardFrameNames.length - 1
        ? [frame, `/images/generated/scroll-frames/between-${String(index).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}.png`]
        : [frame];
});
const dashboardFocus = [
    [50, 50, 34, 30],
    [23, 30, 23, 25],
    [76, 36, 23, 25],
    [50, 52, 25, 22],
    [33, 70, 25, 25],
    [50, 50, 39, 38],
];
const skillGroups = [
    { key: 'ai', title: 'AI & Agent Workflows', subtitle: 'Prompt engineering · Vibe coding · AI prototyping · Agent workflows', Icon: BrainCircuit, projectIds: [1, 2, 3, 8] },
    { key: 'product', title: 'Digital Product Design', subtitle: 'UX strategy · Interaction design · Prototyping · Design systems', Icon: Sparkles, projectIds: [1, 2, 3, 4] },
    { key: 'data', title: 'Data & Visual Storytelling', subtitle: 'Information design · Dashboards · Infographics · Presentation design', Icon: ChartNoAxesCombined, projectIds: [1, 5, 6, 8] },
    { key: 'brand', title: 'Brand & Graphic Design', subtitle: 'Visual identity · Editorial · Campaigns · Typography', Icon: Code2, projectIds: [5, 6, 7] },
];

function SectionEyebrow({ children, index }) {
    return <div className="journey-eyebrow"><span>{index}</span>{children}</div>;
}

export function ScrollPortfolio() {
    const pageRef = useRef(null);
    const frameARef = useRef(null);
    const frameColorRef = useRef(null);
    const heroVideoRef = useRef(null);
    const { reducedMotion } = useSettings();
    const [activeSkill, setActiveSkill] = useState(null);
    const visibleProjects = activeSkill
        ? projects.filter((project) => activeSkill.projectIds.includes(project.id))
        : featuredProjects;

    const showSkillProjects = (skill) => {
        setActiveSkill(skill);
        pageRef.current?.querySelector('#work')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    };

    useEffect(() => {
        const frameA = frameARef.current;
        const frameColor = frameColorRef.current;
        if (!frameA || !frameColor) return undefined;
        let raf = 0;
        let lastFrame = '';
        const preparedFrames = new globalThis.Map();
        let cameraPosition = null;
        let targetPosition = 0;
        const getPreparedFrame = (index) => {
            const safeIndex = Math.min(dashboardFrames.length - 1, Math.max(0, index));
            if (!preparedFrames.has(safeIndex)) {
                const image = new Image();
                image.decoding = 'async';
                image.src = dashboardFrames[safeIndex];
                const ready = image.decode ? image.decode().catch(() => undefined) : new Promise((resolve) => {
                    image.onload = resolve;
                    image.onerror = resolve;
                });
                preparedFrames.set(safeIndex, ready);
            }
            return preparedFrames.get(safeIndex);
        };
        const setFrame = (index) => {
            const safeIndex = Math.min(dashboardFrames.length - 1, Math.max(0, index));
            const frameSrc = dashboardFrames[safeIndex];
            if (lastFrame === frameSrc) return;
            lastFrame = frameSrc;
            getPreparedFrame(safeIndex).then(() => {
                if (lastFrame !== frameSrc) return;
                frameA.src = frameSrc;
                frameColor.src = frameSrc;
            });
        };
        const paint = () => {
            raf = 0;
            const page = pageRef.current;
            if (!page) return;
            if (cameraPosition === null || reducedMotion) cameraPosition = targetPosition;
            else cameraPosition += (targetPosition - cameraPosition) * 0.12;

            const maxSegment = Math.max(0, dashboardFocus.length - 1);
            const position = Math.min(maxSegment, Math.max(0, cameraPosition));
            const segment = Math.min(maxSegment, Math.floor(position));
            const frameProgress = segment === maxSegment ? 0 : position - segment;
            const framePosition = Math.min(dashboardFrames.length - 1, position * 4);
            setFrame(reducedMotion ? segment * 4 : Math.round(framePosition));

            // Decode just the adjacent frames ahead of the camera to avoid a hitch on image swaps.
            const frameIndex = Math.round(framePosition);
            getPreparedFrame(frameIndex + 1);
            getPreparedFrame(frameIndex + 2);
            if (frameIndex > 0) getPreparedFrame(frameIndex - 1);

            const startFocus = dashboardFocus[segment];
            const endFocus = dashboardFocus[Math.min(segment + 1, maxSegment)];
            const mix = (a, b, t) => a + (b - a) * t;
            const focusX = mix(startFocus[0], endFocus[0], frameProgress);
            const focusY = mix(startFocus[1], endFocus[1], frameProgress);
            const spotX = mix(startFocus[2], endFocus[2], frameProgress);
            const spotY = mix(startFocus[3], endFocus[3], frameProgress);
            page.style.setProperty('--dashboard-focus-x', `${focusX.toFixed(1)}%`);
            page.style.setProperty('--dashboard-focus-y', `${focusY.toFixed(1)}%`);
            page.style.setProperty('--dashboard-spot-x', `${spotX.toFixed(1)}%`);
            page.style.setProperty('--dashboard-spot-y', `${spotY.toFixed(1)}%`);
            const videoProgress = targetPosition;
            page.style.setProperty('--dashboard-hero-video-opacity', `${Math.min(1, Math.max(0, 1 - videoProgress / 0.32)).toFixed(3)}`);
            if (heroVideoRef.current) {
                if (videoProgress >= 0.36) heroVideoRef.current.pause();
                else if (!reducedMotion && heroVideoRef.current.paused) heroVideoRef.current.play().catch(() => undefined);
            }
            const zoomRate = window.innerWidth <= 760 ? 0.15 : 0.115;
            const zoom = 1 + position * zoomRate;
            const turnX = (50 - focusY) * 0.035;
            const turnY = (focusX - 50) * 0.035;
            const transform = `perspective(1600px) scale(${zoom.toFixed(3)}) rotateX(${turnX.toFixed(2)}deg) rotateY(${turnY.toFixed(2)}deg)`;
            const origin = `${focusX.toFixed(1)}% ${focusY.toFixed(1)}%`;
            [frameA, frameColor, heroVideoRef.current].filter(Boolean).forEach((layer) => {
                layer.style.transform = transform;
                layer.style.transformOrigin = origin;
            });

            if (!reducedMotion && Math.abs(targetPosition - cameraPosition) > 0.001) {
                raf = requestAnimationFrame(paint);
            }
        };
        const update = () => {
            const page = pageRef.current;
            if (!page) return;
            const anchors = Array.from(page.querySelectorAll('.journey-section')).map((section) => section.getBoundingClientRect().top + window.scrollY);
            let segment = 0;
            while (segment < anchors.length - 2 && window.scrollY >= anchors[segment + 1]) segment += 1;
            const span = Math.max(1, anchors[segment + 1] - anchors[segment]);
            const sectionProgress = Math.min(1, Math.max(0, (window.scrollY - anchors[segment]) / span));
            targetPosition = reducedMotion ? segment : segment + sectionProgress;
            if (!raf) raf = requestAnimationFrame(paint);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
            cancelAnimationFrame(raf);
        };
    }, [reducedMotion]);

    useEffect(() => {
        const sections = pageRef.current?.querySelectorAll('.journey-section');
        if (!sections || !('IntersectionObserver' in window)) return undefined;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => entry.target.classList.toggle('in-view', entry.isIntersecting));
        }, { threshold: 0.32 });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="scroll-portfolio" ref={pageRef}>
            <div className="dashboard-scene" aria-hidden="true">
                <img className="dashboard-scroll-frame dashboard-gray-frame" ref={frameARef} src={dashboardFrames[0]} alt="" />
                <img className="dashboard-scroll-frame dashboard-color-frame" ref={frameColorRef} src={dashboardFrames[0]} alt="" />
                <video className="dashboard-hero-video" ref={heroVideoRef} src="/videos/hero-dashboard.mp4" poster={dashboardFrames[0]} autoPlay={!reducedMotion} muted loop playsInline preload="metadata" tabIndex={-1} />
            </div>
            <main className="journey-content">
                <section className="journey-section journey-hero" id="hero">
                    <div className="journey-copy hero-copy">
                        <SectionEyebrow index="00">DESIGNER · BUILDER · CURIOUS HUMAN</SectionEyebrow>
                        <h1>Adithya<br /><em>Ganesh.</em></h1>
                        <p>Product designer shaping digital experiences, visual systems, and ideas into things people can use.</p>
                        <a className="journey-cta" href="#about">Scroll to explore <ArrowDown size={17} /></a>
                    </div>
                    <div className="scroll-cue"><span className="scroll-cue-line" /> A world of work, ideas & everything in between</div>
                </section>

                <section className="journey-section journey-about" id="about">
                    <div className="journey-copy content-card about-card">
                        <SectionEyebrow index="01">A LITTLE ABOUT ME</SectionEyebrow>
                        <h2>Designing with<br /><em>curiosity and care.</em></h2>
                        <p className="about-paragraph">I’m 31 and currently based in Bangalore, with a Master’s in Visual Brand Design. I bring design thinking and technical know-how together to make digital experiences feel clear, useful, and human, moving between product problems, visual storytelling, and the details that make an experience click.</p>
                        <div className="about-stats">
                            <div><strong>9+</strong><span>years of experience</span></div>
                            <div><strong>20+</strong><span>projects completed</span></div>
                            <div><strong>15+</strong><span>happy clients</span></div>
                        </div>
                        <div className="hobby-heading"><span>OFF-SCREEN, IN MY ELEMENT</span><span>HOW I SPEND MY FREE TIME</span></div>
                        <div className="hobby-bars">
                            <div className="hobby-row"><Guitar size={17} /><span>Guitar</span><div className="hobby-track"><i style={{ width: '50%' }} /></div><b>50%</b></div>
                            <div className="hobby-row"><Gamepad2 size={17} /><span>Gaming</span><div className="hobby-track"><i style={{ width: '30%' }} /></div><b>30%</b></div>
                            <div className="hobby-row"><Plane size={17} /><span>Travel</span><div className="hobby-track"><i style={{ width: '20%' }} /></div><b>20%</b></div>
                        </div>
                    </div>
                </section>

                <section className="journey-section journey-skills" id="expertise">
                    <div className="journey-copy content-card skills-card">
                        <SectionEyebrow index="02">SKILLS / EXPERTISE</SectionEyebrow>
                        <h2>From first sketch<br />to <em>intelligent systems.</em></h2>
                        <p className="skills-intro">A flexible toolkit for shaping products, brands, and the systems behind them.</p>
                        <div className="skill-groups">
                            {skillGroups.map((skill, index) => {
                                const Icon = skill.Icon;
                                return (
                                    <button type="button" className={`skill-group ${skill.key === 'ai' ? 'skill-ai' : ''}`} key={skill.key} onClick={() => showSkillProjects(skill)} aria-label={`View projects related to ${skill.title}`}>
                                        <span className="skill-icon"><Icon size={21} /></span>
                                        <span className="skill-copy"><strong>{skill.title}</strong><span>{skill.subtitle}</span></span>
                                        <span className="skill-index" aria-hidden="true">0{index + 1}<ArrowUpRight size={13} /></span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="skill-note">AI experience grounded in practical agent workflows — including a Claude-built weekly business pulse.</div>
                    </div>
                </section>

                <section className="journey-section journey-process" id="process">
                    <div className="journey-copy content-card process-card">
                        <SectionEyebrow index="03">MY PROCESS</SectionEyebrow>
                        <h2>Make room for<br /><em>the right question.</em></h2>
                        <p className="process-intro">A thoughtful path from understanding the problem to checking that the solution works.</p>
                        <ol className="process-path">
                            {processSteps.map(({ number, title, detail, Icon, steps }) => (
                                <li className="process-step" key={number}>
                                    <div className="process-step-top"><span className="process-node"><Icon size={20} strokeWidth={1.7} /></span><span className="process-number">{number}</span></div>
                                    <strong>{title}</strong><small>{detail}</small>
                                    <ul>{steps.map((step) => <li key={step}><span />{step}</li>)}</ul>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="journey-section journey-work" id="work">
                    <div className="journey-copy work-copy">
                        <SectionEyebrow index="04">SELECTED WORK</SectionEyebrow>
                        <h2>{activeSkill ? <>Work linked to<br /><em>{activeSkill.title}.</em></> : <>Complex problems,<br /><em>clearer experiences.</em></>}</h2>
                        <p>{activeSkill ? `Selected projects that draw on ${activeSkill.title}.` : 'Projects across AI, data, digital products, and visual storytelling.'}</p>
                        {activeSkill && <button type="button" className="skill-filter-reset" onClick={() => setActiveSkill(null)}>View all selected work <ArrowRight size={15} /></button>}
                        <div className="journey-projects">
                            {visibleProjects.map((project, index) => (
                                <Link to={`/project/${project.id}`} className={`journey-project project-tone-${index % 4}`} key={project.id}>
                                    <div className="project-card-visual">
                                        {project.image ? <img src={project.image} alt="" loading="lazy" /> : <ProjectVisual project={project} className="project-card-generated" />}
                                    </div>
                                    <div className="project-card-meta">
                                        <span className="project-count">0{index + 1}</span>
                                        <div><small>{project.category}</small><h3>{project.title}</h3><span className="project-tags">{project.tags?.slice(0, 3).join(' · ')}</span></div>
                                        <ArrowUpRight size={19} className="project-arrow" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link to="/work" className="view-all-projects">View all projects <ArrowRight size={16} /></Link>
                    </div>
                </section>

                <section className="journey-section journey-contact" id="contact">
                    <div className="journey-copy contact-copy">
                        <SectionEyebrow index="05">THE NEXT CHAPTER</SectionEyebrow>
                        <h2>Let’s make something<br /><em>meaningful.</em></h2>
                        <p>Have a project, a good question, or an idea taking shape? I’d love to hear about it.</p>
                        <a className="journey-cta contact-cta" href="mailto:adithyagnitt@gmail.com">Start a conversation <ArrowRight size={18} /></a>
                        <div className="contact-links"><a href="https://www.linkedin.com/in/adithyaganesh1/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="https://www.instagram.com/adithya.ganesh/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
                    </div>
                </section>
            </main>
        </div>
    );
}
