import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import AgentFeatures from "@/components/sections/AgentFeatures";
import Onboarding from "@/components/sections/Onboarding";
import DedicatedManager from "@/components/sections/DedicatedManager";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Como Funciona — WaveBRAinBot",
  description:
    "Veja o que o agente de IA do WaveBRAinBot faz, o processo de onboarding completo e como funciona o modelo de gestor de IA dedicado.",
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
            title="O que o agente faz e"
            titleAccent="como começar"
            subtitle="Capacidades do agente de IA, o processo de onboarding em menos de 2 semanas e o modelo de acompanhamento contínuo."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "Como Funciona", href: "/como-funciona" },
            ]}
          />
          <ScrollReveal><AgentFeatures /></ScrollReveal>
          <ScrollReveal><Onboarding /></ScrollReveal>
          <ScrollReveal><DedicatedManager /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
