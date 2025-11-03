import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2, FileText, Search, Shield, TrendingUp, Clock, Users, Award } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const projectAssessmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  project_category: z.string().min(1, "Please select a category"),
  funding_amount: z.string().min(1, "Please select funding amount"),
  project_description: z.string().trim().min(10, "Description must be at least 10 characters").max(2000),
  timeline: z.string().optional(),
});

const GetStartedPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project_category: "",
    funding_amount: "",
    project_description: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = projectAssessmentSchema.parse(formData);
      
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('project_assessments')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          phone: validatedData.phone || null,
          project_category: validatedData.project_category,
          funding_amount: validatedData.funding_amount,
          project_description: validatedData.project_description,
          timeline: validatedData.timeline || null,
        });
      
      if (error) throw error;
      
      toast({
        title: "Assessment Submitted Successfully!",
        description: "Our team will review your project and contact you within 2 business days.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        project_category: "",
        funding_amount: "",
        project_description: "",
        timeline: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      icon: FileText,
      title: "Initial Consultation",
      description: "Submit your project details through our assessment form. We review your opportunity and determine initial fit.",
      timeline: "24-48 hours"
    },
    {
      icon: Search,
      title: "Due Diligence",
      description: "Our team conducts comprehensive research on the project, partners, and financials to ensure legitimacy and viability.",
      timeline: "5-10 business days"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "We evaluate potential risks, verify documentation, and structure secure payment mechanisms to protect all parties.",
      timeline: "3-5 business days"
    },
    {
      icon: TrendingUp,
      title: "Financial Structuring",
      description: "We arrange bank guarantees, escrow services, and financial instruments tailored to your specific transaction needs.",
      timeline: "1-2 weeks"
    },
    {
      icon: CheckCircle2,
      title: "Implementation",
      description: "Execute the deal with full support, compliance monitoring, and ongoing advisory throughout the transaction lifecycle.",
      timeline: "Ongoing"
    }
  ];

  const trustIndicators = [
    { icon: Award, label: "98% Success Rate", value: "Successful deal closures" },
    { icon: Clock, label: "15-30 Days", value: "Average deal timeline" },
    { icon: Users, label: "50+ Projects", value: "Completed across Africa" },
    { icon: Shield, label: "Zero Fraud", value: "With our due diligence" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Start Your Investment Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A clear, secure pathway from opportunity identification to successful deal closure
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our 5-Step Process</h2>
            <p className="text-xl text-muted-foreground">Transparent, secure, and proven methodology</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {index + 1}. {step.title}
                      </h3>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <indicator.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{indicator.label}</div>
                <p className="text-muted-foreground">{indicator.value}</p>
              </div>
            ))}
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
                Tell us about your opportunity and receive a detailed evaluation within 48 hours
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      maxLength={255}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      maxLength={100}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Project Category *</Label>
                    <Select
                      value={formData.project_category}
                      onValueChange={(value) => setFormData({ ...formData, project_category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minerals">Minerals & Mining</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure Projects</SelectItem>
                        <SelectItem value="energy">Energy & Renewable</SelectItem>
                        <SelectItem value="agriculture">Agriculture & Agribusiness</SelectItem>
                        <SelectItem value="real-estate">Real Estate Development</SelectItem>
                        <SelectItem value="government">Government Contracts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="funding">Funding Amount Required *</Label>
                    <Select
                      value={formData.funding_amount}
                      onValueChange={(value) => setFormData({ ...formData, funding_amount: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                        <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                        <SelectItem value="over-50m">Over $50M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., 3-6 months, Urgent, Flexible"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.project_description}
                    onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={6}
                    placeholder="Please provide detailed information about your project, including location, current status, key stakeholders, and any unique aspects..."
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.project_description.length} / 2000 characters
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  variant="success"
                >
                  {isSubmitting ? "Submitting..." : "Submit Project Assessment"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our terms of service and privacy policy.
                  We'll contact you within 48 hours.
                </p>
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