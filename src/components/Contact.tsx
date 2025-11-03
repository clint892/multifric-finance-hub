import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's explore opportunities to create value together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-card p-8 rounded-lg border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your inquiry..." 
                    className="min-h-[150px]"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Mail className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">contact@multifriccapital.com</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Phone className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <MapPin className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Office</h3>
                <p className="text-muted-foreground">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
