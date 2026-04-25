"use client";

import { useTranslation } from "react-i18next";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
  const { t } = useTranslation("common");

  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({
    question: t(`faq.q${n}`),
    answer:   t(`faq.a${n}`),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faq" className="py-24">
      {/* JSON-LD schema for FAQ — safe: no user input, only translated strings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--brand-cyan)" }}>
            {t("faq.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("faq.h2_part1")}{" "}
            <span style={{ color: "var(--brand-green)" }}>{t("faq.h2_highlight")}</span>
          </h2>
        </div>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
