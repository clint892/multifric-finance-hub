import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Shield, Globe, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fraud Prevention Expertise",
    description: "Our rigorous due diligence processes and anti-fraud measures protect you from scams and ensure every transaction is secure and legitimate."
  },
  {
    icon: Globe,
    title: "Deep African Market Knowledge",
    description: "Years of experience in East African markets give us unique insights and connections that accelerate deal flow and mitigate risks."
  },
  {
    icon: Users,
    title: "Trusted Network",
    description: "Access to a vetted network of investors, government partners, and industry leaders across multiple sectors."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully facilitated millions in transactions and project financing with consistently positive outcomes for our clients."
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Services",
    description: "From due diligence to escrow services, we provide end-to-end support for complex financial transactions."
  },
  {
    icon: Award,
    title: "Client-Centric Approach",
    description: "We prioritize your success with personalized solutions, transparent communication, and dedicated support throughout every engagement."
  }
];

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Multifric Capital
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for secure, transparent, and successful financial transactions in Africa
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <reason.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Successful Deals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-muted-foreground">Transactions Facilitated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground">Sectors Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
