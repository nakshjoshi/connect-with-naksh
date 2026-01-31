import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-background border border-gray p-8 w-full max-w-xl font-fira">

      <form className="flex flex-col gap-4">

        {/* Row: Name + Email */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary"
          />

        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray resize-none focus:outline-none focus:border-primary"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="border border-primary text-white px-4 py-2 w-fit hover:bg-primary transition"
        >
          Send
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
