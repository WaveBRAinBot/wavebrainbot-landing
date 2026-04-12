"use client";

import { useEffect, useState, useRef } from "react";
import { X, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WA_LINK =
  "https://wa.me/5513996663009?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20agente%20de%20IA%20para%20WhatsApp";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const firedRef = useRef(false);
  const clickedWARef = useRef(false);

  useEffect(() => {
    // marca se o usuário já clicou em algum link do WhatsApp
    const handleWAClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target?.href?.includes("wa.me")) {
        clickedWARef.current = true;
      }
    };
    document.addEventListener("click", handleWAClick);

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 5 &&
        !firedRef.current &&
        !clickedWARef.current
      ) {
        firedRef.current = true;
        setVisible(true);
      }
    };

    // delay de 10s antes de ativar — usuário precisa ter lido algo
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleWAClick);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative max-w-md w-full rounded-3xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, rgba(10,10,10,0.98) 100%)",
          border: "1px solid rgba(57,255,20,0.25)",
          boxShadow: "0 0 60px rgba(57,255,20,0.12)",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: "rgba(57,255,20,0.12)", border: "1px solid rgba(57,255,20,0.3)" }}
        >
          <Zap size={26} style={{ color: "var(--brand-green)" }} />
        </div>

        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand-green)" }}>
          Antes de ir…
        </p>

        <h2 className="text-2xl font-black text-white mb-3 leading-tight">
          Seu próximo lead pode chegar em 3 minutos
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-7">
          E sem resposta rápida, ele vai embora para o concorrente. Fala com a gente agora — diagnóstico gratuito, sem compromisso.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setVisible(false)}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full font-bold text-black text-base py-6 glow-green"
          )}
          style={{ background: "var(--brand-green)" }}
        >
          Ver como funciona grátis
        </a>

        <button
          onClick={() => setVisible(false)}
          className="mt-4 text-white/30 text-xs hover:text-white/60 transition-colors"
        >
          Não, prefiro continuar perdendo leads
        </button>
      </div>
    </div>
  );
}
