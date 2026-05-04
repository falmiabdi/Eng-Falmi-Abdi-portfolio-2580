import React, { useState, useEffect, useRef } from "react";
import {
  Palette,
  Globe,
  Code,
  Cpu,
  CheckCircle,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Figma,
  Terminal,
  GitBranch,
  Bot,
  Brain,
  LineChart,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      icon: <Palette />,
      features: ["User Research", "Wireframing", "Design Systems", "Usability Testing", "Prototyping", "User Flows"],
      color: "#8B5CF6",
      shortDesc: "Intuitive interfaces",
      fullDesc: "Creating beautiful, user-friendly interfaces with modern design principles and user-centered approach.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      id: 2,
      title: "Web Design",
      icon: <Globe />,
      features: ["Responsive Design", "Fast Loading", "SEO Optimization", "Brand Identity", "Cross-Browser", "Accessibility"],
      color: "#3B82F6",
      shortDesc: "Modern websites",
      fullDesc: "Designing responsive websites that work perfectly on all devices and reflect your brand identity.",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      id: 3,
      title: "Web Development",
      icon: <Code />,
      features: ["React/Next.js", "RESTful APIs", "Database Design", "Cloud Deployment", "Performance", "Security"],
      color: "#10B981",
      shortDesc: "Web applications",
      fullDesc: "Building robust, scalable web applications using modern technologies and best practices.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    },
    {
      id: 4,
      title: "ML & AI",
      icon: <Cpu />,
      features: ["Model Training", "Data Processing", "Algorithm Design", "Neural Networks", "Predictive Analytics", "NLP"],
      color: "#EC4899",
      shortDesc: "AI solutions",
      fullDesc: "Developing intelligent machine learning models and AI solutions for data-driven decision making.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      id: 5,
      title: "Mobile Development",
      icon: <Smartphone />,
      features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Push Notifications", "Offline Sync", "Biometric Auth"],
      color: "#F59E0B",
      shortDesc: "Mobile apps",
      fullDesc: "Creating high-performance mobile applications for iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: 6,
      title: "Cloud Services",
      icon: <Cloud />,
      features: ["Cloud Migration", "Serverless Architecture", "DevOps", "Scalability", "Monitoring", "Backup & Recovery"],
      color: "#06B6D4",
      shortDesc: "Cloud solutions",
      fullDesc: "Leveraging cloud platforms for scalable, reliable, and cost-effective infrastructure.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
    {
      id: 7,
      title: "Database Management",
      icon: <Database />,
      features: ["Database Design", "Query Optimization", "Data Migration", "Backup Strategy", "Performance Tuning", "Security"],
      color: "#EF4444",
      shortDesc: "Data solutions",
      fullDesc: "Designing and managing efficient database systems for optimal data storage and retrieval.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      id: 8,
      title: "Cybersecurity",
      icon: <Shield />,
      features: ["Security Audits", "Penetration Testing", "Encryption", "Authentication", "Compliance", "Risk Assessment"],
      color: "#DC2626",
      shortDesc: "Security solutions",
      fullDesc: "Protecting your digital assets with comprehensive security measures and best practices.",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Firebase Auth"],
    },
  ];

  // Handle touch gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto rotation
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, services.length]);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setIsExpanded(true);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-black text-white relative">
      {/* Global Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          html {
            -webkit-tap-highlight-color: transparent;
          }

          button,
          [role="button"] {
            touch-action: manipulation;
          }
        }
      `}</style>

      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            My Services
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-lg bg-gray-900 transition-all hover:scale-105"
              style={{ border: `1px solid ${services[activeIndex].color}30` }}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg bg-gray-900 transition-all hover:scale-105"
              style={{ border: `1px solid ${services[activeIndex].color}30` }}
            >
              {isExpanded ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Main Content */}
      <div
        className="p-4 md:hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe Hint for Mobile */}
        <div className="text-center mb-3">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <span>Swipe left/right to navigate</span>
            <ChevronLeft className="w-3 h-3" />
            <ChevronRight className="w-3 h-3" />
          </p>
        </div>

        {/* Mobile Grid - 2 columns */}
        {!isExpanded && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`relative rounded-xl p-3 transition-all duration-200 cursor-pointer ${
                  index === activeIndex ? "scale-95" : "active:scale-95"
                }`}
                style={{
                  background:
                    index === activeIndex
                      ? `linear-gradient(135deg, ${service.color}15, rgba(0,0,0,0.95))`
                      : "rgba(30, 30, 30, 0.9)",
                  border: `1px solid ${index === activeIndex ? service.color : "#374151"}`,
                  boxShadow:
                    index === activeIndex
                      ? `0 0 15px ${service.color}30`
                      : "none",
                }}
              >
                {/* Service Icon & Title */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-6 h-6",
                      style: { color: service.color },
                    })}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-1">{service.shortDesc}</p>
                </div>

                {/* Active Indicator */}
                {index === activeIndex && (
                  <div className="absolute -top-1 -right-1">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{
                        backgroundColor: service.color,
                        boxShadow: `0 0 5px ${service.color}`,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Expanded Mobile View */}
        {isExpanded && (
          <div className="mb-4">
            <div
              className="rounded-xl p-4 mb-4"
              style={{
                background: `linear-gradient(135deg, ${services[activeIndex].color}15, rgba(0,0,0,0.95))`,
                border: `2px solid ${services[activeIndex].color}`,
              }}
            >
              {/* Selected Service Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center animate-float"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeIndex].color}30, ${services[activeIndex].color}10)`,
                  }}
                >
                  {React.cloneElement(services[activeIndex].icon, {
                    className: "w-7 h-7",
                    style: { color: services[activeIndex].color },
                  })}
                </div>
                <div className="flex-1">
                  <h2
                    className="text-lg font-bold"
                    style={{ color: services[activeIndex].color }}
                  >
                    {services[activeIndex].title}
                  </h2>
                  <p className="text-xs text-gray-300 mt-1">
                    {services[activeIndex].fullDesc}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {services[activeIndex].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg flex items-center"
                      style={{
                        background: `linear-gradient(90deg, ${services[activeIndex].color}10, transparent)`,
                        border: `1px solid ${services[activeIndex].color}20`,
                      }}
                    >
                      <CheckCircle
                        className="w-3 h-3 mr-2 flex-shrink-0"
                        style={{ color: services[activeIndex].color }}
                      />
                      <span className="text-xs text-gray-200 line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {services[activeIndex].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-lg text-xs"
                      style={{
                        background: `${services[activeIndex].color}20`,
                        border: `1px solid ${services[activeIndex].color}30`,
                        color: services[activeIndex].color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Selector Carousel */}
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-hide">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all ${
                    index === activeIndex ? "scale-105" : ""
                  }`}
                  style={{
                    background:
                      index === activeIndex
                        ? `linear-gradient(135deg, ${service.color}30, ${service.color}10)`
                        : "rgba(30, 30, 30, 0.9)",
                    border: `1px solid ${index === activeIndex ? service.color : "#374151"}`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center"
                      style={{
                        background:
                          index === activeIndex
                            ? service.color + "40"
                            : service.color + "20",
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        className: "w-3 h-3",
                        style: { color: service.color },
                      })}
                    </div>
                    <span className="text-xs font-medium whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full active:scale-95 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${services[activeIndex].color}20, transparent)`,
              border: `1px solid ${services[activeIndex].color}30`,
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "scale-150" : ""
                }`}
                style={{
                  backgroundColor:
                    index === activeIndex
                      ? service.color
                      : service.color + "80",
                }}
              ></button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 rounded-full active:scale-95 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${services[activeIndex].color}20, transparent)`,
              border: `1px solid ${services[activeIndex].color}30`,
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="text-center">
          <button
            className="w-full py-3 rounded-xl font-semibold mb-2 active:scale-95 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${services[activeIndex].color}, ${services[(activeIndex + 1) % services.length].color})`,
              boxShadow: `0 0 20px ${services[activeIndex].color}40`,
            }}
          >
            Get {services[activeIndex].title} Services
          </button>
          <p className="text-xs text-gray-500">Tap to start your project</p>
        </div>
      </div>

      {/* Tablet View (768px - 1023px) */}
      <div className="hidden md:block lg:hidden">
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              My Professional Services
            </h1>
            <p className="text-gray-400">Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`rounded-xl p-4 transition-all cursor-pointer hover:scale-105 ${
                  index === activeIndex ? "scale-105" : ""
                }`}
                style={{
                  background:
                    index === activeIndex
                      ? `linear-gradient(135deg, ${service.color}15, rgba(0,0,0,0.95))`
                      : "rgba(30, 30, 30, 0.9)",
                  border: `2px solid ${index === activeIndex ? service.color : "#374151"}`,
                  boxShadow: index === activeIndex ? `0 0 20px ${service.color}30` : "none",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center animate-float"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-6 h-6",
                      style: { color: service.color },
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1" style={{ color: service.color }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">{service.fullDesc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle
                            className="w-3 h-3 mr-2"
                            style={{ color: service.color }}
                          />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Controls */}
          <div className="flex justify-center items-center gap-8">
            <button
              onClick={toggleAutoPlay}
              className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${services[activeIndex].color}20, transparent)`,
                border: `2px solid ${services[activeIndex].color}`,
              }}
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
              {isAutoPlaying ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View (1024px+) */}
      <div className="hidden lg:block">
        <div className="p-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              My Professional Services
            </h1>
            <p className="text-gray-400 text-lg">Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index === activeIndex
                    ? "ring-2 ring-offset-2 ring-offset-black"
                    : ""
                }`}
                style={{
                  background:
                    index === activeIndex
                      ? `linear-gradient(135deg, ${service.color}15, rgba(0,0,0,0.95))`
                      : "rgba(30, 30, 30, 0.9)",
                  border: `2px solid ${index === activeIndex ? service.color : "#374151"}`,
                  boxShadow:
                    index === activeIndex
                      ? `0 0 30px ${service.color}30`
                      : "none",
                }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-10 h-10",
                      style: { color: service.color },
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{service.shortDesc}</p>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <CheckCircle
                          className="w-4 h-4 mr-2"
                          style={{ color: service.color }}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Expanded View */}
          {isExpanded && (
            <div className="mt-8 p-6 rounded-2xl" style={{
              background: `linear-gradient(135deg, ${services[activeIndex].color}10, rgba(0,0,0,0.8))`,
              border: `2px solid ${services[activeIndex].color}`,
            }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: services[activeIndex].color }}>
                    {services[activeIndex].title} Details
                  </h3>
                  <p className="text-gray-300 mb-4">{services[activeIndex].fullDesc}</p>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {services[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" style={{ color: services[activeIndex].color }} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {services[activeIndex].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-sm"
                        style={{
                          background: `${services[activeIndex].color}20`,
                          border: `1px solid ${services[activeIndex].color}30`,
                          color: services[activeIndex].color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${services[activeIndex].color}, ${services[(activeIndex + 1) % services.length].color})`,
                      boxShadow: `0 0 20px ${services[activeIndex].color}40`,
                    }}
                  >
                    Get {services[activeIndex].title} Services
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Controls */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={toggleAutoPlay}
              className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${services[activeIndex].color}20, transparent)`,
                border: `2px solid ${services[activeIndex].color}`,
              }}
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
              {isAutoPlaying ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
            </button>
            
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${services[activeIndex].color}, ${services[(activeIndex + 1) % services.length].color})`,
                }}
              >
                View Details
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;