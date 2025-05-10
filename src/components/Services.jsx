// /src/components/Services.js
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

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const Services = () => (
  <ServicesWrapper id="services">
    <motion.h2
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Services
    </motion.h2>
    <ServiceBox variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      Web Development
    </ServiceBox>
    <ServiceBox variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      App Development
    </ServiceBox>
    <ServiceBox variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      AI Solutions
    </ServiceBox>
  </ServicesWrapper>
);

export default Services;
