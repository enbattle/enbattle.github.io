import React from "react";
import { Flex, Box, Link, useColorModeValue, Text, Icon, IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { AiFillMail, AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiFillProject, AiOutlineUser, AiFillHome } from "react-icons/ai";

const flexStyles = {
  justify: "start",
  align: "end"
}

const linkStyles = {
  p: 2,
  m: 2
}

const iconButtonStyles = {
  size: "md",
  fontSize: "lg",
  variant: "ghost",
  color:"current",
  m: 3
}

const Navbar = ({currentSection, setCurrentSection}) => {
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")

  const toggleEvent = (event, newSection) => {
    event.preventDefault();
    setCurrentSection(newSection);
  }
  
  return (
    <Box>
      <Flex>

        {/* Home, Bio, and Work Experience Links (shown on bigger screens) */}
        <Flex ml={"4.75vw"} flex={9} display={{ base: "none", md: "flex" }} {...flexStyles}>
          <Link
            style={{textDecoration: "none"}}
            onClick={(event) => toggleEvent(event, "Home")}
            rel="noopener noreferrer"
            {...linkStyles}
          >
            <Text fontSize={"2vw"} fontWeight={500}>Steven Li</Text>
          </Link>
          <Link
            onClick={(event) => toggleEvent(event, "Education")}
            bg={currentSection === "Education" ? "#99ff99" : "transparent"}
            color={currentSection === "Education" ? "#202023" : inactiveColor}
            rel="noopener noreferrer"
            {...linkStyles}
          >
            <Text fontSize={"1.5vw"} fontWeight={250}>Education</Text>
          </Link>
          <Link 
            onClick={(event) => toggleEvent(event, "WorkExperience")}
            bg={currentSection === "WorkExperience" ? "#99ff99" : "transparent"}
            color={currentSection === "WorkExperience" ? "#202023" : inactiveColor}
            rel="noopener noreferrer"
            {...linkStyles}
          >
            <Text fontSize={"1.5vw"} fontWeight={250}>Work Experience</Text>
          </Link>
        </Flex>

        {/* Contact Icons (shown on bigger screens) */}
        <Flex mr={"5vw"} flex={3} display={{ base: "none", md: "flex" }} {...flexStyles}>
          <IconButton
            {...iconButtonStyles}
            onClick={() => {
              window.open("mailto:listeven6691@gmail.com");
            }}
            aria-label={"Button that opens up default mail app to send an email to Steven"}
            icon={<Icon boxSize={6} as={AiFillMail}/>}
          />

          <IconButton
            {...iconButtonStyles}
            aria-label={"Button that opens Steven's LinkedIn profile"}
            onClick={() => {
              window.open("https://www.linkedin.com/in/stevenli44");
            }}
            icon={<Icon boxSize={6} as={AiFillLinkedin}/>}
          />

          <IconButton
            {...iconButtonStyles}
            aria-label={"Button that opens Steven's Facebook profile"}
            onClick={() => {
              window.open("https://www.facebook.com/stevenli44");
            }}
            icon={<Icon boxSize={6} as={AiFillFacebook}/>}
          />

          <IconButton
            {...iconButtonStyles}
            aria-label={"Button that opens Steven's GitHub profile"}
            onClick={() => {
              window.open("https://www.github.com/enbattle");
            }}
            icon={<Icon boxSize={6} as={AiFillGithub}/>}
          />
        </Flex>

        {/* Small screen menu (replaces links and icons on small screens) */}
        <Flex ml={"10vw"} flex={9} display={{ base: "inline-flex", md: "none" }} {...flexStyles}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={AiOutlineMenu} />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                icon={<Icon boxSize={6} as={AiOutlineUser}/>}
                onClick={(event) => toggleEvent(event, "Home")}
              >
                Steven Li
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillHome}/>}
                onClick={(event) => toggleEvent(event, "Education")}             
                bg={currentSection === "Education" ? "#99ff99" : "transparent"}
                color={currentSection === "Education" ? "#202023" : inactiveColor}
              >
                Education
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillProject}/>}
                onClick={(event) => toggleEvent(event, "WorkExperience")}
                bg={currentSection === "WorkExperience" ? "#99ff99" : "transparent"}
                color={currentSection === "WorkExperience" ? "#202023" : inactiveColor}
              >
                Work Experience
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillMail}/>}
                onClick={() => {
                  window.open("mailto:listeven6691@gmail.com");
                }}
              >
                Email
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillLinkedin}/>}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/stevenli44");
                }}
              >
                LinkedIn
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillFacebook}/>}
                onClick={() => {
                  window.open("https://www.facebook.com/stevenli44");
                }}
              >
                Facebook
              </MenuItem>
              <MenuItem
                icon={<Icon boxSize={6} as={AiFillGithub}/>}
                onClick={() => {
                  window.open("https://www.github.com/enbattle");
                }}
              >
                GitHub
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* Color Theme Toggle (always shows) */}
        <Flex flex={3} {...flexStyles}>
          <ColorModeSwitcher/>
        </Flex>

      </Flex>
    </Box>
  );
}

export default Navbar;