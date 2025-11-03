import { Card } from "@/components/ui/card";
import { Shield, Award, Building2, Scale, Lock, FileCheck } from "lucide-react";

export const Partners = () => {
  const partnerships = [
    {
      icon: Building2,
      title: "Banking Partners",
      partners: ["Standard Bank", "Barclays Africa", "Equity Bank", "KCB Group"]
    },
    {
      icon: Scale,
      title: "Legal Partners",
      partners: ["Anjarwalla & Khanna", "Bowmans Law", "IMMMA Advocates"]
    },
    {
      icon: Award,
      title: "Industry Associations",
      partners: ["African Mining Vision", "EAC Trade Council", "Kenya Bankers Association"]
    },
    {
      icon: Shield,
      title: "Insurance Partners",
      partners: ["AIG East Africa", "Britam Insurance", "CIC Insurance Group"]
    }
  ];

  const certifications = [
    {
      icon: FileCheck,
      title: "ISO 9001:2015",
      description: "Quality Management Systems"
    },
    {
      icon: Lock,
      title: "ISO 27001:2013",
      description: "Information Security"
    },
    {
      icon: Shield,
      title: "AML/KYC Compliance",
      description: "Anti-Money Laundering"
    },
    {
      icon: Award,
      title: "FCA Regulated",
      description: "Financial Conduct Authority"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Partnerships */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Working with leading institutions to ensure secure, transparent transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((category, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <category.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.partners.map((partner, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meeting the highest standards of financial services compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 border-border bg-card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-success/10 p-4 rounded-full">
                    <cert.icon className="h-8 w-8 text-success" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All certifications are independently verified and regularly audited. 
              <br />Annual compliance reports available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
