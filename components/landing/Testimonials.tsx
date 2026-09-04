import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { SwipeIcon } from '@/components/ui/Icons';

/**
 * PROVA SOCIAL REAL OU NENHUMA.
 * A seção só existe quando há depoimentos verdadeiros em lib/site.ts.
 * Nada de números inventados, notas fictícias ou depoimentos genéricos.
 */
export function Testimonials() {
  const items = site.testimonials;
  const stats = site.stats;

  if (items.length === 0 && stats.length === 0) return null;

  return (
    <Section id="depoimentos" tone="soft">
      <SectionHeader eyebrow="Prova social" title="O que dizem os alunos" />

      {stats.length > 0 ? (
        <ul className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <li key={stat.label} className="rounded-lg bg-surface p-5 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      ) : null}

      {items.length > 0 ? (
        <ul className="snap-row md:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial) => (
            <li key={testimonial.author} className="card flex h-full flex-col">
              {testimonial.rating ? (
                <p
                  className="mb-3 text-accent"
                  aria-label={`Avaliação: ${testimonial.rating} de 5`}
                >
                  <span aria-hidden="true">{'★'.repeat(testimonial.rating)}</span>
                </p>
              ) : null}
              <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-ink">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-5 border-t border-line pt-4 text-sm">
                <strong className="block font-semibold text-ink">{testimonial.author}</strong>
                <span className="text-muted">{testimonial.role}</span>
              </footer>
            </li>
          ))}
        </ul>
      ) : null}

      {items.length > 1 ? (
        <p className="swipe-hint" aria-hidden="true">
          <SwipeIcon className="h-4 w-4" />
          arraste para ver mais
        </p>
      ) : null}
    </Section>
  );
}
