import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Visionary Entrepreneurs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MultiFricCapital is a premier investment firm dedicated to identifying and nurturing exceptional businesses with transformative potential. Our team brings decades of combined experience in capital markets, strategic growth, and operational excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We partner with ambitious founders and management teams who share our commitment to building sustainable, high-impact enterprises that shape the future of their industries.
            </p>
            <Button variant="default" size="lg">
              Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-card border border-border rounded-lg">
              <div className="text-5xl font-bold text-accent mb-2">$2.5B+</div>
              <div className="text-muted-foreground">Assets Under Management</div>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Portfolio Companies</div>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg">
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Global Markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
