import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroGraphic from "@/assets/hero-graphic.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-primary animate-fade-in">
                EMPOWERING
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-accent">
                GROWTH
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Bridging global capital with African opportunities through secure, transparent financial solutions that eliminate fraud and accelerate economic development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button variant="success" size="lg" className="text-lg w-full sm:w-auto">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://wa.me/254208100092" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src={heroGraphic} 
                alt="Financial growth and investment success" 
                className="w-full h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
