import React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import BouncingField from "./components/BouncingField";

const sectionStyles = {
  mt: "1vh",
  mb: "5vh",
  mx: "20vw"
}

function App() {
  const [currentSection, setCurrentSection] = React.useState("Home");

  return (
    <ChakraProvider theme={theme}>
      {/* <Logo h="40vmin" pointerEvents="none" /> */}
      <Box fontWeight={200}>
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        { 
          currentSection === "Home" &&
          <Home currentSection={currentSection} sectionStyles={sectionStyles} />
        }
        {
          currentSection === "Education" &&
          <Education currentSection={currentSection} sectionStyles={sectionStyles} />
        }
        {
          currentSection === "WorkExperience" &&
          <WorkExperience currentSection={currentSection} sectionStyles={sectionStyles} />
        }
        <BouncingField/>

        <Box m={"5vw"} align={"center"} justify={"center"}>
          Built using React, Chakra UI, and ThreeJS.
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
