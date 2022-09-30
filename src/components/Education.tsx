import { Box, Text, SlideFade } from "@chakra-ui/react";
import { SectionStyles } from "../App";

interface IEducationParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const Education = ({currentSection, sectionStyles}: IEducationParameters) => {
  const shouldOpen = currentSection === "Education" ? true : false;

  return (
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Box>
          <Text fontSize={"2rem"} fontWeight={"bold"} mb="1vh">Education</Text>
          <Text fontWeight={200}>
            Rensselaer Polytechnic Institute <br/>
            Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major
          </Text>
        </Box>
      </Box>
    </SlideFade>
  );
}

export default Education;