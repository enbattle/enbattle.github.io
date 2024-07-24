import React from "react";
import NeomorphicCard from "../common/NeomorphicCard";
import Button from "../common/ToggleButton";
import { motion, AnimatePresence } from "framer-motion";

const EducationSection: React.FC<{
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
      <NeomorphicCard title="Education" content="Somewhere in New York">
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
            <NeomorphicCard
              title={`"Made some of the best friends ever."`}
              content=""
            >
              <img
                src="./rpi-icon.png"
                alt="School Logo"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                  boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
                }}
              />
              <p>Rensselaer Polytechnic Institute</p>
              <p>Troy, NY, USA</p>
              <p>
                Bachelor of Science (BS), Computer Science and Information
                Technology & Web Science
              </p>
            </NeomorphicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationSection;
