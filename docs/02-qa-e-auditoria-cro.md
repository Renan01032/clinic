# QA + Auditoria final de CRO

> Este documento cobre o QA geral. A rodada específica de otimização mobile
> (medições da dobra, redução de comprimento, barra fixa, toque) está em
> [`03-mobile-first.md`](03-mobile-first.md).

Executado em build de produção (`next build` + `next start`), com Chromium via
Playwright.

## 1. QA técnico

| Item | Resultado |
|---|---|
| `next build` | ✅ compila sem erros |
| `tsc --noEmit` | ✅ sem erros de tipo |
| `next lint` | ✅ sem warnings nem erros |
| Erros no console | ✅ nenhum (mobile, tablet e desktop) |
| First Load JS | ✅ 119 kB na home (sem bibliotecas de animação, carrossel ou UI) |
| Renderização | ✅ 100% estática (`○ prerendered as static content`) |

## 2. QA funcional

| Item | Resultado |
|---|---|
| CTAs na página | ✅ 8 (header ×2, hero, benefícios, transformação, oferta, final, sticky) |
| Todos apontam para o mesmo checkout | ✅ sim — origem única em `lib/checkout.ts` |
| Preservação de UTM | ✅ `…?off=abc&utm_source=instagram&utm_medium=paid&utm_campaign=curso_humor&utm_content=headline_b&sck=lp_instagram_curso_humor_header` |
| `sck` identifica o botão que converteu | ✅ inclui origem + campanha + posição |
| CTA sem URL configurada | ✅ desabilitado com anel âmbar (não publica CTA morto) |
| FAQ accordion | ✅ abre/fecha, `aria-expanded` alterna, dispara `faq_open` |
| Sticky mobile | ✅ aparece só depois do hero, não cobre conteúdo (padding reservado no body) |
| Prova social vazia | ✅ seção não é renderizada |

## 3. QA responsivo

Sem overflow horizontal em nenhuma largura testada:

`375 · 390 · 430 · 768 · 1024 · 1280 · 1440 · 1920` → `overflowX = 0`

Correções aplicadas durante o QA:

1. **Headline cortada no mobile** — o destaque da headline usava
   `whitespace-nowrap` e estourava a viewport em telas ≤430px. Trocado por um
   destaque com `box-decoration-break: clone`, que acompanha a quebra de linha.
2. **Sticky CTA truncando o preço** em telas estreitas — botão com rótulo mais
   curto ("Quero minha vaga"), bloco de preço com breakpoint próprio (`xs`,
   360px) e CTA ocupando a largura toda abaixo disso.
3. **Tamanho da headline** reduzido de `3.4rem` para `3.05rem` no desktop, para
   caber em menos linhas sem perder presença.

## 4. Acessibilidade

- HTML semântico: `header`, `main`, `section`, `article`, `footer`, listas reais
- Hierarquia de headings: um `h1` (hero) → `h2` por seção → `h3` nos cards
- **Nenhum `div` clicável**: todo CTA é `<a href>`, todo accordion é `<button>`
- `aria-expanded` / `aria-controls` / `role="region"` no FAQ
- Skip link "Pular para o conteúdo" no início do `body`
- `:focus-visible` com contorno de 3px em toda a página
- `prefers-reduced-motion` desliga animações e scroll suave
- Alvos de toque ≥ 48px de altura
- Contrastes verificados: primário 7.8:1 · CTA 4.6:1 · texto secundário 5.6:1

## 5. Performance

- Zero bibliotecas de terceiros no bundle (animação e accordion são CSS + IntersectionObserver nativo)
- Fontes auto-hospedadas via `next/font` com `display: swap` → sem FOIT e sem request externo
- Scripts de tracking com `strategy="afterInteractive"` → não bloqueiam o LCP
- Página estática, sem chamada de dados no carregamento
- Reveal on scroll anima só `opacity` e `transform` (sem layout thrash → CLS baixo)
- `next/image` com AVIF/WebP e `priority` no hero quando a imagem real for adicionada

## 6. Auditoria de CRO

| Pergunta | Resposta |
|---|---|
| **Em 5s eu sei o que está sendo vendido?** | Sim — pré-headline ("minicurso online para profissionais de saúde mental") + headline com a promessa, acima da dobra |
| **Em 10s eu sei para quem é?** | Sim — a pré-headline já qualifica; a seção "Para quem é" detalha |
| **Em 20s eu entendi o benefício?** | Sim — subheadline + barra de confiança + seção de identificação logo abaixo |
| **Depois de rolar, eu confio?** | Parcialmente: depende de preencher o instrutor e as credenciais. É hoje a maior lacuna de conversão da página |
| **Minhas objeções foram respondidas?** | Sim — 9 objeções mapeadas, cada uma com uma seção correspondente; 12 perguntas no FAQ |
| **Eu sei o que acontece quando clico?** | Sim — microcopy fixa sob todo CTA: "Você será direcionado com segurança para o checkout da Hotmart" |

### Compliance — saúde mental

- Nenhuma promessa de cura, resultado clínico ou "método comprovado"
- Nenhuma afirmação de que o curso substitui terapia, supervisão ou pós-graduação
- Seção "Este minicurso não é" explícita, antes da oferta
- Linguagem de possibilidade ("o que você poderá desenvolver"), nunca de garantia
- Disclaimer educacional no rodapé, sobre a responsabilidade do profissional assistente

### Anti-dark-pattern

Nenhum contador regressivo falso, estoque fictício, "últimas vagas", notificação
de compra simulada, depoimento inventado, avaliação falsa ou preço-âncora
fabricado. O campo de urgência (`site.offer.urgency`) existe e está `null` —
preencha **apenas** se houver uma restrição real (turma com data, lote com prazo).

## 7. O que ainda limita a conversão

Em ordem de impacto:

1. **Autoridade vazia.** Num produto para profissionais, "quem ensina" costuma
   pesar mais que o preço. Foto real, registro profissional e formação são a
   maior alavanca disponível hoje.
2. **Sem prova social.** Se houver alunos de turmas anteriores, dois ou três
   depoimentos reais de colegas de profissão valem mais que qualquer ajuste de copy.
3. **Sem demonstração do produto.** Um trecho curto de aula, ou a captura da
   área de membros, reduz a ansiedade de compra de conteúdo em vídeo.
4. **Grade de módulos não confirmada.** Quanto mais específico o conteúdo
   ("o que muda na leitura de um caso de bipolaridade tipo II"), maior a conversão.
