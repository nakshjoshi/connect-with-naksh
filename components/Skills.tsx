import React from "react";


const skillsData = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript","SQL", "Bash", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["pandas", "NumPy", "React.js", "Node.js", "Express.js", "Linux", "Kafka", "Apache Airflow", "MLflow"],
  },
  {
    title: "Tools & Platforms",
    items: ["AWS", "Digital Ocean", "Docker", "Git/GitHub", "Jupyter Notebook", "Tableau"],
  },
  {
    title: "Specializations",
    items: ["System Design", "AI Automation", "AI Workflows/Pipelines", "RESTful APIs", "LLM Integration"],
  },
];

const Skills = () => {
  return (
    <section className="relative bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira overflow-hidden" id="skills">

      {/* Decorative dots - hidden on mobile */}
      <img
        src="/dotsfull.svg"
        className="hidden lg:block absolute left-20 top-32 opacity-40"
        alt="dots"
      />

      <img
        src="/dots.svg"
        className="hidden lg:block absolute right-20 bottom-24 opacity-40"
        alt="dots"
      />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 lg:mb-16">

          <h2 className="text-2xl lg:text-3xl font-medium text-white flex items-center gap-2 whitespace-nowrap">
            <span className="text-primary">#</span>
            skills
          </h2>

          <div className="flex-1 h-[1px] bg-primary"></div>

        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Logo / Decoration - moved to bottom on mobile */}
          <div className="relative flex justify-center order-2 lg:order-1">

            {/* Big Box */}
            <div className="w-16 lg:w-24 h-16 lg:h-24 border border-gray absolute top-0 left-8 lg:left-12"></div>

            {/* Small Box */}
            <div className="w-10 lg:w-14 h-10 lg:h-14 border border-gray absolute bottom-2 lg:bottom-4 right-12 lg:right-20"></div>

            {/* Logo */}
            <div className="w-20 lg:w-28 h-20 lg:h-28 flex items-center justify-center border border-primary">
              <span className="text-primary text-xl lg:text-3xl font-bold">NJ</span>
            </div>

          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2 w-full">

            {skillsData.map((block, i) => (
              <div
                key={i}
                className="border border-gray bg-[#282C33] flex flex-col"
              >

                {/* Title */}
                <div className="px-3 lg:px-4 py-2 border-b border-gray text-white font-semibold text-sm lg:text-base">
                  {block.title}
                </div>

                {/* List */}
                <div className="px-3 lg:px-4 py-3 flex flex-wrap gap-1 lg:gap-2 text-gray text-xs lg:text-sm">

                  {block.items.map((item, idx) => (
                    <span key={idx} className="whitespace-nowrap">{item}</span>
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
