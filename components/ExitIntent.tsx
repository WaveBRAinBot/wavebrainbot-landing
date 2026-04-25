"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { X, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WA_LINK_CTA as WA_LINK } from "@/lib/constants";

const EXIT_INTENT_DELAY = 10000;

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const firedRef = useRef(false);
  const clickedWARef = useRef(false);
  const activeRef = useRef(true); // Rastreia se componente está montado
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setVisible(false), []);

  // Inicialização e listeners de ativação
  useEffect(() => {
    if (!activeRef.current) return;

    const handleWAClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target?.href?.includes("wa.me")) {
        clickedWARef.current = true;
      }
    };
    document.addEventListener("click", handleWAClick);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !firedRef.current && !clickedWARef.current && activeRef.current) {
        firedRef.current = true;
        setVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (activeRef.current) {
        document.addEventListener("mouseleave", handleMouseLeave);
      }
    }, EXIT_INTENT_DELAY);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleWAClick);
    };
  }, []);

  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      activeRef.current = false;
    };
  }, []);

  // Memoizar focusable elements (calculado apenas quando dialog muda)
  const focusableElements = useMemo(() => {
    if (!dialogRef.current) return [];
    return Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));
  }, [visible]); // Re-calcula quando modal abre (visible muda)

  // Focus trap + Esc quando modal está visível
  useEffect(() => {
    if (!visible) return;

    // Foca o botão de fechar ao abrir
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab") return;
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        if (activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, close, focusableElements]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="exit-intent-title"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        ref={dialogRef}
        className="relative max-w-md w-full rounded-3xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, rgba(10,10,10,0.98) 100%)",
          border: "1px solid rgba(57,255,20,0.25)",
          boxShadow: "0 0 60px rgba(57,255,20,0.12)",
        }}
      >
        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={close}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded"
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

        <h2 id="exit-intent-title" className="text-2xl font-black text-white mb-3 leading-tight">
          Seu próximo lead pode chegar em 3 minutos
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-7">
          E sem resposta rápida, ele vai embora para o concorrente. Fala com a gente agora — diagnóstico gratuito, sem compromisso.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full font-bold text-black text-base py-6 glow-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          )}
          style={{ background: "var(--brand-green)" }}
        >
          Ver como funciona grátis
        </a>

        <button
          onClick={close}
          className="mt-4 text-white/30 text-xs hover:text-white/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded"
        >
          Não, prefiro continuar perdendo leads
        </button>
      </div>
    </div>
  );
}
