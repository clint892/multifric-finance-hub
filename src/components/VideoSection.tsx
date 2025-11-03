import { Card } from "@/components/ui/card";
import { Play, Building2, Users, TrendingUp } from "lucide-react";
import officeTour from "@/assets/office-tour.jpg";

export const VideoSection = () => {
  const videos = [
    {
      title: "CEO Message: Our Commitment to Transparency",
      description: "Dr. James Mwangi discusses our mission to eliminate fraud and facilitate secure African investments.",
      thumbnail: officeTour,
      duration: "3:45",
      icon: Users
    },
    {
      title: "Inside Our Operations",
      description: "Virtual tour of our Nairobi headquarters showcasing our due diligence and risk management processes.",
      thumbnail: officeTour,
      duration: "5:20",
      icon: Building2
    },
    {
      title: "How We Facilitate $100M+ Deals",
      description: "Step-by-step walkthrough of our comprehensive deal structuring and execution process.",
      thumbnail: officeTour,
      duration: "6:15",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            See Our Operations in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent insights into our processes, team, and commitment to secure transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border-border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 group-hover:bg-accent group-hover:text-white transition-colors rounded-full p-4">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <video.icon className="h-5 w-5 text-accent" />
                  <h3 className="font-bold text-card-foreground">{video.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All videos feature actual team members and real operations footage. No stock imagery or actors.
          </p>
        </div>
      </div>
    </section>
  );
};
