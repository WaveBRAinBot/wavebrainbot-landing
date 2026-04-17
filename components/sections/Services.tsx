import { Bot, BarChart2, Sparkles, Cpu } from "lucide-react";

const services = [
  {
    icon: Bot,
    color: "var(--brand-green)",
    tag: "Produto Principal",
    title: "Agentes IA 24/7",
    description:
      "Agentes configurados com a identidade do seu negócio — atendem, qualificam, encaminham e convertem no WhatsApp a qualquer hora, sem equipe.",
    items: ["Resposta em menos de 3s", "Triagem e qualificação automática", "Tom de voz e personalidade 100% seu", "Encaminhamento estratégico para humano"],
    highlight: true,
  },
  {
    icon: BarChart2,
    color: "var(--brand-cyan)",
    tag: "Crescimento",
    title: "Tráfego Pago",
    description:
      "Gestão de anúncios (Meta Ads e Google Ads) integrada ao funil de atendimento para que cada lead seja capturado e atendido na velocidade certa.",
    items: ["Meta Ads e Google Ads", "Funil e jornada estruturados", "Pipeline organizado", "Otimização contínua"],
    highlight: false,
  },
  {
    icon: Sparkles,
    color: "var(--brand-yellow)",
    tag: "Suporte Visual",
    title: "Criação Visual com IA",
    description:
      "Imagens, criativos e vídeos gerados com IA para campanhas, conteúdo e materiais de vendas — sem depender de agência criativa.",
    items: ["Imagens e criativos com IA", "Vídeos automatizados", "Suporte a campanhas", "Produção escalável"],
    highlight: false,
  },
  {
    icon: Cpu,
    color: "var(--brand-green)",
    tag: "Nível Avançado",
    title: "Infraestrutura de IA",
    description:
      "Para operações que precisam de mais: CRM, automações internas, sites, apps e integrações construídos sobre fundação de IA.",
    items: ["CRM e automações internas", "Sites e apps com IA", "Integrações entre plataformas", "Gestão de IA dedicada"],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-green)" }}
          >
            O que construímos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Uma agência.{" "}
            <span style={{ color: "var(--brand-cyan)" }}>Quatro frentes</span> de
            resultado.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Não vendemos só um chatbot. Construímos a infraestrutura completa de IA
            para o seu negócio crescer com eficiência.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-[24px] p-8 transition-all duration-500 overflow-hidden group hover:-translate-y-1"
                style={{
                  boxShadow: s.highlight ? `0 10px 40px -10px ${s.color}40` : undefined
                }}
              >
                {/* Animated gradient border wrapper */}
                <div 
                  className={`absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 ${s.highlight ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`}
                  style={{ background: `linear-gradient(135deg, ${s.color}, transparent 60%)` }}
                >
                   {/* Inner dark area */}
                   <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 backdrop-blur-xl group-hover:opacity-85" />
                </div>

                {/* Glow on hover inside */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${s.color}15, transparent 60%)` }}
                />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon + tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg"
                      style={{
                        color: s.color,
                        background: `${s.color}12`,
                        border: `1px solid ${s.color}30`,
                        boxShadow: `0 0 15px ${s.color}20`
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
