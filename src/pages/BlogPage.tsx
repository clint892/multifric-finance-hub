import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Navigating Mineral Investments in East Africa: A Complete Guide",
    excerpt: "Essential insights for international investors looking to enter the African mineral market safely and profitably.",
    date: "March 15, 2024",
    author: "Multifric Capital Team",
    category: "Investment Insights"
  },
  {
    title: "Understanding Bank Guarantees in African Trade",
    excerpt: "How bank guarantees facilitate secure transactions and protect both buyers and sellers in cross-border deals.",
    date: "March 10, 2024",
    author: "Multifric Capital Team",
    category: "Financial Services"
  },
  {
    title: "The Rise of Infrastructure Financing in East Africa",
    excerpt: "Exploring the growing opportunities in government-backed infrastructure projects across the region.",
    date: "March 5, 2024",
    author: "Multifric Capital Team",
    category: "Market Analysis"
  },
  {
    title: "Avoiding Investment Scams: Red Flags to Watch For",
    excerpt: "Critical warning signs that every investor should recognize when evaluating African investment opportunities.",
    date: "February 28, 2024",
    author: "Multifric Capital Team",
    category: "Risk Management"
  },
  {
    title: "Gold Trading in Africa: Opportunities and Challenges",
    excerpt: "A deep dive into the gold trading ecosystem and how to navigate it successfully with proper due diligence.",
    date: "February 20, 2024",
    author: "Multifric Capital Team",
    category: "Commodities"
  },
  {
    title: "The Role of Escrow Services in High-Value Transactions",
    excerpt: "Why escrow services are essential for protecting both parties in significant financial transactions.",
    date: "February 15, 2024",
    author: "Multifric Capital Team",
    category: "Financial Services"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Insights & Articles
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert perspectives on African investments, financial services, and market trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card cursor-pointer"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
};

export default BlogPage;
