import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award } from "lucide-react";
import teamCEO from "@/assets/team-ceo.jpg";
import teamCFO from "@/assets/team-cfo.jpg";
import teamDirector from "@/assets/team-director.jpg";
import teamLegal from "@/assets/team-legal.jpg";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Wycliffe Kamau",
      title: "Chief Executive Officer & Founder",
      image: teamCEO,
      bio: "25+ years of experience in international finance and African investment. Former VP at Standard Bank's Investment Banking Division. Led over $2B in cross-border transactions.",
      credentials: [
        "PhD in International Finance, London School of Economics",
        "CFA Charter holder",
        "Former World Bank Consultant",
        "Served on EAC Investment Advisory Board"
      ],
      experience: "Previously held senior positions at Barclays Africa and Deutsche Bank, specializing in infrastructure and mineral financing.",
      linkedin: "#",
      email: "w.kamau@multifriccapital.com"
    },
    {
      name: "Grace Ochieng",
      title: "Chief Financial Officer",
      image: teamCFO,
      bio: "20+ years in corporate finance and risk management. Former Director at KPMG East Africa. Specialized in due diligence for high-value mineral and government contracts.",
      credentials: [
        "MBA in Finance, Harvard Business School",
        "CPA (Kenya and UK)",
        "Certified Risk Management Professional",
        "Member, Institute of CPAs (Kenya)"
      ],
      experience: "Led financial advisory for 50+ transactions valued over $800M. Expert in structuring complex escrow arrangements.",
      linkedin: "#",
      email: "g.ochieng@multifriccapital.com"
    },
    {
      name: "Michael Kamau",
      title: "Director of Operations",
      image: teamDirector,
      bio: "18+ years in minerals trading and government project facilitation. Deep networks across East African mining sectors and government ministries.",
      credentials: [
        "MSc in Mining Engineering, University of Witwatersrand",
        "Certified Minerals Trader",
        "Member, African Mining Vision Committee",
        "Former Mining Sector Advisor to Kenya Government"
      ],
      experience: "Facilitated 30+ mineral export deals and 12 government infrastructure projects. Expertise in regulatory compliance.",
      linkedin: "#",
      email: "m.kamau@multifriccapital.com"
    },
    {
      name: "Amina Hassan",
      title: "Head of Legal & Compliance",
      image: teamLegal,
      bio: "15+ years in international commercial law and regulatory compliance. Former Partner at Anjarwalla & Khanna. Specialist in cross-border transaction law.",
      credentials: [
        "LLM in International Trade Law, University of Cambridge",
        "Admitted to Bar: Kenya, UK, New York",
        "Certified AML/KYC Specialist",
        "Member, International Bar Association"
      ],
      experience: "Structured legal frameworks for transactions exceeding $1.5B. Expert in AML compliance and international sanctions.",
      linkedin: "#",
      email: "a.hassan@multifriccapital.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Decades of combined expertise in international finance, African markets, and secure transaction facilitation
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className={`p-8 md:p-12 border-border bg-card ${
                  index % 2 === 1 ? 'bg-secondary/20' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Photo and Contact */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-accent/20"
                    />
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{member.title}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.experience}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-accent" />
                        <h4 className="font-bold text-card-foreground">Credentials & Qualifications</h4>
                      </div>
                      <ul className="space-y-2">
                        {member.credentials.map((credential, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-success mt-1">✓</span>
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Advisory Board</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supported by leading industry experts and former government officials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hon. Prof. David Nalo",
                title: "Former Cabinet Secretary, Ministry of Mining",
                expertise: "Government Relations & Policy"
              },
              {
                name: "Dr. Sarah Kimani",
                title: "Former Director, Central Bank of Kenya",
                expertise: "Monetary Policy & Banking Regulation"
              },
              {
                name: "Robert Mensah",
                title: "Former Regional Director, African Development Bank",
                expertise: "Infrastructure Financing"
              }
            ].map((advisor, index) => (
              <Card key={index} className="p-6 border-border bg-card text-center">
                <h3 className="text-lg font-bold text-card-foreground mb-2">{advisor.name}</h3>
                <p className="text-sm text-accent mb-2">{advisor.title}</p>
                <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
