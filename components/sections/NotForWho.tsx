import { X, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const notFor = [
  "Quer resultado sem ter processo nenhum",
  "Não tem produto ou serviço definido ainda",
  "Busca 'mágica' — promessas sem base real",
  "Não quer acompanhar métricas ou relatórios",
  "Prefere atender tudo manualmente sem mudar",
];

const yesFor = [
  "Quer parar de perder leads por lentidão",
  "Está pronto para escalar com estrutura",
  "Entende que IA é ferramenta, não substituição",
  "Quer atendimento profissional 24/7",
  "Busca eficiência mensurável e crescimento real",
];

export default function NotForWho() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-cyan)" }}>
            Transparência
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Somos diretos:{" "}
            <span style={{ color: "#ff4444" }}>não somos pra todo mundo</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Não prometemos milagres. Entregamos estrutura e eficiência mensurável —
            para quem está pronto pra isso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* NÃO É PRA VOCÊ */}
          <div className="rounded-2xl p-6 border border-red-500/20 bg-red-500/[0.04]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="text-white font-bold">Não é pra você se...</h3>
            </div>
            <ul className="space-y-3">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* É PRA VOCÊ */}
          <div
            className="rounded-2xl p-6"
            style={{
              border: "1px solid rgba(57,255,20,0.25)",
              background: "rgba(57,255,20,0.04)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(57,255,20,0.15)" }}
              >
                <Check size={16} style={{ color: "var(--brand-green)" }} />
              </div>
              <h3 className="text-white font-bold">É pra você se...</h3>
            </div>
            <ul className="space-y-3">
              {yesFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-green)" }} />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          "Sistema {'>'} improviso. Estrutura {'>'} criatividade aleatória. Dados {'>'} opinião." — Filosofia WaveBRAinBot
        </p>
      </div>
    </section>
  );
}
