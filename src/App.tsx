import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, Box, theme, Divider } from "@chakra-ui/react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Education from "./components/education/education";
import WorkExperience from "./components/work-experience/work-experience";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

/** 
 * Chakra UI uses Emotion CSS as it's styling solution, so to get the styles to load earlier (before our own CSS files),
 * we need to use Emotion's CacheProvider and load the styles earlier 
*/
const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

function App() {
  const [currentSection, setCurrentSection] = React.useState<string>("Home");

  return (
    <CacheProvider value={emotionCache}>
      <Box id="main" role="main">
        <ChakraProvider theme={theme}>
          <Box className="section-common">
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <Box className="section-spacing">
              { 
                currentSection === "Home" &&
                <Home currentSection={currentSection} />
              }
              {
                currentSection === "Education" &&
                <Education currentSection={currentSection}/>
              }
              {
                currentSection === "WorkExperience" &&
                <WorkExperience currentSection={currentSection}/>
              }
              {
                currentSection === "Projects" &&
                <Projects currentSection={currentSection}/>
              }
            </Box>
          </Box>

          <Divider className="divider--thick"/>

          <Footer/>
        </ChakraProvider>
      </Box>
    </CacheProvider>
  );
}

export default App;
