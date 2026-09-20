# Redesign da Artic Development

Plano criado em 19/09/2026. Base: revisão dos componentes, estilos e imagens da versão atual.

## Objetivo e público

Apresentar a Artic como uma empresa de software sob medida com atendimento direto do fundador. A página deve ajudar quem decide por um negócio a entender a oferta, reconhecer seu problema, avaliar a capacidade de execução e iniciar uma conversa.

O resultado desejado é uma identidade ártica reconhecível, com leitura confortável e um caminho claro até o contato. A prioridade é clareza e confiança, não aumentar a quantidade de efeitos.

## Diagnóstico

| Ponto atual | Problema | Mudança proposta | Prioridade |
| --- | --- | --- | --- |
| Abertura com montanha e slogan | A metáfora tem personalidade, mas a oferta aparece apenas no parágrafo e a abertura é longa no celular | Explicitar software sob medida, ajustar escala da montanha e aproximar o CTA do início | Alta |
| Serviços em acordeão | Os nomes técnicos aparecem; os benefícios ficam escondidos | Resumo sempre visível e detalhe com exemplos de entregas | Alta |
| CTA do serviço | O visitante perde a escolha ao chegar ao formulário | Selecionar automaticamente o serviço correspondente, permitindo alteração | Alta |
| Confiança | Não há trabalhos reais, telas de projetos ou depoimentos identificáveis | Preparar uma seção de 2–3 cases somente com material confirmado | Alta, depende de conteúdo |
| Processo | Descreve atividades, mas deixa pouco claro o que o cliente recebe | Acrescentar uma entrega concreta a cada etapa | Média |
| Dúvidas antes do contato | Faltam respostas a perguntas sobre escopo, prazo e briefing | FAQ curta, baseada no processo já apresentado | Média |
| Leitura | Legendas e detalhes usam 10–12 px; seções repetem composições semelhantes | Aumentar texto útil, reduzir decoração sem função e variar o ritmo entre as seções | Alta |
| Navegação | Não indica seção atual; o menu precisa reagir à mudança de tamanho | Estado ativo com aria-current e fechamento do menu ao entrar no desktop | Média |
| Formulário | Orçamento ocupa o mesmo peso de campos essenciais | Briefing básico primeiro e informações opcionais em bloco expansível | Alta |
| Retorno do formulário | Sucesso remove o botão em foco; erro depende de referência espacial ao e-mail | Foco no sucesso e alternativas de contato clicáveis no próprio erro | Média |
| Fontes e marca | Fontes chegam por CSS @import; logos repetem IDs de gradiente | Carregamento declarado no HTML e IDs únicos por instância | Média |
| Dados antigos | Existem percentuais de habilidades e satisfação sem fonte no código | Não publicar métricas sem confirmação; simplificar áreas de atuação | Média |

## Direção visual

### Conceito

“Precisão da superfície à estrutura”: a montanha fica como assinatura da marca, e a interface comunica organização por hierarquia, espaçamento e relações claras entre conteúdos.

### Tokens

| Nome | Valor | Uso |
| --- | --- | --- |
| Noite | #080E1A | Fundo principal |
| Profundidade | #0D1525 | Superfícies de apoio |
| Gelo | #E8F4FF | Títulos e informação principal |
| Azul glacial | #38BEFF | Ações, foco e seleção |
| Névoa | #8BA8C4 | Texto de apoio |
| Aurora | #0FFFCB | Pequenos sinais de disponibilidade e marca |

- Syne 600/700 para títulos; 800 reservado à marca.
- Outfit 400/500 para corpo, controles e informações de apoio.
- Corpo entre 15 e 18 px; controles com pelo menos 14 px quando possível.
- Texto corrido alinhado à esquerda, com aproximadamente 45–70 caracteres por linha.
- Escala de espaço: 8, 12, 16, 24, 32, 48, 64, 96 px.
- Cantos discretos: 5 px em controles, 12 px nas superfícies que agrupam uma tarefa.
- Movimento apenas como resposta à interação; respeitar movimento reduzido.

### Revisão da proposta

