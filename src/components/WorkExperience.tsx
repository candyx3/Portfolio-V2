import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Penetration Tester",
    company: "Bugcrowd",
    type: "Part-time",
    duration: "Mar 2024 - Present",
    location: "Remote",
    skills: ["Vulnerability Assessment"],
    description: "Conducting in-depth penetration testing and vulnerability analysis on web applications and system components. Working closely with engineering teams to address identified issues and integrate effective security best practices.",
  },
  {
    title: "Penetration Tester",
    company: "HackerOne",
    type: "Part-time",
    duration: "Oct 2022 - Present",
    location: "Remote",
    skills: ["Vulnerability Assessment"],
    description: "Performing detailed security evaluations to uncover weaknesses across various applications and infrastructures. Partnering with development teams to provide remediation guidance and strengthen overall security posture.",
  },
];

export const WorkExperience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.18);

  return (
    <section 
      id="experience" 
      ref={parallaxRef as any}
      className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_75%_55%/0.08),transparent_50%)]"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
      />
      <div 
        className="container mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.25}px)` }}
      >
        <div ref={titleRef as any} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional journey in cybersecurity</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div ref={contentRef as any} className={`space-y-8 relative scroll-reveal ${contentVisible ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 md:p-10 hover-lift bg-gradient-to-br from-card to-muted/10 border-l-4 border-l-primary border border-primary/20 hover:border-accent/50 transition-all group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="flex items-center gap-3 text-primary">
                      <div className="p-2 bg-primary/10 rounded-lg"><Building className="w-5 h-5" /></div>
                      <span className="font-bold text-lg">{exp.company}</span>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 transition-all">{exp.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <span className="text-sm font-semibold text-accent">{}</span>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span className="font-medium">{exp.location}</span></div>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">{exp.description}</p>
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="bg-primary/20 text-primary border-2 border-primary/40 hover:bg-primary/30 px-4 py-1 font-medium transition-all">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};