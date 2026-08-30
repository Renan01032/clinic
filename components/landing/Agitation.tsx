import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ArrowIcon } from '@/components/ui/Icons';

/**
 * Agitação do problema — tom empático, nunca alarmista nem culpabilizador.
 * O fecho tira a culpa do profissional e devolve a causa ao contexto.
 */
export function Agitation() {
  return (
    <Section tone="soft">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow={site.agitation.eyebrow}
            title={site.agitation.title}
            align="left"
          />
          <p className="lead -mt-4 max-w-prose">{site.agitation.intro}</p>
        </div>

        <div>
          <ul className="space-y-3">
            {site.agitation.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md bg-surface px-5 py-4 text-[0.98rem] leading-relaxed shadow-sm"
              >
                <ArrowIcon className="mt-0.5 h-[18px] w-[18px] text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-prose border-l-4 border-primary/30 pl-5 text-[0.98rem] leading-relaxed text-muted">
            {site.agitation.closing}
          </p>
        </div>
      </div>
    </Section>
  );
}
