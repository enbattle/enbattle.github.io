"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/section-heading";

const education = [
  {
    institution: "Rensselaer Polytechnic Institute",
    location: "Troy, NY",
    period: "2017 — 2021",
    degrees: [
      "B.S. Computer Science",
      "B.S. Information Technology & Web Science",
    ],
  },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="education"
      className="border-t border-border px-6 py-24 md:px-16"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeading index="04" title="Education" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="grid gap-2 border-t border-border pt-6 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr]"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {edu.period}
              </p>
              <div>
                {edu.degrees.map((degree) => (
                  <h3 key={degree} className="font-display text-2xl">
                    {degree}
                  </h3>
                ))}
                <p className="mt-2 text-muted-foreground">
                  {edu.institution} &middot; {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
