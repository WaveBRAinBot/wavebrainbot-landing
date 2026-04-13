import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import Hero from "@/components/sections/Hero";
import SpeedToLead from "@/components/sections/SpeedToLead";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import DedicatedManager from "@/components/sections/DedicatedManager";
import LossCalculator from "@/components/sections/LossCalculator";
import SectionTeaser from "@/components/sections/SectionTeaser";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary>
          <Hero />
          <ScrollReveal><SpeedToLead /></ScrollReveal>
          <ScrollReveal><Services /></ScrollReveal>
          <ScrollReveal><Benefits /></ScrollReveal>
          <ScrollReveal><DedicatedManager /></ScrollReveal>
          <ScrollReveal><LossCalculator /></ScrollReveal>
          <ScrollReveal><SectionTeaser /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
