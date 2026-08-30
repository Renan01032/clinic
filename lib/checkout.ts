/* ============================================================================
   CHECKOUT — ponto único de verdade da URL da Hotmart
   ----------------------------------------------------------------------------
   O link NUNCA é escrito direto num componente. Para trocar o checkout,
   edite NEXT_PUBLIC_HOTMART_CHECKOUT_URL no .env — e mais nada.
   ========================================================================== */

import { site } from './site';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'ttclid',
] as const;

const STORAGE_KEY = 'lp_attribution';

export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || site.checkout.fallbackUrl;

/** true quando a URL do checkout ainda não foi configurada. */
export const checkoutIsConfigured = (): boolean =>
  /^https?:\/\//.test(CHECKOUT_URL.trim());

/**
 * Captura os parâmetros de campanha da URL de entrada e guarda na sessão,
 * para que o CTA no fim da página ainda carregue a atribuição da origem.
 * Deve ser chamado uma vez, no client.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const stored: Record<string, string> = readStoredAttribution();
    let changed = false;

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) {
        stored[key] = value;
        changed = true;
      }
    }
    if (changed) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    }
  } catch {
    /* sessionStorage indisponível (modo privado, etc.) — segue sem atribuição */
  }
}

function readStoredAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/**
 * Monta a URL final do checkout preservando UTMs e o código de rastreio
 * da Hotmart (sck). Preserva também parâmetros já presentes na URL base.
 */
export function buildCheckoutUrl(placement?: string): string {
  const base = CHECKOUT_URL;
  if (!checkoutIsConfigured()) return base;

  try {
    const url = new URL(base);
    const attribution = {
      ...readStoredAttribution(),
      ...currentUrlParams(),
    };

    for (const key of UTM_KEYS) {
      const value = attribution[key];
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    }

    // sck: parâmetro de rastreio nativo da Hotmart
    const sckPieces = [
      site.checkout.sckParam,
      attribution.utm_source,
      attribution.utm_campaign,
      placement,
    ].filter(Boolean);

    if (sckPieces.length && !url.searchParams.has('sck')) {
      url.searchParams.set('sck', sckPieces.join('_').slice(0, 100));
    }

    return url.toString();
  } catch {
    return base;
  }
}

function currentUrlParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const out: Record<string, string> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) out[key] = value;
    }
  } catch {
    /* noop */
  }
  return out;
}
