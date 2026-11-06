"use client"

import React from 'react';
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

function AboutMe() {
  return (
    <section className="min-h-screen bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="about">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <h2 className="text-2xl lg:text-3xl flex items-center gap-2 font-jet whitespace-nowrap">
          <span className="text-primary">#</span>
          about-me
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">

        {/* Left */}
        <div className="space-y-4 lg:space-y-6 text-gray leading-relaxed text-sm lg:text-base order-2 lg:order-1">

          <p>
            Hey — I’m <span className="text-white">Nakshatra Joshi</span>, a software engineer
            who lives mostly in the backend: typed APIs, queues, workers, migrations, and the
            unglamorous reliability work that keeps them up. Lately that means Fastify and
            Express services on PostgreSQL (Drizzle/Prisma), Redis-backed job pipelines,
            Docker, GitHub Actions and AWS.
          </p>
          <p>
            I also build with LLMs where they actually pay off — OCR + vision extraction over
            real documents, RAG with measured accuracy instead of vibes, tool-calling agents
            and MCP-driven test flows. At <span className="text-white">CargoFL</span> I
            re-platformed a freight-procurement agent onto its own service and shipped a POD
            extraction backend that has processed 7,000+ documents in production.
          </p>
          <p>
            Currently in my final year of a B.Tech in Computer Science &amp; Design Engineering
            at RGIPT. I care about clear data models, boring deploys, and code the next person
            can read.
          </p>

          {/* Stack strip */}
          <div className="flex flex-wrap gap-2 font-jet text-xs lg:text-sm pt-2">
            {["TypeScript", "Python", "Fastify", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS"].map((t) => (
              <span
                key={t}
                className="border border-gray px-2 py-1 hover:border-primary hover:text-white transition"
              >
                {t}
              </span>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="
              inline-flex items-center justify-center
              border border-primary
              px-3 py-1.5 lg:px-4 lg:py-2
              text-white
              font-jet
              text-sm lg:text-base
              hover:bg-primary/10
              transition
            "
            whileTap="tap"
            whileHover="hover"
            variants={buttonVariants}
          >
            Connect with Me! -{">"}
          </motion.a>

        </div>

        {/* Right */}
        <div className="relative flex justify-center order-1 lg:order-2">

          {/* About Container - responsive sizing */}
          <div className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[430px] lg:w-[400px] lg:h-[500px] flex items-center justify-center">

            {/* About Image */}
            <img
              src="about.png"
              alt="About"
              className="w-[220px] sm:w-[260px] lg:w-[280px] xl:w-[340px] relative z-10"
            />

            {/* Dots - positioned relative to about container - hidden on mobile */}
            <div className="hidden sm:block absolute left-4 top-1/3 grid grid-cols-5 gap-1 lg:gap-2 opacity-70 z-5">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 bg-gray rounded-full"
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMe

