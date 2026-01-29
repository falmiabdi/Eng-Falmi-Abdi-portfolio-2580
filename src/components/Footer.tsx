import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
  Code,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-5 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-yellow-400">Falmi</span>{" "}
              <span className="text-white">Tesfaye</span>
            </h3>
            <p className="text-gray-400 text-sm">
              UI/UX Designer • Frontend Developer • AI/ML junior
            </p>
          </div>

          {/* Social Links - All icons with yellow/purple theme */}
          <div className="flex gap-3 flex-wrap justify-center">
            {/* GitHub - Yellow */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20 group"
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
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
              title="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-gray-300 group-hover:text-purple-400"
              />
            </a>

            {/* Instagram - Purple */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
              title="Instagram"
            >
              <Instagram
                size={20}
                className="text-gray-300 group-hover:text-purple-400"
              />
            </a>

            {/* Facebook - Purple */}
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
              title="Facebook"
            >
              <Facebook
                size={20}
                className="text-gray-300 group-hover:text-purple-400"
              />
            </a>

            {/* YouTube - Yellow */}
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20 group"
              title="YouTube"
            >
              <Youtube
                size={20}
                className="text-gray-300 group-hover:text-yellow-400"
              />
            </a>

            {/* Email - Purple */}
            <a
              href="mailto:falmi@example.com"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
              title="Email"
            >
              <Mail
                size={20}
                className="text-gray-300 group-hover:text-purple-400"
              />
            </a>

            {/* Portfolio/External Link - Yellow */}
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20 group"
              title="Portfolio"
            >
              <ExternalLink
                size={20}
                className="text-gray-300 group-hover:text-yellow-400"
              />
            </a>

            {/* Code/Projects - Yellow */}
            <a
              href="https://github.com/yourusername?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20 group"
              title="Projects"
            >
              <Code
                size={20}
                className="text-gray-300 group-hover:text-yellow-400"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Falmi Tesfaye. Made with{" "}
            <Heart
              size={16}
              className="text-red-500 animate-pulse inline-block"
            />{" "}
            by <span className="text-yellow-400 font-semibold">Falmi</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            UI/UX Designer • Frontend Developer • AI/ML junior
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
