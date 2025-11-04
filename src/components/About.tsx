import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Award, Users, Briefcase } from "lucide-react";
import developerPhoto from "@/assets/developer-photo.jpg";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "2+", label: "Years of Experience" },
    { icon: Award, value: "10+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Connections" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image & Stats */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden glass-card p-3 border-2 border-primary/20">
              <img
                src={developerPhoto}
                alt="Falmi Tesfaye"
                className="w-full rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none" />
              
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl -z-10 animate-pulse-scale" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 left-6 grid grid-cols-3 gap-2">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="interactive-card glass-card p-4 text-center hover-lift animate-scale-in border-2 border-transparent hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              About Me
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Hello! I'm{" "}
              <span className="text-primary font-semibold">Falmi Tesfaye</span>, a
              passionate software developer specializing in full-stack development. I have
              expertise in HTML, CSS, JavaScript, PHP, and MySQL.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              My goal is to build innovative and impactful software solutions that make a
              difference. Currently pursuing my degree at Jimma Institute of Technology,
              where I'm constantly learning and growing as a developer.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "C++", "Java"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass-card text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 cursor-default border border-transparent hover:border-primary/50"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            {/* Read More Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg">Read More About My Journey</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">My History & Journey</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm <strong>Falmi Tesfaye</strong>, a passionate and dedicated
                    software developer with a strong background in full-stack development.
                    Currently, I'm a senior student at Jimma Institute of Technology, where
                    I'm honing my skills and deepening my knowledge in software engineering.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                      Technical Skills
                    </h3>
                    <p>
                      <strong>Frontend Development:</strong> Proficient in HTML, CSS,
                      JavaScript, and React.
                    </p>
                    <p>
                      <strong>Backend Development:</strong> Skilled in languages such as
                      C++, Java, and PHP. I have extensive experience with MySQL for
                      database management.
                    </p>
                  </div>

                  <p>
                    Throughout my academic and professional journey, I've worked on various
                    projects that have allowed me to apply my skills and learn new
                    technologies. I'm committed to writing clean, efficient code and
                    building applications that solve real-world problems.
                  </p>

                  <p>
                    I'm always eager to take on new challenges and collaborate with others
                    to create innovative solutions. Let's build something amazing together!
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
