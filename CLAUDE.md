# CLAUDE.md

Site institucional da **ArticWeb Development**, empresa de desenvolvimento
de software de João Pedro Plinta (CNPJ aberto). Landing page single-page
(Hero, Services, About, Process, Contact, Footer), tema dark ártico
azul/ciano.

## Stack

React 18 + TypeScript + Tailwind CSS 3 + Vite 5. Formulário de contato via
EmailJS (`@emailjs/browser`).

## Comandos

```bash
npm install
npm run dev          # dev server (Vite)
npm run build         # tsc + build de produção
npm run typecheck     # tsc --noEmit
npm run preview       # preview do build
```

## Convenções

- **Conteúdo em `src/data/index.ts`**, tipado por `src/types/index.ts`.
  Nunca hardcode texto de serviço/depoimento/link direto no componente —
  edite os arrays lá.
- **Paleta fixa**: fundo `#080E1A`/`#0D1525`, texto `#E8F4FF`, acento
  `#38BEFF`→`#0FFFCB` (gradiente "aurora"), suporte `#8BA8C4`. Título em
  `'Syne', sans-serif`, corpo em `'Outfit', sans-serif`. Não introduzir cor
  fora dessa paleta sem pedir.
- **`src/config/emailjs.ts` não é commitado** (`.gitignore`) — chaves reais
  só localmente. `src/config/emailjs.example.ts` é o template público.
- Componentes de seção ficam em `src/components/`, um arquivo por seção,
  seguindo o id usado no scroll (`#servicos`, `#sobre`, `#processo`,
  `#contato`) — esses ids são o contrato com `navLinks` e `useScrollTo`,
  não renomear um sem atualizar o outro.
