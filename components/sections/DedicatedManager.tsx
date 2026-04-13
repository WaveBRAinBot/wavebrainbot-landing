import { UserCheck, RefreshCw, BarChart3, MessageSquare, Wrench } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

const deliverables = [
  {
    icon: UserCheck,
    title: "Gestor de IA dedicado",
    description: "Um especialista acompanha sua operação, não um sistema que você usa sozinho.",
    color: "var(--brand-green)",
  },
  {
    icon: RefreshCw,
    title: "Otimização contínua",
    description: "O agente evolui com o tempo. Ajustes de fluxo, tom e estratégia conforme os resultados.",
    color: "var(--brand-cyan)",
  },
  {
    icon: BarChart3,
    title: "Relatórios periódicos",
    description: "Métricas de atendimento, conversão e performance entregues com análise real.",
    color: "var(--brand-yellow)",
  },
  {
    icon: MessageSquare,
    title: "Suporte direto",
    description: "Canal aberto com a equipe para ajustes rápidos, dúvidas e novos fluxos.",
    color: "var(--brand-green)",
  },
  {
    icon: Wrench,
    title: "Configuração completa",
    description: "Você não precisa entender de IA. A gente monta, configura e coloca no ar.",
    color: "var(--brand-cyan)",
  },
];

export default function DedicatedManager() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle green radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, var(--brand-green) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-green)" }}
            >
              Diferencial
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Você não contrata{" "}
              <span style={{ color: "var(--brand-cyan)" }}>software.</span>
              <br />
              Você contrata um{" "}
              <span style={{ color: "var(--brand-green)" }}>membro de equipe</span>{" "}
              digital.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Enquanto outros vendem uma ferramenta e somem, a WaveBRAinBot funciona como
              um sócio operacional de IA — presente, estratégico e orientado a resultado.
            </p>
            <p className="text-white/40 text-sm italic leading-relaxed mb-8 pl-4 border-l-2" style={{ borderColor: "var(--brand-green)" }}>
              "IA como ferramenta de amplificação humana, não de substituição.
              A tecnologia potencializa o que o humano faz de melhor — e automatiza o que é repetitivo."
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-black text-sm transition-transform hover:scale-105 glow-green"
              style={{ background: "var(--brand-green)" }}
            >
              Conhecer o modelo de trabalho
            </a>
          </div>

          {/* Right — deliverables */}
          <div className="space-y-4">
            {deliverables.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="flex items-start gap-4 rounded-2xl p-5 bg-white/[0.02] border border-white/8 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${d.color}15`, border: `1px solid ${d.color}25` }}
                  >
                    <Icon size={18} style={{ color: d.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{d.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
