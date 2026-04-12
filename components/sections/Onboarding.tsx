const steps = [
  {
    day: "Dia 1–2",
    title: "Diagnóstico",
    description:
      "Call de alinhamento: entendemos seu negócio, público, objeções comuns, tom de voz e fluxos de atendimento ideais.",
    icon: "🔍",
    color: "var(--brand-green)",
  },
  {
    day: "Dia 3–5",
    title: "Construção do Agente",
    description:
      "Configuramos o agente com sua identidade de marca, base de conhecimento, respostas e fluxos inteligentes.",
    icon: "🧠",
    color: "var(--brand-cyan)",
  },
  {
    day: "Dia 6–10",
    title: "Testes e Ajustes",
    description:
      "Simulamos dezenas de cenários reais. Ajustamos tom, respostas e lógica até estar impecável antes do lançamento.",
    icon: "⚡",
    color: "var(--brand-yellow)",
  },
  {
    day: "Dia 11–14",
    title: "Go Live",
    description:
      "Agente conectado ao seu WhatsApp. Monitoramos as primeiras interações em tempo real e ajustamos imediatamente.",
    icon: "🚀",
    color: "var(--brand-green)",
  },
  {
    day: "Contínuo",
    title: "Gestão e Otimização",
    description:
      "Relatórios mensais, ajustes de fluxo, expansão de capacidades. Seu gestor de IA dedicado nunca para de melhorar.",
    icon: "📈",
    color: "var(--brand-cyan)",
  },
];

export default function Onboarding() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-green)" }}>
            Do contrato ao agente no ar
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Em{" "}
            <span style={{ color: "var(--brand-cyan)" }}>menos de 2 semanas</span>{" "}
            seu negócio atende com IA
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Processo estruturado, sem surpresas. Você sabe exatamente o que acontece em cada etapa.
          </p>
        </div>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha vertical conectora */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--brand-green), var(--brand-cyan), var(--brand-yellow), var(--brand-green), var(--brand-cyan))",
            }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.day} className="flex gap-5 sm:gap-8 items-start relative">
                {/* Icon bubble */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 border-2"
                  style={{
                    background: "#0a0a0a",
                    borderColor: step.color,
                    boxShadow: `0 0 16px ${step.color}40`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-5 group hover:bg-white/[0.04] transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid rgba(255,255,255,0.07)`,
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                    <h3 className="text-white font-bold text-base">{step.title}</h3>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: `${step.color}15`,
                        color: step.color,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      {step.day}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>

                  {/* Progress bar decorativa */}
                  <div className="mt-3 h-0.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: i === 4 ? "100%" : `${(i + 1) * 20}%`,
                        background: `linear-gradient(to right, ${step.color}, ${step.color}80)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Nenhuma linha de código da sua parte. Cuidamos de tudo.
          </p>
        </div>
      </div>
    </section>
  );
}
