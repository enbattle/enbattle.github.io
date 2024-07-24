// app/components/WorkExperienceCard.tsx
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
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #666;
  }

  span {
    font-size: 0.9rem;
    color: #999;
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .details-left {
    text-align: left;
  }

  .details-right {
    text-align: right;
  }

  .role-details {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }

  .role-details li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #666;
  }

  .role-details li::before {
    content: "";
    display: inline-block;
    min-width: 10px;
    min-height: 10px;
    margin-right: 10px;
    background: #e0e0e0;
    border-radius: 50%;
    box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff;
  }

  .company-logo {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff;
    background-color: #ffffff;
    padding: 0.25rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 15px;

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.8rem;
    }

    .role-details li {
      font-size: 0.9rem;
    }

    .role-details li::before {
      width: 8px;
      height: 8px;
    }

    .company-logo {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.7rem;
    }

    .role-details li {
      font-size: 0.8rem;
    }

    .role-details li::before {
      width: 6px;
      height: 6px;
    }

    .company-logo {
      width: 30px;
      height: 30px;
    }
  }
`;

const WorkExperienceCard: React.FC<{
  companyName: string;
  roleTitle: string;
  startDate: string;
  endDate: string;
  city: string;
  roleDetails: string[];
  logoSrc: string;
}> = ({
  companyName,
  roleTitle,
  startDate,
  endDate,
  city,
  roleDetails,
  logoSrc,
}) => (
  <Card>
    <h4>{companyName}</h4>
    <img src={logoSrc} alt={`${companyName} logo`} className="company-logo" />
    <p style={{ textAlign: "center", fontWeight: "bold" }}>{roleTitle}</p>
    <ul className="role-details">
      {roleDetails.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
    <div className="details">
      <div className="details-left">
        <span>{city}</span>
      </div>
      <div className="details-right">
        <span>
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  </Card>
);

export default WorkExperienceCard;
