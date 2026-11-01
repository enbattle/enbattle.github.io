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
        period: "2024 — Present",
        description: [
          "Deployed a multi-agent learning platform scaled to 1,000+ users, establishing rigorous LLM eval pipelines and custom guardrails to guarantee high-fidelity execution across existing instructor-led training systems",
          "Enhanced an enterprise-scale event tracking system for 30+ critical applications, improving real-time customer experience monitoring by more than 25%",
          "Developed a standard framework for a context-engineering knowledge workspace with reusable agent workflows and skills, benefiting 20+ teams",
          "Served as Senior Instructor, teaching software engineering to over 200 students and mentoring 30+ instructors",
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Node.js",
          "Python",
          "Java",
          "PostgreSQL",
          "CosmosDB",
          "Azure",
          "AWS",
        ],
      },
      {
        title: "Back-end Engineer",
        period: "2023 — 2024",
        description: [
          "Enhanced e-commerce presence for a major brand by developing and deploying 50+ production-ready APIs with comprehensive testing and documentation, with seamless integration to the existing platform",
        ],
        skills: ["React", "TypeScript", "Azure", "Apollo GraphQL", "GraphQL"],
      },
      {
        title: "Front-end Engineer",
        period: "2021 — 2023",
        description: [
          "Modernized a desktop application for an investment firm, enhancing service delivery speed by 40%",
          "Implemented robust SDK integration for streamlined authentication and efficient searching",
          "Developed comparative proof-of-concept applications using Glue42 and OpenFin, enabling data-driven vendor selection",
        ],
        skills: ["Angular", "TypeScript", "Node.js", "Electron", "Glue42", "Azure"],
      },
    ],
  },
  {
    company: "Crestron Electronics",
    period: "2020",
    positions: [
      {
        title: "Software Engineering Intern",
        period: "Jan — Jun 2020",
        description: [
          "Developed efficient smart home drivers in C# for the latest audiovisual systems, TVs, and security systems integrated with Crestron's control platforms",
          "Examined codebase quality using the company's Java/C# framework and supported the security test environment",
          "Collaborated with quality engineering teams on regression testing and analysis for smart home drivers and control systems pre-release",
        ],
        skills: ["C#", "Java"],
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
