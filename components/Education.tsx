const educationData = [
  {
    name: "Rajiv Gandhi Institute of Petroleum Technology",
    period: "Aug 2023 – Present",
    degree: "B.Tech",
    branch: "Computer Science and Design Engineering",
    location: "Jais, Uttar Pradesh",
    grade: "7.4 CGPA",
  },

  {
    name: "Doon International School",
    period: "April 2022 – May 2023",
    degree: "High Secondary School",
    branch: "CBSE",
    location: "Bhubaneswar, Odisha",
    grade: "90.8%",
  },

  {
    name: "Tata D.A.V. Public School",
    period: "April 2020 – May 2021",
    degree: "Secondary School",
    branch: "CBSE",
    location: "Joda, Odisha",
    grade: "95.4%",
  },
];

export default function Education() {
  return (
    <section className="bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="education">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <h2 className="text-2xl lg:text-3xl flex items-center gap-2 font-jet whitespace-nowrap">
          <span className="text-primary">#</span>
          education
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-4 lg:space-y-6 max-w-6xl mx-auto">

        {educationData.map((edu, i) => (
          <div
            key={i}
            className="
              border border-gray
              p-4 lg:p-5
              flex flex-col
              gap-2 lg:gap-3
              hover:border-primary
              transition
            "
          >

            {/* Top Row */}
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-2">

              <h3 className="text-lg lg:text-xl font-medium text-white leading-tight">
                {edu.name}
              </h3>

              <span className="text-gray text-xs lg:text-sm font-jet">
                {edu.period}
              </span>

            </div>

            {/* Degree + Branch */}
            <div className="text-primary text-xs lg:text-sm font-jet">
              {edu.degree} • {edu.branch}
            </div>

            {/* Location + Grade */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2 text-gray text-xs lg:text-sm">
              <span>{edu.location}</span>
              <span className="font-semibold">{edu.grade}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
