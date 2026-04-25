"use client";

import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { WA_LINK_CTA as WA_LINK } from "@/lib/constants";

export default function CTA() {
  const { t } = useTranslation("common");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, var(--brand-green) 0%, transparent 70%)" }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
          {t("cta.h2_before")}{" "}
          <span className="text-glow-green" style={{ color: "var(--brand-green)" }}>{t("cta.h2_highlight")}</span>{" "}
          {t("cta.h2_after")}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "font-black text-black text-lg px-10 py-7 glow-green inline-flex items-center gap-2")}
          style={{ background: "var(--brand-green)" }}
        >
          <MessageCircle size={22} />
          {t("cta.button")}
        </a>
        <p className="text-white/30 text-sm mt-6">{t("cta.disclaimer")}</p>
      </div>
    </section>
  );
}
