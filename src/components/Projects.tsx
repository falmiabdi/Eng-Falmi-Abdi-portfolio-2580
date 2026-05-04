import { useState } from "react";

// Video Imports - REMOVED ALL
// import codeHeavenVideo from "@/assets/video/codeHeaven.mp4";
// import chellaVideo from "@/assets/video/chella Reward App.mp4";
// import lensuCafeVideo from "@/assets/video/lensu cafe .mp4";
// import kakuuVideo from "@/assets/video/kakuu  mammee dive  in and delivary.mp4";
// import famDictionaryVideo from "@/assets/video/Fam Dictionary.mp4";

// Project Image Imports
// Lensu Cafe (id: 1)
import lensuCafeHero from "@/assets/lensu_cafe/hero.png";
import lensuCafeMenu from "@/assets/lensu_cafe/menu.png";
import lensuCafeBooking from "@/assets/lensu_cafe/booking.png";

// Kakuu Mamme (id: 2)
import kakuuHero from "@/assets/kakuu mammee images show/herosection.jpg";
import kakuuAbout from "@/assets/kakuu mammee images show/about us.jpg";
import kakuuDashboard from "@/assets/kakuu mammee images show/dashboard.jpg";
import kakuuAdmin from "@/assets/kakuu mammee images show/admin dashboard.jpg";
import kakuuBooking from "@/assets/kakuu mammee images show/booking.jpg";
import kakuuMenu from "@/assets/kakuu mammee images show/menu.jpg";
import kakuuDashboard2 from "@/assets/kakuu mammee images show/dashboard (2).jpg";
import kakuuImages3 from "@/assets/kakuu mammee images show/images3.jpg";

// Student Union Vote (id: 3)
import studentVoteImg from "@/assets/Design/photo_2026-01-20_13-43-04.jpg";

// CodeHeaven (id: 4)
import codeHeavenHero from "@/assets/codeHeaven images/hero image.jpg";
import codeHeavenImg2 from "@/assets/codeHeaven images/img2.jpg";
import codeHeavenImg3 from "@/assets/codeHeaven images/imag3.jpg";
import codeHeavenImg4 from "@/assets/codeHeaven images/img4.jpg";

// Weather+Route (id: 5)
import weather1 from "@/assets/weatherapp Design photoApp/weather1.jpg";
import weather2 from "@/assets/weatherapp Design photoApp/weather2.jpg";
import weather3 from "@/assets/weatherapp Design photoApp/weather3.jpg";
import weather5 from "@/assets/weatherapp Design photoApp/weather5.jpg";
import weather6 from "@/assets/weatherapp Design photoApp/weather6.jpg";

// Chella Gram (id: 6)
import chellaHero from "@/assets/chella images/hero images (1).jpg";
import chellaHero2 from "@/assets/chella images/hero images (2).jpg";
import chellaDashboard from "@/assets/chella images/dashboard.jpg";

// FamDictionary (id: 7)
import famDictImg from "@/assets/Design/photo_2026-01-20_13-42-58.jpg";

// HireHub (id: 8)
import hireHubHero from "@/assets/HireHub Deisgn photo screenshot/img1 Hero.jpg";
import hireHubDashboard1 from "@/assets/HireHub Deisgn photo screenshot/dashboard1.jpg";
import hireHubDashboard2 from "@/assets/HireHub Deisgn photo screenshot/dashboard2.jpg";
import hireHubDashboard3 from "@/assets/HireHub Deisgn photo screenshot/dashboard3.jpg";
import hireHubImg2 from "@/assets/HireHub Deisgn photo screenshot/img2.jpg";
import hireHubImg3 from "@/assets/HireHub Deisgn photo screenshot/img3.jpg";
import hireHubImg4 from "@/assets/HireHub Deisgn photo screenshot/img4.jpg";
import hireHubImg5 from "@/assets/HireHub Deisgn photo screenshot/img5.jpg";

// Additional Assets
import sonsaCeo from "@/assets/SonsaCeo.png";
import youtubers from "@/assets/youtubers.png";
import falmiDesigner from "@/assets/Falmi Designer.png";
import developerPhoto from "@/assets/developer-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import servicesIcon from "@/assets/services-icon.png";

