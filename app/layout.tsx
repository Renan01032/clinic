import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Analytics } from '@/components/landing/Analytics';

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-body',
});

// Montserrat: mesma família geométrica de caixa-alta usada na arte oficial
// do minicurso, para a página parecer continuação do anúncio.
const heading = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-sans-heading',
});

const baseUrl = site.seo.url.startsWith('http') ? site.seo.url : 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.brand.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: site.seo.locale,
    url: '/',
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.brand.name,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#22496f',
  width: 'device-width',
  initialScale: 1,
  // Deixa a página desenhar por baixo da barra de gestos do iPhone; a barra
  // fixa de compra compensa com env(safe-area-inset-bottom).
  viewportFit: 'cover',
  // Zoom permanece liberado — travar o pinch é falha de acessibilidade.
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${body.variable} ${heading.variable}`}>
      <body>
        <a
          href="#topo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
