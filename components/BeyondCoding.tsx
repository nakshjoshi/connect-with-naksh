const beyondCoding = [
  {
    title: "Technical Event Management",
    subtitle: "IEEE RGIPT · 2023–2025",
    description:
      "Organized and coordinated multiple national-level workshops, hackathons, and coding events with participation from 500+ students.",
  },

  {
    title: "Public Speaking & Anchoring",
    subtitle: "College Fests & Seminars",
    description:
      "Anchored technical and cultural programs, hosted guest lectures, and conducted orientation sessions for juniors.",
  },

  {
    title: "Content & Design",
    subtitle: "Posters · Social Media · Branding",
    description:
      "Designed promotional posters, banners, and social media creatives using Figma and Canva for college communities.",
  },

  {
    title: "Community Leadership",
    subtitle: "Student Coordinator · CDC & IEEE",
    description:
      "Led student teams, handled industry communication, and managed placement and training activities.",
  },
];

export default function BeyondCoding() {
  return (
    <section className="bg-background text-white px-6 md:px-24 py-24 font-fira">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl flex items-center gap-2 font-jet">
          <span className="text-primary">#</span>
          beyond-coding
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-6 max-w-6xl mx-auto">

        {beyondCoding.map((item, i) => (
          <div
            key={i}
            className="
              relative
              border border-gray
              p-6
              pl-10
              hover:border-primary
              transition
            "
          >

            {/* Left Accent Bar */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                bg-primary
              "
            />

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
