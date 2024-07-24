import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSection from "./components/profile/ProfileSection";
import EducationSection from "./components/education/EducationSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import WorkExperienceSection from "./components/work-experience/WorkExperienceSection";
import AboutMeSection from "./components/about-me/AboutMeSection";
import Computer from "./components/threejs/Computer";

const HomePage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const handleBack = () => {
    setExpandedSection(null);
    setIsProfileExpanded(true); // Show all sections including profile
  };

  const handleProfileToggle = () => {
    setIsProfileExpanded(!isProfileExpanded);
    if (isProfileExpanded) {
      setExpandedSection(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Computer />
      <AnimatePresence>
        {!isProfileExpanded && (
          <ProfileSection
            onToggle={handleProfileToggle}
            isExpanded={isProfileExpanded}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isProfileExpanded && !expandedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ProfileSection
              onToggle={handleProfileToggle}
              isExpanded={isProfileExpanded}
            />
            <AboutMeSection
              isVisible={expandedSection === null}
              onBack={handleBack}
              onExpand={() => setExpandedSection("aboutMe")}
              isExpanded={expandedSection === "aboutMe"}
            />
            <EducationSection
              isVisible={expandedSection === null}
              onBack={handleBack}
              onExpand={() => setExpandedSection("education")}
              isExpanded={expandedSection === "education"}
            />
            <ProjectsSection
              isVisible={expandedSection === null}
              onBack={handleBack}
              onExpand={() => setExpandedSection("projects")}
              isExpanded={expandedSection === "projects"}
            />
            <WorkExperienceSection
              isVisible={expandedSection === null}
              onBack={handleBack}
              onExpand={() => setExpandedSection("workExperience")}
              isExpanded={expandedSection === "workExperience"}
            />
          </motion.div>
        )}
        {expandedSection === "aboutMe" && (
          <AboutMeSection
            isVisible
            onBack={() => {
              setExpandedSection(null);
              setIsProfileExpanded(true);
            }}
            onExpand={() => setExpandedSection("aboutMe")}
            isExpanded={true}
          />
        )}
        {expandedSection === "education" && (
          <EducationSection
            isVisible
            onBack={() => {
              setExpandedSection(null);
              setIsProfileExpanded(true);
            }}
            onExpand={() => setExpandedSection("education")}
            isExpanded={true}
          />
        )}
        {expandedSection === "projects" && (
          <ProjectsSection
            isVisible
            onBack={() => {
              setExpandedSection(null);
              setIsProfileExpanded(true);
            }}
            onExpand={() => setExpandedSection("projects")}
            isExpanded={true}
          />
        )}
        {expandedSection === "workExperience" && (
          <WorkExperienceSection
            isVisible
            onBack={() => {
              setExpandedSection(null);
              setIsProfileExpanded(true);
            }}
            onExpand={() => setExpandedSection("workExperience")}
            isExpanded={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
