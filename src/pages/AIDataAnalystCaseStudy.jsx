import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, CheckCircle2, Compass, GitBranch, Layers3, MessageSquareText, ShieldCheck, UsersRound } from 'lucide-react';
import './AIDataAnalystCaseStudy.css';

const research = [
    ['Fragmented work', 'Analysts moved between source systems and JIRA to define, assign, and track work, with no single view of progress or ownership.'],
    ['Slow, repetitive steps', 'Even small changes could take several weeks as developers repeated manual analysis, code review, and testing activities.'],
    ['Little room for complex work', 'Tedious tasks left less time for the challenging problem solving developers wanted to focus on.'],
];
const personas = [
    { role: 'Developer', context: '6 years of experience', need: 'Spend time solving complex problems instead of repeating manual steps.', friction: 'Tedious work, scattered tools, unclear ownership, and no single place to follow a task through deployment.', Icon: GitBranch },
    { role: 'Product Manager', context: '12 years of experience', need: 'See workstream progress and keep delivery on track.', friction: 'Unclear development status, repeated follow-ups, and delays that put project timelines at risk.', Icon: UsersRound },
];
const journey = [
    ['01', 'Create the workstream', 'Set up the shared workspace and define a functional requirement.'],
    ['02', 'Analyse impact', 'Identify affected objects, understand dependencies, and create the plan.'],
    ['03', 'Plan and assign', 'Break the requirement into tasks, assign owners, and track progress.'],
    ['04', 'Develop and review', 'Complete code changes and move through code and SME review.'],
    ['05', 'Validate and deploy', 'Create and run test suites, resolve issues, and deploy to production.'],
];
const loop = ['Interact with AI', 'Receive a suggestion', 'Review the suggestion', 'Re-prompt for changes', 'Add details manually if needed', 'Continue to the next step'];
const colors = [
    ['Primary', '#0879FF', 'Selected states and key information'],
    ['Informative', '#3491FF', 'Information and guidance'],
    ['Positive', '#268E6C', 'Successful completion'],
    ['Notice', '#DA7B11', 'In-progress and warning states'],
    ['Negative', '#D7373F', 'Errors and urgent attention'],
];

