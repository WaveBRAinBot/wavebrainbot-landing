import Navbar from "@/components/Navbar";
import CosmicBackground from "@/components/CosmicBackground";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import AgentFeatures from "@/components/sections/AgentFeatures";
import ForWho from "@/components/sections/ForWho";
import Pricing from "@/components/sections/Pricing";
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
        <ScrollReveal><Benefits /></ScrollReveal>
        <ScrollReveal delay={100}><HowItWorks /></ScrollReveal>
        <ScrollReveal delay={100}><AgentFeatures /></ScrollReveal>
        <ScrollReveal delay={100}><ForWho /></ScrollReveal>
        <ScrollReveal delay={100}><Pricing /></ScrollReveal>
        <ScrollReveal delay={100}><FAQ /></ScrollReveal>
        <ScrollReveal delay={100}><CTA /></ScrollReveal>
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
