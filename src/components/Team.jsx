import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaLaptopCode, FaBullhorn, FaPaintBrush } from "react-icons/fa"; // Import icons

const TeamWrapper = styled.section`
  padding: 50px;
  background: white;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add spacing between cards */
`;

const Heading = styled(motion.h2)`
  font-size: 32px;
  color: #003366;
  margin-bottom: -10px;
  text-align: center; /* Center the heading text */
`;

const TeamCard = styled(motion.div)`
  background: #fff;
  color: white;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgb(212, 194, 194); /* Add a border for better visibility */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  width: 250px;
  height: 180px; /* Set a fixed height for uniformity */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1); /* Smooth grow effect */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #003399;
    color: white;
  }

  .icon {
    font-size: 40px; /* Set icon size */
    margin-bottom: 10px; /* Add spacing below the icon */
    color: #0070f3; /* Icon color */
  }

   h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #003366; /* Heading color */
    transition: color 0.3s ease;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    text-align: justify; /* Justify text for better readability */
    text-align-last: start; /* Align text to the left */
    hyphens: auto; /* Enable hyphenation for better word wrapping */
    word-spacing: 0.5px; /* Adjust word spacing for better readability */
    flex-grow: 1; /* Ensures the description takes up available space */
    color: #333; /* Text color */
    transition: color 0.3s ease;
  }
  &:hover h3,
  &:hover p {
    color: #fff; /* Change header and body text color to white on hover */
  }
  &:hover .icon {
    color: #ffd700; /* Change icon color to white on hover */
  }
`;

const Team = () => (
  <>
  <Heading
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Meet Our Team
    </Heading>
  <TeamWrapper id="team">
    <TeamCard whileHover={{ scale: 1.05 }}>
      <FaBullhorn className="icon" />
      <h3>Tsegaselassie Kindye</h3>
      <p>CEO & Co-Founder</p>
    </TeamCard>
        <TeamCard whileHover={{ scale: 1.05 }}>
      <FaLaptopCode className="icon" />
      <h3>Getachew Zemene</h3>
      <p>CTO & Co-Founder</p>
    </TeamCard>
    <TeamCard whileHover={{ scale: 1.05 }}>
      <FaPaintBrush className="icon" />
      <h3>Dagim Wondale</h3>
      <p>CMO & Co-Founder</p>
    </TeamCard>
  </TeamWrapper>
  </>
);

export default Team;