import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How we protect and handle your information
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Multifric Capital, we take your privacy seriously and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including contact details, business information, and transaction data necessary to provide our services.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your information is used to provide our financial services, conduct due diligence, facilitate transactions, and communicate with you about our services.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy, please contact us at info@multifriccapital.com or call +254 208 100 092.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
