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
      features: ["User Research", "Wireframing", "Design Systems", "Testing"],
      color: "#8B5CF6",
      shortDesc: "Intuitive interfaces",
      fullDesc:
        "Creating beautiful, user-friendly interfaces with modern design principles and user-centered approach.",
    },
    {
      id: 2,
      title: "Web Design",
      icon: <Globe />,
      features: ["Responsive", "Fast Loading", "SEO", "Branding"],
      color: "#3B82F6",
      shortDesc: "Modern websites",
      fullDesc:
        "Designing responsive websites that work perfectly on all devices and reflect your brand identity.",
    },
    {
      id: 3,
      title: "Web Dev",
      icon: <Code />,
      features: ["React/Next.js", "APIs", "Database", "Deployment"],
      color: "#10B981",
      shortDesc: "Web applications",
      fullDesc:
        "Building robust, scalable web applications using modern technologies and best practices.",
    },
    {
      id: 4,
      title: "ML/AI",
      icon: <Cpu />,
      features: [
        "Model Training",
        "Data Processing",
        "Algorithms",
        "Deployment",
      ],
      color: "#EC4899",
      shortDesc: "AI solutions",
      fullDesc:
        "Developing intelligent machine learning models and AI solutions for data-driven decision making.",
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
  }, [isAutoPlaying]);

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
    <section id="services" className="min-h-screen bg-black text-white">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Services
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-lg bg-gray-900"
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
              className="p-2 rounded-lg bg-gray-900"
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
        className="p-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe Hint for Mobile */}
        <div className="text-center mb-2">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <span>Swipe left/right to navigate</span>
            <ChevronLeft className="w-3 h-3" />
            <ChevronRight className="w-3 h-3" />
          </p>
        </div>

        {/* Mobile Grid - 2 columns */}
        {!isExpanded && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`relative rounded-lg p-3 transition-all duration-200 ${
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-5 h-5",
                      style: { color: service.color },
                    })}
                  </div>
                  <h3 className="text-sm font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400">{service.shortDesc}</p>
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
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeIndex].color}30, ${services[activeIndex].color}10)`,
                  }}
                >
                  {React.cloneElement(services[activeIndex].icon, {
                    className: "w-6 h-6",
                    style: { color: services[activeIndex].color },
                  })}
                </div>
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: services[activeIndex].color }}
                  >
                    {services[activeIndex].title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {services[activeIndex].fullDesc}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2">
                {services[activeIndex].features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg flex items-center"
                    style={{
                      background: `linear-gradient(90deg, ${services[activeIndex].color}10, transparent)`,
                      border: `1px solid ${services[activeIndex].color}20`,
                    }}
                  >
                    <CheckCircle
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: services[activeIndex].color }}
                    />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
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
                    <span className="text-sm font-medium whitespace-nowrap">
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
                  index === activeIndex ? "scale-125" : ""
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
            Get {services[activeIndex].title}
          </button>
          <p className="text-xs text-gray-500">Tap to start your project</p>
        </div>
      </div>

      {/* Tablet and Desktop Views */}
      <div className="hidden md:block">
        {/* Tablet (768px+) */}
        <div className="hidden md:block lg:hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Our Services</h1>
              <p className="text-gray-400">Professional digital solutions</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`rounded-xl p-4 transition-all ${
                    index === activeIndex ? "scale-105" : ""
                  }`}
                  style={{
                    background:
                      index === activeIndex
                        ? `linear-gradient(135deg, ${service.color}15, rgba(0,0,0,0.95))`
                        : "rgba(30, 30, 30, 0.9)",
                    border: `2px solid ${index === activeIndex ? service.color : "#374151"}`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        className: "w-6 h-6",
                        style: { color: service.color },
                      })}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">
                        {service.fullDesc}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle
                              className="w-3 h-3 mr-2"
                              style={{ color: service.color }}
                            />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop (1024px+) */}
        <div className="hidden lg:block">
          <div className="p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Our Professional Services
              </h1>
              <p className="text-gray-400 text-lg">
                Comprehensive digital solutions for your business
              </p>
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
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        className: "w-8 h-8",
                        style: { color: service.color },
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.shortDesc}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center"
                        >
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

            {/* Desktop Controls */}
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={toggleAutoPlay}
                className="px-6 py-3 rounded-lg flex items-center gap-2"
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
      </div>
    </section>
  );
};

export default Services;

// Add to global CSS
<style jsx global>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
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
`}</style>;
