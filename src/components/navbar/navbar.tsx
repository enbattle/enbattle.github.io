import "./navbar.css";
import React from "react";
import { Flex, Box, Link, useColorModeValue, Text, Icon, IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { AiFillMail, AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiFillProject, AiOutlineUser, AiFillHome } from "react-icons/ai";

interface INavbarParameters {
  currentSection: string,
  setCurrentSection: (section: string) => void
}

const Navbar = ({currentSection, setCurrentSection}: INavbarParameters) => {
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  const toggleEvent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>, newSection: string) => {
    event.preventDefault();
    setCurrentSection(newSection);
  }
  
  return (
    <Box>
      <Flex>

        {/* Home, Bio, and Work Experience Links (shown on bigger screens) */}
        <Flex className="navbar-section-flex" display={{ base: "none", md: "flex" }}>
          <Link
            className="navbar-link"
            onClick={(event) => toggleEvent(event, "Home")}
            rel="noopener noreferrer"
          >
            <Text className="navbar-link--text__home">About Me</Text>
          </Link>
          <Link
            className="navbar-link"
            onClick={(event) => toggleEvent(event, "Education")}
            color={currentSection === "Education" ? "#E88702" : "none"}
            rel="noopener noreferrer"
          >
            <Text className="navbar-link--text">Education</Text>
          </Link>
          <Link
            className="navbar-link"
            onClick={(event) => toggleEvent(event, "WorkExperience")}
            color={currentSection === "WorkExperience" ? "#E88702" : "none"}
            rel="noopener noreferrer"
          >
            <Text className="navbar-link--text">Work Experience</Text>
          </Link>
          <Link
            className="navbar-link"
            onClick={(event) => toggleEvent(event, "Projects")}
            color={currentSection === "Projects" ? "#E88702" : "none"}
            rel="noopener noreferrer"
          >
            <Text className="navbar-link--text">Projects</Text>
          </Link>
        </Flex>

        {/* Contact Icons (shown on bigger screens) */}
        <Flex className="navbar-media-flex" display={{ base: "none", md: "flex" }}>
          <IconButton
            className="navbar-icon__media wobble-vertical-on-hover"
            onClick={() => {
              window.open("mailto:listeven6691@gmail.com");
            }}
            variant="ghost"
            aria-label={"Button that opens up default mail app to send an email to Steven"}
            icon={<Icon boxSize={6} as={AiFillMail}/>}
          />

          <IconButton
            className="navbar-icon__media wobble-vertical-on-hover"
            aria-label={"Button that opens Steven's LinkedIn profile"}
            onClick={() => {
              window.open("https://www.linkedin.com/in/stevenli44");
            }}
            variant="ghost"
            icon={<Icon boxSize={6} as={AiFillLinkedin}/>}
          />

          <IconButton
            className="navbar-icon__media wobble-vertical-on-hover"
            aria-label={"Button that opens Steven's Facebook profile"}
            onClick={() => {
              window.open("https://www.facebook.com/stevenli44");
            }}
            variant="ghost"
            icon={<Icon boxSize={6} as={AiFillFacebook}/>}
          />

          <IconButton
            className="navbar-icon__media wobble-vertical-on-hover"
            aria-label={"Button that opens Steven's GitHub profile"}
            onClick={() => {
              window.open("https://www.github.com/enbattle");
            }}
            variant="ghost"
            icon={<Icon boxSize={6} as={AiFillGithub}/>}
          />
        </Flex>

        {/* Small screen menu (replaces links and icons on small screens) */}
        <Flex className="navbar-menu-flex" display={{ base: "inline-flex", md: "none" }}>
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
        <Flex className="navbar-color__switcher-flex">
          <ColorModeSwitcher/>
        </Flex>

      </Flex>
    </Box>
  );
}

export default Navbar;