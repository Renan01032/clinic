import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { CheckIcon, CrossIcon } from '@/components/ui/Icons';

/**
 * Para quem é / para quem não é.
 * A coluna "não é" aumenta a confiança e evita reembolso por expectativa errada —
 * especialmente importante num produto de saúde mental.
 */
export function Audience() {
  return (
    <Section id="para-quem" tone="default">
      <SectionHeader eyebrow={site.audience.eyebrow} title="Este minicurso é para você?" />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border-2 border-primary/25 bg-surface p-6 shadow-sm sm:p-8">
          <h3 className="h3 mb-5 text-primary">{site.audience.forTitle}</h3>
          <ul className="space-y-3.5">
            {site.audience.forItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-relaxed">
                <CheckIcon className="mt-0.5 h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-line bg-surface-alt p-6 sm:p-8">
          <h3 className="h3 mb-5 text-ink">{site.audience.notTitle}</h3>
          <ul className="space-y-3.5">
            {site.audience.notItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-muted"
              >
                <CrossIcon className="mt-0.5 h-[18px] w-[18px] text-muted/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            Preferimos deixar isso claro antes da compra. É formação complementar — o
            julgamento clínico de cada caso continua sendo do profissional assistente.
          </p>
        </div>
      </div>
    </Section>
  );
}
