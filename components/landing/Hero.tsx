'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { site } from '@/lib/site';
import { DEFAULT_VARIANT, getVariant, type Variant } from '@/lib/ab';
import { CheckoutButton, CtaMicrocopy } from '@/components/ui/CheckoutButton';
import { PlaceholderBox, Value } from '@/components/ui/Placeholder';
import { trustIcons } from '@/components/ui/Icons';

/**
 * Acima da dobra: headline, subheadline, CTA, benefício, visual e sinal de
 * confiança. O usuário não precisa rolar para entender o que está sendo vendido.
 */
export function Hero() {
  const [variant, setVariant] = useState<Variant>(DEFAULT_VARIANT);

  // A variante padrão é renderizada no servidor (LCP estável).
  // Só troca se a URL pedir explicitamente ?v=a|b|c.
  useEffect(() => {
    const next = getVariant();
    if (next !== DEFAULT_VARIANT) setVariant(next);
  }, []);

  const headline = site.hero.headlines[variant];

  return (
    <section id="topo" className="relative overflow-hidden bg-background pb-10 pt-5 sm:pt-12 lg:pb-24">
      {/* fundo sutil, sem gradiente pesado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(70%_60%_at_20%_0%,var(--color-primary-soft)_0%,transparent_70%)]"
      />

      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0 animate-fade-up">
            <p className="eyebrow mb-3 sm:mb-4">
              <span aria-hidden="true" className="hidden h-px w-6 bg-primary sm:block" />
              {site.hero.preHeadline}
            </p>

            <h1 className="h1 text-ink">
              {headline.lead} <span className="highlight">{headline.highlight}</span>{' '}
              {headline.tail}
            </h1>

            {/* Duas versões da subheadline: a curta economiza altura no celular
                e faz o CTA caber na primeira tela. */}
            <p className="lead mt-4 max-w-prose sm:hidden">{site.hero.subheadlineMobile}</p>
            <p className="lead mt-5 hidden max-w-prose sm:block">{site.hero.subheadline}</p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8">
              <CheckoutButton placement="hero" size="lg" fullWidth className="sm:!w-auto">
                {site.hero.cta}
              </CheckoutButton>
              <CtaMicrocopy className="sm:hidden">{site.hero.microcopyMobile}</CtaMicrocopy>
              <CtaMicrocopy className="hidden sm:block">{site.hero.microcopy}</CtaMicrocopy>
            </div>

            {/* Sinais de confiança dentro da dobra no mobile: linha única,
                arrastável, ~56px de altura em vez dos 130px de uma grade 2x2. */}
            <ul className="snap-row mt-6 sm:hidden">
              {site.trustBar.map((item, index) => {
                const Icon = trustIcons[index % trustIcons.length];
                return (
                  <li
                    key={item.label + index}
                    className="!flex !max-w-none !flex-[0_0_auto] items-center gap-2.5 rounded-md border border-line bg-surface px-3.5 py-2.5 shadow-sm"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0 text-primary" />
                    <span className="whitespace-nowrap text-[0.8rem] leading-tight">
                      <strong className="block font-semibold text-ink">
                        <Value>{item.label}</Value>
                      </strong>
                      <span className="text-muted">{item.detail}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            {site.hero.image.src ? (
              <Image
                src={site.hero.image.src}
                alt={site.hero.image.alt}
                width={720}
                height={540}
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            ) : (
              <PlaceholderBox
                label="IMAGEM DO HERO — foto real do instrutor atendendo/gravando, ou mockup do curso (notebook + celular). Evitar banco de imagens genérico."
                ratio="aspect-[16/10] sm:aspect-[4/3]"
              />
            )}
          </div>
        </div>

        {/* Barra de confiança completa — a partir do tablet */}
        <ul className="mt-12 hidden grid-cols-2 gap-3 rounded-lg border border-line bg-surface p-4 shadow-sm sm:mt-14 sm:grid lg:grid-cols-4 lg:gap-6 lg:p-5">
          {site.trustBar.map((item, index) => {
            const Icon = trustIcons[index % trustIcons.length];
            return (
              <li key={item.label + index} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary-soft text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block font-semibold text-ink">
                    <Value>{item.label}</Value>
                  </strong>
                  <span className="text-muted">{item.detail}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
