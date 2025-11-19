import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Chandru";
  const { ref: bgRef, offset: bgOffset } = useParallax(0.3);
  const { ref: contentRef, offset: contentOffset } = useParallax(0.5);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div 
        ref={bgRef as any}
        className="absolute inset-0"
        style={{ transform: `translateY(${bgOffset}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(340_85%_55%/0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/40 rounded-full blur-[120px] animate-pulse glow-accent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse glow-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse glow-primary" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef as any}
        className="relative z-10 container mx-auto px-4"
        style={{ transform: `translateY(${contentOffset * 0.2}px)` }}
      >
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full gradient-border backdrop-blur-sm">
            <span className="text-sm gradient-text font-medium">Available for Freelance Projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-muted-foreground">Hello, I'm </span>
            <span className="block mt-2 gradient-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-xl md:text-3xl font-bold">
            <span className="gradient-text">Web Pentester</span>
            <span className="text-foreground">•</span>
            <span className="gradient-text">Ethical Hacker</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Specialized in identifying vulnerabilities and securing web applications.
            Passionate about cybersecurity and helping organizations build robust defenses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 gradient-bg glow-primary hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 gradient-border hover:gradient-bg hover:scale-105 transition-all"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary glow-primary" />
      </a>
    </section>
  );
};