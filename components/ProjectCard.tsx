import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  live: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-[330px] border border-gray bg-background">

      {/* Image */}
      <div className="relative h-[200px] border-b border-gray">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 px-3 py-2 text-sm text-gray">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      {/* Content */}
      <div className="border-t border-gray p-4 space-y-3">

        <h3 className="text-xl font-medium">
          {project.title}
        </h3>

        <p className="text-gray text-sm">
          {project.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">

          <a
            href={project.live}
            target="_blank"
            className="border border-primary px-4 py-1"
          >
            Live &lt;~&gt;
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="border border-gray px-4 py-1 text-gray"
            >
              Demo &gt;
            </a>
          )}

        </div>

      </div>

    </div>
  );
}
