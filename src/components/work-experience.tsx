import {
  Image,
  Box,
  Text,
  SlideFade,
  Grid,
  GridItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from "@chakra-ui/react";
import { SectionStyles } from "../App";
import AccentureLogo from "../assets/accenture-logo.jpg";
import KeybankLogo from "../assets/keybank-logo.jpg";
import CrestronLogo from "../assets/crestron-logo.jpg";

interface IWorkExperienceParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const gridItemStyles = {
  colSpan: 12,
  border: "1px",
  borderColor: "gray",
  borderRadius: "1rem"
}

const WorkExperience = ({currentSection, sectionStyles}: IWorkExperienceParameters) => {
  const shouldOpen = currentSection === "WorkExperience" ? true : false;

  return ( 
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Text fontSize="2rem" fontWeight="bold" mb="2vh">Work Experience</Text>

        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={8}
          display="grid"
        >
          <GridItem {...gridItemStyles}>
            <Box p="2rem" maxW="100%" borderWidth="2px" borderRadius="lg" borderColor="gray.500" overflow="hidden" display="flex">
              <Image h="10rem" width="20rem" borderRadius="lg" src={AccentureLogo} alt="Accenture Logo"/>
              <Text p="2rem" alignSelf="center">
                Accenture <br/>
                Advanced Application Engineering Senior Analyst (May 2022 - Current) <br/>
                Advanced Application Engineering Analyst (July 2021 - May 2022) <br/>
                New York, New York, United States
              </Text>
            </Box>
          </GridItem>

          <GridItem id="experience2" {...gridItemStyles}>
            <Popover 
              onOpen={() => {
                if(document.getElementById("experience2")) {
                  document.getElementById("experience2")!.style.backgroundColor = "skyblue";
                }
              }}
              onClose={() => {
                if(document.getElementById("experience2")) {
                  document.getElementById("experience2")!.style.backgroundColor = "transparent";
                }
              }}
            >
              <PopoverTrigger>
                <Box p="2rem" maxW="100%" borderWidth="2px" borderRadius="lg" borderColor="gray.500" overflow="hidden" display="flex">
                  <Image h="10rem" width="20rem" borderRadius="lg" src={KeybankLogo} alt="Keybank Logo"/>
                  <Text p="2rem" alignSelf="center">
                    Keybank <br/>
                    Data Architect Intern (June 2020 - August 2020) <br/>
                    Albany, New York, United States
                  </Text>
                </Box>
              </PopoverTrigger>

              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Keybank Internship</PopoverHeader>
                <PopoverBody>
                  <Text mb="1vh">
                    &#9758; Utilized Tableau to create data models and data visualizations for enterprise data, accelerating database operation efficiency of departments.
                  </Text>
                  <Text>
                    &#9758; Improved data source retrieval time of enterprise data through the restructuring of SQL queries.
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>

          <GridItem id="experience3" {...gridItemStyles}>
            <Popover
              onOpen={() => {
                if(document.getElementById("experience3")) {
                  document.getElementById("experience3")!.style.backgroundColor = "skyblue";
                }
              }} 
              onClose={() => {
                if(document.getElementById("experience3")) {
                  document.getElementById("experience3")!.style.backgroundColor = "transparent";
                }
              }}
            >
              <PopoverTrigger>
                <Box p="2rem" maxW="100%" borderWidth="2px" borderRadius="lg" borderColor="gray.500" overflow="hidden" display="flex">
                  <Image h="10rem" width="20rem" borderRadius="lg" src={CrestronLogo} alt="Crestron Logo"/>
                  <Text p="2rem" alignSelf="center">
                    Crestron Electronics <br/>
                    Software Engineering Intern (January 2020 - June 2020) <br/>
                    Rockleigh, New Jersey, United States
                  </Text>
                </Box>
              </PopoverTrigger>

              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Crestron Electronics Internship</PopoverHeader>
                <PopoverBody>
                  <Text mb="1vh">&#9758; Developed efficient smart home drivers in C# for latest audio/video players, televisions, and security systems to be integrated with Crestron’s control systems.</Text>
                  <Text mb="1vh">&#9758; Revamped current security system drivers with a new security framework and assisted with the security test environment.</Text>
                  <Text>&#9758; Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems prior to application release.</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>

        </Grid>
      </Box>
    </SlideFade>
  );
}

export default WorkExperience;