import { site } from '@/lib/site';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Identification } from '@/components/landing/Identification';
import { Agitation } from '@/components/landing/Agitation';
import { Solution } from '@/components/landing/Solution';
import { Modules } from '@/components/landing/Modules';
import { Benefits } from '@/components/landing/Benefits';
import { CtaBand } from '@/components/landing/CtaBand';
import { Audience } from '@/components/landing/Audience';
import { Instructor } from '@/components/landing/Instructor';
import { Testimonials } from '@/components/landing/Testimonials';
import { Transformation } from '@/components/landing/Transformation';
import { Included } from '@/components/landing/Included';
import { Offer } from '@/components/landing/Offer';
import { Guarantee } from '@/components/landing/Guarantee';
import { Faq } from '@/components/landing/Faq';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';
import { StickyMobileCta } from '@/components/landing/StickyMobileCta';

/**
 * Ordem das seções = ordem do funil.
 * ATENÇÃO → IDENTIFICAÇÃO → PROBLEMA → DESEJO → MECANISMO → CURSO →
 * PROVA → OFERTA → RISCO → CTA → HOTMART
 */
export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Identification />
        <Agitation />
        <Solution />
        <Modules />
        <Benefits />

        <CtaBand
          title="Se isso faz sentido para o seu momento, o acesso é imediato."
          label="Quero garantir minha vaga"
          placement="beneficios"
        />

        <Audience />
        <Instructor />
        <Testimonials />
        <Transformation />

        <CtaBand
          title="Comece hoje a organizar seu raciocínio clínico em casos de humor."
          label="Quero acessar o minicurso"
          placement="transformacao"
          tone="dark"
        />

        <Included />
        <Offer />
        <Guarantee />
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
            name: site.brand.name,
            description: site.seo.description,
            inLanguage: 'pt-BR',
            provider: {
              '@type': 'Organization',
              name: site.footer.producer,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: site.trustBar[1]?.label,
            },
          }),
        }}
      />
    </>
  );
}
