'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { Value } from '@/components/ui/Placeholder';
import { CheckoutButton } from '@/components/ui/CheckoutButton';

/**
 * Header enxuto: identidade + âncoras + CTA. Sem menu profundo, sem dropdown.
 * No mobile, apenas logo + CTA compacto (o menu completo compete com a compra).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* No mobile o header NÃO é fixo: a barra de compra fica na base da tela
       (zona do polegar) e o topo fixo só roubaria altura da dobra. */
    <header
      className={`relative z-40 border-b transition-colors duration-200 lg:sticky lg:top-0 ${
        scrolled
          ? 'border-line lg:bg-surface/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-surface/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between gap-4 lg:h-[72px]">
        <a
          href="#topo"
          className="flex items-center gap-2 text-sm font-bold leading-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md bg-primary text-[13px] font-black text-white"
          >
            {site.brand.shortName.slice(0, 2).toUpperCase()}
          </span>
          <span className="max-w-[42vw] truncate sm:max-w-none">
            <Value>{site.brand.name}</Value>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CheckoutButton placement="header" size="md" className="hidden sm:inline-flex">
          Quero garantir minha vaga
        </CheckoutButton>
        <CheckoutButton
          placement="header"
          size="md"
          className="shrink-0 whitespace-nowrap sm:hidden !min-h-[46px] !px-3.5 !text-[0.82rem]"
        >
          {site.hero.ctaMini}
        </CheckoutButton>
      </div>
    </header>
  );
}
