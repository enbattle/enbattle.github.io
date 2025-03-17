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
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function Experience() {
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

  const experiences = [
    {
      title: "Full Stack Engineering Lead",
      company: "Accenture",
      period: "2024 - Present",
      description: `
        Lead a team of engineers to develop and deploy a gamification learning engine integrated with growth tracking systems for both internal groups and external clients
        •
        Spearhead frontend development for client-focused UI/UX features including learning progression, leaderboards, badges, and gamified questions/quizzes
        •
        Architect backend solutions focusing on API endpoints, event analytics, SQL/NoSQL database storage, and AI-powered LLM and OpenAI integration for learning assistance
        •
        Partner with internal upskilling teams to implement the gamification learning engine for over 1,000 users across seminars and instructor-led courses, enabling seamless API integration with existing training platforms
        •
        Serve as Senior Instructor/Coordinator for full-stack engineering courses, mentoring peers and strengthening the engineering community
        •
        Teach software engineering as Senior Instructor for frontend and backend technologies including Vanilla JavaScript, React, Angular, Node.js, AWS and Microsoft Azure database servers, database storage, and data retrieval
      `,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "MySQL",
        "CosmosDB",
        "Microsoft Azure",
      ],
    },
    {
      title: "Back-end Engineer",
      company: "Accenture",
      period: "2023 - 2024",
      description: `
        Enhance e-commerce presence for a major brand by developing and deploying 50+ production-ready APIs with comprehensive testing
      `,
      skills: [
        "React",
        "TypeScript",
        "Microsoft Azure",
        "Apollo GraphQL",
        "GraphQL",
      ],
    },
    {
      title: "Front-end Engineer",
      company: "Accenture",
      period: "2021 - 2023",
      description: `
        Modernize a desktop application for an investment firm, increasing service delivery speed while implementing robust SDK integration for streamlined authentication and efficient searching with intuitive navigation
      `,
      skills: ["Angular", "TypeScript", "Node.js", "Electron", "Glue42"],
    },
    {
      title: "Software Engineering Intern",
      company: "Digital Agency",
      period: "2020 - 2020",
      description: `
        Developed efficient smart home drivers in C# for latest audiovisual systems, TVs, and security systems integrated with Crestron's control platforms
        •
        Examined codebase quality using the company's Java/C# framework and supported the security test environment
        •
        Collaborated with quality engineering teams on regression testing and analysis for smart home drivers and control systems pre-release
      `,
      skills: ["C#"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey has equipped me with a diverse skill set
              and experience across various domains of engineering and
              development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <Briefcase className="mr-2 h-5 w-5 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
