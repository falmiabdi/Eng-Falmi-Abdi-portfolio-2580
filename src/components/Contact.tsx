import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mbdyggrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This is where replies will be sent
          _subject: `New Contact: ${formData.subject}`, // Email subject
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          className: "bg-green-900/20 border-2 border-green-500 text-white",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDesktop = () => {
    return window.innerWidth > 768;
  };

  const handleCallClick = () => {
    const phoneNumber = "+251915652588";

    if (isDesktop()) {
      // Open Google Meet for desktop
      const meetLink = "https://meet.google.com/new";
      // Alternative: create a scheduled meeting link
      // const meetLink = "https://calendar.google.com/calendar/u/0/r/eventedit";
      window.open(meetLink, "_blank");
      toast({
        title: "Opening Meeting",
        description: "Opening Google Meet in a new tab...",
        className: "bg-black border-2 border-purple-500 text-white",
      });
    } else {
      // Direct call for mobile
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "251915652588";
    const message =
      "Hello Falmi, I saw your portfolio and would like to connect!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "falmitesfaye@gmail.com",
      action: () => (window.location.href = "mailto:falmitesfaye@gmail.com"),
      hoverColor: "hover:bg-purple-700/20 hover:border-purple-700",
    },
    {
      icon: Phone,
      label: "Phone/Call",
      value: "+251 915 652 588",
      action: handleCallClick,
      hoverColor: "hover:bg-purple-700/20 hover:border-purple-700",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jimma, Ethiopia",
      action: () => {
        // Open Google Maps
        const mapsLink = "https://www.google.com/maps/place/Jimma,+Ethiopia";
        window.open(mapsLink, "_blank");
      },
      hoverColor: "hover:bg-purple-700/20 hover:border-purple-700",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      action: handleWhatsAppClick,
      hoverColor: "hover:bg-purple-700/20 hover:border-purple-700",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Get In</span>{" "}
            <span className="text-white">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <button
                key={index}
                onClick={info.action}
                className={`w-full text-left bg-black/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${info.hoverColor} group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.label === "Phone/Call" ? "from-purple-500/20 to-yellow-500/20" : "from-yellow-500/20 to-purple-500/20"} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500`}
                  >
                    <info.icon
                      className={`w-7 h-7 ${info.label === "Phone/Call" ? "text-purple-400 group-hover:text-purple-300" : "text-yellow-400 group-hover:text-yellow-300"} transition-colors duration-300`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {info.label}
                    </h3>
                    <span className="text-gray-400 group-hover:text-yellow-300 transition-colors text-sm block">
                      {info.value}
                      {info.label === "Phone/Call" && (
                        <span className="text-xs text-yellow-400 ml-2">
                          {isDesktop() ? "(Video Call)" : "(Tap to Call)"}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <Card
            className="md:col-span-2 bg-black/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl p-6 md:p-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-black/80 border-2 border-gray-700 focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-black/80 border-2 border-gray-700 focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="bg-black/80 border-2 border-gray-700 focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-black/80 border-2 border-gray-700 focus:border-purple-500 text-white placeholder-gray-500 resize-none transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCallClick}
                  className="w-full sm:w-auto border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 hover:text-yellow-300"
                  size="lg"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {isDesktop() ? "Schedule Call" : "Call Now"}
                </Button>
              </div>

             
            </form>
          </Card>
        </div>

        {/* Additional Contact Note */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-gray-400">
            I typically respond within 24 hours. For urgent matters, please use
            the phone number.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/falmiabdi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
