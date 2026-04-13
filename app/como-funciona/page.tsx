import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import AgentFeatures from "@/components/sections/AgentFeatures";
import Onboarding from "@/components/sections/Onboarding";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Como Funciona — WaveBRAinBot",
  description:
    "Entenda como o agente de IA do WaveBRAinBot funciona, suas funcionalidades e o processo de onboarding para o seu WhatsApp.",
};

export default function ComoFunciona() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary>
          <PageHero
            eyebrow="Tecnologia"
            title="Como o Agente"
            titleAccent="Funciona"
            subtitle="Entenda a arquitetura por trás do WaveBRAinBot, suas funcionalidades de IA e como ele se integra ao seu WhatsApp em minutos."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "Como Funciona", href: "/como-funciona" },
            ]}
          />
          <ScrollReveal><HowItWorks /></ScrollReveal>
          <ScrollReveal><AgentFeatures /></ScrollReveal>
          <ScrollReveal><Onboarding /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
