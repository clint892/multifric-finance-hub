import { Globe, Shield, Zap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Global Investor Bridge",
    description: "Linking international capital with African opportunities through secure, transparent processes."
  },
  {
    icon: Shield,
    title: "Mineral Transaction Security",
    description: "Transparent, scam-free processes for mineral sellers and investors worldwide."
  },
  {
    icon: Zap,
    title: "Government Project Financing",
    description: "Powering development across 8+ sectors including energy, infrastructure, and healthcare."
  },
  {
    icon: Award,
    title: "Bank Guarantees & Bonds",
    description: "Trusted financial instruments ensuring secure deals and contractual obligations."
  }
];

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Company
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Multifric Capital is a trusted bridge for investors, gold buyers, and businesses seeking secure and transparent transactions. We specialize in due diligence, project financing, and escrow/paymaster services, ensuring our clients avoid scams while benefiting from smooth and reliable deals.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to provide confidence and clarity in high-value transactions across East Africa and beyond. We eliminate barriers, minimize risks, and foster transparent, profitable partnerships across minerals and government projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
