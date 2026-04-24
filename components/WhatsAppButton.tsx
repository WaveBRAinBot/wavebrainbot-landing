import { MessageCircle } from "lucide-react";
import { WA_LINK_CTA as WA_LINK } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ping rings */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "rgba(57,255,20,0.35)" }}
      />
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "rgba(57,255,20,0.2)", animationDelay: "0.5s" }}
      />
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg glow-green transition-transform hover:scale-110"
        style={{ background: "var(--brand-green)" }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} color="#0a0a0a" fill="#0a0a0a" />
      </a>
    </div>
  );
}
