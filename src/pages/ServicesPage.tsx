import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Gem, Building2, BadgeCheck, Award, Shield, Briefcase, TrendingUp, FileText, DollarSign, Building, AlertTriangle } from "lucide-react";
import serviceMinerals from "@/assets/service-minerals.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import serviceGuarantees from "@/assets/service-guarantees.jpg";
import servicePerformanceBonds from "@/assets/service-performance-bonds.jpg";
import serviceEscrow from "@/assets/service-escrow.jpg";
import serviceWealth from "@/assets/service-wealth.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import servicePlanning from "@/assets/service-planning.jpg";
import serviceAssets from "@/assets/service-assets.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceRisk from "@/assets/service-risk.jpg";

const services = [
  {
    icon: Gem,
    image: serviceMinerals,
    title: "Mineral Investment Facilitation",
    description: "Connecting investors with lucrative opportunities in the mineral sector, including gold, diamonds, and rare earth elements.",
    features: [
      "Due diligence on mineral assets and sellers",
      "Deal structuring and negotiation support",
      "Market analysis and valuation",
      "Anti-fraud verification processes"
    ]
  },
  {
    icon: Building2,
    image: serviceGovernment,
    title: "Government Project Financing",
    description: "Securing financing for critical infrastructure and development projects through PPPs, syndicated loans, and bond issuances.",
    features: [
      "Infrastructure development financing",
      "Public-private partnerships",
      "International capital markets access",
      "National development program support"
    ]
  },
  {
    icon: BadgeCheck,
    image: serviceGuarantees,
    title: "Bank Guarantees",
    description: "Facilitating the issuance of bid bonds, advance payment guarantees, and financial guarantees through our network of financial institutions.",
    features: [
      "Bid bonds for tender submissions",
      "Advance payment guarantees",
      "Financial guarantees",
      "Global reach through correspondent banking"
    ]
  },
  {
    icon: Award,
    image: servicePerformanceBonds,
    title: "Performance Bonds",
    description: "Arranging performance bonds to assure contractual obligations are met, providing financial protection for all parties.",
    features: [
      "Construction project bonds",
      "Supply contract guarantees",
      "Service agreement protection",
      "Large-scale procurement bonds"
    ]
  },
  {
    icon: Shield,
    image: serviceEscrow,
    title: "Paymaster & Escrow Services",
    description: "Secure third-party holding for funds and assets during complex transactions, with transparent communication and robust security.",
    features: [
      "Mergers and acquisitions escrow",
      "Real estate transaction security",
      "International trade facilitation",
      "Litigation settlement handling"
    ]
  },
  {
    icon: TrendingUp,
    image: serviceWealth,
    title: "Wealth Management",
    description: "Personalized strategies for growing and preserving wealth through comprehensive financial planning and expert advisory.",
    features: [
      "Investment planning and management",
      "Retirement planning services",
      "Estate planning strategies",
      "Tax optimization solutions"
    ]
  },
  {
    icon: Briefcase,
    image: serviceAdvisory,
    title: "Investment Advisory",
    description: "Expert guidance for strategic investment decisions with insightful market analysis and personalized recommendations.",
    features: [
      "Portfolio diversification strategies",
      "Market analysis and insights",
      "Risk-adjusted investment planning",
      "Alternative asset evaluation"
    ]
  },
  {
    icon: FileText,
    image: servicePlanning,
    title: "Financial Planning",
    description: "Holistic financial roadmaps covering budgeting, debt management, insurance needs, and retirement strategies.",
    features: [
      "Comprehensive budget planning",
      "Debt management strategies",
      "Education funding solutions",
      "Path to financial independence"
    ]
  },
  {
    icon: DollarSign,
    image: serviceAssets,
    title: "Asset Management",
    description: "Professional management of diverse asset portfolios for high-net-worth individuals, institutions, and corporations.",
    features: [
      "Portfolio optimization",
      "Risk-adjusted return strategies",
      "Global market analysis",
      "Capital preservation and growth"
    ]
  },
  {
    icon: Building,
    image: serviceCorporate,
    title: "Corporate Finance",
    description: "Strategic financial solutions including M&A advisory, capital raising, restructuring, and valuation services.",
    features: [
      "Mergers and acquisitions advisory",
      "Capital raising solutions",
      "Corporate restructuring",
      "Business valuation services"
    ]
  },
  {
    icon: AlertTriangle,
    image: serviceRisk,
    title: "Risk Management",
    description: "Identifying and mitigating financial risks including market, credit, operational, and liquidity risks.",
    features: [
      "Comprehensive risk assessment",
      "Market risk mitigation",
      "Credit risk management",
      "Operational risk strategies"
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