import { Card } from "./ui/card";
import {
  ExternalLink,
  Github,
  Play,
  X,
  ChevronRight,
  Monitor,
  Smartphone,
  ChefHat,
  Vote,
  Database,
  Cloud,
  Building2,
  MessageSquare,
  Briefcase,
  Image as ImageIcon,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState<"mobile" | "desktop">("desktop");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Lensu Cafe",
      description:
        "Modern restaurant booking and ordering system with online reservations, menu management, and customer dashboard.",
      tags: ["PHP", "MySQL", "Bootstrap", "jQuery", "REST API"],
      color: "from-purple-600 to-purple-800",
      icon: <ChefHat className="w-5 h-5" />,
      image: lensuCafeHero,
      thumbnail: lensuCafeHero,
      screenshots: [lensuCafeHero, lensuCafeMenu, lensuCafeBooking],
      demoUrl: "https://lensu-cafe-q16rbzn3z-falmiabdis-projects.vercel.app",
      githubUrl: "https://github.com/yourusername/lensu-cafe",
      features: [
        "Online table booking system",
        "Digital menu with categories",
        "Order tracking and management",
        "Customer reviews and ratings",
        "Admin dashboard for management",
        "Payment integration",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "Bootstrap"],
      hasVideo: false,
    },
    {
      id: 2,
      title: "Kakuu Mamme",
      description:
        "Full-featured food delivery platform with restaurant partnerships, real-time order tracking, and delivery management.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Payment Integration"],
      color: "from-yellow-500 to-yellow-600",
      icon: <ChefHat className="w-5 h-5" />,
      image: kakuuHero,
      thumbnail: kakuuHero,
      screenshots: [kakuuHero, kakuuAbout, kakuuDashboard, kakuuAdmin, kakuuBooking, kakuuMenu, kakuuDashboard2, kakuuImages3],
      demoUrl: "https://kakuu-mamme-yourusername.vercel.app",
      githubUrl: "https://github.com/yourusername/kakuu-mamme",
      features: [
        "Restaurant partner dashboard",
        "Customer ordering interface",
        "Real-time delivery tracking",
        "Multiple payment options",
        "Order history and favorites",
        "Admin management panel",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "JavaScript"],
      hasVideo: false,
    },
    {
      id: 3,
      title: "Student Union Vote",
      description:
        "Secure online voting platform for student union elections with candidate management, real-time results, and audit trail.",
      tags: ["PHP", "MySQL", "Chart.js", "Security", "Real-time Updates"],
      color: "from-purple-600 to-purple-800",
      icon: <Vote className="w-5 h-5" />,
      image: studentVoteImg,
      thumbnail: studentVoteImg,
      screenshots: [studentVoteImg],
      demoUrl: "https://student-union-vote-yourusername.vercel.app",
      githubUrl: "https://github.com/yourusername/student-union-vote",
      features: [
        "Secure voter authentication",
        "Candidate profile management",
        "Real-time vote counting",
        "Results visualization charts",
        "Admin election control panel",
        "Audit trail and verification",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "Chart.js"],
      hasVideo: false,
    },
    {
      id: 4,
      title: "CodeHeaven",
      description:
        "Developer community platform with code sharing, tutorials, and collaboration tools for programmers.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Code Editor"],
      color: "from-yellow-500 to-yellow-600",
      icon: <Database className="w-5 h-5" />,
      image: codeHeavenHero,
      thumbnail: codeHeavenHero,
      screenshots: [codeHeavenHero, codeHeavenImg2, codeHeavenImg3, codeHeavenImg4],
      demoUrl: "https://faji-tech-vision-academy-ki2s.vercel.app",
      githubUrl: "https://github.com/yourusername/codeheaven",
      features: [
        "Code snippet sharing",
        "Tutorial publishing system",
        "Developer community forums",
        "Syntax highlighting editor",
        "Project collaboration tools",
        "Knowledge base library",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "JavaScript"],
      hasVideo: false,
    },
    {
      id: 5,
      title: "Weather+Route",
      description:
        "Integrated weather forecasting and route planning application with real-time conditions and navigation.",
      tags: ["React", "TypeScript", "API Integration", "Maps", "Tailwind CSS"],
      color: "from-purple-600 to-purple-800",
      icon: <Cloud className="w-5 h-5" />,
      image: weather1,
      thumbnail: weather1,
      screenshots: [weather1, weather2, weather3, weather5, weather6],
      demoUrl: "https://weather-route-demo.example.com",
      githubUrl: "https://github.com/falmiabdi/EthioWeatherApp",
      features: [
        "Real-time weather data",
        "Route optimization",
        "Location-based forecasts",
        "Interactive weather maps",
        "Severe weather alerts",
        "Multi-city support",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React", "TypeScript", "API"],
      hasVideo: false,
    },
    {
      id: 6,
      title: "Chella Gram",
      description:
        "Community platform for local neighborhoods with event management, announcements, and community discussions.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      color: "from-yellow-500 to-yellow-600",
      icon: <Building2 className="w-5 h-5" />,
      image: chellaHero,
      thumbnail: chellaHero,
      screenshots: [chellaHero, chellaHero2, chellaDashboard],
      demoUrl: "https://chella-gram.vercel.app/",
      githubUrl: "https://github.com/falmiabdi/Chella-Gram",
      features: [
        "Community event scheduling",
        "Local announcements board",
        "Neighborhood discussions",
        "Resource sharing system",
        "Volunteer coordination",
        "Local business directory",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React", "Node.js", "MongoDB"],
      hasVideo: false,
    },
    {
      id: 7,
      title: "FamDictionary",
      description:
        "Multilingual family dictionary and language learning app with audio pronunciations, flashcards, and progress tracking.",
      tags: ["React Native", "Firebase", "Expo", "Audio API", "Redux"],
      color: "from-purple-600 to-purple-800",
      icon: <MessageSquare className="w-5 h-5" />,
      image: famDictImg,
      thumbnail: famDictImg,
      screenshots: [famDictImg],
      demoUrl: "https://famdictionary-demo.example.com",
      githubUrl: "https://github.com/falmiabdi/FamDictionary",
      features: [
        "Multi-language support",
        "Audio pronunciations",
        "Flashcard learning system",
        "Progress tracking and streaks",
        "Offline dictionary access",
        "Family sharing features",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React Native", "Firebase", "Expo"],
      hasVideo: false,
    },
    {
      id: 8,
      title: "HireHub",
      description:
        "Modern job marketplace connecting employers with qualified candidates featuring AI-powered matching and interview scheduling.",
      tags: ["React", "Node.js", "PostgreSQL", "AI/ML", "Stripe"],
      color: "from-yellow-500 to-yellow-600",
      icon: <Briefcase className="w-5 h-5" />,
      image: hireHubHero,
      thumbnail: hireHubHero,
      screenshots: [hireHubHero, hireHubDashboard1, hireHubDashboard2, hireHubDashboard3, hireHubImg2, hireHubImg3, hireHubImg4, hireHubImg5],
      demoUrl: "https://hirehub-demo.example.com",
      githubUrl: "https://github.com/falmiabdi/HireHub",
      features: [
        "AI job-candidate matching",
        "Interview scheduling system",
        "Resume parsing and analysis",
        "Company branding pages",
        "Applicant tracking system",
        "Secure payment processing",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React", "Node.js", "PostgreSQL"],
      hasVideo: false,
    },
  ];

  const ProjectDemoModal = ({ project }: { project: any }) => {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

    return (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-3">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${
                      project.id <= 4
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-gray-400 text-sm">
                    • {project.hasVideo ? "Has Demo Video" : "Screenshots Available"}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Demo Navigation */}
          <div className="flex items-center p-3 bg-gray-900/80 border-b border-gray-800 gap-2">
            <button
              onClick={() => setActiveDemo("desktop")}
              className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-all ${
                activeDemo === "desktop"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop View
            </button>
            <button
              onClick={() => setActiveDemo("mobile")}
              className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-all ${
                activeDemo === "mobile"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile View
            </button>

            <div className="flex-1"></div>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-700 hover:from-yellow-600 hover:to-orange-800 text-white flex items-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              {project.id <= 4 ? "Deploy on Vercel" : "Open Live Demo"}
            </a>
          </div>

          {/* Demo Content */}
          <div className="p-4 overflow-auto max-h-[calc(90vh-140px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Demo Preview */}
              <div className="space-y-4">
                <div className="relative">
                  <div
                    className={`relative ${activeDemo === "mobile" ? "max-w-xs mx-auto" : "w-full"}`}
                  >
                    {activeDemo === "mobile" ? (
                      <div className="border-4 border-gray-800 rounded-3xl p-2 bg-black shadow-2xl">
                        <div className="bg-gray-900 h-6 rounded-t-lg flex items-center justify-center">
                          <div className="w-12 h-1 bg-gray-700 rounded"></div>
                        </div>
                        <div className="rounded-xl overflow-hidden mt-1">
                          {/* Always show screenshots - no video conditional */}
                          <div className="relative">
                            <img
                              src={project.screenshots[currentScreenshotIndex] || project.image}
                              alt={`${project.title} screenshot ${currentScreenshotIndex + 1}`}
                              className="w-full h-64 object-cover"
                            />
                            {project.screenshots.length > 1 && (
                              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                                <button
                                  onClick={() => setCurrentScreenshotIndex(prev => 
                                    prev === 0 ? project.screenshots.length - 1 : prev - 1
                                  )}
                                  className="px-2 py-1 bg-black/50 rounded text-white text-xs"
                                >
                                  Previous
                                </button>
                                <span className="px-2 py-1 bg-black/50 rounded text-white text-xs">
                                  {currentScreenshotIndex + 1} / {project.screenshots.length}
                                </span>
                                <button
                                  onClick={() => setCurrentScreenshotIndex(prev => 
                                    prev === project.screenshots.length - 1 ? 0 : prev + 1
                                  )}
                                  className="px-2 py-1 bg-black/50 rounded text-white text-xs"
                                >
                                  Next
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="border border-gray-700 rounded-lg overflow-hidden shadow-xl">
                        <div className="bg-gray-800 h-6 flex items-center px-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        {/* Always show screenshots - no video conditional */}
                        <div className="relative">
                          <img
                            src={project.screenshots[currentScreenshotIndex] || project.image}
                            alt={`${project.title} screenshot ${currentScreenshotIndex + 1}`}
                            className="w-full h-80 object-cover"
                          />
                          {project.screenshots.length > 1 && (
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                              <button
                                onClick={() => setCurrentScreenshotIndex(prev => 
                                  prev === 0 ? project.screenshots.length - 1 : prev - 1
                                )}
                                className="px-2 py-1 bg-black/50 rounded text-white text-xs hover:bg-black/70"
                              >
                                ◀
                              </button>
                              <span className="px-2 py-1 bg-black/50 rounded text-white text-xs">
                                {currentScreenshotIndex + 1} / {project.screenshots.length}
                              </span>
                              <button
                                onClick={() => setCurrentScreenshotIndex(prev => 
                                  prev === project.screenshots.length - 1 ? 0 : prev + 1
                                )}
                                className="px-2 py-1 bg-black/50 rounded text-white text-xs hover:bg-black/70"
                              >
                                ▶
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-gray-300 text-sm mb-3">
                      📸 Browse through screenshots above to see project features.
                    </p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 rounded bg-gray-700 hover:bg-gray-600 text-white font-medium text-sm text-center transition-all duration-300"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      View Source Code on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Features & Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Project Description
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-xs border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 rounded-lg text-white flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                      project.id <= 4
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.id <= 4 ? "Deploy Project" : "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-yellow-400">My Real </span>
            <span className="text-white">Full-Stack Projects</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            4 complete PHP/MySQL applications ready for Vercel deployment + 4
            React/Node.js projects with screenshots and demos
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium">
            All Projects (8)
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium">
            PHP/MySQL (4)
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium">
            React/Node.js (4)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => {
            const isDeployed = [1, 4, 6].includes(project.id);
            const isHovered = hoveredProject === project.id;
            
            return (
              <Card
                key={project.id}
                className="bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 h-full hover:scale-[1.02] flex flex-col min-h-[320px] cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Thumbnail Image with hover animation */}
                <div className="relative h-32 md:h-36 overflow-hidden group">
                  <img
                    src={project.thumbnail || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover overlay with image icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="animate-bounce">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  {/* Tech stack mini badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gray-800 rounded text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center gap-2 text-xs font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {isDeployed && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white flex items-center justify-center gap-2 text-xs font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {!isDeployed && (
                      <button
                        className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-center gap-2 text-xs font-medium transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project.id);
                        }}
                      >
                        <Play className="w-4 h-4" />
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Demo Modal */}
        {selectedProject && (
          <ProjectDemoModal
            project={projects.find((p) => p.id === selectedProject)}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;