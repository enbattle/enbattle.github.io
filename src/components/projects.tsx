"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    index: "01",
    title: "AI Cauldron",
    description: "An interactive reference for the full AI engineering stack — LLM internals, RAG, agents, evals, MLOps — with 96 lessons and 10 animated algorithm visualizations.",
    tags: ["React", "TypeScript", "Vite"],
    liveUrl: "https://enbattle.github.io/ai-cauldron/",
    githubUrl: "https://github.com/enbattle/ai-cauldron",
  },
  {
    index: "02",
    title: "Coding Playground",
    description: "A TypeScript-first in-browser code editor and studio — Monaco editor, client-side compilation, sandboxed console, no backend.",
    tags: ["React", "TypeScript", "Monaco"],
    liveUrl: "https://enbattle.github.io/coding-playground/",
    githubUrl: "https://github.com/enbattle/coding-playground",
  },
  {
    index: "03",
    title: "Dev Nuggets",
    description: "A searchable, no-backend reference site for programming concepts, patterns, and gotchas worth remembering — content lives in the codebase like a small wiki.",
    tags: ["React", "TypeScript", "Vite"],
    liveUrl: "https://enbattle.github.io/develop-nuggets/",
    githubUrl: "https://github.com/enbattle/develop-nuggets",
  },
    {
    index: "04",
    title: "Pathfinding Visualizer",
    description: "An interactive look at how Dijkstra, A*, and friends search a grid for the shortest route — the same engine behind this page's hero.",
    tags: ["React", "TypeScript"],
    liveUrl: "https://enbattle.github.io/pathfinding-visualizer/",
    githubUrl: "https://github.com/enbattle/pathfinding-visualizer",
  },
  {
    index: "05",
    title: "Board Games",
    description: "Nine Men's Morris and Gomoku, playable in-browser with a minimax opponent.",
    tags: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://enbattle.github.io/board-games/",
    githubUrl: "https://github.com/enbattle/board-games",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 md:px-16"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Projects" />

        <div>
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="group grid grid-cols-1 items-center gap-4 border-t border-border py-8 last:border-b md:grid-cols-[3rem_1fr_9rem_9rem]"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {project.index}
              </span>

              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl transition-colors group-hover:text-rust md:text-3xl">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-foreground/60">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground md:justify-self-end"
              >
                <Github className="h-3.5 w-3.5" /> Source
              </a>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
