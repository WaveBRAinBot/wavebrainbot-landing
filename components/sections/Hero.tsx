"use client";

import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Zap, ShieldCheck, Database, Calendar } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppSimulator from "@/components/WhatsAppSimulator";
import CountStat from "@/components/CountStat";
import { WA_LINK } from "@/lib/constants";

function StatBadge({ value, suffix, label, color }: { value?: string; suffix?: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-black" style={{ color, textShadow: `0 0 20px ${color}80` }}>
        {value}{suffix}
      </span>
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8">
            <Zap size={14} style={{ color: "var(--brand-green)" }} />
            <span>{t("hero.badge")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">
            {t("hero.h1_before")}{" "}
            <span className="text-glow-green" style={{ color: "var(--brand-green)" }}>
              {t("hero.h1_highlight")}
            </span>{" "}
            {t("hero.h1_middle")}{" "}
            <span className="text-glow-cyan" style={{ color: "var(--brand-cyan)" }}>
              {t("hero.h1_highlight2")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

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
              {t("hero.cta_primary")}
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/como-funciona"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "font-semibold text-base px-8 py-6 text-white border-white/20 hover:bg-white/5"
              )}
            >
              {t("hero.cta_secondary")}
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/40 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-[#a855f7]" /> {t("hero.trust_lgpd")}</span>
            <span className="flex items-center gap-1"><Database size={16} className="text-[var(--brand-cyan)]" /> {t("hero.trust_integration")}</span>
            <span className="flex items-center gap-1"><Calendar size={16} className="text-[var(--brand-yellow)]" /> {t("hero.trust_scheduling")}</span>
          </div>

          <WhatsAppSimulator />

          <div className="mt-8 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-white/20 inline-flex items-center gap-1 group"
            >
              {t("hero.simulator_link")} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <StatBadge value="24/7" label={t("hero.stat_availability")} color="var(--brand-green)" />
            <div className="w-px bg-white/10 hidden sm:block" />
            <StatBadge value="3s" label={t("hero.stat_response")} color="var(--brand-cyan)" />
            <div className="w-px bg-white/10 hidden sm:block" />
            <CountStat target={70} prefix="+" suffix="%" label={t("hero.stat_cost")} color="var(--brand-yellow)" />
          </div>
        </div>
      </div>
    </section>
  );
}
