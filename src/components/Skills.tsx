import { Card } from "./ui/card";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, color: "bg-[#E34F26]" },
    { name: "CSS", level: 90, color: "bg-[#1572B6]" },
    { name: "JavaScript", level: 85, color: "bg-[#F7DF1E]" },
    { name: "React.js", level: 80, color: "bg-[#61DAFB]" },
    { name: "PHP", level: 85, color: "bg-[#777BB4]" },
    { name: "MySQL", level: 80, color: "bg-[#4479A1]" },
    { name: "Java", level: 75, color: "bg-[#007396]" },
    { name: "C++", level: 70, color: "bg-[#00599C]" },
    { name: "Bootstrap", level: 85, color: "bg-[#7952B3]" },
    { name: "Machine Learning", level: 65, color: "bg-primary" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across
            various technologies and frameworks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="glass-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
