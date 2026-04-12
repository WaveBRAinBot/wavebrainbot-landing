import { Clock, TrendingUp, Users, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description:
      "Nunca mais perca um lead por demora. Seu agente responde instantaneamente a qualquer hora, todos os dias.",
    color: "var(--brand-green)",
  },
  {
    icon: TrendingUp,
    title: "Mais Conversões",
    description:
      "Qualifique leads automaticamente e encaminhe os mais quentes para seu time fechar negócio.",
    color: "var(--brand-cyan)",
  },
  {
    icon: Users,
    title: "Escala Sem Equipe",
    description:
      "Atenda centenas de clientes simultaneamente sem precisar contratar mais pessoas.",
    color: "var(--brand-yellow)",
  },
  {
    icon: Zap,
    title: "Resposta em Segundos",
    description:
      "Clientes recebem respostas em até 3 segundos. Zero tempo de espera, máxima satisfação.",
    color: "var(--brand-green)",
  },
  {
    icon: Shield,
    title: "Personalizado para Você",
    description:
      "Tom de voz, linguagem e fluxos 100% adaptados à sua marca e tipo de negócio.",
    color: "var(--brand-cyan)",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description:
      "Acompanhe métricas de atendimento, conversão e satisfação em tempo real.",
    color: "var(--brand-yellow)",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-green)" }}
          >
            Por que escolher
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Benefícios que{" "}
            <span style={{ color: "var(--brand-cyan)" }}>transformam</span> seu
            negócio
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Enquanto você dorme, seu agente de IA trabalha captando, qualificando
            e convertendo clientes no WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="gradient-border rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${b.color}15` }}
              >
                <b.icon size={22} style={{ color: b.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
