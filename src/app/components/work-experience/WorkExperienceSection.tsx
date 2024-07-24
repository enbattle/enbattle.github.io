// app/components/WorkExperienceSection.tsx
import React from "react";
import NeomorphicCard from "../common/NeomorphicCard";
import Button from "../common/ToggleButton";
import { motion, AnimatePresence } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperienceSection: React.FC<{
  isVisible: boolean;
  onBack: () => void;
  onExpand: () => void;
  isExpanded: boolean;
}> = ({ isVisible, onBack, onExpand, isExpanded }) => {
  if (!isVisible && !isExpanded) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <NeomorphicCard title="Work Experience" content="My journey so far">
        <Button
          onClick={isExpanded ? onBack : onExpand}
          $isExpanded={isExpanded}
        >
          {isExpanded ? "Back" : "Browse"}
        </Button>
      </NeomorphicCard>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NeomorphicCard title="" content="">
              <WorkExperienceCard
                companyName="Accenture"
                roleTitle="Full Stack Engineering Lead"
                startDate="July 2021"
                endDate="Present"
                city="New York City, NY, USA"
                roleDetails={[
                  "Established a modern website and integration support for a commodity-focused client, migrating their data and assisting them in building a stronger e-commerce presence.",
                  "Managed a team of engineers to launch a gamification learning engine seamlessly integrated into growth and learning systems for both internal groups and external clients.",
                  "Modernized a desktop directory system for a financial institution, speeding up services provided to client-facing associates by more than 50%.",
                  "Managed instructors in a cloud-first group, teaching up-to-date full-stack engineering courses and learning programs to peers, promoting and building the full-stack engineering community within the company.",
                ]}
                logoSrc="./accenture-logo.jpg"
              />
              <WorkExperienceCard
                companyName="KeyBank"
                roleTitle="Data Architect Intern"
                startDate="June 2020"
                endDate="August 2020"
                city="Albany, NY, USA"
                roleDetails={[
                  "Utilized Tableau to create data models and visualizations for enterprise data, accelerating database operation efficiency by 20%.",
                  "Improved data source retrieval time of enterprise data by 25% by restructuring SQL queries.",
                ]}
                logoSrc="./keybank-logo.jpg"
              />
              <WorkExperienceCard
                companyName="Crestron Electronics"
                roleTitle="Software Engineering Intern"
                startDate="January 2020"
                endDate="June 2020"
                city="Rockleigh, NJ, USA"
                roleDetails={[
                  "Developed efficient smart home drivers in C# for the latest audio/video players, televisions, and security systems to be integrated with Crestron's control systems.",
                  "Revamped security system drivers with a new security framework and assisted with the security test environment.",
                  "Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems before application release.",
                ]}
                logoSrc="./crestron-logo.jpg"
              />
            </NeomorphicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkExperienceSection;
