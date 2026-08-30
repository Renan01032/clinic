import Image from 'next/image';
import { site } from '@/lib/site';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PlaceholderBox, Value } from '@/components/ui/Placeholder';
import { CheckIcon } from '@/components/ui/Icons';

/**
 * Autoridade. Nenhuma credencial é inventada: enquanto os dados reais não
 * forem preenchidos em lib/site.ts, aparecem como placeholders destacados.
 */
export function Instructor() {
  return (
    <Section id="instrutor" tone="surface">
      <SectionHeader eyebrow={site.instructor.eyebrow} title={site.instructor.title} />

      <div className="grid items-start gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
        <div>
          {site.instructor.photo ? (
            <Image
              src={site.instructor.photo}
              alt={`Foto de ${site.instructor.name}`}
              width={480}
              height={600}
              sizes="(max-width: 1024px) 100vw, 380px"
              className="w-full rounded-lg object-cover shadow-md"
            />
          ) : (
            <PlaceholderBox
              label="FOTO PROFISSIONAL DO INSTRUTOR — retrato real, ambiente de consultório ou estúdio"
              ratio="aspect-[4/5]"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            <Value>{site.instructor.name}</Value>
          </h3>
          <p className="mt-2 text-base font-medium text-primary">
            <Value>{site.instructor.role}</Value>
          </p>

          <div className="mt-6 space-y-4">
            {site.instructor.bio.map((paragraph) => (
              <p key={paragraph} className="text-[0.98rem] leading-relaxed text-muted">
                <Value>{paragraph}</Value>
              </p>
            ))}
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {site.instructor.credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-start gap-2.5 rounded-md border border-line bg-background px-4 py-3 text-[0.92rem]"
              >
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-primary" />
                <Value>{credential}</Value>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
