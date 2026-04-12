import Navbar from "@/components/Navbar";
import CosmicBackground from "@/components/CosmicBackground";
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
      <Benefits />
      <HowItWorks />
      <AgentFeatures />
      <ForWho />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
