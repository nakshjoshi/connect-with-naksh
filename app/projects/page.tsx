import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";

const bigProjects = [
  {
    title: "Brain Cache",
    desc: "Full-stack React + TypeScript SPA with intelligent caching and data pre-fetching, featuring modular architecture, JWT authentication, and OpenAI API integration for enhanced user experience",
    image: "/bc.png",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "OpenAI API", "Render"],
    live: "https://braincache.onrender.com/",
    demo: "https://github.com/nakshjoshi/BrainCache",
  },
  {
    title: "StrumHub",
    desc: "Interactive React + TypeScript learning platform integrating Google Gemini for AI-assisted guidance and Web Audio API for real-time pitch detection",
    image: "/st.png",
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
    image: "/gitab.png",
    tech: ["Python", "LangChain", "SentenceTransformers", "FAISS", "Git LFS", "Streamlit", "Gemini API"],
    live: "https://git-lab-chatbot-naksh.streamlit.app/",
    demo: "https://github.com/nakshjoshi/git-lab-chatbot",
  },
  {
    title: "Personal Portfolio",
    desc: "Modern, responsive portfolio website built with Next.js and TypeScript, featuring dark theme, smooth animations, dynamic navigation, and optimized performance with Tailwind CSS styling",
    image: "/pf.png",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    live: "https://nakshjoshi.in",
    demo: "https://github.com/nakshjoshi/connect-with-naksh",
  },
  {
    title: "Generic Text-to-Speech (TTS) System",
    desc: "Engineered a web-based text-to-speech system utilizing real-time audio synthesis with Coqui TTS, enabling character-level processing and reducing voice response latency for enhanced user experience",
    image: "/tts.png",
    tech: ["Python", "Coqui TTS", "Flask", "HTML", "CSS", "JavaScript", "JSON", "Audio APIs"],
    live: "#",
    demo: "https://github.com/nakshjoshi/RESOxAI_Task-1",
  },
  {
    title: "Insurance Cost Predictor",
    desc: "Processed 1000+ insurance records and trained regression models with 97% prediction accuracy, deploying them in a Flask web application featuring real-time quote estimation and interactive UI",
    image: "/icp.png",
    tech: ["Python", "NumPy", "pandas", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript"],
    live: "https://nakshjoshi-rgipt.koyeb.app/",
    demo: "https://github.com/nakshjoshi/flaskMLapp",
  },
];

// const smallProjects = [
//   {
//     title: "Mini Tool",
//     desc: "CLI based utility",
//     tech: ["Node", "TS"],
//     link: "#",
//   },
// ];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">

      <div className="container mx-auto px-6 py-24 space-y-32">

        {/* Title */}
        <SectionTitle
          title="projects"
          subtitle="List of my projects"
        />

        {/* Big Projects */}
        <section className="space-y-8">

          <SectionTitle title="complete-apps" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bigProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>

        </section>

        {/* Small Projects
        <section className="space-y-8">

          <SectionTitle title="small-projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {smallProjects.map((p, i) => (
              <SmallProjectCard
                key={i}
                project={p}
              />
            ))}

          </div>

        </section> */}

      </div>

    </main>
  );
}
