const educationData = [
  {
    name: "Rajiv Gandhi Institute of Petroleum Technology",
    period: "2022 – 2026",
    degree: "B.Tech",
    branch: "Computer Science & Engineering",
    location: "Amethi, Uttar Pradesh, India",
    grade: "CGPA: 8.4",
  },

  {
    name: "Delhi Public School",
    period: "2020 – 2022",
    degree: "Senior Secondary (12th)",
    branch: "Science (PCM)",
    location: "New Delhi, India",
    grade: "92%",
  },

  {
    name: "St. Mary's School",
    period: "2018 – 2020",
    degree: "Secondary (10th)",
    branch: "General Studies",
    location: "Lucknow, India",
    grade: "90%",
  },
];

export default function Education() {
  return (
    <section className="bg-background text-white px-6 md:px-24 py-24 font-fira">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl flex items-center gap-2 font-jet">
          <span className="text-primary">#</span>
          education
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-6 max-w-6xl mx-auto">

        {educationData.map((edu, i) => (
          <div
            key={i}
            className="
              border border-gray
              p-5
              flex flex-col
              gap-3
              hover:border-primary
              transition
            "
          >

            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

              <h3 className="text-xl font-medium text-white">
                {edu.name}
              </h3>

              <span className="text-gray text-sm font-jet">
                {edu.period}
              </span>

            </div>

            {/* Degree + Branch */}
            <div className="text-primary text-sm font-jet">

              {edu.degree} • {edu.branch}

            </div>

            {/* Location + Grade */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray text-sm">

              <span>{edu.location}</span>

              <span>{edu.grade}</span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
