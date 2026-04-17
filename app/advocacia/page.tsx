import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MagneticButton from "@/components/MagneticButton";
import { MessageCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "WaveBRAinBot | IA para Advogados e Escritórios Jurídicos",
  description: "Faça a triagem técnica inicial de clientes 24/7, colete documentos e libere seus advogados focar apenas nos honorários.",
};

export default function AdvocaciaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center min-h-[70vh] flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8 mx-auto">
          <span className="text-[var(--brand-yellow)] font-bold">Nicho #3</span>
          <span>Especialistas na Área Jurídica</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
          OAB amigável e<br/>
          <span style={{ color: "var(--brand-yellow)" }}>produtividade extrema.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
          O agente IA faz a primeira entrevista com o possível cliente: descobre a causa, analisa o potencial do caso e solicita os documentos iniciais. Seu time de advogados recebe os casos "mastigados" em alta performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <MagneticButton
            as="a"
            href="https://wa.me/5513996663009?text=Ol%C3%A1,%20gostaria%20de%20tecnologia%20IA%20no%20meu%20escrit%C3%B3rio%20jur%C3%ADdico"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "font-bold text-black px-8 py-6")}
            style={{ background: "var(--brand-yellow)" }}
          >
            <MessageCircle size={20} className="mr-2" />
            Otimizar meu escritório
          </MagneticButton>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-16">
          {[
            "Triagem jurídica inteligente em instantes",
            "Solicitação de documentos pendentes",
            "Atendimento inicial sigiloso 24 horas",
          ].map((benefit, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3">
              <CheckCircle size={24} style={{ color: "var(--brand-yellow)" }} />
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
