import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import Niches from "@/components/sections/Niches";
import NotForWho from "@/components/sections/NotForWho";
import LossCalculator from "@/components/sections/LossCalculator";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Para Quem É — WaveBRAinBot",
  description:
    "Veja os nichos atendidos pelo WaveBRAinBot, quem se beneficia e quem não é o perfil ideal. Descubra se é a solução certa para o seu negócio.",
  alternates: { canonical: "/para-quem" },
};

export default function ParaQuem() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary>
          <PageHero
            eyebrow="Adequação"
            title="Para Quem"
            titleAccent="É"
            subtitle="Nichos com expertise real, qualificação honesta de perfil e calculadora de impacto para você decidir com dados."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "Para Quem", href: "/para-quem" },
            ]}
          />
          <ScrollReveal><Niches /></ScrollReveal>
          <ScrollReveal><NotForWho /></ScrollReveal>
          <ScrollReveal><LossCalculator /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
