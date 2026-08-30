import { site } from '@/lib/site';
import { Section } from '@/components/ui/Section';
import { ShieldIcon } from '@/components/ui/Icons';
import { Value } from '@/components/ui/Placeholder';

/** Redução de risco logo depois do preço — responde "e se eu me arrepender?". */
export function Guarantee() {
  return (
    <Section tone="surface">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-xl border-2 border-primary/20 bg-background p-7 text-center sm:p-10">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary-soft text-primary">
          <ShieldIcon className="h-8 w-8" />
        </span>

        <div>
          <p className="eyebrow mb-3 justify-center">{site.guarantee.eyebrow}</p>
          <h2 className="h2 text-ink">{site.guarantee.title}</h2>
          <p className="lead mx-auto mt-4 max-w-prose">{site.guarantee.text}</p>
        </div>

        <p className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white">
          Garantia de <Value>{site.guarantee.days}</Value> dias
        </p>
      </div>
    </Section>
  );
}
