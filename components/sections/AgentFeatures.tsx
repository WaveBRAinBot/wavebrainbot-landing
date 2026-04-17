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
          <div className="relative group perspective">
            {/* Simulated chat UI */}
            <div className="relative rounded-[24px] p-1 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              {/* Glowing gradient border */}
              <div 
                className="absolute inset-0 rounded-[24px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, var(--brand-green), transparent 80%)` }}
              >
                 <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] opacity-90 backdrop-blur-md" />
              </div>

              <div className="relative z-10 bg-[#111]/80 backdrop-blur-xl rounded-[22px] p-4 space-y-3 border border-white/5">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                    style={{ background: "var(--brand-green)" }}
                  >
                    IA
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      WaveBRAinBot
                    </p>
                    <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--brand-green)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-green)] animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 py-2">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] shadow-sm">
                      <p className="text-white/80 text-sm">
                        Olá! 👋 Quero saber mais sobre os planos
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:32</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] shadow-md"
                      style={{ background: "rgba(57,255,20,0.15)", border: "1px solid rgba(57,255,20,0.2)" }}
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
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] shadow-sm">
                      <p className="text-white/80 text-sm">
                        Tenho uma clínica odontológica
                      </p>
                      <p className="text-white/30 text-xs mt-1">14:33</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] shadow-md"
                      style={{ background: "rgba(57,255,20,0.15)", border: "1px solid rgba(57,255,20,0.2)" }}
                    >
                      <p className="text-white text-sm">
                        Perfeito! Para clínicas, recomendo o plano Performance —
                        ele inclui agendamento automático e qualificação de
                        leads. Posso agendar uma call de diagnóstico gratuita?
                        📅
                      </p>
                      <p className="text-white/30 text-xs mt-1 tracking-widest">14:33 <span style={{ color: "var(--brand-cyan)" }}>✓✓</span></p>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 shadow-sm">
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
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity duration-700"
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