export function AIDataAnalystCaseStudy({ project }) {
    const screenNames = ['Impact analysis', 'Validation testing', 'Task review'];
    return <main className="ai-case-study">
        <section className="ai-case-hero"><div className="ai-case-wrap">
            <Link href="/work" className="ai-back-link"><ArrowLeft size={16} /> All projects</Link>
            <div className="ai-hero-grid">
                <div className="ai-hero-copy">
                    <span className="ai-eyebrow"><span /> UX CASE STUDY · GENERATIVE AI</span>
                    <h1>Make the work<br />move <em>smarter.</em></h1>
                    <p>{project.description}</p>
                    <div className="ai-tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a className="ai-prototype-link" href={project.link} target="_blank" rel="noreferrer">Explore the clickable prototype <ArrowUpRight size={15} /></a>
                </div>
                <div className="ai-hero-visual"><div className="ai-visual-glow" /><img src={project.image} alt="AI Data Analyst Platform workstream and task tracking interface" /><div className="ai-visual-chip"><Bot size={15} /> AI-assisted workflow</div></div>
            </div>
            <div className="ai-meta-row">
                <div><span>ROLE</span><strong>UX Designer &amp; Researcher</strong></div><div><span>SCOPE</span><strong>Concept to delivery</strong></div><div><span>PRODUCT</span><strong>AI data engineering platform</strong></div><div><span>ESTIMATED IMPACT</span><strong>About 70% time saved</strong></div>
            </div>
        </div></section>

        <section className="ai-section"><div className="ai-case-wrap ai-two-col">
            <div><span className="ai-eyebrow"><span /> PROJECT OVERVIEW</span><h2>One guided path<br /><em>from request to release.</em></h2></div>
            <div className="ai-prose">
                <p>A technology product designed to accelerate data analysts and developers by automating repetitive work with AI. Users create workstreams, define requirements, follow tasks, review AI suggestions, and complete testing before deployment.</p>
                <p>I led the end-to-end UX, creating a cohesive language across product flows, gathering requirements with the product manager and team leads, and presenting interactive prototypes to leadership before resource allocation. I also created product branding assets and a landing website.</p>
                <div className="ai-highlight"><ShieldCheck size={19} /><p><span>THE GOAL</span>Save developer time with AI support for detailed requirements, impact analysis, task creation and assignment, development, code review, unit testing, and deployment.</p></div>
            </div>
        </div></section>

        <section className="ai-section ai-research"><div className="ai-case-wrap">
            <div className="ai-section-heading"><span className="ai-eyebrow"><span /> USER RESEARCH</span><h2>Several weeks of work<br /><em>for even small changes.</em></h2><p>Interviews with users and team leads surfaced a long, manual process. Tracking and ownership gaps delayed tasks and affected project timelines.</p></div>
            <div className="ai-research-grid">{research.map(([title, text], i) => <article className="ai-info-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="ai-section"><div className="ai-case-wrap">
            <div className="ai-section-heading"><span className="ai-eyebrow"><span /> WHO THE EXPERIENCE SERVES</span><h2>Give contributors and leads<br /><em>a shared picture.</em></h2></div>
            <div className="ai-persona-grid">{personas.map(({ role, context, need, friction, Icon }) => <article className="ai-persona-card" key={role}>
                <div className="ai-persona-top"><span><Icon size={20} /></span><div><h3>{role}</h3><small>{context}</small></div></div>
                <div><span>WHAT THEY NEED</span><p>{need}</p></div><div><span>FRICTION TODAY</span><p>{friction}</p></div>
            </article>)}</div>
        </div></section>

        <section className="ai-section ai-journey"><div className="ai-case-wrap">
            <div className="ai-section-heading"><span className="ai-eyebrow"><span /> THE END-TO-END JOURNEY</span><h2>One workstream, from<br /><em>first requirement to production.</em></h2><p>Information architecture connects each stage so users can see what comes next and where work stands.</p></div>
            <div className="ai-journey-list">{journey.map(([step, title, detail]) => <article className="ai-journey-step" key={step}><span>{step}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowRight size={17} /></article>)}</div>
            <div className="ai-journey-note"><Layers3 size={19} /><p><strong>Information architecture</strong> Workstreams contain requirements; requirements connect to impact analysis, planning, tasks, reviews, validation, and deployment.</p></div>
        </div></section>

        <section className="ai-section ai-assist"><div className="ai-case-wrap ai-two-col ai-assist-grid">
            <div><span className="ai-eyebrow"><span /> AI INTERACTION MODEL</span><h2>Keep the person<br /><em>in the loop.</em></h2><p className="ai-section-intro">AI accelerates repetitive work while the user stays able to review, refine, or add information before proceeding.</p></div>
            <div className="ai-loop-list">{loop.map((item, i) => <div className="ai-loop-item" key={item}><span>{i === 0 ? <MessageSquareText size={17} /> : i === loop.length - 1 ? <CheckCircle2 size={17} /> : <Compass size={17} />}</span><strong>{item}</strong>{i < loop.length - 1 && <i />}</div>)}</div>
        </div></section>

        <section className="ai-section ai-design"><div className="ai-case-wrap">
            <div className="ai-section-heading"><span className="ai-eyebrow"><span /> DESIGN SYSTEM</span><h2>A reliable visual language<br /><em>for complex work.</em></h2><p>I created a consistent product system across color semantics, typography, iconography, spacing, sizing, and component guidance.</p></div>
            <div className="ai-color-grid">{colors.map(([label, color, note]) => <div className="ai-color-card" key={label}><span style={{ backgroundColor: color }} /><strong>{label}</strong><small>{color}</small><p>{note}</p></div>)}</div>
            <div className="ai-foundation-notes"><div><span>TYPE</span><strong>Helvetica Neue</strong><p>Neutral, legible hierarchy for an AI-focused product.</p></div><div><span>ICONOGRAPHY</span><strong>Filled and outline</strong><p>Filled icons clarify primary actions and active states; outline icons support secondary actions.</p></div><div><span>COMPONENTS</span><strong>States and guidance</strong><p>Consistent layout, spacing, sizing, buttons, coachmarks, help content, and error states.</p></div><div><span>TOOLS</span><strong>Miro · Adobe XD · Office</strong><p>Used for research, UX workshops, documentation, and interactive prototyping.</p></div></div>
        </div></section>

        <section className="ai-section ai-screens"><div className="ai-case-wrap">
            <div className="ai-section-heading"><span className="ai-eyebrow"><span /> PROTOTYPE &amp; PRODUCT FLOWS</span><h2>Make the proposed journey<br /><em>concrete before build.</em></h2><p>The clickable prototype follows a functional requirement from start to finish and includes guidance, modals, and error messages.</p></div>
            <div className="ai-screen-grid">{project.gallery.map((src, i) => <figure key={src}><img src={src} alt={'AI Data Analyst Platform interface screen ' + (i + 1)} loading="lazy" /><figcaption><span>0{i + 1}</span>{screenNames[i] || 'Product flow'}</figcaption></figure>)}</div>
        </div></section>

        <section className="ai-outcome"><div className="ai-case-wrap ai-outcome-inner">
            <div><span className="ai-eyebrow"><span /> OUTCOME</span><h2>Less repetitive effort.<br /><em>More focus on complex work.</em></h2><p>{project.impact}</p></div>
            <a href={project.link} target="_blank" rel="noreferrer">View the clickable prototype <ArrowRight size={16} /></a>
        </div></section>
    </main>;
}
