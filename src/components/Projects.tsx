import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: TrendingUp,
    title: "Corporate Debt Restructuring for Apex Manufacturing",
    description: "Provided comprehensive financial advisory services to Apex Manufacturing, guiding them through a complex debt restructuring process to optimize their capital structure and ensure long-term viability.",
    impact: "Successfully reduced Apex Manufacturing's debt burden by 30% and improved their credit rating, leading to enhanced operational liquidity and renewed investor confidence."
  },
  {
    icon: Target,
    title: "Strategic Investment Portfolio Optimization for HNWI",
    description: "Developed and implemented tailored investment strategies for a high-net-worth individual, focusing on diversification and risk-adjusted returns across various asset classes.",
    impact: "Achieved a 15% annualized return on investment for the client, significantly outperforming market benchmarks while maintaining a balanced risk profile."
  },
  {
    icon: Rocket,
    title: "Growth Capital Funding for InnovateTech Startup",
    description: "Facilitated a Series B funding round for InnovateTech, a promising AI-driven startup, connecting them with strategic investors and securing the necessary capital for their expansion plans.",
    impact: "Secured $10 million in growth capital, enabling InnovateTech to scale operations, launch new products, and increase their market share by 25% within the first year."
  }
];

export const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've facilitated transformative projects across Africa's mineral industry and government sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <div className="flex justify-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                  <project.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-accent mb-2">Impact:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="success" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
