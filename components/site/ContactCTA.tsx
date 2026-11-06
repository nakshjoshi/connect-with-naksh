import { profile } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "./SectionHeader";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/nakshjoshi", href: profile.socials.linkedin },
  { label: "GitHub", value: "@nakshjoshi", href: profile.socials.github },
  { label: "WhatsApp", value: profile.phone, href: profile.socials.whatsapp },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="shell">

        <SectionHeader
          index="06"
          label="Contact"
          title="Hiring for backend or applied-AI work?"
          intro={profile.status}
        />

        <div className="grid gap-px border border-line bg-line lg:grid-cols-[0.8fr_1fr]">

          {/* Channels */}
          <div className="bg-surface">
            <div className="panel-head">Direct</div>
            <ul className="divide-y divide-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 px-4 py-4 transition-colors hover:bg-surface-2"
                  >
                    <span className="font-jet text-label uppercase text-fg-dim">
                      {c.label}
                    </span>
                    <span className="truncate font-jet text-sm text-fg-muted transition-colors group-hover:text-accent">
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-surface">
            <div className="panel-head">Message</div>
            <div className="p-4 lg:p-6">
              <ContactForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
