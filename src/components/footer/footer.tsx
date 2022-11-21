import "./footer.css";
import { Text, Box } from "@chakra-ui/react";
import Computer from "../threejs/computer";

const Footer = () => {
  return (
    <Box className="footer-section">
      <Box className="footer-section--container">
        <Computer height="15vh" width="10vw"/>
      </Box>
      <Box className="footer-section--container">
        <Text className="footer-text">Built using React, Chakra UI, and ThreeJS. &#x1F601;</Text>
      </Box>
    </Box>
  );
}

export default Footer;
