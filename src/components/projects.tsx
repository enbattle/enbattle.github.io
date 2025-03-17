"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
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

  const projects = [
    {
      title: "Subtrackar Subscription Tracking Dashboard Visualization",
      description:
        "Visualizing a good example of a subscription tracker dashboard",
      image: "./subtrackar.png",
      tags: ["React", "Next.js", "Typescript"],
      liveUrl: "https://enbattle.github.io/subtrackar/",
      githubUrl: "https://github.com/enbattle/subtrackar",
    },
    {
      title: "Vitality Ecommerce Store Visualization",
      description:
        "Visualizing a good example of an ecommerce platform and business",
      image: "./vitality.png",
      tags: ["React", "Next.js", "Typescript"],
      liveUrl: "https://enbattle.github.io/vitality/",
      githubUrl: "https://github.com/enbattle/vitality",
    },
    {
      title: "Pixel Platformer",
      description: "Fun little game based off of 'I Wanna Be That Guy'",
      image: "./pixel-platformer.png",
      tags: ["React", "Next.js", "Typescript"],
      liveUrl: "https://enbattle.github.io/pixel-platformer/",
      githubUrl: "https://github.com/enbattle/pixel-platformer",
    },
    {
      title: "Board Games - Nine Men's Morris, Gomoku",
      description: "Classic board games with a touch of minimax algorithms",
      image: "./board-games.png",
      tags: ["React", "Next.js", "Typescript"],
      liveUrl: "https://enbattle.github.io/board-games/",
      githubUrl: "https://github.com/enbattle/board-games",
    },
    {
      title: "Pathfinding Visualizer",
      description: "Visualizing the various pathfinder algorithms.",
      image: "./pathfinding-visualizer-project.png",
      tags: ["React", "Typescript"],
      liveUrl: "https://enbattle.github.io/pathfinding-visualizer/",
      githubUrl: "https://github.com/enbattle/pathfinding-visualizer",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
