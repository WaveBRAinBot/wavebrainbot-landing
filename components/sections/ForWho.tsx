import {
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Home,
  Scissors,
  Car,
} from "lucide-react";

const segments = [
  { icon: Stethoscope, label: "Clínicas e Saúde" },
  { icon: ShoppingBag, label: "E-commerce e Varejo" },
  { icon: UtensilsCrossed, label: "Restaurantes e Food" },
  { icon: Dumbbell, label: "Academias e Fitness" },
  { icon: GraduationCap, label: "Educação e Cursos" },
  { icon: Home, label: "Imobiliárias" },
  { icon: Scissors, label: "Beleza e Estética" },
  { icon: Car, label: "Concessionárias" },
];

const qualifiers = [
  "Recebe contatos pelo WhatsApp",
  "Perde leads por demora no atendimento",
  "Quer escalar sem aumentar equipe",
  "Busca mais conversões com menos esforço",
  "Quer atendimento 24/7 sem custo fixo alto",
];

export default function ForWho() {
  return (
    <section id="para-quem" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-cyan)" }}
          >
            Para Quem É
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ideal para qualquer{" "}
            <span style={{ color: "var(--brand-green)" }}>negócio</span> que
            atende pelo WhatsApp
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Se seu cliente manda mensagem no WhatsApp, você precisa de um agente
            de IA.
          </p>
        </div>

        {/* Segments grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {segments.map((s) => (
            <div
              key={s.label}
              className="gradient-border rounded-2xl p-4 flex flex-col items-center gap-3 text-center bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(57,255,20,0.1)" }}
              >
                <s.icon size={22} style={{ color: "var(--brand-green)" }} />
              </div>
              <span className="text-sm text-white/80 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Qualifier list */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Este produto é para você se...
          </h3>
          <div className="space-y-3">
            {qualifiers.map((q) => (
              <div
                key={q}
                className="flex items-center gap-4 gradient-border rounded-xl px-5 py-4 bg-white/[0.02]"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--brand-green)" }}
                />
                <span className="text-white/70 text-sm">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
