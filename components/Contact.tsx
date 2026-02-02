import React from "react";
import { FaDiscord, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-background text-white px-4 md:px-6 lg:px-24 py-16 lg:py-24 font-fira"
    >
      {/* Heading */}
      <div className="flex items-center gap-4 mb-8 lg:mb-12 max-w-6xl mx-auto">

        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl lg:text-3xl font-medium">#</span>
          <h2 className="text-white text-2xl lg:text-3xl font-medium whitespace-nowrap">
            contact
          </h2>
        </div>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Main Layout - stacked on mobile */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 max-w-6xl mx-auto">

        {/* Message Box */}
        <div className="border border-gray p-4 lg:p-6 w-full lg:w-fit h-fit">

          <h3 className="text-white font-semibold mb-3 lg:mb-4 text-base lg:text-lg">
            Message me here
          </h3>

          <div className="flex flex-col gap-2 lg:gap-3 text-gray text-sm">

            {/* Discord */}
            <div className="flex items-center gap-2 text-gray hover:text-white transition cursor-pointer">
              <FaDiscord className="flex-shrink-0" />
              <span>nakshatrajoshi</span>
            </div>

            {/* Email */}
            <a href="mailto:connect.nakshjoshi@gmail.com" className="flex items-center gap-2 text-gray hover:text-white transition">
              <FaEnvelope className="flex-shrink-0" />
              <span className="break-all">connect.nakshjoshi@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a href="http://wa.me/917008350087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray hover:text-white transition">
              <FaWhatsapp className="flex-shrink-0" />
              <span>+91 7008350087</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/nakshjoshi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray hover:text-white transition">
              <FaLinkedin className="flex-shrink-0" />
              <span>linkedin.com/in/nakshjoshi</span>
            </a>

          </div>

        </div>

        {/* Contact Form */}
        <div className="w-full lg:flex-1">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;
