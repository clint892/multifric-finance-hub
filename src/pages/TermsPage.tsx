import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Terms and conditions for using our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground leading-relaxed mb-6">
              These Terms of Service govern your use of Multifric Capital's services. By engaging our services, you agree to these terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Multifric Capital provides financial facilitation services including but not limited to mineral investment facilitation, project financing, due diligence, escrow services, and bank guarantee facilitation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Clients are responsible for providing accurate information, meeting agreed-upon obligations, and complying with all applicable laws and regulations in their jurisdiction.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While we conduct thorough due diligence, Multifric Capital does not guarantee investment outcomes. Clients should conduct their own independent analysis before making investment decisions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, contact us at info@multifriccapital.com or +254 208 100 092.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