Uma alternativa seria usar grandes cartões iguais com números e contadores. Isso repetiria uma composição genérica e daria destaque a métricas sem comprovação. A solução escolhida mantém a escultura de gelo, usa serviços com benefícios visíveis e dá mais peso a entregas concretas e ao contato direto.

## Arquitetura e composição

Desktop: abertura assimétrica, serviços com leitura horizontal, cases quando disponíveis, apresentação pessoal, processo com entregáveis, dúvidas e contato.

```text
┌ marca ───────── navegação ativa ───────── conversar ┐
│ software sob medida         relevo de gelo         │
│ slogan / descrição          com escala contida     │
│ CTA principal + serviços                          │
├ contexto: contato direto / escopo / atendimento ───┤
│ serviços: título + benefício visível + expandir    │
│ seleção → descrição / entregas / iniciar projeto   │
├ projetos reais: case principal + 1–2 complementos ─┤
│ fundador e forma de trabalhar                      │
│ processo: etapa → o que o cliente recebe           │
│ dúvidas: perguntas curtas e respostas diretas      │
│ contato direto         formulário contextualizado │
└ marca / navegação / dados da empresa ──────────────┘
```

Mobile: uma coluna; título, explicação e CTA antes da ilustração compacta; resumos de serviços sempre visíveis; campos em coluna; nada fixo cobrindo conteúdo.

Os projetos não ganham espaço vazio ou exemplos fictícios enquanto o material não estiver disponível.

## Plano por seção

### 1. Cabeçalho e abertura

- Manter nome, logo, slogan e correção da sobreposição da montanha.
- Explicitar a categoria “Software sob medida”.
- Dar prioridade visual ao CTA e à explicação da oferta.
- Reduzir altura ociosa, especialmente no celular.
- Indicar a seção atual e manter navegação por teclado, Escape e link de pular conteúdo.

### 2. Serviços

- Manter os cinco serviços e as tecnologias atualizadas pelo proprietário.
- Exibir o resultado procurado pelo cliente mesmo com o painel fechado.
- Dentro de cada painel: explicação, exemplos de entregas e tecnologias.
- Tratar exemplos como possibilidades de escopo, não como pacotes garantidos.
- O CTA leva ao contato com o serviço selecionado.

### 3. Cases e prova de trabalho — próxima etapa com conteúdo real

- Selecionar 2–3 projetos autorizados para exibição pública.
- Para cada case: nome, contexto, papel da Artic, telas reais, solução e link.
- Resultados quantitativos apenas com fonte e período.
- Um projeto principal maior e até dois complementares; imagens com dimensões explícitas e carregamento adiado.
- Preparar texto alternativo útil; nada de carrossel automático.
- Solicitar foto real do fundador se houver interesse em substituir as iniciais.

### 4. Sobre e processo

- Manter o atendimento direto como diferencial.
- Áreas de atuação sem percentuais arbitrários.
- Destacar o que o cliente recebe em cada etapa, como escopo definido e versão para validação.
- Remover o pequeno gráfico decorativo que pode parecer um resultado medido.

### 5. FAQ e contato

- Responder dúvidas sobre briefing, orçamento, prazo e acompanhamento.
- Não inventar preço inicial, garantia, condições contratuais ou prazo fixo de entrega.
- Manter nome, e-mail e mensagem como campos essenciais.
- Serviço contextualizado; orçamento em “Detalhes opcionais”.
- Continuar usando os nomes de campos existentes do EmailJS.
- Manter valores preenchidos após erro, oferecer e-mail/WhatsApp e levar o foco ao sucesso.
- Testes usam requisições simuladas; envio real não faz parte da conferência visual.

### 6. Base técnica e acabamento

- Centralizar novos textos e opções em src/data/index.ts.
- Tokens sem alterar a paleta aprovada.
- Evitar IDs duplicados no SVG do logo.
- Carregar fontes via link com display=swap e conexões antecipadas.
- Manter contraste, foco e navegação visíveis em telas pequenas.
- Não adicionar dependências ou animações pesadas para este redesign.

## Execução

