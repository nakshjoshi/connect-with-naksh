import React from 'react'

function Hero() {
  return (
    <>


    <div className="min-h-screen bg-background flex items-center">

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Left */}
        <div className="w-1/2 flex flex-col gap-6">

          <h1 className="text-3xl font-fira text-white leading-snug">
            Elias is a{" "}
            <span className="text-primary">web designer</span>{" "}
            and{" "}
            <span className="text-primary">front-end developer</span>
          </h1>

          <p className="text-gray text-base max-w-md font-fira">
            He crafts responsive websites where technologies
            meet creativity
          </p>

          <button className="border border-primary text-white px-4 py-2 w-fit hover:bg-primary hover:text-white transition font-fira">
            Contact me!!
          </button>

        </div>

        {/* Right */}
        <div className="w-1/2 relative flex justify-center">

          <img
            src="hero.png"
            alt="Hero"
            className="w-[400px]"
          />

          {/* Badge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background border border-gray px-3 py-2 flex items-center gap-2 text-gray text-sm font-fira">

            <span className="w-3 h-3 bg-primary block font-fira"></span>
            Currently working on Portfolio

          </div>

          {/* Dots */}
            <img
              src="design.svg"
              alt="dots"
              className="absolute bottom-24 right-6 w-20 opacity-80"
            />

          
          {/* Logo */}
            <img
              src="dots.svg"
              alt="logo"
              className="absolute top-24 left-16 w-32 "
            />



        </div>

      </div>

    </div>


    </>

     
   
  )
}

export default Hero