import "./footer.css";
import { Text, Box, Link } from "@chakra-ui/react";
import Computer from "../threejs/computer";

const Footer = () => {
  return (
    <Box className="footer-section">
      <Box className="footer-section--container">
        <Computer height="15vh" width="10vw"/>
      </Box>
      <Box className="footer-section--container">
        <Text className="footer-text">Built using {' '}
          <Link href="https://react.dev/" isExternal>React</Link>, {' '}
          <Link href="https://chakra-ui.com/" isExternal>Chakra UI</Link>, and {' '}
          <Link href="https://threejs.org/" isExternal>ThreeJS</Link>. &#x1F601;
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
