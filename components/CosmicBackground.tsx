"use client";

import { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  color: string;
  phase: number;
  twinkleSpeed: number;
  driftX: number;
  driftY: number;
}

interface Particle {
  x: number;
  y: number;
  r: number;
  color: string;
  speed: number;
  phase: number;
  twinkleSpeed: number;
  driftX: number;
}

interface Orb {
  x: number;
  y: number;
  r: number;
  color: string;
  phase: number;
  pulseSpeed: number;
}

const COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#39ff14", "#00e5ff"];

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Stars — bright static points that twinkle
    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.0005 + Math.random() * 0.0018,
      driftX: (Math.random() - 0.5) * 0.03,
      driftY: (Math.random() - 0.5) * 0.015,
    }));

    // Particles — smaller, floating upward
    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 0.8 + 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 0.04 + 0.01,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.0008 + Math.random() * 0.002,
      driftX: (Math.random() - 0.5) * 0.25,
    }));

    // Nebula orbs — large soft glowing blobs
    const orbs: Orb[] = [
      { x: 0.15, y: 0.08, r: 0.25, color: "#39ff14", phase: 0, pulseSpeed: 0.0004 },
      { x: 0.85, y: 0.18, r: 0.2, color: "#00e5ff", phase: 1.5, pulseSpeed: 0.0005 },
      { x: 0.5, y: 0.42, r: 0.18, color: "#39ff14", phase: 3.0, pulseSpeed: 0.0003 },
      { x: 0.1, y: 0.65, r: 0.22, color: "#00e5ff", phase: 0.8, pulseSpeed: 0.0006 },
      { x: 0.9, y: 0.72, r: 0.2, color: "#ffe600", phase: 2.2, pulseSpeed: 0.0004 },
      { x: 0.5, y: 0.88, r: 0.22, color: "#39ff14", phase: 1.0, pulseSpeed: 0.0005 },
    ];

    // CRM Comets
    interface Comet {
      x: number; y: number; vx: number; vy: number; len: number; alpha: number; alphaTarget: number; color: string; w0: number;
    }
    const COMET_COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#a855f7", "#ffffff"];
    const cometSpawnY = (h: number) => h * 0.1 + Math.random() * h * 0.8;
    const comets: Comet[] = COMET_COLORS.map((color, i) => {
      const w0 = canvas.width || 1000;
      return {
        color,
        x: -60 - i * 150,
        y: cometSpawnY(canvas.height),
        vx: 0.55 + Math.random() * 0.4,
        vy: -(Math.random() * 0.15) + (Math.random() * 0.15),
        len: 35 + Math.random() * 25,
        alpha: 0,
        alphaTarget: 0.6 + Math.random() * 0.25,
        w0,
      };
    });

    let raf: number;
    let lastFrame = 0;
    const FRAME_MS = 1000 / 30;

    const tick = (t: number) => {
      if (t - lastFrame < FRAME_MS) {
        raf = requestAnimationFrame(tick);
        return;
      }
      lastFrame = t;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // ── Nebula orbs ──────────────────────────────────────────────────
      orbs.forEach((orb) => {
        const pulse = 0.85 + Math.sin(t * orb.pulseSpeed + orb.phase) * 0.15;
        const ox = orb.x * w;
        const oy = orb.y * h;
        const radius = orb.r * Math.min(w, h) * pulse;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        // Parse hex color to rgba
        const hex = orb.color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        grad.addColorStop(0, `rgba(${r},${g},${b},0.05)`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},0.03)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Stars ────────────────────────────────────────────────────────
      stars.forEach((s) => {
        const twinkle = 0.15 + Math.abs(Math.sin(t * s.twinkleSpeed + s.phase)) * 0.75;

        // Glow halo
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
        const hex = s.color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        glow.addColorStop(0, `rgba(${r},${g},${b},${twinkle * 0.6})`);
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.8 + twinkle * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${twinkle * 0.9})`;
        ctx.fill();

        // Drift
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
      });

      // ── Floating particles ───────────────────────────────────────────
      particles.forEach((p) => {
        const alpha = 0.08 + Math.abs(Math.sin(t * p.twinkleSpeed + p.phase)) * 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.y -= p.speed;
        p.x += p.driftX;
        if (p.y < -5) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      });

      // ── CRM Comets ───────────────────────────────────────────────
      comets.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;

        const fadeMargin = w * 0.15;
        if (c.x > w - fadeMargin) {
          c.alpha = Math.max(0, c.alpha - 0.015);
        } else {
          c.alpha = Math.min(c.alphaTarget, c.alpha + 0.012);
        }

        if (c.x > w + c.len + 10) {
          c.x = -c.len - Math.random() * 100;
          c.y = cometSpawnY(h);
          c.vx = 0.55 + Math.random() * 0.4;
          c.vy = (Math.random() - 0.5) * 0.2;
          c.len = 35 + Math.random() * 25;
          c.alpha = 0;
          c.alphaTarget = 0.6 + Math.random() * 0.25;
        }

        if (c.alpha <= 0.01) return;

        const mag = Math.hypot(c.vx, c.vy);
        const tailX = c.x - (c.vx / mag) * c.len;
        const tailY = c.y - (c.vy / mag) * c.len;

        const cometGrad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
        cometGrad.addColorStop(0, 'rgba(0,0,0,0)');
        cometGrad.addColorStop(0.6, `${c.color}${Math.round(c.alpha * 160).toString(16).padStart(2, '0')}`);
        cometGrad.addColorStop(1, `#ffffff${Math.round(c.alpha * 255).toString(16).padStart(2, '0')}`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.globalAlpha = c.alpha;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha * 0.4;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(c.x, c.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = c.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
