import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Custo real de um atendente humano vs bot de IA no WhatsApp — WaveBRAinBot",
  description:
    "Com encargos CLT, um atendente custa R$ 4.375+/mês e trabalha apenas 8h/dia. Veja a conta completa e compare com um agente de IA 24/7.",
  openGraph: {
    title: "Custo Real de um Atendente Humano vs Bot de IA no WhatsApp",
    description: "A conta que ninguém faz — encargos CLT, rotatividade e o que a IA cobre por menos.",
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
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
          <ArrowLeft size={14} />
          Voltar ao blog
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,230,0,0.12)", color: "var(--brand-yellow)" }}>
              Gestão & Custos
            </span>
            <span className="text-white/30 text-xs">12 Abr 2026 · 7 min de leitura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Custo real de um atendente humano vs bot de IA no WhatsApp: a conta que ninguém faz
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Com encargos CLT, um atendente custa mais de R$ 4.000 por mês — e só trabalha 8h/dia. Veja o comparativo completo.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-10" />

        <article className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            Todo mundo sabe que contratar custa caro. Mas poucos fazem a conta completa. O salário aparece no boleto todo mês — os encargos, a rotatividade, o custo de treinamento e o limite de horas ficam invisíveis até você precisar escalar.
          </p>

          <h2 className="text-white text-xl font-black pt-4">A ilusão do "atendente barato"</h2>
          <p>
            Um atendente CLT com salário de R$ 2.500 não custa R$ 2.500. Custa bem mais. O Brasil tem um dos sistemas de encargos trabalhistas mais complexos do mundo, e ignorar esse custo é um erro que cobra caro no final do ano.
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-purple-400">
              Custo real mensal — atendente CLT (salário base R$ 2.500)
            </p>
            <div className="space-y-2 text-sm">
              {[
                ["Salário base", "R$ 2.500"],
                ["FGTS (8%)", "R$ 200"],
                ["INSS patronal (20%)", "R$ 500"],
                ["Provisão 13º salário", "R$ 208"],
                ["Provisão férias + 1/3", "R$ 278"],
                ["Vale transporte (estimado)", "R$ 200"],
                ["Vale refeição (estimado)", "R$ 440"],
                ["Outros (plano saúde, seg. vida…)", "R$ 250"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-white/60">{label}</span>
                  <span className="text-white font-semibold">{value}</span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
                <span className="text-white font-bold">Total mensal</span>
                <span className="font-black text-purple-400 text-base">R$ 4.576</span>
              </div>
            </div>
          </div>

          <p>
            E isso é para um atendente que trabalha <strong className="text-white">176 horas por mês</strong> — de segunda a sexta, em horário comercial. Fins de semana, feriados e madrugadas ficam descobertos. A menos que você contrate mais um.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O que os números escondem</h2>
          <p>
            Além do custo fixo, existe o custo variável que pouca empresa quantifica:
          </p>
          <ul className="list-none space-y-2 pl-0">
            {[
              "Rotatividade no setor de atendimento no Brasil chega a 40% ao ano (ABRH) — custo de substituição equivale a 1,5× o salário mensal",
              "Tempo de treinamento de um novo atendente: 2 a 4 semanas de produtividade reduzida",
              "Um atendente humano gerencia no máximo 5 a 8 conversas simultâneas — em dias de pico, filas se formam",
              "Erros, respostas inconsistentes e tom de voz fora do padrão são inevitáveis sem supervisão constante",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-white text-xl font-black pt-4">O custo de um agente de IA no WhatsApp</h2>
          <p>
            Um agente bem configurado tem custo previsível, sem surpresas no fim do mês:
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ background: "rgba(57,255,20,0.06)", border: "1px solid rgba(57,255,20,0.2)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--brand-green)" }}>
              Custo mensal — agente IA WaveBRAinBot
            </p>
            <div className="space-y-2 text-sm">
              {[
                ["Plano mensal (Essencial)", "R$ 799"],
                ["Encargos trabalhistas", "R$ 0"],
                ["Férias / 13º / FGTS", "R$ 0"],
                ["Treinamento", "R$ 0"],
                ["Horas extras / fins de semana", "R$ 0"],
                ["Rotatividade", "R$ 0"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-white/60">{label}</span>
                  <span className="font-semibold" style={{ color: value === "R$ 0" ? "rgba(255,255,255,0.3)" : "var(--brand-green)" }}>{value}</span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
                <span className="text-white font-bold">Total mensal</span>
                <span className="font-black text-lg" style={{ color: "var(--brand-green)" }}>R$ 799</span>
              </div>
            </div>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Comparativo direto</h2>

          <div className="rounded-xl overflow-hidden my-6" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th className="text-left p-3 text-white/60 font-semibold">Critério</th>
                  <th className="text-center p-3 text-white/60 font-semibold">Atendente CLT</th>
                  <th className="text-center p-3 font-semibold" style={{ color: "var(--brand-green)" }}>Agente IA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Custo mensal", "R$ 4.576+", "R$ 799"],
                  ["Disponibilidade", "176h/mês (úteis)", "720h/mês (24/7)"],
                  ["Conversas simultâneas", "5–8 no máximo", "Ilimitadas"],
                  ["Consistência de tom", "Variável", "100% padronizado"],
                  ["Treinamento", "2–4 semanas", "Incluído no setup"],
                  ["Rotatividade", "40%/ano", "Zero"],
                  ["Escalabilidade", "Contratar mais", "Automática"],
                ].map(([crit, human, ai]) => (
                  <tr key={crit} style={{ background: "rgba(255,255,255,0.01)" }}>
                    <td className="p-3 text-white/70">{crit}</td>
                    <td className="p-3 text-center text-purple-400">{human}</td>
                    <td className="p-3 text-center font-semibold" style={{ color: "var(--brand-green)" }}>{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Quando ainda faz sentido manter humanos</h2>
          <p>
            A IA não substitui tudo — e saber onde ela não deve atuar é tão importante quanto saber onde ela brilha. Situações complexas, negociações de alto valor e relacionamentos de longo prazo ainda se beneficiam de toque humano. O modelo que funciona é <strong className="text-white">IA na linha de frente, humano no fechamento</strong>.
          </p>
          <p>
            Empresas que implementaram automação no atendimento relatam redução de <strong className="text-white">50 a 80% no volume de atendimentos humanos</strong> — liberando a equipe para o que realmente importa (McKinsey, 2023).
          </p>

          <h2 className="text-white text-xl font-black pt-4">Conclusão</h2>
          <p>
            A pergunta não é "IA ou humano?" — é "quanto cada conversa de baixo valor está custando para o seu negócio?" Se a resposta for mais de R$ 26/hora (o que um atendente CLT custa na prática), a conta já fechou.
          </p>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Fontes</p>
            <ul className="space-y-1 text-xs text-white/30">
              <li>ABRH — Taxa de rotatividade no setor de atendimento, 2023</li>
              <li>McKinsey — The State of AI in 2023: Business automation impact</li>
              <li>Glassdoor / Catho — Salário médio atendente/SDR Brasil, 2024</li>
              <li>Salesforce — State of Service Report, 2024</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: "rgba(57,255,20,0.05)", border: "1px solid rgba(57,255,20,0.2)" }}>
          <p className="text-white font-bold mb-2">Veja quanto você pode economizar</p>
          <p className="text-white/50 text-sm mb-4">Diagnóstico gratuito — sem compromisso.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "inline-flex items-center gap-2 text-black font-bold")}
            style={{ background: "var(--brand-green)" }}>
            <MessageCircle size={16} />
            Quero meu agente de IA
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
