import { Card } from "@/components/ui/card";
import { Shield, Award, Building2, Scale } from "lucide-react";
import certISO9001 from "@/assets/cert-iso-9001.jpg";
import certISO27001 from "@/assets/cert-iso-27001.jpg";
import certAMLKYC from "@/assets/cert-aml-kyc.jpg";
import certFCA from "@/assets/cert-fca.jpg";
import certificationsShowcase from "@/assets/certifications.jpg";

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
      image: certISO9001,
      title: "ISO 9001:2015",
      description: "Quality Management Systems",
      verifyLink: "#"
    },
    {
      image: certISO27001,
      title: "ISO 27001:2013",
      description: "Information Security",
      verifyLink: "#"
    },
    {
      image: certAMLKYC,
      title: "AML/KYC Compliance",
      description: "Anti-Money Laundering",
      verifyLink: "#"
    },
    {
      image: certFCA,
      title: "FCA Regulated",
      description: "Financial Conduct Authority",
      verifyLink: "#"
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
              Independently verified and regularly audited certifications
            </p>
          </div>

          {/* Certification Showcase Banner */}
          <div className="mb-12 rounded-xl overflow-hidden border-2 border-accent/20 shadow-xl">
            <img 
              src={certificationsShowcase} 
              alt="Complete certification portfolio"
              className="w-full h-auto"
            />
          </div>

          {/* Individual Certification Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 border-border bg-card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <a 
                  href={cert.verifyLink} 
                  className="text-xs text-accent hover:underline flex items-center justify-center gap-1"
                >
                  <Shield className="h-3 w-3" />
                  Verify Certificate
                </a>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All certifications are independently verified and regularly audited. 
              <br />Annual compliance reports and audit documentation available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
