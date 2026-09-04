import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ArrowIcon, CheckIcon } from '@/components/ui/Icons';

/**
 * Antes → conhecimento → prática → novo estado.
 * Linguagem de possibilidade ("o que você poderá desenvolver"),
 * nunca de garantia de resultado.
 */
export function Transformation() {
  return (
    <Section tone="surface">
      <SectionHeader
        eyebrow={site.transformation.eyebrow}
        title={site.transformation.title}
      />

      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-line bg-surface-alt p-6 sm:p-7">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-muted">
            {site.transformation.before.title}
          </h3>
          <ul className="space-y-3">
            {site.transformation.before.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.98rem] text-muted">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center py-2 lg:flex-col lg:px-4">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-md">
            <ArrowIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
          </span>
        </div>

        <div className="rounded-lg border-2 border-primary/25 bg-background p-6 shadow-sm sm:p-7">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-primary">
            {site.transformation.after.title}
          </h3>
          <ul className="space-y-3">
            {site.transformation.after.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.98rem] text-ink">
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
        {site.transformation.disclaimer}
      </p>
    </Section>
  );
}
