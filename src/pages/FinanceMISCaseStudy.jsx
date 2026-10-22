import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Database, ShieldCheck, UsersRound } from 'lucide-react';
import './FinanceMISCaseStudy.css';

const designSteps = [
    {
        number: '01',
        title: 'Start with the data',
        detail: 'Work with the business team to review and improve the source tables, keeping data quality and governance in view.',
        Icon: Database,
    },
    {
        number: '02',
        title: 'Map the role-based journeys',
        detail: 'Shape dashboard navigation and views around the access roles and questions people bring to the reports.',
        Icon: UsersRound,
    },
    {
        number: '03',
        title: 'Make comparisons clear',
        detail: 'Use consistent layouts and focused visualizations to help users scan finance measures and act on them.',
        Icon: BarChart3,
    },
];

export function FinanceMISCaseStudy({ project }) {
    return (
        <main className="mis-case-study">
            <section className="mis-hero">
                <div className="mis-wrap">
                    <Link href="/work" className="mis-back-link"><ArrowLeft size={16} /> All projects</Link>
                    <div className="mis-hero-grid">
                        <div className="mis-hero-copy">
                            <span className="mis-eyebrow"><span /> POWER BI · FINANCE</span>
                            <h1>Finance MIS<br /><em>from reports<br />to decisions.</em></h1>
                            <p>{project.description}</p>
                            <div className="mis-tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        </div>
                        <div className="mis-hero-stat" aria-label="Project focus">
                            <span className="mis-stat-icon"><BarChart3 size={24} /></span>
                            <span className="mis-stat-label">DESIGN FOCUS</span>
                            <strong>Clearer views.<br />Faster decisions.</strong>
                            <span className="mis-stat-rule" />
                            <span className="mis-stat-foot"><ShieldCheck size={14} /> Quality and governance considered</span>
                        </div>
                    </div>
                    <div className="mis-meta-row">
                        <div><span>DELIVERABLE</span><strong>Power BI dashboard suite</strong></div>
                        <div><span>ROLE</span><strong>{project.role}</strong></div>
                        <div><span>APPROACH</span><strong>Role-based journeys</strong></div>
                        <div><span>DOMAIN</span><strong>Finance MIS</strong></div>
                    </div>
                </div>
            </section>

            <section className="mis-spread-section">
                <div className="mis-wrap">
                    <div className="mis-section-heading">
                        <span className="mis-eyebrow"><span /> DASHBOARD SUITE</span>
                        <h2>Finance reporting at a glance.</h2>
                        <p>A closer look at the dashboard suite: its executive overview, operational summaries, and detailed reports.</p>
                    </div>
                    <figure className="mis-spread-frame">
                        <img src={project.image} alt="Finance MIS Power BI dashboard collage showing an executive overview, operational summaries, and detailed reporting tables." />
                        <figcaption><span>Finance MIS Analytics Dashboard</span><a href={project.image} target="_blank" rel="noreferrer">Open dashboard image <ArrowUpRight size={14} /></a></figcaption>
                    </figure>
                </div>
            </section>

            <section className="mis-brief-section">
                <div className="mis-wrap mis-brief-grid">
                    <div>
                        <span className="mis-eyebrow"><span /> THE OPPORTUNITY</span>
                        <h2>Make detailed reports easier to use.</h2>
                    </div>
                    <div className="mis-brief-copy">
                        <p>{project.challenge}</p>
                        <div className="mis-brief-callout">
                            <Database size={18} />
                            <p><span>THE DESIGN CHALLENGE</span>Bring clarity and consistency to finance reporting while keeping data trustworthy and useful for each role.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mis-process-section">
                <div className="mis-wrap">
                    <div className="mis-section-heading">
                        <span className="mis-eyebrow"><span /> MY APPROACH</span>
                        <h2>From source tables<br /><em>to decision-ready views.</em></h2>
                        <p>{project.solution}</p>
                    </div>
                    <div className="mis-process-grid">
                        {designSteps.map(({ number, title, detail, Icon }) => (
                            <article className="mis-process-card" key={number}>
                                <div className="mis-process-top"><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div>
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mis-outcome-section">
                <div className="mis-wrap mis-outcome-inner">
                    <div>
                        <span className="mis-eyebrow"><span /> THE OUTCOME</span>
                        <h2>A consistent dashboard experience for faster business decisions.</h2>
                        <p>{project.impact}</p>
                    </div>
                    <a className="mis-prototype-link" href={project.link} target="_blank" rel="noreferrer">Explore the prototype <ArrowRight size={17} /></a>
                </div>
            </section>

            <section className="mis-case-end">
                <div className="mis-wrap mis-case-end-inner">
                    <div><span className="mis-eyebrow"><span /> FINANCE MIS</span><h2>Better views make data easier to act on.</h2></div>
                    <Link href="/work" className="mis-back-projects">Explore more projects <ArrowUpRight size={17} /></Link>
                </div>
            </section>
        </main>
    );
}
