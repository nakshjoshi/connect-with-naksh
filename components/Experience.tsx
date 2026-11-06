"use client"

import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

const experiences = [
  {
    company: "CargoFL (Innoctive Technologies Pvt. Ltd.)",
    role: "Software Engineer Intern",
    period: "May 2026 – Aug 2026",
    location: "Pune, Maharashtra · Hybrid",
    link: "https://drive.google.com/file/d/1vdzSuG4AO2s36NnUtCceoCsGe7ZIR24M/view?usp=sharing",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHLPpWK5ZRfIA/company-logo_200_200/B4EZWvKxORHcAM-/0/1742400591397/cargofl_logo?e=2147483647&v=beta&t=t4AT7EKbNuQ7p4cjGCVbzHlkjDvVxxYlMywOWcLe_ns",
    stack: ["Fastify", "React", "TypeScript", "PostgreSQL", "Drizzle", "Redis", "Cloudflare Workers/D1", "AWS", "GitHub Actions"],
    points: [
      "Re-platformed a chat-based freight-procurement agent out of a Fastify agent marketplace (per-agent tools isolated on Cloudflare Workers + D1) into a standalone Workers backend, then an independent Fastify + React service on PostgreSQL/Drizzle — implementing 10 tools covering the end-to-end RFQ lifecycle across 7 carriers.",
      "Built background workers with per-client configurable sweep intervals for stale-RFQ reminders and failed-job retries, plus write-only BYOK credentials encrypted at rest and masked in the UI.",
      "Validated with 5 MCP-driven Playwright E2E flows and 50 test RFQs; passed client UAT on 30 RFQs.",
      "Built the backend of an AI proof-of-delivery (POD) extraction platform on Fastify + PostgreSQL/Drizzle: file-type routing (image/PDF) into a Redis queue with a Postgres-backed job table, pulling documents from S3 on demand for an OCR + vision-LLM extraction service — 7,000+ PODs processed in production.",
      "Extended line-item-to-total reconciliation to every file-type path (~82% of production PODs auto-reconciled, the rest routed to manual review); implemented RBAC for 5 roles across single-tenant deployments for 3 clients with client-hosted databases for data residency.",
      "Shipped CSV bulk uploads, POD-to-shipment linking and URL-persisted AND/OR filters in React/TypeScript/shadcn; deployed via GitHub Actions to EC2.",
    ],
  },
  {
    company: "Prodigal AI",
    role: "AI Developer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Delhi · Remote",
    link: "https://drive.google.com/file/d/1tpTMo591Xb3NxkapR5-QZqC8_xB__pVR/view?usp=drive_link",
    logo: "pai.jpg",
    stack: ["FastAPI", "Python", "Airflow", "MLflow", "DagsHub", "Docker Compose", "AWS EC2"],
    points: [
      "Built FastAPI backends for RAG-based AI content-generation pipelines, orchestrated as Airflow DAGs with human-in-the-loop steps that paused for reviewer approval or clarifying input.",
      "Persisted conversation history in a separate store so paused runs could resume without losing context.",
      "Used the MLflow Model Registry (DagsHub) to load versioned models at runtime, enabling model swaps without redeploys; containerised services with Docker Compose and deployed to AWS EC2.",
    ],
  },

  {
    company: "Tata Steel Ltd.",
    role: "Vocational Trainee & Intern, Data Visualisation Dept.",
    period: "Jul 2024",
    location: "",
    link: "https://drive.google.com/file/d/1VU_OwtHq5RCFRZcAqI9JSN-aErZDwOUS/view?usp=drive_link",
    logo: "tsl.png",
    stack: ["Tableau", "SQL", "SAP-BODS", "GCP"],
    points: [
      "Built and deployed 3+ interactive Tableau dashboards for sales data analysis, and studied the GCP and SAP-BODS pipelines feeding them — a path to ~25% faster reporting turnaround.",
    ],
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

              {/* Right: Period + Location */}
              <div className="flex flex-col gap-0.5 text-gray text-xs lg:text-sm font-jet sm:text-right">
                <span>{exp.period}</span>
                {exp.location && <span className="text-gray/70">{exp.location}</span>}
              </div>

            </div>

            {/* Role */}
            <div className="text-primary text-xs lg:text-sm font-jet">
              {exp.role}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-1 lg:gap-2 text-[11px] lg:text-xs font-jet text-gray">
              {exp.stack.map((t) => (
                <span key={t} className="border border-gray/60 px-1.5 py-0.5">
                  {t}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="flex flex-col gap-2 text-gray text-xs lg:text-sm leading-relaxed">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary font-jet flex-shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Link */}
            {exp.link && exp.link !== "#" && (
              <div>
                <motion.a
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
                  whileTap="tap"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  View Letter →
                </motion.a>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}
