import { useId } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ size = "md", showTagline = true, iconOnly = false }: LogoProps) {
  const id = useId();
  const iconSize = { sm: 36, md: 48, lg: 64 }[size];

  const Icon = () => (
    <svg aria-hidden="true" width={iconSize} height={iconSize} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={id + "-bg"} cx="45%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#1d8a7c"/>
          <stop offset="45%" stopColor="#0e6070"/>
          <stop offset="100%" stopColor="#082535"/>
        </radialGradient>
        <linearGradient id={id + "-ml"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#d8f0f5" stopOpacity="0.85"/>
        </linearGradient>
        <linearGradient id={id + "-mr"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d0ecf5" stopOpacity="0.72"/>
          <stop offset="100%" stopColor="#9dd4e8" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id={id + "-mb"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8dce8" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#7bc4d8" stopOpacity="0.28"/>
        </linearGradient>
        <clipPath id={id + "-cc"}><circle cx="200" cy="200" r="185"/></clipPath>
      </defs>
      <circle cx="200" cy="200" r="185" fill={`url(#${id}-bg)`}/>
      <circle cx="200" cy="200" r="185" fill="none" stroke="#3ab8c8" strokeWidth="1.5" opacity={0.2}/>
      <g clipPath={`url(#${id}-cc)`}>
        <polygon points="268,340 330,195 392,340" fill={`url(#${id}-mb)`}/>
        <polygon points="52,345 200,92 200,345" fill={`url(#${id}-ml)`}/>
        <polygon points="200,92 348,345 200,345" fill={`url(#${id}-mr)`}/>
        <polygon points="200,92 172,170 228,170" fill="white" opacity={0.93}/>
        <rect x="30" y="334" width="360" height="22" fill="#051a2a" opacity={0.2}/>
      </g>
    </svg>
  );

  if (iconOnly) return <Icon />;

  const textScale = { sm: 0.75, md: 1, lg: 1.35 }[size];
  const fs = Math.round(22 * textScale);
  const fsTag = Math.max(9, Math.round(8.5 * textScale));

  return (
    <div className="flex items-center gap-3">
      <Icon />
      <div className="flex flex-col leading-none">
        <span style={{
          fontFamily: "'Syne', 'Segoe UI', sans-serif",
          fontWeight: 800,
          fontSize: fs,
          background: "linear-gradient(135deg, #38BEFF, #0FFFCB)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.01em",
          lineHeight: 1.1,
        }}>
          Artic
        </span>
        {showTagline && (
          <span style={{
            fontFamily: "'Outfit', 'Segoe UI', sans-serif",
            fontSize: fsTag,
            color: "#8BA8C4",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            marginTop: 3,
          }}>
            Development
          </span>
        )}
      </div>
    </div>
  );
}
