"use client";

import { useTranslation } from "react-i18next";
import { Bot, BarChart2, Sparkles, Cpu } from "lucide-react";

const ICONS = [Bot, BarChart2, Sparkles, Cpu];
const COLORS = ["var(--brand-green)", "var(--brand-cyan)", "var(--brand-yellow)", "var(--brand-green)"];
const HIGHLIGHTS = [true, false, false, false];

export default function Services() {
  const { t } = useTranslation("common");

  const services = [1, 2, 3, 4].map((n, i) => ({
    icon: ICONS[i],
    color: COLORS[i],
    highlight: HIGHLIGHTS[i],
    tag:   t(`services.service${n}_tag`),
    title: t(`services.service${n}_title`),
    desc:  t(`services.service${n}_desc`),
    items: t(`services.service${n}_items`, { returnObjects: true }) as string[],
  }));

  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-green)" }}>
            {t("services.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("services.h2_part1")}{" "}
            <span style={{ color: "var(--brand-cyan)" }}>{t("services.h2_highlight")}</span>{" "}
            {t("services.h2_part2")}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-[24px] p-8 transition-all duration-500 overflow-hidden group hover:-translate-y-1"
                style={{ boxShadow: s.highlight ? `0 10px 40px -10px ${s.color}40` : undefined }}
              >
                <div className={`absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 ${s.highlight ? "opacity-100" : "opacity-30 group-hover:opacity-100"}`}
                  style={{ background: `linear-gradient(135deg, ${s.color}, transparent 60%)` }}>
                  <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 group-hover:opacity-85" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${s.color}15, transparent 60%)` }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg"
                      style={{ color: s.color, background: `${s.color}12`, border: `1px solid ${s.color}30`, boxShadow: `0 0 15px ${s.color}20` }}>
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {Array.isArray(s.items) && s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
