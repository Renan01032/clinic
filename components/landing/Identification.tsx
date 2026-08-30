import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Objetivo da seção: fazer o visitante pensar "isso é exatamente o que eu vivo".
 * Cenas concretas de consultório, sem diagnosticar ninguém.
 */
export function Identification() {
  return (
    <Section id="identificacao" tone="surface">
      <SectionHeader
        eyebrow={site.identification.eyebrow}
        title={site.identification.title}
        align="left"
      />

      <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-4">
        {site.identification.items.map((item, index) => (
          <Reveal as="li" key={item} delay={index * 60}>
            <div className="flex h-full gap-3 rounded-lg border border-line bg-background p-4 sm:gap-4 sm:p-5">
              <span
                aria-hidden="true"
                className="mt-1 h-6 w-1 shrink-0 rounded-full bg-primary/40"
              />
              <p className="text-[0.92rem] leading-relaxed text-ink sm:text-[0.98rem]">{item}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <p className="mt-6 max-w-prose text-base font-semibold leading-snug text-primary sm:mt-8 sm:text-lg">
        {site.identification.closing}
      </p>
    </Section>
  );
}
