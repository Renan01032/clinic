# Identidade visual — Clínica Psiquear

As cores foram **amostradas diretamente da arte oficial** do minicurso, não
escolhidas por aproximação. Todas vivem no `:root` de `app/globals.css`; o
Tailwind só aponta para elas.

## Paleta

| Onde aparece na arte | Hex | Token |
|---|---|---|
| Azul do título e do botão | `#214871` → **`#22496F`** | `--color-primary` |
| Azul profundo das ondas | `#194067` → **`#173D61`** | `--color-primary-dark` |
| Taupe do "ONLINE" | **`#AB9C97`** | `--color-taupe` |
| Creme da onda inferior | **`#F1EEE7`** | `--color-surface-alt` |
| Fundo | branco → **`#FBF9F6`** (branco levemente quente) | `--color-background` |
| — (novo) | **`#A85E38`** terracota | `--color-accent` (CTA) |

### Por que um terracota se ele não está na arte

A arte só tem azul e neutros quentes. Um CTA azul se dissolveria no meio de
títulos azuis, seções azuis e ícones azuis — e o botão de compra precisa ser o
elemento mais distinto da página.

O `#A85E38` é o taupe da marca (`#AB9C97`) puxado para saturação e profundidade:
mesma família quente, contraste alto. Números:

- texto branco sobre o botão: **4.86:1** (AA para texto normal)
- botão contra o fundo creme: **4.62:1**

Se preferir manter só as cores da arte, troque duas linhas no `:root`:

```css
--color-accent: #22496f;
--color-accent-dark: #173d61;
```

A página continua funcionando — perde contraste do botão, e isso normalmente
custa conversão. Vale testar em A/B antes de decidir por gosto.

## Contrastes verificados (WCAG AA)

| Combinação | Ratio | Status |
|---|---|---|
| Texto principal `#1A2430` sobre o fundo | 14.92:1 | ✅ AAA |
| Azul primário sobre o fundo | 8.88:1 | ✅ AAA |
| Texto secundário `#5C6772` sobre o fundo | 5.49:1 | ✅ AA |
| Branco sobre a seção azul-escura | 11.19:1 | ✅ AAA |
| Branco sobre o CTA terracota | 4.86:1 | ✅ AA |
| CTA contra a seção azul-escura | 2.30:1 | ⚠️ resolvido com um `ring` claro na borda do botão |

## Tipografia

- **Títulos: Montserrat** (600/700/800) — mesma família geométrica de caixa-alta
  da arte, para a página parecer continuação do anúncio.
- **Corpo: Inter** — alta legibilidade em texto corrido e em tela pequena.

Os títulos da página **não** são em caixa-alta como na arte: caixa-alta em
frases longas derruba a velocidade de leitura. O caixa-alta ficou reservado
para o nome oficial do curso (bloco na seção "Como funciona") e para os
rótulos de seção, que é onde ele funciona.

## Onde os dados da arte entraram

| Informação da arte | Onde está na página |
|---|---|
| Nome oficial do minicurso | `<title>`, SEO, bloco de destaque na seção "Como funciona", rodapé, dados estruturados |
| Compreensão / Avaliação / Manejo | Renomeou os três eixos do método **e** os três módulos |
| Suporte de dúvidas pelo WhatsApp | Barra de confiança (dentro da dobra do celular), lista de features, "o que está incluído", uma pergunta nova no FAQ e um link ao fim do FAQ |
| (11) 4309-0533 | Link `wa.me` com mensagem pronta, no FAQ e no rodapé |
| @clínicapsiquear | Rodapé e `sameAs` dos dados estruturados |
| A arte inteira | Virou a imagem de compartilhamento (OG 1200×630) e ficou salva em `public/images/arte-minicurso.jpg` |

## Dois pontos para você conferir

1. **Grafia do nome.** A arte traz `@clínicapsiquear`; em conversas anteriores
   apareceu "Psychear". A página está com **Clínica Psiquear** — confirme qual é
   a correta, está em `site.brand.name`.
2. **O botão da arte está com o texto cortado**: "SUPORTE DE DÚVIDAS PELO" —
   falta a última palavra. Como isso aparece na imagem de compartilhamento,
   vale corrigir a arte original. Não alterei a peça de vocês.
