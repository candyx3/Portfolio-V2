import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "AthenyX",
    description: "Advanced Web Application Vulnerability Scanner with automated testing capabilities and comprehensive reporting.",
    tags: ["Python", "Security", "Automation"],
    link: "https://github.com/candyx3/athenyx",
  },
  {
    title: "Crynox",
    description: "Crynox is a next-generation cybersecurity startup built to protect, detect, and respond to modern cyber threats.",
    tags: ["Security", "Vulnerability Assessment"],
    link: "https://github.com/candyx3/crynox",
  },
  {
    title: "AthenXSS",
    description: "Cross-site scripting vulnerability detection and exploitation framework.",
    tags: ["Automation", "Security", "Web"],
    link: "https://github.com/candyx3/AthenXss",
  },
  
];

export const Work = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.25);

  return (
    <section 
      id="work" 
      ref={parallaxRef as any}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />
      <div 
        className="container mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.15}px)` }}
      >
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open-source security tools and personal projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div 
          ref={contentRef as any}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal ${contentVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-gradient-to-br from-card to-muted/10 border border-primary/20 hover:border-accent/50 overflow-hidden group transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 hover:border-primary/60 transition-all"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold group-hover:scale-105 transition-transform"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};