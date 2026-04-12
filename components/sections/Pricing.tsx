import { CheckCircle2, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WA_LINK = "https://wa.me/5513996663009";

const plans = [
  {
    name: "Essencial",
    focus: "Base Operacional",
    tagline: "Nunca mais perca lead por demora",
    price: "799",
    setup: "700",
    features: [
      "Agente IA de suporte e resposta",
      "Respostas imediatas 24/7",
      "Relatórios de atendimento",
      "Gestão e otimização contínua",
      "Gestor de IA dedicado",
    ],
    highlight: false,
  },
  {
    name: "Performance",
    focus: "Crescimento Estratégico",
    tagline: "Captação, qualificação e conversão",
    price: "1.499",
    setup: "1.000",
    features: [
      "Tudo do Essencial +",
      "Qualificação avançada de leads",
      "Pré-venda e pré-agendamento",
      "Estratégia de conversão com IA",
      "Encaminhamento inteligente para humano",
      "Tráfego pago (Meta e Google)",
    ],
    highlight: true,
  },
  {
    name: "Automation",
    focus: "Escala Total",
    tagline: "Operação quase autônoma com IA",
    price: "2.499",
    setup: "1.400",
    features: [
      "Tudo do Performance +",
      "Agente autônomo avançado",
      "Fluxos multi-etapa completos",
      "Automação completa de processos",
      "Gestão avançada e relatórios premium",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-green)" }}
          >
            Planos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Escolha o plano{" "}
            <span style={{ color: "var(--brand-cyan)" }}>certo</span> para você
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Sem fidelidade longa. Cancele quando quiser. Setup único no início.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "glow-green scale-[1.02]"
                  : "bg-white/[0.03] border border-white/10"
              }`}
              style={
                plan.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, rgba(0,229,255,0.05) 100%)",
                      border: "1px solid rgba(57,255,20,0.3)",
                    }
                  : {}
              }
            >
              {plan.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1"
                  style={{ background: "var(--brand-green)" }}
                >
                  <Star size={12} fill="currentColor" />
                  Mais Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: plan.highlight ? "var(--brand-green)" : "var(--brand-cyan)" }}
                >
                  {plan.focus}
                </p>
                <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                <p className="text-white/50 text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-white/50 text-lg">R$</span>
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-white/50">/mês</span>
                </div>
                <p className="text-white/40 text-xs mt-1">
                  + R$ {plan.setup} setup único
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        color: plan.highlight ? "var(--brand-green)" : "var(--brand-cyan)",
                      }}
                    />
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: plan.highlight ? "default" : "outline" }),
                  "w-full font-bold justify-center",
                  plan.highlight ? "text-black" : "text-white border-white/20"
                )}
                style={plan.highlight ? { background: "var(--brand-green)" } : {}}
              >
                Começar agora
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          Não trabalhamos com fidelidade longa. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
}
