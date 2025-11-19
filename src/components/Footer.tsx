import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 glass-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl gradient-text mb-2">CHANDRU</h3>
            <p className="text-muted-foreground text-sm">
              Web Pentester & Ethical Hacker
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/candyx3" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center hover:gradient-bg transition-all hover:glow-primary"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/chandrukb/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center hover:gradient-bg transition-all hover:glow-secondary"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://x.com/Candy_x3_" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center hover:gradient-bg transition-all hover:glow-accent"
            >
              <Twitter className="w-5 h-5 text-accent" />
            </a>
            <a 
              href="mailto:chandrukb2005@gmail.com" 
              className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center hover:gradient-bg transition-all hover:glow-primary"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chandru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
