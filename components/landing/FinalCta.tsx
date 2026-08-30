import { site } from '@/lib/site';
import { CheckoutButton, CtaMicrocopy } from '@/components/ui/CheckoutButton';
import { Value } from '@/components/ui/Placeholder';

export function FinalCta() {
  return (
    <section className="bg-primary-dark py-16 text-white sm:py-20">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="h2 max-w-2xl text-white">{site.finalCta.title}</h2>
        <p className="max-w-prose text-base leading-relaxed text-secondary sm:text-lg">
          {site.finalCta.text}
        </p>

        <CheckoutButton placement="final" size="lg" className="w-full sm:w-auto">
          {site.finalCta.cta}
        </CheckoutButton>

        <CtaMicrocopy className="!text-secondary">
          Acesso seguro pelo checkout da Hotmart · Garantia de{' '}
          <Value>{site.guarantee.days}</Value> dias
        </CtaMicrocopy>
      </div>
    </section>
  );
}
