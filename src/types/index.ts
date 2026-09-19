export interface Service {
  id: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface SkillBar {
  label: string;
  pct: number;
}

export interface ContactItem {
  href?: string;
  icon: "mail" | "phone" | "pin";
  label: string;
  value: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Stat {
  to: number;
  suffix: string;
  label: string;
}
