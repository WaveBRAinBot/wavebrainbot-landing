"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para configurar o Agente?",
    answer:
      "Geralmente entre 3 e 14 dias, dependendo da complexidade do seu negócio. Fazemos um diagnóstico inicial, configuramos os fluxos, testamos exaustivamente e só colocamos no ar quando estiver perfeito.",
  },
  {
    question: "O Agente pode ser personalizado para minha marca?",
    answer:
      "Sim. Ajustamos tom de voz, linguagem, nome do agente, fluxos de conversa e tudo mais para refletir 100% a identidade da sua empresa. Seu cliente nem vai perceber que é IA.",
  },
  {
    question: "Funciona em qualquer tipo de negócio?",
    answer:
      "Funciona para qualquer negócio que receba contatos pelo WhatsApp. Clínicas, e-commerce, imobiliárias, restaurantes, academias, infoprodutores, lojas — qualquer segmento.",
  },
  {
    question: "E se o cliente quiser falar com um humano?",
    answer:
      "O agente identifica quando o cliente precisa de atendimento humano e encaminha automaticamente para sua equipe, com todo o contexto da conversa já resumido.",
  },
  {
    question: "Preciso ser técnico para usar?",
    answer:
      "Não. Cuidamos de toda a parte técnica. Você só precisa nos dar as informações sobre seu negócio e nós fazemos o resto. Depois do setup, o gerenciamento é simples e intuitivo.",
  },
  {
    question: "Tem fidelidade ou contrato longo?",
    answer:
      "Não trabalhamos com fidelidade longa. Você pode cancelar a qualquer momento. Acreditamos que a melhor forma de manter clientes é entregando resultados, não prendendo em contratos.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-cyan)" }}
          >
            Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Perguntas{" "}
            <span style={{ color: "var(--brand-green)" }}>frequentes</span>
          </h2>
        </div>

        <Accordion multiple className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="gradient-border rounded-xl bg-white/[0.02] px-6 border-0"
            >
              <AccordionTrigger className="text-white text-left font-semibold py-5 hover:no-underline hover:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
