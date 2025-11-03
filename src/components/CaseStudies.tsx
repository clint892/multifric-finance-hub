import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Tanzania Gold Mining Investment",
      category: "Minerals & Mining",
      value: "$5.2M",
      timeline: "4 weeks",
      client: "International Investment Consortium",
      challenge: "Verification of gold reserves and regulatory compliance for a mining operation in Geita, Tanzania.",
      solution: [
        "Conducted comprehensive geological survey verification",
        "Coordinated with Tanzania Ministry of Minerals",
        "Structured secure escrow arrangement with CRDB Bank",
        "Facilitated legal documentation and export licensing"
      ],
      results: [
        "100% reserve verification completed",
        "All regulatory approvals secured",
        "Successful fund transfer via escrow",
        "Client ROI: 28% within 18 months"
      ],
      parties: ["International Investors (Dubai)", "Local Mining Company", "CRDB Bank Tanzania", "Ministry of Minerals"]
    },
    {
      title: "Kenya Infrastructure Road Project",
      category: "Government Projects",
      value: "$25M",
      timeline: "6 weeks",
      client: "European Development Consortium",
      challenge: "Securing financing for 75km highway construction with government backing and performance guarantees.",
      solution: [
        "Negotiated with Kenya Roads Board for project approval",
        "Structured multi-bank guarantee arrangement",
        "Coordinated with Ministry of Transport for permits",
        "Implemented milestone-based payment structure"
      ],
      results: [
        "Full project funding secured",
        "Government performance bond issued",
        "Construction completed 2 months ahead of schedule",
        "Created 450 local jobs"
      ],
      parties: ["EU Development Fund", "Kenya Roads Board", "Equity Bank", "Ministry of Transport"]
    },
    {
      title: "Rwanda Solar Energy Investment",
      category: "Renewable Energy",
      value: "$12M",
      timeline: "5 weeks",
      client: "Asian Investment Fund",
      challenge: "Structuring investment in 50MW solar farm with government offtake agreement and currency risk mitigation.",
      solution: [
        "Negotiated 20-year power purchase agreement with REG",
        "Structured USD-denominated payment terms",
        "Coordinated land acquisition and permits",
        "Arranged equipment financing through local banks"
      ],
      results: [
        "Government PPA signed and guaranteed",
        "Project operational within 8 months",
        "Powers 35,000 households",
        "IRR: 16.5% annually"
      ],
      parties: ["Asian Investment Fund", "Rwanda Energy Group", "Bank of Kigali", "Ministry of Infrastructure"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Detailed Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transactions with verified results and named institutions
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 md:p-12 border-border bg-card">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-3xl font-bold text-card-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">Client: {study.client}</p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Case Study
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">{study.value}</p>
                  <p className="text-xs text-muted-foreground">Deal Value</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-accent">{study.timeline}</p>
                  <p className="text-xs text-muted-foreground">Completion Time</p>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-lg">
                  <Users className="h-6 w-6 text-success mx-auto mb-2" />
                  <p className="text-2xl font-bold text-success">{study.parties.length}</p>
                  <p className="text-xs text-muted-foreground">Parties Involved</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
                    <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-sm">Challenge</span>
                  </h4>
                  <p className="text-muted-foreground mb-4">{study.challenge}</p>
                  
                  <h4 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">Solution</span>
                  </h4>
                  <ul className="space-y-2">
                    {study.solution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
                    <span className="bg-success/10 text-success px-2 py-1 rounded text-sm">Results</span>
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-card-foreground mb-3">Parties Involved</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.parties.map((party, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full">
                        {party}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  All parties and institutions named have provided consent for publication. 
                  Full transaction documentation available for verification upon request.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
