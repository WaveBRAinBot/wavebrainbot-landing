"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

type Message = { id: number; sender: "user" | "bot"; time: string; delay: number };

const CHAT_META: Message[] = [
  { id: 1, sender: "user", time: "10:42", delay: 1000 },
  { id: 2, sender: "bot",  time: "10:42", delay: 4500 },
  { id: 3, sender: "user", time: "10:43", delay: 9500 },
  { id: 4, sender: "bot",  time: "10:43", delay: 14500 },
  { id: 5, sender: "user", time: "10:45", delay: 18500 },
  { id: 6, sender: "bot",  time: "10:45", delay: 22000 },
];

export default function WhatsAppSimulator() {
  const { t } = useTranslation("common");
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleMessages([]);
    const timeouts: NodeJS.Timeout[] = [];
    CHAT_META.forEach((msg) => {
      if (msg.sender === "bot") {
        timeouts.push(setTimeout(() => setIsTyping(true), msg.delay - 1500));
      }
      timeouts.push(setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg.id]);
        setTimeout(() => {
          if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }, 100);
      }, msg.delay));
    });
    return () => timeouts.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]); // restart sequence on language change

  return (
    <div className="max-w-md mx-auto w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative mt-12 bg-black/40 backdrop-blur-xl"
      style={{ boxShadow: "0 20px 40px -10px rgba(57,255,20,0.15)" }}>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
      <div className="bg-black/60 px-4 py-3 flex items-center gap-3 border-b border-white/5 backdrop-blur-md">
        <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden border border-white/10 shrink-0 bg-black">
          <Image src="/images/logo.webp" alt="WAVE" fill className="object-contain p-1" />
        </div>
        <div className="text-left">
          <h4 className="text-white font-semibold text-sm">WAVE</h4>
          <p className="text-[var(--brand-green)] text-xs font-medium">Online</p>
        </div>
      </div>

      <div ref={containerRef} className="p-4 h-[380px] overflow-y-auto flex flex-col gap-3 relative z-10 no-scrollbar scroll-smooth">
        {CHAT_META.map((msg) => (
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
                <p className="leading-relaxed pr-8 pb-3 text-left whitespace-pre-wrap">
                  {t(`simulator.msg${msg.id}`)}
                </p>
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
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
