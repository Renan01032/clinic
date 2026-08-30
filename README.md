# Landing page — Minicurso sobre transtornos de humor

Landing page de venda direta (tráfego → página → checkout Hotmart), em
Next.js 15 (App Router) + TypeScript + Tailwind CSS.

**Otimizada para conversão mobile**: CTA dentro da primeira tela em todos os
aparelhos (inclusive iPhone SE), barra de compra fixa no rodapé, carrosséis por
gesto e página 15% mais curta no celular. Detalhes e medições em
[`docs/03-mobile-first.md`](docs/03-mobile-first.md).

```bash
npm install
cp .env.example .env.local     # preencha a URL do checkout
npm run dev                    # http://localhost:3000
```

---

## 1. Antes de publicar — o que preencher

### `.env.local` (obrigatório)

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_HOTMART_CHECKOUT_URL` | **Obrigatória.** Link do checkout. É o único lugar do projeto onde esse link existe. |
| `NEXT_PUBLIC_HOTMART_SCK` | Opcional. Código de rastreio da Hotmart (vira `?sck=`). |
| `NEXT_PUBLIC_GA_ID` | Opcional. GA4 (`G-XXXXXXXXXX`). Sem ela, o GA simplesmente não carrega. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Opcional. Meta Pixel (só números). |

Enquanto a URL do checkout não existir, **todos os botões ficam desabilitados
com um anel âmbar** — é proposital, para não publicar uma página com CTA morto.

### `lib/site.ts` (todo o conteúdo)

Esse é o único arquivo de conteúdo. Tudo que ainda não foi informado está no
formato `[ALGUMA COISA]` e aparece **destacado em âmbar na página**, para ser
impossível publicar sem preencher. Pendências atuais:

- nome do curso, domínio e imagem OG
- preço, preço cheio, parcelamento, formas de pagamento
- prazo da garantia
- carga horária, nº de módulos, nº de aulas, certificado, tempo de acesso
- instrutor: nome, registro profissional, formação, experiência, credenciais, foto
- bônus (ou remova a lista: `bonuses: []`)
- dados do rodapé: produtor, CNPJ, e-mail, política de privacidade, termos
- imagem do hero

**Nada foi inventado.** Não há depoimento, número de alunos, nota ou desconto
fictício no projeto. A seção de prova social só é renderizada quando existirem
depoimentos reais em `site.testimonials` — até lá ela nem aparece.

**Grade de módulos:** os três módulos foram redigidos a partir das três promessas
do material original (compreender / diferenciar / manejar). Confirme títulos,
ordem e carga horária e depois apague o aviso em `site.modules.draftNotice`.

---

## 2. Como o checkout funciona

```
CLIQUE NO CTA → eventos (GA4 + Meta) → Hotmart (com UTMs preservadas)
```

- `components/ui/CheckoutButton.tsx` é o **único** componente de CTA. Trocar
  texto, cor, tracking ou destino é uma alteração em um lugar só.
- Ele é uma âncora real (`<a href>`): funciona com teclado, com clique do meio,
  e **mesmo que o JavaScript de tracking falhe** — o tracking nunca bloqueia a
  ida para o checkout.
- `lib/checkout.ts` guarda `utm_source`, `utm_medium`, `utm_campaign`,
  `utm_content`, `utm_term`, `gclid`, `fbclid` e `ttclid` na sessão assim que o
  visitante chega, e reanexa tudo na URL da Hotmart — inclusive nos CTAs do fim
  da página. Também monta o `sck` da Hotmart com origem + campanha + posição do
  botão, então dá para ver **qual CTA gerou a venda** dentro da própria Hotmart.

## 3. Eventos disparados

**GA4:** `page_view`, `scroll_depth` (25/50/75/90), `view_offer`,
`view_content`, `click_cta`, `click_checkout`, `begin_checkout`, `faq_open`.
Todos carregam `cta_placement`, então dá para comparar a conversão de cada
posição de botão.

**Meta Pixel:** `PageView`, `ViewContent`, `InitiateCheckout`.

> **`Purchase` não é disparado por esta página, e isso é de propósito.** Clique
> em botão não é venda. Configure a confirmação de compra na Hotmart
> (Ferramentas → Pixel/Postback, ou a integração nativa com o Meta) para que o
> `Purchase` seja disparado só quando o pagamento for confirmado. Disparar no
> clique estraga o otimizador de campanha e infla o ROAS.

## 4. Teste A/B

Três headlines já estão prontas em `site.hero.headlines`:

| Variante | Ângulo | URL |
|---|---|---|
| `b` (padrão) | benefício | `/` ou `/?v=b` |
| `a` | emocional | `/?v=a` |
| `c` | problema | `/?v=c` |

Aponte cada criativo para a sua variante junto com um `utm_content` próprio
(`/?v=a&utm_content=headline_emocional`) e compare `begin_checkout` por
`utm_content` no GA4. A variante padrão é renderizada no servidor, então não há
flicker nem prejuízo de LCP no tráfego normal.

## 5. Estrutura

```
app/          layout (SEO, fontes, analytics), page (ordem do funil), robots, sitemap
components/
  landing/    uma seção por arquivo, na ordem do funil
  ui/         CheckoutButton, Section, Reveal, Placeholder, Icons
