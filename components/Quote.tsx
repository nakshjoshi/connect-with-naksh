import React from "react";

const Quote = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-background">
      
      {/* Main Box */}
      <div className="relative max-w-3xl w-full border border-gray bg-[#282C33] px-8 py-8 font-fira text-white">

        {/* Left Quote Mark */}
        <div className="absolute -top-4 left-4 bg-[#282C33] px-2">
          <span className="text-3xl text-gray">“</span>
        </div>

        {/* Quote Text */}
        <p className="text-xl font-medium leading-relaxed">
          With great power comes great electricity bill
        </p>

        {/* Author Box */}
        <div className="absolute right-0 -bottom-14 border border-gray bg-[#282C33] px-6 py-3">

          {/* Right Quote Mark */}
          <div className="absolute -top-4 right-4 bg-[#282C33] px-2">
            <span className="text-3xl text-gray">”</span>
          </div>

          <span className="text-lg font-fira">
            – Dr. Who
          </span>

        </div>

      </div>

    </section>
  );
};

export default Quote;
