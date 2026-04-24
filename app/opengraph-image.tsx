import { ImageResponse } from "next/og";

export const alt = "WaveBRAinBot — Agente de IA para WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(57,255,20,0.3)",
            background: "rgba(57,255,20,0.08)",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#39ff14",
            }}
          />
          <span style={{ color: "#39ff14", fontSize: 16, fontWeight: 600 }}>
            Agente de IA para WhatsApp
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Wave
          <span style={{ color: "#39ff14" }}>BRA</span>
          in
          <span style={{ color: "#00e5ff" }}>Bot</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Atendimento 24/7 no WhatsApp com Inteligência Artificial.
          Capture leads, qualifique e converta automaticamente.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { value: "24/7", label: "Disponibilidade", color: "#39ff14" },
            { value: "3s", label: "Resposta", color: "#00e5ff" },
            { value: "+70%", label: "Menos custos", color: "#ffe600" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ color: s.color, fontSize: 36, fontWeight: 900 }}>
                {s.value}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
