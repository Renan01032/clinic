type IconProps = { className?: string };

const base = 'h-5 w-5 shrink-0';

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

export function CrossIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  );
}

export function ArrowIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export function ShieldIcon({ className = '' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M12 2 4 5v6.2c0 4.8 3.4 9.3 8 10.8 4.6-1.5 8-6 8-10.8V5l-8-3Zm3.9 7.7-4.7 4.8a1.1 1.1 0 0 1-1.6 0l-2.3-2.4a1.1 1.1 0 1 1 1.6-1.6l1.5 1.6 3.9-4a1.1 1.1 0 1 1 1.6 1.6Z" />
    </svg>
  );
}

export function PlayIcon({ className = '' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.4 6.1 5 3.2a.8.8 0 0 1 0 1.4l-5 3.2a.8.8 0 0 1-1.2-.7V8.8a.8.8 0 0 1 1.2-.7Z" />
    </svg>
  );
}

export function DeviceIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M1 17h14" />
      <rect x="17" y="9" width="6" height="11" rx="1.5" />
    </svg>
  );
}

export function CertificateIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M7 20.5 12 18l5 2.5V16H7v4.5Z" />
      <path d="M7.5 7.5h9M7.5 11h5" />
    </svg>
  );
}

export function ClockIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

/** Dica de gesto: usada nos carrosséis arrastáveis do mobile. */
export function SwipeIcon({ className = '' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${base} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 7 5 12l4 5M15 7l4 5-4 5" />
    </svg>
  );
}

export const trustIcons = [DeviceIcon, ClockIcon, CertificateIcon, ShieldIcon] as const;
