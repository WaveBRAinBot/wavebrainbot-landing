import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Perguntas Frequentes — WaveBRAinBot",
  description:
    "Respostas para as dúvidas mais comuns sobre o WaveBRAinBot: configuração, personalização, contratos, atendimento humano e mais.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Navbar />
        <ErrorBoundary>
          <PageHero
            eyebrow="Dúvidas"
            title="Perguntas"
            titleAccent="Frequentes"
            subtitle="Tudo que você precisa saber antes de começar. Não encontrou o que buscava? Fale direto com a gente."
            breadcrumb={[
              { label: "Início", href: "/" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
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
