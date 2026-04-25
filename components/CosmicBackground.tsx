"use client";

import { useRef, useEffect } from "react";
import { Z } from "@/lib/constants";

interface Rgb { r: number; g: number; b: number }

function hexToRgb(hex: string): Rgb {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

interface Star {
  x: number; y: number; r: number;
  rgb: Rgb; phase: number; twinkleSpeed: number;
  driftX: number; driftY: number;
}

interface Particle {
  x: number; y: number; r: number;
  color: string; speed: number;
  phase: number; twinkleSpeed: number; driftX: number;
}

interface Orb {
  x: number; y: number; r: number;
  rgb: Rgb; phase: number; pulseSpeed: number;
}

interface Comet {
  x: number; y: number; vx: number; vy: number;
  len: number; alpha: number; alphaTarget: number; color: string;
}

const COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#39ff14", "#00e5ff"];
const COLOR_RGBS = COLORS.map(hexToRgb);

const ORB_DEFS = [
  { x: 0.15, y: 0.18, r: 0.35, color: "#39ff14", phase: 0,   pulseSpeed: 0.0003 },
  { x: 0.85, y: 0.25, r: 0.3,  color: "#00e5ff", phase: 1.5, pulseSpeed: 0.0004 },
  { x: 0.5,  y: 0.52, r: 0.25, color: "#a855f7", phase: 3.0, pulseSpeed: 0.0002 },
  { x: 0.2,  y: 0.75, r: 0.32, color: "#00e5ff", phase: 0.8, pulseSpeed: 0.0005 },
  { x: 0.8,  y: 0.82, r: 0.3,  color: "#ffe600", phase: 2.2, pulseSpeed: 0.0003 },
  { x: 0.5,  y: 0.95, r: 0.35, color: "#39ff14", phase: 1.0, pulseSpeed: 0.0004 },
];

const COMET_COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#a855f7", "#ffffff"];

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const isMobile = window.innerWidth < 768;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Resize com debounce para evitar thrashing em window drag
    let resizeTimer: ReturnType<typeof setTimeout>;
    const applyResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyResize, 150);
    };
    applyResize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = isMobile ? 80 : 180;
    const PARTICLE_COUNT = isMobile ? 40 : 90;

    // Pré-calcula rgb para cada estrela — sem parseInt no loop de animação
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const colorIdx = Math.floor(Math.random() * COLOR_RGBS.length);
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        rgb: COLOR_RGBS[colorIdx],
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.0005 + Math.random() * 0.0018,
        driftX: (Math.random() - 0.5) * 0.04,
        driftY: (Math.random() - 0.5) * 0.02,
      };
    });

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.0 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 0.05 + 0.015,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.0008 + Math.random() * 0.002,
      driftX: (Math.random() - 0.5) * 0.3,
    }));

    // Orbs com rgb pré-calculado
    const orbs: Orb[] = ORB_DEFS.map((o) => ({ ...o, rgb: hexToRgb(o.color) }));

    const cometSpawnY = (h: number) => h * 0.1 + Math.random() * h * 0.8;
    const comets: Comet[] = COMET_COLORS.map((color, i) => ({
      color,
      x: -60 - i * 150,
      y: cometSpawnY(window.innerHeight),
      vx: 1.2 + Math.random() * 0.8,
      vy: (Math.random() - 0.5) * 0.3,
      len: 80 + Math.random() * 80,
      alpha: 0,
      alphaTarget: 0.7 + Math.random() * 0.3,
    }));

    let raf: number;
    let lastFrame = 0;
    const FRAME_MS = 1000 / (isMobile ? 24 : 30);

    const tick = (t: number) => {
      if (t - lastFrame < FRAME_MS) {
        raf = requestAnimationFrame(tick);
        return;
      }
      lastFrame = t;

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // ── Nebula orbs ───────────────────────────────────────────────────
      const visibleOrbs = isMobile ? orbs.slice(0, 2) : orbs;
      visibleOrbs.forEach((orb) => {
        const pulse = 0.85 + Math.sin(t * orb.pulseSpeed + orb.phase) * 0.15;
        const ox = orb.x * w;
        const oy = orb.y * h;
        const radius = orb.r * Math.min(w, h) * pulse;
        const { r, g, b } = orb.rgb; // pré-calculado

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, `rgba(${r},${g},${b},0.08)`);
        grad.addColorStop(0.3, `rgba(${r},${g},${b},0.04)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Stars ─────────────────────────────────────────────────────────
      stars.forEach((s) => {
        const twinkle = 0.15 + Math.abs(Math.sin(t * s.twinkleSpeed + s.phase)) * 0.75;
        const { r, g, b } = s.rgb; // pré-calculado

        if (!isMobile) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          glow.addColorStop(0, `rgba(${r},${g},${b},${twinkle * 0.6})`);
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.8 + twinkle * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${twinkle * 0.9})`;
        ctx.fill();

        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
      });

      // ── Floating particles ────────────────────────────────────────────
      particles.forEach((p) => {
        const alpha = 0.15 + Math.abs(Math.sin(t * p.twinkleSpeed + p.phase)) * 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.y -= p.speed;
        p.x += p.driftX;
        if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      });

      // ── Comets — desktop only ─────────────────────────────────────────
      if (isMobile) { raf = requestAnimationFrame(tick); return; }

      comets.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;

        const fadeMargin = w * 0.25;
        c.alpha = c.x > w - fadeMargin
          ? Math.max(0, c.alpha - 0.025)
          : Math.min(c.alphaTarget, c.alpha + 0.015);

        if (c.x > w + c.len + 10) {
          c.x = -c.len - Math.random() * 200;
          c.y = cometSpawnY(h);
          c.vx = 1.2 + Math.random() * 0.8;
          c.vy = (Math.random() - 0.5) * 0.2;
          c.len = 80 + Math.random() * 80;
          c.alpha = 0;
          c.alphaTarget = 0.7 + Math.random() * 0.3;
        }

        if (c.alpha <= 0.01) return;

        const mag = Math.hypot(c.vx, c.vy);
        const tailX = c.x - (c.vx / mag) * c.len;
        const tailY = c.y - (c.vy / mag) * c.len;

        const cometGrad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
        cometGrad.addColorStop(0, "rgba(0,0,0,0)");
        cometGrad.addColorStop(0.6, `${c.color}${Math.round(c.alpha * 160).toString(16).padStart(2, "0")}`);
        cometGrad.addColorStop(1, `#ffffff${Math.round(c.alpha * 255).toString(16).padStart(2, "0")}`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.globalAlpha = c.alpha;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(c.x, c.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha * 0.5;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(c.x, c.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = c.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      tick(performance.now());
      return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
      };
    }

    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer); // Limpa debounce pendente
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: Z.background }}
    />
  );
}
