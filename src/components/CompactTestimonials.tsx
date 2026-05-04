import React from "react";
import { Card } from "./ui/card";
import { Star, Quote, CheckCircle, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const CompactTestimonials = () => {
  const testimonials = [
    {
      name: "Dula Gudeta",
      role: "Software Engineer",
      company: "Debo Engineering",
      content: "Transformed our UX. 47% engagement increase.",
      rating: 5,
      color: "from-yellow-500 to-cyan-500",
      github: "https://github.com/sarahjohnson",
    },
    {
      name: "Wada Abera ",
      role: "Senior Developer",
      company: "InnovateLabs",
      content: "Delivered flawless web app for 50K+ users.",
      rating: 5,
      color: "from-yellow-500 to-cyan-500",
      github: "https://github.com/Wadabera",
    },
    {
      name: "Gammachu Tesfaye",
      role: "CEO and cofounder",
      company: "Milsun Trading plc and WM Genral Trading plc",
      content: "35% conversion boost with his designs.",
      rating: 5,
      color: "from-green-500 to-teal-500",
      github: "https://github.com/emmarodriguez",
    },
    {
      name: "Bona Tolosa",
      role: "Lead Developer",
      company: "CodeCraft",
      content: "Game-changing AI features implementation.",
      rating: 5,
      color: "from-orange-500 to-red-500",
      github: "https://github.com/bonatolesa",
    },
    {
      name: "Robera Hinsarmu",
      role: "UX Director",
      company: "DesignCo",
      content: "Exceptional attention to detail and creativity.",
      rating: 5,
      color: "from-indigo-500 to-purple-500",
      github: "https://github.com/alexturner",
    },
    {
      name: "Daniel Tunka ",
      role: "Project Lead",
      company: "DataSystems",
      content: "Delivered complex project ahead of schedule.",
      rating: 5,
      color: "from-pink-500 to-rose-500",
      github: "https://github.com/lisawang",
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "AIStartup",
      content: "Built our MVP in record time with great quality.",
      rating: 5,
      color: "from-amber-500 to-orange-500",
      github: "https://github.com/jameswilson",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director",
      company: "GrowthHack",
      content: "Landing pages increased conversions by 200%.",
      rating: 5,
      color: "from-emerald-500 to-green-500",
      github: "https://github.com/mariagarcia",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="CompactTestimonials" className="py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-yellow-400">Client</span> Feedback
          </h2>
          <p className="text-gray-400">What clients say about my work</p>
        </div>

        {/* Navigation Arrows */}
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 border border-gray-700 rounded-full hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 border border-gray-700 rounded-full hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-black" />
            </button>
          )}

          {/* Single Row - Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={`relative overflow-x-auto py-4 scrollbar-hide ${isPaused ? "" : "animate-scroll-single"}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-4 min-w-max px-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] min-w-[280px] max-w-[280px] flex-shrink-0"
                >
                  <div className="p-5">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-sm mb-4 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold`}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* GitHub Button - Yellow */}
                      <a
                        href={testimonial.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30 group"
                        title="View GitHub Profile"
                      >
                        <Github className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">100% Satisfaction</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">Quality Code</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">Post-Support</span>
          </div>
        </div>

        {/* Yellow CTA Button */}
        <div className="mt-6 text-center">
          <button
            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2 mx-auto"
            onClick={() => window.open("#contact", "_self")}
          >
            <Github className="w-5 h-5" />
            Get Your Project Quote
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scroll-single {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-single {
          animation: scroll-single 40s linear infinite;
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Adjust animation duration for mobile */
        @media (max-width: 768px) {
          .animate-scroll-single {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default CompactTestimonials;