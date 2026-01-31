import React from "react";

const skillsData = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "Lua"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Flask"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Figma"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
];

const Skills = () => {
  return (
    <section className="relative w-full bg-background py-24 font-fira overflow-hidden">

      {/* Decorative dots */}
      <img
        src="/dotsfull.svg"
        className="absolute left-20 top-32 opacity-40"
        alt="dots"
      />

      <img
        src="/dots.svg"
        className="absolute right-20 bottom-24 opacity-40"
        alt="dots"
      />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">

          <h2 className="text-3xl font-medium text-white flex items-center gap-2">
            <span className="text-primary">#</span>
            skills
          </h2>

          <div className="flex-1 h-[1px] bg-primary"></div>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Logo / Decoration */}
          <div className="relative flex justify-center">

            {/* Big Box */}
            <div className="w-24 h-24 border border-gray absolute top-0 left-12"></div>

            {/* Small Box */}
            <div className="w-14 h-14 border border-gray absolute bottom-4 right-20"></div>

            {/* Logo */}
            <div className="w-28 h-28 flex items-center justify-center border border-primary">
              <span className="text-primary text-3xl font-bold">NJ</span>
            </div>

          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {skillsData.map((block, i) => (
              <div
                key={i}
                className="border border-gray bg-[#282C33] flex flex-col"
              >

                {/* Title */}
                <div className="px-4 py-2 border-b border-gray text-white font-semibold">
                  {block.title}
                </div>

                {/* List */}
                <div className="px-4 py-3 flex flex-wrap gap-2 text-gray text-sm">

                  {block.items.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;
