import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CheckIcon } from '@/components/ui/Icons';
import { Value } from '@/components/ui/Placeholder';

/**
 * Benefícios (o que muda na prática) em destaque; features em segundo plano.
 * A página vende principalmente o benefício.
 */
export function Benefits() {
  return (
    <Section id="beneficios" tone="surface">
      <SectionHeader
        eyebrow={site.benefits.eyebrow}
        title={site.benefits.title}
        subtitle={site.benefits.subtitle}
      />

      {/* Mobile: 2 colunas compactas. Empilhar 6 cards em coluna única
          empurraria a oferta ~600px para baixo. */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {site.benefits.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <div className="h-full rounded-lg border border-line bg-background p-4 sm:p-6">
              <span className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-white sm:mb-4 sm:h-9 sm:w-9">
                <CheckIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </span>
              <h3 className="text-[0.92rem] font-bold leading-snug text-ink sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted sm:mt-2 sm:text-[0.95rem]">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-line bg-surface-alt p-5 sm:mt-10 sm:p-8">
        <h3 className="h3 mb-4 text-ink sm:mb-5">{site.benefits.features.title}</h3>
        <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {site.benefits.features.items.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-[0.9rem] text-ink sm:text-[0.95rem]"
            >
              <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
              <Value>{feature}</Value>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
