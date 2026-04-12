import { CheckCircle2 } from "lucide-react";

const features = [
  "Responde perguntas frequentes automaticamente",
  "Qualifica leads com perguntas inteligentes",
  "Agenda compromissos e reuniões",
  "Envia catálogos, preços e propostas",
  "Encaminha para humano quando necessário",
  "Coleta dados e salva no CRM automaticamente",
  "Envia follow-ups e recupera carrinho",
  "Multilingue e adaptável ao contexto",
];

export default function AgentFeatures() {
  return (
    <section id="agente" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Simulated chat UI */}
            <div className="gradient-border rounded-3xl p-1">
              <div className="bg-[#111] rounded-3xl p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black"
                    style={{ background: "var(--brand-green)" }}
                  >
                    IA
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      WaveBRAinBot
                    </p>
                    <p className="text-xs" style={{ color: "var(--brand-green)" }}>
                      ● Online
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 py-2">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-white/80 text-sm">
                        Olá! 👋 Quero saber mais sobre os planos
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:32</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%]"
                      style={{ background: "rgba(57,255,20,0.15)" }}
                    >
                      <p className="text-white text-sm">
                        Olá! Sou o assistente da WaveBRAinBot 🤖 Temos 3 planos:
                        Essencial, Performance e Automation. Qual é o seu tipo
                        de negócio?
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:32 ✓✓</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-white/80 text-sm">
                        Tenho uma clínica odontológica
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:33</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%]"
                      style={{ background: "rgba(57,255,20,0.15)" }}
                    >
                      <p className="text-white text-sm">
                        Perfeito! Para clínicas, recomendo o plano Performance —
                        ele inclui agendamento automático e qualificação de
                        leads. Posso agendar uma call de diagnóstico gratuita?
                        📅
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:33 ✓✓</p>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl -z-10"
              style={{ background: "var(--brand-green)" }}
            />
          </div>

          {/* Right - Features list */}
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-green)" }}
            >
              Capacidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              O que seu{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Agente de IA</span>{" "}
              faz
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Muito mais que um chatbot. É um agente inteligente que entende
              contexto, aprende com o tempo e age de forma autônoma.
            </p>

            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--brand-green)" }}
                  />
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
