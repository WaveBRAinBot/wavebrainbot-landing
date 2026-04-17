import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MagneticButton from "@/components/MagneticButton";
import { MessageCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "WaveBRAinBot | IA para Imobiliárias e Corretores",
  description: "Qualifique leads frios, agende visitas instantaneamente e não perca mais dinheiro com tráfego pago esquecido na caixa de entrada.",
};

export default function ImobiliariasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center min-h-[70vh] flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8 mx-auto">
          <span className="text-[var(--brand-cyan)] font-bold">Nicho #2</span>
          <span>Especialistas no Mercado Imobiliário</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
          Pare de queimar<br/>
          <span style={{ color: "var(--brand-cyan)" }}>leads de anúncios.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
          Seu corretor demora 2h para responder. Nosso Agente de IA responde em segundos. Ele qualifica a renda, perfil de imóvel (compra/locação) e já envia links e marca a visita com o corretor responsável.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <MagneticButton
            as="a"
            href="https://wa.me/5513996663009?text=Ol%C3%A1,%20tenho%20uma%20imobili%C3%A1ria%20e%20quero%20automatizar%20o%20atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "font-bold text-black px-8 py-6")}
            style={{ background: "var(--brand-cyan)" }}
          >
            <MessageCircle size={20} className="mr-2" />
            Vender mais imóveis com IA
          </MagneticButton>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-16">
          {[
            "Qualificação profunda 24/7",
            "Envio rápido do portfólio no WhatsApp",
            "Roteamento certo para o corretor certo",
          ].map((benefit, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3">
              <CheckCircle size={24} style={{ color: "var(--brand-cyan)" }} />
              <p className="font-semibold text-white/90">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
