import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Swiftly",
    desc: "Live resume-automation platform: Next.js dashboard, Bun/Express REST API and a WXT MV3 extension, with custom auth (no third-party provider) — JWT + refresh-token rotation, Google OAuth2 and WebAuthn passkeys. Gemini 2.5 Flash parses PDF/DOCX/LaTeX resumes into schema-validated JSON in normalised PostgreSQL; a two-stage autofill maps DOM field metadata to profile values with event-safe injection for React, Vue and Svelte forms. LaTeX compilation is sandboxed in a 1 GB / 1 CPU / 60 s Docker service. 100+ resumes processed.",
    image: "swiftly.png",
    tech: ["Next.js", "TypeScript", "Bun", "Express.js", "Prisma", "PostgreSQL", "WebAuthn", "Gemini API", "Docker", "AWS EC2"],
    live: "https://swiftly.nakshjoshi.in",
    demo: "https://github.com/nakshjoshi/swiftly",
  },
  {
    title: "Bilingual AI Chatbot",
    desc: "Hindi↔English CRAG retrieval system over 3,300+ Indian government schemes with ChromaDB, SentenceTransformers and Gemini 2.0 Flash — 85%+ answer accuracy on an LLM-as-judge eval. Metadata-enriched hybrid chunking (30K+ chunks) with Top-2 + sibling retrieval cuts token overhead, and intent detection routes eligibility, benefits and how-to-apply questions.",
    image: "/bilai.png",
    tech: ["Python", "ChromaDB", "SentenceTransformers", "Gemini API", "Streamlit", "Selenium", "Deep Translator"],
    live: "https://gov-slm-rag-chatbot.streamlit.app/",
    demo: "https://github.com/nakshjoshi/MySchemeMultiLinguaBot",
  },
  {
    title: "Voice AI Agent",
    desc: "Real-time mic → STT → LLM → TTS voice agent (Whisper-large-v3-turbo, GPT-OSS-20B, Orpheus) behind an Express API. Provider-swappable between Groq and OpenAI via a single env var, with browser-speech fallback, rate-limit-aware sentence trimming and typed 429/502/503 errors.",
    image: "/voiceai.svg",
    tech: ["React", "Node.js", "Express.js", "Groq", "Whisper", "Orpheus TTS", "OpenAI"],
    live: "https://stt-llm-tts.onrender.com/",
    demo: "https://github.com/nakshjoshi/stt-llm-tts",
  },
  {
    title: "GoBrics Hackathon Platform",
    desc: "Team build serving 10K+ users across India and Russia (1K+ concurrent). Built upload APIs with S3 integration for PDF submissions and a Redis-queued email service that respects Resend rate limits; co-designed Route 53 geolocation routing to localise Russian data on Yandex Cloud while sharing one S3-SDK codebase with AWS.",
    image: "/gobrics.svg",
    tech: ["TypeScript", "Express.js", "Turborepo", "PostgreSQL", "Prisma", "Redis", "AWS", "Yandex Cloud"],
    live: "https://gobricshackathon.org/",
    demo: "https://github.com/GO-BRICS/Indo-Russia-Website",
  },
];

const Projects = () => {
  return (
    <section className="bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="projects">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <h2 className="text-2xl lg:text-3xl font-medium text-white flex items-center gap-2 whitespace-nowrap">
          <span className="text-primary">#</span>
          projects
        </h2>

        <div className="flex-1 h-[1px] bg-primary"></div>

        <a
          href="/projects"
          className="text-white text-xs lg:text-sm hover:text-primary transition whitespace-nowrap"
        >
          View all ~~&gt;
        </a>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}

      </div>

    </section>
  );
};

export default Projects;
