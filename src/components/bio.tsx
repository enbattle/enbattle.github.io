"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Lightbulb, Rocket, Download } from "lucide-react";

export default function Bio() {
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

  const skills = [
    {
      icon: <Code className="h-8 w-8 mb-2" />,
      title: "Full Stack Development",
      description:
        "TypeScript, React, Next.js, Angular, Node.js, Python, Java, SQL, PostgreSQL, GraphQL, MongoDB",
    },
    {
      icon: <Palette className="h-8 w-8 mb-2" />,
      title: "Mobile Development",
      description: "React Native, Expo, Flutter",
    },
    {
      icon: <Palette className="h-8 w-8 mb-2" />,
      title: "AI",
      description: "LLM integration, Agentic AI workflows, MCP utilization",
    },
    {
      icon: <Lightbulb className="h-8 w-8 mb-2" />,
      title: "Cloud and Platforms",
      description: "Microsoft Azure, Amazon Web Services, Supabase",
    },
  ];

  return (
    <section id="bio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              {`Hello! I'm Steven and I'm a passionate software engineer and
              developer. I've worked on a variety of projects ranging from small
              business websites to complex enterprise applications.`}
            </p>
            <p className="text-muted-foreground mb-4">
              {`My approach combines technical expertise with creative
              problem-solving. I believe in writing clean, maintainable code and
              designing intuitive user experiences that delight users and meet
              business objectives.`}
            </p>
            <p className="text-muted-foreground mb-6">
              {`My hobbies are rock climbing, tennis, and hip-hop dance. I absolutely love corgis. Oh, and I also love food, especially sushi. `}
            </p>
            <Button className="mb-4">
              <a
                href="./resume.pdf"
                download="resume.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/320";
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-2xl font-bold mt-16 mb-8 text-center"
        >
          Skills
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6">
                  {skill.icon}
                  <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
