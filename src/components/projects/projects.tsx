import "./projects.css";
import { 
  Box,
  SlideFade
} from "@chakra-ui/react";
import PathfindingVisualizer from "../../assets/pathfinding-visualizer-project.png";
import ScrollAnimations from "../../assets/scroll-animations.png";
import Card from "../../util/card";

interface IProjectParameters {
  currentSection: string
}

const Projects = ({currentSection}: IProjectParameters) => {
  const shouldOpen = currentSection === "Projects" ? true : false;

  return ( 
    <SlideFade in={shouldOpen}>
      <Box className="projects-section">
        <Box className="projects-section--project-margins">
          <Card
            title={"Pathfinding Visualizer"}
            imageUrl={PathfindingVisualizer}
            imageAlt={"Pathfinding visualize front page image"}
            technologies={["React", "Typescript"]}
            sourceCodeHref={"https://github.com/enbattle/pathfinding-visualizer"}
            appSiteHref={"https://enbattle.github.io/pathfinding-visualizer/"}
          />
        </Box>
        <Box>
          <Card
            title={"JavaScript Modern Scroll Animations"}
            imageUrl={ScrollAnimations}
            imageAlt={"JavaScript scroll animations front page image"}
            technologies={["SolidJS", "Typescript"]}
            sourceCodeHref={"https://github.com/enbattle/javascript-scroll-animations"}
            appSiteHref={"https://enbattle.github.io/javascript-scroll-animations/"}
          />
        </Box>
      </Box>
    </SlideFade>
  );
}

export default Projects;