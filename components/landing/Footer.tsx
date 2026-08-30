import { site } from '@/lib/site';
import { Value } from '@/components/ui/Placeholder';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="container-page">
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-ink">{site.brand.name}</p>
            <p className="mt-1 max-w-md text-sm text-muted">{site.course.name}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="font-medium text-primary hover:underline"
              >
                WhatsApp {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-primary"
              >
                {site.contact.instagram}
              </a>
            </li>
            <li>
              <a href={site.footer.privacyUrl} className="hover:text-primary">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href={site.footer.termsUrl} className="hover:text-primary">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            <Value>{site.footer.producer}</Value> · CNPJ <Value>{site.footer.document}</Value> ·{' '}
            <Value>{site.footer.email}</Value>
          </p>

          <p className="max-w-4xl rounded-md border border-line bg-background p-4">
            <strong className="font-semibold text-ink">Aviso importante:</strong>{' '}
            {site.footer.disclaimer}
          </p>

          <p className="max-w-4xl text-xs">{site.footer.hotmartNotice}</p>

          <p className="text-xs">
            © {new Date().getFullYear()} <Value>{site.footer.producer}</Value>. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
