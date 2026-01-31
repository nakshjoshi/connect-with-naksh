const experiences = [
  {
    company: "ABC Tech Pvt Ltd",
    role: "Frontend Developer Intern",
    period: "Jun 2024 – Aug 2024",
    link: "https://abctech.com",
    description:
      "Worked on building responsive dashboards using React and Tailwind. Optimized UI performance and collaborated with backend team.",
  },

  {
    company: "XYZ Solutions",
    role: "Web Developer",
    period: "Jan 2025 – Present",
    link: "https://xyz.com",
    description:
      "Developing scalable web apps with Next.js. Implemented SEO, authentication and component libraries.",
  },

  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 – Present",
    link: "https://github.com/yourname",
    description:
      "Delivered multiple client projects including portfolios, landing pages and admin panels.",
  },
];

export default function Experience() {
  return (
    <section className="bg-background text-white px-6 md:px-24 py-24 font-fira">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl flex items-center gap-2 font-jet">
          <span className="text-primary">#</span>
          experience
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-6 max-w-6xl mx-auto">

        {experiences.map((exp, i) => (
          <div
            key={i}
            className="
              border border-gray
              p-5
              flex flex-col
              gap-4
              hover:border-primary
              transition
            "
          >

            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

              <h3 className="text-xl font-medium text-white">
                {exp.company}
              </h3>

              <span className="text-gray text-sm font-jet">
                {exp.period}
              </span>

            </div>

            {/* Role */}
            <div className="text-primary text-sm font-jet">

              {exp.role}

            </div>

            {/* Description */}
            <p className="text-gray text-sm leading-relaxed max-w-4xl">

              {exp.description}

            </p>

            {/* Link */}
            <div>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  border border-primary
                  px-4 py-1.5
                  text-white
                  font-jet
                  text-sm
                  hover:bg-primary/10
                  transition
                "
              >
                Website →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
