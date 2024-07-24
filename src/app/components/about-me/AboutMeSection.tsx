// app/components/AboutMeSection.tsx
import React from "react";
import NeomorphicCard from "../common/NeomorphicCard";
import Button from "../common/ToggleButton";
import { motion, AnimatePresence } from "framer-motion";

const AboutMeSection: React.FC<{
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
      <NeomorphicCard
        title="About Me"
        content="Developer, Designer, Dancer, Down-for-food"
      >
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
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NeomorphicCard
              title={`"Shoot for the moon. Even if you miss, you'll land among the stars."`}
              content=""
            >
              <p>
                Steven completed his undergraduate study with a dual degree in
                Computer Science and Information Technology & Web Science at
                Rensselaer Polytechnic Institute in 2021. Armed with an open
                mind, a creative drive, and an eagerness to learn, Steven
                willingly jumps to the challenge, with every step expanding his
                boundaries and opening new doors. With some many possibilities
                left unturned, who can sit still?
              </p>
              <p>
                For hobbies, Steven enjoys finding new programming projects to
                work on, finding ways to improve upon previous projects, or
                exploring new technologies. In the outdoors, Steven enjoys
                playing basketball, volleyball, tennis, rock climbing, and the
                occasional running-while-listening-to-music. Coming into
                college, Steven had joined a dance group and is now forever a
                fan of hip-hop and pop dances. Steven really loves cooking and
                eating, and he is trying out new flavor combinations and recipes
                in order to create good food for himself, his family, and his
                friends.
              </p>
            </NeomorphicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMeSection;
