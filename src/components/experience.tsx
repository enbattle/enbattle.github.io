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
      company: "Accenture",
      period: "2021 - Present",
      positions: [
        {
          title: "Full Stack Engineering Lead",
          period: "2024 - Present",
          description: [
            "Manage team of engineers to build enterprise-scale event tracking platform monitoring 30+ critical applications to identify and resolve customer experience bottlenecks in real-time",
            "Lead a team of engineers to develop and deploy a gamification learning engine scaled to over 1000+ internal users across seminars and instructor-led courses, enabling seamless API integration with existing training platforms",
            "Teach software engineering as Senior Instructor for frontend and backend technologies to over 200+ students and provided onboarding and mentoring to 30+ instructors in the engineering program",
          ],
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
          title: "Back-end Senior Engineer",
          period: "2023 - 2024",
          description: [
            "Enhance e-commerce presence for a major brand by developing and deploying 50+ production-ready APIs with comprehensive testing and documentation along with a formal integration to the existing platform",
          ],
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
          period: "2021 - 2023",
          description: [
            "Modernize a desktop application for an investment firm, increasing service delivery speed by 40% while implementing robust SDK integration for streamlined authentication and efficient searching with intuitive navigation",
            "Developed comparative proof-of-concept applications using Glue42 and Openfin, conducting performance benchmarking across scalability, reliability, and cost metrics that enabled client to make data-driven vendor selection, resulting in annual savings on technology contracts",
          ],
          skills: [
            "Angular",
            "TypeScript",
            "Node.js",
            "Electron",
            "Glue42",
            "Microsoft Azure",
          ],
        },
      ],
    },
    {
      company: "Crestron Electronics",
      period: "2020 - 2020",
      positions: [
        {
          title: "Software Engineering Intern",
          period: "2020 - 2020",
          description: [
            "Developed efficient smart home drivers in C# for latest audiovisual systems, TVs, and security systems integrated with Crestron's control platforms",
            "Examined codebase quality using the company's Java/C# framework and supported the security test environment",
            "Collaborated with quality engineering teams on regression testing and analysis for smart home drivers and control systems pre-release",
          ],
          skills: ["C#"],
        },
      ],
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
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {exp.positions.map((position, positionIndex) => (
                        <div
                          key={positionIndex}
                          className={positionIndex > 0 ? "border-t pt-6" : ""}
                        >
                          <div className="mb-3">
                            <h4 className="font-semibold text-foreground">
                              {position.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {position.period}
                            </p>
                          </div>
                          <ul className="mb-4 space-y-2 text-muted-foreground">
                            {position.description.map((bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start"
                              >
                                <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {position.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
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
