"use client"

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-line bg-canvas px-3 py-2.5 text-sm text-fg placeholder-fg-dim " +
  "transition-colors focus:border-accent focus:outline-none";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const adminTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN;
  const userTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER;
  const pubKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!serviceID || !adminTemplate || !userTemplate || !pubKey) {
      console.error("EmailJS env vars missing");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceID, adminTemplate, form, pubKey);
      await emailjs.sendForm(serviceID, userTemplate, form, pubKey);
      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Failed to send message", err);
      setStatus("error");
    }
  }

  const label = {
    idle: "Send message",
    sending: "Sending…",
    sent: "Sent ✓",
    error: "Try again",
  }[status];

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input type="text" name="name" required placeholder="Name" className={field} />
        <input type="email" name="email" required placeholder="Email" className={field} />
      </div>

      <input type="text" name="subject" required placeholder="Subject" className={field} />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="What are you building?"
        className={`${field} min-h-[120px] resize-none`}
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {label}
        </button>

        {status === "error" && (
          <span className="font-jet text-[11px] text-danger">
            Couldn&apos;t send — email me directly instead.
          </span>
        )}
        {status === "sent" && (
          <span className="font-jet text-[11px] text-accent">
            I&apos;ll get back to you shortly.
          </span>
        )}
      </div>

    </form>
  );
};

export default ContactForm;
