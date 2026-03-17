import type { Service, Step, SkillBar, ContactItem, NavLink, Stat } from "../types";

export const services: Service[] = [
  {
    id: "web",
    title: "Sites & Sistemas Web",
    desc: "De landing pages de alta conversão a plataformas SaaS completas. Cada projeto é construído do zero — sem templates, sem atalhos.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Apps Mobile",
    desc: "Aplicativos iOS e Android que não travam, não bugam e não decepcionam. Híbrido ou nativo, do que o seu projeto precisar.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "api",
    title: "APIs & Back-end",
    desc: "Arquiteturas que suportam o crescimento sem suar. REST, GraphQL, microsserviços — infraestrutura sólida como gelo ártico.",
    tags: ["REST", "GraphQL", "AWS", "Docker"],
  },
  {
    id: "auto",
    title: "Automações & Integrações",
    desc: "Elimine o trabalho repetitivo. Conecto seus sistemas para que eles trabalhem enquanto você dorme.",
    tags: ["Zapier", "n8n", "Webhooks", "CRM/ERP"],
  },
  {
    id: "process",
    title: "Otimização de Processos",
    desc: "Análise fria dos seus fluxos de trabalho, identificação de gargalos e implementação de melhorias com impacto real.",
    tags: ["Análise", "Consultoria", "BPM", "Dashboards"],
  },
];

export const steps: Step[] = [
  { num: "01", title: "Descoberta",        desc: "Conversa sem compromisso para entender o negócio, o problema e o que realmente importa." },
  { num: "02", title: "Proposta",          desc: "Escopo, prazo e investimento claros. Sem surpresas no final do projeto." },
  { num: "03", title: "Desenvolvimento",   desc: "Código escrito com cuidado, atualizações frequentes e você sempre no loop." },
  { num: "04", title: "Testes & QA",       desc: "Cada feature passa por testes antes de chegar em você. Qualidade não é negociável." },
  { num: "05", title: "Entrega & Suporte", desc: "Deploy acompanhado e suporte pós-entrega. O projeto não acaba no go-live." },
];

export const skillBars: SkillBar[] = [
  { label: "Front-end / UX",  pct: 95 },
  { label: "Back-end / APIs", pct: 95 },
  { label: "Mobile",          pct: 85 },
  { label: "Cloud & DevOps",  pct: 80 },
];

export const contactItems: ContactItem[] = [
  { icon: "mail",  label: "E-mail",      value: "pinguas.company@gmail.com" },
  { icon: "phone", label: "WhatsApp",    value: "+55 (41) 99102-1471" },
  { icon: "pin",   label: "Localização", value: "Curitiba, PR — Brasil & Remoto" },
];

export const navLinks: NavLink[] = [
  { id: "servicos", label: "Serviços"  },
  { id: "sobre",    label: "Sobre"     },
  { id: "processo", label: "Processo"  },
  { id: "contato",  label: "Contato"   },
];

export const stats: Stat[] = [
  { to: 10, suffix: "+", label: "Projetos entregues"     },
  { to: 3,  suffix: "+", label: "Anos de experiência"    },
  { to: 98, suffix: "%", label: "Clientes satisfeitos"   },
];
