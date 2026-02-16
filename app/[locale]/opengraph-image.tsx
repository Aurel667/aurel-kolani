import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aurel Kolani — Développeur FullStack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #050505 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow circles */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Mono tag */}
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: "#6ee7b7",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #6ee7b7 0%, #818cf8 50%, #f472b6 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Aurel Kolani
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#888888",
            fontWeight: 300,
            marginBottom: 12,
          }}
        >
          Développeur FullStack
        </div>

        {/* Stack */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 16,
          }}
        >
          {["TypeScript", "Node.js", "React", "Next.js", "Laravel"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  fontSize: 14,
                  color: "#555555",
                  border: "1px solid #1a1a1a",
                  borderRadius: 9999,
                  padding: "6px 16px",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 14,
            color: "#555555",
          }}
        >
          <span>Dakar, Sénégal</span>
          <span style={{ color: "#1a1a1a" }}>•</span>
          <span>aureliuskolani@gmail.com</span>
          <span style={{ color: "#1a1a1a" }}>•</span>
          <span>github.com/Aurel667</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
