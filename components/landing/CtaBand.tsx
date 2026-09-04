import { CheckoutButton, CtaMicrocopy } from '@/components/ui/CheckoutButton';
import { site } from '@/lib/site';
import type { CtaPlacement } from '@/lib/tracking';

/**
 * Faixa de CTA usada nos pontos de alta intenção ao longo da página.
 * Sempre com a mesma microcopy de redução de risco.
 */
export function CtaBand({
  title,
  label,
  placement,
  tone = 'soft',
}: {
  title: string;
  label: string;
  placement: CtaPlacement;
  tone?: 'soft' | 'dark';
}) {
  const dark = tone === 'dark';
  return (
    <section
      className={`${dark ? 'bg-primary-dark text-white' : 'bg-surface-alt text-ink'} py-10 sm:py-14`}
    >
      <div className="container-page flex flex-col items-center gap-4 text-center sm:gap-5">
        <h2
          className={`max-w-2xl text-lg font-bold leading-snug sm:text-2xl ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        <CheckoutButton
          placement={placement}
          size="lg"
          variant="accent"
          fullWidth
          className="sm:!w-auto"
        >
          {label}
        </CheckoutButton>
        <CtaMicrocopy className={dark ? '!text-secondary' : ''}>
          {site.checkout.microcopy}
        </CtaMicrocopy>
      </div>
    </section>
  );
}
