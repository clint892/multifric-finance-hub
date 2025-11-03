import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Gem, Building2, BadgeCheck, FileCheck, Shield, Briefcase } from "lucide-react";
import serviceMinerals from "@/assets/service-minerals.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import serviceGuarantees from "@/assets/service-guarantees.jpg";
import serviceDiligence from "@/assets/service-diligence.jpg";
import serviceEscrow from "@/assets/service-escrow.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";

const services = [
  {
    icon: Gem,
    image: serviceMinerals,
    title: "Mineral Investment Facilitation",
    description: "Connecting global investors with lucrative opportunities in Africa's mineral sector, with a special focus on gold and precious metals.",
    features: [
      "Due diligence on mineral assets and sellers",
      "Escrow services for secure transactions",
      "Market analysis and valuation",
      "Anti-fraud verification processes"
    ]
  },
  {
    icon: Building2,
    image: serviceGovernment,
    title: "Government Project Financing",
    description: "Securing financing for critical infrastructure and development projects across multiple sectors.",
    features: [
      "Project evaluation and structuring",
      "Capital raising and investor matching",
      "Financial advisory services",
      "Risk assessment and mitigation"
    ]
  },
  {
    icon: BadgeCheck,
    image: serviceGuarantees,
    title: "Bank Guarantees & Bonds",
    description: "Facilitating the issuance of various types of bank guarantees to ensure secure deals and contractual obligations.",
    features: [
      "Performance guarantees",
      "Bid bonds and advance payment guarantees",
      "Financial guarantee arrangements",
      "Credit enhancement solutions"
    ]
  },
  {
    icon: FileCheck,
    image: serviceDiligence,
    title: "Due Diligence Services",
    description: "Comprehensive verification and background checks to protect clients from fraud and ensure transaction integrity.",
    features: [
      "Seller and buyer verification",
      "Asset authentication",
      "Legal and compliance checks",
      "Financial background analysis"
    ]
  },
  {
    icon: Shield,
    image: serviceEscrow,
    title: "Escrow & Paymaster Services",
    description: "Neutral third-party services to hold and disburse funds, ensuring secure and transparent transactions.",
    features: [
      "Secure fund holding",
      "Milestone-based disbursements",
      "Transaction monitoring",
      "Dispute resolution support"
    ]
  },
  {
    icon: Briefcase,
    image: serviceAdvisory,
    title: "Investment Advisory",
    description: "Strategic guidance for investors seeking opportunities in African markets, with focus on minerals and infrastructure.",
    features: [
      "Market entry strategies",
      "Portfolio optimization",
      "Risk management consulting",
      "Partnership facilitation"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive financial solutions connecting stakeholders across Africa's mineral industry and government projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-lg bg-accent flex items-center justify-center shadow-lg">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
