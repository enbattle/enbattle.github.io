"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/section-heading";

const experiences = [
  {
    company: "Accenture",
    period: "2021 — Present",
    positions: [
            {
        title: "Full Stack Senior Engineer",
        period: "2025 — Present",
        description: [
          "Developed an AI-driven agentic SDLC using context-engineering knowledge ontology, custom MCP server, and reusable agent workflows spanning feature specification through automated multi-specialist adversarial code review",
          "Led full-stack delivery of a knowledge-graph decision platform for financial transaction viability --- event-driven microservices and backend-for-frontend with micro-frontends"
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Java",
          "PostgreSQL",
          "AWS",
          "Azure",
          "Python"
        ],
      },
      {
        title: "Full Stack Engineer",
        period: "2024 — 2025",
        description: [
          "Manage a team of engineers building an enterprise-scale event tracking platform monitoring 30+ critical applications to identify and resolve customer experience bottlenecks in real time",
          "Lead development of a gamification learning engine scaled to 1,000+ internal users across seminars and instructor-led courses, with seamless API integration into existing training platforms",
          "Teach software engineering as Senior Instructor for front-end and back-end technologies to 200+ students, and onboard and mentor 30+ instructors in the engineering program",
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Node.js",
          "MySQL",
          "CosmosDB",
          "Azure",
        ],
      },
      {
        title: "Back-End Engineer",
        period: "2023 — 2024",
        description: [
          "Enhanced e-commerce presence for a major brand by developing and deploying 50+ production-ready APIs with comprehensive testing, documentation, and a formal integration to the existing platform",
        ],
        skills: ["React", "TypeScript", "Azure", "Apollo GraphQL", "GraphQL"],
      },
      {
        title: "Front-End Engineer",
        period: "2021 — 2023",
        description: [
          "Modernized a desktop application for an investment firm, increasing service delivery speed by 40% while implementing robust SDK integration for authentication and search with intuitive navigation",
          "Built comparative proof-of-concept applications using Glue42 and OpenFin, benchmarking scalability, reliability, and cost to enable a data-driven vendor decision that produced annual contract savings",
        ],
        skills: ["Angular", "TypeScript", "Node.js", "Electron", "Glue42", "Azure"],
      },
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-24 md:px-16"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Experience" />

        <div className="space-y-20">
          {experiences.map((exp) => (
            <div key={exp.company}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-8 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3"
              >
                <h3 className="font-display text-3xl">{exp.company}</h3>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
              </motion.div>

              <div className="space-y-12">
                {exp.positions.map((position, i) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                    className="grid gap-4 md:grid-cols-[220px_1fr]"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">
                        {position.title}
                      </h4>
                      <p className="font-mono text-xs text-muted-foreground">
                        {position.period}
                      </p>
                    </div>

                    <div>
                      <ul className="space-y-3 text-muted-foreground">
                        {position.description.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-rust" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                        {position.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs text-foreground/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
