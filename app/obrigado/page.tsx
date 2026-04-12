import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mensagem Enviada — WaveBRAinBot",
  description: "Recebemos seu contato. Em breve nossa equipe vai falar com você.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: Clock,
    title: "Resposta em minutos",
    desc: "Nossa equipe responde no WhatsApp em menos de 1h durante horário comercial.",
    color: "var(--brand-green)",
  },
  {
    icon: MessageCircle,
    title: "Diagnóstico gratuito",
    desc: "Vamos entender seu negócio e mostrar como o agente pode funcionar para você.",
    color: "var(--brand-cyan)",
  },
  {
    icon: CheckCircle2,
    title: "Sem compromisso",
    desc: "A conversa é informativa. Você decide se faz sentido avançar ou não.",
    color: "var(--brand-yellow)",
  },
];

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      {/* GA4 conversion event */}
      <Script id="ga-conversion" strategy="afterInteractive">{`
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion', { event_category: 'lead', event_label: 'whatsapp_click' });
        }
      `}</Script>
      {/* Meta Pixel conversion event */}
      <Script id="meta-conversion" strategy="afterInteractive">{`
        if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead');
        }
      `}</Script>
      {/* Glow central */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(57,255,20,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-xl w-full text-center relative z-10 py-16">
        {/* Check icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(57,255,20,0.12)",
            border: "2px solid rgba(57,255,20,0.4)",
            boxShadow: "0 0 40px rgba(57,255,20,0.2)",
          }}
        >
          <CheckCircle2 size={36} style={{ color: "var(--brand-green)" }} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Mensagem enviada!
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          Ótimo passo. Agora é com a gente — vamos falar com você em breve
          para entender seu negócio e mostrar como o WaveBRAinBot pode trabalhar para você.
        </p>

        {/* Next steps */}
        <div className="space-y-3 mb-10 text-left">
          {nextSteps.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-4 rounded-xl p-4 bg-white/[0.03] border border-white/[0.07]"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}15` }}
              >
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{s.title}</p>
                <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "text-white border-white/20 hover:bg-white/5 inline-flex items-center gap-2"
            )}
          >
            Voltar ao site
          </Link>
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-black inline-flex items-center gap-2"
            )}
            style={{ background: "var(--brand-green)" }}
          >
            Ler nosso blog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
