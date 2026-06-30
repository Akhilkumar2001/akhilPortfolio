import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work/work";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Certifications } from "@/components/sections/certifications";
import { Hire } from "@/components/sections/hire";
import { Booking } from "@/components/sections/booking";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Experience />
      <Testimonials />
      <Certifications />
      <Hire />
      <Booking />
      <Contact />
    </>
  );
}
