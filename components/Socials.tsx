import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialBar = () => {
  return (
    <div className="hidden lg:flex fixed left-4 top-20 bottom-0 w-8 bg-[#282C33] flex-col items-center justify-center gap-6 z-40">

      {/* Line Above */}
      <div className="h-32 lg:h-40 w-[1px] bg-gray"></div>

      {/* Icons */}
      <div className="flex flex-col items-center gap-4 text-gray text-lg">

        {/* GitHub */}
        <a
          href="https://github.com/nakshjoshi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nakshjoshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/nakshjoshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="LeetCode"
        >
          <SiLeetcode />
        </a>

        {/* Email */}
        <a
          href="mailto:connect.nakshjoshi@gmail.com"
          className="hover:text-primary transition"
          title="Email Me"
        >
          <FaEnvelope />
        </a>

        {/* Call */}
        <a
          href="tel:+917008350087"
          className="hover:text-primary transition"
          title="Call Me"
        >
          <FaPhoneAlt />
        </a>

      </div>

      {/* Line Below */}
      <div className="h-32 lg:h-40 w-[1px] bg-gray"></div>

    </div>
  );
};

export default SocialBar;
