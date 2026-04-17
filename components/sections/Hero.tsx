"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Zap, ShieldCheck, Database, Calendar } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppSimulator from "@/components/WhatsAppSimulator";

const WA_LINK = "https://wa.me/5513996663009";

function StatBadge({
  value,
  suffix,
  label,
  color,
}: {
  value?: string;
  suffix?: string;
  countTo?: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-black" style={{ color, textShadow: `0 0 20px ${color}80` }}>
        {value}{suffix}
      </span>
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}

function CountStat({
  target,
  prefix,
  suffix,
  label,
  color,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
}) {
  const { ref, value } = useCountUp(target, 2000);
  return (
    <div className="flex flex-col items-center">
      <span
        ref={ref}
        className="text-3xl font-black"
        style={{ color, textShadow: `0 0 20px ${color}80` }}
      >
        {prefix}{value}{suffix}
      </span>
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8">
            <Zap size={14} style={{ color: "var(--brand-green)" }} />
            <span>Agência de Performance com IA</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Infraestrutura de IA para{" "}
            <span className="text-glow-green" style={{ color: "var(--brand-green)" }}>
              performance
            </span>{" "}
            e atendimento{" "}
            <span className="text-glow-cyan" style={{ color: "var(--brand-cyan)" }}>
              24/7
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Construímos a operação de IA do seu negócio — agentes que atendem, qualificam e convertem no WhatsApp, integrados a tráfego pago e automações que escalam resultado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              as="a"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "font-bold text-black text-base px-8 py-6 glow-green inline-flex items-center gap-2 relative shadow-xl shadow-green-400/20"
              )}
              style={{ background: "var(--brand-green)" }}
            >
              <MessageCircle size={20} />
              Quero meu Agente de IA
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/como-funciona"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "font-semibold text-base px-8 py-6 text-white border-white/20 hover:bg-white/5"
              )}
            >
              Ver como funciona
            </MagneticButton>
          </div>

          {/* Trust Signals & Social Proof */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/40 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-[#a855f7]" /> Proteção LGPD</span>
            <span className="flex items-center gap-1"><Database size={16} className="text-[var(--brand-cyan)]" /> Integração Direta</span>
            <span className="flex items-center gap-1"><Calendar size={16} className="text-[var(--brand-yellow)]" /> Agendamento Fácil</span>
          </div>

          {/* WhatsApp Simulator */}
          <WhatsAppSimulator />

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <StatBadge value="24/7" label="Disponibilidade" color="var(--brand-green)" />
            <div className="w-px bg-white/10 hidden sm:block" />
            <StatBadge value="3s" label="Tempo de resposta" color="var(--brand-cyan)" />
            <div className="w-px bg-white/10 hidden sm:block" />
            <CountStat target={70} prefix="+" suffix="%" label="Redução de custos" color="var(--brand-yellow)" />
          </div>
        </div>
      </div>
    </section>
  );
}
