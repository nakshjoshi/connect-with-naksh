"use client";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

type Project = {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  live: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {


  


  return (
    <div className="border border-gray bg-[#282C33] flex flex-col">

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 lg:h-52 object-cover border-b border-gray"
      />

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 lg:gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray border-b border-gray">
        {project.tech.map((t, i) => (
          <React.Fragment key={i}>
            <span className="whitespace-nowrap">{t}</span>
            {i < project.tech.length - 1 && <span className="text-gray">•</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 lg:gap-3 p-3 lg:p-4 flex-1">

        <h3 className="text-lg lg:text-xl text-white font-medium">
          {project.title}
        </h3>

        <p className="text-gray text-xs lg:text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2 lg:gap-3">

          <motion.a
            href={project.live}
            className="border border-primary px-3 py-1.5 lg:px-4 lg:py-2 text-white text-xs lg:text-sm hover:bg-primary transition text-center"
            whileTap="tap"
            whileHover="hover"
            variants={buttonVariants}
          >
            Live &lt;~&gt;
          </motion.a>

          {project.demo && (
            <motion.a
              href={project.demo}
              className="border border-gray px-3 py-1.5 lg:px-4 lg:py-2 text-gray text-xs lg:text-sm hover:text-white hover:border-white transition text-center flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              whileTap="tap"
              whileHover="hover"
              variants={buttonVariants}
            >
              <FaGithub className="text-base lg:text-lg" />
              <span>GitHub</span>
            </motion.a>
          )}

        </div>

      </div>

    </div>
  );
}
