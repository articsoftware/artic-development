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

Site institucional da **Artic Development** — empresa de desenvolvimento de software fundada por João Pedro Plinta ([@pinguim](https://www.instagram.com/articweb.development/)).

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
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── Icons.tsx
├── config/
│   └── emailjs.ts   # ⚠️ não commitado (.gitignore)
├── data/            # Conteúdo do site
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

O arquivo `src/config/emailjs.ts` está no `.gitignore` por segurança.
Crie o arquivo localmente com suas chaves:

```ts
// src/config/emailjs.ts
export const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
export const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
export const EMAILJS_PUBLIC_KEY  = "xxxxxxxxxxxxxxxxxxxx";
```

> Crie sua conta em [emailjs.com](https://www.emailjs.com) — plano gratuito permite 200 emails/mês.

## 🌐 Deploy

O projeto está pronto para deploy em qualquer plataforma estática:

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

## 📱 Contato

- Instagram: [@articweb.development](https://www.instagram.com/articweb.development/)
- Email: joao@articweb.dev

---

<div align="center">
  Made with ❄️ by <strong>João Pedro Plinta</strong> — Artic Development
</div>
