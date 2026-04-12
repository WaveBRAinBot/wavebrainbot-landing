import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Como a IA no WhatsApp reduz faltas em clínicas e consultórios — WaveBRAinBot",
  description:
    "Clínicas perdem até 30% das consultas com faltas. Veja como lembretes automáticos e reagendamento por IA recuperam até 60% dessas consultas.",
  openGraph: {
    title: "Como a IA no WhatsApp Reduz Faltas em Clínicas e Consultórios",
    description: "Faltas custam até R$ 600 por consulta. A IA resolve isso com confirmação automática 24/7.",
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
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,229,255,0.12)", color: "var(--brand-cyan)" }}>
              Clínicas & Saúde
            </span>
            <span className="text-white/30 text-xs">12 Abr 2026 · 6 min de leitura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Como a IA no WhatsApp reduz faltas e cancela menos na sua clínica ou consultório
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Clínicas brasileiras perdem até 30% das consultas com faltas. A IA resolve — com confirmação automática, reagendamento e pré-consulta pelo WhatsApp.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-10" />

        <article className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            Você agenda, confirma na secretaria, separa o prontuário — e o paciente não aparece. Pior: não avisa. A consulta fica vazia, o horário é perdido e o faturamento vai junto. Isso acontece em toda clínica, toda semana. Mas não precisa.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O problema real: quanto sua clínica perde com faltas</h2>
          <p>
            A taxa média de faltas em clínicas brasileiras fica entre <strong className="text-white">20% e 30%</strong> das consultas agendadas — dado consistente em estudos do CFM e plataformas como iClinic e Doctoralia. Em uma agenda com 20 consultas por dia, isso significa 4 a 6 horários vazios diariamente.
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ background: "rgba(255,68,68,0.06)", border: "1px solid rgba(255,68,68,0.2)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-red-400">Exemplo: clínica com 20 consultas/dia</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "~5", label: "faltas por dia", sub: "taxa média de 25%" },
                { value: "~100", label: "faltas por mês", sub: "20 dias úteis" },
                { value: "R$ 25.000", label: "perdidos/mês", sub: "ticket médio R$ 250" },
              ].map((i) => (
                <div key={i.label}>
                  <p className="text-xl font-black text-red-400">{i.value}</p>
                  <p className="text-white text-xs font-semibold mt-1">{i.label}</p>
                  <p className="text-white/40 text-xs">{i.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Por que ligações e SMS já não funcionam</h2>
          <p>
            A secretaria liga, cai no voicemail. Manda SMS, o paciente não responde. O problema não é falta de esforço — é canal errado. <strong className="text-white">73% dos pacientes</strong> preferem confirmar ou cancelar consultas via mensagem ao invés de ligação (Doctoralia Brasil, 2023). E a mensagem que eles leem é o WhatsApp: taxa de abertura de <strong className="text-white">98%</strong> em até 5 minutos.
          </p>

          <h2 className="text-white text-xl font-black pt-4">Como funciona um fluxo de confirmação inteligente</h2>
          <p>
            Um agente de IA configurado para clínicas vai muito além de mandar um lembrete. Ele conduz uma conversa:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white">48h antes:</strong> envia lembrete com data, horário e nome do médico — pergunta se o paciente confirma</li>
            <li><strong className="text-white">Confirmação:</strong> registra e envia informações de preparo (jejum, documentos, localização)</li>
            <li><strong className="text-white">Cancelamento:</strong> oferece reagendamento imediato com horários disponíveis</li>
            <li><strong className="text-white">Sem resposta:</strong> envia segundo lembrete 24h antes — e avisa a secretaria para priorizar aquele contato</li>
            <li><strong className="text-white">Dia da consulta:</strong> lembrete final 2h antes com localização e link do Google Maps</li>
          </ol>

          <div className="rounded-2xl p-6 my-8" style={{ background: "rgba(57,255,20,0.06)", border: "1px solid rgba(57,255,20,0.2)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--brand-green)" }}>
              Resultados relatados por clínicas com automação
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { stat: "40%", text: "de redução média em faltas (iClinic / Doctoralia, 2023)" },
                { stat: "60%", text: "das consultas canceladas recuperadas via reagendamento automático" },
                { stat: "73%", text: "dos pacientes preferem confirmar por mensagem vs. ligação" },
                { stat: "< R$ 0,10", text: "custo por mensagem enviada — vs. R$ 250+ de consulta perdida" },
              ].map((d) => (
                <li key={d.stat} className="flex items-start gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "var(--brand-green)" }}>{d.stat}</span>
                  <span className="text-white/70">{d.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Além do lembrete: triagem e pré-consulta</h2>
          <p>
            Clínicas mais avançadas usam o agente para coletar informações antes da consulta: sintomas principais, histórico relevante, documentos necessários. O médico entra na sala com contexto — a consulta é mais objetiva, o paciente percebe mais qualidade.
          </p>
          <p>
            Isso também reduz o tempo de espera: quando o paciente chega já com dados preenchidos, a secretaria apenas valida e direciona.
          </p>

          <h2 className="text-white text-xl font-black pt-4">Como implementar sem mudar seu sistema atual</h2>
          <p>
            A boa notícia: você não precisa trocar sua agenda. O agente se integra com os principais sistemas de agendamento usados em clínicas brasileiras. O fluxo é configurado uma vez, e passa a rodar automaticamente para todos os agendamentos novos.
          </p>
          <p>
            O setup leva de 3 a 10 dias dependendo da complexidade — e a partir daí, funciona sem intervenção da equipe para o ciclo básico de confirmação.
          </p>

          <h2 className="text-white text-xl font-black pt-4">Conclusão</h2>
          <p>
            Falta de paciente não é destino — é falta de processo. Com confirmação automática pelo WhatsApp, sua clínica recupera receita que hoje está sumindo silenciosamente toda semana.
          </p>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Fontes</p>
            <ul className="space-y-1 text-xs text-white/30">
              <li>Doctoralia Brasil — Pesquisa de preferência de comunicação com pacientes, 2023</li>
              <li>iClinic — Relatório de gestão de clínicas brasileiras, 2023</li>
              <li>CFM / estudos de gestão hospitalar — Taxa de absenteísmo em consultas</li>
              <li>Twilio — The State of Customer Engagement Report, 2023</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: "rgba(57,255,20,0.05)", border: "1px solid rgba(57,255,20,0.2)" }}>
          <p className="text-white font-bold mb-2">Configure confirmação automática na sua clínica</p>
          <p className="text-white/50 text-sm mb-4">Diagnóstico gratuito — sem compromisso.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "inline-flex items-center gap-2 text-black font-bold")}
            style={{ background: "var(--brand-green)" }}>
            <MessageCircle size={16} />
            Quero reduzir faltas agora
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
