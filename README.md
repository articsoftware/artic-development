<div align="center">
  <img src="src/assets/logo-icon.svg" width="80" alt="Artic Development logo" />
  <h1>Artic Development</h1>
  <p>Site institucional — React + TypeScript + Tailwind CSS</p>

  ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript)
  ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
  ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)
</div>

---

## 📋 Sobre o projeto

Site institucional da **Artic Development** (Artic Desenvolvimento de Software LTDA) — empresa de desenvolvimento de software fundada por João Pedro Plinta ([@articweb.development](https://www.instagram.com/articweb.development/)).

Construído com foco em performance, design ártico e código limpo.

## 🚀 Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5.5 | Tipagem estática |
| Tailwind CSS | 3.4 | Estilização |
| Vite | 5.4 | Build tool |
| EmailJS | 4.4 | Formulário de contato |

## 📁 Estrutura

```
src/
├── assets/          # Logos SVG
├── components/      # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── Icons.tsx
├── config/
│   └── emailjs.ts   # lê as chaves de variáveis de ambiente (VITE_*)
├── data/            # Conteúdo do site (serviços, FAQ, contato, etc.)
├── hooks/           # Custom hooks
└── types/           # Interfaces TypeScript
```

## ⚙️ Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📧 Configurar EmailJS

As chaves do EmailJS vêm de variáveis de ambiente, lidas em `src/config/emailjs.ts`.
Crie um `.env.local` na raiz (já ignorado pelo `.gitignore`):

```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> Crie sua conta em [emailjs.com](https://www.emailjs.com) — plano gratuito permite 200 emails/mês.

## 🌐 Deploy

O projeto está pronto para deploy em qualquer plataforma estática. Lembre de configurar
as variáveis `VITE_EMAILJS_*` no painel da plataforma escolhida.

**Vercel** (recomendado)
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Arraste a pasta dist/ para o painel do Netlify
```

## 🏢 Dados da empresa

- Razão social: Artic Desenvolvimento de Software LTDA
- CNPJ: 69.133.740/0001-00
- São José dos Pinhais, PR

## 📱 Contato

- Instagram: [@articweb.development](https://www.instagram.com/articweb.development/)
- E-mail: articdevelopmentltda@gmail.com
- WhatsApp: +55 (41) 99102-1471

---

<div align="center">
  Made with ❄️ by <strong>João Pedro Plinta</strong> — Artic Development
</div>
