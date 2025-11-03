import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-foreground">
            MultiFric<span className="text-accent">Capital</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#focus" className="text-foreground/70 hover:text-foreground transition-colors">
              Investment Focus
            </a>
            <a href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors">
              Portfolio
            </a>
            <Button variant="default">Contact Us</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
