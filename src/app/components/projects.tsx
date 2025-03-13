"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./project-card";

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Projects data
  const projects = [
    {
      title: "Subtrackar Subscription Tracking Dashboard Visualization",
      description:
        "Visualizing a good example of a subscription tracker dashboard",
      image: "./subtrackar.png",
      tags: ["React", "Next.js", "Typescript"],
      link: "https://enbattle.github.io/subtrackar/",
      github: "https://github.com/enbattle/subtrackar",
    },
    {
      title: "Vitality Ecommerce Store Visualization",
      description:
        "Visualizing a good example of an ecommerce platform and business",
      image: "./vitality.png",
      tags: ["React", "Next.js", "Typescript"],
      link: "https://enbattle.github.io/vitality/",
      github: "https://github.com/enbattle/vitality",
    },
    {
      title: "Pixel Platformer",
      description: "Fun little game based off of 'I Wanna Be That Guy'",
      image: "./pixel-platformer.png",
      tags: ["React", "Next.js", "Typescript"],
      link: "https://enbattle.github.io/pixel-platformer/",
      github: "https://github.com/enbattle/pixel-platformer",
    },
    {
      title: "Board Games - Nine Men's Morris, Gomoku",
      description: "Classic board games with a touch of minimax algorithms",
      image: "./board-games.png",
      tags: ["React", "Next.js", "Typescript"],
      link: "https://enbattle.github.io/board-games/",
      github: "https://github.com/enbattle/board-games",
    },
    {
      title: "Pathfinding Visualizer",
      description: "Visualizing the various pathfinder algorithms.",
      image: "./pathfinding-visualizer-project.png",
      tags: ["React", "Typescript"],
      link: "https://enbattle.github.io/pathfinding-visualizer/",
      github: "https://github.com/enbattle/pathfinding-visualizer",
    },
    {
      title: "JavaScript Modern Scroll Animations",
      description:
        "Working with cool scroll animations that can used on various projects.",
      image: "./scroll-animations-project.png",
      tags: ["SolidJS", "Typescript"],
      link: "https://enbattle.github.io/javascript-scroll-animations/",
      github: "https://github.com/enbattle/javascript-scroll-animations",
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>

      {/* Filter controls (for future development) */}
      <motion.div
        className="flex gap-3 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {/* This would be the filter UI for future development */}
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
}
