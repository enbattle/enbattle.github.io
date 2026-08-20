"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 md:px-16"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeading index="05" title="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-lg text-muted-foreground">
            Open to new opportunities and collaborations &mdash; the fastest
            way to reach me is email.
          </p>

          <a
            href="mailto:listeven6691@gmail.com"
            className="group mt-8 inline-block font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
          >
            listeven6691
            <span className="text-rust">@</span>gmail.com
            <span className="mt-2 block h-px w-0 bg-rust transition-all duration-500 group-hover:w-full" />
          </a>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> New York City, NY
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
