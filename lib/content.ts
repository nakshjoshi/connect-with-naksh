/**
 * Single source of truth for site content.
 * Mirrors the master resume (see memory: resume-source-of-truth).
 */

export const profile = {
  name: "Nakshatra Joshi",
  handle: "nakshjoshi",
  role: "Software Engineer",
  focus: "Backend systems & agentic AI",
  status: "Available Jan 2027 — 6-month internship or full-time",
  statusShort: "Available Jan 2027",
  location: "India",
  email: "connect.nakshjoshi@gmail.com",
  phone: "+91 7008350087",
  resume:
    "https://drive.google.com/file/d/1Q7C586eA26v6U0r7VkzAVOY4uPG2CbkC/view?usp=drive_link",
  socials: {
    github: "https://github.com/nakshjoshi",
    linkedin: "https://www.linkedin.com/in/nakshjoshi/",
    leetcode: "https://leetcode.com/u/nakshjoshi/",
    whatsapp: "http://wa.me/917008350087",
  },
} as const;

/** Headline numbers. Each one must be traceable to shipped work. */
export const metrics = [
  { value: "7,000+", label: "PODs processed in production", source: "CargoFL" },
  { value: "82%", label: "documents auto-reconciled", source: "CargoFL" },
  { value: "10K+", label: "users served across 2 regions", source: "GoBrics" },
  { value: "10", label: "agent tools across the RFQ lifecycle", source: "CargoFL" },
] as const;

export type CaseStudy = {
  slug: string;
  name: string;
  kind: "Production" | "Product" | "Research";
  year: string;
  tagline: string;
  /** One sentence shown on the homepage row. */
  summary: string;
  /** Headline numbers for this piece of work. */
  stats: { value: string; label: string }[];
  stack: string[];
  links: { live?: string; repo?: string; letter?: string };
  /** Nodes rendered in the pipeline diagram at the top of the case study. */
  pipeline: string[];
  problem: string;
  approach: { title: string; body: string }[];
  outcome: string[];
  /** What I'd do differently — the part most portfolios skip. */
  reflection: string;
};

/*
 * Two further systems built at CargoFL are deliberately not published here:
 * the work is covered by an NDA. The employment entry in `experience` below
 * describes them only at the level the resume already states.
 */

