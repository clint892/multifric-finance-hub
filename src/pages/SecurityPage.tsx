import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Scale, DollarSign, Users, AlertTriangle, CheckCircle2 } from "lucide-react";

const SecurityPage = () => {
  const escrowMechanics = [
    {
      title: "Multi-Bank Escrow Accounts",
      description: "Funds held in segregated accounts at tier-1 banks (Standard Bank, Barclays Africa, Equity Bank)",
      icon: Building2
    },
    {
      title: "Multi-Signature Release",
      description: "Requires authorization from buyer, seller, and MULTIFRIC CAPITAL before any funds transfer",
      icon: Lock
    },
    {
      title: "Milestone-Based Releases",
      description: "Payments released only upon verification of agreed milestones (geological reports, licenses, permits)",
      icon: CheckCircle2
    },
    {
      title: "Independent Verification",
      description: "Third-party auditors verify all conditions before fund release",
      icon: FileCheck
    }
  ];

  const insuranceCoverage = [
    {
      coverage: "Professional Indemnity Insurance",
      amount: "$50M per claim",
      provider: "AIG East Africa"
    },
    {
      coverage: "Transaction Fraud Protection",
      amount: "$25M per transaction",
      provider: "Britam Insurance"
    },
    {
      coverage: "Errors & Omissions Coverage",
      amount: "$10M annual aggregate",
      provider: "CIC Insurance Group"
    },
    {
      coverage: "Cyber Security Insurance",
      amount: "$15M data breach coverage",
      provider: "AIG Cyber Solutions"
    }
  ];

  const fraudProtection = [
    "Real-time transaction monitoring by compliance team",
    "KYC verification of all parties (individuals and corporate entities)",
    "Independent geological surveys for mineral deals",
    "Legal title verification by partner law firms",
    "Government authorization confirmation for all projects",
    "Sanctions screening against OFAC, EU, UN lists",
    "Beneficial ownership disclosure requirements",
    "Source of funds documentation mandatory"
  ];

  const legalFramework = [
    {
      aspect: "Governing Law",
      detail: "English Law with arbitration in London or Nairobi"
    },
    {
      aspect: "Dispute Resolution",
      detail: "ICC International Court of Arbitration or LCIA"
    },
    {
      aspect: "Regulatory Compliance",
      detail: "FCA regulated, Kenya Capital Markets Authority approved"
    },
    {
      aspect: "Client Funds Protection",
      detail: "FSCS protection scheme coverage (where applicable)"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Security & Risk Mitigation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive protection mechanisms ensuring zero fraud and secure transactions
            </p>
          </div>
        </div>
      </section>

      {/* Escrow Mechanics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Escrow Mechanics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bank-grade security for every transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {escrowMechanics.map((item, index) => (
              <Card key={index} className="p-8 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">How Escrow Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <p className="text-muted-foreground pt-1">Buyer deposits funds into segregated escrow account at partner bank</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <p className="text-muted-foreground pt-1">MULTIFRIC CAPITAL verifies all documentation and conditions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <p className="text-muted-foreground pt-1">Seller delivers as per agreement (minerals, documents, permits)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <p className="text-muted-foreground pt-1">Independent auditor confirms delivery meets specifications</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <p className="text-muted-foreground pt-1">Funds released only after multi-signature authorization</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Insurance Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              $100M+ in total insurance protection across all transaction types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceCoverage.map((item, index) => (
              <Card key={index} className="p-8 border-border bg-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-card-foreground">{item.coverage}</h3>
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <p className="text-3xl font-bold text-accent mb-2">{item.amount}</p>
                <p className="text-sm text-muted-foreground">Underwritten by {item.provider}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All insurance policies independently verified and renewed annually. 
              <br />Policy certificates available for client review upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Fraud Protection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Zero Tolerance Fraud Protection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered verification ensures every party is legitimate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fraudProtection.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-success mb-2">0</p>
                <p className="text-muted-foreground">Fraud Cases Since Inception</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">100%</p>
                <p className="text-muted-foreground">Client Fund Recovery Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-muted-foreground">Transaction Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Scale className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Legal Framework & Recourse</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear legal protections and dispute resolution mechanisms
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {legalFramework.map((item, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <h3 className="font-bold text-card-foreground">{item.aspect}</h3>
                  <p className="md:col-span-2 text-muted-foreground">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Sample Legal Documents Available</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Standard Escrow Agreement Template</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Client Service Agreement</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Tri-Party Agreement (Buyer-Seller-MULTIFRIC)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Terms of Business</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-6">
                All documents reviewed by Anjarwalla & Khanna LLP. Available for download upon NDA execution.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Missing import
import { Building2 } from "lucide-react";

export default SecurityPage;
