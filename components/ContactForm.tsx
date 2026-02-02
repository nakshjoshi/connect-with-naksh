import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-background border border-gray p-4 lg:p-8 w-full font-fira">

      <form className="flex flex-col gap-3 lg:gap-4">

        {/* Row: Name + Email */}
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
          />

        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray resize-none focus:outline-none focus:border-primary text-sm lg:text-base min-h-[100px]"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="border border-primary text-white px-4 py-2 w-full sm:w-fit hover:bg-primary transition text-sm lg:text-base"
        >
          Send
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
