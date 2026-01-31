import React from "react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32 font-fira"
    >
      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">

        <div className="flex items-center gap-2">
          <span className="text-primary text-3xl font-medium">#</span>
          <h2 className="text-white text-3xl font-medium">
            contact
          </h2>
        </div>

        <div className="flex-1 h-[1px] bg-primary" />

      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* Left Content */}
        <div className="max-w-md">

          <p className="text-gray leading-relaxed text-base">
            I’m interested in freelance opportunities. However,
            if you have other requests or questions, don’t hesitate
            to contact me.
          </p>

        </div>

        {/* Message Box */}
        <div className="border border-gray p-6 w-fit">

          <h3 className="text-white font-semibold mb-4">
            Message me here
          </h3>

          <div className="flex flex-col gap-3 text-gray text-sm">

            {/* Discord */}
            <div className="flex items-center gap-2">
              <FaDiscord />
              <span>@nakshatra</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>nakshatrajoshi@email.com</span>
            </div>

          </div>

        </div>

      </div>

      <ContactForm></ContactForm>
    </section>
  );
};

export default Contact;
