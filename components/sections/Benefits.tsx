"use client";

import { useTranslation } from "react-i18next";
import { Clock, TrendingUp, Users, Zap, Shield, BarChart3 } from "lucide-react";

const ICONS = [Clock, TrendingUp, Users, Zap, Shield, BarChart3];
const COLORS = ["var(--brand-green)", "var(--brand-cyan)", "var(--brand-yellow)", "var(--brand-green)", "var(--brand-cyan)", "var(--brand-yellow)"];

export default function Benefits() {
  const { t } = useTranslation("common");

  const benefits = [1, 2, 3, 4, 5, 6].map((n, i) => ({
    icon: ICONS[i],
    color: COLORS[i],
    title: t(`benefits.b${n}_title`),
    desc:  t(`benefits.b${n}_desc`),
  }));

  return (
    <section id="beneficios" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-green)" }}>
            {t("benefits.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("benefits.h2_part1")}{" "}
            <span style={{ color: "var(--brand-cyan)" }}>{t("benefits.h2_highlight")}</span>{" "}
            {t("benefits.h2_part2")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{t("benefits.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="relative rounded-[24px] p-6 transition-all duration-500 overflow-hidden group shadow-md hover:shadow-2xl hover:-translate-y-1"
              style={{ boxShadow: `0 5px 30px -10px ${b.color}20` }}
            >
              <div className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-100"
                style={{ background: `linear-gradient(135deg, ${b.color}, transparent 50%)` }}>
                <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 group-hover:opacity-80" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 100%, ${b.color}15, transparent 60%)` }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-500"
                  style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}>
                  <b.icon size={22} style={{ color: b.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
