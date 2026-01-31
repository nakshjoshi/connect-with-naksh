import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialBar = () => {
  return (
    <div className="fixed left-4 top-0 h-screen w-8 bg-[#282C33] flex flex-col items-center py-6 gap-6 z-50">

      {/* Line */}
      <div className="h-40 w-[1px] bg-gray"></div>

      {/* Icons */}
      <div className="flex flex-col items-center gap-4 text-gray text-lg">

        {/* GitHub */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          title="LeetCode"
        >
          <SiLeetcode />
        </a>

        {/* Email */}
        <a
          href="mailto:yourmail@gmail.com"
          className="hover:text-primary transition"
          title="Email Me"
        >
          <FaEnvelope />
        </a>


        {/* Call */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="hover:text-primary transition"
          title="Call Me"
        >
          <FaPhoneAlt />
        </a>

        

      </div>

    </div>
  );
};

export default SocialBar;