export const caseStudies: CaseStudy[] = [
  {
    slug: "swiftly",
    name: "Swiftly",
    kind: "Product",
    year: "2025–26",
    tagline: "Resume automation: parse once, autofill anywhere, compile in a sandbox",
    summary:
      "A live resume-automation platform — Next.js dashboard, Bun/Express API and an MV3 extension — with hand-rolled auth, an LLM parsing pipeline into normalised Postgres, and LaTeX compilation locked in a resource-capped container.",
    stats: [
      { value: "100+", label: "resumes processed" },
      { value: "3", label: "form frameworks autofilled" },
      { value: "1GB/1CPU/60s", label: "LaTeX sandbox budget" },
    ],
    stack: ["Next.js", "TypeScript", "Bun", "Express.js", "Prisma", "PostgreSQL", "WebAuthn", "OAuth2", "Gemini 2.5 Flash", "Docker", "WXT MV3", "AWS EC2"],
    links: { live: "https://swiftly.nakshjoshi.in", repo: "https://github.com/nakshjoshi/swiftly" },
    pipeline: ["upload", "LLM parse", "schema validate", "Postgres", "DOM map", "autofill"],
    problem:
      "Job applications ask for the same twenty facts in twenty different shapes. The data already exists in a resume PDF; the work is getting it into a structured form once, then back out into whatever form a careers site happens to render.",
    approach: [
      {
        title: "Parsing that fails loudly",
        body: "Gemini 2.5 Flash turns PDF, DOCX and LaTeX resumes into JSON validated against a schema before it touches the database. Normalised PostgreSQL via Prisma means a profile is relational data, not a blob — so a single employer rename updates everywhere it appears.",
      },
      {
        title: "Two-stage autofill",
        body: "Stage one extracts DOM field metadata from the target form; stage two maps that metadata to profile values. Injection is event-safe for React, Vue and Svelte, because setting .value on a controlled input is a no-op unless you dispatch what the framework is listening for.",
      },
      {
        title: "Auth built, not bought",
        body: "No third-party auth provider: JWT with refresh-token rotation, Google OAuth2, and WebAuthn passkeys. Rotation means a stolen refresh token is single-use and detectable on reuse.",
      },
      {
        title: "Treat LaTeX as hostile input",
        body: "User-supplied LaTeX is arbitrary code, so compilation runs in an internal Docker service capped at 1 GB / 1 CPU with a 60 s timeout and per-job temp directories. CI/CD gates on type-check + lint, pushes SHA-tagged images to Docker Hub and deploys the pinned SHA over SSH to EC2 as health-checked, non-root containers.",
      },
    ],
    outcome: [
      "100+ resumes processed from testing into production use.",
      "Autofill works across React, Vue and Svelte career portals without per-site rules.",
      "Deploys are pinned by image SHA, so a rollback is a redeploy of a known-good tag.",
    ],
    reflection:
      "Hand-rolling auth was the right call for learning and the wrong call for velocity. The passkey flow alone cost more than the parsing pipeline — worth it once, not worth repeating on the next product.",
  },
  {
    slug: "bilingual-rag",
    name: "Bilingual Scheme Retrieval",
    kind: "Research",
    year: "2025",
    tagline: "Hindi↔English CRAG over 3,300+ government schemes, measured not vibed",
    summary:
      "A corrective-RAG system over Indian government welfare schemes with metadata-enriched hybrid chunking and intent routing, scoring 85%+ on an LLM-as-judge evaluation.",
    stats: [
      { value: "3,300+", label: "schemes indexed" },
      { value: "30K+", label: "retrieval chunks" },
      { value: "85%+", label: "eval accuracy" },
    ],
    stack: ["Python", "ChromaDB", "SentenceTransformers", "Gemini 2.0 Flash", "Streamlit", "Selenium", "Deep Translator"],
    links: {
      live: "https://gov-slm-rag-chatbot.streamlit.app/",
      repo: "https://github.com/nakshjoshi/MySchemeMultiLinguaBot",
    },
    pipeline: ["query", "translate", "intent route", "hybrid retrieve", "correct", "answer"],
    problem:
      "Welfare schemes are discoverable only if you already know what they are called. The people who most need them search in Hindi, in natural language, and ask three distinct kinds of question: am I eligible, what do I get, and how do I apply.",
    approach: [
      {
        title: "Chunk for the question, not the document",
        body: "Metadata-enriched hybrid chunking produced 30K+ chunks tagged by scheme and section. Top-2 retrieval plus sibling expansion pulls the neighbouring context only when it is needed, which cut token overhead against sending whole scheme documents.",
      },
      {
        title: "Route by intent",
        body: "Eligibility, benefits and how-to-apply questions want different sections of a scheme. Detecting intent before retrieval meant the retriever searched a smaller, more relevant slice.",
      },
      {
        title: "Measure it",
        body: "An LLM-as-judge evaluation over a generated question set scored 85%+ answer accuracy. Without that harness, every prompt change is a coin flip you cannot see the result of.",
      },
    ],
    outcome: [
      "3,300+ schemes queryable in Hindi or English through one interface.",
      "85%+ accuracy on a repeatable evaluation set, so prompt and retrieval changes are comparable.",
    ],
    reflection:
      "The translation layer is the weakest link — scheme names are proper nouns and round-tripping them through translation loses them. Next version pins entities before translating.",
  },
  {
    slug: "voice-agent",
    name: "Voice AI Agent",
    kind: "Product",
    year: "2025",
    tagline: "Sub-second mic → STT → LLM → TTS loop, provider-swappable by env var",
    summary:
      "A real-time voice agent behind an Express API that swaps its entire model stack between Groq and OpenAI through one environment variable, with browser-speech fallback and typed upstream errors.",
    stats: [
      { value: "4", label: "stages in the loop" },
      { value: "1", label: "env var to swap providers" },
      { value: "3", label: "typed upstream failure modes" },
    ],
    stack: ["React", "Node.js", "Express.js", "Groq", "Whisper-large-v3-turbo", "GPT-OSS-20B", "Orpheus TTS", "OpenAI"],
    links: {
      live: "https://stt-llm-tts.onrender.com/",
      repo: "https://github.com/nakshjoshi/stt-llm-tts",
    },
    pipeline: ["mic", "STT", "LLM", "TTS", "playback"],
    problem:
      "A voice loop is four network calls deep, and each one can rate-limit, stall or fail. Latency is the product: anything the user can perceive as waiting breaks the illusion of conversation.",
    approach: [
      {
        title: "One interface, two providers",
        body: "Groq and OpenAI sit behind a single provider abstraction selected by one env var, so the whole stack can be swapped when one is rate-limited or a model is deprecated — no code change, no redeploy of a different build.",
      },
      {
        title: "Degrade, don't die",
        body: "Browser speech synthesis is the fallback when TTS is unavailable, and rate-limit-aware sentence trimming keeps the agent inside quota rather than failing a long response outright.",
      },
      {
        title: "Type the failures",
        body: "429, 502 and 503 are distinct, typed error paths reaching the client, because 'try again in a moment' and 'the model is gone' need different UI.",
      },
    ],
    outcome: [
      "A conversational loop that survives provider rate limits instead of dropping the session.",
      "Provider migration is a config change, which made comparing Groq and OpenAI latency a five-minute experiment.",
    ],
    reflection:
      "Streaming the TTS rather than waiting for the full clip is the single biggest remaining latency win, and the architecture is already shaped for it.",
  },
  {
    slug: "gobrics",
    name: "GoBrics Hackathon Platform",
    kind: "Production",
    year: "2025",
    tagline: "Multi-region platform for 10K+ users across India and Russia",
    summary:
      "Team build serving 10K+ users with 1K+ concurrent: S3-backed submission uploads, a Redis-queued email service respecting provider rate limits, and geolocation DNS routing to keep Russian data on Yandex Cloud.",
    stats: [
      { value: "10K+", label: "users" },
      { value: "1K+", label: "concurrent" },
      { value: "2", label: "cloud regions" },
    ],
    stack: ["TypeScript", "Express.js", "Turborepo", "PostgreSQL", "Prisma", "Redis", "AWS", "Yandex Cloud", "Route 53", "Resend"],
    links: {
      live: "https://gobricshackathon.org/",
      repo: "https://github.com/GO-BRICS/Indo-Russia-Website",
    },
    pipeline: ["Route 53", "region", "upload API", "S3 / Yandex", "Redis queue", "email"],
    problem:
      "One hackathon, two countries, and a data-residency requirement: Russian participants' data had to stay on Russian infrastructure, while the product had to feel like a single platform to everyone.",
    approach: [
      {
        title: "One storage codebase, two clouds",
        body: "Yandex Object Storage is S3-compatible, so the same S3-SDK code path serves both regions with different endpoints and credentials rather than a forked storage layer.",
      },
      {
        title: "Routing as the residency boundary",
        body: "Co-designed Route 53 geolocation routing so a request lands in the right region before it touches application code — residency becomes a DNS and configuration property instead of a conditional scattered through handlers.",
      },
      {
        title: "Queue the email, respect the quota",
        body: "Submission confirmations go through a Redis queue shaped to Resend's rate limits, so a burst of 1K+ concurrent submissions does not translate into a burst of dropped emails.",
      },
    ],
    outcome: [
      "10K+ users across India and Russia, peaking above 1K concurrent.",
      "PDF submissions and confirmation emails held through peak load.",
      "Russian participant data stayed on Yandex Cloud without forking the application.",
    ],
    reflection:
      "Geolocation routing is invisible when it works and very hard to debug when it doesn't. Next time I would ship a region-echo endpoint on day one.",
  },
];

