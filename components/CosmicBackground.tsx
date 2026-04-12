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

    // Shooting stars
    interface Shoot {
      x: number; y: number; vx: number; vy: number; len: number; life: number; maxLife: number; color: string;
    }
    const shoots: Shoot[] = [];
    let lastShoot = 0;

    const spawnShoot = (t: number) => {
      if (t - lastShoot < 3000 + Math.random() * 4000) return;
      lastShoot = t;
      const angle = (-Math.PI / 6) + (Math.random() - 0.5) * 0.3;
      const speed = 8 + Math.random() * 6;
      shoots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 60 + Math.random() * 80,
        life: 0,
        maxLife: 40 + Math.random() * 20,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

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

      // ── Shooting stars ───────────────────────────────────────────────
      spawnShoot(t);
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.life++;
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.3
          ? progress / 0.3
          : 1 - (progress - 0.3) / 0.7;

        const tailX = s.x - (s.vx / Math.sqrt(s.vx ** 2 + s.vy ** 2)) * s.len * progress;
        const tailY = s.y - (s.vy / Math.sqrt(s.vx ** 2 + s.vy ** 2)) * s.len * progress;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${alpha * 0.8})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        if (s.life >= s.maxLife || s.x > w || s.y > h) {
          shoots.splice(i, 1);
        }
      }

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
