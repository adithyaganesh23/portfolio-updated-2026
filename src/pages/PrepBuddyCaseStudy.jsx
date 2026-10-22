import React from 'react';
import { Link } from 'wouter';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    ChefHat,
    Check,
    ClipboardList,
    CookingPot,
    PackageCheck,
    ShoppingCart,
    Sparkles,
    UsersRound,
} from 'lucide-react';
import './PrepBuddyCaseStudy.css';

const asset = (name) => `/images/prepbuddy/${name}`;

const workflow = [
    {
        number: '01',
        title: 'Plan the week',
        detail: 'Place meals into breakfast, lunch, or dinner slots. Set servings and move between weeks.',
        Icon: CalendarDays,
    },
    {
        number: '02',
        title: 'Check the pantry',
        detail: 'See quantities, low-stock thresholds, and expiry dates alongside the meals they support.',
        Icon: PackageCheck,
    },
    {
        number: '03',
        title: 'Shop the gaps',
        detail: 'Build a grocery list from planned meals and servings, accounting for what is already on hand.',
        Icon: ShoppingCart,
    },
    {
        number: '04',
        title: 'Close the loop',
        detail: 'Mark meals cooked, add a note or photo, and keep a cook history for next time.',
        Icon: CookingPot,
    },
];

const principles = [
    {
        number: '01',
        title: 'One plan, connected tasks',
        detail: 'The weekly plan is the starting point for pantry checks and shopping, so related work does not need to be recreated in separate places.',
        Icon: ClipboardList,
    },
    {
        number: '02',
        title: 'Readiness where it matters',
        detail: 'Stock and expiry cues sit close to meal and grocery decisions, helping the household spot what is covered and what needs attention.',
        Icon: PackageCheck,
    },
    {
        number: '03',
        title: 'A useful handoff',
        detail: 'The grocery list can be edited and checked off. Pantry quantities can then be updated after the trip, keeping the next plan grounded.',
        Icon: UsersRound,
    },
];

function ScreenFigure({ src, alt, title, caption, className = '' }) {
    return (
        <figure className={`prep-screen ${className}`}>
            <div className="prep-screen-image"><img src={asset(src)} alt={alt} loading="lazy" /></div>
            <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
        </figure>
    );
}

