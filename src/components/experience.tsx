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
          "Lead a team of engineers to develop and deploy an AI gamification learning engine scaled to 1,000+ internal users across seminars and instructor-led courses, enabling seamless API integration with existing training platforms",
          "Manage a team of engineers to enhance an enterprise-scale event tracking system monitoring 30+ critical applications with logging and observability, identifying customer experience bottlenecks in real time by more than 25%",
          "Developed the standard framework for a context-engineering knowledge workspace with a custom MCP server, and reusable agent workflows and skills for 20+ different teams and workstreams",
          "Teach software engineering as Senior Instructor for AI and full stack engineering technologies to 200+ students, and onboard and mentor 30+ instructors in the engineering program",
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
        title: "Back-end Senior Engineer",
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
          "Modernized a desktop application for an investment firm, increasing service delivery speed by 40% while implementing robust SDK integration for streamlined authentication and efficient searching with intuitive navigation",
          "Developed comparative proof-of-concept applications using Glue42 and OpenFin, benchmarking scalability, reliability, and cost to enable a data-driven vendor selection that produced significant annual savings on technology contracts",
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
