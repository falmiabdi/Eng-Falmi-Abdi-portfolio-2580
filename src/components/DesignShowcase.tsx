import React, { useState } from "react";
import Image1 from "../assets/Design/photo_2026-01-20_13-40-49.jpg";
import Image2 from "../assets/Design/photo_2026-01-20_13-42-17.jpg";
import Image3 from "../assets/Design/photo_2026-01-20_13-42-34.jpg";
import Image4 from "../assets/Design/photo_2026-01-20_13-42-34.jpg";
import Image5 from "../assets/Design/photo_2026-01-20_13-42-58.jpg";
import Image6 from "../assets/Design/photo_2026-01-20_13-43-04.jpg";

const DesignShowcase = () => {
  const [pausedColumns, setPausedColumns] = useState<number[]>([]);
  const [globalPaused, setGlobalPaused] = useState(false);

  const columns = [
    {
      id: 1,
      images: [Image1, Image6],
      speed: 25,
      padding: "pr-8",
      title: "Graphics Design",
      color: "blue",
    },
    {
      id: 2,
      images: [Image5, Image2],
      speed: 20,
      padding: "px-4",
      title: "Mobile Designs",
      color: "purple",
    },
    {
      id: 3,
      images: [Image4, Image3],
      speed: 30,
      padding: "pl-8",
      title: "Web Designs",
      color: "pink",
    },
  ];

  const isColumnPaused = (columnId: number) => {
    return globalPaused || pausedColumns.includes(columnId);
  };

  const toggleColumn = (columnId: number) => {
    if (pausedColumns.includes(columnId)) {
      setPausedColumns(pausedColumns.filter((id) => id !== columnId));
    } else {
      setPausedColumns([...pausedColumns, columnId]);
    }
  };

  return (
    <section id="DesignShowcase" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Graphis, Mobile & Web <span className="text-yellow-500">Designs</span>
        </h2>
       

        {/* Control Bar */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setGlobalPaused(!globalPaused)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              globalPaused
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {globalPaused ? "▶ Resume All Columns" : "⏸ Pause All Columns"}
          </button>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col) => {
            const isPaused = isColumnPaused(col.id);
            const content = [...col.images, ...col.images];

            return (
              <div key={col.id} className={`${col.padding}`}>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{col.title}</h3>
                  <button
                    onClick={() => toggleColumn(col.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isPaused
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {isPaused ? "▶" : "⏸"}
                  </button>
                </div>

                {/* Animated Column */}
                <div className="relative h-[600px] overflow-hidden rounded-xl border border-gray-800">
                  <div
                    className={`flex flex-col space-y-4 ${!isPaused ? "animate-scroll" : ""}`}
                    style={{
                      animationDuration: `${col.speed}s`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  >
                    {content.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Design ${idx + 1}`}
                        className="w-full h-[280px] object-cover rounded-lg"
                      />
                    ))}
                  </div>

                  {/* Overlay Gradients */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0b0d17] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0b0d17] to-transparent" />
                </div>

                {/* Speed Indicator */}
                <div className="text-center mt-3 text-sm text-gray-400">
                
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8">
            {columns.map((col) => (
              <div key={col.id} className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    isColumnPaused(col.id) ? "animate-pulse" : ""
                  }`}
        
                />
               
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        :root {
          --color-blue: #3b82f6;
          --color-purple: #8b5cf6;
          --color-pink: #ec4899;
        }
      `}</style>
    </section>
  );
};

export default DesignShowcase;
