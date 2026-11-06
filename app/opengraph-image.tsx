import { ImageResponse } from "next/og";
import { metrics, profile } from "@/lib/content";

export const alt = "Nakshatra Joshi — Software Engineer, backend systems & agentic AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0C0E",
          padding: "64px 72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4FDD93" }} />
          <div style={{ color: "#98A4B0", fontSize: 22, letterSpacing: 3 }}>
            {profile.statusShort.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#E8ECF1", fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>
            I build agents that
          </div>
          <div style={{ color: "#4FDD93", fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>
            survive production.
          </div>
          <div style={{ color: "#98A4B0", fontSize: 26, marginTop: 24 }}>
            {[profile.name, profile.role, profile.focus].join("  ·  ")}
          </div>
        </div>

        <div style={{ display: "flex", borderTop: "1px solid #232930", paddingTop: 26, gap: 56 }}>
          {metrics.slice(0, 3).map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#E8ECF1", fontSize: 38 }}>{m.value}</div>
              <div style={{ color: "#65717D", fontSize: 19, marginTop: 4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
