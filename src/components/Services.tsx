import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, Building2, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Gem,
    title: "Mineral Investment Facilitation",
    description: "Connecting investors with lucrative opportunities in the mineral sector."
  },
  {
    icon: Building2,
    title: "Government Project Financing",
    description: "Securing financing for critical infrastructure and development projects."
  },
  {
    icon: BadgeCheck,
    title: "Bank Guarantees",
    description: "Facilitating the issuance of various types of bank guarantees."
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions connecting stakeholders across Africa's mineral industry and government projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                  <service.icon className="h-10 w-10 text-accent group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="success" size="lg" onClick={() => navigate('/services')}>
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
