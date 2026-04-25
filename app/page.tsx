import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Seções below-the-fold em chunks separados — reduz bundle inicial
const SpeedToLead = dynamic(() => import("@/components/sections/SpeedToLead"));
const Services    = dynamic(() => import("@/components/sections/Services"));
const Benefits    = dynamic(() => import("@/components/sections/Benefits"));
const CTA         = dynamic(() => import("@/components/sections/CTA"));

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
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
