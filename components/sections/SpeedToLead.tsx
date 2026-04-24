import { Zap, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";
import { WA_LINK } from "@/lib/constants";

const stats = [
  {
    target: 391,
    suffix: "%",
    label: "mais conversão respondendo em 1 min",
    sublabel: "Velocify Research — velocify.com",
    color: "#39ff14",
  },
  {
    target: 100,
    suffix: "x",
    label: "mais chance de contato em 5 min vs. 30 min",
    sublabel: "MIT Sloan / InsideSales — Lead Response Management Study",
    color: "#00e5ff",
  },
  {
    target: 78,
    suffix: "%",
    label: "dos clientes compram de quem responde primeiro",
    sublabel: "Dr. James Oldroyd — Lead Response Management Study",
    color: "#ffe600",
  },
  {
    target: 42,
    suffix: "h",
    label: "tempo médio de resposta B2B. 58% nunca respondem.",
    sublabel: "Drift / InsideSales Lead Response Report",
    color: "#a855f7",
  },
];

export default function SpeedToLead() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, #a855f7 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-400 mb-6">
            <AlertTriangle size={14} />
            <span>Dados de pesquisa — não é opinião</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            A velocidade de resposta{" "}
            <span style={{ color: "#a855f7" }}>mata</span> ou{" "}
            <span style={{ color: "var(--brand-green)" }}>salva</span> sua venda
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Enquanto você demora pra responder, seu concorrente está fechando o negócio.
            A ciência é clara: quem responde primeiro, vende.
          </p>
        </div>

        {/* Stats grid — client islands */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <AnimatedStat key={i} {...s} delay={i * 100} />
          ))}
        </div>

        {/* Calculation box */}
        <div
          className="relative rounded-3xl p-8 sm:p-10 mb-12"
          style={{
            background: "linear-gradient(135deg, rgba(57,255,20,0.06) 0%, rgba(0,229,255,0.04) 100%)",
            border: "1px solid rgba(57,255,20,0.2)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(57,255,20,0.15)" }}>
              <TrendingUp size={20} style={{ color: "var(--brand-green)" }} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Calculando sua perda atual</h3>
              <p className="text-white/50 text-sm">Se você recebe 30 leads/mês e demora 2h pra responder:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { value: "~23", label: "leads perdidos por mês", sub: "pela regra dos 78%", color: "#a855f7" },
              { value: "R$ 11.500", label: "perdidos todo mês", sub: "com ticket médio de R$ 500", color: "#ffe600" },
              { value: "R$ 138.000", label: "por ano desperdiçados", sub: "só por lentidão no atendimento", color: "#a855f7" },
            ].map((item) => (
              <div key={item.label} className="text-center py-4 px-3 rounded-xl bg-white/[0.03]">
                <p className="text-2xl font-black mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-white/40 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs text-center">
            * Ajuste os números conforme sua realidade. O padrão muda, o princípio não.
          </p>
        </div>

        {/* CTA inline */}
        <div className="text-center">
          <p className="text-white/60 mb-4 text-sm">
            O WaveBRAinBot responde <span style={{ color: "var(--brand-green)" }} className="font-bold">em segundos</span>, 24/7.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-black text-sm glow-green transition-transform hover:scale-105"
            style={{ background: "var(--brand-green)" }}
          >
            <Zap size={16} />
            Parar de perder leads agora
          </a>
        </div>
      </div>
    </section>
  );
}
