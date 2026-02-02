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
          Hello!, I’m Nakshatra Joshi, a software developer focused on building intelligent, scalable, and user-centric digital systems. My work spans full-stack development, backend engineering, and generative AI, with a strong emphasis on performance, reliability, and real-world usability.  
          </p>
          <p>
          Currently pursuing a B.Tech in Computer Science & Design Engineering at RGIPT, I work on AI-driven applications, automation pipelines, and modern web platforms. I enjoy solving complex problems through clean code, efficient architectures, and continuous learning.
          </p>

          

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

