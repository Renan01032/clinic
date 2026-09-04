# Identidade visual — Clínica Psychëar

> **Atualização:** as duas pendências abertas na versão anterior deste
> documento foram resolvidas com base no portfólio profissional oficial de
> Andréa Felix (PDF fornecido pela clínica). Ver seção final.

As cores agora são **amostradas diretamente da logo oficial** (o mark da
borboleta, extraído em alta resolução do portfólio), não apenas da arte de
divulgação do minicurso — que é uma peça de campanha e pode mudar a cada
lançamento, enquanto a logo é a identidade permanente da marca.

## Paleta

| Onde aparece | Hex | Token |
|---|---|---|
| Azul do título, botão e traço da logo | `#0A4878` (logo) → **`#22496F`** | `--color-primary` |
| Azul profundo das ondas | `#194067` → **`#173D61`** | `--color-primary-dark` |
| Asa rosa da borboleta (logo) | `#C89090` → escurecida para **`#A66357`** | `--color-accent` (CTA) |
| Asa areia da borboleta (logo) | `#D9BBA4` → escurecida para **`#A88367`** | `--color-taupe` |
| Creme da onda inferior | **`#F1EEE7`** | `--color-surface-alt` |
| Fundo | branco → **`#FBF9F6`** (branco levemente quente) | `--color-background` |

### Por que o accent não é mais um terracota

A versão anterior usava um terracota (`#A85E38`) que não existia em nenhuma
peça da marca — foi uma aproximação porque, na época, só tínhamos a arte de
divulgação (azul + neutros) e o botão de compra precisava de um elemento
visualmente distinto.

Com o portfólio oficial em mãos, a logo revela que a marca **já tem** uma
segunda cor: o rosa da asa da borboleta. É essa cor que agora é o
`--color-accent` — só escurecida o suficiente para o texto branco do botão
ficar legível (o rosa puro da logo, `#C89090`, dá apenas 2.7:1 de contraste
contra branco; escurecido para `#A66357`, sobe para 4.62:1 → passa AA).

O botão continua sendo o elemento mais distinto da página, mas agora é
literalmente "o rosa da marca", não uma cor emprestada de outra família.

Se preferir manter o CTA na cor azul:

```css
--color-accent: #22496f;
--color-accent-dark: #173d61;
```

## Contrastes verificados (WCAG AA)

| Combinação | Ratio | Status |
|---|---|---|
| Texto principal `#1A2430` sobre o fundo | 14.92:1 | ✅ AAA |
| Azul primário sobre o fundo | 8.88:1 | ✅ AAA |
| Texto secundário `#5C6772` sobre o fundo | 5.49:1 | ✅ AA |
| Branco sobre a seção azul-escura | 11.19:1 | ✅ AAA |
| Branco sobre o CTA rosa (`#A66357`) | 4.62:1 | ✅ AA |
| Branco sobre o CTA rosa, hover (`#8F5044`) | 6.18:1 | ✅ AA+ |
| CTA contra a seção azul-escura | ~2.3:1 | ⚠️ resolvido com um `ring` claro na borda do botão |

`--color-taupe` (`#A88367`) é usada só como rótulo decorativo pequeno
(uppercase, tracked) em `Solution.tsx` — não carrega texto essencial, então
não é cobrada com o mesmo rigor de AA que corpo de texto.

## Tipografia

- **Títulos: Montserrat** (600/700/800) — mesma família geométrica de caixa-alta
  da arte de divulgação, para a página parecer continuação do anúncio.
- **Corpo: Inter** — alta legibilidade em texto corrido e em tela pequena.

Isso continua válido mesmo depois de olhar o portfólio: lá, os títulos usam
uma serifada elegante (script na logo, serifada nas lâminas), mas esse é o
registro visual do *portfólio pessoal* da Andréa — um documento diferente,
para uma audiência diferente (prospects institucionais, não alunos de
minicurso). Misturar as duas tipografias deixaria a página com identidade
dividida. Optamos por manter a página fiel à campanha específica deste
produto.

Os títulos da página continuam **sem** caixa-alta nas frases longas —
caixa-alta fica reservado para o nome oficial do curso e rótulos de seção.

## Fotografia

Antes: a imagem do Hero e o OG image usavam a arte de divulgação, com um
efeito de rostos sobrepostos (dupla exposição) que não é uma foto real de
ninguém envolvido no curso.

Agora:

| Uso | Arquivo | Origem |
|---|---|---|
| Hero (`site.hero.image`) | `public/images/hero-andrea.jpg` | Recorte paisagem do portfólio oficial |
| Quem ensina (`site.instructor.photo`) | `public/images/instructor-andrea.jpg` | Retrato P&B do portfólio oficial |
| Logo do header/rodapé | `public/images/logo.png` | Logo oficial, com transparência reconstruída (o PDF exportava com fundo preto sólido) |
| OG image (compartilhamento) | `public/images/og-image.jpg` | Regerado com a foto real + paleta atual, no lugar da arte com dupla exposição |

`public/images/arte-minicurso.jpg` foi mantida no repositório (não está mais
referenciada em código) como material de campanha para redes sociais, mas
deixou de ser a imagem de compartilhamento do site.

## Dois pontos resolvidos

1. **Grafia do nome.** Confirmada pelo portfólio: a marca é **Clínica
   Psychëar** (com trema, no logo) / **Psychear** em texto corrido. O
   `@clinicapsiquear` do Instagram é grafado sem acento só por restrição da
   própria plataforma — não é uma grafia alternativa do nome. `site.brand.name`
   já está atualizado.
2. **Botão "SUPORTE DE DÚVIDAS PELO" cortado na arte.** Olhando a peça
   original com mais contexto: não é um corte de texto, é um selo
   ("SUPORTE DE DÚVIDAS PELO") posicionado imediatamente acima do ícone do
   WhatsApp + número — o conjunto se lê como uma frase só por proximidade
   visual. Não é um erro na arte; não precisa de correção.
