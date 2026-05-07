import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ebano Labs — Websites that generate leads. Not excuses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: 700,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,146,42,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" rx="1" fill="#C9922A" opacity="0.9" />
            <rect x="13" y="2" width="9" height="9" rx="1" fill="#C9922A" opacity="0.4" />
            <rect x="2" y="13" width="9" height="9" rx="1" fill="#C9922A" opacity="0.4" />
            <rect x="13" y="13" width="9" height="9" rx="1" fill="#C9922A" opacity="0.15" />
          </svg>
          <span style={{ color: "#F5F0E8", fontSize: 20, fontWeight: 600, letterSpacing: "0.15em" }}>
            EBANO LABS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F5F0E8",
            fontSize: 64,
            fontWeight: 300,
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Websites that{" "}
          <span style={{ color: "#C9922A", fontWeight: 700 }}>generate leads.</span>
        </div>
        <div
          style={{
            color: "#F5F0E8",
            fontSize: 64,
            fontWeight: 300,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Not excuses.
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#9A9590",
            fontSize: 22,
            marginTop: 32,
            letterSpacing: "0.05em",
          }}
        >
          Fast, conversion-focused websites for home service businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
