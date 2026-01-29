import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Code2,
  Layers,
  Globe,
  Timer,
  Sparkles,
  Cpu,
  Palette,
  Zap,
  Target,
  Rocket,
  Brain,
} from "lucide-react";
import developerPhoto from "@/assets/Falmi Designer.png";

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const trickTexts = [
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "AI Enthusiast",
    "Creative Coder",
    "Problem Solver",
  ];

  // Typewriter effect for trick text
  useEffect(() => {
    const currentText = trickTexts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % trickTexts.length);
    }
  }, [charIndex, isDeleting, textIndex]);

  const stats = [
    {
      icon: Code2,
      value: "10+",
      label: "Projects Delivered",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Palette,
      value: "10+",
      label: "UI Designs",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Cpu,
      value: "10+",
      label: "Technologies",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Timer,
      value: "3+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image with Floating Stats */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-purple-500/10 to-black rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <img
                  src={developerPhoto}
                  alt="Falmi Tesfaye"
                  className="relative w-full h-auto rounded-2xl object-cover z-10 transform group-hover:scale-105 transition-all duration-500 border-2 border-yellow-500/30 group-hover:border-purple-500/50"
                />

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-yellow-500/30">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>

                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center animate-bounce delay-300 shadow-lg shadow-purple-500/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Floating Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-black/80 backdrop-blur-sm border border-yellow-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="p-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 mx-auto`}
                    >
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Header with Trick Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="text-white">Hello, I'm </span>
                <span className="text-yellow-400">Falmi Tesfaye</span>
              </h2>

              {/* Trick Text Display */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-yellow-500/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-yellow-400">
                    {displayedText}
                    <span className="inline-block w-1 h-5 bg-yellow-400 ml-1 animate-pulse"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description - White text on black */}
            <div className="space-y-4">
              <p className="text-white leading-relaxed">
                Passionate{" "}
                <span className="text-yellow-400 font-semibold">
                  Software Engineer
                </span>{" "}
                specializing in creating clean, scalable solutions for complex
                problems. I blend technical expertise with creative vision to
                build digital experiences that users love.
              </p>

              <p className="text-white leading-relaxed">
                Currently working full-time as a{" "}
                <span className="text-purple-400 font-semibold">
                  Frontend Developer & UI/UX Designer
                </span>
                , while actively contributing to open-source projects and
                exploring the exciting world of Artificial Intelligence and
                Machine Learning.
              </p>

              <p className="text-white leading-relaxed">
                My philosophy is simple: create technology that's not only
                functional but also{" "}
                <span className="text-yellow-400 font-semibold">
                  makes a real difference
                </span>{" "}
                in people's lives through thoughtful design and innovative
                solutions.
              </p>
            </div>

            {/* Core Skills */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    skill: "UI/UX Design",
                    color:
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                  },
                  {
                    skill: "Frontend Development",
                    color:
                      "bg-purple-500/20 text-purple-300 border-purple-500/40",
                  },
                  {
                    skill: "React & Next.js",
                    color:
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                  },
                  {
                    skill: "TypeScript",
                    color:
                      "bg-purple-500/20 text-purple-300 border-purple-500/40",
                  },
                  {
                    skill: "AI/ML Concepts",
                    color:
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                  },
                  {
                    skill: "Responsive Design",
                    color:
                      "bg-purple-500/20 text-purple-300 border-purple-500/40",
                  },
                  {
                    skill: "Figma",
                    color:
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                  },
                  {
                    skill: "Tailwind CSS",
                    color:
                      "bg-purple-500/20 text-purple-300 border-purple-500/40",
                  },
                ].map((item, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border ${item.color} hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    {item.skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Read More Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold border-0 shadow-lg hover:shadow-yellow-500/30"
                >
                  <span>Explore My Journey</span>
                  <Rocket className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-black/95 backdrop-blur-xl border border-yellow-500/30 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    <span className="text-yellow-400">
                      My Development Journey
                    </span>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-white">
                  <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 rounded-lg border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      The Beginning
                    </h4>
                    <p>
                      Started my coding journey over 5 years ago, fascinated by
                      the power to create digital experiences from scratch.
                      Began with HTML/CSS and quickly expanded to JavaScript and
                      modern frameworks.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Specialization
                    </h4>
                    <p>
                      Focused on frontend development and UI/UX design,
                      mastering React, TypeScript, and modern design principles.
                      Built numerous projects that prioritize user experience
                      and performance.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 rounded-lg border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      AI & ML Exploration
                    </h4>
                    <p>
                      Currently exploring Artificial Intelligence and Machine
                      Learning, understanding how these transformative
                      technologies can create innovative solutions and improve
                      user experiences.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Design Philosophy
                    </h4>
                    <p>
                      Believe in creating technology that's accessible,
                      intuitive, and impactful. Focus on clean code, thoughtful
                      design, and solutions that genuinely improve people's
                      digital experiences.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-lg border border-yellow-500/30">
                  <p className="text-center font-medium text-white">
                    "Always excited to collaborate on projects that challenge
                    the status quo and create meaningful impact through
                    technology."
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-black/50 rounded-lg border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-gray-300">Commitment</div>
              </div>
              <div className="text-center p-3 bg-black/50 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-xs text-gray-300">Creativity</div>
              </div>
              <div className="text-center p-3 bg-black/50 rounded-lg border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-gray-300">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
