"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import PathfindingCanvas from "@/components/pathfinding-canvas";

export default function Hero({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-6 pt-32 pb-10 md:px-16"
    >
      <PathfindingCanvas className="absolute inset-0 -z-0" />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Software Engineer — New York City
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[15vw] leading-[0.92] font-medium tracking-tight sm:text-[9vw] md:text-[7.5rem]"
        >
          Steven
          <br />
          <span className="italic text-rust">Li.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-md text-lg text-muted-foreground"
        >
          I build enterprise-scale platforms, lead the engineers who ship
          them, and occasionally make the shortest path between two points
          look this good.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6"
      >
        <button
          onClick={() => onNavigate("about")}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          Scroll
        </button>

        <a
          href="./resume.pdf"
          download="resume.pdf"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground"
        >
          <span className="border-b border-rust pb-0.5 transition-opacity group-hover:opacity-70">
            Download Résumé
          </span>
          <Download className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
