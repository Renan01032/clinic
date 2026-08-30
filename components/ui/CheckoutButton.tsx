'use client';

import { useEffect, useState } from 'react';
import { CHECKOUT_URL, buildCheckoutUrl, checkoutIsConfigured } from '@/lib/checkout';
import { handleCheckoutClick, type CtaPlacement } from '@/lib/tracking';

type Size = 'md' | 'lg';
type Variant = 'accent' | 'primary' | 'outline';

type Props = {
  children: React.ReactNode;
  placement: CtaPlacement;
  size?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
};

// Alvos de toque: mínimo de 48px (WCAG 2.5.8) e 56px+ no CTA principal,
// que é o que o polegar acerta sem erro em movimento.
const sizes: Record<Size, string> = {
  md: 'min-h-[50px] px-6 text-[0.95rem]',
  lg: 'min-h-[58px] px-5 text-base sm:px-8 sm:text-lg',
};

const variants: Record<Variant, string> = {
  // O ring claro garante que a borda do botão continue identificável quando
  // ele aparece sobre as seções azul-escuras (contraste não textual).
  accent:
    'bg-accent text-white shadow-md ring-1 ring-white/25 hover:bg-accent-dark active:translate-y-px hover:shadow-lg',
  primary:
    'bg-primary text-white shadow-md hover:bg-primary-dark active:translate-y-px hover:shadow-lg',
  outline:
    'border-2 border-primary bg-transparent text-primary hover:bg-primary-soft active:translate-y-px',
};

/**
 * ÚNICO componente de CTA da página. Todos os botões de compra passam por aqui,
 * então trocar o checkout, o tracking ou o estilo é uma alteração em um lugar só.
 *
 * É uma âncora real (<a href>), não um <div> clicável: funciona com teclado,
 * com clique do meio, e mesmo se o JavaScript de tracking falhar.
 */
export function CheckoutButton({
  children,
  placement,
  size = 'lg',
  variant = 'accent',
  fullWidth = false,
  className = '',
}: Props) {
  const [href, setHref] = useState<string>(CHECKOUT_URL);

  // Após a hidratação, reconstrói a URL com as UTMs capturadas.
  useEffect(() => {
    setHref(buildCheckoutUrl(placement));
  }, [placement]);

  const label = typeof children === 'string' ? children : placement;
  const configured = checkoutIsConfigured();

  return (
    <a
      href={configured ? href : undefined}
      role={configured ? undefined : 'link'}
      aria-disabled={configured ? undefined : true}
      target="_blank"
      rel="noopener"
      data-cta={placement}
      onClick={() => handleCheckoutClick(placement, label)}
      className={[
        'group inline-flex items-center justify-center gap-2 rounded-md font-semibold leading-none',
        'transition-all duration-200 focus-visible:outline-offset-4',
        sizes[size],
        variants[variant],
        fullWidth ? 'w-full' : '',
        configured ? '' : 'cursor-not-allowed opacity-70 ring-2 ring-amber-400',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="text-center">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10h11M11 5l5 5-5 5" />
      </svg>
    </a>
  );
}

/** Microcopy padrão de redução de risco, sempre logo abaixo do CTA. */
export function CtaMicrocopy({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm leading-relaxed text-muted ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="mr-1.5 inline-block h-4 w-4 -translate-y-px text-primary"
        fill="currentColor"
      >
        <path d="M10 1.5 3.5 4v5.2c0 4 2.8 7.7 6.5 9.3 3.7-1.6 6.5-5.3 6.5-9.3V4L10 1.5Zm3.2 6.4-3.9 4a.9.9 0 0 1-1.3 0L6.2 10a.9.9 0 1 1 1.3-1.3l1.2 1.2 3.2-3.3a.9.9 0 1 1 1.3 1.3Z" />
      </svg>
      {children}
    </p>
  );
}
