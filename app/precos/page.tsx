import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { CosmicBackground, ExitIntent } from "@/components/ClientOnlyComponents";
import ErrorBoundary from "@/components/error-boundary";
import PageHero from "@/components/sections/PageHero";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Planos e Preços — WaveBRAinBot",
  description:
    "Compare os planos do WaveBRAinBot, veja as garantias de segurança e LGPD. Sem fidelidade longa, suporte completo desde o primeiro dia.",
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
          {/* FAQ link — não duplica conteúdo */}
          <div className="py-12 text-center">
            <p className="text-white/50 text-sm mb-3">Tem dúvidas antes de contratar?</p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
            >
              Ver perguntas frequentes →
            </Link>
          </div>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </ErrorBoundary>
      </div>
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
