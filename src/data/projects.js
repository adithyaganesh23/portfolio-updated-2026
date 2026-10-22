export const projects = [
    {
        id: 1,
        title: "AI Data Analyst Platform",
        caseStudy: "ai-data-analyst",
        category: "Generative AI & Data Engineering Platform",
        image: "/images/project1/landing-v2.png",
        cols: "md:col-span-2",
        client: "Internal Product",
        link: "https://xd.adobe.com/view/f7087fa3-ed6b-4ed3-915f-e3fd404b8cd4-a25b/",
        linkLabel: "Open clickable prototype",
        tags: ["Generative AI & Data Engineering Platform"],
        year: "2024",
        role: "UX Design Lead",
        description: "A technology product that uses AI to reduce repetitive analyst and developer work, while guiding requirements from impact analysis through testing and deployment.",
        challenge: "Small changes could take weeks as teams worked through manual, fragmented steps across several tools. Progress and ownership were difficult to track, and developers had to repeat tedious analysis and testing work.",
        solution: "I led the product UX from discovery through delivery, partnering with product leads and stakeholders in interviews and workshops. I reorganized the experience around workstreams, requirements, impact analysis, planning, development, code review, validation, and deployment. AI suggestions could be reviewed, refined, or supplemented manually, keeping users in control of the work.",
        impact: "The solution was estimated to save about 70% of time on these tasks. A clickable end-to-end prototype, including guidance, modals, and error states, helped stakeholders understand the proposed journeys before committing resources.",
        caseStudySections: [
            {
                title: "Research the work behind the request",
                body: "Interviews with users and team leads exposed multi-week turnaround for even small changes, repeated manual work, unclear ownership, and progress tracked across separate systems."
            },
            {
                title: "Give each workstream a clear path",
                body: "I shaped a consistent information architecture from requirement creation and impact analysis through planning, development, code review, validation testing, and deployment. Users could see the work and its status in one guided flow."
            },
            {
                title: "Keep AI suggestions reviewable",
                body: "The interaction model lets people receive an AI suggestion, review it, re-prompt when needed, or add information manually before moving on. This keeps the user in control while reducing repetitive effort."
            },
            {
                title: "Build a system teams can apply",
                body: "I defined product foundations for color, typography, spacing, layout, and iconography, with component states and guidance for consistent use. The clickable prototype covered a functional requirement end to end, including help and error states."
            }
        ],
        designSystem: {
            typeface: "Helvetica Neue",
            primary: "#0879FF",
            semantic: [
                { label: "Informative", color: "#3491FF" },
                { label: "Positive", color: "#268E6C" },
                { label: "Notice", color: "#DA7B11" },
                { label: "Negative", color: "#D7373F" },
            ]
        },
        gallery: [
            "/images/project1/analysis-v2.png",
            "/images/project1/testing-v2.png",
            "/images/project1/testing-alt-v2.png"
        ]
    },
    {
        id: 2,
        title: "Action Point Management Tool",
        category: "Web Application",
        image: "/images/project2/landing.png",
        cols: "md:col-span-1",
        tags: ["Power BI", "Tasks", "Dashboard"],
        year: "2023",
        role: "UX Designer",
        description: "An application that helps in tracking action points decided during leadership meetings, using Gen AI for notes and assignments.",
        challenge: "The requirement was to track user calendars and provide summarized meeting notes and action points. The tool needed to cater to multiple personas with separate user journeys.",
        solution: "Designed a minimal interface for easier access to information based on workshops with the business team. Developed a comprehensive design guideline & style guide and collaborated closely with developers to ensure smooth asset handover.",
        impact: "Streamlined the tracking of leadership meeting outcomes and action point assignment.",
        gallery: [
            "/images/project2/calendar.png",
            "/images/project2/dashboard.png"
        ]
    },
    {
        id: 3,
        title: "Gen AI UX Revamp",
        category: "Web Application",
        image: "/images/project3/cover.png",
        cols: "md:col-span-1",
        tags: ["ML Workflows", "Generative AI", "Data Governance"],
        year: "2023",
        role: "Lead UX Designer",
        description: "A centralized platform providing services for Data Pipelines, Data Governance, ML Workflows, and Data Recovery.",
        challenge: "The existing application suffered from fragmented user experience due to multiple formats and layouts managed by different developer teams. The goal was to transform the overall UX by implementing a cohesive design language.",
        solution: "Facilitated UX workshops and stakeholder interviews to drive user flow adoption. Created a new Information Architecture (IA) for consistent navigation across multiple functions. Developed interactive prototypes to present features to leadership.",
        impact: "Established a unified design system and enhanced the overall user experience, enabling clear understanding of user journeys before resource allocation.",
        gallery: [
            "/images/project3/chats.png",
            "/images/project3/actions.png",
            "/images/project3/api.png"
        ]
    },
    {
        id: 4,
        title: "Offline Sales Executive App",
        category: "Mobile Application",
        image: "/images/project4/cover.png",
        cols: "md:col-span-2",
        tags: ["Application"],
        year: "2023",
        role: "UX Designer",
        description: "An offline sales app for field reps to manage daily targets and distributor activity, with consolidated performance reporting for managers.",
        challenge: "Sales reps needed a practical daily tool for tracking targets and performance in the field, while managers needed a consolidated view to follow progress and act quickly.",
        solution: "I defined journeys for sales progress and distributor management, then shaped the information architecture and low- to high-fidelity prototypes. The experience supports daily tracking for agents and brings sales-agent reporting together for management.",
        impact: "Gave sales reps a clear way to track daily performance and managers a consolidated picture of progress across agents.",
        gallery: [
            "/images/project4/dashboard.png",
            "/images/project4/login.png",
            "/images/project4/cart.png",
            "/images/project4/plan.png"
        ]
    },
    {
        id: 5,
        title: "Coffee Brand Executive Dashboard",
        category: "Visual Design & Analytics",
        image: "/images/project5/cover.png",
        cols: "md:col-span-1",
        tags: ["Dashboard", "Power BI", "Infographics"],
        year: "2023",
        role: "Visual Designer",
        description: "A user-centric sales dashboard aligning KPIs with targeted personas for a leading coffee brand.",
        challenge: "The requirement was to create a sales dashboard that aligns various KPIs with targeted personas. The goal was to build role-specific views to aid decision-making and create custom infographics for easy data consumption.",
        solution: "Analysed existing data and collaborated with the business team to determine optimal data visualizations. Conducted user interviews to understand pain points. Implemented diverse data slices and role-specific views to cater to different user entities.",
        impact: "Enabled tailored and insightful user experiences for different roles within the organization, improving data-driven decision making.",
        gallery: [
            "/images/project5/dashboard.png",
            "/images/project5/store.png"
        ]
    },
    {
        id: 6,
        title: "NMDC Sustainability Report",
        category: "Print & Editorial Design",
        link: "https://www.nmdc.co.in/cms-admin/Upload/Environment_Sustainability_Documents/d102aa86093842c789556a5c73e9ef7b_20251211140637800.pdf",
        image: "/images/project6/cover.png",
        cols: "md:col-span-1",
        tags: ["Editorial", "Sustainability", "Print"],
        year: "2024",
        role: "Graphic Designer",
        description: "Creative direction and editorial design for NMDC’s environment and sustainability report, with a modular layout and illustrated data visualizations.",
        challenge: "The report needed to make extensive sustainability information clear and engaging while meeting the organization’s brand and compliance requirements.",
        solution: "I led the creative direction and delivery, managed a team of two designers, and developed a modular editorial layout with illustrated data visualizations. The system kept the report cohesive while supporting varied content.",
        impact: "Delivered a readable, consistent report that communicates NMDC’s environmental and sustainability work through structured layouts and clear data visuals.",
        gallery: [
            "/images/project6/spread1.png",
            "/images/project6/spread2.png"
        ]
    },
    {
        id: 7,
        title: "Culture Fox",
        category: "Clothing (Brand)",
        link: "https://www.instagram.com/culture.fox/",
        image: "/images/project7/cover.png",
        cols: "md:col-span-1",
        tags: ["Branding", "Social Media", "Apparel"],
        year: "2024",
        role: "Founder & Creative Director",
        description: "Your go-to store for trendy new designs that showcase your love for different art forms, music genres, pop culture, anime and much more. #CultureFox 🦊",
        challenge: "To break through the noise of a saturated fashion market and create a clothing brand that authentically represents the diverse passions of pop-culture, anime, and art enthusiasts.",
        solution: "Designed a vibrant, community-focused brand identity that speaks directly to fandoms. Curated a diverse range of trendy designs and leveraged social media to showcase them on high-quality apparel, fostering a sense of belonging among customers.",
        impact: "Successfully launched a distinctive clothing line that resonates with niche communities, driving engagement and sales through a strong visual identity.",
        gallery: []
    },
    {
        id: 8,
        title: "Pulse of Business Agent",
        category: "Agentic AI & Business Intelligence",
        artwork: "pulse",
        cols: "md:col-span-2",
        tags: ["Claude", "Agentic AI", "Python", "KPI Monitoring", "Scenario Analysis", "PowerPoint"],
        role: "AI Agent Workflow Design",
        description: "A weekly business pulse agent that turns refreshed KPI data, scenario context, and call transcripts into a presentation of highlights, insights, and follow-ups.",
        challenge: "Weekly business reviews need more than a list of KPI changes. The agent must identify meaningful threshold crossings, investigate them with relevant queries, connect findings to patterns observed in prior weeks, and carry call discussions into the next review.",
        solution: "I structured the workflow with a master Markdown file and a separate instruction file. An automated DBX job refreshes KPI tables weekly, and Python scripts read the latest data. The agent applies configured thresholds, uses scenario-linked drill-down queries for further evidence, and interprets findings alongside manually observed patterns from previous weeks. A Python transcript-ingestion script adds meeting context and captures discussion points and data requests for the next call. The workflow generates supporting assets and a final PowerPoint.",
        impact: "Created a repeatable weekly path from refreshed business data to stakeholder-ready highlights and insights, with transcript-informed follow-ups for the next call.",
        workflow: [
            { title: "Refresh", detail: "Scheduled DBX job updates KPI tables." },
            { title: "Read", detail: "Python scripts load the latest data." },
            { title: "Detect", detail: "Configured KPI thresholds flag signals." },
            { title: "Investigate", detail: "Scenario-linked queries gather evidence." },
            { title: "Connect", detail: "Prior-week observations add context." },
            { title: "Synthesize", detail: "Agent develops supported insights." },
            { title: "Add call context", detail: "Python transcript feed captures discussion and follow-ups." },
            { title: "Deliver", detail: "Assets and a final insights deck are generated." }
        ],
        gallery: []
    },
    {
        id: 9,
        title: "PrepBuddy",
        category: "Meal Planning & Household Product",
        image: "/images/prepbuddy/week-planner.svg",
        cols: "md:col-span-1",
        tags: ["Meal Planning", "Responsive Product", "Household Tools"],
        description: "A connected household meal-planning product that carries the weekly plan through pantry checks, grocery shopping, and cooking.",
        challenge: "Choosing meals, remembering what is already in the kitchen, working out what to buy, and keeping a household in sync are connected tasks that often happen in different places. This can leave plans that ignore the pantry, grocery lists that do not reflect the week, and recipes that are hard to reuse.",
        solution: "PrepBuddy brings the routine together: meals and servings shape the grocery list, pantry quantities help show what is already covered, and cooking status, notes, and photos build a useful history for next time. A bulk import flow lets people paste a meal plan from an AI tool, review the parsed meals, and add them to the week.",
        caseStudy: "prepbuddy",
        gallery: []
    },
    {
        id: 10,
        title: "Finance MIS Analytics Dashboard",
        category: "Power BI Dashboard Design",
        image: "/images/project10/dashboard-collage.png",
        imageFit: "contain",
        caseStudy: "finance-mis",
        cols: "md:col-span-1",
        link: "https://xd.adobe.com/view/359b4ece-c911-4ab4-a8b4-e6aa227ca209-60c8/",
        linkLabel: "Explore the prototype",
        tags: ["Power BI", "Finance", "Dashboard Design", "Data Visualization"],
        role: "Dashboard UX & Visualization Design",
        description: "A redesign of finance MIS reports into intuitive Power BI dashboards, helping users move from detailed data to quicker business decisions.",
        challenge: "The MIS reports needed to make large data tables easier to interpret while giving users a consistent experience across pages. The dashboards also had to follow company brand guidelines and account for the role of each person using them.",
        solution: "I worked with the business team to improve the source tables for dashboard use and choose visualizations that made key measures easier to scan. I designed multiple dashboard journeys with consistent navigation and role-based views, while considering data quality and governance.",
        impact: "The redesign created a cohesive Power BI experience that helps users navigate finance information, compare measures, and make business decisions more quickly.",
        gallery: []
    }
];
