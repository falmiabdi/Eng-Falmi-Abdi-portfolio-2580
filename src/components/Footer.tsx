import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-yellow-400">Falmi</span> <span className="text-white">Tesfaye</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer & Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:falmi@example.com"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 group"
            >
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Falmi Tesfaye. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse-scale" /> using Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
