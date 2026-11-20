import { ReactNode } from "react";

interface SvgProps { children: ReactNode; size?: number; sw?: number; className?: string; }
const Svg = ({ children, size = 24, sw = 1.5, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

interface SzProps { size?: number; }

export const MonitorIcon = ({ size = 22 }: SzProps) => <Svg size={size}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M9 10l3 3 3-3" /></Svg>;
export const MobileIcon  = ({ size = 22 }: SzProps) => <Svg size={size}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4" /><circle cx="12" cy="18" r="1" fill="currentColor" /></Svg>;
export const ApiIcon     = ({ size = 22 }: SzProps) => <Svg size={size}><path d="M4 6h16M4 12h16M4 18h16" /><path d="M8 6v12M16 6v12" /></Svg>;
export const AutoIcon    = ({ size = 22 }: SzProps) => <Svg size={size}><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8.5 6h7M6.8 8.4L10.8 15.8M17.2 8.4L13.2 15.8" /></Svg>;
export const ChartIcon   = ({ size = 22 }: SzProps) => <Svg size={size}><path d="M3 3v18h18" /><path d="M7 16l4-8 4 6 3-4" /></Svg>;
export const MailIcon    = ({ size = 18 }: SzProps) => <Svg size={size}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></Svg>;
export const PhoneIcon   = ({ size = 18 }: SzProps) => <Svg size={size}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12 19.79 19.79 0 012.1 3.36 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></Svg>;
export const PinIcon     = ({ size = 18 }: SzProps) => <Svg size={size}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></Svg>;
export const MenuIcon    = () => <Svg size={20}><path d="M3 7h18M3 12h18M3 17h18" /></Svg>;
export const XIcon       = () => <Svg size={20}><path d="M18 6L6 18M6 6l12 12" /></Svg>;
export const CheckIcon   = ({ size = 15 }: SzProps) => <Svg size={size} sw={1.9}><path d="M20 6L9 17l-5-5" /></Svg>;
export const ArrowIcon   = ({ size = 16 }: SzProps) => <Svg size={size}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
export const ArrowUpRightIcon = ({ size = 15 }: SzProps) => <Svg size={size}><path d="M7 17L17 7M8 7h9v9" /></Svg>;
export const SparkIcon   = ({ size = 13 }: SzProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0.5L9.8 6.2L15.5 8L9.8 9.8L8 15.5L6.2 9.8L0.5 8L6.2 6.2L8 0.5Z" />
  </svg>
);
export const LayersIcon  = ({ size = 15 }: SzProps) => <Svg size={size}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></Svg>;

export const serviceIcons: Record<string, ReactNode> = {
  web:     <MonitorIcon />,
  mobile:  <MobileIcon />,
  api:     <ApiIcon />,
  auto:    <AutoIcon />,
  process: <ChartIcon />,
};

export const contactIcons: Record<string, ReactNode> = {
  mail:  <MailIcon />,
  phone: <PhoneIcon />,
  pin:   <PinIcon />,
};
