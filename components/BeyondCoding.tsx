const beyondCoding = [
  {
    title: "Training and Placement Student Coordinator",
    subtitle: "Career Development Cell · TnP RGIPT",
    description:
      "Part of the Career Development Cell under Training and Placement department at RGIPT, coordinating placement activities and internship opportunities for students. Responsible for facilitating industry connections, managing recruitment drives, organizing pre-placement talks, and supporting students throughout the placement process. Collaborated with corporate partners and maintained placement databases to ensure successful career outcomes.",
  },

  {
    title: "Technical Event Management & Leadership",
    subtitle: "IEEE RGIPT SB & E-Cell RGIPT · Feb 2024–Present",
    description:
      "Served as Technical Executive managing databases using Google Forms and Excel, designing promotional materials with Canva and Adobe Express. Core member of E-Cell RGIPT website development committee using HTML, CSS, and JavaScript. Live-streamed chess tournaments on YouTube with professional video layouts and managed technical operations for all E-Cell events ensuring smooth execution.",
  },

  {
    title: "Event Coordination & Hospitality",
    subtitle: "URJOTSAV & ENERGIA Fest · RGIPT",
    description:
      "Guest Outreach and Guest Hospitality Executive at URJOTSAV Annual Technical Fest, managing guest relations and coordination activities. Documentation Executive at ENERGIA Annual Sports Fest, responsible for event documentation, record-keeping, and administrative support for sports competitions.",
  },

  {
    title: "Competitive Sports & Team Representation",
    subtitle: "Badminton Team · RGIPT & Tata D.A.V. Public School",
    description:
      "Participated at Spardha IIT BHU Annual Sports Fest as part of RGIPT institute badminton team, reaching pre-quarters. Represented Tata D.A.V. Public School in DAV Zonal Sports under DAV National Sports in 2018 and 2019, achieving quarter-finals individually and pre-quarter finals in team events, demonstrating competitive excellence and teamwork.",
  },

  {
    title: "Environmental Leadership & Project Management",
    subtitle: "The Green School Project · Tata Steel & TERI · 2017 - 2018",
    description:
      "Led school team in 'The Green School Project' organized by Tata Steel and TERI, winning 'The Green Trophy' in 2018-19. Developed proficiency in MS PowerPoint, MS Word, Filmora, and Kine Master while gaining expertise in team collaboration, event planning and management, leadership, and quick problem-solving under pressure.",
  },
];

export default function BeyondCoding() {
  return (
    <section className="bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="beyond-coding">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <h2 className="text-2xl lg:text-3xl flex items-center gap-2 font-jet whitespace-nowrap">
          <span className="text-primary">#</span>
          beyond-coding
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-4 lg:space-y-6 max-w-6xl mx-auto">

        {beyondCoding.map((item, i) => (
          <div
            key={i}
            className="
              relative
              border border-gray
              p-4 lg:p-6
              pl-6 lg:pl-10
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
                w-[3px] lg:w-[4px]
                bg-primary
              "
            />

            {/* Content */}
            <div className="flex flex-col gap-2">

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-medium text-primary leading-tight">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray text-xs lg:text-sm font-jet">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-white text-xs lg:text-sm leading-relaxed">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
