import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "WhatsApp Business API vs Agente de IA: qual sua empresa realmente precisa — WaveBRAinBot",
  description:
    "A API do WhatsApp sozinha não faz nada automaticamente. Entenda a diferença entre API, chatbot e agente de IA — e o que cada um entrega na prática.",
  openGraph: {
    title: "WhatsApp Business API vs Agente de IA: qual sua empresa realmente precisa",
    description: "A diferença que muda tudo: API, chatbot e agente de IA não são a mesma coisa.",
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
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(57,255,20,0.12)", color: "var(--brand-green)" }}>
              Tecnologia
            </span>
            <span className="text-white/30 text-xs">12 Abr 2026 · 6 min de leitura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            WhatsApp Business API vs Agente de IA: qual sua empresa realmente precisa?
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            A API sozinha não faz nada. Um chatbot de fluxos engessa. Um agente de IA pensa. Entenda as diferenças antes de decidir.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-10" />

        <article className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            O Brasil tem <strong className="text-white">147 milhões de usuários de WhatsApp</strong> — o segundo país no mundo (Statista, 2024). E <strong className="text-white">76% dos brasileiros</strong> preferem contato com empresas via WhatsApp (Opinion Box, 2023). Então faz todo sentido querer automatizar esse canal. Mas a confusão entre "API", "chatbot" e "agente de IA" faz muita empresa investir na solução errada.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O que é o WhatsApp Business API — e o que ela não faz</h2>
          <p>
            A API do WhatsApp é uma <strong className="text-white">infraestrutura de conexão</strong>. Ela permite que sistemas externos enviem e recebam mensagens pelo WhatsApp em escala. Por si só, ela não automatiza nada — é como ter um telefone sem ninguém para atender.
          </p>
          <p>
            Para usar a API diretamente, você precisa de um provedor aprovado pela Meta (BSP), desenvolvimento técnico para integração, gestão de templates de mensagem aprovados pela Meta, e infraestrutura para hospedar a lógica de negócio. É caro, lento e exige equipe técnica dedicada.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O que é um chatbot de fluxos</h2>
          <p>
            Um chatbot tradicional funciona com árvores de decisão fixas: "Se o cliente digitar 1, vai para opção A. Se digitar 2, vai para B." Funciona bem para FAQs simples e triagem básica. O problema aparece quando o cliente escreve algo fora do script — o chatbot trava, repete opções ou simplesmente não entende.
          </p>
          <p>
            Quem já ficou preso num "Desculpe, não entendi. Digite 1 para voltar ao menu" sabe exatamente o que isso faz com a experiência do cliente.
          </p>

          <h2 className="text-white text-xl font-black pt-4">O que é um agente de IA — a diferença real</h2>
          <p>
            Um agente de IA usa modelos de linguagem (LLMs) para <strong className="text-white">entender intenção</strong>, não apenas palavras-chave. Ele lê a mensagem, interpreta o contexto, consulta a base de conhecimento do seu negócio e responde de forma natural — como um atendente bem treinado faria.
          </p>
          <p>
            Além disso, um agente pode tomar ações: verificar disponibilidade de agenda, registrar um lead no CRM, enviar uma proposta, acionar um humano quando necessário. Não é só responder — é resolver.
          </p>

          <div className="rounded-xl overflow-hidden my-8" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th className="text-left p-3 text-white/60 font-semibold">Critério</th>
                  <th className="text-center p-3 text-white/60 font-semibold">API pura</th>
                  <th className="text-center p-3 text-white/60 font-semibold">Chatbot fluxos</th>
                  <th className="text-center p-3 font-semibold" style={{ color: "var(--brand-green)" }}>Agente IA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Entende linguagem natural", "Não", "Parcial", "Sim"],
                  ["Responde fora do script", "N/A", "Não", "Sim"],
                  ["Integra com sistemas", "Sim (dev)", "Limitado", "Sim"],
                  ["Aprende com interações", "Não", "Não", "Sim"],
                  ["Setup sem dev técnico", "Não", "Parcial", "Sim"],
                  ["Custo de implementação", "Alto", "Médio", "Acessível"],
                  ["Qualidade de experiência", "—", "Média", "Alta"],
                ].map(([crit, api, chatbot, ai]) => (
                  <tr key={crit} style={{ background: "rgba(255,255,255,0.01)" }}>
                    <td className="p-3 text-white/70">{crit}</td>
                    <td className="p-3 text-center text-white/40">{api}</td>
                    <td className="p-3 text-center text-white/40">{chatbot}</td>
                    <td className="p-3 text-center font-semibold" style={{ color: "var(--brand-green)" }}>{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-white text-xl font-black pt-4">Quando cada solução faz sentido</h2>
          <ul className="list-none space-y-3 pl-0">
            {[
              { label: "API pura", when: "Você tem equipe de desenvolvimento e quer construir do zero uma solução customizada para operação de alto volume" },
              { label: "Chatbot de fluxos", when: "Seu atendimento é muito padronizado (ex: suporte com apenas 3 ou 4 perguntas recorrentes) e o cliente nunca foge do roteiro" },
              { label: "Agente de IA", when: "Você quer automatizar atendimento, qualificação de leads e conversão sem abrir mão da qualidade de experiência — e sem precisar de dev" },
            ].map((item) => (
              <li key={item.label} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                <p className="text-white/50 text-sm">{item.when}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-white text-xl font-black pt-4">Conclusão</h2>
          <p>
            A API do WhatsApp é a estrada. O chatbot é um carro sem GPS. O agente de IA é o motorista que conhece o destino. Para a maioria das empresas brasileiras que quer automatizar atendimento e gerar resultados reais, a resposta é clara: agente de IA, construído sobre a API, com configuração acessível e sem dependência técnica interna.
          </p>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Fontes</p>
            <ul className="space-y-1 text-xs text-white/30">
              <li>Statista — WhatsApp users by country, 2024</li>
              <li>Opinion Box — Relatório de uso do WhatsApp no Brasil, 2023</li>
              <li>Twilio — The State of Customer Engagement Report, 2023</li>
              <li>Zendesk — CX Trends 2024</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: "rgba(57,255,20,0.05)", border: "1px solid rgba(57,255,20,0.2)" }}>
          <p className="text-white font-bold mb-2">Veja um agente de IA em funcionamento</p>
          <p className="text-white/50 text-sm mb-4">Diagnóstico gratuito — entendemos seu negócio antes de propor qualquer coisa.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "inline-flex items-center gap-2 text-black font-bold")}
            style={{ background: "var(--brand-green)" }}>
            <MessageCircle size={16} />
            Quero ver na prática
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
