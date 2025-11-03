import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import projectGoldMining from "@/assets/project-gold-mining.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectMinerals from "@/assets/project-minerals.jpg";

const projects = [
  {
    icon: TrendingUp,
    image: projectGoldMining,
    title: "Gold Mining Investment Facilitation - Tanzania",
    description: "Connected international investors with a verified gold mining operation in Tanzania, conducting comprehensive due diligence on the mine's reserves, licensing, and operational capacity. Provided escrow services to ensure secure transaction completion.",
    impact: "Facilitated a $5.2 million investment deal with complete fraud protection. The mine increased production by 40% within 18 months, delivering strong returns to investors while supporting local employment."
  },
  {
    icon: Target,
    image: projectInfrastructure,
    title: "Infrastructure Project Financing - Kenya",
    description: "Secured financing for a major road infrastructure project in Kenya by connecting government agencies with international development banks. Structured the financing package and facilitated bank guarantee issuance.",
    impact: "Successfully raised $25 million in project financing. The 45km road project is now improving connectivity for over 100,000 residents and boosting regional trade."
  },
  {
    icon: Rocket,
    image: projectMinerals,
    title: "Precious Minerals Export Deal - Uganda",
    description: "Facilitated a secure minerals export transaction between Ugandan suppliers and European buyers. Conducted full seller verification, mineral authentication, and provided paymaster services throughout the transaction.",
    impact: "Completed $3.8 million transaction with zero fraud incidents. Established ongoing trade relationship generating $15M+ in annual export value and creating jobs in the mining sector."
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
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-accent/90 flex items-center justify-center">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
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
