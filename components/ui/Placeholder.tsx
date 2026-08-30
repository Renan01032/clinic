import { isPlaceholder } from '@/lib/site';

/**
 * Renderiza um valor pendente de forma visualmente impossível de ignorar.
 * Se o valor já foi preenchido, imprime o texto normalmente.
 */
export function Value({ children, className }: { children: string; className?: string }) {
  if (!isPlaceholder(children)) {
    return <span className={className}>{children}</span>;
  }
  return (
    <mark
      className="rounded-sm bg-amber-100 px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-warn ring-1 ring-amber-300"
      title="Informação pendente — preencher em lib/site.ts"
    >
      {children}
    </mark>
  );
}

/** Bloco maior para imagens/fotos ainda não fornecidas. */
export function PlaceholderBox({
  label,
  className = '',
  ratio = 'aspect-[4/3]',
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/60 p-6 text-center ${className}`}
    >
      <span className="font-mono text-xs font-semibold uppercase tracking-wide text-warn">
        {label}
      </span>
    </div>
  );
}
