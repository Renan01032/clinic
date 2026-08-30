type SectionProps = {
  id?: string;
  children: React.ReactNode;
  /** Fundo alternativo para criar ritmo visual entre seções. */
  tone?: 'default' | 'surface' | 'soft' | 'dark';
  className?: string;
};

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-background text-ink',
  surface: 'bg-surface text-ink',
  soft: 'bg-surface-alt text-ink',
  dark: 'bg-primary-dark text-white',
};

export function Section({ id, children, tone = 'default', className = '' }: SectionProps) {
  return (
    <section id={id} className={`section ${tones[tone]} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  inverted?: boolean;
}) {
  return (
    <header
      className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-3 ${inverted ? 'text-secondary' : ''}`}>
          <span
            aria-hidden="true"
            className={`h-px w-6 ${inverted ? 'bg-secondary' : 'bg-primary'}`}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`h2 ${inverted ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {subtitle ? (
        <p className={`lead mt-4 ${inverted ? 'text-secondary' : ''}`}>{subtitle}</p>
      ) : null}
    </header>
  );
}
