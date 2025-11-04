import { Card } from "./ui/card";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating visually appealing and highly interactive user interfaces with modern frameworks like React. Specializing in responsive designs that adapt seamlessly to different screen sizes, providing a smooth experience across all devices.",
      features: ["Responsive Design", "React & Modern JS", "Performance Optimization"],
    },
    {
      icon: Palette,
      title: "Web Design Development",
      description:
        "Crafting visually stunning and highly functional websites tailored to your brand and audience. Focus on intuitive navigation, clean layouts, and optimized performance to enhance user experience with UI/UX best practices.",
      features: ["UI/UX Design", "Interactive Elements", "Brand Identity"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Building secure, scalable, and efficient server-side applications. Developing robust APIs, managing databases efficiently, and ensuring smooth data handling for high-performance applications with PHP and MySQL.",
      features: ["API Development", "Database Management", "Security & Scalability"],
    },
    {
      icon: Smartphone,
      title: "Full-Stack Solutions",
      description:
        "Comprehensive end-to-end development services combining frontend elegance with backend robustness. Delivering complete web applications that are both beautiful and powerful, from concept to deployment.",
      features: ["Complete Solutions", "Modern Tech Stack", "Ongoing Support"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life with
            cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="interactive-card glass-card p-8 hover-lift group animate-fade-in border-2 border-transparent hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/feature">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover/feature:scale-125 transition-transform duration-300" />
                    <span className="text-sm text-foreground/80 group-hover/feature:text-foreground group-hover/feature:translate-x-1 transition-all duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
