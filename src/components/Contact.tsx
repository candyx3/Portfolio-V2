import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.28);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
  };

  return (
    <section 
      id="contact" 
      ref={parallaxRef as any}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"
        style={{ transform: `translateY(${parallaxOffset * 0.35}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset * 0.2}px)` }}
      />
      <div 
        className="container mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.12}px)` }}
      >
        <div ref={titleRef as any} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Have a project in mind or need security consultation? Let's discuss how I can help secure your applications and infrastructure.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card ref={formRef as any} className={`p-10 hover-lift bg-gradient-to-br from-card to-muted/10 border border-primary/20 scroll-reveal ${formVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3"><Label htmlFor="name" className="text-base font-semibold">Name</Label><Input id="name" placeholder="Your name" required className="h-12 bg-muted/30 border-primary/20 focus:border-primary" /></div>
              <div className="space-y-3"><Label htmlFor="email" className="text-base font-semibold">Email</Label><Input id="email" type="email" placeholder="your-email@example.com" required className="h-12 bg-muted/30 border-primary/20 focus:border-primary" /></div>
              <div className="space-y-3"><Label htmlFor="message" className="text-base font-semibold">Message</Label><Textarea id="message" placeholder="Tell me about your project..." rows={5} required className="bg-muted/30 border-primary/20 focus:border-primary resize-none" /></div>
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform glow-primary" size="lg">Send Message</Button>
            </form>
          </Card>

          <div ref={infoRef as any} className={`space-y-6 scroll-reveal ${infoVisible ? 'visible' : ''}`}>
            <Card className="p-8 hover-lift bg-gradient-to-br from-card to-muted/10 border border-primary/20 hover:border-accent/50 transition-all group">
              <CardContent className="p-0 flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Mail className="w-7 h-7 text-primary" /></div>
                <div className="flex-1"><h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Email</h3><a href="mailto:chandrukb2005@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-base">chandrukb2005@gmail.com</a></div>
              </CardContent>
            </Card>
            <Card className="p-8 hover-lift bg-gradient-to-br from-card to-muted/10 border border-primary/20 hover:border-accent/50 transition-all group">
              <CardContent className="p-0 flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Phone className="w-7 h-7 text-primary" /></div>
                <div className="flex-1"><h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Phone</h3><a href="tel:9566324164" className="text-muted-foreground hover:text-accent transition-colors text-base">9566324164</a></div>
              </CardContent>
            </Card>
            <Card className="p-8 hover-lift bg-gradient-to-br from-card to-muted/10 border border-primary/20 hover:border-accent/50 transition-all group">
              <CardContent className="p-0 flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><MapPin className="w-7 h-7 text-primary" /></div>
                <div className="flex-1"><h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Location</h3><p className="text-muted-foreground text-base">India</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};