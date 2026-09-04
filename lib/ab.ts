/* ============================================================================
   TESTE A/B — estrutura pronta (sem biblioteca externa)
   ----------------------------------------------------------------------------
   Variante forçada por query string:  ?v=a | ?v=b | ?v=c
   Sem query string, a variante padrão ('b') é usada — evitando qualquer
   flicker de conteúdo e mantendo o LCP estável.

   Para rodar um teste de verdade, aponte cada anúncio para a sua variante
   (ex.: ?v=a&utm_content=headline_emocional) — a variante entra no dataLayer
   e nos eventos, permitindo segmentar a conversão no GA4.
   ========================================================================== */

export const VARIANTS = ['a', 'b', 'c'] as const;
export type Variant = (typeof VARIANTS)[number];

export const DEFAULT_VARIANT: Variant = 'b';

export function getVariant(search?: string): Variant {
  const query = search ?? (typeof window !== 'undefined' ? window.location.search : '');
  try {
    const value = new URLSearchParams(query).get('v')?.toLowerCase();
    if (value && (VARIANTS as readonly string[]).includes(value)) {
      return value as Variant;
    }
  } catch {
    /* noop */
  }
  return DEFAULT_VARIANT;
}
