'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_ID, META_PIXEL_ID, hasGA, hasMetaPixel, trackScrollDepth } from '@/lib/analytics';
import { captureAttribution } from '@/lib/checkout';

/**
 * Scripts de tracking carregados com estratégia afterInteractive:
 * não bloqueiam o LCP nem a interação inicial.
 *
 * IMPORTANTE — evento Purchase:
 * o Purchase NÃO é disparado nesta página. Um clique no CTA não é uma venda.
 * Configure a confirmação de compra na Hotmart (Ferramentas → Pixel/Postback,
 * ou a integração nativa com o Meta) para que Purchase seja disparado apenas
 * quando a Hotmart confirmar o pagamento.
 */
export function Analytics() {
  useEffect(() => {
    captureAttribution();
    const cleanup = trackScrollDepth();
    return cleanup;
  }, []);

  return (
    <>
      {hasGA() ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });
            `}
          </Script>
        </>
      ) : null}

      {hasMetaPixel() ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
