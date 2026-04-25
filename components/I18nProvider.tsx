"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const persist = (lng: string) => localStorage.setItem("wbb-lang", lng);
    i18n.on("languageChanged", persist);

    setMounted(true);

    return () => {
      i18n.off("languageChanged", persist);
    };
  }, []);

  // Não renderizar children até estar montado no client — evita FOUC
  // suppressHydrationWarning é seguro aqui pois não há conteúdo diferente
  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
