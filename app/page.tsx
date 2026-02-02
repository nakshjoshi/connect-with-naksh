"use client"

import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import BeyondCoding from "@/components/BeyondCoding";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Progress from "@/components/Progress";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import SocialBar from "@/components/Socials";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main 
    className="bg-background "
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        ease: "easeOut",
        duration: 0.7 }}
    >
      
      <Progress/>
      {/* <SocialBar></SocialBar> */}
      {/* <Navbar></Navbar> */}

      <Hero></Hero>
      {/* <Quote></Quote> */}
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      {/* <Achievements></Achievements> */}
      <BeyondCoding></BeyondCoding>
      <Contact></Contact>
      
      {/* <Footer></Footer> */}
    </motion.main>
    );
}
