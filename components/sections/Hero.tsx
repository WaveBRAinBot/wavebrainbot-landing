import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Zap } from "lucide-react";

const WA_LINK = "https://wa.me/5513996663009";

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-20">
      {/* Animated grid overlay */}
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
            <span>Agente de IA para WhatsApp</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Seu negócio atendendo{" "}
            <span
              className="text-glow-green"
              style={{ color: "var(--brand-green)" }}
            >
              24/7
            </span>{" "}
            no WhatsApp com{" "}
            <span
              className="text-glow-cyan"
              style={{ color: "var(--brand-cyan)" }}
            >
              Inteligência Artificial
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            O WaveBRAinBot responde, qualifica leads e converte clientes
            automaticamente — enquanto você foca no que importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "font-bold text-black text-base px-8 py-6 glow-green inline-flex items-center gap-2"
              )}
              style={{ background: "var(--brand-green)" }}
            >
              <MessageCircle size={20} />
              Quero meu Agente de IA
            </a>
            <a
              href="#como-funciona"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "font-semibold text-base px-8 py-6 text-white border-white/20 hover:bg-white/5"
              )}
            >
              Ver como funciona
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-black text-glow-green"
                style={{ color: "var(--brand-green)" }}
              >
                24/7
              </span>
              <span>Disponibilidade</span>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-black text-glow-cyan"
                style={{ color: "var(--brand-cyan)" }}
              >
                3s
              </span>
              <span>Tempo de resposta</span>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-black"
                style={{ color: "var(--brand-yellow)" }}
              >
                +70%
              </span>
              <span>Redução de custos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
