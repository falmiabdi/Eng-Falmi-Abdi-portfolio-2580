import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#DesignShowcase", label: "Design" },
    { href: "#services", label: "Services" },
    { href: "#CompactTestimonials", label: "Testimonial" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-xl shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Falmi <span className="gradient-text">Tesfaye</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white/80 hover:text-primary transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full duration-300" />
              </a>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden  text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Black Background */}
      <div
        className={`md:hidden fixed inset-0 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => setIsOpen(false)}
        />

        {/* Black Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full bg-black border-l border-gray-800 shadow-2xl">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <a
                href="#home"
                className="text-2xl font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                Falmi <span className="gradient-text">Tesfaye</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block py-4 px-4 rounded-lg text-white/90 hover:text-primary hover:bg-gray-900 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-primary group-hover:text-primary transition-colors">
                      ▸
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </div>
                </a>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-800">
                <Button
                  variant="hero"
                  className="w-full py-3 text-base"
                  onClick={() => scrollToSection("#contact")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
