import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Falmi <span className="gradient-text">Tesfaye</span>
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
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:falmi@example.com"
              className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Falmi Tesfaye. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> using Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
