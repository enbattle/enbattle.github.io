"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "./timeline";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Work experience timeline data
  const experienceItems = [
    {
      date: "2021 - Present",
      title: "Full Stack Engineering Lead",
      subtitle: "Accenture",
      description: `Established a modern website and integration support for a commodity-focused client, migrating their data and assisting them in building a stronger e-commerce presence.
      Managed a team of engineers to launch a gamification learning engine seamlessly integrated into growth and learning systems for both internal groups and external clients.
      Modernized a desktop directory system for a financial institution, speeding up services provided to client-facing associates by more than 50%.
      Managed instructors in a cloud-first group, teaching up-to-date full-stack engineering courses and learning programs to peers, promoting and building the full-stack engineering community within the company.`,
    },
    {
      date: "2020 - 2020",
      title: "Data Architect Intern",
      subtitle: "KeyBank",
      description: `Utilized Tableau to create data models and visualizations for enterprise data, accelerating database operation efficiency by 20%.
      Improved data source retrieval time of enterprise data by 25% by restructuring SQL queries.`,
    },
    {
      date: "2020 - 2020",
      title: "Software Engineering Intern",
      subtitle: "Crestron Electronics",
      description: `Developed efficient smart home drivers in C# for the latest audio/video players, televisions, and security systems to be integrated with Crestron's control systems.
      Revamped security system drivers with a new security framework and assisted with the security test environment.
      Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems before application release.`,
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
        <Timeline items={experienceItems} />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
}
