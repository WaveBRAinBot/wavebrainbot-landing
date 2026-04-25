"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Persist language changes
    i18n.on("languageChanged", (lng) => {
      localStorage.setItem("wbb-lang", lng);
    });

    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on("initialized", () => setReady(true));
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {ready ? children : <>{children}</>}
    </I18nextProvider>
  );
}
