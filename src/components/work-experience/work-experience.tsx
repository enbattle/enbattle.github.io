import "./work-experience.css";
import {
  Image,
  Box,
  Text,
  SlideFade,
  Grid,
  GridItem,
  Spinner
} from "@chakra-ui/react";
import AccentureLogo from "../../assets/accenture-logo.jpg";
import KeybankLogo from "../../assets/keybank-logo.jpg";
import CrestronLogo from "../../assets/crestron-logo.jpg";
import React from "react";

interface IWorkExperienceParameters {
  currentSection: string
}

interface IImageLoaded {
  [key: string] : boolean
}

const WorkExperience = ({currentSection}: IWorkExperienceParameters) => {
  const shouldOpen = currentSection === "WorkExperience" ? true : false;
  const [imagesLoaded, setImagesLoaded] = React.useState<IImageLoaded>({
    "accenture-image": false,
    "keybank-image": false,
    "crestron-image": false
  });

  return ( 
    <SlideFade in={shouldOpen}>
      <Box className="work__experience-section">
        <Grid className="work__experience-grid">

          <GridItem className="flip-card">
            <Box className="flip-card-inner morph-bg">
              <Box className="flip-card-front d-flex justify-content-center align-items-center">
                <Box>
                  {!imagesLoaded["accenture-image"] &&
                    <Box className="d-flex justify-content-center">
                      <Spinner/>
                    </Box>
                  }
                  <Image
                    onLoad={() => {
                      setImagesLoaded((loaded) => {
                        return { ...loaded, "accenture-image": true };
                      });
                    }}
                    display={imagesLoaded["accenture-image"] ? "block" : "none"}
                    className="work__experience-grid--image"
                    src={AccentureLogo}
                    alt="Accenture Logo"
                  />
                  <Text className="work__experience-grid--text__p text-center">
                    Accenture <br/>
                    Advanced Application Engineering Senior Analyst (May 2022 - Current) <br/>
                    Advanced Application Engineering Analyst (July 2021 - May 2022) <br/>
                    New York, New York, United States
                  </Text>
                </Box>
              </Box>
              <Box className="flip-card-back reverse-morph-bg d-flex justify-content-center align-items-center">
                <Text className="work__experience-grid--title">Details coming soon! &#x1F913;</Text>
              </Box>
            </Box>
          </GridItem>

          <GridItem className="flip-card">
            <Box className="flip-card-inner morph-bg">
              <Box className="flip-card-front d-flex justify-content-center align-items-center">
                <Box>
                  {!imagesLoaded["keybank-image"] &&
                    <Box className="d-flex justify-content-center">
                      <Spinner/>
                    </Box>
                  }
                  <Image
                    onLoad={() => {
                      setImagesLoaded((loaded) => {
                        return { ...loaded, "keybank-image": true };
                      });
                    }}
                    display={imagesLoaded["keybank-image"] ? "block" : "none"}
                    className="work__experience-grid--image"
                    src={KeybankLogo}
                    alt="Keybank Logo"
                  />
                  <Text className="work__experience-grid--text__p text-center">
                    Keybank <br/>
                    Data Architect Intern (June 2020 - August 2020) <br/>
                    Albany, New York, United States
                  </Text>
                </Box>
              </Box>
              <Box className="flip-card-back reverse-morph-bg d-flex justify-content-center align-items-center">
                <Box>
                  <Text className="work__experience-grid--title work__experience-grid--title__mb">Keybank Internship</Text>
                  <Text className="work__experience-grid--text__px work__experience-grid--text__mb">&#9758; Utilized Tableau to create data models and data visualizations for enterprise data, accelerating database operation efficiency of departments.</Text>
                  <Text className="work__experience-grid--text__px">&#9758; Improved data source retrieval time of enterprise data through the restructuring of SQL queries.</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem className="flip-card">
            <Box className="flip-card-inner morph-bg">
              <Box className="flip-card-front d-flex justify-content-center align-items-center">
                <Box>
                  {!imagesLoaded["crestron-image"] &&
                    <Box className="d-flex justify-content-center">
                      <Spinner/>
                    </Box>
                  }
                  <Image
                    onLoad={() => {
                      setImagesLoaded((loaded) => {
                        return { ...loaded, "crestron-image": true };
                      });
                    }}
                    display={imagesLoaded["crestron-image"] ? "block" : "none"}
                    className="work__experience-grid--image"
                    src={CrestronLogo}
                    alt="Crestron Logo"
                  />
                  <Text className="work__experience-grid--text__p text-center">
                    Crestron Electronics <br/>
                    Software Engineering Intern (January 2020 - June 2020) <br/>
                    Rockleigh, New Jersey, United States
                  </Text>
                </Box>
              </Box>
              <Box className="flip-card-back reverse-morph-bg d-flex justify-content-center align-items-center">
                <Box>
                  <Text className="work__experience-grid--title work__experience-grid--title__mb">Crestron Electronics Internship</Text>
                  <Text className="work__experience-grid--text__px work__experience-grid--text__mb">&#9758; Developed efficient smart home drivers in C# for latest audio/video players, televisions, and security systems to be integrated with Crestron’s control systems.</Text>
                  <Text className="work__experience-grid--text__px work__experience-grid--text__mb">&#9758; Revamped current security system drivers with a new security framework and assisted with the security test environment.</Text>
                  <Text className="work__experience-grid--text__px">&#9758; Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems prior to application release.</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
          
        </Grid>
      </Box>
    </SlideFade>
  );
}

export default WorkExperience;