import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Planos e Preços — WaveBRAinBot",
  description:
    "Compare os planos do WaveBRAinBot, veja as garantias de segurança e tire suas dúvidas. Sem fidelidade longa.",
};

export default function Precos() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary>
          <PageHero
            eyebrow="Investimento"
            title="Planos e"
            titleAccent="Preços"
            subtitle="Escolha o plano ideal para o seu negócio. Sem fidelidade longa, com suporte completo desde o primeiro dia."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "Planos e Preços", href: "/precos" },
            ]}
          />
          <ScrollReveal><Pricing /></ScrollReveal>
          <ScrollReveal><Security /></ScrollReveal>
          <ScrollReveal><FAQ /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
