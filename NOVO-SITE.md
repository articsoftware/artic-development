# Artic Development — nova direção

20/09/2026. Este conceito substitui a direção visual anterior a pedido do proprietário.

## Ideia

Uma empresa de software próxima e precisa. O nome Artic e o símbolo de montanha da logo orientam a identidade; o layout anterior não é uma restrição.

## Sistema visual

- Branco frio #F4F8F7: fundo.
- Branco #FFFFFF: superfícies.
- Verde profundo #123D43: títulos e áreas de contraste.
- Petróleo #24646B: ações e links.
- Névoa #536A6E: texto secundário; ajustado após revisão para contraste mínimo de 4,5:1 também sobre o gelo verde.
- Gelo verde #DDECE7: apoio visual.
- Sora 400/500/600: títulos e assinatura.
- DM Sans 400/500/600: texto e controles.
- Conteúdo alinhado à esquerda; ritmo fluido entre espaços claros e painéis escuros.
- Cantos amplos apenas nos grandes painéis e superfícies; botões compactos.

## Composição

```text
marca + navegação + contato

título amplo                contexto + ação
painel paisagem / gelo / assinatura Artic

soluções: destaque web amplo + aplicativo
          APIs + automações + processos

manifesto da empresa / identidade / fundador
cinco etapas em percurso horizontal
dúvidas compactas
contato em painel profundo + formulário claro
rodapé simples com marca
```

O destaque está na abertura com a paisagem da marca. O restante usa contraste, tipografia e distribuição do conteúdo. Evitar repetir a antiga composição de texto à esquerda e montanha à direita, números promocionais e efeitos automáticos.

## Implementação

Reutilizar os dados reais de serviços, contatos e FAQ e o fluxo de formulário já validado. Alterar composição, estilos, tipografia e apresentação da marca. Manter seleção de serviço, foco, estados de envio e navegação por teclado. Não publicar exemplos fictícios como cases.

Os ajustes locais anteriores de Hero.tsx e index.css foram preservados em /tmp/artic-before-new-site-7IWRKu antes desta implementação. A imagem original permanece em src/assets.

## Validação

- [x] Build e conferência de alterações.
- [x] Revisão visual de desktop e celular.
- [x] Layout entre 320 e 1440 px.
- [x] Serviços, menu, FAQ e formulário com envio simulado.

Os testes cobriram seleção dos cinco serviços, passagem da escolha para o contato, troca manual, abertura e fechamento do menu, mudança de breakpoint, navegação ativa, FAQ por teclado, foco e movimento reduzido. O formulário passou por carregamento, sucesso, erro, preservação dos campos e novo envio com requisições simuladas. Nenhum e-mail real foi enviado.

## Revisão do banner — paisagem imersiva

O iceberg isolado sobre uma superfície plana foi rejeitado. A nova composição usa uma paisagem fotográfica gerada, com água, atmosfera e gelo integrado ao ambiente. Mantém a paleta e as famílias tipográficas; concentra a mudança no banner.

- Desktop: paisagem contínua com texto alinhado à esquerda e gelo à direita; sem linhas geométricas ou reflexo espelhado artificial.
- Celular: recorte com foco no iceberg acima e texto abaixo, sobre transição escura para manter a leitura.
- Mensagem reduzida a “Uma boa experiência. Uma base sólida.”, apoio curto e um único link para serviços.
- Sem animação automática. Link com área mínima de 48 px e foco visível.
- Imagem em WebP (131 KB); arquivo e prompt em `src/assets/arctic-landscape-v1.*`. O bitmap anterior permanece disponível.

Validação desta revisão: build e diff sem erros; navegador em 1440, 1024, 768, 640, 639, 390 e 320 px, sem transbordamento horizontal. Imagem carregada, link com foco visível e navegação para serviços funcionando. Revisão visual dos recortes em desktop, tablet e celular. O primeiro card continua sem o desenho geométrico e com expansão funcional.