/** Homepage shows these three, in this order. */
export const featuredSlugs = ["swiftly", "gobrics", "bilingual-rag"] as const;

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export type Role = {
  company: string;
  org?: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  summary: string;
  /** Shipped work, kept at the level the resume already states. */
  points: string[];
  stack: string[];
  /** Case studies produced during this role. */
  work: string[];
  letter?: string;
};

export const experience: Role[] = [
  {
    company: "CargoFL",
    org: "Innoctive Technologies Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "May 2026 — Aug 2026",
    location: "Pune, Maharashtra · Hybrid",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHLPpWK5ZRfIA/company-logo_200_200/B4EZWvKxORHcAM-/0/1742400591397/cargofl_logo?e=2147483647&v=beta&t=t4AT7EKbNuQ7p4cjGCVbzHlkjDvVxxYlMywOWcLe_ns",
    summary:
      "Two production systems: a chat-based freight-procurement agent and the backend of an AI document-extraction platform.",
    points: [
      "Built a chat-based freight-procurement agent on Fastify + React with PostgreSQL/Drizzle, implementing 10 tools for the end-to-end RFQ lifecycle across 7 carriers, plus background workers for stale-RFQ reminders and failed-job retries.",
      "Built the backend of an AI proof-of-delivery extraction platform: file-type routing into a Redis queue with a Postgres-backed job table, pulling documents from S3 for an OCR + vision-LLM extraction service — 7,000+ PODs processed in production.",
      "Extended line-item-to-total reconciliation across every file-type path, auto-clearing ~82% of production documents and routing the rest to manual review; implemented RBAC across 5 roles.",
      "Shipped CSV bulk uploads, document-to-shipment linking and URL-persisted AND/OR filters in React/TypeScript/shadcn.",
      "Containerised the services and ran deploys through GitHub Actions CI/CD to AWS EC2; validated with MCP-driven Playwright E2E flows before client UAT.",
    ],
    stack: [
      "Fastify", "TypeScript", "React", "shadcn/ui", "PostgreSQL", "Drizzle", "Redis",
      "Docker", "GitHub Actions", "CI/CD", "AWS EC2", "AWS S3",
      "Cloudflare Workers", "OCR + vision LLMs", "LLM tool calling", "MCP", "Playwright",
    ],
    work: [],
    letter: "https://drive.google.com/file/d/1vdzSuG4AO2s36NnUtCceoCsGe7ZIR24M/view?usp=sharing",
  },
  {
    company: "Prodigal AI",
    role: "AI Developer Intern",
    period: "Jun 2025 — Aug 2025",
    location: "Delhi · Remote",
    logo: "pai.jpg",
    summary:
      "RAG content-generation pipelines with human-in-the-loop approval, and the MLOps plumbing to swap models without redeploying.",
    points: [
      "Built FastAPI backends for RAG-based AI content-generation pipelines, orchestrated as Airflow DAGs with human-in-the-loop steps that paused for reviewer approval or clarifying input.",
      "Persisted conversation history in a separate store so paused runs could resume without losing context.",
      "Used the MLflow Model Registry (DagsHub) to load versioned models at runtime, enabling model swaps without redeploys.",
      "Containerised services with Docker Compose and deployed to AWS EC2.",
    ],
    stack: [
      "FastAPI", "Python", "RAG", "Airflow", "MLflow", "DagsHub",
      "Docker", "Docker Compose", "AWS EC2",
    ],
    work: [],
    letter: "https://drive.google.com/file/d/1tpTMo591Xb3NxkapR5-QZqC8_xB__pVR/view?usp=drive_link",
  },
  {
    company: "Tata Steel Ltd.",
    role: "Vocational Trainee — Data Visualisation",
    period: "Jul 2024",
    location: "On-site",
    logo: "tsl.png",
    summary:
      "Dashboarding for sales analysis, and the data pipelines feeding it.",
    points: [
      "Built and deployed 3+ interactive Tableau dashboards for sales data analysis — a path to ~25% faster reporting turnaround.",
      "Studied the Google Cloud Platform and SAP-BODS pipelines feeding those dashboards.",
    ],
    stack: ["Tableau", "SQL", "SAP-BODS", "GCP"],
    work: [],
    letter: "https://drive.google.com/file/d/1VU_OwtHq5RCFRZcAqI9JSN-aErZDwOUS/view?usp=drive_link",
  },
];

