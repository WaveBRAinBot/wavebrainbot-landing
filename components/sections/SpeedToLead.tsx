"use client";

import { useTranslation } from "react-i18next";
import { Zap, TrendingUp, AlertTriangle } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";
import { WA_LINK } from "@/lib/constants";

export default function SpeedToLead() {
  const { t } = useTranslation("common");

  const stats = [
    { target: 391, suffix: "%", label: t("speedToLead.stat1_label"), sublabel: t("speedToLead.stat1_sublabel"), color: "#39ff14" },
    { target: 100, suffix: "x", label: t("speedToLead.stat2_label"), sublabel: t("speedToLead.stat2_sublabel"), color: "#00e5ff" },
    { target: 78,  suffix: "%", label: t("speedToLead.stat3_label"), sublabel: t("speedToLead.stat3_sublabel"), color: "#ffe600" },
    { target: 42,  suffix: "h", label: t("speedToLead.stat4_label"), sublabel: t("speedToLead.stat4_sublabel"), color: "#a855f7" },
  ];

  const calcItems = [
    { value: "~23",         label: t("speedToLead.calc1_label"), sub: t("speedToLead.calc1_sub"), color: "#a855f7" },
    { value: "R$ 11.500",   label: t("speedToLead.calc2_label"), sub: t("speedToLead.calc2_sub"), color: "#ffe600" },
    { value: "R$ 138.000",  label: t("speedToLead.calc3_label"), sub: t("speedToLead.calc3_sub"), color: "#a855f7" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, #a855f7 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-400 mb-6">
            <AlertTriangle size={14} />
            <span>{t("speedToLead.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("speedToLead.h2_part1")}{" "}
            <span style={{ color: "#a855f7" }}>{t("speedToLead.h2_highlight1")}</span>{" "}
            {t("speedToLead.h2_or")}{" "}
            <span style={{ color: "var(--brand-green)" }}>{t("speedToLead.h2_highlight2")}</span>{" "}
            {t("speedToLead.h2_part2")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("speedToLead.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <AnimatedStat key={i} {...s} delay={i * 100} />
          ))}
        </div>

        <div className="relative rounded-3xl p-8 sm:p-10 mb-12"
          style={{ background: "linear-gradient(135deg, rgba(57,255,20,0.06) 0%, rgba(0,229,255,0.04) 100%)", border: "1px solid rgba(57,255,20,0.2)" }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(57,255,20,0.15)" }}>
              <TrendingUp size={20} style={{ color: "var(--brand-green)" }} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{t("speedToLead.calc_title")}</h3>
              <p className="text-white/50 text-sm">{t("speedToLead.calc_subtitle")}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {calcItems.map((item) => (
              <div key={item.label} className="text-center py-4 px-3 rounded-xl bg-white/[0.03]">
                <p className="text-2xl font-black mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-white/40 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs text-center">{t("speedToLead.calc_disclaimer")}</p>
        </div>

        <div className="text-center">
          <p className="text-white/60 mb-4 text-sm">
            {t("speedToLead.responds_in")}{" "}
            <span style={{ color: "var(--brand-green)" }} className="font-bold">{t("speedToLead.responds_speed")}</span>, 24/7.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-black text-sm glow-green transition-transform hover:scale-105"
            style={{ background: "var(--brand-green)" }}
          >
            <Zap size={16} />
            {t("speedToLead.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
