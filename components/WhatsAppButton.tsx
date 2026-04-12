import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5513996663009?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20agente%20de%20IA%20para%20WhatsApp";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg glow-green transition-transform hover:scale-110"
      style={{ background: "var(--brand-green)" }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} color="#0a0a0a" fill="#0a0a0a" />
    </a>
  );
}
