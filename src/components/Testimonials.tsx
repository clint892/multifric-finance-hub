import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MULTIFRIC CAPITAL's expertise in mineral investments is unparalleled. Their strategic guidance led to significant returns on our portfolio. Highly recommend their services for anyone looking into this sector.",
    name: "John D.",
    title: "CEO, GeoResources Inc."
  },
  {
    quote: "We secured crucial financing for our infrastructure project thanks to MULTIFRIC CAPITAL. Their team navigated complex government funding processes with ease and professionalism. A true partner in progress.",
    name: "Sarah L.",
    title: "Director of Operations, Urban Development Group"
  },
  {
    quote: "Our company's financial growth has been exponential since partnering with MULTIFRIC CAPITAL. Their tailored financial solutions and insightful market analysis have been invaluable. Exceptional service!",
    name: "Michael R.",
    title: "Founder, Tech Innovations Ltd."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Global Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about their experience partnering with MULTIFRIC CAPITAL LIMITED for secure investments and project financing across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card relative"
            >
              <Quote className="h-12 w-12 text-accent/20 absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
