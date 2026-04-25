// Runs entirely off the main thread via OffscreenCanvas
const COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#39ff14", "#00e5ff"];

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}

let ctx, w, h, dpr, isMobile;
let stars = [], particles = [], orbs = [], comets = [];
let raf, lastFrame = 0, FRAME_MS;

function init(width, height, devicePixelRatio, mobile) {
  w = width; h = height; dpr = devicePixelRatio; isMobile = mobile;
  FRAME_MS = 1000 / (isMobile ? 24 : 30);

  const STAR_COUNT    = isMobile ? 60 : 150;
  const PARTICLE_COUNT = isMobile ? 30 : 70;

  stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    r: Math.random() * 1.5 + 0.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    phase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.0005 + Math.random() * 0.0018,
    driftX: (Math.random() - 0.5) * 0.04,
    driftY: (Math.random() - 0.5) * 0.02,
  }));

  particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    r: Math.random() * 1.0 + 0.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    speed: Math.random() * 0.05 + 0.015,
    phase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.0008 + Math.random() * 0.002,
    driftX: (Math.random() - 0.5) * 0.3,
  }));

  orbs = [
    { x: 0.15, y: 0.18, r: 0.35, color: "#39ff14", phase: 0,   pulseSpeed: 0.0003 },
    { x: 0.85, y: 0.25, r: 0.3,  color: "#00e5ff", phase: 1.5, pulseSpeed: 0.0004 },
    { x: 0.5,  y: 0.52, r: 0.25, color: "#a855f7", phase: 3.0, pulseSpeed: 0.0002 },
    { x: 0.2,  y: 0.75, r: 0.32, color: "#00e5ff", phase: 0.8, pulseSpeed: 0.0005 },
    { x: 0.8,  y: 0.82, r: 0.3,  color: "#ffe600", phase: 2.2, pulseSpeed: 0.0003 },
  ];

  const COMET_COLORS = ["#39ff14", "#00e5ff", "#ffe600", "#a855f7", "#ffffff"];
  comets = COMET_COLORS.map((color, i) => ({
    color, x: -60 - i * 150,
    y: h * 0.1 + Math.random() * h * 0.8,
    vx: 1.2 + Math.random() * 0.8,
    vy: (Math.random() - 0.5) * 0.2,
    len: 80 + Math.random() * 80,
    alpha: 0, alphaTarget: 0.7 + Math.random() * 0.3,
  }));
}

function tick(t) {
  if (t - lastFrame < FRAME_MS) { raf = requestAnimationFrame(tick); return; }
  lastFrame = t;
  ctx.clearRect(0, 0, w, h);

  // Orbs
  orbs.forEach(orb => {
    const pulse = 0.85 + Math.sin(t * orb.pulseSpeed + orb.phase) * 0.15;
    const ox = orb.x * w, oy = orb.y * h;
    const radius = orb.r * Math.min(w, h) * pulse;
    const [r,g,b] = hexToRgb(orb.color);
    const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
    grad.addColorStop(0, `rgba(${r},${g},${b},0.08)`);
    grad.addColorStop(0.3, `rgba(${r},${g},${b},0.04)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(ox, oy, radius, 0, Math.PI * 2); ctx.fill();
  });

  // Stars — skip glow radial gradient on mobile to save GPU
  stars.forEach(s => {
    const twinkle = 0.15 + Math.abs(Math.sin(t * s.twinkleSpeed + s.phase)) * 0.75;
    if (!isMobile) {
      const [r,g,b] = hexToRgb(s.color);
      const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
      glow.addColorStop(0, `rgba(${r},${g},${b},${(twinkle * 0.6).toFixed(2)})`);
      glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * (0.8 + twinkle * 0.4), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${(twinkle * 0.9).toFixed(2)})`;
    ctx.fill();
    s.x += s.driftX; s.y += s.driftY;
    if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
    if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
  });

  // Particles
  particles.forEach(p => {
    const alpha = 0.15 + Math.abs(Math.sin(t * p.twinkleSpeed + p.phase)) * 0.25;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color; ctx.globalAlpha = alpha; ctx.fill(); ctx.globalAlpha = 1;
    p.y -= p.speed; p.x += p.driftX;
    if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
    if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
  });

  // Comets — skip on mobile
  if (!isMobile) {
    comets.forEach(c => {
      c.x += c.vx; c.y += c.vy;
      const fadeMargin = w * 0.25;
      c.alpha = c.x > w - fadeMargin
        ? Math.max(0, c.alpha - 0.025)
        : Math.min(c.alphaTarget, c.alpha + 0.015);
      if (c.x > w + c.len + 10) {
        c.x = -c.len - Math.random() * 200;
        c.y = h * 0.1 + Math.random() * h * 0.8;
        c.vx = 1.2 + Math.random() * 0.8;
        c.vy = (Math.random() - 0.5) * 0.2;
        c.len = 80 + Math.random() * 80;
        c.alpha = 0; c.alphaTarget = 0.7 + Math.random() * 0.3;
      }
      if (c.alpha <= 0.01) return;
      const mag = Math.hypot(c.vx, c.vy);
      const tailX = c.x - (c.vx / mag) * c.len;
      const tailY = c.y - (c.vy / mag) * c.len;
      const cg = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
      cg.addColorStop(0, 'rgba(0,0,0,0)');
      cg.addColorStop(0.6, `${c.color}${Math.round(c.alpha*160).toString(16).padStart(2,'0')}`);
      cg.addColorStop(1, `#ffffff${Math.round(c.alpha*255).toString(16).padStart(2,'0')}`);
      ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(c.x, c.y);
      ctx.strokeStyle = cg; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
      ctx.globalAlpha = c.alpha; ctx.stroke();
      ctx.beginPath(); ctx.arc(c.x, c.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff'; ctx.globalAlpha = c.alpha; ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  raf = requestAnimationFrame(tick);
}

self.onmessage = (e) => {
  const { type } = e.data;
  if (type === 'init') {
    const { canvas, width, height, dpr: d, mobile, reduceMotion } = e.data;
    ctx = canvas.getContext('2d');
    ctx.setTransform(d, 0, 0, d, 0, 0);
    init(width / d, height / d, d, mobile);
    if (reduceMotion) { tick(performance.now()); return; }
    raf = requestAnimationFrame(tick);
  }
  if (type === 'resize') {
    const { width, height } = e.data;
    ctx.canvas.width = width; ctx.canvas.height = height;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    w = width / dpr; h = height / dpr;
  }
  if (type === 'stop') {
    cancelAnimationFrame(raf);
  }
};
