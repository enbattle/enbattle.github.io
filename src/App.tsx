import React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import BouncingField from "./components/BouncingField";
import Footer from "./components/Footer";

export interface SectionStyles {
  mt: string,
  mb: string,
  mx: string
}

const sectionStyles: SectionStyles = {
  mt: "1vh",
  mb: "5vh",
  mx: "20vw"
}

function App() {
  const [currentSection, setCurrentSection] = React.useState<string>("Home");

  return (
    <div id="main" role="main">
      <ChakraProvider theme={theme}>
        {/* <Logo h="40vmin" pointerEvents="none" /> */}
        <BouncingField/>

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
          {
            currentSection === "Projects" &&
            <Projects currentSection={currentSection} sectionStyles={sectionStyles} />
          }
          <Footer/>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
