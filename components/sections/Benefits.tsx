import { Clock, TrendingUp, Users, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Operação 24/7",
    description:
      "Seu negócio atende, qualifica e converte enquanto você dorme. Sem plantão, sem horas extras, sem lead perdido por demora.",
    color: "var(--brand-green)",
  },
  {
    icon: TrendingUp,
    title: "Mais Conversões",
    description:
      "Leads qualificados automaticamente e encaminhados no momento certo para fechar — funil de vendas funcionando sozinho.",
    color: "var(--brand-cyan)",
  },
  {
    icon: Users,
    title: "Escala Sem Equipe",
    description:
      "Atenda centenas de clientes simultaneamente. A IA absorve o volume operacional enquanto seu time foca em estratégia.",
    color: "var(--brand-yellow)",
  },
  {
    icon: Zap,
    title: "Resposta em 3 Segundos",
    description:
      "Zero tempo de espera. O cliente entra em contato e já recebe resposta — 100x mais rápido que qualquer atendente humano.",
    color: "var(--brand-green)",
  },
  {
    icon: Shield,
    title: "100% Personalizado",
    description:
      "Tom de voz, identidade e fluxos totalmente adaptados. O agente apresenta a sua marca — não uma IA genérica.",
    color: "var(--brand-cyan)",
  },
  {
    icon: BarChart3,
    title: "Performance Mensurável",
    description:
      "Relatórios de atendimento, conversão e resultado entregues com análise real do gestor de IA dedicado.",
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
            Infraestrutura que{" "}
            <span style={{ color: "var(--brand-cyan)" }}>amplifica</span> sua
            operação
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Eficiência não é fazer mais esforço. É ter o sistema certo trabalhando no lugar certo, na hora certa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="relative rounded-[24px] p-6 transition-all duration-500 overflow-hidden group shadow-md hover:shadow-2xl hover:-translate-y-1"
              style={{
                boxShadow: `0 5px 30px -10px ${b.color}20`
              }}
            >
              {/* Animated gradient border wrapper */}
              <div 
                className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-100"
                style={{ background: `linear-gradient(135deg, ${b.color}, transparent 50%)` }}
              >
                 {/* Inner dark area */}
                 <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 backdrop-blur-xl group-hover:opacity-80" />
              </div>

              {/* Glow on hover inside */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 100%, ${b.color}15, transparent 60%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-500"
                  style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}
                >
                  <b.icon size={22} style={{ color: b.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
