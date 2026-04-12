import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import Hero from "@/components/sections/Hero";
import SpeedToLead from "@/components/sections/SpeedToLead";
import Benefits from "@/components/sections/Benefits";
import Niches from "@/components/sections/Niches";
import HowItWorks from "@/components/sections/HowItWorks";
import Onboarding from "@/components/sections/Onboarding";
import AgentFeatures from "@/components/sections/AgentFeatures";
import ForWho from "@/components/sections/ForWho";
import NotForWho from "@/components/sections/NotForWho";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ScrollReveal><SpeedToLead /></ScrollReveal>
        <ScrollReveal><Benefits /></ScrollReveal>
        <ScrollReveal><Niches /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><AgentFeatures /></ScrollReveal>
        <ScrollReveal><Onboarding /></ScrollReveal>
        <ScrollReveal><ForWho /></ScrollReveal>
        <ScrollReveal><NotForWho /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Security /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
        <Footer />
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
