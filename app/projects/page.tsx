import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";

const bigProjects = [
  {
    title: "StrumHub",
    desc: "Interactive React + TypeScript learning platform integrating Google Gemini for AI-assisted guidance and Web Audio API for real-time pitch detection",
    image: "/st.png",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API", "HTML/CSS"],
    live: "#",
    demo: "#",
  },
  {
    title: "Bilingual AI Chatbot",
    desc: "Bilingual CRAG-based retrieval system using ChromaDB, SentenceTransformers, and Gemini 2.0 Flash, achieving 85%+ accurate query responses across 3300+ Indian schemes",
    image: "/bilai.png",
    tech: ["Python", "Streamlit", "ChromaDB", "Selenium", "Deep Translator"],
    live: "#",
    demo: "#",
  },
  {
    title: "GitLab Beacon",
    desc: "AI chatbot for natural-language access to GitLab's documentation, leveraging LangChain, Gemini 2.5 Flash, and FAISS with scalable RAG pipeline and MMR-based retrieval",
    image: "/gitab.png",
    tech: ["Python", "LangChain", "SentenceTransformers", "FAISS", "Git LFS", "Streamlit", "Gemini API"],
    live: "#",
    demo: "#",
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
