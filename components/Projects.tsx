import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "StrumHub",
    desc: "Interactive React + TypeScript learning platform integrating Google Gemini for AI-assisted guidance and Web Audio API for real-time pitch detection",
    image: "st.png",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API", "HTML/CSS"],
    live: "https://guitar-learning-app-beta.vercel.app/",
    demo: "https://github.com/nakshjoshi/guitar-learning-app-nj/tree/main",
  },
  {
    title: "Bilingual AI Chatbot",
    desc: "Bilingual CRAG-based retrieval system using ChromaDB, SentenceTransformers, and Gemini 2.0 Flash, achieving 85%+ accurate query responses across 3300+ Indian schemes",
    image: "/bilai.png",
    tech: ["Python", "Streamlit", "ChromaDB", "Selenium", "Deep Translator"],
    live: "https://gov-slm-rag-chatbot.streamlit.app/",
    demo: "https://github.com/nakshjoshi/MySchemeMultiLinguaBot",
  },
  {
    title: "GitLab Beacon",
    desc: "AI chatbot for natural-language access to GitLab's documentation, leveraging LangChain, Gemini 2.5 Flash, and FAISS with scalable RAG pipeline and MMR-based retrieval",
    image: "gitab.png",
    tech: ["Python", "LangChain", "SentenceTransformers", "FAISS", "Git LFS", "Streamlit", "Gemini API"],
    live: "https://git-lab-chatbot-naksh.streamlit.app/",
    demo: "https://github.com/nakshjoshi/git-lab-chatbot",
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
