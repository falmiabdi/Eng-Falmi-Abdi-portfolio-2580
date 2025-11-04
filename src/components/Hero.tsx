import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-3xl animate-float pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl animate-pulse-scale" />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <div className="inline-block glass-card px-6 py-2 rounded-full mb-6 animate-fade-in-down">
            <p className="text-primary text-sm md:text-base font-medium">
              👋 Hello, I'm
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in">
            <span className="inline-block hover:scale-110 transition-transform duration-300 text-yellow-400">Falmi</span>{" "}
            <span className="inline-block hover:scale-110 transition-transform duration-300 text-white">Tesfaye</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 animate-fade-in">
            <span className="text-yellow-400">Full-Stack Developer</span> <span className="text-primary">&</span> <span className="text-white">Software Engineer</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Building innovative and impactful software solutions with expertise in modern web technologies.
            Passionate about creating seamless user experiences and robust backend systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:falmi@example.com"
              className="glass-card p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
