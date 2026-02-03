"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

const ContactForm = () => {


  const [buttonText, setButtonText] = useState("Send")


  const serviceID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const adminTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN
  const userTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER
  const pubKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceID || !adminTemplate || !userTemplate || !pubKey) {
   console.error("Env missing");
  }


  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    setButtonText("Sending...")
    const form = event.target as HTMLFormElement

    await emailjs.sendForm(serviceID!, adminTemplate!, form, pubKey)
    setButtonText("Sent")
    await emailjs.sendForm(serviceID!, userTemplate!, form, pubKey)

    form.reset()
    setButtonText("Send")

  }





  return (
    <div className="bg-background border border-gray p-4 lg:p-8 w-full font-fira">

      <form id="myForm"  className="flex flex-col gap-3 lg:gap-4" onSubmit={handleSubmit}>

        {/* Row: Name + Email */}
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
          />

          {/* Email */}
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
          />

        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          required
          placeholder="Subject"
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray focus:outline-none focus:border-primary text-sm lg:text-base"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          name="message"
          required
          rows={4}
          className="w-full bg-transparent border border-gray px-3 py-2 text-white placeholder-gray resize-none focus:outline-none focus:border-primary text-sm lg:text-base min-h-[100px]"
        ></textarea>

        {/* Button */}
        <motion.button
          type="submit"
          className="border border-primary text-white px-4 py-2 w-full sm:w-fit hover:bg-primary transition text-sm lg:text-base"
          whileTap="tap"
          whileHover="hover"
          variants={buttonVariants}
        >
          {buttonText}
        </motion.button>

      </form>
    </div>
  );
};

export default ContactForm;
