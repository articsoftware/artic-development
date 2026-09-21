# Experimento de interação — Artic

Branch: `feat/uiux-motion`, criada a partir de `feat/iceberg-visual` no commit `6a7d573` (árvore limpa). Não altera a versão aprovada na branch de origem.

## Direção

A skill UI/UX Pro Max orientou movimento pontual, tempos compartilhados, resposta rápida e preferência por movimento reduzido. Paleta clara, composição e imagem do iceberg permanecem iguais. Sem parallax, rolagem controlada ou animações repetitivas nos cards.

- Introdução: entrada única e discreta de 450 ms / 8 px.
- Serviços e menu: abertura em 280 ms, fechamento em 180 ms; interrupções não bloqueiam novos cliques.
- Botões principais: resposta pequena à pressão em 120 ms; não altera a área de layout.
- Formulário: indicador durante o envio e transições de opacidade para erro/sucesso. Campos preservados no erro, foco preservado na confirmação e no recomeço.
- Movimento reduzido: transições imediatas, sem deslocamento, escala ou rotação do indicador.

### Extensão ao site completo

- Sobre: entrada única em opacidade do manifesto, sem deslocar o conteúdo nem animar cada parágrafo.
- Processo: linhas das cinco etapas desenhadas uma vez, com pequena sequência; textos sempre visíveis.
- Dúvidas: acordeões animados com botões semânticos, Enter/Espaço, foco visível e possibilidade de abrir várias respostas.
- Navegação desktop: indicador ativo animado; links principais com resposta à pressão.
- Contato: entrada do texto, feedback nos canais de contato e expansão dos detalhes opcionais. O orçamento fica em estado controlado e em um campo oculto para continuar no envio mesmo quando seu painel está fechado.
- Rodapé: links com área de toque de 44 px, feedback de interação e retorno ao topo com foco no título. Sem animação decorativa de entrada.
- Links do banner e convites entre seções usam o mesmo tratamento. A paisagem continua estática.

Implementação com Framer Motion 13.4, `LazyMotion`, `m` e `MotionConfig`. O componente `Disclosure` mantém os IDs de controle e bloqueia o foco com `inert` assim que fecha. A altura é animada apenas nas expansões locais (serviços, menu, FAQ e detalhes do formulário) para acompanhar o conteúdo variável; não há animação contínua do layout. `Reveal` respeita movimento reduzido e revela imediatamente o grupo ao receber foco por teclado.

Referências oficiais: [acessibilidade](https://motion.dev/docs/react-accessibility), [AnimatePresence](https://motion.dev/docs/react-animate-presence), [LazyMotion](https://motion.dev/docs/react-lazy-motion), [entrada no viewport](https://motion.dev/docs/react-scroll-animations).

## Validação

Build TypeScript/Vite e `git diff --check` passaram. Testes de navegador em 1440, 768, 390 e 320 px, com movimento normal e reduzido:

- Sem rolagem horizontal; cards abrem e fecham, inclusive com cliques interrompendo transições.
- Seleção de serviço preenche e foca o formulário.
- Escape fecha o menu e devolve o foco; links levam o foco à seção; mudança para desktop fecha o menu e preserva foco visível.
- Loading, erro, retenção dos campos, sucesso e novo envio simulados. Nenhum e-mail real enviado.
- Sem erros JavaScript. Captura de desktop revisada para preservar o visual aprovado.
- Extensão completa validada: FAQ por Enter/Espaço e com duas respostas abertas; orçamento mantido ao fechar/reabrir e incluído no envio simulado; retorno ao topo com foco no título; grupos revelados e sem transbordamento em 1440, 390 e 320 px. Capturas das seções adicionais revisadas em desktop e celular. Todos esses testes passaram também com movimento reduzido.

JavaScript de produção: cerca de 86 KB gzip (antes: 55 KB). A imagem permanece em 131 KB. Reavaliar esse custo se o experimento não for aprovado.

## Repetir os testes

É necessário ter Playwright e um Chromium disponíveis. O teste aceita `PLAYWRIGHT_MODULE` (caminho do entrypoint ESM) e `BROWSER_PATH` (executável); sem essas variáveis, usa a instalação padrão de Playwright.

Em um terminal, iniciar uma instância exclusiva com dados fictícios:

```sh
VITE_EMAILJS_SERVICE_ID=test-service VITE_EMAILJS_TEMPLATE_ID=test-template VITE_EMAILJS_PUBLIC_KEY=test-key npm run dev -- --host 127.0.0.1 --port 5175 --strictPort
```

Em outro:

```sh
TEST_URL=http://127.0.0.1:5175 npm run test:motion
```

As requisições ao EmailJS são interceptadas pelo teste. Não usar os dados fictícios no deploy.

## Dependências preexistentes

O `npm audit` online reportou 9 pacotes com alertas (2 baixos, 2 moderados, 5 altos) na cadeia já existente: Babel, baseline-browser-mapping, Browserslist, esbuild, nanoid, picomatch, PostCSS, postcss-selector-parser e Vite. O diff do lockfile adiciona apenas Framer Motion e suas três dependências; nenhum desses pacotes foi atualizado. Sem alertas atribuídos ao Framer Motion nesta consulta. Não foi aplicado `audit fix` nem atualização major; tratar em uma tarefa separada.
