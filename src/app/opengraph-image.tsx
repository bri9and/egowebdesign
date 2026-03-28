import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "KPT Designs - Modern Websites That Convert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(255,128,0,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* KPT Wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: "#FF8000",
                letterSpacing: "12px",
              }}
            >
              KPT
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Designs
            </div>
          </div>

          {/* Accent line */}
          <div
            style={{
              width: 120,
              height: 2,
              background: "linear-gradient(90deg, #FF8000, #FF9933)",
              marginBottom: 28,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.4,
              marginBottom: 36,
            }}
          >
            Modern Websites That Convert
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            kptdesigns.com
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #0A0A0A, #FF8000, #FF9933, #FF8000, #0A0A0A)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
