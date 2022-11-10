import "./education.css";
import { Box, Text, SlideFade, Image, Spinner } from "@chakra-ui/react";
import RpiCampus from "../../assets/rpi-quad-campus.jpg";
import RpiIcon from "../../assets/rpi-icon.png";
import React from "react";

interface IEducationParameters {
  currentSection: string
}

interface IImageLoaded {
  [key: string] : boolean
}

const Education = ({currentSection}: IEducationParameters) => {
  const shouldOpen = currentSection === "Education" ? true : false;
  const [imagesLoaded, setImagesLoaded] = React.useState<IImageLoaded>({
    "school-image": false,
    "school-icon": false
  });

  return (
    <SlideFade in={shouldOpen}>
      <Box className="education-section morph-bg">
        { !imagesLoaded["school-image"] &&
          <Box className="d-flex justify-content-center">
            <Spinner/>
          </Box>
        }
        <Image
          onLoad={() => {
            setImagesLoaded((loaded) => {
              return { ...loaded, "school-image": true };
            });
          }}
          display={imagesLoaded["school-image"] ? "block" : "none"}
          className="education-school-image"
          src={RpiCampus}
          alt={"RPI Campus Quad Student Dormitory"}
        />
        { !imagesLoaded["school-icon"] &&
          <Box className="d-flex justify-content-center">
            <Spinner/>
          </Box>
        }
        <Image
          onLoad={() => {
            setImagesLoaded((loaded) => {
              return { ...loaded, "school-icon": true };
            });
          }}
          display={imagesLoaded["school-icon"] ? "block" : "none"}
          className="education-school-icon"
          src={RpiIcon}
          alt="RPI Banner"
        />
        <Text className="education-text">
          Rensselaer Polytechnic Institute <br/>
          Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major
        </Text>
      </Box>
    </SlideFade>
  );
}

export default Education;