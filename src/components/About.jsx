import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = styled.section`
  text-align: center;
  padding: 50px;
  background: #e8e8e8;
`;

const About = () => (
  <AboutSection id="about">
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      About Us
    </motion.h2>
    <p>
      Triple Technologies is dedicated to delivering innovative digital solutions that drive business success.
      Our expert team works tirelessly to transform ideas into reality.
    </p>
  </AboutSection>
);

export default About;
