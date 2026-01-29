import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Play,
  X,
  ChevronRight,
  Maximize2,
  Eye,
  Smartphone,
  Monitor,
  Database,
  Users,
  Briefcase,
  ChefHat,
  FlaskConical,
  Vote,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState<"mobile" | "desktop">("desktop");

  const projects = [
    {
      id: 1,
      title: "Job Portal System",
      description:
        "Full-featured job portal connecting companies with job seekers. Company dashboard for posting jobs, candidate dashboard for applications, and admin panel for management.",
      tags: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "AJAX",
        "Session Management",
      ],
      color: "from-blue-600 to-indigo-600",
      icon: <Briefcase className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://job-portal-yourusername.vercel.app",
      githubUrl: "https://github.com/yourusername/job-portal",
      features: [
        "Company & Candidate dashboards",
        "Job posting & management system",
        "Resume upload & application tracking",
        "Real-time job notifications",
        "Admin panel with user management",
        "Search & filter jobs by category",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "JS", "Bootstrap"],
    },
    {
      id: 2,
      title: "Restaurant Booking System",
      description:
        "Complete restaurant management platform with online table reservations, food ordering, and customer management system.",
      tags: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "REST API",
        "Payment Integration",
      ],
      color: "from-green-600 to-emerald-600",
      icon: <ChefHat className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://lensu-cafe-q16rbzn3z-falmiabdis-projects.vercel.app",
      githubUrl: "https://github.com/yourusername/restoran-booking",
      features: [
        "Online table booking system",
        "Food menu with categories & pricing",
        "Order management & tracking",
        "Customer reviews & ratings",
        "Admin dashboard for restaurant management",
        "Payment gateway integration",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      id: 3,
      title: "Student Union Election System",
      description:
        "Secure online voting platform for student union elections with real-time results and candidate management.",
      tags: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Chart.js",
        "Security",
        "Real-time Updates",
      ],
      color: "from-purple-600 to-pink-600",
      icon: <Vote className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://student-election-yourusername.vercel.app",
      githubUrl: "https://github.com/yourusername/student-election",
      features: [
        "Secure voter authentication system",
        "Candidate nomination & profile management",
        "Real-time vote counting & results",
        "Results visualization with charts",
        "Admin panel for election control",
        "Voter verification & audit trail",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "Chart.js", "Security"],
    },
    {
      id: 4,
      title: "Gas Management System",
      description:
        "Comprehensive gas cylinder distribution and inventory management system for suppliers and customers.",
      tags: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "PDF Generation",
        "Inventory",
        "Reports",
      ],
      color: "from-orange-600 to-red-600",
      icon: <FlaskConical className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://gas-management-yourusername.vercel.app",
      githubUrl: "https://github.com/yourusername/gas-management",
      features: [
        "Customer & supplier management",
        "Cylinder inventory tracking system",
        "Order processing & delivery tracking",
        "Automated billing & invoicing",
        "Sales reports & analytics dashboard",
        "PDF invoice generation",
      ],
      demoType: "interactive",
      status: "Ready for Vercel Deployment",
      techIcons: ["PHP", "MySQL", "Bootstrap", "PDF"],
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description:
        "Full online shopping platform with user authentication, product catalog, shopping cart, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
      color: "from-yellow-600 to-amber-600",
      icon: <Database className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      features: [
        "User authentication & authorization",
        "Product catalog with categories",
        "Shopping cart & wishlist",
        "Payment processing with Stripe",
        "Order tracking & history",
        "Admin product management",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 6,
      title: "Task Management App",
      description:
        "Real-time task management application with team collaboration features and progress tracking.",
      tags: ["JavaScript", "Firebase", "React", "WebSockets", "Bootstrap"],
      color: "from-teal-600 to-cyan-600",
      icon: <Users className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://taskmanager-demo.example.com",
      githubUrl: "https://github.com/username/task-management",
      features: [
        "Real-time task updates",
        "Team collaboration features",
        "Progress tracking & deadlines",
        "File attachments & comments",
        "User roles & permissions",
        "Notification system",
      ],
      demoType: "interactive",
      status: "Live Demo Available",
      techIcons: ["React", "Firebase", "WebSockets", "Bootstrap"],
    },
  ];

  const ProjectDemoModal = ({ project }: { project: any }) => {
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
                    • Ready for Vercel
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
                          <img
                            src={project.image}
                            alt={`${project.title} demo`}
                            className="w-full h-64 object-cover"
                          />
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
                        <img
                          src={project.image}
                          alt={`${project.title} demo`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-gray-300 text-sm mb-3">
                      {project.id <= 4
                        ? "This project is ready for deployment on Vercel. Click below for deployment instructions."
                        : "Interactive demo available at:"}
                    </p>
                    <a
                      href={
                        project.id <= 4
                          ? `#deploy-${project.id}`
                          : project.demoUrl
                      }
                      target={project.id <= 4 ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`block w-full py-2.5 rounded text-white font-medium text-sm text-center transition-all duration-300 ${
                        project.id <= 4
                          ? "bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800"
                          : "bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-orange-800 hover:to-yellow-700"
                      }`}
                    >
                      {project.id <= 4 ? (
                        <>
                          <ExternalLink className="w-4 h-4 inline mr-2" />
                          View Vercel Deployment Guide
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 inline mr-2" />
                          Launch Interactive Demo
                        </>
                      )}
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
                    View Source Code
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
    <section id="projects" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-3">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-yellow-400">My Real </span>
            <span className="text-white">Full-Stack Projects</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            4 complete PHP/MySQL applications ready for Vercel deployment + 2
            demo projects
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium">
            All Projects (6)
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium">
            PHP/MySQL (4)
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium">
            React/Node.js (2)
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium">
            Live Demos
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative">
              <Card className="bg-gray-900 overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 h-full hover:scale-[1.02]">
                {/* Project Header with Icon */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}
                  />

                  {/* Project Icon */}
                  <div
                    className={`absolute top-3 left-3 p-2 rounded-lg bg-gradient-to-r ${project.color} shadow-lg`}
                  >
                    {project.icon}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.id <= 4
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}
                    >
                      {project.id <= 4 ? "Ready for Vercel" : "Live Demo"}
                    </span>
                  </div>

                  {/* Demo Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                    <Button
                      onClick={() => setSelectedProject(project.id)}
                      size="sm"
                      className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg font-medium`}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      {project.id <= 4 ? "View Project" : "Try Demo"}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gray-800 hover:bg-gray-700 text-white shadow-lg font-medium"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {project.id <= 4
                          ? "Full-Stack PHP Application"
                          : "Demo Project"}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                      title="View Project Details"
                    >
                      <Eye className="w-4 h-4 text-blue-400" />
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Quick Features */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.features
                        .slice(0, 2)
                        .map((feature: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      {project.features.length > 2 && (
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            project.id <= 4
                              ? "bg-blue-600/20 text-blue-400"
                              : "bg-green-600/20 text-green-400"
                          }`}
                        >
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-800 text-gray-400 rounded-full text-xs border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-900 text-gray-500 rounded-full text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className={`w-full py-2.5 rounded-lg text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      project.id <= 4
                        ? "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                        : "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                    }`}
                  >
                    {project.id <= 4 ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        Deploy on Vercel
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Try Live Demo
                      </>
                    )}
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Demo Modal */}
        {selectedProject && (
          <ProjectDemoModal
            project={projects.find((p) => p.id === selectedProject)}
          />
        )}

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/10 p-4 rounded-xl border border-blue-800/30 text-center">
            <div className="text-3xl font-bold text-blue-400">4</div>
            <div className="text-gray-300 text-sm">PHP/MySQL Projects</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-green-600/10 p-4 rounded-xl border border-green-800/30 text-center">
            <div className="text-3xl font-bold text-green-400">6</div>
            <div className="text-gray-300 text-sm">React Projects</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 p-4 rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-400">10</div>
            <div className="text-gray-300 text-sm">Total Projects</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-600/10 p-4 rounded-xl border border-yellow-800/30 text-center">
            <div className="text-3xl font-bold text-yellow-400">100%</div>
            <div className="text-gray-300 text-sm">Vercel Ready</div>
          </div>
        </div>

        {/* Vercel Deployment Notice */}
        
      </div>
    </section>
  );
};

export default Projects;
