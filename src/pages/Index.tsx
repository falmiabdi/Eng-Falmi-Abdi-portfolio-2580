import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DesignShowcase from "@/components/DesignShowcase";
import CompactTestimonials from "@/components/CompactTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <DesignShowcase/>
        <Projects />
        <CompactTestimonials/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
