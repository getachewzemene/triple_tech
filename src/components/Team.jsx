import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const TeamWrapper = styled.section`
  padding: 50px;
  background: white;
  text-align: center;
`;

const TeamCard = styled(motion.div)`
  padding: 20px;
  margin: 10px;
  background: #003366;
  color: white;
  border-radius: 8px;
  display: inline-block;
  width: 200px;
`;

const Team = () => (
  <TeamWrapper>
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      Meet Our Team
    </motion.h2>
    <TeamCard whileHover={{ scale: 1.05 }}>John Doe - CEO</TeamCard>
    <TeamCard whileHover={{ scale: 1.05 }}>Jane Smith - CTO</TeamCard>
    <TeamCard whileHover={{ scale: 1.05 }}>Mike Brown - Lead Developer</TeamCard>
  </TeamWrapper>
);

export default Team;
