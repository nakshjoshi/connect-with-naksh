import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import BeyondCoding from "@/components/BeyondCoding";
import Box from "@/components/Box";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import SocialBar from "@/components/Socials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background ">
      {/* <SocialBar></SocialBar> */}
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      {/* <Quote></Quote> */}
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Achievements></Achievements>
      <BeyondCoding></BeyondCoding>
      <Contact></Contact>
      
      {/* <Footer></Footer> */}
    </main>
    );
}
