import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              MULTIFRIC <span className="text-accent">CAPITAL</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Bridging global capital with African opportunities through secure, transparent financial solutions that eliminate fraud and accelerate economic development.
            </p>
            <div className="space-y-3">
              <a href="tel:+254208100092" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +254 208 100 092
              </a>
              <a href="mailto:info@multifriccapital.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@multifriccapital.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Westcom Point Building, Westlands, Nairobi</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} MULTIFRIC CAPITAL LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
