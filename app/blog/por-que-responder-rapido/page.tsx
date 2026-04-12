import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Por que responder rápido vale mais do que qualquer script de vendas — WaveBRAinBot",
  description:
    "78% dos clientes compram do primeiro que responde. Veja os dados científicos que provam que a velocidade de atendimento é o maior fator de conversão.",
  openGraph: {
    title: "Por que responder rápido vale mais do que qualquer script de vendas",
    description: "A ciência prova: 78% dos clientes compram do primeiro que responde.",
    type: "article",
    locale: "pt_BR",
  },
};

const WA_LINK = "https://wa.me/5513996663009";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          Voltar ao blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(57,255,20,0.12)", color: "var(--brand-green)" }}
            >
              Speed-to-Lead
            </span>
            <span className="text-white/30 text-xs">12 Abr 2026 · 5 min de leitura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Por que responder rápido vale mais do que qualquer script de vendas
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            A ciência prova: 78% dos clientes compram do primeiro que responde.
            Veja os dados que mudam completamente a visão sobre atendimento.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Content */}
        <article className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            Você já perdeu um cliente e não sabia por quê? O produto era bom, o preço era justo, a abordagem estava certa — mas a venda não fechou. Na maioria dos casos, o motivo é mais simples (e mais devastador) do que qualquer falha técnica: <strong className="text-white">você demorou pra responder</strong>.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O dado que muda tudo</h2>
          <p>
            Em 2011, a Harvard Business Review analisou <strong className="text-white">2,24 milhões de leads</strong> e chegou a uma conclusão que o mercado ainda ignora: empresas que respondem em até 1 hora têm <strong className="text-white">7 vezes mais chance de qualificar o lead</strong> do que quem demora mais. E quem demora 24 horas? Sessenta vezes menos chance.
          </p>

          <div
            className="rounded-2xl p-6 my-8"
            style={{ background: "rgba(57,255,20,0.06)", border: "1px solid rgba(57,255,20,0.2)" }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--brand-green)" }}>
              Dados compilados — fontes linkadas abaixo
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { stat: "391%", text: "mais conversão respondendo em 1 minuto (Velocify Research)" },
                { stat: "100x", text: "mais chance de contato em 5 min vs. 30 min (MIT Sloan)" },
                { stat: "78%", text: "dos clientes compram de quem responde primeiro (InsideSales)" },
                { stat: "42h", text: "tempo médio de resposta B2B — 58% nunca respondem (Drift)" },
              ].map((d) => (
                <li key={d.stat} className="flex items-start gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "var(--brand-green)" }}>{d.stat}</span>
                  <span className="text-white/70">{d.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Por que 5 minutos fazem tanta diferença?</h2>
          <p>
            O mesmo estudo do MIT Sloan mostrou que existe uma janela crítica de atenção logo após o lead demonstrar interesse. Nesse momento, ele está com o problema na cabeça, com a intenção ativa e receptivo a uma solução. Passados 30 minutos, esse estado muda. Ele foi distraído, pesquisou outro fornecedor, ou simplesmente esfriou.
          </p>
          <p>
            O conceito de <strong className="text-white">speed-to-lead</strong> não é sobre ser apressado. É sobre respeitar o momento do cliente — e estar presente nele.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O custo real da lentidão</h2>
          <p>
            Vamos fazer uma conta simples. Se sua empresa recebe 30 leads por mês com ticket médio de R$ 500, e você demora em média 2 horas pra responder:
          </p>

          <div
            className="rounded-xl p-5 my-6"
            style={{ background: "rgba(255,68,68,0.06)", border: "1px solid rgba(255,68,68,0.2)" }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "~23", label: "leads perdidos/mês", sub: "pela regra dos 78%" },
                { value: "R$ 11.500", label: "perdidos por mês", sub: "ticket médio R$ 500" },
                { value: "R$ 138.000", label: "por ano desperdiçados", sub: "só pela demora" },
              ].map((i) => (
                <div key={i.label}>
                  <p className="text-xl font-black text-red-400">{i.value}</p>
                  <p className="text-white text-xs font-semibold mt-1">{i.label}</p>
                  <p className="text-white/40 text-xs">{i.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Esses números não são pessimistas — são conservadores. E a solução não é contratar mais atendentes (o custo fixo explode). É automatizar o primeiro contato com inteligência.
          </p>

          <h2 className="text-white text-xl font-black pt-4">A IA como solução estrutural</h2>
          <p>
            Um agente de IA bem configurado responde em menos de 3 segundos, qualifica o lead com perguntas inteligentes, e encaminha para humano apenas quando necessário. Isso não substitui seu time — <strong className="text-white">amplifica</strong> o que ele faz de melhor, eliminando o gargalo da primeira resposta.
          </p>
          <p>
            O cliente que chega às 23h num domingo recebe atenção imediata. O que chega em horário de pico não fica na fila. E seu time acorda de manhã com leads já qualificados, prontos para uma conversa real.
          </p>

          <h2 className="text-white text-xl font-black pt-4">Conclusão</h2>
          <p>
            Nenhum script de vendas compensa uma demora de 2 horas. Nenhuma técnica de fechamento recupera um lead que já foi pro concorrente. A velocidade não é um detalhe — é a fundação. E com IA, ela deixa de ser um esforço para se tornar uma estrutura.
          </p>

          {/* Sources */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Fontes</p>
            <ul className="space-y-1 text-xs text-white/30">
              <li>Velocify Research — velocify.com/blog/lead-response-management</li>
              <li>MIT Sloan / InsideSales — Lead Response Management Study (Dr. James Oldroyd)</li>
              <li>Harvard Business Review — "The Short Life of Online Sales Leads" (2011)</li>
              <li>Drift / InsideSales Lead Response Report — insidesales.com</li>
            </ul>
          </div>
        </article>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{ background: "rgba(57,255,20,0.05)", border: "1px solid rgba(57,255,20,0.2)" }}
        >
          <p className="text-white font-bold mb-2">Pronto para responder em 3 segundos?</p>
          <p className="text-white/50 text-sm mb-4">
            O WaveBRAinBot funciona 24/7 e nunca perde um lead por demora.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex items-center gap-2 text-black font-bold"
            )}
            style={{ background: "var(--brand-green)" }}
          >
            <MessageCircle size={16} />
            Quero meu agente de IA
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
