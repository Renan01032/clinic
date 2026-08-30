import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Nova possibilidade + mecanismo em 3 etapas.
 * Nenhuma promessa de cura, resultado ou garantia clínica.
 */
export function Solution() {
  return (
    <Section id="como-funciona" tone="surface">
      <SectionHeader
        eyebrow={site.solution.eyebrow}
        title={site.solution.title}
        subtitle={site.solution.text}
      />

      <ol className="snap-row mt-8 md:mt-12 md:grid-cols-3">
        {site.solution.steps.map((step, index) => (
          <Reveal as="li" key={step.step} delay={index * 90}>
            <div className="relative h-full rounded-lg border border-line bg-background p-5 sm:p-6 sm:pt-8">
              {/* No mobile o número fica dentro do card: o carrossel corta
                  qualquer coisa que estoure a borda. */}
              <span className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-white shadow-md sm:absolute sm:-top-4 sm:left-6 sm:mb-0">
                {step.step}
              </span>
              <h3 className="h3 text-primary">{step.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-muted sm:text-[0.98rem]">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
