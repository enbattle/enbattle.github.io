import React from "react";
import { ChakraProvider, Box, theme, Divider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Education from "./components/education";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

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
        <Box fontWeight={200} minHeight="80vh">
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
        </Box>

        <Divider/>

        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
