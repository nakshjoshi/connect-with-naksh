const achievements = [
  {
    title: "Top Performer – Internship Program",
    subtitle: "ABC Tech Pvt Ltd · 2024",
    description:
      "Recognized as top intern for delivering high-quality UI components and optimizing application performance.",
    image: "/achievements/internship.png",
  },

  {
    title: "Winner – Hackathon 2025",
    subtitle: "National Level Hackathon",
    description:
      "Led a team of 4 to build an AI-powered project and secured first position among 150+ teams.",
    image: "/achievements/hackathon.png",
  },

  {
    title: "IEEE Student Coordinator",
    subtitle: "RGIPT · 2024–2025",
    description:
      "Successfully organized technical events and workshops, impacting 500+ students.",
    image: "/achievements/ieee.png",
  },
];

export default function Achievements() {
  return (
    <section className="bg-background text-white px-6 md:px-24 py-24 font-fira">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl flex items-center gap-2 font-jet">
          <span className="text-primary">#</span>
          achievements
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Achievement Cards */}
      <div className="space-y-8 max-w-6xl mx-auto">

        {achievements.map((item, i) => (
          <div
            key={i}
            className="
              border border-gray
              p-6
              flex flex-col md:flex-row
              gap-6
              items-start
              hover:border-primary
              transition
            "
          >

            {/* Image Frame */}
            <div
              className="
                border border-primary
                p-2
                w-full md:w-[180px]
                flex-shrink-0
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[140px]
                  object-cover
                "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">

              {/* Title */}
              <h3 className="text-xl font-medium text-primary">

                {item.title}

              </h3>

              {/* Subtitle */}
              <p className="text-gray text-sm font-jet">

                {item.subtitle}

              </p>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed max-w-4xl">

                {item.description}

              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
