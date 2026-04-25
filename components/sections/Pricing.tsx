"use client";

import { useTranslation } from "react-i18next";
import { CheckCircle2, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WA_LINK } from "@/lib/constants";

export default function Pricing() {
  const { t } = useTranslation("common");

  const plans = [
    { key: "plan1", highlight: false, accentColor: "var(--brand-cyan)" },
    { key: "plan2", highlight: true,  accentColor: "var(--brand-green)" },
    { key: "plan3", highlight: false, accentColor: "var(--brand-cyan)" },
  ].map(({ key, highlight, accentColor }) => ({
    highlight,
    accentColor,
    name:     t(`pricing.${key}_name`),
    focus:    t(`pricing.${key}_focus`),
    tagline:  t(`pricing.${key}_tagline`),
    features: t(`pricing.${key}_features`, { returnObjects: true }) as string[],
    badge:    key === "plan2" ? t("pricing.plan2_badge") : undefined,
  }));

  const prices = ["799", "1.499", "2.499"];
  const setups = ["700", "1.000", "1.400"];

  const anchorItems = [
    { label: t("pricing.anchor_salary"), value: "R$ 2.500", sub: t("pricing.anchor_salary_sub") },
    { label: t("pricing.anchor_charges"), value: "R$ 1.875", sub: t("pricing.anchor_charges_sub") },
    { label: t("pricing.anchor_hours"), value: "8h/dia", sub: t("pricing.anchor_hours_sub") },
    { label: t("pricing.anchor_total"), value: "R$ 4.375+", sub: t("pricing.anchor_total_sub") },
  ];

  return (
    <section id="planos" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-green)" }}>
            {t("pricing.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("pricing.h2_part1")}{" "}
            <span style={{ color: "var(--brand-cyan)" }}>{t("pricing.h2_highlight")}</span>{" "}
            {t("pricing.h2_part2")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">{t("pricing.subtitle")}</p>

          <div className="inline-block rounded-2xl px-6 py-4 text-left max-w-2xl w-full"
            style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
              {t("pricing.anchor_title")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {anchorItems.map((item) => (
                <div key={item.label}>
                  <p className="text-white font-black text-lg">{item.value}</p>
                  <p className="text-white/70 text-xs font-semibold">{item.label}</p>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center mt-3">{t("pricing.anchor_disclaimer")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative rounded-[24px] p-8 flex flex-col transition-all duration-500 overflow-hidden group ${
                plan.highlight ? "shadow-2xl hover:-translate-y-2 scale-[1.02]" : "shadow-md hover:shadow-2xl hover:-translate-y-2"
              }`}
              style={{ boxShadow: plan.highlight ? "0 15px 40px -10px rgba(57,255,20,0.3)" : "0 5px 30px -10px rgba(0,229,255,0.15)" }}
            >
              <div className={`absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 ${plan.highlight ? "opacity-100" : "opacity-30 group-hover:opacity-100"}`}
                style={{ background: `linear-gradient(135deg, ${plan.accentColor}, transparent 60%)` }}>
                <div className={`absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 ${plan.highlight ? "opacity-90 group-hover:opacity-85" : "opacity-90 group-hover:opacity-80"}`} />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${plan.highlight ? "rgba(57,255,20,0.15)" : "rgba(0,229,255,0.1)"} 0%, transparent 70%)` }} />

              <div className="relative z-10 flex flex-col h-full">
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1 shadow-[0_0_15px_rgba(57,255,20,0.4)]"
                    style={{ background: "var(--brand-green)" }}>
                    <Star size={12} fill="currentColor" />
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: plan.highlight ? "var(--brand-green)" : "var(--brand-cyan)" }}>
                    {plan.focus}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-white/50 text-sm">{plan.tagline}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/50 text-lg">R$</span>
                    <span className="text-4xl font-black text-white">{prices[idx]}</span>
                    <span className="text-white/50">{t("pricing.per_month")}</span>
                  </div>
                  <p className="text-white/40 text-xs mt-1">
                    {t("pricing.setup_prefix")} {setups[idx]} {t("pricing.setup_suffix")}
                  </p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {Array.isArray(plan.features) && plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlight ? "var(--brand-green)" : "var(--brand-cyan)" }} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: plan.highlight ? "default" : "outline" }),
                      "w-full font-bold justify-center transition-all hover:scale-105",
                      plan.highlight ? "text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]" : "text-white border-white/20 hover:bg-white/5"
                    )}
                    style={plan.highlight ? { background: "var(--brand-green)" } : {}}
                  >
                    {t("pricing.cta_button")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">{t("pricing.no_loyalty")}</p>
      </div>
    </section>
  );
}
