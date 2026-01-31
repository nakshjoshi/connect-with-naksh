import React from 'react'

function AboutMe() {
  return (
    <section className="min-h-screen bg-background text-white px-6 md:px-24 py-24 font-fira">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <h2 className="text-3xl flex items-center gap-2 font-jet">
          <span className="text-primary">#</span>
          about-me
        </h2>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="space-y-6 text-gray leading-relaxed">

          <p>
            Hello, I’m Nakshatra! I’m a self-taught front-end developer.
            I love building responsive websites and turning ideas into
            modern web experiences.
          </p>

          <p>
            I’m passionate about learning new technologies and
            improving my craft every day.
          </p>

          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              border border-primary
              px-4 py-2
              text-white
              font-jet
              hover:bg-primary/10
              transition
            "
          >
            Read more →
          </a>

        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          {/* Image */}
          <img
            src="/about.png"
            alt="About"
            className="w-[280px] md:w-[340px]"
          />

          {/* Dots */}
          <div className="absolute left-0 top-1/3 grid grid-cols-5 gap-2 opacity-70">

            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-gray rounded-full"
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMe

