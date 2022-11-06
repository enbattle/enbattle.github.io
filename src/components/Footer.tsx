import { Text, Box } from "@chakra-ui/react";
import Computer from "./threejs/computer";

const Footer = () => {
  return (
    <Box m="3vw" display="flex" alignSelf="center" justifyContent="center">
      <Computer height="15vh" width="10vw"/>
      <Text alignSelf="center" marginLeft="1rem">Built using React, Chakra UI, and ThreeJS. &#x1F601;</Text>
    </Box>
  );
}

export default Footer;
