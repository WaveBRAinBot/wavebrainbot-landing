import Link from "next/link";
import { ArrowRight, Cog, Users, CreditCard } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface TeaserCard {
  icon: LucideIcon;
  color: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}

const cards: TeaserCard[] = [
  {
    icon: Cog,
    color: "var(--brand-green)",
    eyebrow: "Tecnologia",
    title: "Como Funciona",
    description:
      "Veja a arquitetura do agente, as features de IA e o processo de onboarding completo.",
    href: "/como-funciona",
  },
  {
    icon: Users,
    color: "var(--brand-cyan)",
    eyebrow: "Adequação",
    title: "Para Quem É",
    description:
      "Descubra os nichos atendidos, quem se beneficia e quem não é o perfil ideal para o WaveBRAinBot.",
    href: "/para-quem",
  },
  {
    icon: CreditCard,
    color: "var(--brand-yellow)",
    eyebrow: "Investimento",
    title: "Planos e Preços",
    description:
      "Compare os planos, veja as garantias de segurança e tire suas dúvidas no FAQ.",
    href: "/precos",
  },
];

export default function SectionTeaser() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-green)" }}
          >
            Explore Tudo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Tudo que você precisa{" "}
            <span style={{ color: "var(--brand-cyan)" }}>saber</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Navegue pelas seções e descubra como o WaveBRAinBot pode transformar
            o seu atendimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 flex flex-col gap-5"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  <Icon size={22} style={{ color: card.color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: card.color }}
                  >
                    {card.eyebrow}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: card.color }}>
                  <span>Saiba mais</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
