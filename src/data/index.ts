import type { Service, ServiceLayer, Step, FAQItem, ContactItem, NavLink } from "../types";

export const services: Service[] = [
  {
    id: "web",
    layer: "surface",
    title: "Sites & Sistemas Web",
    summary: "Uma presença melhor. Uma operação mais simples.",
    formLabel: "Site ou sistema web",
    examples: ["Sites institucionais e landing pages", "Sistemas de gestão e portais", "Plataformas e produtos digitais"],
    desc: "Do primeiro site da sua empresa a uma plataforma completa. Interfaces fáceis de usar, rápidas e construídas em torno do que o seu negócio precisa.",
    tags: ["React", "TypeScript", "Laravel", "PostgreSQL"],
  },
  {
    id: "mobile",
    layer: "surface",
    title: "Apps Mobile",
    summary: "Seu serviço mais perto de quem usa.",
    formLabel: "App mobile",
    examples: ["Aplicativos para iOS e Android", "Experiências de autoatendimento", "Integração com os seus sistemas"],
    desc: "Leve seu serviço para perto de quem usa. Aplicativos para iOS e Android, com uma experiência pensada para a rotina dos seus clientes.",
    tags: ["React Native", "Kotlin", "Expo", "Firebase"],
  },
  {
    id: "api",
    layer: "depth",
    title: "APIs & Back-end",
    summary: "A estrutura para conectar e crescer.",
    formLabel: "API / Back-end",
    examples: ["APIs para aplicações e parceiros", "Integrações e regras de negócio", "Organização e acesso aos dados"],
    desc: "A estrutura por trás de uma boa experiência. APIs, bancos de dados e integrações planejados para manter seus sistemas conectados e acompanhar o crescimento.",
    tags: ["Node.js", "PHP", "Java","REST", "Docker"],
  },
  {
    id: "auto",
    layer: "depth",
    title: "Automações & Integrações",
    summary: "Menos tarefas manuais. Mais tempo para o negócio.",
    formLabel: "Automações e integrações",
    examples: ["Conexão entre CRM, ERP e ferramentas", "Fluxos de tarefas e notificações", "Sincronização de informações"],
    desc: "Menos tarefas repetitivas, mais tempo para o que importa. Conecte suas ferramentas e transforme processos manuais em fluxos automáticos.",
    tags: ["Zapier", "n8n", "Webhooks", "CRM/ERP"],
  },
  {
    id: "process",
    layer: "depth",
    title: "Otimização de Processos",
    summary: "Clareza para encontrar e resolver gargalos.",
    formLabel: "Otimização de processos",
    examples: ["Mapeamento da operação", "Identificação de tarefas repetitivas", "Painéis para acompanhar processos"],
    desc: "Entenda onde a operação perde tempo. Mapeamento de fluxos, identificação de gargalos e ferramentas para tornar o dia a dia mais simples.",
    tags: ["Análise", "Consultoria", "BPM", "Dashboards"],
  },
];

export const serviceLayers: ServiceLayer[] = [
  { id: "surface", index: "01", label: "Na superfície", title: "O que as pessoas usam", desc: "A parte que seus clientes e sua equipe veem e tocam todos os dias." },
  { id: "depth",   index: "02", label: "Abaixo da superfície", title: "O que sustenta a operação", desc: "A estrutura que conecta sistemas, organiza dados e tira tarefas repetitivas do caminho." },
];

export const heroFacts = ["Disponível para novos projetos", "Conversa direta com quem desenvolve", "Curitiba, PR · Atendimento Remoto em todo o Brasil"];

export const steps: Step[] = [
  { num: "01", title: "Descoberta", desc: "Uma conversa para entender o negócio, o problema e o que realmente importa.", deliverable: "Objetivos e prioridades definidos" },
  { num: "02", title: "Proposta", desc: "Alinhamos o que será construído e como vamos trabalhar antes de começar.", deliverable: "Escopo, prazo e investimento" },
  { num: "03", title: "Desenvolvimento", desc: "Sua ideia ganha forma com atualizações frequentes e espaço para feedback.", deliverable: "Versões para acompanhar e validar" },
  { num: "04", title: "Testes & ajustes", desc: "Conferimos os fluxos e refinamos os detalhes para o uso real.", deliverable: "Uma solução revisada para a entrega" },
  { num: "05", title: "Entrega & suporte", desc: "Publicação acompanhada e suporte pós-entrega conforme o escopo combinado.", deliverable: "Projeto publicado e próximos passos alinhados" },
];

export const expertise = ["Front-end / UX", "Back-end / APIs", "Mobile", "Cloud & DevOps"];

export const contactItems: ContactItem[] = [
  { icon: "mail",  label: "E-mail",      value: "articdevelopmentltda@gmail.com", href: "mailto:articdevelopmentltda@gmail.com" },
  { icon: "phone", label: "WhatsApp",    value: "+55 (41) 99102-1471", href: "https://wa.me/5541991021471" },
  { icon: "pin",   label: "Localização", value: "Curitiba, PR — Brasil & Remoto" },
];

export const navLinks: NavLink[] = [
  { id: "servicos", label: "Serviços"  },
  { id: "sobre",    label: "Sobre"     },
  { id: "processo", label: "Processo"  },
  { id: "duvidas",  label: "Dúvidas"   },
  { id: "contato",  label: "Contato"   },
];

export const socialLinks = { instagram: "https://www.instagram.com/articdevelopment/" };

export const faqItems: FAQItem[] = [
  { question: "Preciso ter a ideia toda definida?", answer: "Não. A primeira conversa serve para entender seu objetivo e o que precisa ser resolvido. Pode trazer uma ideia inicial, um processo que toma tempo ou um sistema que precisa melhorar." },
  { question: "Como são definidos o valor e o prazo?", answer: "Depois de entender o projeto, organizamos o escopo, as prioridades e as integrações necessárias. A proposta apresenta o investimento e o prazo antes do início do desenvolvimento." },
  { question: "Como acompanho o desenvolvimento?", answer: "Você fala diretamente com quem desenvolve. Ao longo do projeto, recebe atualizações e versões para acompanhar o progresso e dar feedback." },
  { question: "E depois que o projeto é entregue?", answer: "A publicação é acompanhada e o suporte após a entrega é definido na proposta. Novas funcionalidades e mudanças de escopo podem ser planejadas para as próximas etapas." },
];

export const budgetOptions = ["Até R$ 5.000", "R$ 5.000 – R$ 15.000", "R$ 15.000 – R$ 50.000", "Acima de R$ 50.000", "A definir / Em aberto"];
