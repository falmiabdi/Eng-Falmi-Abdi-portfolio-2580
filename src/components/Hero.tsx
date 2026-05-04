import { Button } from "./ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
} from "lucide-react";

import resumePDF from "@/assets/Falmi_Tesfaye_Resume.pdf";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full mb-8 border border-white/10 animate-fade-in">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_var(--secondary)]" />
            <span className="text-sm font-medium text-white/80">
              Available for New Projects
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-white">Falmi </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text">
                Tesfaye
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Full-Stack Developer & UI/UX Designer crafting high-performance digital experiences.
            </p>
          </div>

          {/* Core CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              variant="primary"
              size="lg"
              className="px-8 h-14 text-lg"
            >
              <a href={resumePDF} download="Falmi_Tesfaye_Resume.pdf">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 h-14 text-lg bg-white/5 border-white/10 hover:bg-white/10"
              onClick={() => scrollToSection("#projects")}
            >
              View Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Social Connect */}
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {[
              { icon: Github, href: "https://github.com/falmiabdi", color: "hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/falmi-jabessa-31b820375", color: "hover:text-blue-400" },
              { icon: Instagram, href: "https://instagram.com/felmiabdi", color: "hover:text-pink-500" },
              { icon: Facebook, href: "https://web.facebook.com/profile.php?id=100070991113660", color: "hover:text-blue-600" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCePem2BOG1XBq2-OyGK1-Ug", color: "hover:text-red-500" },
              { icon: Mail, href: "mailto:falmitesfaye@gmail.com", color: "hover:text-secondary" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 transition-all duration-300 transform hover:scale-125 ${social.color}`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-white/60 animate-bounce" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;