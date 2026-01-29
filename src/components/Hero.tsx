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
  Code,
  Sparkles,
  Zap,
} from "lucide-react";

// ADD THIS LINE ONLY
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow/Purple glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />

        {/* Yellow/Purple moving elements */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-yellow-500 rounded-full animate-bounce-slow" />
        <div
          className="absolute bottom-20 right-20 w-8 h-8 bg-purple-500 rounded-full animate-bounce-slow"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute top-32 right-32 w-4 h-4 bg-yellow-500 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Binary code rain effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400 font-mono text-xs animate-fall"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${10 + i}s`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in mt-8 lg:mt-0">
            {/* Attention-grabbing badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/40 animate-pulse">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">
                Available for Freelance Work
              </span>
            </div>

            {/* Name with attention effect */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="relative">
                <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                  Falmi
                </span>
                <span className="absolute -top-2 -right-2">
                  <Zap className="w-6 h-6 text-yellow-400 animate-spin-slow" />
                </span>
              </span>
              <br />
              <span className="text-white">Tesfaye</span>
            </h1>

            {/* Dynamic title - Mobile responsive */}
            <div className="mb-6 lg:mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg mb-3 border border-yellow-500/30">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  <span className="text-yellow-400">UI/UX Designer</span>
                  <span className="text-white mx-2">•</span>
                  <span className="text-white">Frontend Developer</span>
                </h2>
              </div>

              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  <span className="text-yellow-400">AI & ML</span>
                  <span className="text-white mx-2">•</span>
                  <span className="text-white">Developer</span>
                </h3>
              </div>
            </div>

            {/* Tagline - Short description for mobile */}
            <p className="text-white text-base md:text-lg mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="text-yellow-400 font-semibold">Designer</span> &{" "}
              <span className="text-purple-400 font-semibold">Developer</span>{" "}
              creating{" "}
              <span className="text-yellow-400 font-semibold">
                digital experiences
              </span>{" "}
              with{" "}
              <span className="text-purple-400 font-semibold">
                innovative solutions
              </span>
              .
            </p>

            {/* CTA Buttons - Responsive layout */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              >
                <a href={resumePDF} download="Falmi_Tesfaye_Resume.pdf">
                  <Download className="mr-2" />
                  Download CV
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 transition-all duration-300"
              >
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" />
                  View CV
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-yellow-400 transition-all duration-300"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Social Links - Updated hover colors for each platform */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {/* GitHub - Yellow */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20"
                title="GitHub"
              >
                <Github
                  size={20}
                  className="text-gray-300 group-hover:text-yellow-400"
                />
              </a>

              {/* LinkedIn - Purple */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                title="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="text-gray-300 group-hover:text-purple-400"
                />
              </a>

              {/* Instagram - Pink gradient (Instagram colors) */}
              <a
                href="https://instagram.com/felmiabdi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                title="Instagram"
              >
                <Instagram
                  size={20}
                  className="text-gray-300 group-hover:text-pink-400"
                />
              </a>

              {/* Facebook - Blue (Facebook brand color) */}
              <a
                href="https://web.facebook.com/profile.php?id=100070991113660"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                title="Facebook"
              >
                <Facebook
                  size={20}
                  className="text-gray-300 group-hover:text-blue-400"
                />
              </a>

              {/* YouTube - Red (YouTube brand color) */}
              <a
                href="https://youtube.com/fb.com/l/6lp1kJRRR"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
                title="YouTube"
              >
                <Youtube
                  size={20}
                  className="text-gray-300 group-hover:text-red-400"
                />
              </a>

              {/* Email - Purple */}
              <a
                href="mailto:falmitesfaye@gmail.com"
                className="group p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                title="Email"
              >
                <Mail
                  size={20}
                  className="text-gray-300 group-hover:text-purple-400"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Code Editor (Hidden on mobile) */}
          <div className="hidden lg:block relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Code editor container */}
              <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
                {/* Code editor header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-yellow-500/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-yellow-400 font-mono">
                      portfolio.tsx
                    </span>
                  </div>
                </div>

                {/* Code content */}
                <div className="relative aspect-video bg-gradient-to-br from-black to-gray-900">
                  {/* Animated code lines */}
                  <div className="absolute inset-0 p-6 font-mono text-sm">
                    <div className="text-green-400">
                      // Building digital experiences
                    </div>
                    <div className="text-blue-400 mt-4">
                      const developer = &#123;
                    </div>
                    <div className="text-yellow-400 ml-4">
                      name:{" "}
                      <span className="text-purple-400">"Falmi Tesfaye"</span>,
                    </div>
                    <div className="text-yellow-400 ml-4">
                      title:{" "}
                      <span className="text-purple-400">
                        "UI/UX Designer & Developer"
                      </span>
                      ,
                    </div>
                    <div className="text-yellow-400 ml-4">
                      skills:{" "}
                      <span className="text-purple-400">
                        ["React", "TypeScript", "AI/ML", "Figma"]
                      </span>
                      ,
                    </div>
                    <div className="text-yellow-400 ml-4">
                      mission:{" "}
                      <span className="text-purple-400">
                        "Create impactful digital solutions"
                      </span>
                    </div>
                    <div className="text-blue-400">&#125;;</div>

                    <div className="mt-6 text-gray-400">
                      <span className="text-yellow-400">console</span>.
                      <span className="text-blue-400">log</span>(
                      <span className="text-purple-400">
                        "Ready to build something amazing?"
                      </span>
                      );
                    </div>

                    {/* Animated cursor */}
                    <div className="inline-block w-2 h-5 bg-yellow-400 ml-1 animate-pulse"></div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-yellow-500/30">
                      <Code className="w-10 h-10 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around editor */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center animate-bounce-slow shadow-lg shadow-yellow-500/30">
                <Sparkles className="w-6 h-6 text-black" />
              </div>

              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center animate-bounce-slow shadow-lg shadow-purple-500/30"
                style={{ animationDelay: "0.5s" }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
