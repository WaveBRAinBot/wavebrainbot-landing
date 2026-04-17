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
                className="relative rounded-[24px] p-4 flex flex-col items-center gap-3 text-center transition-all duration-500 overflow-hidden group hover:-translate-y-1 shadow-md hover:shadow-xl"
                style={{ boxShadow: "0 5px 30px -10px rgba(57,255,20,0.15)" }}
              >
                {/* Animated gradient border wrapper */}
                <div 
                  className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, var(--brand-green), transparent 50%)" }}
                >
                   {/* Inner dark area */}
                   <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 backdrop-blur-xl group-hover:opacity-80" />
                </div>

                {/* Inner Glow hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 100%, rgba(57,255,20,0.15), transparent 60%)" }}
                />

                <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                    style={{ background: "rgba(57,255,20,0.15)", border: "1px solid rgba(57,255,20,0.3)" }}
                  >
                    <s.icon size={22} style={{ color: "var(--brand-green)" }} />
                  </div>
                  <span className="text-sm text-white/80 font-semibold">{s.label}</span>
                </div>
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
                className="relative rounded-xl px-5 py-4 transition-all duration-300 overflow-hidden group shadow-md"
              >
                <div 
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, rgba(57,255,20,0.8), transparent 40%)" }}
                >
                   <div className="absolute inset-[1px] rounded-[11px] bg-[#0a0a0a] opacity-90 backdrop-blur-md" />
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_var(--brand-green)]"
                    style={{ background: "var(--brand-green)" }}
                  />
                  <span className="text-white/80 font-medium text-sm">{q}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
