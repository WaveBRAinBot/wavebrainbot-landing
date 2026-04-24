"use client";

import { useCountUp } from "@/hooks/useCountUp";

export default function CountStat({
  target,
  prefix,
  suffix,
  label,
  color,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
}) {
  const { ref, value } = useCountUp(target, 2000);
  return (
    <div className="flex flex-col items-center">
      <span
        ref={ref}
        className="text-3xl font-black"
        style={{ color, textShadow: `0 0 20px ${color}80` }}
      >
        {prefix}{value}{suffix}
      </span>
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}
