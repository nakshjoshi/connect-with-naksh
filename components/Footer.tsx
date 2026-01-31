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
    <footer className="w-full bg-background border-t border-gray font-fira mt-32">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Info */}
          <div className="flex flex-col gap-3">

            {/* Logo + Name */}
            <div className="flex items-center gap-2">

              <div className="w-4 h-4 border border-white flex items-center justify-center">
                <img src="/logo.svg"/>
              </div>

              <span className="text-white font-semibold">
                Nakshatra Joshi
              </span>

            </div>

            {/* Email */}
            <p className="text-gray text-sm">
              nakshatrajoshi@email.com
            </p>

            {/* Role */}
            <p className="text-white text-sm">
              Web Designer & Front-end Developer
            </p>

          </div>

          {/* Right Socials */}
          <div className="flex flex-col gap-3">

            <h3 className="text-white text-xl font-medium">
              Media
            </h3>

            <div className="flex items-center gap-4 text-gray text-lg">

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaLinkedin />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="hover:text-primary transition"
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
        <div className="text-center text-gray text-sm">

          © {new Date().getFullYear()} — Made by Nakshatra Joshi

        </div>

      </div>

    </footer>
  );
};

export default Footer;
