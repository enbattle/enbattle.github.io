import styled from "styled-components";

const Card = styled.div`
  background: #e0e0e0;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 40px; /* Increased padding for a larger card */
  margin: 40px; /* Increased margin for better spacing */
  width: 600px; /* Increased width */
  height: auto; /* Increased height */
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin: 0;
    font-size: 2rem; /* Increased font size */
    color: #333;
    text-align: center;
  }

  p {
    margin: 10px 0 0;
    font-size: 1.2rem; /* Increased font size */
    color: #666;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjusted width for smaller screens */
    padding: 30px; /* Adjusted padding for smaller screens */

    h3 {
      font-size: 1.5rem; /* Adjusted font size */
    }

    p {
      font-size: 1rem; /* Adjusted font size */
    }
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
    margin: 20px; /* Adjusted margin for smaller screens */

    h3 {
      font-size: 1.2rem; /* Adjusted font size */
    }

    p {
      font-size: 0.9rem; /* Adjusted font size */
    }
  }
`;

const NeomorphicCard: React.FC<{
  title: string;
  content: string;
  children?: React.ReactNode;
}> = ({ title, content, children }) => (
  <Card>
    <h3>{title}</h3>
    <p>{content}</p>
    {children}
  </Card>
);

export default NeomorphicCard;
