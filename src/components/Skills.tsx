import { Card } from "./ui/card";
import { Code2, Database, Braces, Cpu, Globe, Server } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, color: "bg-[#E34F26]", icon: Globe },
    { name: "CSS", level: 90, color: "bg-[#1572B6]", icon: Braces },
    { name: "JavaScript", level: 85, color: "bg-[#F7DF1E]", icon: Code2 },
    { name: "React.js", level: 80, color: "bg-[#61DAFB]", icon: Code2 },
    { name: "PHP", level: 85, color: "bg-[#777BB4]", icon: Server },
    { name: "MySQL", level: 80, color: "bg-[#4479A1]", icon: Database },
    { name: "Java", level: 75, color: "bg-[#007396]", icon: Code2 },
    { name: "C++", level: 70, color: "bg-[#00599C]", icon: Cpu },
    { name: "Bootstrap", level: 85, color: "bg-[#7952B3]", icon: Braces },
    { name: "Machine Learning", level: 65, color: "bg-primary", icon: Cpu },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across
            various technologies and frameworks.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="interactive-card glass-card p-6 hover-lift animate-fade-in border-2 border-transparent hover:border-primary/30 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-secondary/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-yellow-400 group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-primary font-bold text-xl px-3 py-1 rounded-lg glass-card group-hover:scale-110 transition-transform duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg group-hover:shadow-2xl`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                      <div className="absolute right-0 top-0 h-full w-1 bg-white/50 blur-sm" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
