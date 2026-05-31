import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgb(2, 44, 34), rgb(6, 78, 59) 55%, rgb(4, 120, 87))",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
          }}
        >
          AO
        </div>
      </div>
    ),
    size
  )
}
