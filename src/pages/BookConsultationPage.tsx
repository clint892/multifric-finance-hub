import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import teamCEO from "@/assets/team-ceo.jpg";
import teamCFO from "@/assets/team-cfo.jpg";
import teamDirector from "@/assets/team-director.jpg";
import teamLegal from "@/assets/team-legal.jpg";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  preferred_date: z.string().min(1, "Please select a date"),
  preferred_time: z.string().min(1, "Please select a time"),
  team_member: z.string().min(1, "Please select a team member"),
  deal_size: z.string().min(1, "Please select deal size"),
  message: z.string().trim().max(1000).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookConsultationPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const teamMembers = [
    {
      name: "Dr. Wycliffe Kamau",
      title: "CEO - International Finance Expert",
      image: teamCEO,
      expertise: "Best for: Large-scale mineral deals, infrastructure projects $25M+"
    },
    {
      name: "Grace Ochieng",
      title: "CFO - Risk Management Specialist",
      image: teamCFO,
      expertise: "Best for: Financial structuring, due diligence, escrow arrangements"
    },
    {
      name: "Michael Kamau",
      title: "Director of Operations",
      image: teamDirector,
      expertise: "Best for: Mineral trading, government projects, regulatory matters"
    },
    {
      name: "Amina Hassan",
      title: "Head of Legal & Compliance",
      image: teamLegal,
      expertise: "Best for: Legal structuring, compliance, cross-border transactions"
    }
  ];

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM"
  ];

  const consultationBenefits = [
    "Free 60-minute consultation with senior executive",
    "Preliminary assessment of your opportunity",
    "Estimated timeline and process overview",
    "Fee structure discussion",
    "Next steps and documentation requirements",
    "No obligation to proceed"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = bookingSchema.parse(formData);
      
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          phone: validatedData.phone || null,
          preferred_date: validatedData.preferred_date,
          preferred_time: validatedData.preferred_time,
          team_member: validatedData.team_member,
          deal_size: validatedData.deal_size,
          message: validatedData.message || null,
        }]);

      if (error) throw error;

      toast({
        title: "Consultation Booked Successfully!",
        description: "You'll receive a confirmation email within 24 hours with meeting details.",
      });

      setFormData({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof BookingFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Booking Failed",
          description: "Please try again or contact us directly via phone.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a free consultation with our senior executives to discuss your investment opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Selection */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Advisor</h2>
            <p className="text-muted-foreground">Select the team member best suited for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className={`p-6 border-2 cursor-pointer transition-all duration-300 ${
                  formData.team_member === member.name 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border bg-card hover:border-accent/50'
                }`}
                onClick={() => handleInputChange('team_member', member.name)}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-card-foreground text-center mb-2">{member.name}</h3>
                <p className="text-sm text-accent text-center mb-3">{member.title}</p>
                <p className="text-xs text-muted-foreground text-center">{member.expertise}</p>
              </Card>
            ))}
          </div>
          {errors.team_member && <p className="text-xs text-destructive mt-2 text-center">{errors.team_member}</p>}
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
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

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferred_date" className="block text-sm font-medium text-card-foreground mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      id="preferred_date"
                      type="date"
                      min={today}
                      value={formData.preferred_date || ""}
                      onChange={(e) => handleInputChange("preferred_date", e.target.value)}
                      className={errors.preferred_date ? "border-destructive" : ""}
                    />
                    {errors.preferred_date && <p className="text-xs text-destructive mt-1">{errors.preferred_date}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferred_time" className="block text-sm font-medium text-card-foreground mb-2">
                      Preferred Time (EAT) *
                    </label>
                    <Select
                      value={formData.preferred_time}
                      onValueChange={(value) => handleInputChange("preferred_time", value)}
                    >
                      <SelectTrigger className={errors.preferred_time ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferred_time && <p className="text-xs text-destructive mt-1">{errors.preferred_time}</p>}
                  </div>
                </div>

                {/* Deal Size */}
                <div>
                  <label htmlFor="deal_size" className="block text-sm font-medium text-card-foreground mb-2">
                    Estimated Deal Size *
                  </label>
                  <Select
                    value={formData.deal_size}
                    onValueChange={(value) => handleInputChange("deal_size", value)}
                  >
                    <SelectTrigger className={errors.deal_size ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select deal size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                      <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                      <SelectItem value="50m-100m">$50M - $100M</SelectItem>
                      <SelectItem value="100m+">$100M+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.deal_size && <p className="text-xs text-destructive mt-1">{errors.deal_size}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Brief Description (Optional)
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Brief overview of your opportunity or specific questions..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message?.length || 0} / 1000 characters
                  </p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="success" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Confirm Consultation Booking"}
                </Button>
              </form>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                You'll receive a confirmation email within 24 hours with video call link or in-person meeting details.
                <br />All consultations are confidential and covered by NDA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookConsultationPage;
