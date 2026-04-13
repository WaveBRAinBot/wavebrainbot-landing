import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import Niches from "@/components/sections/Niches";
import ForWho from "@/components/sections/ForWho";
import NotForWho from "@/components/sections/NotForWho";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Para Quem É — WaveBRAinBot",
  description:
    "Veja os nichos atendidos pelo WaveBRAinBot, quem se beneficia do agente de IA no WhatsApp e quem não é o perfil ideal.",
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
            subtitle="Descubra se o WaveBRAinBot é a solução certa para o seu negócio. Veja os segmentos que mais se beneficiam e seja honesto sobre o seu perfil."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "Para Quem", href: "/para-quem" },
            ]}
          />
          <ScrollReveal><Niches /></ScrollReveal>
          <ScrollReveal><ForWho /></ScrollReveal>
          <ScrollReveal><NotForWho /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
