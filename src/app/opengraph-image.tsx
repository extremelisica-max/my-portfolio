import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const fontPath = join(
    process.cwd(),
    "public/Inter-Regular.ttf"
  );
  const fontData = readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F2E9E2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Бейдж в правом верхнем углу */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            border: "1.5px solid rgba(14, 14, 14, 0.25)",
            borderRadius: "9999px",
            padding: "8px 20px",
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(14, 14, 14, 0.6)",
            letterSpacing: "0.02em",
          }}
        >
          Открыт к предложениям
        </div>

        {/* Теглайн */}
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(14, 14, 14, 0.5)",
            letterSpacing: "0.04em",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          B2B · SaaS · CRM · Figma
        </div>

        {/* Должность */}
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            fontWeight: 300,
            color: "#0E0E0E",
            letterSpacing: "0.01em",
            marginBottom: "16px",
          }}
        >
          Product Designer
        </div>

        {/* Имя */}
        <div
          style={{
            display: "flex",
            fontSize: "112px",
            fontWeight: 400,
            color: "#0E0E0E",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          Карсунцев
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
