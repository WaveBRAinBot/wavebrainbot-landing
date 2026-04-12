import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5513996663009";

const niches = [
  {
    emoji: "🏥",
    label: "Clínicas & Saúde",
    priority: "Nicho #1",
    color: "var(--brand-green)",
    problem: "Perdem pacientes por demora na resposta e falta de agendamento automático.",
    pains: [
      "Lead chega às 23h, ninguém atende",
      "Recepcionista sobrecarregada com perguntas repetidas",
      "Agendamento manual e remarcações constantes",
      "Paciente liga pro concorrente se não receber retorno em minutos",
    ],
    solution: "Agente agenda consultas 24/7, responde dúvidas sobre procedimentos, filtra urgências e encaminha para humano quando necessário.",
    result: "Mais agendamentos, menos cancelamentos, equipe focada no atendimento presencial.",
  },
  {
    emoji: "🏠",
    label: "Imobiliárias",
    priority: "Nicho #2",
    color: "var(--brand-cyan)",
    problem: "Lead de tráfego pago é caro — perdê-lo por lentidão é dinheiro no lixo.",
    pains: [
      "Leads de anúncio chegam fora do horário comercial",
      "Corretor leva horas pra responder uma proposta",
      "Sem triagem: não sabe se o lead é sério antes do contato",
      "Nenhum follow-up estruturado após o primeiro contato",
    ],
    solution: "Agente qualifica o lead (bairro, faixa de preço, prazo), envia portfólio filtrado e agenda visita — antes do concorrente sequer ver a mensagem.",
    result: "Leads qualificados chegam pro corretor prontos para visita. Zero lead perdido por demora.",
  },
  {
    emoji: "⚖️",
    label: "Escritórios de Advocacia",
    priority: "Nicho #3",
    color: "var(--brand-yellow)",
    problem: "Clientes de alto valor não esperam — e o setor jurídico ainda ignora isso.",
    pains: [
      "Potencial cliente envia mensagem e não recebe resposta no mesmo dia",
      "Secretária não consegue triagem técnica de área do direito",
      "Sem agendamento de consulta inicial automatizado",
      "Leads qualificados perdidos para escritórios que respondem mais rápido",
    ],
    solution: "Agente faz triagem por área jurídica, explica o processo inicial da consulta, agenda horário e mantém comunicação até a reunião.",
    result: "Mais clientes captados, menos tempo do advogado em triagem, consultas iniciais sempre preenchidas.",
  },
];

export default function Niches() {
  return (
    <section id="nichos" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-green)" }}>
            Especialização
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Conhecimento profundo nos{" "}
            <span style={{ color: "var(--brand-cyan)" }}>nichos certos</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Não somos generalistas. Temos expertise real nesses 3 segmentos —
            e isso faz toda a diferença na qualidade do agente.
          </p>
        </div>

        <div className="space-y-6">
          {niches.map((niche, i) => (
            <div
              key={niche.label}
              className="relative rounded-3xl p-6 sm:p-8 overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${niche.color}25`,
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at ${i % 2 === 0 ? "0% 50%" : "100% 50%"}, ${niche.color}08 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left — identity */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{niche.emoji}</span>
                    <div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full block mb-1"
                        style={{ background: `${niche.color}15`, color: niche.color }}
                      >
                        {niche.priority}
                      </span>
                      <h3 className="text-white font-black text-xl">{niche.label}</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{niche.problem}</p>
                </div>

                {/* Middle — dores */}
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Dores típicas</p>
                  <ul className="space-y-2">
                    {niche.pains.map((pain) => (
                      <li key={pain} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 text-xs flex-shrink-0">✗</span>
                        <span className="text-white/60 text-sm">{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — solução + resultado */}
                <div className="flex flex-col justify-between gap-4">
                  <div
                    className="rounded-xl p-4"
                    style={{ background: `${niche.color}08`, border: `1px solid ${niche.color}20` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: niche.color }}>
                      Como resolvemos
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{niche.solution}</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white/[0.02]">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/40">
                      Resultado esperado
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{niche.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">Seu segmento não está aqui? Atendemos outros nichos também.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex items-center gap-2 text-white border-white/20 hover:bg-white/5"
            )}
          >
            <MessageCircle size={16} />
            Falar sobre meu negócio
          </a>
        </div>
      </div>
    </section>
  );
}