export function PrepBuddyCaseStudy({ project }) {
    return (
        <main className="prep-case-study">
            <section className="prep-case-hero">
                <div className="prep-case-wrap">
                    <Link href="/work" className="prep-back-link"><ArrowLeft size={16} /> All projects</Link>
                    <div className="prep-hero-grid">
                        <div className="prep-hero-copy">
                            <span className="prep-eyebrow"><span /> PRODUCT DESIGN CASE STUDY</span>
                            <h1>{project.title}<br /><em>Plan the week.<br />Ease the rest.</em></h1>
                            <p>{project.description}</p>
                            <div className="prep-tag-row">
                                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                        <div className="prep-hero-art" aria-label="PrepBuddy weekly planner and pantry interface previews">
                            <div className="prep-hero-orbit prep-orbit-one" />
                            <div className="prep-hero-orbit prep-orbit-two" />
                            <div className="prep-hero-glow" />
                            <figure className="prep-hero-screen prep-hero-main"><img src={asset('week-planner.svg')} alt="PrepBuddy weekly meal planner" /></figure>
                            <figure className="prep-hero-screen prep-hero-phone"><img src={asset('pantry-health.svg')} alt="PrepBuddy pantry inventory and freshness status" /></figure>
                            <span className="prep-hero-caption"><CalendarDays size={13} /> PLAN <i /> CHECK <i /> SHOP <i /> COOK</span>
                        </div>
                    </div>
                    <div className="prep-meta-row" aria-label="Project overview">
                        <div><span>PRODUCT</span><strong>Household meal planning</strong></div>
                        <div><span>PLATFORMS</span><strong>Responsive web + mobile</strong></div>
                        <div><span>CORE LOOP</span><strong>Plan → check → shop → cook</strong></div>
                        <div><span>DESIGN FOCUS</span><strong>Connected everyday tasks</strong></div>
                    </div>
                </div>
            </section>

            <section className="prep-case-section prep-opportunity">
                <div className="prep-case-wrap prep-opportunity-grid">
                    <div>
                        <span className="prep-eyebrow"><span /> THE OPPORTUNITY</span>
                        <h2>One dinner decision can start four separate chores.</h2>
                    </div>
                    <div className="prep-prose">
                        <p>Choosing meals, remembering what is already in the kitchen, working out what to buy, and keeping a household in sync are connected tasks. They often happen in different places, leaving plans that ignore the pantry, lists that do not reflect the week, and recipes that are hard to reuse.</p>
                        <p>PrepBuddy treats those jobs as one continuous household routine. A meal placed on the week informs the grocery list; pantry quantities reveal what is already covered; cooking closes the loop and adds useful context for next time.</p>
                        <div className="prep-design-question"><Sparkles size={18} /><p><span>DESIGN CHALLENGE</span>Connect planning and shopping without turning everyday meal prep into another project to manage.</p></div>
                    </div>
                </div>
            </section>

            <section className="prep-case-section prep-workflow-section">
                <div className="prep-case-wrap">
                    <div className="prep-section-heading">
                        <span className="prep-eyebrow"><span /> A CONNECTED WORKFLOW</span>
                        <h2>From “what’s for dinner?”<br /><em>to a plan you can use.</em></h2>
                        <p>Each step passes useful information to the next, so a plan stays actionable from the first meal choice to the trip back from the store.</p>
                    </div>
                    <div className="prep-workflow-grid">
                        {workflow.map(({ number, title, detail, Icon }, index) => (
                            <article className="prep-workflow-card" key={number}>
                                <div className="prep-workflow-top"><span>{number}</span><Icon size={22} strokeWidth={1.7} />{index < workflow.length - 1 && <ArrowRight className="prep-workflow-arrow" size={15} />}</div>
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </article>
                        ))}
                    </div>
                    <div className="prep-flow-note"><Check size={15} /> One shared routine carries meal, ingredient, pantry, and cooking context forward.</div>
                </div>
            </section>

            <section className="prep-case-section prep-screens-section">
                <div className="prep-case-wrap">
                    <div className="prep-section-heading prep-screen-heading">
                        <div><span className="prep-eyebrow"><span /> THE PRODUCT IN USE</span><h2>Keep the right detail close to the decision.</h2></div>
                        <p>The interface pairs a broad view of the week with focused pantry, shopping, and import tools.</p>
                    </div>
                    <ScreenFigure
                        src="week-planner.svg"
                        alt="Weekly planner showing day navigation, meal slots, servings, and cooking actions"
                        title="01 / Week planner"
                        caption="Meals are organized by day and mealtime, with servings, cook status, and pantry readiness close to each plan."
                        className="prep-screen-wide"
                    />
                    <div className="prep-screen-pair">
                        <ScreenFigure
                            src="pantry-health.svg"
                            alt="Pantry inventory with item quantities, low-stock status, and expiry information"
                            title="02 / Pantry health"
                            caption="Inventory, quantity, low-stock thresholds, and expiry visibility in one household view."
                        />
                        <ScreenFigure
                            src="grocery-list.svg"
                            alt="Grocery list derived from the meal plan and pantry quantities"
                            title="03 / Grocery list"
                            caption="Planned ingredients minus what is already on hand, ready to edit and check off."
                        />
                    </div>
                    <ScreenFigure
                        src="bulk-import.svg"
                        alt="Bulk import sheet for pasting an AI-generated meal plan, reviewing parsed meals, and adding them to the week"
                        title="04 / Bulk plan import"
                        caption="Paste a plan from an AI tool, review the parsed meals, then add them to the week."
                        className="prep-screen-wide prep-import-screen"
                    />
                </div>
            </section>

            <section className="prep-case-section prep-principles-section">
                <div className="prep-case-wrap">
                    <div className="prep-section-heading">
                        <span className="prep-eyebrow"><span /> INTERACTION PRINCIPLES</span>
                        <h2>Useful detail, at the moment it matters.</h2>
                        <p>PrepBuddy keeps common actions close, makes household readiness legible, and leaves room to adjust plans as the week changes.</p>
                    </div>
                    <div className="prep-principle-grid">
                        {principles.map(({ number, title, detail, Icon }) => (
                            <article className="prep-principle-card" key={number}>
                                <div className="prep-principle-top"><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div>
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="prep-case-section prep-system-section">
                <div className="prep-case-wrap prep-system-grid">
                    <div className="prep-system-copy">
                        <span className="prep-eyebrow"><span /> PRODUCT SYSTEM</span>
                        <h2>Designed for a household, across screens.</h2>
                        <p>The web experience and Expo mobile app share a household data model. Household data and realtime updates are supported through Supabase on web; the mobile app also supports local guest storage.</p>
                        <p>This structure keeps the product useful both as a shared household tool and as a quick personal planning companion.</p>
                    </div>
                    <div className="prep-system-cards">
                        <article><UsersRound size={19} /><span>HOUSEHOLD</span><strong>Shared context</strong><p>Meal plans, pantry quantities, and grocery needs connect around the household.</p></article>
                        <article><CalendarDays size={19} /><span>WEB + MOBILE</span><strong>Flexible access</strong><p>Use the responsive web product or continue the routine in the mobile app.</p></article>
                        <article><ChefHat size={19} /><span>AFTER THE MEAL</span><strong>Memory for next time</strong><p>Cook status, notes, and photos build a practical history of meals.</p></article>
                    </div>
                </div>
            </section>

            <section className="prep-case-end">
                <div className="prep-case-wrap prep-case-end-inner">
                    <div><span className="prep-eyebrow"><span /> PREPBUDDY</span><h2>Less guesswork between the plan and the plate.</h2></div>
                    <Link href="/work" className="prep-back-projects">Explore more projects <ArrowUpRight size={17} /></Link>
                </div>
            </section>
        </main>
    );
}
