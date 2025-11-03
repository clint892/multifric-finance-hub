import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unlock African Opportunities?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Join global investors and African partners who trust MULTIFRIC CAPITAL LIMITED to bridge opportunities across minerals and government projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="success" 
              size="lg" 
              className="text-lg w-full sm:w-auto"
              onClick={() => navigate('/get-started')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => navigate('/book-consultation')}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
