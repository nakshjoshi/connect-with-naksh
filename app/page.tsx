import Hero from "@/components/site/Hero";
import SelectedWork from "@/components/site/SelectedWork";
import Principles from "@/components/site/Principles";
import Writing from "@/components/site/Writing";
import Timeline from "@/components/site/Timeline";
import StackGrid from "@/components/site/StackGrid";
import ContactCTA from "@/components/site/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Principles />
      <Writing />
      <Timeline />
      <StackGrid />
      <ContactCTA />
    </>
  );
}
