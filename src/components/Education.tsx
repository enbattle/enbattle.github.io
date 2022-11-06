import { Box, Text, SlideFade, Image } from "@chakra-ui/react";
import { SectionStyles } from "../App";
import RpiCampus from "../assets/rpi-quad-campus.jpg";
import RpiIcon from "../assets/rpi-icon.png";

interface IEducationParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const Education = ({currentSection, sectionStyles}: IEducationParameters) => {
  const shouldOpen = currentSection === "Education" ? true : false;

  return (
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Text fontSize="2rem" fontWeight="bold" mb="1vh">Education</Text>
        <Image marginY="2rem" src={RpiCampus} alt={"RPI Campus Quad Student Dormitory"}/>
        <Box display="flex">
          <Image width="5rem" marginRight="1rem" src={RpiIcon} alt="RPI Banner"/>
          <Text fontWeight={200} alignSelf="center">
            Rensselaer Polytechnic Institute <br/>
            Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major
          </Text>
        </Box>
      </Box>
    </SlideFade>
  );
}

export default Education;