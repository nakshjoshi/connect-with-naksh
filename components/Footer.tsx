import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-gray font-fira mt-16 lg:mt-32">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-12 flex flex-col gap-6 lg:gap-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-10">

          {/* Left Info */}
          <div className="flex flex-col gap-2 lg:gap-3">

            {/* Logo + Name */}
            <div className="flex items-center gap-2">

              <div className="w-4 h-4 border border-white flex items-center justify-center">
                <img src="/logo.svg" alt="Logo" />
              </div>

              <span className="text-white font-semibold text-sm lg:text-base">
                Nakshatra Joshi
              </span>

            </div>

            {/* Email */}
            <p className="text-gray text-xs lg:text-sm break-all">
              nakshatrajoshi@email.com
            </p>

            {/* Role */}
            <p className="text-white text-xs lg:text-sm">
              Web Designer & Front-end Developer
            </p>

          </div>

          {/* Right Socials */}
          <div className="flex flex-col gap-2 lg:gap-3">

            <h3 className="text-white text-lg lg:text-xl font-medium">
              Social Profiles
            </h3>

            <div className="flex items-center gap-3 lg:gap-4 text-gray text-base lg:text-lg flex-wrap">

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-primary transition"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-primary transition"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="hover:text-primary transition"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>

              {/* Email */}
              <a
                href="mailto:nakshatrajoshi@email.com"
                className="hover:text-primary transition"
              >
                <FaEnvelope />
              </a>

              {/* Call */}
              <a
                href="tel:+919XXXXXXXXX"
                className="hover:text-primary transition"
              >
                <FaPhoneAlt />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray text-xs lg:text-sm">
          © {new Date().getFullYear()} — Made by Nakshatra Joshi
        </div>

      </div>

    </footer>
  );
};

export default Footer;
