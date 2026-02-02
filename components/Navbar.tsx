"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'beyond-coding', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-background py-4 lg:py-6 border-b border-gray/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-6 h-6"
          />
          <span className="text-white font-fira font-bold text-sm lg:text-base">
            {"Nakshatra Joshi"}
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center z-200 bg-background"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-5 h-0.5 bg-gray"></span>
          <span className="block w-4 h-0.5 bg-gray"></span>
          <span className="block w-5 h-0.5 bg-gray"></span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 font-fira text-base">

          {/* Home */}
          <a 
            href="/#home" 
            className={`flex items-center gap-1 transition ${
              activeSection === 'home' 
                ? 'text-white' 
                : 'text-gray hover:text-white'
            }`}
            onClick={() => handleNavClick('home')}
          >
            <span className="text-primary">#</span>home
          </a>

          {/* About Me */}
          <a
            href="/#about"
            className={`flex items-center gap-1 transition ${
              activeSection === 'about' 
                ? 'text-white' 
                : 'text-gray hover:text-white'
            }`}
            onClick={() => handleNavClick('about')}
          >
            <span className="text-primary">#</span>about-me
          </a>

          {/* Projects */}
          <a
            href="/#projects"
            className={`flex items-center gap-1 transition ${
              activeSection === 'projects' 
                ? 'text-white' 
                : 'text-gray hover:text-white'
            }`}
            onClick={() => handleNavClick('projects')}
          >
            <span className="text-primary">#</span>projects
          </a>

          {/* Skills */}
          <a
            href="/#skills"
            className={`flex items-center gap-1 transition ${
              activeSection === 'skills' 
                ? 'text-white' 
                : 'text-gray hover:text-white'
            }`}
            onClick={() => handleNavClick('skills')}
          >
            <span className="text-primary">#</span>skills
          </a>

          {/* Resume Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
              className={`flex items-center gap-1 transition ${
                activeSection === 'experience' || activeSection === 'education' || activeSection === 'beyond-coding'
                  ? 'text-white' 
                  : 'text-gray hover:text-white'
              }`}
            >
              <span className="text-primary">#</span>resume
              {/* Arrow */}
              <div className={`flex flex-col gap-[2px] transition-transform duration-200 ${isResumeDropdownOpen ? 'rotate-90' : ''}`}>
                <span className="block w-2 h-[2px] bg-gray rotate-45"></span>
                <span className="block w-2 h-[2px] bg-gray -rotate-45"></span>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isResumeDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-background border border-gray shadow-lg z-10 min-w-[160px]">
                <a
                  href="/#experience"
                  className={`block px-4 py-2 transition hover:bg-gray/10 ${
                    activeSection === 'experience' 
                      ? 'text-white' 
                      : 'text-gray hover:text-white'
                  }`}
                  onClick={() => handleNavClick('experience')}
                >
                  Experience
                </a>
                <a
                  href="/#education"
                  className={`block px-4 py-2 transition hover:bg-gray/10 ${
                    activeSection === 'education' 
                      ? 'text-white' 
                      : 'text-gray hover:text-white'
                  }`}
                  onClick={() => handleNavClick('education')}
                >
                  Education
                </a>
                <a
                  href="/#beyond-coding"
                  className={`block px-4 py-2 transition hover:bg-gray/10 ${
                    activeSection === 'beyond-coding' 
                      ? 'text-white' 
                      : 'text-gray hover:text-white'
                  }`}
                  onClick={() => handleNavClick('beyond-coding')}
                >
                  Beyond Coding
                </a>
                <a
                  href="https://drive.google.com/file/d/15TT9qIqua6uEcixmopy5F5E1GQiTpVlz/view?usp=drive_link"
                  target="_blank"
                  className="block px-4 py-2 text-gray hover:text-white hover:bg-gray/10 transition"
                >
                  Download CV
                </a>
              </div>
            )}
          </div>

          {/* Contact Me */}
          <a
            href="/#contact"
            className={`flex items-center gap-1 transition ${
              activeSection === 'contact' 
                ? 'text-white' 
                : 'text-gray hover:text-white'
            }`}
            onClick={() => handleNavClick('contact')}
          >
            <span className="text-primary">#</span>contact-me
          </a>
            
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-background z-50">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray hover:text-white transition p-2 z-10"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="bg-background flex flex-col items-start gap-8 p-6 pt-16 font-fira text-2xl">
              <a 
                href="/#home" 
                className={`flex items-center gap-1 transition ${
                  activeSection === 'home' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('home')}
              >
                <span className="text-primary">#</span>home
              </a>
              <a
                href="/#about"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'about' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('about')}
              >
                <span className="text-primary">#</span>about-me
              </a>
              <a
                href="/#projects"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'projects' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('projects')}
              >
                <span className="text-primary">#</span>projects
              </a>
              <a
                href="/#skills"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'skills' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('skills')}
              >
                <span className="text-primary">#</span>skills
              </a>
              <a
                href="/#experience"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'experience' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('experience')}
              >
                <span className="text-primary">#</span>experience
              </a>
              <a
                href="/#education"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'education' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('education')}
              >
                <span className="text-primary">#</span>education
              </a>
              <a
                href="/#beyond-coding"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'beyond-coding' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('beyond-coding')}
              >
                <span className="text-primary">#</span>beyond-coding
              </a>
              <a
                href="/#contact"
                className={`flex items-center gap-1 transition ${
                  activeSection === 'contact' 
                    ? 'text-white' 
                    : 'text-gray hover:text-white'
                }`}
                onClick={() => handleNavClick('contact')}
              >
                <span className="text-primary">#</span>contact-me
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex gap-6 mt-8 text-2xl">
                <a 
                  href="https://github.com/nakshjoshi"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray hover:text-primary transition"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nakshjoshi/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray hover:text-primary transition"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://leetcode.com/u/nakshjoshi/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray hover:text-primary transition"
                  title="LeetCode"
                >
                  <SiLeetcode />
                </a>
                <a 
                  href="mailto:connect.nakshjoshi@gmail.com"
                  className="text-gray hover:text-primary transition"
                  title="Email Me"
                >
                  <FaEnvelope />
                </a>
                <a 
                  href="tel:+917008350087"
                  className="text-gray hover:text-primary transition"
                  title="Call Me"
                >
                  <FaPhoneAlt />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
