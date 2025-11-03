import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeroSlider } from "@/components/HeroSlider";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HeroSlider />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
