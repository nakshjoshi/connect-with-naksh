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
            <span className="w-3 h-3 bg-amber-400 block font-fira flex-shrink-0 animate-pulse"></span>
            <span className="truncate">Currently working on Swiftly</span>
            <a 
              href="https://github.com/nakshjoshi/swiftly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 hover:text-primary transition-colors duration-200"
              title="View on GitHub"
            >
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12 0 17.31 3.435 21.795 8.205 23.385 8.805 23.49 9.03 23.13 9.03 22.815 9.03 22.53 9.015 21.585 9.015 20.445 5.67 21.135 4.965 18.795 4.965 18.795 4.425 17.475 3.63 17.115 3.63 17.115 2.535 16.395 3.717 16.41 3.717 16.41 4.935 16.665 5.565 18.435 5.565 18.435 6.615 20.745 8.295 20.235 9.045 19.89 9.15 19.095 9.48 18.57 9.84 18.315 7.17 18.045 4.38 16.935 4.38 12.045 4.38 10.665 4.845 9.525 5.595 8.625 5.475 8.37 4.965 7.17 5.625 5.385 5.625 5.385 6.615 5.055 8.955 6.435 11.985 6.435 15.015 6.435 17.355 5.055 18.345 5.385 18.345 5.385 18.375 5.385 19.005 7.17 18.885 8.37 18.75 8.625 19.5 9.525 19.965 10.665 19.965 12.045 19.965 16.935 17.175 18.045 14.505 18.315 14.865 18.57 15.195 19.095 15.3 19.89 16.605 20.235 17.685 20.745 18.675 18.435 19.305 16.665 20.025 16.41 21.405 16.395 20.31 17.115 19.515 17.475 18.975 18.795 18.975 18.795 18.27 21.135 14.985 20.445 14.985 21.585 14.97 22.53 14.97 22.815 14.97 23.13 15.195 23.49 15.795 23.385 20.565 21.795 24 17.31 24 12 24 5.37 18.63 0 12 0Z"/>
              </svg>
            </a>
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