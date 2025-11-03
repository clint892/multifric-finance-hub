import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Shield, Target, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We operate with the highest ethical standards, ensuring every transaction is secure, transparent, and scam-free."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable outcomes that drive growth and create lasting value for our partners."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We build long-term relationships based on trust, collaboration, and mutual success."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in due diligence, financial services, and client satisfaction."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Multifric Capital
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner in bridging global capital with African opportunities
            </p>
          </div>
        </div>
      </section>

      <About />

      {/* Our Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
