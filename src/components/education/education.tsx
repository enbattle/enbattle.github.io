import "./education.css";
import { Box, Text, SlideFade, Image } from "@chakra-ui/react";
import RpiCampus from "../../assets/rpi-quad-campus.jpg";
import RpiIcon from "../../assets/rpi-icon.png";

interface IEducationParameters {
  currentSection: string
}

const Education = ({currentSection}: IEducationParameters) => {
  const shouldOpen = currentSection === "Education" ? true : false;

  return (
    <SlideFade in={shouldOpen}>
      <Box className="education-section morph-bg">
        <Image className="education-school-image" src={RpiCampus} alt={"RPI Campus Quad Student Dormitory"}/>
        <Image className="education-school-icon" src={RpiIcon} alt="RPI Banner"/>
        <Text className="education-text">
          Rensselaer Polytechnic Institute <br/>
          Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major
        </Text>
      </Box>
    </SlideFade>
  );
}

export default Education;