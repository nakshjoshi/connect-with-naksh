import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";

const bigProjects = [
  {
    title: "ChertNodes",
    desc: "Minecraft servers hosting",
    tech: ["HTML", "SCSS", "Python", "Flask"],
    image: "/projects/p1.png",
    live: "#",
    demo: "#",
  },
];

const smallProjects = [
  {
    title: "Mini Tool",
    desc: "CLI based utility",
    tech: ["Node", "TS"],
    link: "#",
  },
];

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

        {/* Small Projects */}
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

        </section>

      </div>

    </main>
  );
}
