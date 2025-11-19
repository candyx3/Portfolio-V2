import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">CHANDRU</a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} className="text-muted-foreground hover:gradient-text transition-all font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:gradient-bg hover:after:w-full after:transition-all">{item.label}</a>
            ))}
            <Button onClick={() => handleNavClick('#contact')} className="gradient-bg glow-primary hover:scale-105 transition-transform font-bold px-6">Hire Me</Button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden gradient-text">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (<a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} className="block text-foreground hover:gradient-text transition-colors font-medium py-2">{item.label}</a>))}
            <Button onClick={() => handleNavClick('#contact')} className="w-full gradient-bg glow-primary">Hire Me</Button>
          </div>
        </div>
      )}
    </nav>
  );
};