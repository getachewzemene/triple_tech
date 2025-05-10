import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ServicesWrapper = styled.section`
  padding: 50px;
  background: white;
  text-align: center;
`;

const ServiceBox = styled(motion.div)`
  background: #003366;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  display: inline-block;
  width: 200px;
  cursor: pointer;
  &:hover {
    background: #ffd700;
    color: black;
  }
`;

const Services = () => (
  <ServicesWrapper>
    <motion.h2 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
      Our Services
    </motion.h2>
    <ServiceBox whileHover={{ scale: 1.1 }}>Web Development</ServiceBox>
    <ServiceBox whileHover={{ scale: 1.1 }}>App Development</ServiceBox>
    <ServiceBox whileHover={{ scale: 1.1 }}>AI Solutions</ServiceBox>
  </ServicesWrapper>
);

export default Services;
