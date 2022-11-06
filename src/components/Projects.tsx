import { 
  Box,
  SlideFade
} from "@chakra-ui/react";
import { SectionStyles } from "../App";
import PathfindingVisualizer from "../assets/pathfinding-visualizer-project.png";
import Card from "../util/card";

interface IProjectParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const Projects = ({currentSection, sectionStyles}: IProjectParameters) => {
  const shouldOpen = currentSection === "Projects" ? true : false;

  return ( 
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Card
          title={"Pathfinding Visualizer"}
          imageUrl={PathfindingVisualizer}
          imageAlt={"Pathfinding visualize front page image"}
          technologies={["React", "Typescript"]}
          sourceCodeHref={"https://github.com/enbattle/pathfinding-visualizer"}
          appSiteHref={"https://enbattle.github.io/pathfinding-visualizer/"}
        />
      </Box>
    </SlideFade>
  );
}

export default Projects;