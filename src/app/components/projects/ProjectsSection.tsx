// app/components/ProjectsSection.tsx
import React from "react";
import NeomorphicCard from "../common/NeomorphicCard";
import Button from "../common/ToggleButton";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<{
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
      <NeomorphicCard title="My Projects" content="My code and tea time">
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
              <ProjectCard
                imageSrc="./pathfinding-visualizer-project.png"
                title="Pathfinding Visualizer"
                technologies={["React", "Typescript"]}
                sourceCodeLink="https://github.com/enbattle/pathfinding-visualizer"
                appLink="https://enbattle.github.io/pathfinding-visualizer/"
              />
              <ProjectCard
                imageSrc="./scroll-animations-project.png"
                title="JavaScript Modern Scroll Animations"
                technologies={["SolidJS", "Typescript"]}
                sourceCodeLink="https://github.com/enbattle/javascript-scroll-animations"
                appLink="https://enbattle.github.io/javascript-scroll-animations/"
              />
            </NeomorphicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSection;
