import React from "react";
import NeomorphicCard from "../common/NeomorphicCard";
import Button from "../common/ToggleButton";
import { FaEnvelope, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const IconWrapper = styled.a`
  color: #333;
  margin: 0 15px;
  font-size: 2rem;
  padding: 10px 10px 0px 10px;
  border-radius: 99%;
  background: #e0e0e0;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: ${({ color }) => color};
  }

  &:active {
    box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  }
`;

const ProfileSection: React.FC<{
  onToggle: () => void;
  isExpanded: boolean;
}> = ({ onToggle, isExpanded }) => (
  <NeomorphicCard
    title="Steven Li"
    content="Trying to force code to work overtime without extra pay."
  >
    <IconsContainer>
      <IconWrapper
        href="mailto:listeven6691@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        color="#d44638"
      >
        <FaEnvelope />
      </IconWrapper>
      <IconWrapper
        href="https://www.linkedin.com/in/stevenli44"
        target="_blank"
        rel="noopener noreferrer"
        color="#0073b1"
      >
        <FaLinkedin />
      </IconWrapper>
      <IconWrapper
        href="https://www.facebook.com/stevenli44"
        target="_blank"
        rel="noopener noreferrer"
        color="#4267b2"
      >
        <FaFacebook />
      </IconWrapper>
      <IconWrapper
        href="https://www.github.com/enbattle"
        target="_blank"
        rel="noopener noreferrer"
        color="#6e5494"
      >
        <FaGithub />
      </IconWrapper>
    </IconsContainer>
    <Button onClick={onToggle} $isExpanded={isExpanded}>
      {isExpanded ? "Back" : "Browse"}
    </Button>
  </NeomorphicCard>
);

export default ProfileSection;
