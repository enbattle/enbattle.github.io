import "./footer.css";
import { Text, Box } from "@chakra-ui/react";
import Computer from "../threejs/computer";

const Footer = () => {
  return (
    <Box className="footer-section">
      <Computer height="15vh" width="10vw"/>
      <Text className="footer-text">Built using React, Chakra UI, and ThreeJS. &#x1F601;</Text>
    </Box>
  );
}

export default Footer;
