import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, CheckCircle2, Clock } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$850M+",
      label: "Total Capital Facilitated",
      description: "Across 45+ successful deals"
    },
    {
      icon: CheckCircle2,
      value: "94%",
      label: "Success Rate",
      description: "Of assessed projects closed"
    },
    {
      icon: Clock,
      value: "4-6 Weeks",
      label: "Average Deal Closure",
      description: "From assessment to funding"
    },
    {
      icon: TrendingUp,
      value: "18",
      label: "Active Pipeline Projects",
      description: "Currently under assessment"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Track Record of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into our performance and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-card-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">$2.5B+</p>
              <p className="text-muted-foreground">Total Deal Pipeline Value</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-success mb-2">Zero</p>
              <p className="text-muted-foreground">Fraud Cases Reported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
