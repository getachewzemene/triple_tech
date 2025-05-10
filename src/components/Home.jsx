import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HomeWrapper = styled.section`
  text-align: center;
  padding: 50px;
  background: #f5f5f5;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
`;

const Home = () => (
  <HomeWrapper id="home">
    <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Welcome to Triple Technologies
    </Title>
    <p>Innovating the future, one project at a time.</p>
  </HomeWrapper>
);

export default Home;
