import React from "react";

const projects = [
  {
    title: "ChertNodes",
    desc: "Minecraft servers hosting",
    image: "/banner1.png",
    tech: ["HTML", "SCSS", "Python", "Flask"],
    live: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio site",
    image: "/banner2.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    live: "#",
    demo: "#",
  },
  {
    title: "API Dashboard",
    desc: "Analytics dashboard",
    image: "/banner3.png",
    tech: ["React", "Node", "MongoDB"],
    live: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-background py-24 font-fira">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-4 mb-12">

        <h2 className="text-3xl font-medium text-white flex items-center gap-2">
          <span className="text-primary">#</span>
          projects
        </h2>

        <div className="flex-1 h-[1px] bg-primary"></div>

        <a
          href="#"
          className="text-white text-sm hover:text-primary transition"
        >
          View all ~~&gt;
        </a>

      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-gray bg-[#282C33] flex flex-col"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover border-b border-gray"
            />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 px-4 py-2 text-sm text-gray border-b border-gray">
              {project.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 flex-1">

              <h3 className="text-xl text-white font-medium">
                {project.title}
              </h3>

              <p className="text-gray text-sm">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">

                <a
                  href={project.live}
                  className="border border-primary px-4 py-2 text-white text-sm hover:bg-primary transition"
                >
                  Live &lt;~&gt;
                </a>

                <a
                  href={project.demo}
                  className="border border-gray px-4 py-2 text-gray text-sm hover:text-white hover:border-white transition"
                >
                  Demo &gt;|
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;
