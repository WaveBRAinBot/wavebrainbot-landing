import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MagneticButton from "@/components/MagneticButton";
import { MessageCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WA_LINK_CTA as WA_LINK } from "@/lib/constants";

export const metadata = {
  title: "WaveBRAinBot | IA para Clínicas e Consultórios",
  description: "Zere suas faltas, preencha sua agenda e confirme consultas automaticamente 24/7 sem sobrecarregar sua recepção.",
  alternates: { canonical: "/clinicas" },
};

export default function ClinicasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center min-h-[70vh] flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8 mx-auto">
          <span className="text-[var(--brand-green)] font-bold">Nicho #1</span>
          <span>Especialistas em Clínicas de Saúde</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
          Sua clínica lotada.<br/>
          <span style={{ color: "var(--brand-green)" }}>Zero faltas.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
          Nosso Agente de IA conversa com os pacientes, qualifica o procedimento, acessa sua agenda, confirma horários e reduz a taxa de no-show para quase zero. Tudo isso no WhatsApp, em segundos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <MagneticButton
            as="a"
            href="https://wa.me/5513996663009?text=Ol%C3%A1,%20gostaria%20de%20implementar%20IA%20na%20minha%20cl%C3%ADnica"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "font-bold text-black px-8 py-6")}
            style={{ background: "var(--brand-green)" }}
          >
            <MessageCircle size={20} className="mr-2" />
            Aplicar isso na minha Clínica
          </MagneticButton>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-16">
          {[
            "Triagem automática 24 horas por dia",
            "Confirmações ativas 1 dia antes",
            "Respostas instantâneas para novos leads",
          ].map((benefit, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3">
              <CheckCircle size={24} style={{ color: "var(--brand-green)" }} />
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
