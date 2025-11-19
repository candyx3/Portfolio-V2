import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileCheck, Bug, Lock, Terminal, Crosshair } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description: "Identify and assess vulnerabilities in your web applications to enhance security posture.",
  },
  {
    icon: Crosshair,
    title: "Penetration Testing",
    description: "Simulate real-world attacks to test the security of your systems and applications thoroughly.",
  },
  {
    icon: FileCheck,
    title: "Security Audits",
    description: "Conduct comprehensive audits to ensure compliance with industry security standards.",
  },
  {
    icon: Bug,
    title: "Bug Bounty",
    description: "Hunt for security vulnerabilities in web applications through ethical bug bounty programs.",
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description: "Expert guidance on implementing robust security measures and best practices.",
  },
  {
    icon: Terminal,
    title: "Code Review",
    description: "In-depth analysis of source code to identify security flaws and vulnerabilities.",
  },
];

export const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.2);

  return (
    <section 
      id="services" 
      ref={parallaxRef as any}
      className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(270_80%_60%/0.08),transparent_50%)]"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div 
        className="container mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
      >
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div 
          ref={contentRef as any}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal ${contentVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift bg-gradient-to-br from-card via-card to-muted/20 border border-primary/20 hover:border-accent/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <CardHeader className="pb-6 relative z-10">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};