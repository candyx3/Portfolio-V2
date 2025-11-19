import { Shield, Target, Award, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Shield, label: "Security Audits", value: "25+", color: "text-primary" },
  { icon: Target, label: "Vulnerabilities Found", value: "100+", color: "text-accent" },
  { icon: Award, label: "Certifications", value: "5+", color: "text-secondary" },
  { icon: Code, label: "Tools Mastered", value: "10+", color: "text-primary" },
];

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.15);

  return (
    <section 
      id="about" 
      ref={parallaxRef as any}
      className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative"
    >
      <div 
        className="container mx-auto"
        style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
      >
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div 
          ref={contentRef as any}
          className={`grid md:grid-cols-2 gap-16 items-center scroll-reveal ${contentVisible ? 'visible' : ''}`}
        >
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                I'm a passionate cybersecurity professional specializing in web application security
                and ethical hacking. With extensive experience in penetration testing and vulnerability
                assessment, I help organizations identify and fix security weaknesses before they can
                be exploited.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a deep understanding of both offensive
                and defensive security strategies. I stay current with the latest security trends and
                continuously expand my knowledge in emerging technologies.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="h-2 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
              <div className="h-2 w-20 bg-gradient-to-r from-accent to-secondary rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift bg-gradient-to-br from-card to-muted/20 border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <CardContent className="p-0 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};