/** How I work — stated as operating rules, each one earned on a real system. */
export const principles = [
  {
    n: "01",
    title: "Make correctness checkable",
    body: "An LLM's output is a guess until something can verify it. Line-item reconciliation, schema validation and eval harnesses turn guesses into claims you can gate on.",
  },
  {
    n: "02",
    title: "Give the model a state machine",
    body: "Agents get a tool per legal transition, not free rein over the workflow. The model decides what happens next; the system decides what is allowed.",
  },
  {
    n: "03",
    title: "Degrade, don't die",
    body: "Upstream providers rate-limit and fall over. Typed error paths, retries with sweep intervals, and fallbacks keep a session alive instead of dropping it.",
  },
  {
    n: "04",
    title: "Boring deploys",
    body: "Type-check and lint gates, SHA-tagged images, health-checked non-root containers. A rollback should be redeploying a known-good tag, not an incident.",
  },
] as const;

export type Article = {
  title: string;
  standfirst: string;
  url: string;
  published: string;
  /** Short note on form/length — honest, not a fake read-time estimate. */
  shape: string;
  tags: readonly string[];
  /** A few section headings, to show the depth without the full TOC. */
  covers: readonly string[];
};

export const writing: Article[] = [
  {
    title: "Do You Really Know How AI Agents Work?",
    standfirst:
      "Your agent calls get_weather. But the model never runs that function, never sees your SDK, and has no idea it's inside a loop. So who's actually doing the work?",
    url: "https://medium.com/@connect.nakshjoshi/do-you-really-know-how-ai-agents-work-d6e7935c9384",
    published: "28 Oct 2026",
    shape: "12 parts · written as a Q&A",
    tags: ["Agentic AI", "Tool calling", "MCP"],
    covers: [
      "How the model knows about your tools",
      "What the model actually writes, and how the provider builds your JSON",
      "What LangChain, LangGraph and the Vercel AI SDK are really doing",
      "Agent or workflow — and when not to build an agent",
      "When an agent actually stops",
    ],
  },
];

