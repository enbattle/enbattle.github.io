"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/section-heading";

const skills = [
  {
    title: "Full Stack",
    description:
      "TypeScript · React · Next.js · Angular · Node.js · Python · Java · SQL · PostgreSQL · GraphQL · MongoDB",
  },
  {
    title: "Mobile",
    description: "React Native · Expo · Flutter",
  },
  {
    title: "AI",
    description:
      "LLM API integration · RAG pipeline design · agentic workflows & multi-agent orchestration · custom MCP server development · AI coding agent tooling (custom subagents, hooks, guardrails)",
  },
  {
    title: "Cloud & Platforms",
    description: "Docker · Microsoft Azure · Amazon Web Services · Supabase",
  },
];

export default function Bio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="border-t border-border px-6 py-24 md:px-16">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="About" />

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5 font-display text-2xl leading-relaxed md:text-[1.75rem]"
          >
            <p>
              I&rsquo;m a software engineer and engineering lead in New York
              City, building everything from small business sites to
              enterprise platforms used across dozens of teams. My approach
              pairs technical rigor with clean, maintainable code and
              interfaces that get out of the user&rsquo;s way &mdash; and I
              spend a good part of my week teaching other engineers to do
              the same.
            </p>
            <p className="text-muted-foreground text-lg">
              Off the clock: rock climbing, tennis, an
              unreasonable love of corgis, and a standing appointment with
              good sushi.
            </p>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-20 space-y-5"
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="grid grid-cols-1 gap-2 border-t border-border pt-5 first:border-t-0 first:pt-0 md:grid-cols-[180px_1fr] md:gap-4"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {skill.title}
              </dt>
              <dd className="text-foreground">{skill.description}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
