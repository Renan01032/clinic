'use client';

import { useEffect, useRef } from 'react';
import { site } from '@/lib/site';
import { trackOfferView } from '@/lib/tracking';
import { CheckoutButton, CtaMicrocopy } from '@/components/ui/CheckoutButton';
import { Value } from '@/components/ui/Placeholder';
import { CheckIcon, ShieldIcon } from '@/components/ui/Icons';

/**
 * Pricing card — a seção de maior peso na decisão.
 * Preço, parcelamento e garantia ficam juntos, no mesmo campo de visão do CTA.
 * Dispara view_offer / ViewContent ao entrar na tela.
 */
export function Offer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackOfferView();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="oferta" className="section bg-primary-dark text-white">
      <div className="container-page">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center text-secondary">
            <span aria-hidden="true" className="h-px w-6 bg-secondary" />
            {site.offer.eyebrow}
          </p>
          <h2 className="h2 text-white">{site.offer.title}</h2>
        </header>

        <div ref={ref} className="mx-auto max-w-xl">
          <div className="overflow-hidden rounded-xl bg-surface text-ink shadow-lg">
            <div className="border-b border-line px-5 py-7 text-center sm:px-10 sm:py-8">
              {site.offer.fullPrice ? (
                <p className="text-base text-muted">
                  De <s className="decoration-accent/70 decoration-2">
                    <Value>{site.offer.fullPrice}</Value>
                  </s>{' '}
                  por apenas
                </p>
              ) : (
                <p className="text-base text-muted">Investimento</p>
              )}

              <p className="mt-2 text-4xl font-extrabold leading-none text-primary sm:text-5xl">
                <Value>{site.offer.price}</Value>
              </p>

              <p className="mt-3 text-base text-muted">
                ou <Value>{site.offer.installments}</Value>
              </p>

              <p className="mt-1 text-sm text-muted">
                <Value>{site.offer.paymentMethods}</Value>
              </p>

              {site.offer.urgency ? (
                <p className="mt-4 inline-block rounded-full bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent-dark">
                  {site.offer.urgency}
                </p>
              ) : null}
            </div>

            <div className="px-5 py-6 sm:px-10 sm:py-7">
              <ul className="mb-7 space-y-3">
                {site.included.items.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem]">
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-primary" />
                    <span>
                      {item.split(/(\[[^\]]+\])/).map((part, index) => (
                        <Value key={index}>{part}</Value>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <CheckoutButton placement="oferta" size="lg" fullWidth>
                {site.offer.cta}
              </CheckoutButton>

              <CtaMicrocopy className="mt-4 text-center">
                {site.checkout.microcopy}
              </CtaMicrocopy>

              <p className="mt-5 flex items-center justify-center gap-2 rounded-md bg-primary-soft px-4 py-3 text-center text-sm font-medium text-primary-dark">
                <ShieldIcon className="h-[18px] w-[18px]" />
                <span>
                  <Value>{site.guarantee.days}</Value> dias de garantia pela Hotmart
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
