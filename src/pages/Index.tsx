import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeroSlider } from "@/components/HeroSlider";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { CaseStudies } from "@/components/CaseStudies";
import { Partners } from "@/components/Partners";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Press } from "@/components/Press";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HeroSlider />
      <About />
      <Statistics />
      <Services />
      <Projects />
      <CaseStudies />
      <Partners />
      <VideoSection />
      <Testimonials />
      <Press />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
