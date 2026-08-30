'use client';

import { useState } from 'react';
import { site, isPlaceholder } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { trackFaqOpen } from '@/lib/tracking';
import { Value } from '@/components/ui/Placeholder';

/**
 * Accordion acessível: botões reais, aria-expanded/aria-controls,
 * navegação por teclado nativa. Cada abertura vira um evento (sinal de objeção).
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number, question: string) => {
    setOpen((current) => {
      const next = current === index ? null : index;
      if (next === index) trackFaqOpen(question);
      return next;
    });
  };

  return (
    <Section id="faq" tone="default">
      <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas antes de decidir" />

      <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        {site.faq.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(index, item.question)}
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[0.98rem] font-semibold text-ink transition-colors hover:bg-surface-alt sm:px-6"
                >
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                      expanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 8 5 5 5-5" />
                  </svg>
                </button>
              </h3>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                hidden={!expanded}
                className="px-5 pb-6 text-[0.96rem] leading-relaxed text-muted sm:px-6"
              >
                {isPlaceholder(item.answer) ? (
                  <Value>{item.answer}</Value>
                ) : (
                  item.answer
                    .split(/(\[[^\]]+\])/)
                    .map((part, i) =>
                      isPlaceholder(part) ? <Value key={i}>{part}</Value> : <span key={i}>{part}</span>,
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
