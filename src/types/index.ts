export interface Service {
  id: string;
  title: string;
  summary: string;
  desc: string;
  tags: string[];
  examples: string[];
  formLabel: string;
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
