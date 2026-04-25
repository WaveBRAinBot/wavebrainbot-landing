"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LANGS = [
  {
    code: "pt",
    label: "PT",
    flag: (
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="20" height="14" rx="2" fill="#009C3B"/>
        <rect x="7" width="13" height="14" rx="0" fill="#009C3B"/>
        <rect width="7" height="14" rx="0" fill="#009C3B"/>
        {/* green base */}
        <rect width="20" height="14" rx="2" fill="#009C3B"/>
        {/* yellow diamond */}
        <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00"/>
        {/* blue circle */}
        <circle cx="10" cy="7" r="3.2" fill="#002776"/>
        {/* white stripe */}
        <path d="M6.9 7.6 Q10 5.8 13.1 7.6" stroke="white" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    code: "en",
    label: "EN",
    flag: (
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="20" height="14" rx="2" fill="#B22234"/>
        <rect y="1.08" width="20" height="1.08" fill="white"/>
        <rect y="3.23" width="20" height="1.08" fill="white"/>
        <rect y="5.38" width="20" height="1.08" fill="white"/>
        <rect y="7.54" width="20" height="1.08" fill="white"/>
        <rect y="9.69" width="20" height="1.08" fill="white"/>
        <rect y="11.85" width="20" height="1.08" fill="white"/>
        <rect width="8" height="7.54" rx="0" fill="#3C3B6E"/>
        {/* stars simplified as dots */}
        <circle cx="1.3" cy="1.3" r="0.55" fill="white"/>
        <circle cx="2.7" cy="1.3" r="0.55" fill="white"/>
        <circle cx="4.0" cy="1.3" r="0.55" fill="white"/>
        <circle cx="5.3" cy="1.3" r="0.55" fill="white"/>
        <circle cx="6.7" cy="1.3" r="0.55" fill="white"/>
        <circle cx="2.0" cy="2.6" r="0.55" fill="white"/>
        <circle cx="3.3" cy="2.6" r="0.55" fill="white"/>
        <circle cx="4.7" cy="2.6" r="0.55" fill="white"/>
        <circle cx="6.0" cy="2.6" r="0.55" fill="white"/>
        <circle cx="1.3" cy="3.9" r="0.55" fill="white"/>
        <circle cx="2.7" cy="3.9" r="0.55" fill="white"/>
        <circle cx="4.0" cy="3.9" r="0.55" fill="white"/>
        <circle cx="5.3" cy="3.9" r="0.55" fill="white"/>
        <circle cx="6.7" cy="3.9" r="0.55" fill="white"/>
        <circle cx="2.0" cy="5.2" r="0.55" fill="white"/>
        <circle cx="3.3" cy="5.2" r="0.55" fill="white"/>
        <circle cx="4.7" cy="5.2" r="0.55" fill="white"/>
        <circle cx="6.0" cy="5.2" r="0.55" fill="white"/>
        <circle cx="1.3" cy="6.5" r="0.55" fill="white"/>
        <circle cx="2.7" cy="6.5" r="0.55" fill="white"/>
        <circle cx="4.0" cy="6.5" r="0.55" fill="white"/>
        <circle cx="5.3" cy="6.5" r="0.55" fill="white"/>
        <circle cx="6.7" cy="6.5" r="0.55" fill="white"/>
      </svg>
    ),
  },
  {
    code: "es",
    label: "ES",
    flag: (
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="20" height="14" rx="2" fill="#AA151B"/>
        <rect y="3.2" width="20" height="7.6" fill="#F1BF00"/>
        {/* coat of arms simplified */}
        <rect x="7.5" y="5.2" width="1.2" height="3.6" fill="#AA151B" rx="0.2"/>
        <rect x="11.3" y="5.2" width="1.2" height="3.6" fill="#AA151B" rx="0.2"/>
        <rect x="7.5" y="5.2" width="5" height="1" fill="#AA151B" rx="0.2"/>
      </svg>
    ),
  },
] as const;

export default function LangSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) ?? "pt";

  return (
    <div className={cn("flex items-center gap-0.5 rounded-lg border border-white/15 bg-white/5 px-1.5 py-1", className)}>
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          aria-label={`Switch to ${lang.label}`}
          className={cn(
            "flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs font-semibold transition-all duration-200",
            current === lang.code
              ? "bg-white/15 text-white"
              : "text-white/50 hover:text-white/80"
          )}
        >
          {lang.flag}
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
