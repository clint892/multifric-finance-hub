import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Zap, Shield } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Growth Equity",
    description: "Partnering with high-growth companies scaling innovative solutions across emerging markets"
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Strategic investments in diverse markets with emphasis on sustainable long-term value"
  },
  {
    icon: Zap,
    title: "Technology",
    description: "Supporting disruptive technologies transforming industries and creating new opportunities"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Disciplined approach to portfolio construction and comprehensive risk assessment"
  }
];

export const FocusAreas = () => {
  return (
    <section id="focus" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Investment Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic capital deployment across sectors driving global economic transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <area.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
