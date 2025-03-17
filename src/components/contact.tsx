"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "listeven6691@gmail.com",
      href: "mailto:listeven6691@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "New York City, NY",
      href: "https://maps.google.com/?q=New+York+City,+NY",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/enbattle",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/stevenli44",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out!
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  I'm always open to new opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Contact Info */}
                <div className="flex flex-col items-center space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted transition-colors w-full max-w-xs justify-center"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t">
                  <h4 className="text-sm font-medium mb-6 text-center">
                    Connect with me
                  </h4>
                  <div className="flex justify-center space-x-12">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center space-y-2 group"
                      >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                          <div className="text-muted-foreground group-hover:text-primary transition-colors">
                            {link.icon}
                          </div>
                        </div>
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
