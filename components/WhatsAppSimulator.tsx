"use client";

import { useEffect, useState } from "react";
import { CheckCheck } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
  delay: number;
};

const CHAT: Message[] = [
  { id: 1, text: "Oi, vim pelo anúncio. Queria saber o preço.", sender: "user", time: "10:42", delay: 1000 },
  { id: 2, text: "Olá! Sou o agente IA da WaveBRAinBot. Percebi que você está interessado. Podemos te enviar os planos se quiser! O valor começa em R$ 799.", sender: "bot", time: "10:42", delay: 3500 },
  { id: 3, text: "Ótimo. Posso agendar uma reunião?", sender: "user", time: "10:42", delay: 6000 },
  { id: 4, text: "Claro! Vamos lá. Agendamento sugerido para amanhã às 14h. Já inseri no seu Calendar. Até lá! ✨", sender: "bot", time: "10:42", delay: 8500 },
];

export default function WhatsAppSimulator() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    // Start sequence
    CHAT.forEach((msg, index) => {
      // Show typing indicator before bot messages
      if (msg.sender === "bot") {
        timeouts.push(
          setTimeout(() => {
            setIsTyping(true);
          }, msg.delay - 1500) // Start typing 1.5s before sending
        );
      }

      timeouts.push(
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, msg.delay)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="max-w-md mx-auto w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mt-12 bg-black backdrop-blur-sm"
         style={{ boxShadow: "0 20px 40px -10px var(--brand-green)" }}>
      {/* Header */}
      <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-3 border-b border-white/5">
        <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center p-1 relative overflow-hidden" style={{ background: "var(--brand-green)" }}>
             <span className="text-black font-bold text-sm z-10 relative">WB</span>
        </div>
        <div className="text-left">
          <h4 className="text-white font-medium text-sm">WaveBRAinBot IA</h4>
          <p className="text-white/60 text-xs">Aguardando novos leads...</p>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="p-4 bg-[oklch(0.1_0_0)] bg-cover bg-center h-[320px] overflow-y-auto flex flex-col gap-3 relative z-10">
        
        {/* Background mesh using simple gradient */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: "linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        {CHAT.map((msg) => (
          <div
            key={msg.id}
            className={`transition-all duration-300 transform relative z-10 ${
              visibleMessages.includes(msg.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 max-h-0 m-0 p-0 overflow-hidden"
            } max-w-[85%] rounded-lg px-3 py-2 text-sm relative shadow-sm ${
              msg.sender === "user"
                ? "bg-[#0b2413] text-white self-end rounded-tr-none border border-[var(--brand-green)]/30"
                : "bg-[#18181b] text-white self-start rounded-tl-none border border-white/5"
            }`}
          >
            {visibleMessages.includes(msg.id) && (
              <>
                <p className="leading-snug pr-8 text-left">{msg.text}</p>
                <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[10px] text-white/50">
                  {msg.time}
                  {msg.sender === "user" && <CheckCheck size={14} style={{ color: "var(--brand-cyan)" }} />}
                </div>
              </>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="bg-[#18181b] self-start rounded-lg rounded-tl-none px-4 py-3 max-w-[85%] border border-white/5 relative z-10">
            <div className="flex gap-1 items-center h-4">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
