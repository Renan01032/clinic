/* ============================================================================
   ANALYTICS — GA4 + Meta Pixel
   ----------------------------------------------------------------------------
   Todas as funções são seguras: se o script não carregou (ou o usuário bloqueou
   com adblock), elas simplesmente não fazem nada. Nenhum tracking pode
   atrasar ou impedir a ida do usuário para o checkout.
   ========================================================================== */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] };
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

export const hasGA = () => Boolean(GA_ID);
export const hasMetaPixel = () => Boolean(META_PIXEL_ID);

/** Eventos GA4 usados na página. */
export type GaEvent =
  | 'page_view'
  | 'scroll_depth'
  | 'view_offer'
  | 'view_content'
  | 'click_cta'
  | 'click_checkout'
  | 'faq_open'
  | 'begin_checkout';

export function gaEvent(event: GaEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', event, params);
  } catch {
    /* nunca quebrar a navegação por causa de tracking */
  }
}

/** Eventos padrão do Meta. Purchase NÃO é disparado aqui — ver README. */
export type MetaEvent = 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Lead';

export function metaEvent(event: MetaEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.fbq?.('track', event, params);
  } catch {
    /* idem */
  }
}

/**
 * Dispara scroll_depth uma única vez por marco (25/50/75/90%).
 * Retorna a função de limpeza.
 */
export function trackScrollDepth(): () => void {
  if (typeof window === 'undefined') return () => {};
  const marks = [25, 50, 75, 90];
  const fired = new Set<number>();

  const onScroll = () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    const pct = (window.scrollY / total) * 100;
    for (const mark of marks) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        gaEvent('scroll_depth', { percent_scrolled: mark });
      }
    }
    if (fired.size === marks.length) window.removeEventListener('scroll', onScroll);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
