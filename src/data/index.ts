import type { Service, Step, SkillBar, ContactItem, NavLink, Stat } from "../types";

export const services: Service[] = [
  {
    id: "web",
    title: "Sites & Sistemas Web",
    desc: "Do primeiro site da sua empresa a uma plataforma completa. Interfaces fáceis de usar, rápidas e construídas em torno do que o seu negócio precisa.",
    tags: ["React", "TypeScript", "Laravel", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Apps Mobile",
    desc: "Leve seu serviço para perto de quem usa. Aplicativos para iOS e Android, com uma experiência pensada para a rotina dos seus clientes.",
    tags: ["React Native", "Kotlin", "Expo", "Firebase"],
  },
  {
    id: "api",
    title: "APIs & Back-end",
    desc: "A estrutura por trás de uma boa experiência. APIs, bancos de dados e integrações planejados para manter seus sistemas conectados e acompanhar o crescimento.",
    tags: ["Node.js", "PHP", "Java","REST", "Docker"],
  },
  {
    id: "auto",
    title: "Automações & Integrações",
    desc: "Menos tarefas repetitivas, mais tempo para o que importa. Conecte suas ferramentas e transforme processos manuais em fluxos automáticos.",
    tags: ["Zapier", "n8n", "Webhooks", "CRM/ERP"],
  },
  {
    id: "process",
    title: "Otimização de Processos",
    desc: "Entenda onde a operação perde tempo. Mapeamento de fluxos, identificação de gargalos e ferramentas para tornar o dia a dia mais simples.",
    tags: ["Análise", "Consultoria", "BPM", "Dashboards"],
  },
];

export const steps: Step[] = [
  { num: "01", title: "Descoberta",        desc: "Conversa sem compromisso para entender o negócio, o problema e o que realmente importa." },
  { num: "02", title: "Proposta",          desc: "Escopo, prazo e investimento claros. Sem surpresas no final do projeto." },
  { num: "03", title: "Desenvolvimento",   desc: "Sua ideia ganha forma com entregas acompanhadas, atualizações frequentes e espaço para feedback." },
  { num: "04", title: "Testes & ajustes",  desc: "Conferimos os fluxos, refinamos os detalhes e preparamos o projeto para o uso real." },
  { num: "05", title: "Entrega & suporte", desc: "Publicação acompanhada e suporte pós-entrega. Você tem com quem contar no próximo passo." },
];

export const skillBars: SkillBar[] = [
  { label: "Front-end / UX",  pct: 95 },
  { label: "Back-end / APIs", pct: 95 },
  { label: "Mobile",          pct: 85 },
  { label: "Cloud & DevOps",  pct: 80 },
];

export const contactItems: ContactItem[] = [
  { icon: "mail",  label: "E-mail",      value: "articdevelopmentltda@gmail.com", href: "mailto:articdevelopmentltda@gmail.com" },
  { icon: "phone", label: "WhatsApp",    value: "+55 (41) 99102-1471", href: "https://wa.me/5541991021471" },
  { icon: "pin",   label: "Localização", value: "Curitiba, PR — Brasil & Remoto" },
];

export const navLinks: NavLink[] = [
  { id: "servicos", label: "Serviços"  },
  { id: "sobre",    label: "Sobre"     },
  { id: "processo", label: "Processo"  },
  { id: "contato",  label: "Contato"   },
];

export const socialLinks = { instagram: "https://www.instagram.com/articdevelopment/" };

export const stats: Stat[] = [
  { to: 10, suffix: "+", label: "Projetos entregues"     },
  { to: 3,  suffix: "+", label: "Anos de experiência"    },
  { to: 98, suffix: "%", label: "Clientes satisfeitos"   },
];
