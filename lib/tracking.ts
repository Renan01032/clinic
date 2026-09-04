/* ============================================================================
   TRACKING DO CTA
   ----------------------------------------------------------------------------
   Fluxo: CLICK CTA → dispara eventos → segue para a Hotmart.
   O redirecionamento NUNCA é bloqueado pelo tracking: o CTA é uma âncora real
   (<a href>), então mesmo que o JS falhe o usuário chega ao checkout.
   ========================================================================== */

import { gaEvent, metaEvent } from './analytics';
import { buildCheckoutUrl } from './checkout';

export type CtaPlacement =
  | 'header'
  | 'hero'
  | 'oferta'
  | 'final'
  | 'sticky_mobile';

/**
 * Registra a intenção de compra e devolve a URL final.
 * Chamado no onClick do CheckoutButton, sem preventDefault.
 */
export function handleCheckoutClick(placement: CtaPlacement, label: string): void {
  const payload = {
    cta_placement: placement,
    cta_label: label,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  };

  // 1. Analytics (GA4)
  gaEvent('click_cta', payload);
  gaEvent('click_checkout', payload);
  gaEvent('begin_checkout', {
    ...payload,
    currency: 'BRL',
    items: [{ item_id: 'minicurso-transtornos-humor', item_name: 'Minicurso' }],
  });

  // 2. Meta Pixel — InitiateCheckout.
  //    Purchase NÃO é disparado aqui: só a Hotmart confirma a venda
  //    (integração de postback / conversions API). Ver README.
  metaEvent('InitiateCheckout', {
    content_name: 'Minicurso — transtornos de humor',
    content_category: 'curso',
    currency: 'BRL',
  });

  // 3. O href já foi montado com UTMs preservadas por buildCheckoutUrl().
}

/** Dispara view_offer / ViewContent quando a oferta entra na viewport. */
export function trackOfferView(): void {
  gaEvent('view_offer');
  gaEvent('view_content', { content_name: 'oferta' });
  metaEvent('ViewContent', {
    content_name: 'Minicurso — transtornos de humor',
    content_category: 'curso',
  });
}

/** Registra a abertura de uma pergunta do FAQ (sinal de objeção). */
export function trackFaqOpen(question: string): void {
  gaEvent('faq_open', { faq_question: question });
}

export { buildCheckoutUrl };
