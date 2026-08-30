'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { Value } from '@/components/ui/Placeholder';
import { ShieldIcon } from '@/components/ui/Icons';

/**
 * Barra de compra fixa no rodapé do mobile — o CTA que fica sempre na zona do
 * polegar. Regras de exibição:
 *
 *  1. só aparece depois que o Hero sai da tela (não compete com o CTA principal);
 *  2. some enquanto a seção de oferta está visível (ali o card de preço já tem
 *     o seu próprio botão, e a barra só cobriria conteúdo);
 *  3. respeita a safe area do iPhone — o body reserva a altura dela, então a
 *     barra nunca cobre o fim da página.
 */
export function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [onOffer, setOnOffer] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observers: IntersectionObserver[] = [];

    const hero = document.getElementById('topo');
    if (hero) {
      const o = new IntersectionObserver(
        ([entry]) => setPastHero(!entry.isIntersecting),
        { threshold: 0, rootMargin: '-120px 0px 0px 0px' },
      );
      o.observe(hero);
      observers.push(o);
    }

    const offer = document.getElementById('oferta');
    if (offer) {
      const o = new IntersectionObserver(([entry]) => setOnOffer(entry.isIntersecting), {
        threshold: 0.25,
      });
      o.observe(offer);
      observers.push(o);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = pastHero && !onOffer;

  return (
    <div
      data-sticky=""
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 px-4 pt-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0 shadow-[0_-6px_24px_-12px_rgba(18,32,29,0.35)]' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-3">
        <div className="hidden min-w-0 flex-1 xs:block">
          <p className="truncate text-[0.95rem] font-extrabold leading-tight text-primary">
            <Value>{site.offer.price}</Value>
          </p>
          <p className="mt-0.5 flex items-center gap-1 truncate text-[0.68rem] font-medium text-muted">
            <ShieldIcon className="h-3 w-3 shrink-0 text-primary" />
            <Value>{site.guarantee.days}</Value>
            <span>dias de garantia</span>
          </p>
        </div>

        <CheckoutButton
          placement="sticky_mobile"
          size="md"
          fullWidth
          className="xs:!w-auto xs:shrink-0 !min-h-[52px] !px-4 !text-[0.9rem]"
        >
          {site.hero.ctaShort}
        </CheckoutButton>
      </div>
    </div>
  );
}
