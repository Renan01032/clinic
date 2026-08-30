# Mobile: o que mudou e por quê

O tráfego previsto (Instagram, TikTok, Meta Ads, WhatsApp) é esmagadoramente
mobile. Esta versão trata o celular como **o** cenário, não como adaptação.

Medições feitas em build de produção, com emulação de toque no Chromium.

---

## 1. A dobra do celular

O objetivo: em nenhum aparelho o visitante deve precisar rolar para encontrar
o botão de compra.

| Aparelho | Altura da tela | CTA termina em |
|---|---|---|
| Android pequeno (360×640) | 640px | **572px** ✅ |
| iPhone SE (375×667) | 667px | **538px** ✅ |
| iPhone 14 (390×844) | 844px | **538px** ✅ |
| iPhone Pro Max (430×932) | 932px | **538px** ✅ |

O que foi feito para caber:

- **O header deixou de ser fixo no mobile.** A barra de compra vive no rodapé
  (zona do polegar); um topo fixo só roubaria 56px permanentes da tela. No
  desktop ele continua fixo.
- **Subheadline curta só para o celular.** Duas versões no `lib/site.ts`
  (`subheadline` e `subheadlineMobile`): a curta preserva a promessa e economiza
  três linhas. Alternância por CSS, sem JavaScript e sem custo de renderização.
- **Microcopy encurtada** ("Acesso imediato · Checkout seguro Hotmart").
- **Headline recalibrada** para 1.85rem no mobile, com o destaque acompanhando a
  quebra de linha (`box-decoration-break: clone`) em vez de forçar `nowrap`.
- **CTA ocupa a largura toda** e tem 58px de altura.
- **Sinais de confiança entraram na dobra**: a grade 2×2 (≈130px) virou uma
  linha arrastável de ≈56px, com o terceiro card "espiando" para indicar o gesto.

## 2. Página 15% mais curta

Comprimento total em 390px: **16.893px → 14.299px** (−2.594px, ou umas 3 telas
de rolagem a menos até a oferta).

- **Módulos e etapas do método viraram carrossel** com `scroll-snap` nativo —
  gesto de arrastar, zero biblioteca, zero JavaScript. Três cards empilhados
  custavam ~700px.
- **Benefícios em 2 colunas** no celular (eram 6 cards em coluna única, ~900px).
- **Depoimentos** já nascem arrastáveis quando existirem.
- **"O que está incluído" em 2 colunas**, tipografia menor.
- **Espaçamento de seção** reduzido de 64px para 52px no mobile (88px continua
  no desktop).
- Paddings, tamanhos de ícone e corpo de texto recalibrados por breakpoint.

## 3. A barra fixa de compra

- Aparece **só depois que o Hero sai da tela** — não compete com o CTA principal.
- **Some enquanto a seção de oferta está visível**: ali o card de preço já tem o
  próprio botão, e a barra apenas cobriria conteúdo.
- Mostra **preço + prazo de garantia** ao lado do botão: as duas informações que
  decidem a compra, sempre à mão.
- Respeita a **safe area do iPhone** (`env(safe-area-inset-bottom)`) e o `body`
  reserva essa altura, então ela nunca cobre o fim da página.
- Abaixo de 360px o botão ocupa a largura toda e o bloco de preço sai de cena.

## 4. Toque e acessibilidade no celular

- Todos os alvos de toque com **≥ 46px**; o CTA principal com **58px**
  (verificado: nenhum botão abaixo de 44px em nenhuma largura).
- `-webkit-tap-highlight-color: transparent` — sem flash cinza ao tocar.
- Campos com `font-size: 16px` — o iOS dá zoom em qualquer controle menor.
- **Pinch-zoom continua liberado** (`maximumScale: 5`, `userScalable: true`).
  Travar o zoom é falha de acessibilidade, e não ajuda em nada a conversão.
- `viewport-fit=cover` para desenhar sob a barra de gestos do iPhone.
- FAQ em accordion com `<button>` real e `aria-expanded`; carrosséis roláveis
  também por teclado.

## 5. Verificação

| Item | 360 | 375 | 390 | 430 | 768 |
|---|---|---|---|---|---|
| CTA dentro da dobra | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vazamento horizontal | 0 | 0 | 0 | 0 | 0 |
| Alvos de toque < 44px | 0 | 0 | 0 | 0 | 0 |
| Erros de console | 0 | 0 | 0 | 0 | 0 |

`next build`, `tsc --noEmit` e `next lint` passam sem erros. First Load JS:
**120 kB** — os carrosséis são CSS puro, então a otimização mobile não custou
nenhum kilobyte de JavaScript.

> Uma armadilha encontrada no caminho: `body { overflow-x: hidden }` mascara
> vazamento horizontal em qualquer teste baseado em `scrollWidth`. O QA aqui
> mede o retângulo de cada elemento e ignora só os filhos dos carrosséis — foi
> assim que apareceu (e foi corrigido com `min-width: 0`) um estouro de 652px de
> largura na coluna do Hero.

## 6. O que mais moveria o ponteiro no mobile

1. **Peso da página.** Quando a imagem do hero real entrar, ela será o LCP —
   entregue em WebP/AVIF, com `priority`, e abaixo de 150 kB. É o fator número um
   de abandono no 4G.
2. **Vídeo curto do instrutor** (30–45s, com legenda, sem autoplay com som).
   Em produto para profissionais, ver quem ensina resolve mais objeção no celular
   do que qualquer parágrafo.
3. **Testar preço acima da dobra.** Para uma oferta de ticket baixo, mostrar o
   valor cedo costuma subir a conversão mobile; para ticket alto, derruba. Vale
   um teste A/B quando o preço estiver definido.
4. **Pix em destaque.** Se a Hotmart estiver com Pix ativo, dizer isso perto do
   CTA reduz o atrito de digitar cartão no celular.
