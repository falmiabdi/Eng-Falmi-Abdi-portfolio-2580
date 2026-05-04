import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import cppImg from "@/assets/certificates images/c++.jpg";
import javaImg from "@/assets/certificates images/Java.jpg";
import ethioprogrammingImg from "@/assets/certificates images/Ethioprogramming fundamentals.jpg";
import aiImg from "@/assets/certificates images/AI Fundmentals.jpg";
import androidImg from "@/assets/certificates images/Android Fundmentals.jpg";
import dataImg from "@/assets/certificates images/Data Fundamentals.jpg";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      title: "C++ Certification",
      image: cppImg,
    },
    {
      id: 2,
      title: "Java Certification",
      image: javaImg,
    },
    {
      id: 3,
      title: "Ethioprogramming Fundamentals",
      image: ethioprogrammingImg,
    },
    {
      id: 4,
      title: "AI Fundamentals",
      image: aiImg,
    },
    {
      id: 5,
      title: "Android Fundamentals",
      image: androidImg,
    },
    {
      id: 6,
      title: "Data Fundamentals",
      image: dataImg,
    },
  ];

  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById("certificates-scroll-container");
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-yellow-400">My </span>
            <span className="text-white">Certificates</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Professional certifications and achievements in various technologies
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-white shadow-lg border border-gray-700 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollContainer("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-white shadow-lg border border-gray-700 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Certificates Grid */}
          <div
            id="certificates-scroll-container"
            className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex-shrink-0 w-64 md:w-72 cursor-pointer group"
                onClick={() => setSelectedCertificate(certificate.id)}
              >
                <Card className="bg-gray-900 overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 h-full hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        variant="primary"
                        size="sm"
                      >
                        <ZoomIn className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white text-center">
                      {certificate.title}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="relative max-w-3xl w-full">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-12 right-0 p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={certificates.find((c) => c.id === selectedCertificate)?.image}
                alt="Certificate"
                className="w-full h-auto rounded-lg shadow-2xl border border-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
