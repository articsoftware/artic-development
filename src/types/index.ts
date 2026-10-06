export type ServiceLayerId = "surface" | "depth";

export interface Service {
  id: string;
  /** "surface": o que as pessoas usam; "depth": o que sustenta a operação. */
  layer: ServiceLayerId;
  title: string;
  summary: string;
  desc: string;
  tags: string[];
  examples: string[];
  formLabel: string;
}

export interface ServiceLayer {
  id: ServiceLayerId;
  index: string;
  label: string;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceRequest {
  value: string;
  requestId: number;
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