lib/
  site.ts     TODO o conteúdo e os placeholders
  checkout.ts URL da Hotmart + UTMs
  analytics.ts GA4 + Meta (à prova de bloqueio)
  tracking.ts handleCheckoutClick, view_offer, faq_open
  ab.ts       variantes de headline
```

Identidade visual: os tokens ficam em `app/globals.css` (`:root`) e o
`tailwind.config.ts` só aponta para eles. Para trocar a paleta inteira, edite
apenas o `:root`.

### Detalhes de mobile que valem conhecer antes de editar

- **Texto curto só do celular:** `hero.subheadlineMobile`, `hero.microcopyMobile`,
  `hero.ctaShort` (barra fixa) e `hero.ctaMini` (header). Mexeu na headline?
  confira a versão curta também.
- **Carrosséis:** a classe `.snap-row` (em `globals.css`) vira `flex` com
  `scroll-snap` no celular e `grid` a partir de 768px. Para transformar qualquer
  grade em carrossel, troque `grid gap-5` por `snap-row md:grid-cols-3`.
  Cuidado com elementos posicionados fora da borda do card: o carrossel os corta.
- **Barra fixa:** `--sticky-cta-height` em `globals.css` reserva a altura no
  `body`. Se mudar a altura da barra, atualize a variável.
- **Header não é fixo no mobile** (só a partir de `lg`) — é proposital, para
  liberar altura da dobra.

## 6. Deploy

Vercel: importe o repositório, defina as variáveis de ambiente do passo 1 e
publique. Não há backend, banco nem rota de API — é uma página estática.

> **Fontes:** o projeto usa `next/font/google` (Inter + Plus Jakarta Sans), que
> baixa e auto-hospeda as fontes **no momento do build**. Isso exige que a
> máquina de build alcance `fonts.googleapis.com` — na Vercel funciona. Se o seu
> CI for offline, troque as duas chamadas em `app/layout.tsx` por
> `next/font/local` com os arquivos `.woff2` em `public/fonts`.

## 7. Checklist antes de anunciar

- [ ] `NEXT_PUBLIC_HOTMART_CHECKOUT_URL` preenchida e testada (compra de teste)
- [ ] Nenhum destaque âmbar restante na página (procure por `[` em `lib/site.ts`)
- [ ] Preço, parcelamento e prazo de garantia conferem com a oferta na Hotmart
- [ ] Credenciais do instrutor conferidas — nada de credencial não comprovável
- [ ] Depoimentos: só entram se forem reais e autorizados
- [ ] GA4 e Meta Pixel recebendo eventos (use o Debug View e o Pixel Helper)
- [ ] `Purchase` configurado **na Hotmart**, não no clique
- [ ] Domínio real em `site.seo.url` (afeta canonical, OG, robots e sitemap)
- [ ] Imagem OG definitiva em `public/images/`
- [ ] Política de privacidade e termos de uso publicados e linkados
- [ ] A promessa do anúncio bate com a headline da página (message match)
