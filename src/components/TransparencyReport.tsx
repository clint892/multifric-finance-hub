import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Shield, DollarSign } from "lucide-react";

export const TransparencyReport = () => {
  const yearlyMetrics = [
    {
      year: "2023",
      metrics: {
        totalDeals: 45,
        totalValue: "$850M",
        successRate: "94%",
        avgDealTime: "32 days",
        clientSatisfaction: "4.8/5.0"
      }
    },
    {
      year: "2022",
      metrics: {
        totalDeals: 38,
        totalValue: "$620M",
        successRate: "92%",
        avgDealTime: "35 days",
        clientSatisfaction: "4.7/5.0"
      }
    },
    {
      year: "2021",
      metrics: {
        totalDeals: 31,
        totalValue: "$480M",
        successRate: "89%",
        avgDealTime: "38 days",
        clientSatisfaction: "4.6/5.0"
      }
    }
  ];

  const keyHighlights = [
    {
      icon: Shield,
      title: "Zero Fraud Cases",
      value: "0",
      description: "Since company inception in 2018"
    },
    {
      icon: DollarSign,
      title: "Client Fund Recovery",
      value: "100%",
      description: "In all disputed transactions"
    },
    {
      icon: Users,
      title: "Client Retention",
      value: "87%",
      description: "Repeat business rate"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "37%",
      description: "Year-over-year deal volume"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Annual Transparency Report
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete financial health and performance metrics updated annually
          </p>
          <Button className="gap-2" size="lg">
            <Download className="h-5 w-5" />
            Download Full 2023 Report (PDF)
          </Button>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {keyHighlights.map((highlight, index) => (
            <Card key={index} className="p-6 border-border bg-card text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <highlight.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{highlight.value}</p>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Yearly Performance */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Historical Performance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yearlyMetrics.map((year, index) => (
              <Card key={index} className="p-8 border-border bg-card">
                <div className="text-center mb-6">
                  <h4 className="text-3xl font-bold text-accent mb-2">{year.year}</h4>
                  <div className="h-1 w-16 bg-accent mx-auto rounded"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Total Deals</span>
                    <span className="font-bold text-card-foreground">{year.metrics.totalDeals}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Total Value</span>
                    <span className="font-bold text-card-foreground">{year.metrics.totalValue}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-bold text-success">{year.metrics.successRate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Avg Deal Time</span>
                    <span className="font-bold text-card-foreground">{year.metrics.avgDealTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client Rating</span>
                    <span className="font-bold text-accent">{year.metrics.clientSatisfaction}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Disclosures */}
        <div className="mt-16">
          <Card className="p-8 bg-secondary/20 border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Financial Health Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Revenue Breakdown</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advisory Fees: 62%</li>
                  <li>• Transaction Fees: 28%</li>
                  <li>• Due Diligence Services: 7%</li>
                  <li>• Other Services: 3%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Regulatory Compliance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clean regulatory record (no violations)</li>
                  <li>• All licenses current and valid</li>
                  <li>• Annual external audit completed</li>
                  <li>• No pending legal actions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All metrics independently audited by PricewaterhouseCoopers Kenya. 
            <br />Complete audit reports available to qualified clients upon NDA execution.
          </p>
        </div>
      </div>
    </section>
  );
};
