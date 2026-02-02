const experiences = [
  {
    company: "Prodigal AI",
    role: "AI Developer Intern",
    period: "Jun 2025 – Aug 2025",
    link: "https://drive.google.com/file/d/1tpTMo591Xb3NxkapR5-QZqC8_xB__pVR/view?usp=drive_link",
    logo: "pai.jpg", // Add company logo
    description:
      "Engineered scalable GenAI/ML backend architectures with human-in-the-loop workflows and deployed 3+ production-grade pipelines using Docker, FastAPI, and AWS, improving system throughput by 10%. Implemented MLOps/AIOps lifecycle automation with Airflow and MLflow/DagsHub, and built real-time, event-driven data streaming using Apache Kafka, reducing development iteration time by 15%. Collaborated in an Agile/Scrum environment to define requirements, manage sprint tasks, and deliver features with strong attention to detail.",
  },

  {
    company: "Tata Steel Ltd.",
    role: "Vocational Trainee and Intern, Data Visualisation Dept.",
    period: "Jul 2024 – Jul 2024",
    link: "https://drive.google.com/file/d/1VU_OwtHq5RCFRZcAqI9JSN-aErZDwOUS/view?usp=drive_link",
    logo: "tsl.png", // Add company logo
    description:
      "Developed and deployed 3+ interactive Tableau dashboards, studied Google Cloud Platform and SAP-BODS pipelines which can lead to 25% faster reporting turnaround for sales data analysis across 1+ departments.",
  },
];

export default function Experience() {
  return (
    <section className="bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="experience">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <h2 className="text-2xl lg:text-3xl flex items-center gap-2 font-jet whitespace-nowrap">
          <span className="text-primary">#</span>
          experience
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Cards */}
      <div className="space-y-4 lg:space-y-6 max-w-6xl mx-auto">

        {experiences.map((exp, i) => (
          <div
            key={i}
            className="
              border border-gray
              p-4 lg:p-5
              flex flex-col
              gap-3 lg:gap-4
              hover:border-primary
              transition
            "
          >

            {/* Top Row with Logo */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:items-center lg:justify-between">

              {/* Left: Logo + Company Info */}
              <div className="flex items-center gap-3">
                
                {/* Company Logo */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <h3 className="text-lg lg:text-xl font-medium text-white">
                    {exp.company}
                  </h3>
                </div>
              
              </div>

              {/* Right: Period */}
              <span className="text-gray text-xs lg:text-sm font-jet sm:text-right">
                {exp.period}
              </span>

            </div>

            {/* Role */}
            <div className="text-primary text-xs lg:text-sm font-jet">
              {exp.role}
            </div>

            {/* Description */}
            <p className="text-gray text-xs lg:text-sm leading-relaxed">
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
                  px-3 py-1 lg:px-4 lg:py-1.5
                  text-white
                  font-jet
                  text-xs lg:text-sm
                  hover:bg-primary/10
                  transition
                "
              >
                View Letter →
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
