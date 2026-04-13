"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingDown, Zap } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

export default function LossCalculator() {
  const [leads, setLeads] = useState(30);
  const [ticket, setTicket] = useState(500);

  const lost = useMemo(() => {
    const perMonth = Math.round(leads * 0.78);
    const revenue = perMonth * ticket;
    const annual = revenue * 12;
    return { perMonth, revenue, annual };
  }, [leads, ticket]);

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #a855f7 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#a855f7" }}
          >
            Calculadora de perda
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Quanto você está{" "}
            <span style={{ color: "#a855f7" }}>perdendo</span> agora?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Ajuste os números do seu negócio e veja o impacto real da lentidão no atendimento.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(57,255,20,0.03) 100%)",
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="block text-white/70 text-sm font-semibold mb-3">
                Leads por mês
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="flex-1 accent-purple-500 h-2 rounded-full"
                />
                <span className="font-stat text-2xl font-bold text-white w-16 text-right">
                  {leads}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm font-semibold mb-3">
                Ticket médio (R$)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="flex-1 accent-purple-500 h-2 rounded-full"
                />
                <span className="font-stat text-2xl font-bold text-white w-24 text-right">
                  {fmt(ticket)}
                </span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: "leads perdidos/mês",
                value: `${lost.perMonth}`,
                sub: "pela regra dos 78% (quem responde primeiro)",
                color: "#a855f7",
              },
              {
                label: "perdidos por mês",
                value: fmt(lost.revenue),
                sub: "receita que vai pro concorrente",
                color: "var(--brand-yellow)",
              },
              {
                label: "perdidos por ano",
                value: fmt(lost.annual),
                sub: "só por demorar no atendimento",
                color: "#a855f7",
              },
            ].map((r) => (
              <div
                key={r.label}
                className="text-center py-5 px-4 rounded-2xl bg-white/[0.04] border border-white/8"
              >
                <p className="font-stat text-2xl sm:text-3xl font-black mb-1" style={{ color: r.color }}>
                  {r.value}
                </p>
                <p className="text-white text-sm font-semibold mb-1">{r.label}</p>
                <p className="text-white/35 text-xs leading-relaxed">{r.sub}</p>
              </div>
            ))}
          </div>

          {/* Insight */}
          <div className="flex items-start gap-3 rounded-2xl p-4 bg-white/[0.03] border border-white/8 mb-8">
            <TrendingDown size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm leading-relaxed">
              Esses números assumem que você responde em mais de 5 minutos. O WaveBRAinBot responde em{" "}
              <span className="font-bold" style={{ color: "var(--brand-green)" }}>menos de 3 segundos</span> — eliminando
              praticamente toda essa perda.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-transform hover:scale-105 glow-green"
              style={{ background: "var(--brand-green)" }}
            >
              <Zap size={18} />
              Quero parar de perder {fmt(lost.revenue)}/mês
            </a>
          </div>
        </div>

        <p className="text-white/25 text-xs text-center mt-4">
          * Baseado no Lead Response Management Study (MIT Sloan / Dr. James Oldroyd). Ajuste conforme sua realidade.
        </p>
      </div>
    </section>
  );
}
