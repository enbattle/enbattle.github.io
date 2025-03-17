"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const education = [
    {
      degree: "Bachelor of Science (BS) in Computer Science",
      institution: "Rensselaer Polytechnic Institute",
      period: "2017 - 2021",
      description:
        "Focused on data structures, algorithms, and machine learning",
    },
    {
      degree:
        "Bachelor of Science (BS) in Information Technology and Web Science",
      institution: "Rensselaer Polytechnic Institute",
      period: "2017 - 2021",
      description:
        "Focused on web development, project management, and technological case studies",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background that has shaped my expertise.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold flex items-center"
            >
              <GraduationCap className="mr-2 h-6 w-6 text-primary" /> Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" /> {edu.period} •{" "}
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
