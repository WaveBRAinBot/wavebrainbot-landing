const steps = [
  {
    number: "01",
    title: "Diagnóstico e Configuração",
    description:
      "Entendemos seu negócio, mapeamos os fluxos de atendimento e configuramos o agente com sua identidade de marca.",
    duration: "3–7 dias",
  },
  {
    number: "02",
    title: "Treinamento e Personalização",
    description:
      "O agente aprende sobre seus produtos, serviços, preços e FAQs. Ajustamos tom de voz e fluxos de conversa.",
    duration: "2–5 dias",
  },
  {
    number: "03",
    title: "Integração ao WhatsApp",
    description:
      "Conectamos o agente ao seu número do WhatsApp Business. Testamos todos os cenários antes do go-live.",
    duration: "1–2 dias",
  },
  {
    number: "04",
    title: "Lançamento e Otimização",
    description:
      "Agente no ar! Monitoramos os resultados, ajustamos respostas e otimizamos continuamente para mais conversões.",
    duration: "Contínuo",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-cyan)" }}
          >
            Processo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Como{" "}
            <span style={{ color: "var(--brand-green)" }}>funciona</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Em menos de 2 semanas seu negócio já está atendendo com IA.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[var(--brand-green)] via-[var(--brand-cyan)] to-transparent hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-6 lg:gap-10 items-start"
              >
                {/* Number bubble */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-lg z-10"
                  style={{
                    background: i % 2 === 0 ? "var(--brand-green)" : "var(--brand-cyan)",
                    color: "#0a0a0a",
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative rounded-[24px] p-6 flex-1 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-1">
                  {/* Animated gradient border wrapper */}
                  <div 
                    className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-100"
                    style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? "var(--brand-green)" : "var(--brand-cyan)"}, transparent 50%)` }}
                  >
                     {/* Inner dark area */}
                     <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 backdrop-blur-xl group-hover:opacity-80" />
                  </div>

                  {/* Inner Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 0% 50%, ${i % 2 === 0 ? "var(--brand-green)" : "var(--brand-cyan)"}15, transparent 60%)` }}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 shadow-lg"
                      style={{
                        background: "rgba(57,255,20,0.1)",
                        color: "var(--brand-green)",
                        border: "1px solid rgba(57,255,20,0.2)"
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
