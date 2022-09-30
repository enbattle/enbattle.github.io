import { 
  Box,
  Text,
  SlideFade,
  Grid,
  GridItem,
  Image,
  Link
} from "@chakra-ui/react";
import { SectionStyles } from "../App";
import PathfindingVisualizer from "../assets/pathfinding-visualizer-project.png";

interface IProjectParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const gridItemStyles = {
  minHeight: "20vh",
  colSpan: 12,
  border: "1px",
  borderColor: "gray",
  borderRadius: "1rem"
}

const Projects = ({currentSection, sectionStyles}: IProjectParameters) => {
  const shouldOpen = currentSection === "Projects" ? true : false;

  return ( 
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Text fontSize={"2rem"} fontWeight={"bold"} mb="2vh">Projects</Text>

        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={8}
          display={"grid"}
        >
          <GridItem {...gridItemStyles}>
            <Box p={10}>
              <Image src={PathfindingVisualizer} alt="Pathfinding Visualizer front page"/>
              <Text textAlign="center" mt="1vh" fontSize="2rem">
                <Link href='https://enbattle.github.io/pathfinding-visualizer' isExternal>Pathfinding Visualizer</Link>
              </Text>
            </Box>
          </GridItem>

        </Grid>
      </Box>
    </SlideFade>
  );
}

export default Projects;