"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "./timeline";

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Education timeline data
  const educationItems = [
    {
      date: "2017 - 2021",
      title:
        "Bachelor of Science (BS) in Computer Science and Information Technology and Web Science, Dual Degree",
      subtitle: "Rensselaer Polytechnic Institute",
      description:
        "Focused on software engineering, web development, and machine learning.",
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Timeline items={educationItems} />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
}
