"use client";

import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

type SmallProject = {
  title: string;
  desc: string;
  tech: string[];
  link: string;
};

export default function SmallProjectCard({
  project,
}: {
  project: SmallProject;
}) {
  return (
    <div className="w-[330px] border border-gray bg-background">

      {/* Tech */}
      <div className="flex gap-2 px-3 py-2 text-sm text-gray border-b border-gray">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        <h3 className="text-xl font-medium">
          {project.title}
        </h3>

        <p className="text-gray text-sm">
          {project.desc}
        </p>

        <motion.a
          href={project.link}
          target="_blank"
          className="inline-block border border-primary px-4 py-1"
          whileTap="tap"
          whileHover="hover"
          variants={buttonVariants}
        >
          Live &lt;~&gt;
        </motion.a>

      </div>

    </div>
  );
}
