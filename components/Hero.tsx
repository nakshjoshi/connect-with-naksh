"use client"
import React from 'react'
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

function Hero() {


  function openResume(){
    window.open('https://drive.google.com/file/d/1fc0Pgk5j9JAXJytGCoTY_OcHzJ3gzs-y/view?usp=sharing', '_blank')
  }
  return (
    <>


    <div className="min-h-screen bg-background flex items-center px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira" id="home">

      <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 lg:gap-12">

        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-fira text-white leading-snug">
            <span className="block mb-2">Building intelligent systems with</span>
            <span className="text-primary block mb-2">Software Engineering</span>
            <span className="block">and</span>
            <span className="text-primary">Generative AI</span>
          </h1>

          <p className="text-gray text-sm lg:text-base max-w-md font-fira mx-auto lg:mx-0">
            Full Stack Developer & GenAI enthusiast turning ideas into smart digital solutions.

          </p>


          <motion.button 
            onClick={openResume} 
            className="border border-primary text-white px-4 py-2 w-fit hover:bg-primary hover:text-background transition font-fira mx-auto lg:mx-0 mt-4"
            whileTap="tap"
            whileHover="hover"
            variants={buttonVariants}
          >
            View Resume -{">"}
          </motion.button>
          
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 relative flex justify-center order-first lg:order-last">

          <img
            src="hero.png"
            alt="Hero"
            className="w-[280px] sm:w-[320px] lg:w-[400px] max-w-full"
          />

          {/* Badge */}
          <div className="absolute -bottom-4 lg:bottom-0 left-1/2 -translate-x-1/2 bg-background border border-gray px-2 lg:px-3 py-1 lg:py-2 flex items-center gap-2 text-gray text-xs lg:text-sm font-fira w-[280px] sm:w-auto">
            <span className="w-3 h-3 bg-[#FFBF00] block font-fira flex-shrink-0"></span>
            <span className="truncate">Currently working on Swiftly</span>
          </div>

          {/* Dots - Hidden on mobile */}
          <img
            src="design.svg"
            alt="dots"
            className="hidden lg:block absolute bottom-24 right-6 w-20 opacity-80"
          />

          {/* Logo - Hidden on mobile */}
          <img
            src="dots.svg"
            alt="logo"
            className="hidden lg:block absolute top-24 left-16 w-32"
          />



        </div>

      </div>

    </div>


    </>

     
   
  )
}

export default Hero