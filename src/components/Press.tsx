import { Card } from "@/components/ui/card";
import { Newspaper, Trophy, Mic2, FileText } from "lucide-react";

export const Press = () => {
  const mediaFeatures = [
    {
      outlet: "Bloomberg Africa",
      title: "Bridging Africa's Infrastructure Funding Gap",
      date: "March 2024",
      type: "Feature Article"
    },
    {
      outlet: "Financial Times",
      title: "New Models for Mineral Investment Security",
      date: "February 2024",
      type: "Expert Commentary"
    },
    {
      outlet: "Reuters",
      title: "Kenya Firm Facilitates $25M Infrastructure Deal",
      date: "January 2024",
      type: "News Coverage"
    },
    {
      outlet: "African Business Magazine",
      title: "Top 50 Financial Innovators in Africa",
      date: "December 2023",
      type: "Recognition"
    }
  ];

  const awards = [
    {
      title: "Best Financial Advisory Firm",
      organization: "East African Business Awards",
      year: "2023"
    },
    {
      title: "Innovation in Risk Management",
      organization: "African Banking Awards",
      year: "2023"
    },
    {
      title: "Excellence in Due Diligence",
      organization: "Kenya Financial Services Awards",
      year: "2022"
    }
  ];

  const speaking = [
    {
      event: "African Mining Indaba",
      topic: "Securing International Investment",
      date: "May 2024"
    },
    {
      event: "EAC Investment Summit",
      topic: "De-risking Cross-Border Transactions",
      date: "March 2024"
    },
    {
      event: "World Bank Group Seminar",
      topic: "Public-Private Partnerships in Africa",
      date: "January 2024"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Press & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Featured by leading media and recognized by industry leaders
          </p>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Media Coverage</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-card-foreground">{feature.outlet}</h4>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">{feature.type}</span>
                </div>
                <p className="text-muted-foreground mb-2">{feature.title}</p>
                <p className="text-sm text-muted-foreground/70">{feature.date}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Awards & Honors</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-6 border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Trophy className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground mb-1">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.organization}</p>
                      <p className="text-xs text-accent mt-1">{award.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Speaking Engagements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Mic2 className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Speaking Engagements</h3>
            </div>
            <div className="space-y-4">
              {speaking.map((engagement, index) => (
                <Card key={index} className="p-6 border-border bg-card">
                  <h4 className="font-bold text-card-foreground mb-2">{engagement.event}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{engagement.topic}</p>
                  <p className="text-xs text-accent">{engagement.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Published Articles</h3>
          </div>
          <Card className="p-8 border-border bg-card">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold text-card-foreground">"Mitigating Investment Risk in African Mineral Markets"</p>
                  <p className="text-sm text-muted-foreground">Journal of African Finance, Vol. 28 (2024)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold text-card-foreground">"The Role of Escrow Services in Cross-Border Transactions"</p>
                  <p className="text-sm text-muted-foreground">East African Economic Review, Issue 12 (2023)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold text-card-foreground">"Bank Guarantees: Best Practices for International Investors"</p>
                  <p className="text-sm text-muted-foreground">Global Trade Finance Magazine (2023)</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
