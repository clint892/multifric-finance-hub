import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  ClipboardCheck, 
  FileSearch, 
  Shield, 
  TrendingUp,
  CheckCircle2,
  Clock,
  Award,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const assessmentSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  project_category: z.string().min(1, "Please select a category"),
  funding_amount: z.string().min(1, "Please select a funding range"),
  project_description: z.string().trim().min(50, "Please provide at least 50 characters").max(2000),
  timeline: z.string().optional(),
});

type AssessmentFormData = z.infer<typeof assessmentSchema>;

const GetStartedPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<AssessmentFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof AssessmentFormData, string>>>({});

  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to discuss your project goals, funding needs, and timeline expectations.",
      duration: "1-2 days"
    },
    {
      icon: FileSearch,
      title: "Project Assessment",
      description: "Comprehensive evaluation of your opportunity, including market analysis, risk assessment, and viability review.",
      duration: "5-7 days"
    },
    {
      icon: Shield,
      title: "Due Diligence",
      description: "Thorough verification of all parties, legal documentation, and compliance with international standards.",
      duration: "10-14 days"
    },
    {
      icon: TrendingUp,
      title: "Financial Structuring",
      description: "Customized financial solutions including bank guarantees, escrow services, and payment structures.",
      duration: "7-10 days"
    }
  ];

  const requiredDocuments = [
    "Valid government-issued ID or passport",
    "Company registration documents (if applicable)",
    "Project proposal or business plan",
    "Financial statements (last 2 years)",
    "Proof of mineral reserves or government project approval",
    "Legal ownership documentation",
  ];

  const qualificationCriteria = [
    "Legitimate business opportunity with verifiable documentation",
    "Minimum project value of $500,000 USD",
    "Clear legal ownership or government approval",
    "Realistic timeline and funding expectations",
    "Willingness to undergo comprehensive due diligence",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = assessmentSchema.parse(formData);
      
      const { error } = await supabase
        .from('project_assessments')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          phone: validatedData.phone || null,
          project_category: validatedData.project_category,
          funding_amount: validatedData.funding_amount,
          project_description: validatedData.project_description,
          timeline: validatedData.timeline || null,
        }]);

      if (error) throw error;

      toast({
        title: "Assessment Submitted Successfully!",
        description: "Our team will review your submission and contact you within 48 hours.",
      });

      setFormData({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof AssessmentFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof AssessmentFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly via WhatsApp.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AssessmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get Started with Your Investment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Begin your journey to secure, transparent African investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A transparent, step-by-step approach to secure your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Clock className="h-4 w-4" />
                  <span>{step.duration}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Total Timeline */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Total Timeline</h3>
            </div>
            <p className="text-3xl font-bold text-accent">4-6 Weeks</p>
            <p className="text-muted-foreground mt-2">From initial consultation to deal closure</p>
          </div>
        </div>
      </section>

      {/* Required Documents & Qualification */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <Card className="p-8 border-border bg-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Required Documentation</h3>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Qualification Criteria */}
            <Card className="p-8 border-border bg-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Qualification Criteria</h3>
              <ul className="space-y-4">
                {qualificationCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Assessment Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Submit Your Project for Assessment</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and our team will review your opportunity within 48 hours
              </p>
            </div>

            <Card className="p-8 border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name || ""}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
                      Company Name (Optional)
                    </label>
                    <Input
                      id="company"
                      value={formData.company || ""}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      value={formData.phone || ""}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project_category" className="block text-sm font-medium text-card-foreground mb-2">
                      Project Category *
                    </label>
                    <Select
                      value={formData.project_category}
                      onValueChange={(value) => handleInputChange("project_category", value)}
                    >
                      <SelectTrigger className={errors.project_category ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minerals">Minerals & Mining</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="energy">Energy & Solar</SelectItem>
                        <SelectItem value="agriculture">Agriculture</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.project_category && <p className="text-xs text-destructive mt-1">{errors.project_category}</p>}
                  </div>

                  <div>
                    <label htmlFor="funding_amount" className="block text-sm font-medium text-card-foreground mb-2">
                      Funding Amount Required *
                    </label>
                    <Select
                      value={formData.funding_amount}
                      onValueChange={(value) => handleInputChange("funding_amount", value)}
                    >
                      <SelectTrigger className={errors.funding_amount ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                        <SelectItem value="25m+">$25M+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.funding_amount && <p className="text-xs text-destructive mt-1">{errors.funding_amount}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-card-foreground mb-2">
                    Expected Timeline (Optional)
                  </label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => handleInputChange("timeline", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                      <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long">Long-term (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="project_description" className="block text-sm font-medium text-card-foreground mb-2">
                    Project Description * (minimum 50 characters)
                  </label>
                  <Textarea
                    id="project_description"
                    value={formData.project_description || ""}
                    onChange={(e) => handleInputChange("project_description", e.target.value)}
                    placeholder="Provide detailed information about your project, opportunity, current status, and specific requirements..."
                    rows={6}
                    className={errors.project_description ? "border-destructive" : ""}
                  />
                  {errors.project_description && <p className="text-xs text-destructive mt-1">{errors.project_description}</p>}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.project_description?.length || 0} / 2000 characters
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="success" 
                    size="lg" 
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Assessment Request"}
                  </Button>
                  <a 
                    href="https://wa.me/254208100092" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button type="button" variant="outline" size="lg" className="w-full">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStartedPage;
