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
     Accelerating business growth with smart technologies and impactful innovation.
    </Title>
    <p>Triple Technologies delivers smart, practical tech solutions that empower businesses to grow faster and work smarter—through innovative software, IT training, digital marketing, and reliable network services.</p>
  </HomeWrapper>
);

export default Home;