export const stack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Bash"],
  },
  {
    group: "Backend & Web",
    items: ["Node.js", "Fastify", "Express", "Hono", "FastAPI", "Bun", "React", "Next.js", "REST", "OAuth2 / WebAuthn"],
  },
  {
    group: "AI & Agents",
    items: ["RAG", "Tool calling", "MCP", "ChromaDB", "LangChain", "OCR + vision LLMs", "MLflow", "Airflow", "Whisper / TTS"],
  },
  {
    group: "Data, Infra & CI/CD",
    items: [
      "PostgreSQL", "Redis", "Prisma / Drizzle", "MongoDB",
      "Docker", "Docker Compose", "GitHub Actions", "CI/CD pipelines",
      "AWS EC2 / S3", "Cloudflare Workers / D1", "Yandex Cloud", "Linux",
    ],
  },
] as const;

export const education = [
  {
    name: "Rajiv Gandhi Institute of Petroleum Technology",
    qualification: "B.Tech, Computer Science & Design Engineering",
    period: "Aug 2023 — May 2027 (expected)",
    detail: "CPI 7.43 · Jais, Uttar Pradesh",
  },
  {
    name: "Doon International School",
    qualification: "Higher Secondary, CBSE",
    period: "Apr 2022 — May 2023",
    detail: "90.8% · Bhubaneswar, Odisha",
  },
  {
    name: "Tata D.A.V. Public School",
    qualification: "Secondary, CBSE",
    period: "Apr 2020 — May 2021",
    detail: "95.4% · Joda, Odisha",
  },
] as const;

export type ArchiveItem = {
  name: string;
  year: string;
  blurb: string;
  stack: readonly string[];
  live?: string;
  repo?: string;
};

/** Smaller builds — listed, not written up. */
export const archive: ArchiveItem[] = [
  {
    name: "StrumHub",
    year: "2025",
    blurb: "Guitar-learning platform with real-time pitch detection via the Web Audio API and Gemini-assisted guidance.",
    stack: ["React", "TypeScript", "Vite", "Web Audio API"],
    live: "https://guitar-learning-app-beta.vercel.app/",
    repo: "https://github.com/nakshjoshi/guitar-learning-app-nj/tree/main",
  },
  {
    name: "GitLab Beacon",
    year: "2025",
    blurb: "Natural-language search over GitLab's documentation using LangChain, FAISS and MMR-based retrieval.",
    stack: ["Python", "LangChain", "FAISS", "Gemini API"],
    live: "https://git-lab-chatbot-naksh.streamlit.app/",
    repo: "https://github.com/nakshjoshi/git-lab-chatbot",
  },
  {
    name: "Brain Cache",
    year: "2024",
    blurb: "React SPA with aggressive client-side caching and pre-fetching over a JWT-authenticated Express API.",
    stack: ["React", "TypeScript", "Express.js", "MongoDB"],
    live: "https://braincache.onrender.com/",
    repo: "https://github.com/nakshjoshi/BrainCache",
  },
  {
    name: "Insurance Cost Predictor",
    year: "2024",
    blurb: "Regression models over 1,000+ records served through a Flask app with real-time quote estimation.",
    stack: ["Python", "scikit-learn", "pandas", "Flask"],
    live: "https://nakshjoshi-rgipt.koyeb.app/",
    repo: "https://github.com/nakshjoshi/flaskMLapp",
  },
  {
    name: "Generic TTS System",
    year: "2024",
    blurb: "Web-based speech synthesis with Coqui TTS and character-level processing to cut response latency.",
    stack: ["Python", "Coqui TTS", "Flask"],
    repo: "https://github.com/nakshjoshi/RESOxAI_Task-1",
  },
  {
    name: "This site",
    year: "2026",
    blurb: "Next.js portfolio on a hand-built design system — four-step neutral ramp, one accent, mono reserved for data.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://nakshjoshi.in",
    repo: "https://github.com/nakshjoshi/connect-with-naksh",
  },
] as const;

export const recognition = [
  {
    title: "KodeKurrent Hackathon 2025 — Finalist",
    detail:
      "Finalist from 250+ teams; converted into a paid AI Developer internship at Prodigal AI, selected from 40+ candidates.",
  },
  {
    title: "Training & Placement Student Coordinator",
    detail:
      "Career Development Cell, RGIPT (2024 — present). Coordinating placements and internships: recruiter relationships, drives, pre-placement talks.",
  },
] as const;
