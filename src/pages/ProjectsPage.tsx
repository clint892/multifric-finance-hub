import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transformative projects that drive growth and create lasting impact across Africa
            </p>
          </div>
        </div>
      </section>

      <Projects />

      <Footer />
    </div>
  );
};

export default ProjectsPage;
