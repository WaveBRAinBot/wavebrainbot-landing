"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Accordion multiple className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="relative rounded-[16px] px-6 border-0 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <div
            className="absolute inset-0 rounded-[16px] pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-300"
            style={{ background: "linear-gradient(90deg, rgba(57,255,20,0.5), transparent 80%)" }}
          >
            <div className="absolute inset-[1px] rounded-[15px] bg-[#0a0a0a] opacity-90" />
          </div>
          <div className="relative z-10">
            <AccordionTrigger className="text-white text-left font-semibold py-5 hover:no-underline hover:text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/60 text-sm leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
