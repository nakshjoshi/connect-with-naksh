import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/lib/content";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // params is a Promise in Next 16 — awaiting it is what makes each
  // case study get its own card instead of a shared empty fallback.
  const { slug } = await params;
  const study = getCaseStudy(slug);

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
            {(study ? `${study.kind} · ${study.year}` : "CASE STUDY").toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#E8ECF1", fontSize: 68, lineHeight: 1.05, letterSpacing: -2 }}>
            {study?.name ?? "Case study"}
          </div>
          <div style={{ color: "#98A4B0", fontSize: 28, marginTop: 20, lineHeight: 1.4 }}>
            {study?.tagline ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", borderTop: "1px solid #232930", paddingTop: 26, gap: 56 }}>
          {(study?.stats ?? []).slice(0, 3).map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#4FDD93", fontSize: 38 }}>{s.value}</div>
              <div style={{ color: "#65717D", fontSize: 19, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
