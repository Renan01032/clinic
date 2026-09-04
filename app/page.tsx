import { site } from '@/lib/site';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Identification } from '@/components/landing/Identification';
import { Agitation } from '@/components/landing/Agitation';
import { Modules } from '@/components/landing/Modules';
import { Benefits } from '@/components/landing/Benefits';
import { Audience } from '@/components/landing/Audience';
import { Instructor } from '@/components/landing/Instructor';
import { Testimonials } from '@/components/landing/Testimonials';
import { Included } from '@/components/landing/Included';
import { Offer } from '@/components/landing/Offer';
import { Faq } from '@/components/landing/Faq';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';
import { StickyMobileCta } from '@/components/landing/StickyMobileCta';

/**
 * Ordem das seções = ordem do funil.
 * ATENÇÃO → IDENTIFICAÇÃO → PROBLEMA → MECANISMO/CONTEÚDO → BENEFÍCIOS →
 * PARA QUEM → PROVA → OFERTA (com garantia embutida) → FAQ → CTA → HOTMART
 *
 * Enxugado (havia 19 blocos, hoje são 14): a página tinha uma seção
 * "Solução" e outra "Módulos" contando os mesmos 3 eixos (Compreensão/
 * Avaliação/Manejo), uma seção "Transformação" repetindo os benefícios com
 * outras palavras, uma seção "Garantia" isolada repetindo o que já aparece
 * junto ao preço, e duas faixas de CTA extras além de Hero + Oferta +
 * FinalCta + barra fixa do mobile. Removidas — o conteúdo real não mudou,
 * só parou de se repetir. Histórico completo no git.
 */
export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Identification />
        <Agitation />
        <Modules />
        <Benefits />
        <Audience />
        <Instructor />
        <Testimonials />
        <Included />
        <Offer />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />

      {/* Dados estruturados: ajudam o Google a entender que é um curso */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: site.course.name,
            description: site.seo.description,
            inLanguage: 'pt-BR',
            provider: {
              '@type': 'Organization',
              name: site.brand.name,
              sameAs: site.contact.instagramUrl,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
            },
          }),
        }}
      />
    </>
  );
}
