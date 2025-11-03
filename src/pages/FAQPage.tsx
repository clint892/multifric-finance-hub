import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Multifric Capital provide?",
    answer: "We specialize in mineral investment facilitation, government project financing, bank guarantees, due diligence services, escrow/paymaster services, and investment advisory. Our focus is on bridging global capital with African opportunities while ensuring secure, transparent, and fraud-free transactions."
  },
  {
    question: "How do you protect clients from investment scams?",
    answer: "We employ rigorous due diligence processes including seller verification, asset authentication, legal compliance checks, and financial background analysis. Our escrow services ensure funds are only released when all conditions are met, and we maintain a network of verified partners to minimize risk."
  },
  {
    question: "What types of projects do you finance?",
    answer: "We facilitate financing for government infrastructure projects, mineral sector investments, and development projects across various sectors including energy, healthcare, transportation, and technology. Our team evaluates each project for viability and helps structure appropriate financing solutions."
  },
  {
    question: "How does your escrow service work?",
    answer: "Our escrow service acts as a neutral third party, holding funds securely until all transaction conditions are met. We verify milestones, documentation, and deliverables before releasing funds, ensuring both buyers and sellers are protected throughout the transaction process."
  },
  {
    question: "What are bank guarantees and why are they important?",
    answer: "Bank guarantees are financial instruments that ensure payment or performance obligations are met. They're crucial in high-value transactions as they provide security to both parties. We facilitate various types including performance guarantees, bid bonds, and advance payment guarantees."
  },
  {
    question: "Which countries do you operate in?",
    answer: "We are based in Nairobi, Kenya, and primarily operate across East Africa. However, we facilitate transactions and investments throughout the African continent and work with international investors from around the world."
  },
  {
    question: "How long does the due diligence process take?",
    answer: "The timeline varies depending on the complexity of the transaction and the information required. Typically, basic due diligence takes 2-4 weeks, while comprehensive evaluations for larger projects may take 4-8 weeks. We prioritize thoroughness while maintaining efficiency."
  },
  {
    question: "What are your fees for services?",
    answer: "Our fee structure varies based on the service type, transaction size, and complexity. We provide transparent pricing and detailed proposals after an initial consultation. Contact us directly for a customized quote based on your specific needs."
  },
  {
    question: "Do you work with both local and international clients?",
    answer: "Yes, we serve both local African businesses and international investors. Our expertise lies in bridging these two markets, facilitating secure transactions, and ensuring all parties benefit from transparent, well-structured deals."
  },
  {
    question: "How can I get started working with Multifric Capital?",
    answer: "Simply contact us via phone, email, or WhatsApp to schedule an initial consultation. We'll discuss your needs, explain our services, and outline how we can help you achieve your investment or financing goals securely and efficiently."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our services and how we can help you
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-card-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