### Etapa A — clareza e conversão, nesta rodada

- [x] Abertura mais clara e compacta.
- [x] Serviços com benefícios e exemplos de entregas.
- [x] Serviço escolhido refletido no formulário.
- [x] Processo com entregáveis.
- [x] FAQ baseada no conteúdo existente.
- [x] Formulário com informações opcionais recolhidas e retorno acessível.

### Etapa B — consistência e qualidade, nesta rodada

- [x] Navegação ativa e comportamento do menu ao redimensionar.
- [x] Legibilidade e ajustes de ritmo no mobile.
- [x] Fontes no HTML e IDs únicos no logo.
- [x] Áreas de atuação sem percentuais sem fonte.
- [x] Build, inspeção visual e teste dos fluxos alterados.

### Etapa C — conteúdo e lançamento, após material confirmado

- [ ] Receber projetos e autorização para divulgação.
- [ ] Implementar cases com imagens reais e textos específicos.
- [ ] Avaliar foto real do fundador.
- [ ] Confirmar domínio final, imagem de compartilhamento e metadados de publicação.
- [ ] Conferir envio real do contato com autorização e configuração de produção.

## Critérios de aceite

- Sem corte de texto ou controles fora da tela em 320, 390, 640, 768, 1024 e 1440 px.
- Primeira tela comunica o serviço e apresenta uma ação clara.
- Serviço escolhido chega ao formulário correto; o visitante pode trocar a escolha.
- Acordeões, FAQ e navegação utilizáveis por teclado.
- Sem envio externo nos testes; testar sucesso, erro, carregamento e novo envio por simulação.
- Respeitar movimento reduzido e conservar o foco após interações relevantes.
- Preservar e-mail, Instagram, tecnologias e dados legais atualizados pelo proprietário.
- Build de produção e git diff --check aprovados.
- Inspeção de imagens do desktop e mobile antes da entrega.

## Registro de implementação

### Etapas A e B concluídas na branch feat/redesign-artic

- Categoria da oferta explicitada na abertura, CTA antecipado e ilustração mais compacta no celular. Slogan e ordem correta das camadas da montanha preservados.
- Resumos de benefícios visíveis em todos os serviços. Painéis com exemplos de escopo e tecnologias mantidas conforme atualização do proprietário.
- Escolha de serviço compartilhada com o contato, inclusive ao iniciar um novo projeto após uma mensagem enviada.
- Processo com cinco entregáveis, em colunas no desktop e sequência vertical no celular. A revisão visual levou à composição horizontal para reduzir o vazio ao lado de uma lista longa.
- FAQ com quatro perguntas e interação nativa por teclado.
- Orçamento em bloco opcional; erro conserva os campos e oferece os contatos atuais. Sucesso recebe foco, e “Enviar outra mensagem” retorna ao nome.
- Menu indica a seção atual, fecha com Escape e ao mudar para desktop. Logos com IDs independentes.
- Removidos dos dados os percentuais de habilidade e satisfação sem fonte; as áreas de atuação continuam visíveis.

### Validação realizada

- npm run build e git diff --check aprovados.
- Conferência no navegador em 320, 390, 640, 768, 1024 e 1440 px, sem texto ou controles fora da tela; CTA da abertura dentro do viewport de 900 px usado no teste.
- Imagens completas de desktop e mobile inspecionadas.
- Testados os cinco serviços, seleção automática, mudança manual, foco, reabertura após sucesso e dados enviados ao serviço simulado.
- Testados menu, Escape, mudança de breakpoint, seção ativa, FAQ por teclado e preferência por movimento reduzido.
- Testados carregamento, sucesso, erro, preservação dos dados, nova tentativa e novo envio. Nenhum e-mail real foi disparado; a integração de produção continua pendente da etapa C.
- Sem IDs duplicados e sem erros de JavaScript durante a conferência.

### Dependências restantes

A etapa C continua pendente: projetos reais autorizados, eventual foto do fundador, domínio/metadados definitivos e validação de envio em produção. Nenhum case fictício ou indicador sem fonte foi publicado.
