import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <CursorFollower />
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
