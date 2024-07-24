// app/components/ProjectCard.tsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #e0e0e0;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h4 {
    margin: 10px 0 0;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;

    span {
      background: #e0e0e0;
      border-radius: 10px;
      box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
      padding: 5px 10px;
      margin: 5px;
      font-size: 0.9rem;
      color: #666;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    a {
      background: #e0e0e0;
      border-radius: 10px;
      box-shadow: 6px 6px 12px #bebebe, -6px -8px 12px #ffffff;
      padding: 10px 20px;
      margin: 5px;
      color: #0073e6;
      text-decoration: none;
      font-size: 1rem;
      text-align: center;
      transition: color 0.3s, transform 0.2s;

      &:hover {
        transform: scale(1.1);
        color: #005bb5;
      }

      &:active {
        box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h4 {
      font-size: 1.2rem;
    }

    .badges span {
      font-size: 0.8rem;
    }

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h4 {
      font-size: 1rem;
    }

    .badges span {
      font-size: 0.7rem;
    }

    a {
      font-size: 0.8rem;
    }
  }
`;

const ProjectCard: React.FC<{
  imageSrc: string;
  title: string;
  technologies: string[];
  sourceCodeLink: string;
  appLink: string;
}> = ({ imageSrc, title, technologies, sourceCodeLink, appLink }) => (
  <Card>
    <img src={imageSrc} alt={title} />
    <h4>{title}</h4>
    <div className="badges">
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
    <div className="links">
      <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
        Source Code
      </a>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        App Site
      </a>
    </div>
  </Card>
);

export default ProjectCard;
