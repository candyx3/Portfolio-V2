import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "Burp Suite", level: 90 },
  { name: "Metasploit", level: 70 },
  { name: "Nmap", level: 80 },
  { name: "Ethical Hacking", level: 75 },
  { name: "Web Application Security", level: 85 },
  { name: "OWASP Top 10", level: 90 },
];

export const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.22);

  return (
    <section 
      id="skills" 
      ref={parallaxRef as any}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
        style={{ transform: `translateY(${parallaxOffset * 0.45}px)` }}
      />
      <div 
        className="container mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.18}px)` }}
      >
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My proficiency in various cybersecurity technologies and tools
          </p>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full mt-6" />
        </div>

        <div 
          ref={contentRef as any}
          className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto scroll-reveal ${contentVisible ? 'visible' : ''}`}
        >
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift glass-card gradient-border hover:glow-cyan transition-all group"
            >
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-foreground group-hover:gradient-text transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-2xl font-bold gradient-text">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 gradient-bg rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};