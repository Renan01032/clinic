import { site, isPlaceholder } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { CheckIcon } from '@/components/ui/Icons';
import { Value } from '@/components/ui/Placeholder';

/**
 * Resumo visual da oferta + bônus.
 * Bônus não recebem "valor percebido" inventado — apenas o que for verdadeiro.
 */
export function Included() {
  const bonuses = site.bonuses;

  return (
    <Section tone="default">
      <SectionHeader eyebrow={site.included.eyebrow} title={site.included.title} />

      <div className={`grid gap-5 ${bonuses.length > 0 ? 'lg:grid-cols-2' : ''}`}>
        <ul
          className={`grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-lg border border-line bg-surface p-5 shadow-sm sm:gap-3 sm:p-7 ${
            bonuses.length === 0 ? 'mx-auto w-full max-w-2xl lg:grid-cols-3' : ''
          }`}
        >
          {site.included.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[0.85rem] leading-relaxed sm:gap-2.5 sm:text-[0.96rem]"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-[18px] sm:w-[18px]" />
              <span>
                {item.split(/(\[[^\]]+\])/).map((part, index) =>
                  isPlaceholder(part) ? (
                    <Value key={index}>{part}</Value>
                  ) : (
                    <span key={index}>{part}</span>
                  ),
                )}
              </span>
            </li>
          ))}
        </ul>

        {bonuses.length > 0 ? (
          <div className="rounded-lg border border-accent/30 bg-accent-soft p-6 sm:p-7">
            <h3 className="h3 mb-5 text-ink">Bônus incluídos</h3>
            <ul className="space-y-4">
              {bonuses.map((bonus) => (
                <li key={bonus.number} className="rounded-md border border-accent/20 bg-surface p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent">
                      Bônus #{bonus.number}
                    </span>
                    <span className="rounded-full bg-primary px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white">
                      Incluso
                    </span>
                  </div>
                  <h4 className="font-bold text-ink">
                    <Value>{bonus.title}</Value>
                  </h4>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed text-muted">
                    <Value>{bonus.description}</Value>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[0.7rem] leading-relaxed text-warn">
              Remova esta coluna em lib/site.ts (bonuses: []) se não houver bônus.
            </p>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
