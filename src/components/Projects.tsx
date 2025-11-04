import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with user authentication, product management, and secure payment integration.",
      tags: ["React", "PHP", "MySQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      tags: ["JavaScript", "Bootstrap", "PHP"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      tags: ["React", "Tailwind", "TypeScript"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application providing detailed forecasts, location-based data, and interactive weather maps.",
      tags: ["React", "API Integration", "CSS"],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion
            for creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="interactive-card glass-card overflow-hidden hover-lift group animate-fade-in border-2 border-transparent hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Gradient */}
              <div
                className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 group-hover:to-background/80 transition-all duration-500" />
                
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '32px 32px'
                }} />
                
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Button variant="hero" size="sm" className="shadow-xl">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="glass" size="sm" className="shadow-xl backdrop-blur-xl">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs font-medium rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
