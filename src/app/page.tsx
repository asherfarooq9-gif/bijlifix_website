import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
