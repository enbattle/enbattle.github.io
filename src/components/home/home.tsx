import "./home.css";
import { Box, Text, SlideFade, Icon } from "@chakra-ui/react";
import { MdComputer } from "react-icons/md";
import { RiPencilRulerLine } from "react-icons/ri";
import { GiMusicalNotes, GiCookingPot } from "react-icons/gi";
import { useColorMode } from "@chakra-ui/react";

interface IHomeParameters {
  currentSection: string
}

const Home = ({currentSection}: IHomeParameters) => {
  const shouldOpen = currentSection === "Home" ? true : false;
  const { colorMode } = useColorMode();

  return ( 
    <SlideFade in={shouldOpen}>
      <Box className="home-section">
        <Text className="home-name">Steven Li</Text>
        <Text className="home-occupations">
          Developer <Icon as={MdComputer} className="wobble-vertical-on-hover" mx="0.5rem" color={ colorMode === "light" ? "#000000" : "#FFFFFF" } _hover={{ color: "#FF5733" }}/>
          / Designer <Icon as={RiPencilRulerLine} className="wobble-vertical-on-hover" mx="0.5rem" color={ colorMode === "light" ? "#000000" : "#FFFFFF" } _hover={{ color: "#FF5733" }}/>
          / Dancer <Icon as={GiMusicalNotes} className="wobble-vertical-on-hover" mx="0.5rem" color={ colorMode === "light" ? "#000000" : "#FFFFFF" } _hover={{ color: "#FF5733" }}/>
          / Cook <Icon as={GiCookingPot} className="wobble-vertical-on-hover" mx="0.5rem" color={ colorMode === "light" ? "#000000" : "#FFFFFF" } _hover={{ color: "#FF5733" }}/>
        </Text>
        <Text className="home-about">About Me</Text>
        <Text className="home-text home-text__mb">
          Steven completed his undergraduate study with a dual degree in Computer Science and Information 
          Technology &amp; Web Science at Rensselaer Polytechnic Institute in 2021. Armed with an open 
          mind, a creative drive, and an eagerness to learn, Steven willingly jumps to the challenge, 
          with every step expanding his boundaries and opening new doors. With some many possibilities 
          left unturned, who can sit still?
        </Text>
        <Text className="home-text">
          For hobbies, Steven enjoys finding new programming projects to work on, finding ways to 
          improve upon previous projects, or exploring new technologies. In the outdoors, Steven enjoys playing basketball, volleyball, 
          tennis, rock climbing, and the occasional running-while-listening-to-music. Coming into college, Steven had 
          joined a dance group and is now forever a fan of hip-hop and pop dances. Steven really loves 
          cooking, and he is trying out new flavor combinations and recipes in order to create good food 
          for himself, his family, and his friends.
        </Text>
      </Box>
    </SlideFade>
  );
}

export default Home;