import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PlayIcon, SwipeIcon } from '@/components/ui/Icons';

/**
 * Conteúdo programático. Cada módulo diz o que o aluno passa a FAZER —
 * não apenas o tema que será abordado.
 */
export function Modules() {
  return (
    <Section id="conteudo" tone="default">
      <SectionHeader eyebrow={site.modules.eyebrow} title={site.modules.title} />

      {site.modules.draftNotice ? (
        <p className="mx-auto -mt-4 mb-10 max-w-2xl rounded-md border border-dashed border-amber-300 bg-amber-50/70 px-4 py-3 text-center font-mono text-xs leading-relaxed text-warn">
          {site.modules.draftNotice}
        </p>
      ) : null}

      {/* Mobile: carrossel arrastável (nativo, scroll-snap). Empilhar 3 cards
          altos custaria ~700px de rolagem antes da oferta. */}
      <div className="snap-row md:grid-cols-3">
        {site.modules.items.map((module, index) => (
          <Reveal as="article" key={module.number} delay={index * 80}>
            <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary">
                  <PlayIcon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Módulo {module.number}
                </span>
              </div>

              <h3 className="h3 text-ink">{module.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {module.description}
              </p>

              <p className="mt-5 border-t border-line pt-4 text-[0.9rem] font-medium leading-relaxed text-primary">
                {module.outcome}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="swipe-hint" aria-hidden="true">
        <SwipeIcon className="h-4 w-4" />
        arraste para ver os {site.modules.items.length} módulos
      </p>
    </Section>
  );
}
