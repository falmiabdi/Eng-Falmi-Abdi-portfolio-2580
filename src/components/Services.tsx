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
              className="glass-card p-8 hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">{feature}</span>
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
