import { Box, Text, SlideFade } from "@chakra-ui/react";
import { SectionStyles } from "../App";

interface IHomeParameters {
  currentSection: string,
  sectionStyles: SectionStyles
}

const Home = ({currentSection, sectionStyles}: IHomeParameters) => {
  const shouldOpen = currentSection === "Home" ? true : false;

  return ( 
    <SlideFade in={shouldOpen}>
      <Box {...sectionStyles}>
        <Box>
          <Text fontSize="2rem" fontWeight="bold">Steven Li</Text>
          <Text mb="5vh">Developer / Designer / Dancer / Cook</Text>
          <Text fontSize="1rem" fontWeight={400} mb="1vh">About Me</Text>
          <Text mb="1vh">
            Steven completed his undergraduate study with a dual degree in Computer Science and Information 
            Technology &amp; Web Science at Rensselaer Polytechnic Institute in 2021. Armed with an open 
            mind, a creative drive, and an eagerness to learn, Steven willingly jumps to the challenge, 
            with every step expanding his boundaries and opening new doors. With some many possibilities 
            left unturned, who can sit still?
          </Text>
          <Text>
            For hobbies, Steven enjoys finding new programming projects to work on, or finding ways to 
            improve upon previous projects. In the outdoors, Steven enjoys playing basketball, volleyball, 
            tennis, and the occasional running-while-listening-to-music. Coming into college, Steven had 
            joined a dance group and is now forever a fan of hip-hop and pop dances. Steven really loves 
            cooking, and he is trying out new flavor combinations and recipes in order to create good food 
            for himself, his family, and his friends.
          </Text>
        </Box>
      </Box>
    </SlideFade>
  );
}

export default Home;