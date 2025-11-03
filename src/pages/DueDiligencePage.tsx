import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Users, 
  Building2, 
  MapPin, 
  Scale, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Download,
  Clock
} from "lucide-react";

const DueDiligencePage = () => {
  const dueDiligencePhases = [
    {
      phase: "Phase 1: Initial Screening",
      duration: "2-3 days",
      icon: Search,
      steps: [
        "KYC verification of all parties (individuals and companies)",
        "Sanctions screening (OFAC, EU, UN lists)",
        "Basic documentation review (IDs, company certificates)",
        "Preliminary risk assessment",
        "Background checks on key individuals"
      ],
      redFlags: [
        "Missing or invalid identification documents",
        "Match on sanctions lists",
        "Inconsistent company registration details",
        "Adverse media coverage"
      ]
    },
    {
      phase: "Phase 2: Legal Verification",
      duration: "5-7 days",
      icon: Scale,
      steps: [
        "Title verification by partner law firms",
        "Government authorization confirmation",
        "License and permit validation",
        "Contract review and legal opinion",
        "Beneficial ownership disclosure",
        "Court judgment searches",
        "Intellectual property rights verification"
      ],
      redFlags: [
        "Disputed ownership or unclear title",
        "Missing government approvals",
        "Expired or invalid licenses",
        "Ongoing litigation",
        "Hidden beneficial owners"
      ]
    },
    {
      phase: "Phase 3: Technical Assessment",
      duration: "7-10 days",
      icon: TrendingUp,
      steps: [
        "Independent geological survey (for minerals)",
        "Engineering assessment (for infrastructure)",
        "Environmental impact review",
        "Market analysis and valuation",
        "Feasibility study verification",
        "Quality assurance testing",
        "Third-party expert reports"
      ],
      redFlags: [
        "Inflated reserve estimates",
        "Incomplete feasibility studies",
        "Environmental violations",
        "Unrealistic market assumptions",
        "Poor quality or grade verification"
      ]
    },
    {
      phase: "Phase 4: Financial Due Diligence",
      duration: "5-7 days",
      icon: FileText,
      steps: [
        "Financial statement analysis (3 years)",
        "Cash flow projection review",
        "Tax compliance verification",
        "Debt and liability assessment",
        "Source of funds verification",
        "Bank reference checks",
        "Audit report review"
      ],
      redFlags: [
        "Suspicious transaction patterns",
        "Unexplained source of funds",
        "Tax evasion indicators",
        "Hidden liabilities",
        "Falsified financial statements"
      ]
    },
    {
      phase: "Phase 5: Site Inspection",
      duration: "3-5 days",
      icon: MapPin,
      steps: [
        "Physical site visit by our team",
        "Equipment and infrastructure verification",
        "Operations review",
        "Community and stakeholder interviews",
        "Photographic and video documentation",
        "Security and access assessment"
      ],
      redFlags: [
        "Site doesn't match descriptions",
        "No actual operations occurring",
        "Community disputes",
        "Security concerns",
        "Infrastructure deficiencies"
      ]
    },
    {
      phase: "Phase 6: Final Report & Decision",
      duration: "2-3 days",
      icon: CheckCircle2,
      steps: [
        "Comprehensive due diligence report compilation",
        "Risk rating assignment (Low/Medium/High)",
        "Recommendation for approval or rejection",
        "Mitigation measures for identified risks",
        "Client presentation and discussion",
        "Final decision and documentation"
      ],
      redFlags: [
        "Multiple high-risk indicators",
        "Unmitigated critical risks",
        "Non-cooperation from parties",
        "Material misrepresentations discovered"
      ]
    }
  ];

  const successCriteria = [
    {
      criteria: "Legal Clearance",
      requirements: [
        "Clear and unencumbered title",
        "All required government approvals in place",
        "Valid licenses and permits",
        "No ongoing material litigation",
        "Clean beneficial ownership structure"
      ]
    },
    {
      criteria: "Technical Viability",
      requirements: [
        "Independent expert verification completed",
        "Reserves/resources confirmed within ±10% margin",
        "Feasibility study meets industry standards",
        "Environmental compliance demonstrated",
        "Quality specifications met"
      ]
    },
    {
      criteria: "Financial Health",
      requirements: [
        "Transparent financial statements",
        "Legitimate source of funds documented",
        "Tax compliance confirmed",
        "No hidden liabilities",
        "Realistic financial projections"
      ]
    },
    {
      criteria: "Counterparty Integrity",
      requirements: [
        "Clean KYC and background checks",
        "No sanctions or adverse media",
        "Verifiable track record",
        "Professional references confirmed",
        "Cooperative throughout process"
      ]
    }
  ];

  const disqualificationReasons = [
    "Discovery of fraud or material misrepresentation",
    "Match on international sanctions lists (OFAC, EU, UN)",
    "Disputed ownership or unclear legal title",
    "Missing critical government approvals or permits",
    "Technical reports showing significantly lower than claimed values",
    "Evidence of environmental violations or community disputes",
    "Inability to verify legitimate source of funds",
    "Non-cooperation or obstruction during due diligence",
    "Criminal background of key individuals",
    "Ongoing litigation that materially affects the transaction"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Due Diligence Process
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive 6-phase verification process ensuring every transaction meets our zero-fraud standard
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Complete Process Timeline</h2>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-accent" />
              <p className="text-2xl font-bold text-accent">24-35 Days Total</p>
            </div>
          </div>

          {/* Process Phases */}
          <div className="space-y-16">
            {dueDiligencePhases.map((phase, index) => (
              <Card key={index} className="p-8 md:p-12 border-border bg-card">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-card-foreground">{phase.phase}</h3>
                      <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">{phase.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Steps */}
                  <div>
                    <h4 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
                      <phase.icon className="h-5 w-5 text-accent" />
                      Verification Steps
                    </h4>
                    <ul className="space-y-3">
                      {phase.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Flags */}
                  <div>
                    <h4 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Red Flags / Disqualifiers
                    </h4>
                    <ul className="space-y-3">
                      {phase.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Criteria Checklist</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All criteria must be met for transaction approval
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successCriteria.map((item, index) => (
              <Card key={index} className="p-8 border-border bg-card">
                <h3 className="text-xl font-bold text-card-foreground mb-6">{item.criteria}</h3>
                <ul className="space-y-3">
                  {item.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Disqualification */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Automatic Disqualification Triggers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Any of these findings result in immediate rejection
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-destructive/30 bg-card">
              <ul className="space-y-4">
                {disqualificationReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sample Due Diligence Report</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our comprehensive reports include (redacted example)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-border bg-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-card-foreground">Report Structure</h3>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Sample (PDF)
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Executive Summary</p>
                      <p className="text-sm text-muted-foreground">Overall recommendation, risk rating, key findings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Parties Overview</p>
                      <p className="text-sm text-muted-foreground">KYC results, background checks, corporate structure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Legal Analysis</p>
                      <p className="text-sm text-muted-foreground">Title verification, licenses, contracts, legal opinions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Technical Assessment</p>
                      <p className="text-sm text-muted-foreground">Expert reports, site inspection findings, quality verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">5</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Financial Review</p>
                      <p className="text-sm text-muted-foreground">Financial statements analysis, source of funds, projections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">6</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Risk Assessment</p>
                      <p className="text-sm text-muted-foreground">Identified risks, severity ratings, mitigation recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-accent text-white rounded w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">7</span>
                    <div>
                      <p className="font-semibold text-card-foreground">Appendices</p>
                      <p className="text-sm text-muted-foreground">Supporting documents, photos, third-party reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Average report length: 150-200 pages • Delivery format: PDF + Physical binding
                <br />All reports reviewed by senior management before client presentation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DueDiligencePage;
