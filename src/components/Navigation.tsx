import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-4">
            <a href="tel:+254208100092" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              +254 208 100 092
            </a>
            <a href="mailto:info@multifriccapital.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              info@multifriccapital.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-primary-foreground/80">
            <MapPin className="h-3 w-3" />
            Westcom Point Building, Westlands, Nairobi
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-foreground">
              MULTIFRIC <span className="text-accent">CAPITAL</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Services
              </Link>
              <Link to="/projects" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Projects
              </Link>
              <Link to="/why-choose-us" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Why Choose Us
              </Link>
              <Link to="/team" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Team
              </Link>
              <Link to="/blog" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                Blog
              </Link>
              <Link to="/faq" className="text-foreground/70 hover:text-accent transition-colors font-medium">
                FAQ
              </Link>
              <Link to="/get-started">
                <Button variant="success">Get Started</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact</Button>
              </Link>
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                About Us
              </Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Services
              </Link>
              <Link to="/projects" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Projects
              </Link>
              <Link to="/why-choose-us" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Why Choose Us
              </Link>
              <Link to="/team" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Team
              </Link>
              <Link to="/blog" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Blog
              </Link>
              <Link to="/faq" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                FAQ
              </Link>
              <Link to="/get-started">
                <Button variant="success" className="w-full">Get Started</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full">Contact</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
