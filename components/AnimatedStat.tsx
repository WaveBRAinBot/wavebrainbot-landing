"use client";

import { useCountUp } from "@/hooks/useCountUp";

export default function AnimatedStat({
  target,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  color,
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  color: string;
  delay?: number;
}) {
  const { ref, value } = useCountUp(target, 1800);

  return (
    <div
      className="reveal relative rounded-[24px] p-6 text-center group shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center min-h-[180px]"
      style={{ transitionDelay: `${delay}ms`, boxShadow: `0 5px 30px -10px ${color}20` }}
    >
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${color}, transparent 50%)` }}
      >
        <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a] transition-all duration-500 opacity-90 group-hover:opacity-80" />
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${color}15 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        <span
          ref={ref}
          className="block text-4xl sm:text-5xl font-black mb-3 transition-transform duration-500 group-hover:scale-105"
          style={{ color, textShadow: `0 0 30px ${color}60` }}
        >
          {prefix}{value}{suffix}
        </span>
        <p className="text-white font-bold text-sm mb-1">{label}</p>
        <p className="text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto">{sublabel}</p>
      </div>
    </div>
  );
}
