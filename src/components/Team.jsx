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
  <TeamWrapper id="team">
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      Meet Our Team
    </motion.h2>
    <TeamCard whileHover={{ scale: 1.05 }}>Getachew Zemene</TeamCard>
    <TeamCard whileHover={{ scale: 1.05 }}>Tsegaselassie Kindye</TeamCard>
    <TeamCard whileHover={{ scale: 1.05 }}>Dagim Wondale</TeamCard>
  </TeamWrapper>
);

export default Team;
